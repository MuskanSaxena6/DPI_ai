import React from 'react';
   import { useTranslation } from 'react-i18next';
   import { Typography, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
   import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

   const ServiceTutorial = () => {
     const { t } = useTranslation();

     const services = ['aadhaar', 'upi', 'digilocker'];

     return (
       <div>
         <Typography variant="h4">{t('services')}</Typography>
         {services.map((service) => (
           <Accordion key={service}>
             <AccordionSummary expandIcon={<ExpandMoreIcon />}>
               <Typography>{t(service)}</Typography>
             </AccordionSummary>
             <AccordionDetails>
               <Typography>{t(`${service}Description`)}</Typography>
             </AccordionDetails>
           </Accordion>
         ))}
       </div>
     );
   };

   export default ServiceTutorial;