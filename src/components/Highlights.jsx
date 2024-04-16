import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Effortless Efficiency',
    description:
      'Empower your productivity journey with seamless integration of Pomodoro, Todolist, Kanban, and note-taking features tailored for your everyday workflow.',
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: 'Built to Empower',
    description:
      'Experience robust functionality designed to elevate your daily workflow, ensuring lasting value and performance.',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'Intuitive Interface',
    description:
      'Navigate effortlessly through your tasks with an interface intuitively designed to enhance your user experience, backed by responsive design for optimal accessibility.',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'Reliable Solutions',
    description:
      'Stay at the forefront of productivity with reliable features that anticipate and address your unique challenges and objectives.',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'User-Focused Design',
    description:
      'Prioritize user satisfaction with a design tailored to meet the needs of users, ensuring intuitive usability and seamless integration into your workflow.',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Crafted for Success',
    description:
      'Discover the precision and attention to detail in every feature, meticulously crafted to enhance your productivity and streamline your goal achievement process.',
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4">
            Highlights
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Explore why Silk stands out: adaptability, efficiency,
            user-friendly design, and reliability. Enjoy a product crafted for success and
            built to empower you to your goals.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.800',
                  background: 'transparent',
                  backgroundColor: 'grey.900',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}