import React, { useEffect, useState } from "react";

import { ActionHeader, Card, Page } from 'ui';
import { Grid } from '@mui/material';
import { BudgetService } from "api";
import { Table } from "../ui/molecules/table/Table.jsx";
import { Button } from '../ui/atoms/Button';
import { LocalizedDate } from "ui/atoms/LocalizedDate.jsx";
import { Money } from "ui/atoms/Money.jsx";
import { CategoryCell } from "ui/molecules/CategoryCell.jsx";
import { Loader } from "ui/atoms/Loader.jsx";
import { NoContent } from "ui/atoms/NoContent.jsx";
import { Error } from "ui/atoms/Error.jsx";
import AddIcon from '@mui/icons-material/Add';
import { AddNewBudgetRecord } from 'ui/organisms/AddNewBudgetRecord.modal';

export const BudgetPage = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [open, setOpen] = React.useState(false);
    
  const handleClose = () => setOpen(false);

  function onSubmit() {
    alert('budget submit');
  }
  function renderCreatedAt(content) {
    return LocalizedDate({ date: content.createdAt });
  }

  function renderCurrentSpending(content) {
    return <Money inCents={content.currentSpending} />;
  }

  function renderPlannedSpending(content) {
    return (<Money inCents={(Math.round(parseFloat(content.currentSpending * 100) / content.currentSpendingPercent))} />);
  }

  function renderStatus(content) {
    if (content.currentSpending === content.amountInCents) {
      return ("Wykorzystany");
    } else if (content.currentSpending > content.amountInCents) {
      return ("Przekroczone");
    } else
      return ("W normie");
  }

  function renderName(content) {
    return (<CategoryCell color={'#37bad7'} name={content.category.name} />);
  }

  function deleteAction(id) {
    BudgetService.remove({ ids: id })
      .then(() => {
        retrieveData();
      }
      )
      .catch(() => {
        setError(true);
      }
      );
  }

  const btnClick = () => {
    return (<Button variant={'contained'} onClick={()=>setOpen(true)} color={'primary'} startIcon={<AddIcon />}>
      Zdefiniuj budżet
    </Button>);
  }

  function getUniqueId(content) {
    return content.id;
  }

  const [headCells] = useState([
    {
      id: 1,
      label: "Nazwa",
      disablePadding: false,
      renderCell: renderName
    }, {
      id: 2,
      label: "Planowane wydatki",
      disablePadding: false,
      renderCell: renderPlannedSpending
    }, {
      id: 3,
      label: "Obecna kowota",
      disablePadding: false,
      renderCell: renderCurrentSpending
    },
    {
      id: 4,
      label: "Status",
      disablePadding: false,
      renderCell: renderStatus
    },
    {
      id: 5,
      label: "Data utworzenia",
      disablePadding: false,
      renderCell: renderCreatedAt
    }
  ]);

  async function retrieveData() {
    setLoading(true);
    BudgetService.findAll()
      .then(result => {
        // po otrzymaniu odpowiedzi - zrob cos z obiektem result
        result && setResults(result);
      })
      .catch(() => {
        // obsluga erroru
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    retrieveData()
  }, []);

  return (
    <Page title="Budżet">
      <Card
        title={
          <ActionHeader
            variant={'h1'}
            title="Budżet"
            renderActions={btnClick}
          />
        }
      >
        
          <AddNewBudgetRecord
            open={open}
            onClose={handleClose}
            onSubmit={onSubmit}
            title={"Zdefiniuj budżet"}
          >
            no content
          </AddNewBudgetRecord>
          
        <Grid container>
          <Grid item xs={12}>
            {/*Logika wyswietlania */}
            {loading ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}><Loader /></div>
              :
              (error ? (<Error />) : results && results.length > 0 ?
                <Table
                  headCells={headCells}
                  getUniqueId={getUniqueId}
                  rows={results}
                  deleteRecords={deleteAction}
                /> : <NoContent />)
            }
          </Grid>
        </Grid>
      </Card>
    </Page>
  );
};
