import { StyleSheet, View, Dimensions } from "react-native";
import Colors from "../../constants/color";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary700,
    borderRadius: 8,
    elevation: 6,
    // This css for ios Shadow effect
    shadowColor: "black",
    shadowOffset: { width: 4, height: 10 },
    shadowOpacity: 0.75,
    shadowRadius: 20,
  },
});
