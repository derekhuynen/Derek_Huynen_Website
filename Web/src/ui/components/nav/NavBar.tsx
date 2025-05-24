import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { USER_NAME } from 'config/constants';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ThemeToggle from './ThemeToggle';
import SocialLinks from './SocialLinks';
import { APPLICATION_ARRAY } from 'config/constants';

const NavBar: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const location = useLocation();
    const [scrolled, setScrolled] = React.useState(false);
    const navLinks = APPLICATION_ARRAY;

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar
            position="sticky"
            color="transparent"
            elevation={scrolled ? 4 : 0}
            sx={{
                mb: 2,
                transition: 'background-color 0.3s, box-shadow 0.3s',
                backgroundColor: scrolled ? (theme.palette.background.paper + 'F2' || '#fff') : 'transparent',
                backdropFilter: scrolled ? 'blur(8px)' : undefined,
                boxShadow: scrolled ? theme.shadows[4] : 'none',
            }}
        >
            <Toolbar sx={{ px: { xs: 1, sm: 2 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                    <Typography
                        variant="h5"
                        component={RouterLink}
                        to={navLinks[0].route}
                        sx={{
                            fontWeight: 700,
                            color: 'primary.main',
                            textDecoration: 'none',
                            letterSpacing: 1,
                            mr: 2,
                        }}
                    >
                        {USER_NAME}
                    </Typography>
                    <SocialLinks />
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
                        {navLinks.map(link => (
                            <Button
                                key={link.route}
                                component={RouterLink}
                                to={link.route}
                                color={location.pathname === link.route ? 'primary' : 'inherit'}
                                startIcon={link.icon ? <link.icon fontSize="small" /> : undefined}
                                sx={{ fontWeight: 500, textTransform: 'none' }}
                            >
                                {link.label}
                            </Button>
                        ))}
                    </Box>
                    <ThemeToggle />
                    {isMobile && (
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMenuOpen}
                            sx={{ ml: 1 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                </Box>
            </Toolbar>
            {isMobile && (
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                    {navLinks.map(link => (
                        <MenuItem
                            key={link.route}
                            component={RouterLink}
                            to={link.route}
                            selected={location.pathname === link.route}
                            onClick={handleMenuClose}
                        >
                            {link.icon && <span style={{ marginRight: 8, display: 'flex', alignItems: 'center' }}><link.icon fontSize="small" /></span>}
                            {link.label}
                        </MenuItem>
                    ))}
                </Menu>
            )}
        </AppBar>
    );
};

export default NavBar;
