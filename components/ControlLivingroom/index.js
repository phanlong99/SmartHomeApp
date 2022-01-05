import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import DenQuatTemHum from '../DenQuatTemHum';
import ControlRGB from '../ControlRGB';
const ControlLivingroom = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textRoom}>
        <Text style={styles.Livingroom}>LIVINGROOM</Text>
      </View>

      <DenQuatTemHum />
      <ControlRGB />
    </View>
  );
};

export default ControlLivingroom;
