import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {withRouter} from 'react-router-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../Components/Header/VideosPresentationPage/index';
import Videos from '../Images/videos';
import Teaching from '../Images/teaching';
import EllipseThree from '../Images/ellipse3';

const BGEllipse = () => <EllipseThree style={styles.bgellipse} />;

const DataCard = ({type, content, url, history}) => {
  return (
    <TouchableOpacity
      onPress={() => history.push(url)}
      style={styles.dataCardContainer}>
      {type === 'video' ? (
        <Videos style={styles.icon} />
      ) : (
        <Teaching style={styles.icon} />
      )}
      <LinearGradient
        colors={['#3B76F6', '#7AD13F']}
        start={{x: 0.5, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={styles.contentContainer}>
        <Text style={styles.content}>
          {content.toString().substring(0, 30)}...
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const VideosPresentationPage = ({history}) => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.wrapper}>
        <DataCard
          type="video"
          content="Cotton Remedies"
          url="/dashboard"
          history={history}
        />
        <DataCard
          type="teaching"
          content="Cotton Remedies"
          url="/dashboard"
          history={history}
        />
        <DataCard
          type="video"
          content="Cotton Remedies"
          url="/dashboard"
          history={history}
        />
        <DataCard
          type="teaching"
          content="Cotton Remedies"
          url="/dashboard"
          history={history}
        />
        <DataCard
          type="video"
          content="Cotton Remedies"
          url="/dashboard"
          history={history}
        />
        <DataCard
          type="teaching"
          content="Cotton Remedies"
          url="/dashboard"
          history={history}
        />
        <DataCard
          type="video"
          content="Cotton Remedies"
          url="/dashboard"
          history={history}
        />
        <DataCard
          type="teaching"
          content="Cotton Remedies"
          url="/dashboard"
          history={history}
        />
      </ScrollView>
      <BGEllipse />
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
  containerTitle: {
    fontSize: 20,
  },
  dataCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  contentContainer: {
    position: 'absolute',
    right: 0,
    width: '90%',
    height: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '15%',
    borderRadius: 15,
    elevation: -1,
  },
  content: {
    fontSize: 15,
    color: '#fff',
  },
  bgellipse: {
    elevation: -10,
    position: 'absolute',
    bottom: 0,
    left: -150,
    opacity: 0.3,
  },
});

export default withRouter(VideosPresentationPage);
