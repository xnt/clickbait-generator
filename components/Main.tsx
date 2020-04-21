import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface MainProps {
  clickbait: string;
}

const Main = ({ clickbait }: MainProps) => (
  <Text style={styles.main}>{clickbait}</Text>
);

const styles = StyleSheet.create({
  main: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 8,
    marginVertical: 10,
    textAlign: 'center',
  },
});

export default React.memo(Main);
