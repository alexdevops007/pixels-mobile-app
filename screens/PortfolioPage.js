import { Button, StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";

const PortfolioPage = ({ navigation }) => {
  useEffect(() => {
    return () => {
      console.log("Composant Portfolio demonté");
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Portfolio</Text>
      <Button title="Vers Photo" onPress={() => navigation.navigate("Photo")} />
    </View>
  );
};

export default PortfolioPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e67e22",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {},
});
