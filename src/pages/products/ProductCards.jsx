import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import s from './ProductStyles.module.scss';

export default function ProductCards({ product }) {
  return (
    <Card sx={{ width: 400 }} key={product.id}>
      <CardMedia
        component="img"
        alt={product.name}
        image={product.image}
        sx={{ width: 400, objectFit: 'contain', height: 200 }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="p">
          {product.price}$
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">More Info</Button>
        <Button size="small">Add to cart</Button>
      </CardActions>
    </Card>
  );
}
