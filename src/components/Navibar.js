import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";


const pages = ['Available', 'Leave', 'TDY', 'Projections'];

function Navibar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <div>
            {/* Start navigation bar  laid out */}
            <AppBar position="static">
                <Container className="navimain" maxWidth="100%">
                    <Toolbar disableGutters>
                        <Box>
                            <Link to="/" className="companylink">
                                <Typography
                                    id="company-name"
                                    variant="h6"
                                    noWrap
                                    component="div"
                                    sx={{ color: 'white', mr: 2, display: { xs: 'flex', md: 'flex' } }}
                                >
                                    My Company
                                </Typography>
                            </Link>
                        </Box>
                        {/* Collapsed Navbar */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} className="collapseburger">
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left'
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <Link to={page}>
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{page}</Typography>
                                        </MenuItem>
                                    </Link>
                                ))}
                            </Menu>
                        </Box>
                        {/* Full length navigation bar */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className="nav-links">
                            {pages.map((page) => (
                                <Link to={page}>
                                    <Button
                                        id="navi-button"
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page}
                                    </Button>
                                </Link>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}


export default Navibar