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
} from 'react-native';


const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView >
            <Text style={styles.header}>WelCome to React Native Home Screen</Text>
            <View style={styles.submitButtonView}>
                <Button
                    style={styles.submitButton}
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
    
    header: {
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 10,
    },
    
    submitButtonView: {
        backgroundColor: 'red',
        pointer : 'cursor',
    },
    submitButton: {
        fontSize : '40px',
    }
});

export default HomeScreen;
