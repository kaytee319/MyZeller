import React, {useState, type PropsWithChildren, useEffect} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  ListRenderItem,
  Dimensions
} from 'react-native';
const {height, width} = Dimensions.get('window');

import Button from '../Components/Button';
import { NavigationProps } from '../NavigationContainers/AppNavigator';


function Home (props: NavigationProps) {
  const {navigation} = props
  return(
    <SafeAreaView style={styles.container} >
      <Text style={styles.title} >
        MyZeller CodingChallenge
      </Text>
      <Button
        label='Proceed'
        style={styles.buttonStyle}
        onPress={() => {
          navigation.navigate('UsersList')
        }}
      />
    </SafeAreaView>
  )

}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 34,
    fontWeight: '400',
    marginHorizontal: 24
  },
  buttonStyle: {
    marginTop: 32,
    width: width - 48
  }
})