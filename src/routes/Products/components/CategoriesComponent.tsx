import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Categories } from '../../../bussiness/interfaces';
import { Grid } from '@material-ui/core';
import useGlobalMediaQuery from '../../../hook/useGlobalMediaQuery';

interface CategoriesTypes {
    category: Categories
}

export default function CategoriesComponent({category}: CategoriesTypes) {
  const {sm, md} = useGlobalMediaQuery()
  return (
    <Grid item xs={12} md={4} style={{margin: md ? '0px 0px 0px 10px': '', display: 'flex', justifyContent: 'center', width: '100%'}} >
      <Card sx={{ maxWidth: 345, width: '100%' }}>
      <CardMedia
        component="img"
        height="140"
        image={category.url ||  "https://res.cloudinary.com/mali-ilustraciones/image/upload/v1653253005/sample.jpg"}
        alt={`description image from ${category.name}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {category.name}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small" onClick={(e) => console.log('CLICK VER PRODUCTOS')} >Ver Productos</Button>
      </CardActions>
    </Card>
  </Grid>
  )
}
