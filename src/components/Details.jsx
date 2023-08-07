import React from 'react'
import {  
    Box,
    Button,
    Stack,
    styled,
    Typography,
    TextField
} from '@mui/material'
import Title from './Title'

const Details = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            phone: data.get('phone'),
        });
    }
    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    })


    return (
        <Stack 
        component='section'
        direction="column"
        justifyContent= 'center'
        alignItems='center'
        sx={{
            py: 10,
            px: 2
        }}
        >
            <Title 
            text={
                'Get in touch'
                } 
            textAlign={'center'}
            />
            <CustomTypography>
        With years of experience in the logistics industry, 
        we have established a reputation for excellence in 
        ensuring safe and timely deliveries while maintaining,
        the highest level of confidentiality.
        </CustomTypography> 
            <Box 
            component="form" 
            noValidate 
            onSubmit={handleSubmit} 
            sx={{ 
                mt: 1,
                py: 2
            }}>

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="phone"
                    label="Phone Number"
                    type="phone"
                    id="phone"
                    autoComplete="current-phone"
                    sx={{
                        width: "100%",
                    }}
                />
                <Button 
                variant="contained" 
                fullWidth
                type="submit"
                size="medium"
                sx= {{ 
                    fontSize: '0.9rem',
                    textTransform: 'capitalize', 
                    py: 2,
                    mt: 3, 
                    mb: 2,
                    borderRadius: 0,
                    backgroundColor: '#14192d',
                    "&:hover": {
                        backgroundColor: '#1e2a5a',
                    }
                }}
                >
                    send
                </Button>
            </Box>
        </Stack>
    )
}

export default Details;