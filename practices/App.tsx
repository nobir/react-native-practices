import React, { useState } from "react";
import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goals, setGoals] = useState(new Array<string>());

  function goalInputHandler(enteredText: string) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    setGoals((currentGoals: Array<string>) => {
      return [...currentGoals, enteredGoal];
    });
  }

  function removeGoalHandler(value: string) {
    // console.log(value);
    let newGoals = goals.filter((item) => {
      // console.log(item);
      return item != value;
    });

    setGoals(newGoals);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.goalsContainer}>
        <View style={styles.goalsInputContainer}>
          <TextInput
            style={styles.goalsInput}
            onChangeText={goalInputHandler}
            placeholder="your goals..."
          />
        </View>
        <View style={styles.goalsAddBtnContainer}>
          <Button onPress={addGoalHandler} title="Add" />
        </View>
      </View>
      <ScrollView style={styles.goalsListsContainer}>
        {goals.map((g, i) => {
          return (
            <TouchableOpacity key={i} onPress={removeGoalHandler.bind(null, g)}>
              <View style={styles.goalsList}>
                <Text style={styles.goalsLisText}>{g}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingVertical: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  goalsInputContainer: {
    flex: 2,
    marginRight: 3,
  },
  goalsInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    paddingHorizontal: 5,
    borderRadius: 5,
    marginVertical: 5,
  },
  goalsAddBtnContainer: {
    flex: 1,
    marginLeft: 3,
  },

  goalsListsContainer: {},
  goalsList: {
    borderWidth: 1,
    borderColor: "#eeeeee",
    padding: 10,
    margin: 3,
    backgroundColor: "purple",
    borderRadius: 5,
  },
  goalsLisText: {
    color: "white",
  },
});
