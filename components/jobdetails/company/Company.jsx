import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './company.style';
import { icons } from '../../../constants';
import { checkImageURL } from '../../../utils';

const Company = ({ companyLogo, jobTitle, companyName, location}) => {
  return (
    <View>
      <View>
        <Text>Company</Text>
      </View>
    </View>
  )
}

export default Company