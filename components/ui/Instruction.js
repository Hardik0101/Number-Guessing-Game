import { View, StyleSheet, Text } from "react-native";
import Colors from "../../constants/color";

function Instruction({ children, style }) {
  return <Text style={[styles.textTitle, style]}>{children}</Text>;
}

export default Instruction;

const styles = StyleSheet.create({
  textTitle: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 24,
  },
});
