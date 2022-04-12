import * as React from 'react';
import { useEffect, useState } from 'react';
import { Button } from 'ui/atoms/Button';
import { Modal as MUIModal } from '@mui/material';
import { CardHeader } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Flexbox from 'flexbox-react';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@material-ui/core/Slide';

export function Modal({
  open,
  onClose,
  onSubmit,
  description,
  children,
  isDisabled,
}) {
  const [open2, setOpen2] = useState(false);

  const cardStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  const titleStyle = {
    fontWeight: 'bold',
  };

  return (
    <MUIModal
      open={open}
      onBackdropClick={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card sx={cardStyle}>
        <CardHeader title={<h4>{description}</h4>} sx={titleStyle} />
        <CardContent>{children}</CardContent>
        <Flexbox flexDirection="row" justifyContent="flex-end">
          <CardActions>
            <Button variant="outlined" size="small" onClick={onClose}>
              Anuluj
            </Button>

            <Button
              variant="contained"
              size="small"
              onClick={() => setOpen2(true) && onSubmit}
              disabled={isDisabled()}
            >
              Zapisz
            </Button>

            {open2 && (
              <Snackbar
                open={open2}
                autoHideDuration={5000}
                // TransitionComponent={props => <Slide {...props} direction="left" />}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                onClose={() => setOpen2(false)}
              >
                <MuiAlert
                  elevation={6}
                  variant="filled"
                  severity="success"
                  sx={{ width: '100%' }}
                >
                  Alert content!
                </MuiAlert>
              </Snackbar>
            )}
          </CardActions>
        </Flexbox>
      </Card>
    </MUIModal>
  );
}
