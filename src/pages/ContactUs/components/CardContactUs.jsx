import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CardContactUs({ src, alt, title, text, email, mailview }) {
    return (
        <Card sx={{ maxWidth: 345, padding: 3 }}>
            <img
                height="40"
                width="40"
                src={src}
                alt={alt}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {text}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <a href={email}>{mailview}</a>
                </Typography>
            </CardContent>
        </Card>
    );
}
