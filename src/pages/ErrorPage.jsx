import Typography from '@mui/material/Typography';
import { Container, Button } from '@mui/material';
import appThemeProvider from './theme/appThemeProvider';
import { ThemeProvider } from '@mui/material';

function ErrorPage() {

  return (
    <ThemeProvider theme={appThemeProvider}>
      <Container style={{ marginTop: '100px' }}>
        <Typography variant="h1">
          Oops!
        </Typography>
        <Typography variant="h5" gutterBottom>
          Something went wrong.
        </Typography>
        <Button
          href="/"
          variant="contained"
          color="primary"
        >
          Go Back Home
        </Button>
      </Container>
    </ThemeProvider>
  );
}

export default ErrorPage;