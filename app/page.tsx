'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { grey } from '@mui/material/colors';
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          sx={{ bgcolor: grey[500], height:'1em', font: 'Modern_Antiqua'}}
          title="Me in the wild"
        />
        <CardMedia
          component="img"
          height="194"
          image={'/01.jpeg'}
          alt="Paella dish"
        />
      </Card>

      <Card sx={{ maxWidth: 345, marginTop: '1em' }}>
        <CardHeader
          sx={{ bgcolor: grey[500], height:'1em', font: 'Modern_Antiqua'}}
          title="Me in the wild"
        />
        <CardMedia
          component="img"
          height="194"
          image={'/01.jpeg'}
          alt="Paella dish"
        />
      </Card>

      <Card sx={{ maxWidth: 345, marginTop: '1em' }}>
        <CardHeader
          sx={{ bgcolor: grey[500], height:'1em', font: 'Modern_Antiqua'}}
          title="Me in the wild"
        />
        <CardMedia
          component="img"
          height="194"
          image={'/01.jpeg'}
          alt="Paella dish"
        />
      </Card>
    </main>
  );
}
