import React from 'react';
import {SafeAreaView, Text} from 'react-native';
// import styles from './styles';

const AttractionDetails = ({route, navigation}) => {
  const {item} = route?.params || {};
  const onBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView>
      <Text style={{margin: 32, color: '#000'}} onPress={onBack}>
        Back
      </Text>
      <Text style={{color: '#000'}}>{item?.name}</Text>
    </SafeAreaView>
  );
};

export default React.memo(AttractionDetails);
