import React from 'react';
import {View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {withRouter} from 'react-router-native';
import DATA from './data';
import Item from './Item';

const CropSelector = ({history}) => {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <FlatList
          columnWrapperStyle={{justifyContent: 'space-between'}}
          style={styles.listContainer}
          numColumns={2}
          horizontal={false}
          data={DATA}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => history.push(`/product-details/${item.id}`)}
              activeOpacity={0.9}>
              <Item name={item.name} image={item.image} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    width: '80%',
    flex: 1,
    alignSelf: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#C7C7C7',
    marginBottom: 10,
  },
  listContainer: {
    width: '100%',
  },
  furtherButton: {
    backgroundColor: '#E6355F',
    elevation: 3,
    borderRadius: 15,
    width: 140,
    height: 40,
    marginTop: 20,
    marginLeft: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  furtherButtonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default withRouter(CropSelector);
