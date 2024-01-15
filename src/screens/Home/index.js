import React from 'react';
import {View} from 'react-native';

import {IconButton} from '../../components';
import {COLORS, icons} from '../../constants';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <IconButton
        icon={icons.scan}
        containerStyle={{
          height: 60,
          width: 60,
          borderRadius: 30,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS.light,
        }}
        iconStyle={{
          width: 50,
          height: 50,
          tintColor: COLORS.primary,
        }}
        onPress={() => {
          navigation.navigate('ScanProduct');
        }}
      />
    </View>
  );
};
export default Home;
