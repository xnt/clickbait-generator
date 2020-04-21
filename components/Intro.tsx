import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Intro = () => (
  <Text style={styles.paragraph}>
    Click the button to generate a random clickbait title. You're a writer now.
    Have fun!
  </Text>
);

const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 14,
    textAlign: 'left',
  },
});

export default React.memo(Intro);
