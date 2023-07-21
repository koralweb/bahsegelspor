import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Wrapper from '../components/Wrapper';
import products from '../mobx/products';
import info from '../data/info';
import colors from '../data/colors';
import SingleProd from '../components/SingleProd';

const MarketScreen = ({navigation}) => {
  const [singleProduct, setSingleProduct] = useState(null);
  const renderProductItems = () => {
    return products.list.map(pr => (
      <TouchableOpacity
        key={pr.name}
        style={styles.item}
        onPress={() => setSingleProduct(pr)}>
        <Image source={pr.image} style={styles.image} />
        <Text style={styles.title}>{pr.name}</Text>
        <Text style={styles.price}>
          {pr.cost}
          {info.currency}
        </Text>
      </TouchableOpacity>
    ));
  };

  return (
    <Wrapper navigation={navigation}>
      <ScrollView style={styles.cont}>{renderProductItems()}</ScrollView>
      {singleProduct && (
        <SingleProd prod={singleProduct} setSingleProduct={setSingleProduct} />
      )}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  cont: {
    paddingTop: 20,
  },
  item: {
    backgroundColor: '#fff',
    width: '90%',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  title: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20,
    color: 'grey',
  },
  price: {
    fontSize: 18,
    color: colors.blue,
    fontWeight: '700',
  },
});

export default MarketScreen;
