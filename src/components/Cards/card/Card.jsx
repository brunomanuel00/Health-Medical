import React from "react"
import './Card.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CARD({ photoURL, title, children }) {
    return (
        <Card className="card-container">
            <CardActionArea>
                <div className="card-container-image">
                    <CardMedia
                        component="img"
                        sx={{ objectFit: 'cover' }}
                        image={photoURL}
                        alt="botiquin"
                    />
                </div>
                <CardContent className="card-container-title">
                    <Typography className="card-title" gutterBottom variant="h5" component="div" >
                        {title}
                    </Typography>
                    <Typography className="card-text" variant="body2" color="text.secondary">
                        {children}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
};
