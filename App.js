import React from 'react';
import {Provider} from 'react-redux'
import {View,Text,TextInput,TouchableOpacity} from 'react-native';
import Navigation from './Navigation/Navigation';
import Store from './Redux/Store/Store';
class App extends React.Component {
  
  render(){
    return(
      <Provider store = {Store}>
        <Navigation />
      </Provider>
    )
  }
}

export default App;