import * as React from 'react';
import { Button as MuiButton } from '@mui/material';
import { createTheme } from '@mui/material';

let style = createTheme({
  shadows: ["none"],
  components: {

    //overwriting the entire component MuiButton
    MuiButton: {
      styleOverrides: { // override styles for root button

        root: { // muibutton-root overwriting
          paddingLeft: 15,
          paddingRight: 15,
          minWidth: 25,
          textTransform: 'none',
          marginRight: 20,
          fontSize: 15,
          align: 'midle',
        },
      },
      variants: [
        { //global disabled - contained
          props: { variant: "contained" },
          style: {
            "&:disabled": {
              backgroundColor: "#f1f1f1",
            },
          },
        },

        {
          props: { variant: "outlined" },
          style: {
            "&:disabled": {
              backgroundColor: "#ffffff",
              border: "1px solid #f1f1f1",
              color: "#cccccc",
            },
          }, 
        },

        {
          props: { variant: "contained", color: "primary" },
          style: {
            color: "#FFF",
            backgroundColor: "#334ACC",

            "&:hover": {
              color: "#E8EAF6",
              backgroundColor: "#223289",
            },
            "&:active": {
              color: "#E8EAF6",
              backgroundColor: "#223289",
            },
          },
        },

        {
          props: { variant: "outlined", color: "primary" },
          style: {
            color: "#334ACC",
            backgroundColor: "#E8EAF6",
            border: "1px solid #E8EAF6",
            "&:hover": {
              color: "#223289",
              backgroundColor: "#C5CAE9",
              border: "1px solid #E8EAF6",
            },
            "&:active": {
              color: "#223289",
              backgroundColor: "#C5CAE9",
              border: "1px solid #E8EAF6",
            },
            "&:disabled": {
              border: "1px solid #f1f1f1",
              backgroundColor: "#f1f1f1",
            },
          },
        },
        {
          props: { variant: "contained", color: "error" },
          style: {
            color: "#FF5D5D",
            backgroundColor: "#FCECE6",
            "&:hover": {
              color: "#FCECE6",
              backgroundColor: "#FF5D5D",
            },
            "&:active": {
              color: "#FF5D5D",
              backgroundColor: "#FCECE6",
            },
          },
        },
        {
          props: { variant: "outlined", color: "error" },
          style: {
            backgroundColor: "#FFF",
            color: "#FF5D5D",
            border: "1px solid #FF5D5D",
            "&:hover": {
              border: "1px solid #FF5D5D",
              backgroundColor: "#FDE8E0",
              color: "#FF5D5D",
            },
            "&:active": {
              border: "1px solid #FF5D5D",
              backgroundColor: "#FDE8E0",
              color: "#FF5D5D",
            },
          },
        },
        {
          props: { variant: "contained", color: "success" },
          style: {
            color: "#00a97f",
            backgroundColor: "#dbebdb",
            "&:hover": {
              color: "#FCECE6",
              backgroundColor: "#00a97f",
            },
            "&:active": {
              color: "#00a97f",
              backgroundColor: "#dbebdb",
            },
          },
        },
        {
          props: { variant: "outlined", color: "success" },
          style: {
            backgroundColor: "#FFF",
            color: "#00a97f",
            border: "1px solid #79c37d",
            "&:hover": {
              border: "1px solid #79c37d",
              backgroundColor: "#dbebdb",
              color: "#00a97f",
            },
            "&:active": {
              border: "1px solid #79c37d",
              backgroundColor: "#dbebdb",
              color: "#00a97f",
            },
          },
        },
        {
          props: { variant: "contained", color: "warning" },
          style: {
            color: "#b28d09",
            backgroundColor: "#fff5d2",
            "&:hover": {
              color: "#FFF",
              backgroundColor: "#ffa826",
            },
            "&:active": {
              color: "#b28d09",
              backgroundColor: "#fff5d2",
            },
          },
        },
        {
          props: { variant: "outlined", color: "warning" },
          style: {
            backgroundColor: "#FFF",
            color: "#ffa826",
            border: "1px solid #ffa826",
            "&:hover": {
              border: "1px solid #ffa826",
              backgroundColor: "#fff5d2",
              color: "#ffa826",
            },
            "&:active": {
              border: "1px solid #ffa826",
              backgroundColor: "#fff5d2",
              color: "#ffa826",
            },
          },
        },
      ],
    },
  },
});

export function Button({ children, ...props }) {
  return <MuiButton
    disableRipple
    theme={style}
    {...props}>{children}
  </MuiButton>;
}
