import React from 'react'
import { Autocomplete } from '@react-google-maps/api';
import { AppBar,Toolbar,Typography,InputBase,Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import useStyles  from '/.HeaderStyles';

const Header = () => {
    const classes=useStyles();

  return (
    <div>
     <AppBar position="static">
        <Toolbar className={classes.toolbar}>
            <Typography variant='h5' className={classes.title}>
                EasoVenture-Make your adventure easy                                 {/**typography is basically the headings yocan change the title subtitiles etc */}
            </Typography>
            <Box display='flex'>
            <Typography variant='h6' className={classes.title}>
                Explore places nearby
            </Typography>
            {/*<Autocomplete>*/}
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon/>

                    </div>
                    <InputBase placeholder='Search....'  classes={{root:classes.inputRoot, input:classes.InputInput}}/>{/**classes take object as an input theerefore we use  double curly braces */}

                </div>
            {/*</Autocomplete>*/}


            </Box>
        </Toolbar>

     </AppBar>
    </div>
  )
}

export default Header
