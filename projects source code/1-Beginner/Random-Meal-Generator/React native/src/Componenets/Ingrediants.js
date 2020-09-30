import React from 'react';
import {View, Text, ScrollView} from 'react-native';

export const Ingrediants = ({ingredients}) => {
  return (
    <ScrollView style={{width: '100%', paddingHorizontal: 20}}>
      {ingredients.map((data, key) => {
        return (
          <View style={{flexDirection: 'row'}} key={key}>
            <View style={{flex: 1, marginVertical: 5}}>
              <Text
                style={{color: '#979797', fontWeight: 'bold', fontSize: 15}}>
                {'*  ' + data.strIngredient}
              </Text>
            </View>
            <View>
              <Text
                style={{color: '#979797', fontWeight: 'bold', fontSize: 15}}>
                {data.strMeasure}
              </Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};
