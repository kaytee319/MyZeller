import React, {useState, type PropsWithChildren, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Dimensions
} from 'react-native';
const {height, width} = Dimensions.get('window');

import { useQuery } from '@apollo/client'
import { NavigationProps } from '../NavigationContainers/AppNavigator';
import { LIST_ZELLER_CUSTOMERS } from '../../query';
import { ListZellerCustomersQuery, ListZellerCustomersQueryVariables } from '../../src/gql/graphql';
import Indicator from '../Components/Indicator';
import RadioButtons from '../Components/RadioButtons';
import Button from '../Components/Button';
import UserCell from '../Components/UserCell';
import SlidingModal from '../Components/SlidingModal';

const buttonOptions = [
  {
    label: 'Admin',
    value: 'ADMIN'
  },
  {
    label: 'Manager',
    value: 'MANAGER'
  },
  {
    label: 'All Users',
    value: ''
  }
]

function UsersList(props: NavigationProps) {
  const {navigation} = props
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [userType, setUserType] = useState<string>('')
  const [showModal, setModal] = useState<boolean>(false)
  
  const {loading, error, data, refetch} = useQuery<ListZellerCustomersQuery, ListZellerCustomersQueryVariables>(LIST_ZELLER_CUSTOMERS,{
    variables: {
      limit: 100,
      filter: {
        role: {contains: ''},
      }
    },
    fetchPolicy: 'network-only' 
  })
  const userList = data?.listZellerCustomers?.items || []

  return <SafeAreaView
    style={styles.container}
  >
    {loading && <Indicator/>}    

    <Button
      label={userType ? `${userType}(s)` : 'Select User Type'}
      style={styles.buttonStyle}
      onPress={() => setModal(true)}
    />

    <FlatList
      data={userList}
      refreshing={loading}
      onRefresh={() => {
        setUserType('')
        refetch({
          limit: 100,
          filter: {
            role: {contains: ''},
          },
        })
        // setRefreshing(true)
      }}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={{marginTop: 48}}
      renderItem={({item}) => <UserCell
        name={item?.name || ''}
        role={item?.role || ''}
        id={item?.id}
        onPress={() => navigation.navigate('UserProfile', {
          id: item?.id
        })}
      />}
    />

    <SlidingModal
      isVisible={showModal}
      onBackdropPress={() => setModal(false)}
    >
      <SafeAreaView style={{
        backgroundColor: '#fff',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
      }}>
       <RadioButtons
        options={buttonOptions}
        value={userType || ''}
        onSelect={(item) => {
          setModal(false)
          setUserType(item)
          refetch({
            limit: 100,
            filter: {
              role: {contains: item},
            },
          })
        }}
        />
      </SafeAreaView>
    </SlidingModal>
  </SafeAreaView>
}

export default UsersList

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
  },
  buttonStyle: {
    alignSelf: 'center',
    width: width / 2,
    marginTop: 32
  }
})