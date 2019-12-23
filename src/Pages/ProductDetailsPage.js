import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {withRouter, useParams} from 'react-router-native';

const ProductDetailsPage = ({history}) => {
  let {pid} = useParams();
  return (
    <View>
      <Text>{pid}</Text>
    </View>
  );
};

export default withRouter(ProductDetailsPage);
