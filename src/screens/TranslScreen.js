import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Wrapper from '../components/Wrapper';
import translationsList from '../data/translationsList';

const TranslScreen = ({navigation}) => {
  const renderMatches = () => {
    return translationsList
      .filter(el => el.date >= new Date().getDate())
      .map(el => (
        <View style={styles.item} key={Math.random()}>
          <Text style={styles.liga}>{el.liga}</Text>
          <View style={{flexGrow: 1}}>
            <Text>
              {el.date}.07 - {el.time}
            </Text>
            <Text>{el.team1}</Text>
            <View style={styles.line} />
            <Text>{el.team2}</Text>
          </View>
        </View>
      ));
  };

  return (
    <Wrapper navigation={navigation}>
      <Text style={styles.title}>Sports Broadcasts</Text>
      <ScrollView style={styles.cont}>{renderMatches()}</ScrollView>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  cont: {
    paddingTop: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    marginTop: 20,
    marginBottom: 20,
  },
  item: {
    width: '90%',
    backgroundColor: '#fff',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 15,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  liga: {
    width: '35%',
    marginRight: 10,
    color: '#FEAC23',
    fontWeight: '700',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'grey',
  },
});

export default TranslScreen;
