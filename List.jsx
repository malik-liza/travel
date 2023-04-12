import React ,{useState}from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem,FormControl,Select } from '@mui/material'
import useStyles from './ListStyles'
import { type } from '@testing-library/user-event/dist/type';

const List = () => {
  const classes= useStyles();
  const [type,setType]=useState('restaurants')
   {/**type is the object and setTypemodifies the  state of object  */}
   const [Rating,setRating]=useState('')

  return (
    <div className={classes.container}>
      <Typography variant='h4'>RESTRAUNTS,HOTELS AND ATTRACTIONS NEARBY </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e)=>setType(e.target.value)}>{/**e is the eevent and ther is a callback func.that set the value */}
          <MenuItem value='restaurants'>RESTRAUNTS</MenuItem>
          <MenuItem value='hotels'>HOTELS</MenuItem>
          <MenuItem value='restaurants'>ATTRACTIONS</MenuItem>
        </Select>

      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={Rating} onChange={(e)=>setType(e.target.value)}>
        {/**e is the eevent and ther is a callback func.that set the value */}
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>above 4.0</MenuItem>
        </Select>

      </FormControl>


     
      
    </div>
  )
}

export default List
