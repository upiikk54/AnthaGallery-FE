import React from 'react'
import { Box, Button } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Logo from '../../Assets/LogoCompany/AnthaGallery.jpeg'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import CategoryIcon from '@mui/icons-material/Category';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import StorageIcon from '@mui/icons-material/Storage';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../Redux/slices/AuthReducer';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));
const Dashboard = (props) => {
    const dispatch = useDispatch()
    const ref = React.useRef(null);
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const menus = [
        {
            name: 'Kategori',
            link: '/admin/dashboard'
        },
        {
            name: 'Produk',
            link: '/admin/product'
        },
        {
            name: 'Arsip Produk',
            link: '/admin/archives'
        },
        {
            name: 'History Chat',
            link: '/admin/history-chat'
        },
    ]
    const location = useLocation().pathname
    const onClickMenu = menus.filter((data) => location.includes(data.link))
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate('/')
    };

    const users = useSelector(state => state.auth.dataUsers)
    React.useEffect(() => {
        dispatch(getUsers())
    }, [])

    return (
        <>
            <Box sx={{ display: 'flex' }} ref={ref}>
                <CssBaseline />
                <AppBar position="fixed" open={open} sx={{ backgroundColor: 'white', boxShadow: 'unset', borderBottom: '1px solid #D2D5DA;', py: 1, px: '0 !important' }}>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', gap: '16px' }}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{ mr: 2, ...(open && { display: 'none' }), color: 'black' }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography variant="h6" noWrap component="div" sx={{ fontSize: '24px', color: '#101010', fontFamily: 'Axiforma' }}>
                                    Dashboard Admin
                                </Typography>
                                <Typography noWrap sx={{ fontSize: '14px', color: '#697586', fontFamily: 'Axiforma' }}>
                                    Selamat Datang, {users.userName}!
                                </Typography>
                            </Box>
                        </Box>
                        <Button onClick={(e) => handleLogout(e)} variant='outlined' color='error'>Logout</Button>
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                            backgroundColor: '#101010'
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader sx={{ justifyContent: 'space-between', py: 1.85 }}>
                        <Link to={'/'} style={{ textDecoration: "none", color: "black" }} >
                            <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center', cursor: 'pointer' }}>
                                <Box sx={{ display: 'flex' }}>
                                    <Box sx={{ maxWidth: '41px', width: '100%', borderRadius: '50%' }} component={'img'} src={Logo} />
                                </Box>
                                <Box sx={{ display: 'flex' }}>
                                    <Typography sx={{ color: '#FFD12D', fontSize: '18px', fontWeight: 600, lineHeight: '39px', fontFamily: 'Axiforma' }}>Antha</Typography>
                                    <Typography sx={{ color: 'white', fontSize: '18px', fontWeight: 600, lineHeight: '39px', fontFamily: 'Axiforma' }}>Gallery</Typography>
                                </Box>
                            </Box>
                        </Link>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Box sx={{ px: '35px', pt: 2 }}>
                        <Typography sx={{ fontSize: '12px', color: 'white', fontFamily: 'Axiforma' }}>Menu</Typography>
                    </Box>
                    <List sx={{ py: 0 }} >
                        {menus.map((text, index) => {
                            return (
                                <Link key={index} to={text.name === 'Kategori' ? text.link : text.name === 'Produk' ? text.link : text.name === 'Arsip Produk' ? text.link : text.name === 'History Chat' ? text.link : ''} style={{ textDecoration: 'none', color: onClickMenu[0].name === text.name ? 'white' : 'rgba(255, 255, 255, 0.5)' }}>
                                    <ListItem disablePadding>
                                        <ListItemButton sx={{ position: 'relative' }} >
                                            <Box sx={{ display: onClickMenu[0].name === text.name ? 'block' : 'none', backgroundColor: 'white', width: '5px', height: '24px', borderRadius: '0px 8px 8px 0px', position: 'absolute', left: 0 }} />
                                            <ListItemIcon sx={{ display: 'flex', justifyContent: 'center' }}>
                                                {text.name === 'Kategori' ? onClickMenu[0].name === text.name ? <CategoryIcon sx={{ color: 'white' }} /> : <CategoryOutlinedIcon />
                                                    : text.name === 'Produk' ? onClickMenu[0].name === text.name ? <Inventory2Icon sx={{ color: 'white' }} /> : <Inventory2OutlinedIcon sx={{ color: onClickMenu[0].name === text.name && 'white' }} />
                                                        : text.name === 'Arsip Produk' ? onClickMenu[0].name === text.name ? <StorageIcon sx={{ color: 'white' }} /> : <StorageOutlinedIcon sx={{ color: onClickMenu[0].name === text.name && 'white' }} /> 
                                                        : text.name === 'History Chat' ? onClickMenu[0].name === text.name ? <WhatsAppIcon sx={{ color: 'white' }} /> : <WhatsAppIcon sx={{ color: onClickMenu[0].name === text.name && 'white' }} /> : ''}
                                            </ListItemIcon>
                                            <ListItemText primary={text.name} />
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                            )
                        }
                        )}
                    </List>
                </Drawer>
                <Main open={open}>
                    <DrawerHeader />
                    {props.children}
                </Main>
            </Box>
        </>
    )
}

export default Dashboard