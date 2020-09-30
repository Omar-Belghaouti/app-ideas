import React from 'react';
import {View, Text, ScrollView} from 'react-native';

export const Instruction = ({instructions}) => {
  return (
    <ScrollView
      style={{backgroundColor: 'white', height: '100%', paddingHorizontal: 20}}>
      <Text style={{fontWeight: 'bold', fontSize: 23, marginBottom: 10}}>
        Instructions
      </Text>
      <View style={{backgroundColor: 'white', height: '100%'}}>
        <Text style={{color: '#979797', fontWeight: 'bold', fontSize: 15}}>
          {instructions}
        </Text>
      </View>
    </ScrollView>
  );
};
