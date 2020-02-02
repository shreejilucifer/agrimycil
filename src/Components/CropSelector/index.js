import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {withRouter} from 'react-router-native';
import DATA from './data';
import Item from './Item';

const CropSelector = ({history}) => {
  const [clicked, setClicked] = useState([]);
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
              onPress={() => {
                if (!clicked.includes(item.id))
                  setClicked([...clicked, item.id]);
                else {
                  let array = [...clicked];
                  let index = array.indexOf(item.id);
                  if (index !== -1) array.splice(index, 1);
                  setClicked(array);
                }
              }}>
              <Item
                name={item.name}
                image={item.image}
                tick={clicked.includes(item.id)}
              />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <TouchableOpacity
        style={styles.furtherButton}
        onPress={() => {
          history.push('/dashboard');
        }}>
        <Text style={styles.furtherButtonText}>આગળ વધો</Text>
      </TouchableOpacity>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    width: '80%',
    height: 370,
    alignSelf: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#C7C7C7',
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
