import React from 'react'
import { Box, Button, Drawer, IconButton, InputAdornment, List, ListItem, ListItemButton, Modal, TextField, Typography } from '@mui/material'
import Logo from '../../Assets/LogoCompany/AnthaGallery.jpeg'
import { useDispatch, useSelector } from 'react-redux';
import { authRegister, getUsers } from '../../Redux/slices/AuthReducer';
import { Link, useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useSnackbar } from 'notistack'
import axios from 'axios';
import ReorderIcon from '@mui/icons-material/Reorder';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

function Navbar() {
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch()
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [openRegister, setOpenRegister] = React.useState(false);
    const handleOpenRegister = () => setOpenRegister(true);
    const handleCloseRegister = () => setOpenRegister(false);
    const [registerValue, setRegisterValue] = React.useState({
        userNameValue: '',
        emailValue: '',
        passwordValue: '',
        roleValue: 'users',
    })
    const handleChange = (prop) => (event) => {
        setRegisterValue({ ...registerValue, [prop]: event.target.value });
    };
    const handleRegister = async (e) => {
        e.preventDefault()
        const user = {
            userName: registerValue.userNameValue,
            email: registerValue.emailValue,
            password: registerValue.passwordValue,
            role: registerValue.roleValue
        }

        dispatch(authRegister(user)).then((res) => {
            if (res.payload.status === true || res.payload.statusCode === 201) {
                enqueueSnackbar(`${res.payload.message}`, { variant: 'success', anchorOrigin: { vertical: 'top', horizontal: 'center' }, autoHideDuration: 3000 });
                handleCloseRegister()
                handleOpenLogin()
            } else if (res.payload.status === false || res.payload.statusCode === 400) {
                enqueueSnackbar(`${res.payload.message}`, { variant: 'error', anchorOrigin: { vertical: 'top', horizontal: 'center' }, autoHideDuration: 3000 });
            } else {
                if (res.payload.status === false || res.payload.statusCode === 401) {
                    enqueueSnackbar(`${res.payload.message}`, { variant: 'error', anchorOrigin: { vertical: 'top', horizontal: 'center' }, autoHideDuration: 3000 });
                } else {
                    enqueueSnackbar(`Gagal register`, { variant: 'error', anchorOrigin: { vertical: 'top', horizontal: 'center' }, autoHideDuration: 3000 });
                }
            }
        })
    }


    const [openLogin, setOpenLogin] = React.useState(false);
    const handleOpenLogin = () => setOpenLogin(true);
    const handleCloseLogin = () => setOpenLogin(false);
    const [loginValue, setLoginValue] = React.useState({
        emailValueLogin: '',
        passwordValueLogin: '',
    })

    const handleChangeLogin = (prop) => (event) => {
        setLoginValue({ ...loginValue, [prop]: event.target.value });
    };

    const users = useSelector(state => state.auth.dataUsers)
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const userToLoginPayload = {
                email: loginValue.emailValueLogin,
                password: loginValue.passwordValueLogin,
            }

            const loginRequest = await axios.post(
                "https://anthagallery-server.up.railway.app/api/v1/login",
                userToLoginPayload
            )
            const loginResponse = loginRequest.data;


            console.log(loginResponse);

            if (loginResponse.status) {
                localStorage.setItem("token", loginResponse.data.token);
                dispatch(getUsers())
                enqueueSnackbar(`${loginResponse.message}`, { variant: 'success', anchorOrigin: { vertical: 'top', horizontal: 'center' }, autoHideDuration: 3000 });
                handleCloseLogin()
            }
        } catch (err) {
            const response = err.response.data;
            enqueueSnackbar(`${response.message}`, { variant: 'error', anchorOrigin: { vertical: 'top', horizontal: 'center' }, autoHideDuration: 3000 });
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload()
    };

    React.useEffect(() => {
        dispatch(getUsers())
    }, [])

    const navigate = useNavigate()
    const handleNavigateAdmin = () => {
        users.role === "admin" ? navigate('/admin/dashboard') : navigate('/')
    }

    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'right' ? 250 : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <Link to={'/'} style={{ textDecoration: "none", color: "black" }} >
                                <Box sx={{ maxWidth: { xxs: '35px' }, width: '100%' }} component={'img'} src={Logo} />
                            </Link>
                            <Button onClick={handleNavigateAdmin} sx={{
                                backgroundColor: 'black', color: 'white', width: '100%', height: { md: '40px', sm: '40px', xs: '30px', xl: '100%' }, display: 'flex', p: 2, gap: '8px', borderRadius: '8px', ":hover": {
                                    bgcolor: "black"
                                }, textTransform: 'none'
                            }} variant='contained'>
                                <HomeOutlinedIcon sx={{ width: { md: '24px', sm: '24px', xs: '18px' }, height: { md: '24px', sm: '24px', xs: '18px' } }} />
                                <Typography sx={{ fontSize: { md: '14px', sm: '14px', xs: '12px' } }}>
                                    Dashboard
                                </Typography>
                            </Button>
                            <Button onClick={(e) => handleLogout(e)} variant='outlined' color='error' sx={{ textTransform: 'none', fontSize: { md: '14px', sm: '14px', xs: '12px', xl: '17px' } }}>Logout</Button>
                        </Box>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    const listCostumer = (anchor) => (
        <Box
            sx={{ width: anchor === 'right' ? 250 : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <Link to={'/'} style={{ textDecoration: "none", color: "black" }} >
                                <Box sx={{ maxWidth: { xxs: '35px' }, width: '100%' }} component={'img'} src={Logo} />
                            </Link>
                            <Typography sx={{ color: 'black', fontSize: { xs: '20px', md: '20px', xl: '24px' }, fontWeight: '39px', lineHeight: '39px', fontFamily: 'Axiforma', textAlign: 'center' }}>
                                Halo {users.userName}!
                            </Typography>
                            <Button onClick={(e) => handleLogout(e)} variant='outlined' color='error' sx={{ textTransform: 'none', fontSize: { md: '14px', sm: '14px', xs: '12px', xl: '17px' } }}>Logout</Button>
                        </Box>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            {/* Modals register */}
            <Modal
                open={openRegister}
                onClose={handleCloseRegister}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: { xl: 684, md: '450px', sm: '400px', xs: '100%' },
                    height: { xs: '100%', sm: 'unset' },
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    borderRadius: 10,
                    p: 4,
                }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xl: '45px', md: '30px', sm: '25px', xs: '30px' }, pt: { xs: '35px', sm: 'unset' } }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xl: '45px', md: '30px', sm: '25px', xs: '35px' } }}>
                            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                <Box sx={{ maxWidth: { xl: '192px', md: '150px', sm: '140px', xs: '180px' }, width: '100%', borderRadius: '50%' }} component={'img'} src={Logo} />
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center', alignItems: 'center' }}>
                                <Typography sx={{ color: 'black', fontSize: { xl: '36px', md: '25px', sm: '20px', xs: '25px' }, fontWeight: 600, fontFamily: 'Axiforma' }}>Daftar ke Antha Gallery</Typography>
                                <Typography sx={{ color: '#6D7280', fontSize: { xl: '20px', md: '15px', sm: '15px', xs: '15px' }, fontWeight: 400, fontFamily: 'Axiforma' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices etiam ornare tortor sit sed et faucibus a ac.</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xl: '38px', md: '15px', sm: '13px', xs: '16px' } }}>
                            <TextField onChange={handleChange('userNameValue')} fullWidth required id="userName" placeholder='username' />
                            <TextField onChange={handleChange('emailValue')} fullWidth required id="email" placeholder='email' />
                            <TextField
                                onChange={handleChange('passwordValue')}
                                fullWidth
                                required
                                id="standard-adornment-password"
                                placeholder='password'
                                type={showPassword ? 'text' : 'password'}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />

                        </Box>
                        <Button onClick={handleRegister} variant='contained' sx={{
                            height: '56px', backgroundColor: '#2563EB', fontFamily: 'Axiforma', fontSize: '20px'
                        }}>Daftar</Button>
                    </Box>
                </Box>
            </Modal>

            {/* Modals Login */}
            <Modal
                open={openLogin}
                onClose={handleCloseLogin}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: { xl: 684, md: '450px', sm: '400px', xs: '100%' },
                    height: { xs: '100%', sm: 'unset' },
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    borderRadius: 10,
                    p: 4,
                }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xl: '45px', md: '30px', sm: '25px', xs: '30px' }, pt: { xs: '65px', sm: 'unset' } }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xl: '45px', md: '30px', sm: '25px', xs: '35px' } }}>
                            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                <Box sx={{ maxWidth: { xl: '192px', md: '150px', sm: '140px', xs: '180px' }, width: '100%', borderRadius: '50%' }} component={'img'} src={Logo} />
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center', alignItems: 'center' }}>
                                <Typography sx={{ color: 'black', fontSize: { xl: '36px', md: '25px', sm: '20px', xs: '25px' }, fontWeight: 600, fontFamily: 'Axiforma' }}>Masuk ke Antha Gallery</Typography>
                                <Typography sx={{ color: '#6D7280', fontSize: { xl: '20px', md: '15px', sm: '15px', xs: '15px' }, fontWeight: 400, fontFamily: 'Axiforma' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices etiam ornare tortor sit sed et faucibus a ac.</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xl: '38px', md: '15px', sm: '13px', xs: '16px' } }}>
                            <TextField
                                onChange={handleChangeLogin('emailValueLogin')}
                                fullWidth
                                label="Email"
                                id="fullWidth"
                            />
                            <TextField
                                onChange={handleChangeLogin('passwordValueLogin')}
                                fullWidth
                                required
                                id="standard-adornment-password"
                                placeholder='password'
                                type={showPassword ? 'text' : 'password'}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>
                        <Button
                            onClick={handleLogin}
                            variant='contained'
                            sx={{
                                height: '56px', backgroundColor: '#2563EB', fontFamily: 'Axiforma', fontSize: '20px'
                            }}>Masuk</Button>
                    </Box>
                </Box>
            </Modal>

            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Box sx={{
                    display: 'flex',
                    width: '100%',
                    maxWidth: '1440px',
                    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
                    backgroundColor: 'white',
                    height: { xs: '60px', sm: '65px', md: '80px', xl: '116px' },
                }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '1440px', px: { sm: '100px', xs: '25px' } }}>
                        <Link to={'/'} style={{ textDecoration: "none", color: "black" }} >
                            <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center', cursor: 'pointer' }}>
                                <Box sx={{ display: 'flex' }}>
                                    <Box sx={{ maxWidth: { xs: '20px', md: '35px', xl: '50px', sm: '30px' }, width: '100%', borderRadius: '50%' }} component={'img'} src={Logo} />
                                </Box>
                                <Box sx={{ display: 'flex' }}>
                                    <Typography sx={{ color: '#FFD12D', fontSize: { xs: '15px', md: '20px', xl: '24px' }, fontWeight: '39px', lineHeight: '39px', fontFamily: 'Axiforma' }}>Antha</Typography>
                                    <Typography sx={{ color: 'black', fontSize: { xs: '15px', md: '20px', xl: '24px' }, fontWeight: '39px', lineHeight: '39px', fontFamily: 'Axiforma' }}>Gallery</Typography>
                                </Box>
                            </Box>
                        </Link>
                        {users === undefined || users === null || Object.keys(users).length === 0 ?
                            <Box sx={{ display: 'flex', gap: { xs: '5px', sm: '10px', md: '28px' } }}>
                                <Button onClick={handleOpenLogin} variant='contained' sx={{ color: 'black', fontSize: { xs: '7px', sm: '10px', md: '13px', xl: '16px' }, width: '100%', backgroundColor: 'white', textTransform: 'none', borderRadius: '8px', '&:hover': { backgroundColor: 'white' } }}>Login</Button>
                                <Button onClick={handleOpenRegister} variant='contained' sx={{ fontSize: { xs: '7px', sm: '10px', md: '13px', xl: '16px' }, width: '100%', backgroundColor: 'black', color: 'white', textTransform: 'none', borderRadius: '8px', '&:hover': { backgroundColor: 'black' } }}>Register</Button>
                            </Box>
                            :
                            <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <Box sx={{ display: 'flex' }}>
                                    <Box sx={{ maxWidth: { xs: '20px', md: '35px', xl: '50px', sm: '30px' }, width: '100%', borderRadius: '50%' }} component={'img'} src={users.image} />
                                </Box>
                                {users !== undefined && users.role === "admin" ?
                                    <Box>
                                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                            <Box sx={{ display: 'flex', gap: '10px' }}>
                                                <Button onClick={handleNavigateAdmin} sx={{
                                                    backgroundColor: 'black', color: 'white', width: { md: '121px', sm: '121px', xs: '95px', xl: '100%' }, height: { md: '40px', sm: '40px', xs: '30px', xl: '100%' }, display: 'flex', p: 2, gap: '8px', borderRadius: '8px', ":hover": {
                                                        bgcolor: "black"
                                                    }, textTransform: 'none'
                                                }} variant='contained'>
                                                    <HomeOutlinedIcon sx={{ width: { md: '24px', sm: '24px', xs: '18px' }, height: { md: '24px', sm: '24px', xs: '18px' } }} />
                                                    <Typography sx={{ fontSize: { md: '14px', sm: '14px', xs: '12px' } }}>
                                                        Dashboard
                                                    </Typography>
                                                </Button>
                                                <Button onClick={(e) => handleLogout(e)} variant='outlined' color='error' sx={{ textTransform: 'none', fontSize: { md: '14px', sm: '14px', xs: '12px', xl: '17px' } }}>Logout</Button>
                                            </Box>
                                        </Box>
                                        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                                            {['right'].map((anchor) => (
                                                <React.Fragment key={anchor}>
                                                    <ReorderIcon onClick={toggleDrawer(anchor, true)}>{anchor}</ReorderIcon>
                                                    <Drawer
                                                        anchor={anchor}
                                                        open={state[anchor]}
                                                        onClose={toggleDrawer(anchor, false)}
                                                    >
                                                        {list(anchor)}
                                                    </Drawer>
                                                </React.Fragment>
                                            ))}
                                        </Box>
                                    </Box>
                                    :
                                    <Box>
                                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                            <Box sx={{ display: 'flex', gap: '10px' }}>
                                                <Typography sx={{ color: 'black', fontSize: { xs: '10px', md: '20px', xl: '24px' }, fontWeight: '39px', lineHeight: '39px', fontFamily: 'Axiforma' }}>
                                                    Halo {users.userName}!
                                                </Typography>
                                                <Button onClick={(e) => handleLogout(e)} variant='outlined' color='error' sx={{ textTransform: 'none', fontSize: { md: '14px', sm: '14px', xs: '12px', xl: '17px' } }}>Logout</Button>
                                            </Box>
                                        </Box>
                                        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                                            {['right'].map((anchor) => (
                                                <React.Fragment key={anchor}>
                                                    <ReorderIcon onClick={toggleDrawer(anchor, true)}>{anchor}</ReorderIcon>
                                                    <Drawer
                                                        anchor={anchor}
                                                        open={state[anchor]}
                                                        onClose={toggleDrawer(anchor, false)}
                                                    >
                                                        {listCostumer(anchor)}
                                                    </Drawer>
                                                </React.Fragment>
                                            ))}
                                        </Box>
                                    </Box>

                                }
                            </Box>
                        }
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Navbar