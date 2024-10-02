import React from 'react';
   import { useTranslation } from 'react-i18next';
   import { Button, Container, Grid, Typography } from '@material-ui/core';
   import LanguageSelector from '../components/LanguageSelector';
   import ServiceTutorial from '../components/ServiceTutorial';
   import Header from '../components/Header';

   const HomePage = () => {
     const { t } = useTranslation();

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
   