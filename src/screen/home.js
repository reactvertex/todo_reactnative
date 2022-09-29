/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Button, View, ScrollView } from 'react-native';
import Card from './Card';
import { taskList } from '../constant/taskListData';
const HomeScreen = ({ navigation }) => {
    const [allTask, setAllTask] = useState(taskList);

    console.log(allTask,'ffffff');
    useEffect(() => {
        setAllTask(taskList)
    }, [])
    const handleDeleteTask = (item) => {
        let filteredData = allTask.filter(kl => kl.id !== item.id)
        setAllTask(filteredData)
    }
    const handleUpdateTask = (item) => {

    }
    return (
        <SafeAreaView >
            <Text style={styles.header}>Home  Page</Text>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {allTask.map(val => (
                    <Card handleDeleteTask={handleDeleteTask} handleUpdateTask={handleUpdateTask} taskDetail={val} />
                ))}
            </ScrollView>
            <View style={styles.submitButtonView}>
                <Button
                    title="+ Add New Task"
                    color="#333"
                    accessibilityLabel="Learn more about this purple button"
                    onPress={() =>
                        navigation.navigate('FormPage')
                    }
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    // contentContainer: {
    //     paddingVertical: 20
    //   },
    header: {
        fontSize: 20,
        fontWeight : 'bold',
        textAlign: 'center',
        paddingTop: 10,
    },

    submitButtonView: {
        backgroundColor: 'red',
        cursor: 'pointer',
        position: 'fixed',
        bottom: 38,
        width: '100%'
    },
});

export default HomeScreen;
