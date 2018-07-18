import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class Right extends React.Component {

  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <TouchableOpacity onPress={this._onPressButton} style={this.props.style}>
        <Image
          style={styles.button}
          source={require('./assets/arrow.png')}
          />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button:{
    width: 100,
    height: 100,
    transform: [{ rotate: '90deg'}],
  }
});
