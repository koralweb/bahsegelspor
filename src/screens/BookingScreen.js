import React, {useEffect, useState} from 'react';
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Wrapper from '../components/Wrapper';
import DatePicker from 'react-native-date-picker';
import mainStyles from '../data/mainStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const BookingScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [renderDate, setRenderDate] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setRenderDate(
      `${date.getDate()}.0${
        date.getMonth() + 1
      }.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`,
    );
  }, [date]);

  useEffect(() => {
    if (!done) {
      return;
    }
    setTimeout(() => {
      navigation.push('Home');
    }, 1000);
  }, [done]);

  return (
    <Wrapper navigation={navigation}>
      <View style={styles.cont}>
        <Text style={styles.title}>Mesa de reserva</Text>
        <Text style={styles.detailText}>Detalles del pedido</Text>
        <View style={styles.detailsBlock}>
          <TextInput placeholder={'Nombre'} style={styles.input} />
          <TextInput placeholder={'Teléfono'} style={styles.input} />
          <TextInput placeholder={'Correo electrónico'} style={styles.input} />
          <Text style={styles.renderDate}>{renderDate}</Text>
          <Button
            title={renderDate ? 'Cambiar fecha' : 'Cambiar fecha'}
            onPress={() => setOpen(true)}
          />
          <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </View>
        <TouchableOpacity style={styles.btn} onPress={() => setDone(true)}>
          <Text style={styles.btnText}>Orden completa</Text>
        </TouchableOpacity>
        {done && (
          <View style={styles.done}>
            <FontAwesomeIcon icon={'check-circle'} color={'green'} size={100} />
          </View>
        )}
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  ...mainStyles,
  cont: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    marginTop: 20,
  },
  detailText: {
    paddingLeft: 20,
    marginBottom: 10,
  },
  detailsBlock: {
    backgroundColor: '#fff',
    padding: 10,
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'grey',
    height: 40,
  },
  renderDate: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
  },
  done: {
    position: 'absolute',
    zIndex: 1000,
    backgroundColor: 'rgba(255,255,255,0.5)',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BookingScreen;
