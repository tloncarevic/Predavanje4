import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


export function SettingsScreen({route, navigation}) {

    function handleHomePress(){
        navigation.navigate("Home")
    }

    return (
        <View style={styles.container}>
            <Text>Settings Screen</Text>
            <Button 
            title="Go to the Home screen"
            onPress={handleHomePress}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
});
