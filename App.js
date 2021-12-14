
import React from 'react';
import {
  StyleSheet
} from 'react-native';
import 'react-native-gesture-handler';
import GlobalProvider from './src/context/Provider';
import AppNavContainer from './src/navigation/index';




const App= () => {
  

  return (
      
      <GlobalProvider><AppNavContainer/></GlobalProvider>
     
  )
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
