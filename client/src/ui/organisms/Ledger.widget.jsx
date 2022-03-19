import React from 'react';

import { ActionHeader, Card } from 'ui';
import { Button } from 'ui/atoms/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Loader } from "ui/atoms/Loader.jsx";
import { NoContent } from "ui/atoms/NoContent.jsx";
import { Error } from "ui/atoms/Error.jsx";
import { Table } from "ui/molecules/table/Table.jsx";
import Flexbox from 'flexbox-react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { LEDGER_QUERY } from 'queryKeys';
import { LocalizedDate } from "ui/atoms/LocalizedDate.jsx";
import { Money } from "ui/atoms/Money.jsx";
import { CategoryCell } from "ui/molecules/CategoryCell.jsx";
import { LedgerService } from "api";
import { AddNewLedgerRecord } from 'ui/organisms/AddNewLedgerRecord.modal';
//import { useFormState } from "react-use-form-state";
export const LedgerWidget = () => {
     

  const [open, setOpen] = React.useState(false);
  const [content, setContent] = React.useState("content");
  const [selectedType, setSelectedType] = React.useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function onSubmit(input) {
    LedgerService.create({ requestBody:input})
    .then(result => {
      handleClose();
      queryClient.refetchQueries([LEDGER_QUERY]);
      return true;
    })
    .catch(() => {
        // obsluga erroru
        
    });
   
  }

  function openSelectedType(type) {
    setSelectedType(type);
    setOpen(true);
  }

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery(LEDGER_QUERY, () =>
    LedgerService.findAll(),
  );


  const mutation = useMutation((ids) => LedgerService.remove({ ids }), {
    onSuccess: async () => {
      await queryClient.refetchQueries([LEDGER_QUERY]);
    },
  });


  const deleteRecords = (ids) => mutation.mutate(ids);

  function renderAmount(row) {
    switch (row.mode) {

      case 'EXPENSE':
        return (<span style={{ color: "#F00" }} >
          <Money inZloty={- row.amountInCents} />
        </span>);

      case 'INCOME':
        return (<span style={{ color: "#0F0" }}>
          <Money inZloty={"+" + row.amountInCents} />
        </span >);

      default:
        return (
          <Money inZloty={row.amountInCents} />
        );
    };
  };

  const headCells = [
    {
      id: 'name',
      label: 'Nazwa',
      renderCell: (row) => (
        <CategoryCell name={row.title} />
      ),
    },
    {
      id: 'category',
      label: 'Kategoria',    //czy nagłówi pogrubić?
      renderCell: (row) => (
        <CategoryCell color={row.category?.color} name={row.category?.name} />
      ),
    },
    {
      id: 'createdAt',
      label: 'Data',
      renderCell: (row) => <LocalizedDate date={row.createdAt} />,
    },
    {
      id: 'amount',
      label: 'Kwota',
      renderCell: renderAmount
    },
  ];

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  if (!data?.length) {
    return <NoContent />;
  }

  return (
    <Card
      title={
        <ActionHeader
          variant={'h1'}
          title="Portfel"
          renderActions={() =>
            <Flexbox flexDirection="row" justifyContent="flex-end">
              <Button 
              variant="outlined" 
              startIcon={<AddIcon />} 
              onClick={() => openSelectedType('INCOME')} 
              >
                Wpłać
              </Button>

              <Button 
              variant="outlined" 
              startIcon={<RemoveIcon />} 
              onClick={() => openSelectedType('EXPENSE')}>
                Wypłać
              </Button>
            </Flexbox>
          }
        />
      }
    >
      <AddNewLedgerRecord
        open={open}
        onClose={handleClose}
        onSubmit={data=>onSubmit(data)}
        type={selectedType}
      >
        {content}
      </AddNewLedgerRecord>

      <Table
        rows={data}
        headCells={headCells}
        getUniqueId={(row) => row.id}
        deleteRecords={deleteRecords}
      />
    </Card>
  );
};
