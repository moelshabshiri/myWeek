import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  Modal,
  Alert
} from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const changeGoal = goal => {
    setEnteredGoal(goal);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal, props.weekDay);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="fade" transparent={true}>
      <View style={styles.containerInput}>
        <TextInput
          placeholder={props.weekDay}
          style={styles.containerText}
          onChangeText={changeGoal}
          value={enteredGoal}
        />
        <View style={styles.buttons}>
          <Button title="ADD" onPress={addGoalHandler} />
          <Button title="CANCEL" color="red" onPress={props.cancel} />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row"
  },
  containerInput2: {
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center"
  },
  containerInput: {
    left: "5%",
    height: "13%",
    width: "90%",
    alignContent: "center",
    justifyContent: "space-around",
    alignItems: "center",
    position: "relative",
    bottom: -200,
    backgroundColor: "white",

    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 5,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15
  },

  containerText: {
    width: "80%",
    borderBottomColor: "red",
    borderBottomWidth: 1,
    marginBottom: 10,
    color: "black",
    alignItems: "center",
    padding: 5,
    height: "50%"
  }
});
