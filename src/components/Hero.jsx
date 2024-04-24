import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #C8C6F4, #FFF)'
            : 'linear-gradient(#22265F, #090E10)',
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 28, sm: 27 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            component="h1"
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
            }}
          >
            Tasks &&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              Productivity
            </Typography>
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary">
           <br />
           Maximize Your Workflow with Silk. Elevate Your Everyday Efficiency with Streamlined Tools and Time Management Solutions.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: 'auto', sm: 'auto' } }}
          >  
            <Button variant="contained" color="primary" style={{ width: '110px'}}>
              <Link to='/signup' style={{ textDecoration: 'none', color: 'inherit' }}>
              Get Started
              </Link>
            </Button>
          </Stack>
        </Stack>
        <Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 8, sm: 10 },
            alignSelf: 'center',
            height: { xs: 200, sm: 700 },
            width: '100%',
            backgroundImage:
              theme.palette.mode === 'light'
                ? 'url("/src/assets/images/landing-page/dashboard.png")'
                : 'url("/src/assets/images/landing-page/dashboard.png")',
            backgroundSize: 'cover',
            borderRadius: '10px',
            outline: '1px solid',
            outlineColor:
              theme.palette.mode === 'light'
                ? alpha('#C8C6F4', 0.5)
                : alpha('#847CFC', 0.1),
            boxShadow:
              theme.palette.mode === 'light'
                ? `0 0 12px 8px ${alpha('#BAB8EF', 0.2)}`
                : `0 0 24px 12px ${alpha('#1407A9', 0.2)}`,
          })}
        />
      </Container>
    </Box>
  );
}