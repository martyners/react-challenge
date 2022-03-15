import React, { useState, useEffect } from 'react';
import { Modal } from "ui/molecules/Modal";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { CategoryCell } from "ui/molecules/CategoryCell.jsx";
import { CategoryService } from "api/services/CategoryService";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

export function AddNewLedgerRecord({ open, onClose, onSubmit, type, children, }) {

    const [name, setName] = useState('');
    const [amount, setAmount] = useState();
    const [selectedCategory, setSelectedCategory] = useState('0');
    const [errorNameMessage, setErrorNameMessage] = useState();
    const [errorAmountMessage, setErrorAmountMessage] = useState();
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        retrieveCategories()
    }, []);

    async function retrieveCategories() {
        setLoading(true);
        CategoryService.findAll()
            .then(result => {
                result && setCategories(result);
            })
            .catch(() => {

            })
            .finally(() => {
                setLoading(false);
            });
    }

    const titleContent = (type) => {
        if (type === "INCOME") {
            return "Dodaj wpływ"
        } else if (type === "EXPENSE") {
            return "Dodaj wydatek"
        }
    }

    function validateForm() {
        if (type === "EXPENSE") {
            return !(name !== '' && amount > 0 && errorAmountMessage === null && selectedCategory !== '0');
        }

        else if (type === "INCOME") {
            return !(name !== '' && amount > 0 && errorAmountMessage === null);
        }
    }

    function checkInput(name) {
        let nameToTrim = name.trim();
        if (nameToTrim.length > 0) {
            setErrorNameMessage(null);
            setName(name)
        } else {
            setName('');
            setErrorNameMessage("Nazwa nie może być pusta")
        }
    }

    function checkAmount(amount) {
        if (amount === 0 || !amount) {
            setErrorAmountMessage("Kwota nie może być pusta");
            setAmount('');
        } else if (amount < 0) {
            setErrorAmountMessage("Kwota musi być większa niż 0")
            setAmount(amount);
        } else if (amount > 1000000) {
            setErrorAmountMessage("Kwota nie może być większa niż 1000000")
            setAmount(amount);
        } else {
            setAmount(amount);
            setErrorAmountMessage(null);
        }
    }

    function clearData() {
        setName("");
        setSelectedCategory('0');
        setAmount(null);
        setErrorNameMessage(null);
        setErrorAmountMessage(null);
    }

    function closeModal() {
        clearData();
        onClose();
    }
    function submitData() {
        onSubmit({
            mode: type,
            title: name,
            amountInCents: parseFloat(amount),
            categoryId: selectedCategory
        })
        clearData()
    }

    return (<Modal
        open={open}
        onClose={closeModal}
        onSubmit={() =>
            submitData()
        }
        isDisabled={validateForm}
        description={titleContent(type)}
    >
        {
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1.5, width: 300 },
                }}
                autoComplete="off"
            >
                <>
                    <TextField
                        fullWidth
                        id="name"
                        label="Nazwa"
                        InputLabelProps={{
                            style: { color: '#000' },
                        }}
                        value={name}
                        inputProps={{ pattern: '[a-z]' }}
                        onChange={e => checkInput(e.target.value)}
                        helperText={errorNameMessage}
                    />

                    <TextField
                        fullWidth
                        label="Kwota"
                        value="Kwota"
                        InputLabelProps={{
                            style: { color: '#000' },
                        }}
                        type="number"
                        value={amount}
                        helperText={errorAmountMessage}
                        onChange={e => checkAmount(e.target.value)}
                        inputProps={{
                            step: 0.01,
                        }}
                    />
                    {(type === "EXPENSE") &&
                        <FormControl sx={{ m: 1.5, width: 300, }}>
                            <InputLabel id="demo-simple-select-label">Wybierz kategorię</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select-autowidth"
                                value={selectedCategory}
                                onChange={e => setSelectedCategory(e.target.value)}
                                autoWidth
                                label="Kategoria"
                                defaultValue="Kategoria"
                                placeholder='Kategoria'
                            >

                                {!loading && categories &&
                                    categories.map(category => {
                                        return <MenuItem value={category.id}><CategoryCell
                                            color={category.color}
                                            name={category.name} /></MenuItem>
                                    })}
                            </Select>
                        </FormControl>
                    }
                </>
            </Box>
        }
    </Modal >);

}