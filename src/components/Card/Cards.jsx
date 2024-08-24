import React from "react";
import './Cards.css'
import botiquin from '../../assets/botiquin.png'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Cards() {
    return (
        <>
            <div className="cards-container">
                <Card sx={{ maxWidth: 152, height: 240, borderRadius: ' 0 0 30px 0' }}>
                    <CardActionArea>
                        <div style={{ padding: '10px', height: '77px', width: '77px', margin: ' 19px auto 0 ', backgroundColor: '#158EE2', borderRadius: '50%', }}>

                            <CardMedia
                                component="img"
                                sx={{ objectFit: 'cover' }}
                                image={botiquin}
                                alt="botiquin"
                            />
                        </div>
                        <CardContent sx={{ padding: '10px', margin: '2.42px 0' }}>
                            <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '16px', fontWeight: 700, textAlign: "center", color: '#626265', margin: '15px 0 10px' }}>
                                Medicina
                                preventiva
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '12px', textAlign: 'center' }}>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </>
    )
}