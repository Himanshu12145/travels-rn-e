import {Text} from 'react-native';
import React from 'react';
import styles from './styles';
const Title = ({text = 'my name is khan'}) => {
  return <Text style={styles.title}>Title- {text}</Text>;
};

export default React.Memo(Title);
