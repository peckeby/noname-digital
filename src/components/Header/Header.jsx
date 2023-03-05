import css from './Header.module.scss';
import { useState } from 'react';
import {
  ELECTRONICS,
  JEWELERY,
  MEN,
  SIGN_OUT,
  WOMAN,
  CART,
} from 'components/routes/routes';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const navigate = useNavigate();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const preventDefault = event => event.preventDefault();

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>About us</MenuItem>
      <MenuItem onClick={handleMenuClose}>Delivery & Return</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const { user } = useAuth();

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleProfileMenuOpen}
          ></IconButton>
          <MenuIcon />
          <Link to={'/'} className={css.homeLink}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                color: 'black',
                display: { xs: 'none', sm: 'block' },
                textTransform: 'uppercase',
                mr: 8,
                '&:hover': {
                  color: 'grey',
                  cursor: 'pointer',
                },
              }}
            >
              Noname Digital
            </Typography>
          </Link>
          <Box
            sx={{
              typography: 'h6',
              textTransform: 'uppercase',
              '& > :not(style) + :not(style)': {
                ml: 8,
              },
            }}
            onClick={preventDefault}
          >
            <Link to={ELECTRONICS} className={css.linkHeader}>
              electronics
            </Link>
            <Link to={JEWELERY} className={css.linkHeader}>
              jewelery
            </Link>
            <Link to={MEN} className={css.linkHeader}>
              for him
            </Link>
            <Link to={WOMAN} className={css.linkHeader}>
              for her
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {user && (
              <Link to={SIGN_OUT}>
                <button type="button">Logout</button>
              </Link>
            )}
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="black"
            >
              <AccountCircle />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="black"
              onClick={() => {
                navigate(CART);
              }}
            >
              <ShoppingCartIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="black"
            ></IconButton>
            <MoreIcon />
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </>
  );
}
