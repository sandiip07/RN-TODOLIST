import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

{
  /* Goal Input fun receive value as props the props value are entered by user*/
}
function GoalInput(props) {
  const [enteredGoalText, setenteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setenteredGoalText(enteredText);
  }

  {
    /*addGoalHandler(), this fun add goal in the list which is entered by the user and shows on the screen 
    it another part of code is written in app.js
    */
  }
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setenteredGoalText("");
  }

  return (
    // this properties are made, when we click on the 'add goal' so it slide up and shows the add goal menu
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/image/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course Goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="red"/>
            {/*THIS FUN call when it will press by user*/}
          </View>
          <View style={styles.button}>
            <Button title="Cancle" onPress={props.onCancel} color="green" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    padding: 16,

    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    width: "100%",
   backgroundColor:"#e4d0ff",

   
    color:"#120438",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: "70%",
    marginTop: 20,

    marginHorizontal: 8,
  },
});
