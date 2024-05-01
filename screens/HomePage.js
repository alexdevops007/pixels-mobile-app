import { Button, StyleSheet, Text, View } from "react-native";

const HomePage = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Portfolio')
    // navigation.push("Portfolio");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button title="Vers Portfolio" onPress={handlePress} />
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
