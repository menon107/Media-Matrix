import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const navItems = ['Home', 'About', 'Event', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [backgroundColor, setBackgroundColor] = React.useState("transparent");
  const [navlistColor, setNavlistColor] = React.useState("white");

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const [isOpen, setOpen] = React.useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 100) {
      setBackgroundColor("rgba(0, 0, 0, 0.7)");
      setNavlistColor("white");
    } else {
      setBackgroundColor("transparent");
      setNavlistColor("black");
    }
  };

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [window]);

  const rgbaColor = (color, opacity) => {
    const hexToRgb = (hex) => {
      let r = 0, g = 0, b = 0;
      // 3 digits
      if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
      }
      // 6 digits
      else if (hex.length === 7) {
        r = parseInt(hex[1] + hex[2], 16);
        g = parseInt(hex[3] + hex[4], 16);
        b = parseInt(hex[5] + hex[6], 16);
      }
      return `${r}, ${g}, ${b}`;
    };
  
    return `rgba(${hexToRgb(color)}, ${opacity})`;
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <div className="ham-head" style={{ display: "flex" }}>
        <Typography variant="h6" sx={{ my: 2, marginLeft: "auto", marginRight: "auto", fontFamily: "Montserrat" }}>
          MUN
        </Typography>
      </div>
      <Divider />
      <List>
         <ListItem><ListItemButton href="/event" onClick={()=>setOpen(false)}>Event</ListItemButton></ListItem>
        <NavLink to="#About"><ListItem><ListItemButton onClick={()=>setOpen(false)}>About</ListItemButton></ListItem></NavLink>
        <NavLink to="/"><ListItem><ListItemButton onClick={()=>setOpen(false)}>Home</ListItemButton></ListItem></NavLink>
        <ListItem><ListItemButton href="#Contact" onClick={()=>setOpen(false)}>Contact</ListItemButton></ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className='nav'>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
  component="nav"
  sx={{
    height: "8vh",
    width: "100%",
    background: backgroundColor,
    boxShadow: "0",
    zIndex: "1201",
    transition: "background 0.3s ease",
  }}
>
  <Toolbar sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
    <Box 
      sx={{
        display: { xs: 'none', sm: 'flex' },
        width: '100%',
        background: "transparent",
        gap: "2rem",
        border: `3px solid ${rgbaColor(backgroundColor, 2)}`,
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        padding: "1vh",
      }}
    >
      <ul className="nav-list">
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="#About"><li>About</li></NavLink>
        <a href="/event"><li>Event</li></a>
        <a href="#Contact"><li>Contact</li></a>
      </ul>
    </Box>
  </Toolbar>
</AppBar>

        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            anchor="right"
            ModalProps={{
              keepMounted: false, 
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: "100%",
                background: "rgba(88, 0, 140, 0.6)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(6px)",
                webkitBackdropFilter: "blur(6px)",
                border: "1px solid red",
                color: "white",
                zIndex: "1"
              }
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </div>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;