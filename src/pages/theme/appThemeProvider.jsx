import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const appThemeProvider = createTheme({
  palette: {
    primary: {
      main: "#4A49D3",
    },
    secondary: {
      main: '#675FD6',
    },
  },
});

export default appThemeProvider;