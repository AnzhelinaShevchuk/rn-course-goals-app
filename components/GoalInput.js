import React from 'react'
import {useState} from 'react'
import { TextInput, StyleSheet, View, Button, Modal, Image } from 'react-native'
 
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
  <Image source={require('../assets/goal.png')} style={styles.image}/>

  <TextInput
    style={styles.textInput}
    placeholder="Course Goal!"
    onChangeText={goalInputHandler}
    value={enteredGoalText}
  />
  <View style={styles.buttonContainer}>
  <View style={styles.button}>
<Button title="ADD" onPress={addGoalHandler}  color="#c399fa"/>
  </View> 
  <View style={styles.button}>
<Button title="Cancle" onPress={props.onCancel} color="#fa9ecc"/>
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
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6f5ff',
  },
  
image: {
width: 100,
height: 100,
margin: 20,
},

textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderBottomEndRadius: 6,
    width: '100%',
    marginRight: 8,
    padding: 16,
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
