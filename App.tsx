import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR'

import {StatusBar} from 'react-native'
import React from 'react';
import { ThemeProvider } from 'styled-components';

import AppLoading from 'expo-app-loading';

import { useFonts,
Poppins_400Regular,
Poppins_500Medium,
Poppins_700Bold
} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme';

import {NavigationContainer} from '@react-navigation/native';
import {AppRoutes} from './src/routes/app.routes';

import {SignIn} from './src/screens/SignIn';

import { Register } from './src/screens/Register';

import { AuthProvider } from './src/hooks/auth';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

if(!fontsLoaded){
  return <AppLoading/>
}

  return ( 
  <ThemeProvider theme={theme}>
    <NavigationContainer>
      <StatusBar barStyle="light-content"/>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
    </NavigationContainer>
  </ThemeProvider>

  )
}