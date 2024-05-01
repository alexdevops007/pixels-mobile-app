import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PhotoPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Photo</Text>
    </View>
  );
}

export default PhotoPage

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2ecc71",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {},
});