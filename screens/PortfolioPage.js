import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PortfolioPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Portfolio</Text>
    </View>
  );
}

export default PortfolioPage

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e67e22",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {},
});