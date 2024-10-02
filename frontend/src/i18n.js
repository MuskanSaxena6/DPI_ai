import i18n from 'i18next';
   import { initReactI18next } from 'react-i18next';

   i18n
     .use(initReactI18next)
     .init({
       resources: {
         en: {
           translation: {
             welcome: 'Welcome to DPI Adoption',
             subTitle: 'Your guide to India\'s Digital Public Infrastructure',
             getStarted: 'Get Started',
             services: 'DPI Services',
             aadhaar: 'Aadhaar',
             upi: 'UPI',
             digilocker: 'DigiLocker',
             aadhaarDescription: 'Aadhaar is a 12-digit unique identity number...',
             upiDescription: 'Unified Payments Interface (UPI) is a system...',
             digilockerDescription: 'DigiLocker is a platform for issuance and verification...',
             appName: 'DPI Adoption'
           }
         },
         hi: {
           translation: {
             // Add Hindi translations here
           }
         },
         te: {
           translation: {
             // Add Telugu translations here
           }
         }
       },
       lng: 'en',
       fallbackLng: 'en',
       interpolation: {
         escapeValue: false
       }
     });

   export default i18n;