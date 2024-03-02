import Typography from '@mui/material/Typography';
import { Container, Button } from '@mui/material';

function ErrorPage() {

  return (
    <Container>
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
  );
}

export default ErrorPage;