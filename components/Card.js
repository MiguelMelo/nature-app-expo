import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Card({ imgUri, mainText, btnTitle }) {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image style={styles.image} source={{ uri: imgUri }} />
      </View>
      <View style={styles.sub}>
        <Text style={styles.mainText}>{mainText}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>{btnTitle}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '95%',
    backgroundColor: '#000',
    borderRadius: 10,
    elevation: 4,
    marginVertical: 10,
  },
  main: {
    flex: 1,
  },
  image: {
    flex: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  sub: {
    flex: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mainText: {
    textAlign: 'justify',
    fontSize: 14,
    fontFamily: 'sans-serif-light'
  },
  button: {
    height: 40,
    width: '50%',
    backgroundColor: 'white',
    borderRadius: 25,
    borderColor: '#e14c7f',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2
  },
  btnText: {
    fontSize: 14,
    fontFamily: 'sans-serif-light',
    color: '#e66995'
  },
});