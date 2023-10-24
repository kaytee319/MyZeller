import React from 'react';
import {
  Text,
  Dimensions,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
const {height, width} = Dimensions.get('window');

interface buttonProps {
  isSelected?: boolean | undefined
  label: string
  onPress: () => void
}

function RadioInputButton(props: buttonProps) {  
  return (
    <TouchableOpacity
      onPress={() => {
        try {
          props.onPress();
        } catch (error) {}
      }}
      style={props.isSelected ? styles.selectedContainer : styles.container}>
      <View style={props.isSelected ? styles.selectedRadio : styles.radio} >
        <View style={{
          backgroundColor: props.isSelected ? '#4a90e2' : '#fff', 
          height: 12,
          width: 12,
          borderRadius: 7
          }}/>
      </View>
      <View style={styles.labelContainer}>
        <Text style={props.isSelected ? styles.selectedLabel : styles.label}>
          {props.label || ''}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default RadioInputButton;

const styles = StyleSheet.create({
  container: {
    width: width - 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E1E1E1',
    marginLeft: 24,
    marginTop: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    // height: 48,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedContainer: {
    width: width - 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#4a90e2',
    marginLeft: 24,
    marginTop: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    // height: 48,
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 12,
  },
  radio: {
    height: 18,
    width: 18,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  selectedRadio: {
    height: 18,
    width: 18,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#4a90e2',
  },
  selectedLabel: {
    fontSize: 16,
    lineHeight: 22,
    color: '#4a90e2',
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    lineHeight: 22,
    color: '#000',
    fontWeight: 'bold',
  },
});
