import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import doctor1 from '../../assets/Doctor.png'
import doctor2 from '../../assets/Doctor-2.webp'
import doctor3 from '../../assets/Doctor-3.webp'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'Doctor 1',
        imgPath: doctor1,
    },
    {
        label: 'Doctor 2',
        imgPath: doctor2
    },
    {
        label: 'Doctor 3',
        imgPath: doctor3
    },
];

export default function Carrousel() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ width: '100%', flexGrow: 1, position: 'absolute', top: 0, zIndex: -1 }}>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    objectFit: 'cover',
                                    display: 'block',
                                    width: "100%",
                                    overflow: 'hidden',
                                    height: '900px',
                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    sx={{ backgroundColor: 'transparent', marginTop: '-20px', zIndex: '50' }}
                />
            </div>

        </Box>
    );
}