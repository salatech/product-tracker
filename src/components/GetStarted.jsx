import React from 'react'
import { 
    Box,
    Grid,
    styled,
    Typography,
    TextField,
    Button
} from '@mui/material'
import Title from './Title'
// img
import About from '../assets/about.jpg'
import Track from '../assets/track.jpg'


const GetStarted = () => {

    const CustomGridItem = styled(Grid) ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })
    
    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    })

    return (
        <>
       
        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}   
        sx={{
            py: 10,
            px: 2,
             
        }}
        >
         
            <CustomGridItem item xs={12} sm={8} md={6} 
            component = 'section'
           
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'we specialize in handling confidential shipments with the utmost discretion and security.'
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    With years of experience in the logistics industry, 
                    we have established a reputation for excellence in 
                    ensuring safe and timely deliveries while maintaining,
                    the highest level of confidentiality.
                    </CustomTypography> 
                </Box>

            </CustomGridItem>
            <Grid item xs={12} sm={4} md={6}>

                <img src={About}
                style={{
                    width: '100%',
                }}
                />
            </Grid>

            <Grid item xs={12} sm={4} md={6}
            sx={{
                order: {xs: 4, sm: 4, md: 3}
            }}
            >
                <img src={Track}
                style={{ 
                    width: "100%",
                }}
                />
            </Grid>


            <CustomGridItem item xs={12} sm={8} md={6}
            sx={{
                order: {xs: 3, sm: 3, md: 4}
            }}
            >
                
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'Track a Package'
                        
                    }
                    textAlign={'start'}
                    />
                     <CustomTypography>
                     Enter your unique tracking number to get real-time updates on the status and location of your confidential package. Our advanced tracking technology ensures you're always informed about your shipment's journey.
                    </CustomTypography> 
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="phone"
                    label="Tracking code"
                    type="text"
                    id="tracking code"
              
                />
                <Button style={{backgroundColor:"white", color:"#755322", border:"1px solid #755322", padding:"10px 50px"}}>Submit</Button>
                </Box>
            </CustomGridItem>
        </Grid>
        </>
    )
}

export default GetStarted;