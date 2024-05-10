import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import appThemeProvider from './theme/appThemeProvider';
import { ThemeProvider } from '@mui/material';

function NotFoundPage() {
    return (
      <ThemeProvider theme={appThemeProvider}>
        <Container style={{ marginTop: '100px' }}>
          <Typography variant="h1">
            404
          </Typography>
          <Typography variant="h5" gutterBottom>
            Page Not Found
          </Typography>
          <Button
            component={Link}
            to="/"
            variant="contained"
            color="primary"
          >
            Go Back Home
          </Button>
        </Container>
      </ThemeProvider>
    );
}

export default NotFoundPage;