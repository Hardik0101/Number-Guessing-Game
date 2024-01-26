import { StyleSheet, View } from "react-native";
import Colors from "../../constants/color";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary700,
    borderRadius: 8,
    elevation: 4,
    // This css for ios Shadow effect
    shadowColor: "black",
    shadowOffset: { width: 1, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
});
