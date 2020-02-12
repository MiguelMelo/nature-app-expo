import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Header from './components/Header';
import Card from './components/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <Header 
        headerTitle="NATURE" 
        leftSide={
          <Ionicons name="md-menu" size={32} color="white" />
        } 
        rightSide={
          <Ionicons name="md-star-outline" size={32} color="white" />
        }
      />
      <ScrollView contentContainerStyle={styles.content}>
        <Card 
          btnTitle="Visitar"
          mainText="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          imgUri="http://bit.ly/img1-projeto-expo"
        />
        <Card 
          btnTitle="Visitar"
          mainText="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          imgUri="http://bit.ly/img2-projeto-expo"
        />
        <Card 
          btnTitle="Visitar"
          mainText="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          imgUri="http://bit.ly/img3-projeto-expo"
        />
        <Card 
          btnTitle="Visitar"
          mainText="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          imgUri="http://bit.ly/img4-projeto-expo"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    alignItems: 'center',
  },
});
