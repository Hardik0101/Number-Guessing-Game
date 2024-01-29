import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/color";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
    // fontWeight: "bold",
    color: Colors.white100,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.white100,
    padding: 12,
    maxWidth:"80%",
    
  },
});
