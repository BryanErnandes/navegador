import {  StatusBar, } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';

import Routes from './src/routers/Routes';

export default function App() {
  return (

    <NavigationContainer>
      <StatusBar backgroundColor={'#000000'} barStyle='light-content' translucent={false}/>
     <Routes />
    </NavigationContainer>
  );
}
