import React, { useEffect, useState } from 'react'
import './Home.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import axios from 'axios';
import { Grid2 } from '@mui/material';



const Home = () => {

    const [rows, setRows] = useState([]);
    // connecting external API
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((res) => {
            setRows(res.data);
        })
    }, [])

    return (
        <>
            <br />
            <h4>Product List</h4>
            <div className='home'>
                <Grid2 container spacing={{ xs: 2, sm: 3, md: 3 }} columns={{ xs: 4, sm: 6, md: 12 }} justifyContent={'center'}>
                    {rows.map((row) => (
                        <Grid2 size={3}>
                            <Card className='cardmain' sx={{ width: 320, height: 400}}>
                                <CardActionArea className='CardActionArea' sx={{height:400}}>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={row.image}
                                        sx={{ objectFit: 'contain' }}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div" sx={{fontSize: '1rem'}}>{row.title}</Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>Price : ${row.price}</Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>rating : {row.rating.rate}</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid2>
                    ))}
                </Grid2>
            </div>
        </>
    )
}

export default Home