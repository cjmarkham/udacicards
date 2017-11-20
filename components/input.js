import React from 'react';
import {
  Platform,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

const InputText = props => (
  <View style={styles.wrapper}>
    <TextInput
      underlineColorAndroid='transparent'
      value={props.value}
      onChangeText={props.onChangeText}
      onPress={props.onPress} />
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: Platform.OS === 'ios' ? 2 : 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
  }
});

module.exports =  {
  Text: InputText,
};
