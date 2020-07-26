import React , { useEffect } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import { Box, Button, Menu, MenuItem } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
      display:"flex",
      flexDirection:"row"
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      }
    },
    link:{
      fontSize:'20px',
      textDecoration:'none',
      margin: '0 10px',
      textTransform:'capitalize'
    }
  }));

export default function AllAppBar(props) {
        const history=useHistory();
        const classes = useStyles();
        useEffect(() => {
            document.getElementById(props.active).style.borderBottom='3px solid white'
          });
        const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
      <Link to="/analytics" className={classes.link}  style={{backgroundColor:'#ffffff'}}>
      <Button aria-label="show records" color="inherit" id="mrecords">
                  Records
            </Button>
            </Link>
      </MenuItem>
      <MenuItem>
      <Link to="/analytics" className={classes.link}  style={{backgroundColor:'#ffffff'}}>
      <Button aria-label="show analytics" color="inherit" id="manalytics">
                  Analytics
            </Button>
            </Link>
      </MenuItem>
      <MenuItem>
      <Link to="/feedback"  className={classes.link} style={{backgroundColor:'#ffffff'}}>
      <Button aria-label="show feedback" color="inherit" id="mfeedback">
                  Feedback
            </Button>
            </Link>
      </MenuItem>
    </Menu>
  );

        return (
            <div>
            <AppBar position="static" style={{backgroundColor:'#3B77FA',width:'100%',flexGrow:1,position:'relative',alignContent:'centre'}}>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
              >
                <img src={require('../../assets/images/logo.png')} alt="Not showing logo" aria-label="logo of jdd2"/>
              </IconButton>
                <Box fontWeight="fontWeightBold" fontSize={30}>
                  JAN DHAN 2.0
                </Box>
      
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <Button aria-label="show records" color="inherit">
                <Link to="/" className={classes.link}  style={{color:'#ffffff'}}>
                  <Badge color="secondary">
                    <Box id="records">
                      Records
                    </Box>
                  </Badge>
                  </Link>
                </Button>
            
               
                <Button aria-label="show analytics" color="inherit">
                <Link to="/analytics" className={classes.link}  style={{color:'#ffffff'}}>
                  <Badge color="secondary">
                    <Box id="analytics">
                      Analytics
                    </Box>
                  </Badge>
                  </Link>
                </Button>
  
               
                <Button aria-label="show feedback" color="inherit">
                <Link to="/feedback"  className={classes.link} style={{color:'#ffffff'}}>
                  <Badge color="secondary">
                    <Box id="feedback">
                      Feedback
                    </Box>
                  </Badge>
                  </Link>
                </Button>

                <IconButton onClick={()=>{
                  history.push("/login")
                  localStorage.removeItem('Bank')}
                }>
                  <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.09 15.59L11.5 17L16.5 12L11.5 7L10.09 8.41L12.67 11H3V13H12.67L10.09 15.59ZM19 3H5C3.89 3 3 3.9 3 5V9H5V5H19V19H5V15H3V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" fill="white"/>
                  </svg>
                </IconButton>
             
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          {renderMobileMenu}
          </div>
        );
}