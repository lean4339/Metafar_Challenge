
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { MenuItem } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function ButtonAppBar() {
    console.log('render navbar')
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 10 }}>
      <AppBar position="static">
        <Toolbar>
        <MenuItem>
        <Typography textAlign="center"><NavLink to="/home">Home</NavLink></Typography>
        </MenuItem>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
