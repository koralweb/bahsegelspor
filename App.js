import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  faAngleLeft,
  faBars,
  faCheckCircle,
  faClose,
  faPencilSquare,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
import screensList from './src/data/screensList';

library.add(
  faBars,
  faShoppingCart,
  faClose,
  faAngleLeft,
  faPencilSquare,
  faCheckCircle,
);

const Stack = createNativeStackNavigator();

function App() {
  const renderScreens = () => {
    return screensList.map(screen => (
      <Stack.Screen
        name={screen.name}
        key={screen.name}
        component={screen.component}
        options={{headerShown: false}}
      />
    ));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>{renderScreens()}</Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
