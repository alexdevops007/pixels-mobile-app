import HomePage from "./screens/HomePage";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts
} from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PortfolioPage from "./screens/PortfolioPage";
import PhotoPage from "./screens/PhotoPage";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Italic": require("./assets/fonts/Roboto-Italic.ttf"),
    "Roboto-BoldItalic": require("./assets/fonts/Roboto-BoldItalic.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#2c3e50" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{
            title: "Accueil",
          }}
        />
        <Stack.Screen name="Portfolio" component={PortfolioPage} />
        <Stack.Screen name="Photo" component={PhotoPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
