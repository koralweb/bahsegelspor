import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Wrapper from '../components/Wrapper';
import products from '../mobx/products';
import info from '../data/info';
import colors from '../data/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {observer} from 'mobx-react-lite';
import mainStyles from '../data/mainStyles';
import OrderPopup from '../components/OrderPopup';

const CartScreen = ({navigation}) => {
  const [done, setDone] = useState(false);
  const renderProducts = () => {
    return products.list
      .filter(el => el.added)
      .map(prod => {
        return (
          <View style={styles.item} key={prod.name}>
            <Image source={prod.image} style={styles.image} />
            <View>
              <Text style={styles.title}>{prod.name}</Text>
              <Text style={styles.price}>
                {prod.cost}
                {info.currency}
              </Text>
            </View>
            <View style={styles.closeBlock}>
              <TouchableOpacity onPress={() => products.removeProduct(prod.id)}>
                <FontAwesomeIcon icon={'close'} color={'red'} />
              </TouchableOpacity>
            </View>
          </View>
        );
      });
  };

  return (
    <Wrapper navigation={navigation}>
      {products.list.some(el => el.added) ? (
        <>
          <ScrollView style={styles.cont}>{renderProducts()}</ScrollView>
          <TouchableOpacity style={styles.btn} onPress={() => setDone(true)}>
            <Text style={styles.btnText}>Complete order</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text style={styles.emptyText}>Cart is empty</Text>
      )}
      {done && <OrderPopup setDone={setDone} />}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  ...mainStyles,
  cont: {
    paddingTop: 20,
  },
  item: {
    backgroundColor: '#fff',
    width: '90%',
    marginRight: 'auto',
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    color: 'grey',
  },
  price: {
    fontSize: 16,
    color: colors.blue,
    fontWeight: '700',
    marginTop: 10,
  },
  closeBlock: {
    marginLeft: 'auto',
    marginRight: 10,
  },
  emptyText: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 50,
    color: 'grey',
  },
});

export default observer(CartScreen);
