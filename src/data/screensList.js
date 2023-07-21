import HomeScreen from '../screens/HomeScreen';
import MarketScreen from '../screens/MarketScreen';
import BookingScreen from '../screens/BookingScreen';
import TranslScreen from '../screens/TranslScreen';
import CartScreen from '../screens/CartScreen';

const screensList = [
  {
    name: 'Home',
    title: 'Главная',
    component: HomeScreen,
  },
  {
    name: 'Market',
    title: 'Магазин',
    component: MarketScreen,
  },
  {
    name: 'Booking',
    title: 'Бронь столика',
    component: BookingScreen,
  },
  {
    name: 'Transl',
    title: 'Трансляции',
    component: TranslScreen,
  },
  {
    name: 'Cart',
    title: 'Корзина',
    component: CartScreen,
  },
];

export default screensList;
