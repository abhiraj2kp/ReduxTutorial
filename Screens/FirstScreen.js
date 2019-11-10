import React from 'react';
import {connect} from 'react-redux';
import {View,Text,TextInput,TouchableOpacity} from 'react-native';
import {AddNewUser} from '../Redux/Action/Action';

class FirstClass extends React.Component { 

    state = {
        name : "",
        phone : ""
    }

    submitRecord = () => {
        this.props.add({name : this.state.name,phone : this.state.phone});
    }

    render(){
        
        return(
            <View>
                <TextInput style = {{padding : 10, margin : 10, backgroundColor : "#9E9E9E"}} placeholder = "Enter Name" value = {this.state.name} onChangeText = {(userName) => {this.setState({name : userName})}} />
                <TextInput  style = {{padding : 10, margin : 10, backgroundColor : "#9E9E9E"}} placeholder = "Enter Phone" value = {this.state.phone} onChangeText = {(userPhone) => {this.setState({phone : userPhone})}} />
                <TouchableOpacity style = {{backgroundColor : "#9E9E9E",padding : 10, margin : 10, alignItems : "center"}} onPress = {this.submitRecord}>
                    <Text>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {{backgroundColor : "#9E9E9E",padding : 10, margin : 10, alignItems : "center"}} onPress = {() => this.props.navigation.navigate("SecondScreen")}>
                    <Text>Move To Next Screen</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userRecord : state.userRecord
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        add : (userRecordData) => {dispatch(AddNewUser(userRecordData));}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FirstClass);