import React from 'react';

import { Button } from '../ui';
import { Grid, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Zadanie 1/Button',
  component: Button,
  description: 'ahaha',
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      control: {
        type: 'radio',
      },
      options: ['contained', 'outlined'],
    },
    size: {
      control: {
        type: 'radio',
      },
      options: ['large', 'medium', 'small'],
    },
    color: {
      control: {
        type: 'radio',
      },
      options: ['primary', 'error', 'success', 'warning'],
    },
    disabled: {
      control: {
        default: false,
        type: 'boolean',
      },
    },
  },
};

const onClickAction = () => {
  alert('Klik');
}
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => <Button {...args}>{label}</Button>;
const All = () => (
  <>
    <Grid container>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <Typography variant={'subheading'}>Contained</Typography>
      </Grid>
      <Button onClick={onClickAction} variant={'contained'} color={'primary'}>
        Button
      </Button>
      <Button onClick={onClickAction} variant={'contained'} color={'primary'} startIcon={<AddIcon fontSize="small" />} >
        Button
      </Button>
      <Button sx={{ pl: 3 }} onClick={onClickAction} variant={'contained'} color={'primary'} endIcon={<KeyboardArrowRightIcon fontSize="small" />}>
        Button
      </Button >
      <Button sx={{ px: 1 }} onClick={onClickAction} variant={'contained'} color={'primary'}>
        <KeyboardArrowRightIcon fontSize="small" />
      </Button>

      <Button onClick={onClickAction} variant={'contained'} color={'primary'} disabled={true}>
        Button
      </Button>
      <Button onClick={onClickAction} variant={'contained'} color={'primary'} disabled={true} startIcon={<AddIcon fontSize="small" />} >
        Button
      </Button>
      <Button sx={{ pl: 3 }} onClick={onClickAction} variant={'contained'} color={'primary'} disabled={true} endIcon={<KeyboardArrowRightIcon fontSize="small" />}>
        Button
      </Button>
      <Button sx={{ px: 1 }} onClick={onClickAction} variant={'contained'} color={'primary'} disabled={true}>
        <KeyboardArrowRightIcon fontSize="small" />
      </Button>

      <Grid item xs={12} sx={{ mb: 2 }}>
      </Grid>
      <Button onClick={onClickAction} variant={'contained'} color={'error'}>
        Button
      </Button>
      <Button onClick={onClickAction} variant={'contained'} color={'error'} startIcon={<AddIcon fontSize="small" />}>
        Button
      </Button>
      <Button sx={{ pl: 3 }} onClick={onClickAction} variant={'contained'} color={'error'} endIcon={<KeyboardArrowRightIcon fontSize="small" />}>
        Button
      </Button>
      <Button sx={{ px: 1 }} onClick={onClickAction} variant={'contained'} color={'error'}>
        <KeyboardArrowRightIcon fontSize="small" />
      </Button>
      <Button onClick={onClickAction} variant={'contained'} color={'error'} disabled={true}>
        Button
      </Button>
      <Button onClick={onClickAction} variant={'contained'} color={'error'} disabled={true} startIcon={<AddIcon fontSize="small" />}>
        Button
      </Button>
      <Button sx={{ pl: 3 }} onClick={onClickAction} variant={'contained'} color={'error'} disabled={true} endIcon={<KeyboardArrowRightIcon fontSize="small" />}>
        Button
      </Button>
      <Button sx={{ px: 1 }} onClick={onClickAction} variant={'contained'} color={'error'} disabled={true}>
        <KeyboardArrowRightIcon fontSize="small" />
      </Button>

      <Grid item xs={12} sx={{ mb: 2 }}>
      </Grid>
      <Button onClick={onClickAction} variant={'contained'} color={'success'}>
        Button
      </Button>
      <Button onClick={onClickAction} variant={'contained'} color={'success'} startIcon={<AddIcon fontSize="small" />}>
        Button
      </Button>
      <Button sx={{ pl: 3 }} onClick={onClickAction} variant={'contained'} color={'success'} endIcon={<KeyboardArrowRightIcon fontSize="small" />}>
        Button
      </Button>
      <Button sx={{ px: 1 }} onClick={onClickAction} variant={'contained'} color={'success'}>
        <KeyboardArrowRightIcon fontSize="small" />
      </Button>
      <Button onClick={onClickAction} variant={'contained'} color={'success'} disabled={true}>
        Button
      </Button>
      <Button onClick={onClickAction} variant={'contained'} color={'success'} disabled={true} startIcon={<AddIcon fontSize="small" />}>
        Button
      </Button>
      <Button sx={{ pl: 3 }} onClick={onClickAction} variant={'contained'} color={'success'} disabled={true} endIcon={<KeyboardArrowRightIcon fontSize="small" />}>
        Button
      </Button>
      <Button sx={{ px: 1 }} onClick={onClickAction} variant={'contained'} color={'success'} disabled={true}>
        <KeyboardArrowRightIcon fontSize="small" />
      </Button>

      <Grid item xs={12} sx={{ mb: 2 }}>
      </Grid>
      <Button onClick={onClickAction} variant={'contained'} color={'warning'}>
        Button
      </Button>
      <Button onClick={onClickAction} variant={'contained'} color={'warning'} startIcon={<AddIcon fontSize="small" />}>
        Button
      </Button>
      <Button sx={{ pl: 3 }} onClick={onClickAction} variant={'contained'} color={'warning'} endIcon={<KeyboardArrowRightIcon fontSize="small" />}>
        Button
      </Button>
      <Button sx={{ px: 1 }} onClick={onClickAction} variant={'contained'} color={'warning'} >
        <KeyboardArrowRightIcon fontSize="small" />
      </Button>
      <Button onClick={onClickAction} variant={'contained'} color={'warning'} disabled={true}>
        Button
      </Button>
      <Button onClick={onClickAction} variant={'contained'} color={'warning'} disabled={true} startIcon={<AddIcon fontSize="small" />}>
        Button
      </Button>
      <Button sx={{ pl: 3 }} onClick={onClickAction} variant={'contained'} color={'warning'} disabled={true} endIcon={<KeyboardArrowRightIcon fontSize="small" />}>
        Button
      </Button>
      <Button sx={{ px: 1 }} onClick={onClickAction} variant={'contained'} color={'warning'} disabled={true}>
        <KeyboardArrowRightIcon fontSize="small" />
      </Button>
    </Grid>

    <Grid container sx={{ mt: 5 }}>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <Typography variant={'subheading'}>Outlined</Typography>
      </Grid>
      <Button onClick={onClickAction} variant={'outlined'} color={'primary'}>
        Button
      </Button>
      <Button onClick={onClickAction} variant={'outlined'} color={'primary'} startIcon={<AddIcon fontSize="small" />}>
        Button
      </Button>
      <Button sx={{ pl: 3 }} onClick={onClickAction} variant={'outlined'} color={'primary'} endIcon={<KeyboardArrowRightIcon fontSize="small" />}>
        Button
      </Button>
      <Button sx={{ px: 1 }} onClick={onClickAction} variant={'outlined'} color={'primary'}>
        <KeyboardArrowRightIcon fontSize="small" />
      </Button>
      <Button onClick={onClickAction} variant={'outlined'} color={'primary'} disabled={true}>
        Button
      </Button>
      <Button onClick={onClickAction} variant={'outlined'} color={'primary'} disabled={true} startIcon={<AddIcon fontSize="small" />}>
        Button
      </Button>
      <Button sx={{ pl: 3 }} onClick={onClickAction} variant={'outlined'} color={'primary'} disabled={true} endIcon={<KeyboardArrowRightIcon fontSize="small" />}>
        Button
      </Button>
      <Button sx={{ px: 1 }} onClick={onClickAction} variant={'outlined'} color={'primary'} disabled={true}>
        <KeyboardArrowRightIcon fontSize="small" />
      </Button>

      <Grid item xs={12} sx={{ mb: 2 }}>
      </Grid>
      <Button onClick={onClickAction} variant={'outlined'} color={'error'}>
        Button
      </Button>
      <Button onClick={onClickAction} variant={'outlined'} color={'error'} startIcon={<AddIcon fontSize="small" />}>
        Button
      </Button>
      <Button sx={{ pl: 3 }} onClick={onClickAction} variant={'outlined'} color={'error'} endIcon={<KeyboardArrowRightIcon fontSize="small" />}>
        Button
      </Button>
      <Button sx={{ px: 1 }} onClick={onClickAction} variant={'outlined'} color={'error'}>
        <KeyboardArrowRightIcon fontSize="small" />
      </Button>
      <Button onClick={onClickAction} variant={'outlined'} color={'error'} disabled={true}>
        Button
      </Button>
      <Button onClick={onClickAction} variant={'outlined'} color={'error'} disabled={true} startIcon={<AddIcon fontSize="small" />}>
        Button
      </Button>
      <Button sx={{ pl: 3 }} onClick={onClickAction} variant={'outlined'} color={'error'} disabled={true} endIcon={<KeyboardArrowRightIcon fontSize="small" />}>
        Button
      </Button>
      <Button sx={{ px: 1 }} onClick={onClickAction} variant={'outlined'} color={'error'} disabled={true}>
        <KeyboardArrowRightIcon fontSize="small" />
      </Button>

      <Grid item xs={12} sx={{ mb: 2 }}>
      </Grid>
      <Button onClick={onClickAction} variant={'outlined'} color={'success'}>
        Button
      </Button>
      <Button onClick={onClickAction} variant={'outlined'} color={'success'} startIcon={<AddIcon fontSize="small" />}>
        Button
      </Button>
      <Button sx={{ pl: 3 }} onClick={onClickAction} variant={'outlined'} color={'success'} endIcon={<KeyboardArrowRightIcon fontSize="small" />}>
        Button
      </Button>
      <Button sx={{ px: 1 }} onClick={onClickAction} variant={'outlined'} color={'success'}>
        <KeyboardArrowRightIcon fontSize="small" />
      </Button>
      <Button onClick={onClickAction} variant={'outlined'} color={'success'} disabled={true}>
        Button
      </Button>
      <Button onClick={onClickAction} variant={'outlined'} color={'success'} disabled={true} startIcon={<AddIcon fontSize="small" />}>
        Button
      </Button>
      <Button sx={{ pl: 3 }} onClick={onClickAction} variant={'outlined'} color={'success'} disabled={true} endIcon={<KeyboardArrowRightIcon fontSize="small" />}>
        Button
      </Button>
      <Button sx={{ px: 1 }} onClick={onClickAction} variant={'outlined'} color={'success'} disabled={true} >
        <KeyboardArrowRightIcon fontSize="small" />
      </Button>

      <Grid item xs={12} sx={{ mb: 2 }}>
      </Grid>
      <Button onClick={onClickAction} variant={'outlined'} color={'warning'}>
        Button
      </Button>
      <Button onClick={onClickAction} variant={'outlined'} color={'warning'} startIcon={<AddIcon fontSize="small" />}>
        Button
      </Button>
      <Button sx={{ pl: 3 }} onClick={onClickAction} variant={'outlined'} color={'warning'} endIcon={<KeyboardArrowRightIcon fontSize="small" />}>
        Button
      </Button>
      <Button sx={{ px: 1 }} onClick={onClickAction} variant={'outlined'} color={'warning'}>
        <KeyboardArrowRightIcon fontSize="small" />
      </Button>
      <Button onClick={onClickAction} variant={'outlined'} color={'warning'} disabled={true}>
        Button
      </Button>
      <Button onClick={onClickAction} variant={'outlined'} color={'warning'} disabled={true} startIcon={<AddIcon fontSize="small" />}>
        Button
      </Button>
      <Button sx={{ pl: 3 }} onClick={onClickAction} variant={'outlined'} color={'warning'} disabled={true} endIcon={<KeyboardArrowRightIcon fontSize="small" />}>
        Button
      </Button>
      <Button sx={{ px: 1 }} onClick={onClickAction} variant={'outlined'} color={'warning'} disabled={true}>
        <KeyboardArrowRightIcon fontSize="small" />
      </Button>
    </Grid>
  </>
);

export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  label: 'Button',
};

export const AllStories = All.bind({});
