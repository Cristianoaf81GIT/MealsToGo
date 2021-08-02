import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { 
        StatusBar, 
        StyleSheet, 
        Text, 
        View, 
        SafeAreaView, 
        Platform 
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container} emulateUnlessSupported={true}>
        <ExpoStatusBar style="auto" /> 
        <View style={styles.search}><Text>search:</Text></View>
        <View style={styles.list}><Text>list</Text></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
        container: {
            flex: 3,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black'
        },
        search: {
            padding: 16,
            backgroundColor: 'green',
            width: '100%',
            marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
            marginBottom: 3
        },
        list: {
            flex: 2,
            backgroundColor: 'blue',
            width: '100%',
            padding: 16
        },
});
