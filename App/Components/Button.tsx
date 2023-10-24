import React from 'react';
import {
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
const {height, width} = Dimensions.get('window');

interface buttonProps {
  label: string
  isDisabled?: boolean | undefined
  onPress: () => void
  style?: {}
  labelStyle?: {}
}

function Button(props: buttonProps){

  return(<TouchableOpacity
    activeOpacity={0.75}
    style={[
      styles.container,
      {backgroundColor: props.isDisabled ? '#D9D9D9' : '#4a90e2'},
      props.style
    ]}
    onPress={() => {
      try {
        if (!props.isDisabled) props.onPress();
      } catch (error) {}
    }}
  >
    <Text
          textBreakStrategy={'simple'}
          style={[
            styles.label,
            props.labelStyle,
          ]}>
          {props.label || `Press Me!`}
        </Text>
  </TouchableOpacity>)
}

export default Button


const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
    backgroundColor: '#4a90e2',
    // flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 22,
  },
});

