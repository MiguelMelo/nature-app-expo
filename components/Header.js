import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header({ leftSide, headerTitle, rightSide }) {
  return (
    <View style={styles.header}>
      {leftSide || <Ionicons name="md-menu" size={32} color="white" />}
      <Text style={styles.headerTitle}>{headerTitle}</Text>
      {rightSide || <Ionicons name="md-star-outline" size={32} color="white" />}
    </View>
  );
}; 

const styles = StyleSheet.create({
  header: {
    height: 70,
    paddingHorizontal: 15,
    backgroundColor: '#b62e5f',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerTitle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
    fontFamily: 'sans-serif-thin'
  },
});