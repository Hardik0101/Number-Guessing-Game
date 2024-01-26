import { View, Text, StyleSheet, SafeAreaView, Alert, FlatList } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberConatiner from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import Instruction from "../components/ui/Instruction";
import { Ionicons } from "@expo/vector-icons";
import GuessItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exlcude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exlcude) {
    return generateRandomBetween(min, max, exlcude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    (minBoundary = 1), (maxBoundary = 100);
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that number is wrong...!", [
        { text: "Sorry!", style: "cancle" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessrounds)=> [newRndNumber, ...prevGuessrounds])
  }

  const guessRoundsListLength= guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess </Title>
      <NumberConatiner>{currentGuess}</NumberConatiner>
      <Card>
        <Instruction style={styles.instruction}>Higer or Lover?</Instruction>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove-sharp" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData)=>(<GuessItem roundNumber={guessRoundsListLength - itemData.index}
          guess={itemData.item}/>)}
          keyExtractor={(item)=>item}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttons: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
  instruction: {
    marginBottom: 16,
  },
  listContainer:{
    flex: 1,
    padding:16
  }
});
