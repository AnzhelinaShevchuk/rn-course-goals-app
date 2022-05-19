import React from 'react'
import {useState} from 'react'
import { TextInput, StyleSheet, View, Button, Modal } from 'react-native'
 
 function GoalInput (props) {
     const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
     setEnteredGoalText(enteredText);
  }

  function addGoalHandler(){
     props.onAddGoal(enteredGoalText);
     setEnteredGoalText('');
  }
return (
  <Modal visible={props.visible} animationType="slide">
<View style={styles.inputContainer}>
  <TextInput
    style={styles.textInput}
    placeholder="Course Goal!"
    onChangeText={goalInputHandler}
    value={enteredGoalText}
  />
  <View style={styles.buttonContainer}>
  <View style={styles.button}>
<Button title="ADD" onPress={addGoalHandler} />
  </View>
  <View style={styles.button}>
<Button title="Cancle" onPress={props.onCancel} />
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
    //flexDirection: 'coloum',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',

  },
  
textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
    marginRight: 8,
    padding: 8,
  },

  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },

  button: {
    width: '40%',
    marginHorizontal: 8,

 } 
});
