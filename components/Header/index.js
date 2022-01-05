import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import ButtonDoor from '../ButtonDoor';

const Header = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textHeader}>
        <Text style={styles.date}> January 3, 2022</Text>
        <Text style={styles.welcome}> Welcome</Text>
      </View>
      <ButtonDoor />
    </View>
  );
};

export default Header;
