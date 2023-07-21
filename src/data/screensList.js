import HomeScreen from '../screens/HomeScreen';
import MarketScreen from '../screens/MarketScreen';
import BookingScreen from '../screens/BookingScreen';
import TranslScreen from '../screens/TranslScreen';
import CartScreen from '../screens/CartScreen';

const screensList = [
  {
    name: 'Home',
    title: 'Pagina principal',
    component: HomeScreen,
  },
  {
    name: 'Market',
    title: 'Comercio',
    component: MarketScreen,
  },
  {
    name: 'Booking',
    title: 'Reserva de mesa',
    component: BookingScreen,
  },
  {
    name: 'Transl',
    title: 'Transmisiones',
    component: TranslScreen,
  },
  {
    name: 'Cart',
    title: 'Carro',
    component: CartScreen,
  },
];

export default screensList;
