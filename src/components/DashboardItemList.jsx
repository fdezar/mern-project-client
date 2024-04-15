import * as React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotesIcon from '@mui/icons-material/Notes';
import LogoutIcon from '@mui/icons-material/Logout';

import { Link } from 'react-router-dom';

export const mainListItems = () => (
  <>
    <Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon style={{ color: 'black' }}/>
      </ListItemIcon>
      <ListItemText primary="Dashboard" style={{ color: 'black' }} />
    </ListItemButton>
    </Link>
    <Link to="/dashboard/kanban" style={{ textDecoration: 'none', color: 'inherit' }}>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon style={{ color: 'black' }} />
      </ListItemIcon>
      <ListItemText primary="Kanban" style={{ color: 'black' }} />
    </ListItemButton>
    </Link>
    <Link to="/dashboard/notes" style={{ textDecoration: 'none', color: 'inherit' }}>
    <ListItemButton>
      <ListItemIcon>
        <NotesIcon style={{ color: 'black' }}/>
      </ListItemIcon>
      <ListItemText primary="Notes" style={{ color: 'black' }}/>
    </ListItemButton>
    </Link>
  </>
);

export const secondaryListItems = () => {
  const { logOutUser } = useContext(AuthContext);

  return (
  <>
    <ListItemButton onClick={logOutUser}>
      <ListItemIcon>
        <LogoutIcon style={{ color: 'crimson' }}/>
      </ListItemIcon>
      <ListItemText primary="Logout" style={{ color: 'crimson' }}/>
    </ListItemButton>
  </>
  );
};