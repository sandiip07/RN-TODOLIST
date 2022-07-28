import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable
      // it is the rippel effect which is shows when we tap on items
      android_ripple={{ color: "white" }}
      onPress={props.onDeleteItem.bind(this, props.id)}
      style={(pressed) => pressed && styles.pressedItem}
      // on the item press then this condition wil applies and item is shows transparant
    >
      {/* bind is a standered funwhich is allow to pre configure a function for future execution 
       first value = this keyWord
       secondValue = the first parameter received from the called function
      
      */}

      <Text style={styles.goalItem}>{props.text}</Text>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 10,
    borderRadius: 8,
    backgroundColor: "red",
    color: "white",
    textAlign:'center',
    
  },

  pressedItem: {
    opacity: 0.5,
  },

  // goalText: {
  //   marginTop:20,
  //   textAlign:'center',
  //   backgroundColor:'red',
  //   color: "white",
  //   padding: 10,
  // },
});
