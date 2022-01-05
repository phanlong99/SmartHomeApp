import React, { Component } from 'react';
import styles from './styles';

import { View, Text, Image, TouchableOpacity } from 'react-native';

export default class Button extends Component {
  state = {
    buttonState: false,
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.containerButton}
          onPress={() => this.setState({ doorState: !this.state.doorState })}
        >
          <Image
            style={styles.imageButton}
            source={
              this.state.doorState
                ? require('../../assets/images/open_door2.png')
                : require('../../assets/images/close_door2.png')
            }
          ></Image>
          <Text style={styles.textButton}>
            {this.state.buttonState ? 'Opening Door' : 'Closeing Door'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
