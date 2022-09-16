/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  Image,
  FlatList,
} from 'react-native';



const App = () => {
  const [task, setTask] = useState('');
  const [data, setData] = useState([])
  
  const onChangeTask = (text) => {
    setTask(text)
  }
  const onPressLearnMore = () => {
    const taskDetail = {
      task: task,
      completed: 'false',
      index : data.length + 1
    }
    const allTask = [...data]
    allTask.push(taskDetail)
    setData(allTask)
    setTask('')
  }
  const handleDeleteTask = (item) =>{
   const updateData = data.filter( val => val.index == item.index )
   console.log(updateData,item)
   setData(updateData) 
  }
  
  return (
    <SafeAreaView >
      <Text style={styles.header}>WelCome to React Native</Text>
      <SafeAreaView height={300}>
        <SafeAreaView style={styles.dataHeader}>
          <Text style={styles.headingList}>Task</Text>
          <Text style={styles.headingList}>Status</Text>
          <Text style={styles.headingList}>Status</Text>
        </SafeAreaView>
        {data.map((val, index) => (
          <SafeAreaView key={index} style={styles.details}>
            <Text style={styles.header}>{val.task}</Text>
            <Text style={styles.header}>{val.completed}</Text>
            <Image style={styles.deletIcon} source={require('./src/delete.png')} onPress={handleDeleteTask}/>
          </SafeAreaView>
        ))}
      </SafeAreaView>
      <TextInput
        style={styles.input}
        placeholder='Task'
        onChangeText={onChangeTask}
        value={task}
      />
      
      <Button
        style={styles.submitButton}
        onPress={onPressLearnMore}
        title="Submit"
        color="#333"
        backgroundColor='#333'
        accessibilityLabel="Learn more about this purple button"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  deletIcon : {
   height : 30,
   width : 30,
   marginTop : 10,
   
  },
  dataHeader : {
    display : 'flex',
    flexDirection : 'row',
    backgroundColor : 'red',
    justifyContent : 'space-around',
  },
  headingList :{
    color : '#fff',
    fontSize : 25,
    padding : 20
  },
  details :{
   display : 'flex',
   flexDirection : 'row',
   justifyContent : 'space-around',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor : '#000'
  }
});

export default App;
