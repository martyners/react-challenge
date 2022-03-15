import React, { useState, useEffect } from 'react';
import { Modal } from "ui/molecules/Modal";
import { CategoryService } from "api/services/CategoryService";
import { CategoryCell } from "ui/molecules/CategoryCell.jsx";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export function AddNewBudgetRecord({ open, onClose, onSubmit, title, type, children, }) {

    const [amount, setAmount] = useState();
    const [selectedCategory, setSelectedCategory] = useState('0');
    const [errorAmountMessage, setErrorAmountMessage] = useState();
    const [errorCategoryMessage, setErrorCategoryMessage] = useState();
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        retrieveCategories()
    }, []);

    async function retrieveCategories() {
        setLoading(true);
        CategoryService.findAll(true)
            .then(result => {
                // po otrzymaniu odpowiedzi - zrob cos z obiektem result
                result && setCategories(result);
            })
            .catch(() => {
                // obsluga erroru
            })
            .finally(() => {
                setLoading(false);
            });
    }

    function validateForm() {
        return !(selectedCategory !== '0' && amount > 0 && errorAmountMessage === null);
    }

    function checkAmount(amount) {
        if (amount === 0) {
            setErrorAmountMessage("Kwota nie może być pusta");
            setAmount(amount);
        } else if (amount < 0) {
            setErrorAmountMessage("Kwota musi być większa niż 0")
            setAmount(amount);
        } else if (amount > 1000000) {
            setErrorAmountMessage("Kwota nie może być większa niż 1000000")
            setAmount(amount);
        } else {
            setAmount(parseFloat(amount));
            setErrorAmountMessage(null);
        }
    }

    function checkCategory(selectedCategory) {
        if (selectedCategory === "") {
            setErrorCategoryMessage("Wybierz kategorię")
        } else {
            setSelectedCategory(selectedCategory);
            setErrorCategoryMessage(null);
        }
    }

    function clearData() {
        setSelectedCategory('0');
        setAmount(null);
        setErrorCategoryMessage(null);
        setErrorAmountMessage(null);
    }

    function submitData() {
        onSubmit({
            mode: type,
            amountInCents: amount,
            categoryId: selectedCategory
        })
        clearData()
    }

    function closeModal() {
        clearData();
        onClose();
    }

    return (<Modal
        open={open}
        onClose={closeModal}
        onSubmit={() =>
            submitData()
        }
        isDisabled={validateForm}
        description={title}
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
                        label="Kwota"
                        InputLabelProps={{
                            style: { color: '#000' },
                        }}
                        type="number"
                        value={amount}
                        helperText={errorAmountMessage}
                        onChange={e => checkAmount(e.target.value)}
                        inputProps={{
                            step: 0.01,
                            min: 0,
                            max: 99999,
                            type: 'number',
                        }}
                    />
                    {
                        <FormControl sx={{ m: 1.5, width: 300, }}>
                            <InputLabel id="demo-simple-select-label">Wybierz kategorię</InputLabel>
                            <Select

                                labelId="demo-simple-select-label"
                                id="demo-simple-select-autowidth"
                                value={selectedCategory}
                                helperText={errorCategoryMessage}
                                onChange={e => checkCategory(e.target.value)}
                                autoWidth
                                label="Kategoria"
                                defaultValue="Kategoria"
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