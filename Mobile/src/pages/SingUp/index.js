import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function SingUp() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={() => navigation.navigate('SingIn')}>
        <Text>navigation to SingIn</Text>
      </TouchableOpacity>
    </View>
  );
}
