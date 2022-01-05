import React, { Component } from 'react';
import styles from './styles';

import { View, Text, Image, TouchableOpacity } from 'react-native';

export default class ButtonQuat extends Component {
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
                ? require('../../assets/images/quat_bat.png')
                : require('../../assets/images/quat_tat.png')
            }
          ></Image>
        </TouchableOpacity>
      </View>
    );
  }
}
