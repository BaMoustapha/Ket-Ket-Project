import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AccueilPrincipal = () => {
  return (
    <View style={styles.container}>
      <Text>HELLO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AccueilPrincipal;
