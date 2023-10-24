import React, {useState} from 'react';
import {
  FlatList,
} from 'react-native';
import RadioInputButton from './RadioInputButton';

interface buttonProps {
  options:  { label: string, value: string }[]
  selected?: any
  value?: string | undefined
  style?: {}
  onSelect: (value:string) => void
}

function RadioButtons(props: buttonProps){
  const [value, setValue] = useState(props.value || '')

  return(
    <FlatList
      data={props.options}
      contentContainerStyle={[
          {
            alignItems: 'flex-start',
            borderWidth: 0,
          },
          props.style,
        ]}
        renderItem={({item}) => <RadioInputButton
        label={item.label}
        isSelected={item.value == value}
        onPress={() => {
          // setRefreshing(true);
          setValue(item.value);
          try {
            props.onSelect(item.value);
          } catch (error) {}
        }} />}
    />
  )
}

export default RadioButtons;