/*
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
             appName: 'DPI Adoption',
             login: "Login"
           }
         },
         hi: {
           translation: {
             welcome: 'डिजिटल पब्लिक इंफ्रास्ट्रक्चर में आपका स्वागत है',
             subTitle: 'डिजिटल इंडिया का प्रवेश द्वार',
             getStarted: 'शुरू करें',
             services: 'हमारी सेवाएं',
             aadhaar: 'आधार',
             upi: 'यूपीआई',
             digilocker: 'डिजिलॉकर',
             // Add more Hindi translations
             aadhaarDescription: 'आधार एक 12 अंकों की विशिष्ट पहचान संख्या है...',
             upiDescription: 'एकीकृत भुगतान इंटरफ़ेस (UPI) एक प्रणाली है...',
             digilockerDescription: 'डिजिलॉकर जारी करने और सत्यापन के लिए एक मंच है...',
             appName: 'डीपीआई अडॉप्शन',
             login: "लॉग इन करें"
          }
        },
         te: {
           translation: {
             // Add Telugu translations here
             welcome: 'DPI స్వీకరణకు స్వాగతం',
             subTitle: 'భారతదేశం యొక్క డిజిటల్ పబ్లిక్ ఇన్‌ఫ్రాస్ట్రక్చర్‌కు మీ గైడ్',
             getStarted: 'ప్రారంభించండి',
             services: 'DPI సేవలు',
             aadhaar: 'ఆధార్',
             upi: 'UPI',
             digilocker: 'డిజిలాకర్',
             aadhaarDescription: 'ఆధార్ అనేది 12 అంకెల ప్రత్యేక గుర్తింపు సంఖ్య...',
             upiDescription: 'యూనిఫైడ్ పేమెంట్స్ ఇంటర్‌ఫేస్ (UPI) అనేది ఒక సిస్టమ్...',
             digilockerDescription: 'DigiLocker అనేది జారీ మరియు ధృవీకరణ కోసం ఒక వేదిక...',
             appName: 'DPI స్వీకరణ',
             login: "లాగిన్ చేయండి"
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
   */

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
          appName: 'DPI Adoption',
          login: "Login",
          AskAboutDPIServices: "Ask About DPI Services",
          chatbotPlaceholder:"eg. What is DPI?",
          sendMessage:"Send Message",
          // New login translations
          email: "Email Address",
          password: "Password",
          signIn: "Sign In",
          emailRequired: "Email is required",
          invalidEmail: "Please enter a valid email address",
          passwordRequired: "Password is required",
          loginError: "Failed to sign in. Please try again."
        }
      },
      hi: {
        translation: {
          welcome: 'डिजिटल पब्लिक इंफ्रास्ट्रक्चर में आपका स्वागत है',
          subTitle: 'डिजिटल इंडिया का प्रवेश द्वार',
          getStarted: 'शुरू करें',
          services: 'हमारी सेवाएं',
          aadhaar: 'आधार',
          upi: 'यूपीआई',
          digilocker: 'डिजिलॉकर',
          aadhaarDescription: 'आधार एक 12 अंकों की विशिष्ट पहचान संख्या है...',
          upiDescription: 'एकीकृत भुगतान इंटरफ़ेस (UPI) एक प्रणाली है...',
          digilockerDescription: 'डिजिलॉकर जारी करने और सत्यापन के लिए एक मंच है...',
          appName: 'डीपीआई अडॉप्शन',
          login: "लॉग इन करें",
          AskAboutDPIServices: "DPI सेवाओं के बारे में पूछें",
          chatbotPlaceholder:"उदाहरण: DPI क्या है?",
          sendMessage:"मेसेज भेजें",
          // New login translations
          email: "ईमेल पता",
          password: "पासवर्ड",
          signIn: "साइन इन करें",
          emailRequired: "ईमेल आवश्यक है",
          invalidEmail: "कृपया वैध ईमेल पता दर्ज करें",
          passwordRequired: "पासवर्ड आवश्यक है",
          loginError: "साइन इन करने में विफल। कृपया पुनः प्रयास करें।"
        }
      },
      te: {
        translation: {
          welcome: 'DPI స్వీకరణకు స్వాగతం',
          subTitle: 'భారతదేశం యొక్క డిజిటల్ పబ్లిక్ ఇన్‌ఫ్రాస్ట్రక్చర్‌కు మీ గైడ్',
          getStarted: 'ప్రారంభించండి',
          services: 'DPI సేవలు',
          aadhaar: 'ఆధార్',
          upi: 'UPI',
          digilocker: 'డిజిలాకర్',
          aadhaarDescription: 'ఆధార్ అనేది 12 అంకెల ప్రత్యేక గుర్తింపు సంఖ్య...',
          upiDescription: 'యూనిఫైడ్ పేమెంట్స్ ఇంటర్‌ఫేస్ (UPI) అనేది ఒక సిస్టమ్...',
          digilockerDescription: 'DigiLocker అనేది జారీ మరియు ధృవీకరణ కోసం ఒక వేదిక...',
          appName: 'DPI స్వీకరణ',
          login: "లాగిన్ చేయండి",
          AskAboutDPIServices: "DPI సేవల గురించి అడగండి",
          chatbotPlaceholder:"ఉదా. DPI అంటే ఏమిటి?",
          sendMessage:"సందేశం పంపండి",
          // New login translations
          email: "ఇమెయిల్ చిరునామా",
          password: "పాస్‌వర్డ్",
          signIn: "సైన్ ఇన్ చేయండి",
          emailRequired: "ఇమెయిల్ అవసరం",
          invalidEmail: "దయచేసి చెల్లుబాటు అయ్యే ఇమెయిల్ చిరునామాను నమోదు చేయండి",
          passwordRequired: "పాస్‌వర్డ్ అవసరం",
          loginError: "సైన్ ఇన్ చేయడం విఫలమైంది. దయచేసి మళ్లీ ప్రయత్నించండి."
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