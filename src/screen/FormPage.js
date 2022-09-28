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
} from 'react-native';


const FormPage = () => {
    const [task, setTask] = useState('');
    const [data, setData] = useState([])
    const [chosenDate, setChosenDate] = useState(new Date());

    const onChangeTask = (text) => {
        setTask(text)
    }
    const onPressLearnMore = () => {
        const taskDetail = {
            task: task,
            completed: 'false',
            index: data.length + 1
        }
        const allTask = [...data]
        allTask.push(taskDetail)
        setData(allTask)
        setTask('')
    }
    const handleDeleteTask = (item) => {
        const updateData = data.filter(val => val.index !== item.index)
        console.log(item, data, updateData, 'ffffffffff')
        setData(updateData)
    }

    return (
        <SafeAreaView style={styles.formContainer}>
            <Text style={styles.header}>WelCome to React Native</Text>
            {/* <SafeAreaView height={300}>
                 <SafeAreaView style={styles.dataHeader}>
                     <Text style={styles.headingList}>Task</Text>
                     <Text style={styles.headingList}>Status</Text>
                 </SafeAreaView>
                 {data.map((val, index) => (
                     <SafeAreaView key={index} style={styles.details}>
                         <Text style={styles.header}>{val.task}</Text>
                         <Text style={styles.header} >{val.completed}</Text>
                         <Image style={styles.deletIcon} source={require('./src/delete.png')} onPress={handleDeleteTask(val)}></Image>
                     </SafeAreaView>
                 ))}
             </SafeAreaView> */}

            <TextInput
                style={styles.input}
                placeholder='Task'
                onChangeText={onChangeTask}
                value={task}
            />
            <TextInput
                multiline={true}
                style={styles.textArea}
                numberOfLines={10}
                placeholder='Description'

            />
            <View style={styles.container}>
                <DatePickerIOS
                    date={chosenDate}
                    onDateChange={setChosenDate}
                    mode={'date'}
                    // enum('date', 'time', 'datetime', 'countdown')
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
