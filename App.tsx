import * as React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

import { generateTitle } from './titleGenerator';

import Intro from './components/Intro';
import Main from './components/Main';
import Generate from './components/Generate';
import Footer from './components/Footer';
// or any pure javascript modules available in npm

export default function App() {
  const [clickbait, setClickbait] = React.useState('Waiting');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Clickbait Generator</Text>
      <Intro />
      <Main clickbait={clickbait} />
      <Generate clickEvent={() => setClickbait(generateTitle())} />
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    marginTop: 25,
    backgroundColor: '#ecf0f1',
    padding: 8,
    textAlignVertical: 'top',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});
