import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/auth.service';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Routes, Route, useLocation } from 'react-router-dom';
import DashboardPageContent from '../../components/DashboardPageContent';
import { mainListItems, secondaryListItems } from '../../components/DashboardItemList';
import MyProfilePage from '../auth/MyProfilePage';
import EditProfilePage from '../auth/EditProfilePage';
import EditPasswordPage from '../auth/EditPasswordPage'; 
import KanbanPage from "../../components/Kanban";
import NotesPage from './NotesPage';
import NoteCreatePage from './NoteCreatePage';
import NoteDetailsPage from './NoteDetailsPage';
import NoteEditPage from './NoteEditPage';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      backgroundColor: 'rgb(235, 235, 235)',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

function DashboardPageLayout() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [ myUser, setMyUser ] = useState(null);
  const location = useLocation();

  useEffect(() => {
    authService.getUserProfile()
    .then(res => {
        // console.log(res.data);
        setMyUser(res.data);
    })
    .catch(err => {
      // console.log(err);
      navigate('/');
    });
}, []);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleItemClick = view => {
    navigate(`/dashboard/${view}`);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="absolute" open={open} sx={{ backgroundColor: '#655eec' }}>
        <Toolbar sx={{ pr: '24px' }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{ marginRight: '36px', ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Link to="/dashboard/my-profile" style={{ color: 'inherit' }}>
            <IconButton color="inherit">
              { myUser && myUser.userImage && (
                <img src={myUser.userImage} style={{ borderRadius: '50%', width: '30px'}} />
              )}
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1] }}>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          {mainListItems(handleItemClick)}
          <Divider sx={{ my: 1 }} />
          {secondaryListItems(handleItemClick)}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) => (theme.palette.mode === 'light' ? theme.palette.white : theme.palette.grey[900]),
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={15} lg={19}>
                <Routes location={location}>
                  <Route path="/" element={<DashboardPageContent />} />
                  <Route path="kanban" element={<KanbanPage />} />
                  <Route path="notes" element={<NotesPage />} />
                  <Route path="notes/create" element={<NoteCreatePage />} />
                  <Route path="notes/:noteId" element={<NoteDetailsPage />} />
                  <Route path="notes/:noteId/edit" element={<NoteEditPage />} />
                  <Route path="kanban" element={<KanbanPage />} />
                  <Route path="my-profile" element={<MyProfilePage />} />
                  <Route path="my-profile/edit" element={<EditProfilePage />} />
                  <Route path="my-profile/edit-password" element={<EditPasswordPage />} />
                </Routes>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default DashboardPageLayout;