import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

interface GenerateProps {
  clickEvent: () => void;
}

const Generate = ({ clickEvent }: GenerateProps) => (
  <View style={style.buttonContainer}>
    <Button onPress={clickEvent} title="Generate!" />
  </View>
);

const style = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 25
  }
});

export default React.memo(Generate);
