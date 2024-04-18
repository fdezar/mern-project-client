import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';

const userTestimonials = [
  {
    avatar: <Avatar alt="John Doe" src="/src/assets/images/landing-page/testimonials-user-1.jpg" />,
    name: 'John Doe',
    occupation: 'Front End Developer',
    testimonial:
      "Using Silk has been a game-changer for me as a web developer. The Pomodoro timer keeps me focused during intense coding sessions, while the Kanban board effortlessly organizes my tasks. Plus, the note-saving feature ensures I never forget any crucial ideas. It's truly a lifesaver!",
  },
  {
    avatar: <Avatar alt="Lisa Miller" src="/src/assets/images/landing-page/testimonials-user-2.jpg" />,
    name: 'Lisa Miller',
    occupation: 'Data Scientist',
    testimonial:
      "I've tried numerous productivity tools, but none compare to this one tailored for everyday productivity. The Pomodoro technique has revolutionized how I manage my time, helping me strike the perfect balance between work and breaks.",
  },
  {
    avatar: <Avatar alt="Sara Williams" src="/src/assets/images/landing-page/testimonials-user-3.jpg" />,
    name: 'Sara Williams',
    occupation: 'Back End Developer',
    testimonial:
      'As a busy web developer, staying organized is key to my success. Thanks to Silk, I can seamlessly integrate the Pomodoro technique into my workflow, boosting my productivity levels significantly.',
  },
  {
    avatar: <Avatar alt="John Smith" src="/src/assets/images/landing-page/testimonials-user-4.jpeg" />,
    name: 'John Smith',
    occupation: 'UX/UI Designer',
    testimonial:
      "I've been using Silk for a while now, and it's been a total game-changer for my UX/UI projects. The Pomodoro timer keeps me disciplined and prevents burnout, while the Kanban board allows me to visualize my workflow and make adjustments as needed. It's like having a personal productivity coach!",
  },
  {
    avatar: <Avatar alt="David Brown" src="/src/assets/images/landing-page/testimonials-user-5.jpg" />,
    name: 'David Brown',
    occupation: 'Full Stack Developer',
    testimonial:
      "Since incorporating Silk into my routine, I've seen a remarkable improvement in my productivity as a web developer. The Pomodoro timer helps me stay focused and motivated, while the Kanban Drag and Drop feature keeps me organized and on track with my tasks.",
  },
  {
    avatar: <Avatar alt="Emily Davis" src="/src/assets/images/landing-page/testimonials-user-6.jpg" />,
    name: 'Emily Davis',
    occupation: 'Program Manager',
    testimonial:
      "Being a Program Manager means juggling multiple tasks at once, but Silk has made it much more manageable. The Pomodoro technique helps me stay focused and productive throughout the day, while the Kanban Drag and Drop feature ensures I never lose sight of my everyday goals.",
  },
];

const whiteLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg',
];

const darkLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg',
];

const logoStyle = {
  width: '64px',
  opacity: 0.3,
};

export default function Testimonials() {
  const theme = useTheme();
  const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
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
        <Typography component="h2" variant="h4" color="text.primary">
          Testimonials
        </Typography>
        <Typography variant="body1" color="text.secondary">
        Real Stories, Real Results: Embark on a Journey Through the Experiences of Fellow Developers as They Share Insights, Triumphs, and Transformative Moments from Their Productivity Journey with Silk.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  pr: 2,
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
                {/* <img
                  src={logos[index]}
                  alt={`Logo ${index + 1}`}
                  style={logoStyle}
                /> */}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}