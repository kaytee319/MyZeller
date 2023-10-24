import React, {useState, useEffect} from 'react';
import {
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Animated
} from 'react-native';
const {height, width} = Dimensions.get('window');
import Modal from 'react-native-modal';

interface modalProps {
  isVisible: boolean | undefined
  onBackdropPress: () => void 
}
const SlidingModal: React.FC<React.PropsWithChildren<modalProps>> = (props) => {
  const [bounceValue, setBounceValue] = useState(new Animated.Value(100))

  useEffect(() => {
    toggleSubview()
  }, [])

  
  const toggleSubview = () => {     
    Animated.spring(bounceValue, {
      toValue: 100,
      velocity: 3,
      tension: 2,
      friction: 8,
      useNativeDriver: false
    }).start();
  }

  return(
    <Modal
    isVisible={props.isVisible}
    onBackdropPress={() => {
      try {
        props.onBackdropPress()
      } catch (error) {}
    }}
    onBackButtonPress={() => {
      try {
        props.onBackdropPress();
      } catch (error) {}
    }}
    avoidKeyboard={false}
    style={{
      width: width,
      marginLeft: 0,
      bottom: 0,
      flex: 0,
      position: 'absolute',
      marginBottom: 0,
    }}>
      {props.children}
    </Modal>
  )

}

export default SlidingModal