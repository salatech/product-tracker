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
import imgDetail from '../assets/pexels-alex-staudinger-1732414.jpg';
import imgDetail2 from '../assets/pexels-pixabay-271816.jpg';


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
                        'We make it easy for buyers to get their product with no stress.'
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                        Products are delivered safely to preferred<br />
                        location and the progress of the products<br />
                        are being tracked.
                    </CustomTypography> 
                </Box>

            </CustomGridItem>
            
            <Grid item xs={12} sm={4} md={6}>
                <img src="https://img.freepik.com/premium-vector/flat-mobile-cargo-tracking-illustration-design_203633-1984.jpg?size=626&ext=jpg&ga=GA1.2.1747187767.1691079709&semt=ais" alt="" 
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
                <img src="https://img.freepik.com/free-vector/male-couriers-delivering-parcels_74855-14101.jpg?size=626&ext=jpg&ga=GA1.2.1747187767.1691079709&semt=ais" alt="" 
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
                        'Put your tracking code below'
                        
                    }
                    textAlign={'start'}
                    />
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
    )
}

export default GetStarted;