import React from 'react'
import './App.css';
import { CssBaseline , Grid } from '@mui/material';
import  Header from './Header'
import List from './List';
import Map from './Map';
import PlaceDetails from './PlaceDetails';


const App = () => {
  return (
    <div>
     {/**designing the page layout  */}
      <CssBaseline/>
      <Header/>{/**on top header */}
      <h1>nkbvkebve</h1>
      
      <Grid container spacing ={3} style={{width:'100%'}}>
        <Grid item xs={12} md={4}>
           <List/> {/**on the left  most corner list of items  */}
        </Grid>
        <Grid item xs={12} md={4}>
          <Map/>{/**on the  right most corner displayed the map */}
        </Grid>
      </Grid>      
         
    </div>
  )
}

export default App

