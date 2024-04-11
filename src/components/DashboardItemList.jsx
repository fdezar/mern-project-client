import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import NotesIcon from '@mui/icons-material/Notes';
import LogoutIcon from '@mui/icons-material/Logout';
import AssignmentIcon from '@mui/icons-material/Assignment';
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
    {/* <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Shared" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Premium" />
    </ListItemButton> */}
  </>
);

export const secondaryListItems = () => (
  <>
    {/* <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton> */}
    <ListItemButton>
      <ListItemIcon>
        <LogoutIcon style={{ color: 'crimson' }}/>
      </ListItemIcon>
      <ListItemText primary="Logout" style={{ color: 'crimson' }}/>
    </ListItemButton>
  </>
);