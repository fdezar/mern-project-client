import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const formThemeProvider = createTheme({
  palette: {
    primary: {
      main: "#4A49D3",
    },
    secondary: {
      main: '#675FD6',
    },
  },
});

export default formThemeProvider;