import React, { Component } from 'react';
import styles from './styles';

import { View, Text, Image, TouchableOpacity } from 'react-native';

export default class ButtonDoor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonState: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.containerButton}
          onPress={() =>
            this.setState({ buttonState: !this.state.buttonState })
          }
        >
          <Image
            style={styles.imageButton}
            source={
              this.state.buttonState
                ? require('../../assets/images/open_door2.png')
                : require('../../assets/images/close_door2.png')
            }
          ></Image>
          <Text style={styles.textButton}>
            {this.state.buttonState ? 'Opening Door' : 'Closing Door'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
