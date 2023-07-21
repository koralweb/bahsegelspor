import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import info from '../data/info';
import colors from '../data/colors';
import mainStyles from '../data/mainStyles';
import {observer} from 'mobx-react-lite';
import products from '../mobx/products';

const SingleProd = ({prod, setSingleProduct}) => {
  const isAdded = () => {
    return products.list.find(el => el.id === prod.id).added;
  };

  return (
    <View style={styles.cont}>
      <TouchableOpacity
        style={styles.backArrow}
        onPress={() => setSingleProduct(null)}>
        <FontAwesomeIcon icon={'angle-left'} />
      </TouchableOpacity>
      <Image source={prod.image} style={styles.image} />
      <Text style={styles.title}>{prod.name}</Text>
      <Text style={styles.price}>
        {prod.cost}
        {info.currency}
      </Text>
      <Text style={styles.desc}>{prod.description}</Text>
      <TouchableOpacity
        style={{
          ...styles.btn,
          backgroundColor: isAdded() ? '#20E300' : colors.blue,
        }}
        onPress={() => products.addProduct(prod.id, 1)}>
        <Text style={styles.btnText}>{isAdded() ? 'Done' : 'Add to cart'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ...mainStyles,
  cont: {
    zIndex: 100,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingTop: 45,
  },
  backArrow: {
    marginLeft: 20,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 125,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
  },
  title: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 22,
    color: 'grey',
  },
  price: {
    fontSize: 20,
    color: colors.blue,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
  },
  desc: {
    padding: 20,
  },
});

export default observer(SingleProd);
