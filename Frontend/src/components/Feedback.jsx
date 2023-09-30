import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import MoodIcon from '@mui/icons-material/Mood';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import Grid from '@mui/material/Grid';


export default function Feedback() {
    return (
        <div>
            <h3>Rate your experience today.</h3>
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" spacing={2}>
                                <Stack direction="row" spacing={1}>
                                <IconButton color="black" aria-label="excellent experience">
                                    <MoodIcon />
                                </IconButton>
                                <IconButton color="black" aria-label="good experience">
                                    <SentimentSatisfiedAltIcon />
                                </IconButton>
                                <IconButton color="black" aria-label="ok experience">
                                    <SentimentSatisfiedIcon />
                                </IconButton>
                                <IconButton color="black" aria-label="not good experience">
                                    <SentimentDissatisfiedIcon />
                                </IconButton>
                                <IconButton color="black" aria-label="bad experience">
                                    <SentimentVeryDissatisfiedIcon />
                                </IconButton>
                                <IconButton color="black" aria-label="terrible experience">
                                    <MoodBadIcon />
                                </IconButton>
                                </Stack>
                        </Grid>
                    </Grid>        
                </Grid>
</div>
    )
}