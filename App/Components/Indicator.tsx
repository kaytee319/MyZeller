import React, {Component} from 'react';
import {View, ActivityIndicator, Dimensions, Text, Image, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');

interface indicatorProps {
  loaderText?: string
}

function Indicator(props: indicatorProps) {
  return(
    <View
        style={styles.container}>
        <View
          style={styles.loaderContainer}>
          <ActivityIndicator
            size="large"
            color="#4a90e2"
            animating={true}
            style={{marginLeft: 0}}
          />
          <Text
            style={styles.loaderText}>
            {props.loaderText || 'Please wait...'}
          </Text>
        </View>
      </View>
  )
}

export default Indicator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    elevation: 3,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.36)',
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  loaderContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 8,
    padding: 32,
    marginHorizontal: 16,
  },
  loaderText: {
    color: 'rgba(0, 0, 0, .87)',
    fontWeight: 'bold',
    marginTop: 32,
  }
})