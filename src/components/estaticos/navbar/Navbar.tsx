import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useDispatch } from "react-redux";
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';
import HomeIcon from '@mui/icons-material/Home';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LogoutIcon from '@mui/icons-material/Logout';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let history = useHistory();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        history.push('/login')
    }

    var navbarComponent;

    if (token != "") {
        navbarComponent = <AppBar position="static" className="navbar-header">
            <Toolbar variant="dense">

                <Box display="flex" justifyContent="start" >


                    <Link to="/posts" className="text-decorator-none">
                        <Box mx={1} className='cursor'>

                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/temas" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/formularioTema" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                    </Link>


                    <Link to="/home" className="text-decorator-none">
                        <Box mx={1} className='cursor'>

                            <Link to="/home">
                                <IconButton className="icon" color="secondary" >
                                    <HomeIcon className="icon" />
                                </IconButton>
                            </Link>
                        </Box>
                    </Link>

                    <Box mx={1} className='cursor' onClick={goLogout}>
                    <IconButton className="icon" color="secondary" >
                            <LogoutIcon className="icon" />
                        </IconButton>
                    </Box>

                </Box>

            </Toolbar>
        </AppBar>
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;