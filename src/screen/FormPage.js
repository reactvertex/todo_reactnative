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
    StyleSheet,
    Text,
    TextInput,
    Button,
    Image,
    View,
    DatePickerIOS,
    AsyncStorage,
    
} from 'react-native';


const FormPage = () => {
    const [task, setTask] = useState('');
    const [taskDescription, setTaskDescription] = useState('')
    const [data, setData] = useState([]);
    const [chosenDate, setChosenDate] = useState(new Date());
    //  console.log( AsyncStorage.getItem('allTask'));
    const onPressLearnMore = async () => {
        try {
            const taskDetail = {
                task: task,
                completed: 'false',
                index: data.length + 1,
                description : taskDescription,
                date : chosenDate
            }
            const allTask = [...data]
            allTask.push(taskDetail)
            console.log(allTask,'allTaskallTask');
            await AsyncStorage.setItem('allTask', JSON.stringify(allTask));
            setData(allTask)
            setTask('')
            setTaskDescription('')   
        } catch (error) {
            
        }
      
    }
   

    return (
        <SafeAreaView style={styles.formContainer}>
            <Text style={styles.header}>WelCome to React Native</Text>
            <TextInput
                style={styles.input}
                placeholder='Task'
                onChangeText={(value) =>setTask(value)}
                value={task}
            />
            <TextInput
                multiline={true}
                style={styles.textArea}
                numberOfLines={10}
                placeholder='Description'
                onChangeText={(value) =>setTaskDescription(value)}
                value={taskDescription}
            />
            <View style={styles.container}>
                <DatePickerIOS
                    date={chosenDate}
                    onDateChange={setChosenDate}
                    mode={'date'}
                />
            </View>
            <View style={styles.submitButtonView}>
                <Button
                    onPress={onPressLearnMore}
                    style={styles.submitButton}
                    title="Submit"
                    color="#333"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 10,
    },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        borderWidth: 0,
        borderRadius: 5,
        backgroundColor: '#e3e1d8'
    },
    textArea: {
        height: 200,
        textAlignVertical: 'top',
        borderWidth: 0,
        borderRadius: 5,
        backgroundColor: '#e3e1d8',
        margin: 12,
        padding: 10,
    },
    container: {
      borderStyle : 'solid',
      borderColor : '#000',
      },
    submitButtonView: {
        backgroundColor: 'red',
        width: '95%',
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 30,
    },
    submitButton: {
        fontSize: '40px',
    }
});

export default FormPage;
