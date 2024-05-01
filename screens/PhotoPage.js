import { Button, StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";

const PhotoPage = ({ navigation }) => {
  useEffect(() => {
    return () => {
      console.log("Composants demontés");
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Photo</Text>
      <Button title="Vers Home" onPress={() => navigation.popToTop()} />

      {/* <Button
        title="Vers Home"
        onPress={() => navigation.navigate("Home")}
      /> */}
    </View>
  );
};

export default PhotoPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2ecc71",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {},
});
