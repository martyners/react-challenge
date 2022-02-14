import { Box, Typography } from '@mui/material';
import error_img from '../../assets/unknown_error.png';

const mainContainer = {
  "display": 'flex',
  "flexDirection": 'column',
  "justifyContent": 'center',
  "alignItems": 'center',
  "alignContent": 'center',
};

const ImageDisplay = () => (
  (
    <div
      style={mainContainer}
    >
      <img src={error_img} />
      <p style={{ color: "grey" }}>
        Wystąpił nieoczekiwany błąd
      </p>
    </div>)
);

export const Error = ({ error }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {
        error?.message?.includes('Network Error') ? (
          <Typography>Uruchom Server!</Typography>
        ) : ImageDisplay() //  TODO in TASK 1
      }
    </Box>
  );
};