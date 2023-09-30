import React from "react";
import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import './Profile.css';


const Profile = () => {
    const [name, setName] = useState('Bob');
    const [code, setCode] = useState('X32Z');
    const [savings, setSavings] = useState('45%');
    const [id, setId] = useState('001');


    return (
        <div class="profile">
            <a href="/"><img className="logo" src="https://static.wixstatic.com/media/be7cda_0740848baea54c8e8af2e1a6ad34b9ad~mv2.png/v1/fill/w_101,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20-%20Primary.png" alt="logo"/></a>
            <h2>Welcome, {name}!</h2>
            <p>ID: {id}</p>

    
            <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >   
                    <CardMedia
                        component="div"
                        sx={{
                        // 16:9
                        pt: '56.25%',
                        }}
                        image="https://t3.ftcdn.net/jpg/02/51/96/76/360_F_251967663_l5Y0XFme50Oqe1WFAmeVeERhq8ZbfBuG.jpg"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                        Discount Code: <strong>{code}</strong>
                        </Typography>
                        <Typography>
                        Use this code at checkout and save <strong>{savings}</strong> on all items!
                        </Typography>
                    </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                    <CardMedia
                        component="div"
                        sx={{
                        // 16:9
                        pt: '56.25%',
                        }}
                        image="https://img.freepik.com/premium-vector/cute-money-piggy-bank-vector-illustration-save-money-cartoon_562381-62.jpg"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                        <strong>$832.34</strong>
                        </Typography>
                        <Typography>
                        That's the amount you've saved so far shopping with Wellfare!
                        </Typography>
                    </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                    <CardMedia
                        component="div"
                        sx={{
                        // 16:9
                        pt: '56.25%',
                        }}
                        image="https://media.istockphoto.com/id/1324706919/video/crowd-people-appearance-multicultural-crowd-of-people-group-of-different-men-and-women-young.jpg?s=640x640&k=20&c=4J83ZXAU1GD0-Qq0eWCA8pOoIzvHnLUPuL5EwX-H_AM="
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                        <strong>Get involved!</strong>
                        </Typography>
                        <Typography>
                        Join us Pumpkin Picking @ 3-6pm at Prospect Park, BK on 10/10!
                        </Typography>
                    </CardContent>
                    </Card>
                </Grid>
            </Grid>
            </Container>
            <div className="footer">
                <h4>Millions of Americans face barriers to accessing nutritious food everyday. We're on a mission to change that.</h4>
            </div>
        </div>
    );
};

export default Profile;