import React from 'react';
import {View, Image, Button, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
// icon pack
import Icon from 'react-native-vector-icons/MaterialIcons';
//navigation
import {useNavigation} from '@react-navigation/native';
export const MealImage = ({img}) => {
  //const
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={{
          width: '100%',
          height: '100%',
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}
        source={{
          uri: img,
        }}
      />
      <View
        style={{
          position: 'absolute',
          top: 5,
          left: 5,
        }}>
        <TouchableOpacity
          style={{backgroundColor: '#FF8A00', borderRadius: 8}}
          onPress={() => navigation.openDrawer()}>
          <Icon name="menu" size={36} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
