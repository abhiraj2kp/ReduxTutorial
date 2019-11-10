import React from 'react';
import {connect} from 'react-redux';
import {View,Text,TextInput,TouchableOpacity} from 'react-native';
import Store from '../Redux/Store/Store';

class SecondScreen extends React.Component { 

    state = {
        name : Store.getState().name,
        phone :Store.getState().phone
    }

    render(){
        return(
            <View>
                <TextInput placeholder = "Enter Name" value = {this.state.name} onChangeText = {(userName) => {this.setState({name : userName})}} />
                <TextInput placeholder = "Enter Name" value = {this.state.phone} onChangeText = {(userPhone) => {this.setState({phone : userPhone})}} />
                <TouchableOpacity onPress = {this.submitRecord}>
                    <Text>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {this.submitRecord}>
                    <Text>Move To Next Screen</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default SecondScreen;