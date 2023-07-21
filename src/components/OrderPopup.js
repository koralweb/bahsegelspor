import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import order from '../mobx/order';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import colors from '../data/colors';

const OrderPopup = ({setDone}) => {
  const renderCode = () => {
    return order.number.split('').map(el => (
      <Text key={Math.random()} style={styles.codeSymbol}>
        {el}
      </Text>
    ));
  };

  return (
    <View style={styles.cont}>
      <View style={styles.orderBlock}>
        <Text>Muéstrale este código al mesero</Text>
        <Image source={require('../assets/barcode.png')} />
        <View style={styles.codeBlock}>{renderCode()}</View>
        <TouchableOpacity onPress={() => setDone(false)}>
          <FontAwesomeIcon
            icon={'pencil-square'}
            color={colors.blue}
            size={50}
            style={{marginTop: 30}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    zIndex: 100,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(255,255,255,0.5)',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingTop: 45,
  },
  orderBlock: {
    backgroundColor: '#fff',
    width: '90%',
    height: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: (Dimensions.get('window').height - 360) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  codeBlock: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 293,
  },
  codeSymbol: {
    fontSize: 22,
  },
});

export default OrderPopup;
