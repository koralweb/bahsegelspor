import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './Header';
import Menu from './Menu';
import {useRoute} from '@react-navigation/native';

const Wrapper = ({children, navigation}) => {
  const [menu, setMenu] = useState(useRoute().name === 'Home');
  return (
    <View style={styles.cont}>
      <Header navigation={navigation} menu={menu} setMenu={setMenu} />
      {menu && <Menu setMenu={setMenu} navigation={navigation} />}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    position: 'relative',
    flex: 1,
  },
});

export default Wrapper;
