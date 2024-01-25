import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from '../styles/filter.styles';

function CustomRadioButton({label, selected, onSelect}) {
  return (
    <TouchableOpacity
      style={[
        styles.radioButton,
        {backgroundColor: selected ? '#007BFF' : '#FFF'},
      ]}
      onPress={onSelect}>
      <Text
        style={[styles.radioButtonText, {color: selected ? '#FFF' : '#000'}]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export default CustomRadioButton;
