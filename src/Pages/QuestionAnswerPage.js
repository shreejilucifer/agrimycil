import React, {useState} from 'react';
import {
  View,
  Text,
  Linking,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {withRouter} from 'react-router-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../Components/Header/QuestionAnswerPage/index';
import Modal from 'react-native-modal';

const QuestionAnswerPage = ({history}) => {
  const [modal, setModal] = useState(false);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.wrapper}>
        <TouchableOpacity
          onPress={() => setModal(true)}
          style={styles.containerOne}>
          <LinearGradient
            colors={['#FAF954', '#3B76F6']}
            useAngle={true}
            angle={45}
            angleCenter={{x: 0.5, y: 0.5}}
            style={styles.insideContainer}>
            <Text style={styles.content}>તમારો સવાલ અમને લખીને મોકલો</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('tel:+919909047247')}
          style={styles.containerTwo}>
          <LinearGradient
            colors={['#E6355F', '#3B76F6']}
            useAngle={true}
            angle={120}
            angleCenter={{x: 0.5, y: 0.5}}
            style={styles.insideContainer}>
            <Text style={styles.content}>અમને ફોન પર તમારો સવાલ જણાવો</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <Modal
        isVisible={modal}
        animationIn="slideInDown"
        animationOut="slideOutDown">
        <View style={styles.modalContainer}>
          <Text style={styles.modalInputLabel}>તમારો સવાલ નીચે લખો:</Text>
          <TextInput style={styles.modalInput} multiline={true} />
          <TouchableOpacity
            onPress={() => setModal(false)}
            style={styles.modalButton}>
            <Text>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setModal(false)}
            style={styles.modalButton}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    marginTop: 25,
    marginRight: 25,
    marginLeft: 25,
    flex: 1,
  },
  containerOne: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 15,
    elevation: 4,
  },
  containerTwo: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 15,
    elevation: 4,
  },
  insideContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
  },
  modalInputLabel: {
    fontSize: 20,
  },
  modalInput: {
    flex: 1,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  modalButton: {
    marginTop: 10,
    borderRadius: 15,
    backgroundColor: '#FAF954',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default withRouter(QuestionAnswerPage);
