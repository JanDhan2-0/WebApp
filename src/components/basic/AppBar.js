import React , { useEffect } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import { Box, Button, Menu, MenuItem } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import { Link } from "react-router-dom";

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
  }));

export default function AllAppBar(props) {
        const classes = useStyles();
        useEffect(() => {
            document.getElementById(props.active).style.borderBottom='2px solid white'
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
      <Button aria-label="show records" color="inherit">
            <Badge color="secondary">
              <Box id="mrecords">
                  Records
              </Box>
              </Badge>
            </Button>
      </MenuItem>
      <MenuItem>
      <Link to="/analytics" style={{color:'#ffffff'}}>
      <Button aria-label="show analytics" color="inherit" id="manalytics">
              <Badge color="secondary">
                <Box>
                  Analytics
                </Box>
              </Badge>
            </Button>
            </Link>
      </MenuItem>
      <MenuItem>
      <Link to="/feedback" style={{color:'#ffffff'}}>
      <Button aria-label="show feedback" color="inherit" id="mfeedback">
              <Badge color="secondary">
                <Box>
                  Feedback
                </Box>
              </Badge>
            </Button>
            </Link>
      </MenuItem>
    </Menu>
  );

        return (
            <div>
            <AppBar position="static" style={{backgroundColor:'#3B77FA'}}>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
              >
                <img src={require('../../assets/images/logo.png')} alt="Not showing logo" aria-label="logo of jdd2"/>
              </IconButton>
              <Typography className={classes.title} noWrap>
                <Box fontWeight="fontWeightBold" fontSize={30}>
                  JAN DHAN 2.0
                </Box>
              </Typography>
      
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <Button aria-label="show records" color="inherit">
                <Link to="/" style={{color:'#ffffff'}}>
                  <Badge color="secondary">
                    <Box id="records">
                      Records
                    </Box>
                  </Badge>
                  </Link>
                </Button>
            
               
                <Button aria-label="show analytics" color="inherit">
                <Link to="/analytics" style={{color:'#ffffff'}}>
                  <Badge color="secondary">
                    <Box id="analytics">
                      Analytics
                    </Box>
                  </Badge>
                  </Link>
                </Button>
  
               
                <Button aria-label="show feedback" color="inherit">
                <Link to="/feedback" style={{color:'#ffffff'}}>
                  <Badge color="secondary">
                    <Box id="feedback">
                      Feedback
                    </Box>
                  </Badge>
                  </Link>
                </Button>
             
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