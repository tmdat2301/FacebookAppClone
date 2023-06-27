import i18next from 'i18next';
import english from './english.json';
import vietnamese from './vietnamese.json';
import french from './french.json';
import AsyncStorage from '@react-native-async-storage/async-storage';


import {initReactI18next} from 'react-i18next';

// export const storeData = async (value) => {
//     try {
//       await AsyncStorage.setItem('my-key', value);
//     } catch (e) {
//       // saving error
//     }
//   };

//   export  const getData = async () => {
//     try {
//       const value = await AsyncStorage.getItem('my-key');
//       if (value !== null) {
//         // value previously stored
//         console.log("hhhhhhhhhhhhhhhhhhhhhhhhh",value);
//       }
//     } catch (e) {
//       // error reading value
//     }
//   };

i18next.use(initReactI18next).init({
  lng: 'Vietnamese',
  resources: {
    English: english,
    Vietnamese: vietnamese,
    French: french,
  },
  react: {
    useSuspense: false,
  },
});

export default i18next;
