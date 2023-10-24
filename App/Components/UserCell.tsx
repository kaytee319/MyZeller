import React from 'react';
import {
  Text,
  Dimensions,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
const {height, width} = Dimensions.get('window');

interface userProps {
  name: string
  role: string
  id?: string
  onPress: () => void
}

function UserCell(props: userProps) {
  return (<TouchableOpacity
    style={styles.container}
    onPress={() => props.onPress()}
  >
    <View style={styles.thumbnail}>
      <Text style={styles.thumbnailText}>{props.name.charAt(0)}</Text>
    </View>

    <View style={{justifyContent: 'space-between', marginLeft: 16, flex: 1, height: 48}}>
       <Text style={styles.title}>{props.name || ''}</Text> 
       <Text style={styles.role}>{props.role || ''}</Text> 
    </View>
  </TouchableOpacity>)
}

export default UserCell

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width - 32,
    marginHorizontal: 16,
    marginVertical: 8,
    borderBottomWidth: 1,
    paddingBottom: 8,
    borderColor: '#eee'
  },
  title: {
    color: '#000',
    fontSize: 20,
    fontWeight: '400'
   },
  role: {
    color: '#A9A9A9',
    fontSize: 16,
   },
  thumbnail: {
    height: 48,
    width: 48,
    borderRadius: 4,
    backgroundColor: 'rgba(74, 144, 226, 0.25)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  thumbnailText: {
    color: '#4a90e2',
    fontSize: 16,
  }
})