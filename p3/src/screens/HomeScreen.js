import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import CustomButton from '../components/CustomButton';

const HomeScreen = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Component mounted or updated!');

    return () => {
      console.log('Cleanup when component unmounts');
    };
  }, [counter]);

  const incrementCounter = () => {
    setCounter(prevCount => prevCount + 1);
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://your-image-url.com/background.jpg' }} 
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>REHAN TIFANNO GACORRRRR</Text>
        <Text style={styles.counterText}>Counter: {counter}</Text>
        <CustomButton title="Increment" onPress={incrementCounter} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent overlay
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  counterText: {
    fontSize: 22,
    color: '#fff',
    marginBottom: 30,
  },
});

export default HomeScreen;
