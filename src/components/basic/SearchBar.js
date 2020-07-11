import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';

export default function MySearchBar(){
    const useStyles = makeStyles((theme) => ({
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
          flexDirection:"row",
          marginBottom:'30px'
        },
        searchIcon: {
          padding: theme.spacing(0, 2),
          height: '100%',
          position: 'absolute',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }
      }));
      const classes = useStyles();
    return (
        <div className={classes.search}>  
        <input className="search-bar" placeholder="Search ID..." style={{padding:"0 15px", fontSize:16}}/>
         <div className="search-button">
          <IconButton>
          <SearchIcon style={{fontSize: 37, alignSelf: 'center', color:'#ffffff'}} color="diabled"/>
          </IconButton>
        </div>
        </div>
    );
}