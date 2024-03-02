import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <Container>
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
    );
}

export default NotFoundPage;