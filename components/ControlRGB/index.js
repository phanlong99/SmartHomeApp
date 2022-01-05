import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import ButtonRGB from '../ButtonRGB';

const ControlRGB = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textRGB}>
        <Text style={styles.controlRGB}>CONTROL RGB</Text>
      </View>
      <View style={styles.containerRGB}>
        <ButtonRGB />
        <ButtonRGB />
        <ButtonRGB />
        <ButtonRGB />
      </View>
    </View>
  );
};

export default ControlRGB;
