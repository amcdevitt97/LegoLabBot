import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Up from './Up';
import Down from './Down';
import Left from './Left';
import Right from './Right';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text></Text>

        <Up style={styles.up}/>
        <View style={{flex: 1, flexDirection: 'row',position: 'relative',
    top: 150,}}>
          <Left style={styles.left}/>
          <Right style={styles.right}/>
        </View>
        <Down style={styles.down}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  up:{
    position: 'relative',
    top: 150,
  },
  down:{
    position: 'relative',
    bottom: 200,
  },
  left:{
    marginRight:40,
  },
  right:{
    marginLeft: 40,
  },
});
