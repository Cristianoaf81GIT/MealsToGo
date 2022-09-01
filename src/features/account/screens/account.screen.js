import React from 'react';
import { ImageBackground,View, Text, StyleSheet } from 'react-native';
import imgBackground from '../../../../assets/home_bg.jpg';

export function AccountScreen() {
  return(
    <View style={styles.viewContainer}>
      <ImageBackground source={imgBackground} style={styles.backgroundImage}>
        <Text>Account screen</Text>
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  viewContainer: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  }
});
