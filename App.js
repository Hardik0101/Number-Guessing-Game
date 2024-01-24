import { StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return <StartGameScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
});
