import React from 'react';
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import Card from '@material-ui/core/Card';

export default function ProductCards({ product }) {
  return (
    <Card>
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
