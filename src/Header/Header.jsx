// src/Header/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Switch, 
  Box,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useLoanContext } from '../Context/Context';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { darkMode, toggleDarkMode } = useLoanContext();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Exchange Rates (LIVE)', path: '/about' },
    { name: 'About', path: '/about' },
    { name: 'ErrorPage', path: '/error' }
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Loan Calculator
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item.name} 
            component={Link} 
            to={item.path} 
            sx={{ textAlign: 'center', color: 'inherit', textDecoration: 'none' }}
          >
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography 
            variant="h6" 
            component={Link} 
            to="/" 
            sx={{ 
              flexGrow: 1, 
              textDecoration: 'none', 
              color: 'inherit' 
            }}
          >
            Loan Calculator
          </Typography>
          
          {!isMobile && navItems.map((item) => (
            <Button 
              key={item.name} 
              component={Link} 
              to={item.path} 
              color="inherit"
              sx={{ mx: 1 }}
            >
              {item.name}
            </Button>
          ))}
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            <Switch
              checked={darkMode}
              onChange={toggleDarkMode}
              color="default"
              sx={{ ml: 1 }}
            />
          </Box>
        </Toolbar>
      </AppBar>
      
      {isMobile && (
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
          sx={{
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: 240 
            },
          }}
        >
          {drawer}
        </Drawer>
      )}
    </>
  );
};

export default Header;