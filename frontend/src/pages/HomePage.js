/*
import React from 'react';
   import { useTranslation } from 'react-i18next';
   import { Button, Container, Grid, Typography } from '@material-ui/core';
   import { Link } from 'react-router-dom';
   import LanguageSelector from '../components/LanguageSelector';
   import Header from '../components/Header';
   import Chatbot from '../components/Chatbot';

   const HomePage = () => {
     const { t } = useTranslation();

     return (
      <Container>
        <Header />
        <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h2">{t('welcome')}</Typography>
              <Typography variant="subtitle1">{t('subTitle')}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <LanguageSelector />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                component={Link}
                to="/login"
                variant="contained"
                color="primary"
                fullWidth
              >
                {t('loginToDPIServices')}
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4">{t('askAboutDPIServices')}</Typography>
              <Chatbot />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    );
  };
  
  export default HomePage;
*/
/*
     return (
       <Container>
         <Header />
         <Grid container spacing={3}>
           <Grid item xs={12}>
             <Typography variant="h2">{t('welcome')}</Typography>
             <Typography variant="subtitle1">{t('subTitle')}</Typography>
           </Grid>
           <Grid item xs={12} md={6}>
             <LanguageSelector />
           </Grid>
           <Grid item xs={12} md={6}>
             <Button variant="contained" color="primary">{t('getStarted')}</Button>
           </Grid>
           <Grid item xs={12}>
             <ServiceTutorial />
           </Grid>
         </Grid>
       </Container>
     );
   };

   export default HomePage;
*/

import React from 'react';
import { useTranslation } from 'react-i18next';
import {Container, Grid, Typography, Box } from '@material-ui/core';
//import { Link } from 'react-router-dom';
import LanguageSelector from '../components/LanguageSelector';
//import Header from '../components/Header';
import Chatbot from '../components/Chatbot';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Container>

      {/*<Header />*/}

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box mt={4}>  {/* This adds margin to the top */}
            <Typography variant="h2">{t('welcome')}</Typography>
            <Typography variant="subtitle1">{t('subTitle')}</Typography>
            </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <LanguageSelector />
        </Grid>
        {/*<Grid item xs={12} md={6}>
          <Button
            component={Link}
            to="/login"
            variant="contained"
            color="primary"
          >
            {t('login')}
          </Button>
        </Grid>*/}
        <Grid item xs={12}>
        <Box mt={0}>  {/* This adds margin to the top */}
            <Typography variant="h4">{t('AskAboutDPIServices')}</Typography>
            <Chatbot />
            </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
  