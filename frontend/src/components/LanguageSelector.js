import React from 'react';
   import { useTranslation } from 'react-i18next';
   import { Select, MenuItem } from '@material-ui/core';

   const LanguageSelector = () => {
     const { i18n } = useTranslation();

     const changeLanguage = (event) => {
       i18n.changeLanguage(event.target.value);
     };

     return (
       <Select value={i18n.language} onChange={changeLanguage}>
         <MenuItem value="en">English</MenuItem>
         <MenuItem value="hi">हिन्दी</MenuItem>
         <MenuItem value="te">తెలుగు</MenuItem>
       </Select>
     );
   };

   export default LanguageSelector;