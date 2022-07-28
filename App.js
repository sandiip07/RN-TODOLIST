// // on the top of this code we have imported all the components which is we are using in our task

// import { StatusBar } from "expo-status-bar"; // status bar are manage the display the current time,and network information.
// import { StyleSheet, Text, View, Button } from "react-native"; //here we have imported our UI and core components, which we are going to use in our application.
// export default function App() {
//   //This is the function It has all UI & other component which is shown in users screen.
//   return (
//     // view elment are treated  like a container , it has all part which is shown in users screen.

//     <View style={styles.container}>
//       {/* above style={styles.container} we have declared the name of container by (container) which has all th designing properties  */}
//       <View>
//         <Text> piese of text</Text>
//         {/* this is text part in our application it work like h1 h2 h3 ...*/}
//       </View>
//       <Text style={{ margin: 10, borderWidht: 2, borderColor: "orange" }}>
//         Another piese of text
//       </Text>
//       <Button title="click me" />
//       {/*Button tag is a self closing elment here ,
//         inside the title attribute the string are shows in side the like {click me , submit}
//         */}
//     </View>
//   );
// }
// {
//   /*below we have designed our UI we have to wrap all of the style in styles section ,
//    ans all styling are exist in the StyleSheet object*/
// }
// const styles = StyleSheet.create({
//   container: {
//     // container is the name of designing variable and it can be anything
//     flex: 1,
//     // In The react native a number is treated as self unit like (px , vh , vw ...)
//     backgroundColor: "white",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
//////////////////////////////////////////////////////////

import { StatusBar } from "expo-status-bar";
// import { TextInput } from "react-native-web";
import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  {
    /* below #use state intialize by empty string.# 1st usestate belong to first function And
           2nd one with second function
        1. ele = store the text which is enter by user
        2. ele = set the text which is entered by user*/
  }

  {
    /* usestate given as empty array bcz the item will come in the list formate */
  }
  const [courseGoals, setcourseGoals] = useState([]);
  const [modulIsVisible, setModulIsVisible] = useState(false); // it set what , that the item visible or not

  function startAddGoalHandler() {
    // thi sis will opens the model
    setModulIsVisible(true);
  }

  function endAddGoalHandler() {
    // this is will call when CANCEL button are clicked and the model remove , this is passed in below function
    setModulIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setcourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler(); // or we can write  setModulIsVisible(false); both are same
  }

  {
    /*here we are going to delete the item bcz here we was add the goals */
  }
  {
    /*{id} it is props and its alwasy unique*/
  }
  function deleteGoalHandler(id) {
    setcourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id); //here if the id is no match than it will return TRUE which is good for us
      // but if the match so this item will drops and no longer in the containner.
    });
  }

  return (
    <>
    <StatusBar color="light"/>
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="green"
        onPress={startAddGoalHandler}
      />
      <GoalInput
        visible={modulIsVisible}
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler}
      />
      {/* above when this condition is true then we rander goal inputs which internally contains the MODEL*/}
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id} //when we tap on the item it delete from the list
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor:"pink",
  },

  goalContainer: {
    flex: 5,
    borderTopWidth: 1,
  },

  // box1: {
  //   height: 100,
  //   width: 100,
  //   backgroundColor: "red",
  //   margin: 20,
  // },

  // box2: {
  //   height: 100,
  //   width: 100,
  //   backgroundColor: "blue",
  //   margin: 20,
  // },

  // box3: {
  //   height: 100,
  //   width: 100,
  //   backgroundColor: "orange",
  //   margin: 20,
  // },
});
