import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import ControlLivingroom from '../ControlLivingroom';

const Controller = (props) => {
  return (
    <View style={styles.container}>
      <ControlLivingroom />
    </View>
  );
};

export default Controller;
