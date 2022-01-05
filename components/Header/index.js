import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import Button from '../Button';

const Header = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textHeader}>
        <Text style={styles.date}> January 3, 2022</Text>
        <Text style={styles.welcome}> Welcome</Text>
      </View>
      <Button />
    </View>
  );
};

export default Header;
