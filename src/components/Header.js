import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useRoute} from '@react-navigation/native';

const Header = ({menu, setMenu, navigation}) => {
  const routeName = useState(useRoute().name)[0];

  return (
    <View style={styles.cont}>
      {routeName !== 'Home' && (
        <TouchableOpacity onPress={() => setMenu(!menu)}>
          <FontAwesomeIcon
            icon={menu ? 'close' : 'bars'}
            size={30}
            color={'grey'}
          />
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={{marginLeft: 'auto'}}
        onPress={() => navigation.push('Cart')}>
        <FontAwesomeIcon icon={'shopping-cart'} size={30} color={'grey'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    zIndex: 3,
  },
});

export default Header;
