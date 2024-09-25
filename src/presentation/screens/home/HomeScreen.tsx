import React from 'react';
import { View, Text, Button } from 'react-native';
import { AirplaneIcon} from '../../icons/Icons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />

      <AirplaneIcon />
    </View>
  );
};

export default HomeScreen;
