import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../data/colors';
import {useRoute} from '@react-navigation/native';
import screensList from '../data/screensList';

const Menu = ({navigation, setMenu}) => {
  const routeName = useState(useRoute().name)[0];

  const goToScreen = screen => {
    setMenu(false);
    navigation.push(screen);
  };

  const renderMenuItems = () => {
    return screensList
      .filter(el => el.name !== routeName)
      .map(screen => (
        <TouchableOpacity
          key={screen.name}
          style={styles.item}
          onPress={() => goToScreen(screen.name)}>
          <Text style={styles.itemText}>{screen.title}</Text>
        </TouchableOpacity>
      ));
  };

  return (
    <View style={styles.cont}>
      <Image source={require('../assets/icon.png')} style={styles.icon} />
      {renderMenuItems()}
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#F2F2F2',
    zIndex: 2,
  },
  icon: {
    width: 200,
    height: 200,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 100,
  },
  item: {
    backgroundColor: colors.blue,
    width: '80%',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 15,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  itemText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default Menu;
