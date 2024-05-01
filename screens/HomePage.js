import { StyleSheet, Text, View } from "react-native";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomePage</Text>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3498db",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#ffffff",
    fontSize: 40,
    fontFamily: "Roboto-Light",
  },
});
