import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {withRouter, useParams} from 'react-router-native';
import LinearGradient from 'react-native-linear-gradient';

import BackgroundEllipse from '../Components/Header/BackgroundEllipse';
import logo from '../Images/logo.png';
import buybtn from '../Images/buybtn.png';
import backarrow from '../Images/backarrow.png';
import trichomeal from '../Images/trichomeal.png';

const Header = ({history, image, productName}) => {
  return (
    <View>
      <BackgroundEllipse type={2} />
      <View style={styles.titleContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>{productName}</Text>
      </View>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginRight: 20,
        }}
        onPress={() => history.goBack()}>
        <Image source={backarrow} style={{marginRight: 10}} />
        <Text style={styles.backBtn}>પાછળ</Text>
      </TouchableOpacity>
      <View style={styles.humanContainer}>
        <Image source={image} />
      </View>
      <View style={styles.seperator}></View>
    </View>
  );
};

const Data = ({data}) => {
  return (
    <ScrollView style={styles.dataContainer}>
      <Text style={styles.dataTitle}>માહિતી</Text>
      <Text style={styles.dataContent}>{data}</Text>
    </ScrollView>
  );
};

const BuyButton = () => {
  return (
    <LinearGradient
      colors={['#E6355F', '#FAF954']}
      start={{x: 1, y: 1}}
      end={{x: 0, y: 1}}
      style={styles.buyButtonContainer}>
      <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.buynow}>ખરીદો</Text>
        <View style={styles.buybtnContainer}>
          <Image source={buybtn} />
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const ProductDetailsPage = () => {
  let {pid} = useParams();
  return (
    <View style={styles.container}>
      <Header image={trichomeal} productName="ટ્રાઈકોમીલ" />
      <Data
        data="જેઓ ¢વ¢થતાǑૂવક પડો, જેથી તેઓ આનંદ મેળવવા માટે કામ કરʂ શકે અને દ: ખ, કેટલાક મહાન. ુ
કારણ કે, જેમ આપણે સૌથી નાના વ¢Ǎુઓ સાથે આવે છે, જે અમે કેટલાક લાભ મેળવવા ɫસવાય, તે
હʘમેશા દઃખદાયક શારʂɨરક ÜǘૃɫŰ લે છે આમાંથી; પરʘǍુ કોઈ Ǔૂલ શોધવાનો અɪધકાર છે, જે એકનો ુ
આનંદ માણી શકે છે આનંદ કે નકામી પɨરણામ નથી, અથવા જે તે પીડા ટાળે છે કે તે નથી પɨરણામી
આનંદ પેદા કરે છે?
જેઓ ¢વ¢થતાǑૂવક પડો, જેથી તેઓ આનંદ મેળવવા માટે કામ કરʂ શકે અને દ: ખ, કેટલાક મહાન. ુ
કારણ કે, જેમ આપણે સૌથી નાના વ¢Ǎુઓ સાથે આવે છે, જે અમે કેટલાક લાભ મેળવવા ɫસવાય, તે
હʘમેશા દઃખદાયક શારʂɨરક ÜǘૃɫŰ લે છે આમાંથી; પરʘǍુ કોઈ Ǔૂલ શોધવાનો અɪધકાર છે, જે એકનો ુ
આનંદ માણી શકે છે આનંદ કે નકામી પɨરણામ નથી, અથવા જે તે પીડા ટાળે છે કે તે નથી પɨરણામી
આનંદ પેદા કરે છે?જેઓ ¢વ¢થતાǑૂવક પડો, જેથી તેઓ આનંદ મેળવવા માટે કામ કરʂ શકે અને દ: ખ, કેટલાક મહાન. ુ
કારણ કે, જેમ આપણે સૌથી નાના વ¢Ǎુઓ સાથે આવે છે, જે અમે કેટલાક લાભ મેળવવા ɫસવાય, તે
હʘમેશા દઃખદાયક શારʂɨરક ÜǘૃɫŰ લે છે આમાંથી; પરʘǍુ કોઈ Ǔૂલ શોધવાનો અɪધકાર છે, જે એકનો ુ
આનંદ માણી શકે છે આનંદ કે નકામી પɨરણામ નથી, અથવા જે તે પીડા ટાળે છે કે તે નથી પɨરણામી
આનંદ પેદા કરે છે?
જેઓ ¢વ¢થતાǑૂવક પડો, જેથી તેઓ આનંદ મેળવવા માટે કામ કરʂ શકે અને દ: ખ, કેટલાક મહાન. ુ
કારણ કે, જેમ આપણે સૌથી નાના વ¢Ǎુઓ સાથે આવે છે, જે અમે કેટલાક લાભ મેળવવા ɫસવાય, તે
હʘમેશા દઃખદાયક શારʂɨરક ÜǘૃɫŰ લે છે આમાંથી; પરʘǍુ કોઈ Ǔૂલ શોધવાનો અɪધકાર છે, જે એકનો ુ
આનંદ માણી શકે છે આનંદ કે નકામી પɨરણામ નથી, અથવા જે તે પીડા ટાળે છે કે તે નથી પɨરણામી
આનંદ પેદા કરે છે?"
      />
      <BuyButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  humanContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    marginTop: 40,
    marginRight: 30,
  },
  seperator: {
    height: 2,
    width: '85%',
    backgroundColor: '#C3C3C3',
    alignSelf: 'center',
    position: 'absolute',
    top: 0,
    marginTop: 230,
    elevation: 3,
  },
  titleContainer: {
    flex: 1,
    marginTop: 10,
    marginLeft: 20,
    width: '45%',
  },
  title: {
    color: '#fff',
    fontWeight: 'normal',
    fontSize: 30,
    textAlign: 'left',
    textShadowColor: 'rgba(0, 0, 0, 0.16)',
    textShadowOffset: {width: 0, height: 5},
    textShadowRadius: 10,
  },
  backBtn: {
    color: '#3B76F6',
    fontSize: 15,
  },
  logo: {
    width: 100,
    height: 100,
  },
  dataContainer: {
    height: 350,
    marginTop: 220,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
  },
  dataTitle: {
    fontSize: 20,
  },
  dataContent: {
    marginTop: 10,
    textAlign: 'justify',
  },
  buyButtonContainer: {
    height: 50,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderTopLeftRadius: 100,
  },
  buynow: {
    fontSize: 30,
    marginRight: 10,
    color: '#fff',
  },
  buybtnContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#FAF954',
    borderRadius: 20,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default withRouter(ProductDetailsPage);
