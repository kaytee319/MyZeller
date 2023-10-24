import React, {useState, type PropsWithChildren, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Dimensions,
  Text
} from 'react-native';
const {height, width} = Dimensions.get('window');
import {useQuery} from '@apollo/client'
import { GET_CUSTOMER } from '../../query';
import { NavigationProps } from '../NavigationContainers/AppNavigator';
import { GetZellerCustomerQuery, GetZellerCustomerQueryVariables } from '../../src/gql/graphql';
import Indicator from '../Components/Indicator';


function UserProfile(props: NavigationProps) {

  const {navigation, route} = props

  const {loading, error, data, refetch} = useQuery<GetZellerCustomerQuery, GetZellerCustomerQueryVariables>(GET_CUSTOMER,{
    variables: {
      id: route.params?.id
    },
    fetchPolicy: 'network-only' 
  })
  console.log('data: ', data, loading, error);
  const userData = data?.getZellerCustomer || {
    name: '',
    id: '',
    role: ''
  }

  return(<SafeAreaView
    style={{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center'
    }}
  >
    {loading && <Indicator/>}
    
    <View style={styles.thumbnail}>
      <Text style={styles.thumbnailText}>{userData?.name?.charAt(0)}</Text>
    </View>

    <Text style={styles.role}>{userData?.role}</Text>
    <Text style={styles.title}>{userData?.name}</Text>
  </SafeAreaView>)


}

export default UserProfile;

const styles = StyleSheet.create({
  thumbnail: {
    height: 160,
    width: 160,
    borderRadius: 32,
    marginTop: 64,
    backgroundColor: 'rgba(74, 144, 226, 0.25)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  thumbnailText: {
    color: '#4a90e2',
    fontSize: 64,
  },
  title:{
    color: '#000',
    fontSize: 48,
    marginTop: 32
  },
  role: {
    color: '#A9A9A9',
    fontSize: 24,
    marginTop: 8
  },
  id: {
    color: '#4a90e2',
    fontSize: 20,
    marginTop: 4
  }
})