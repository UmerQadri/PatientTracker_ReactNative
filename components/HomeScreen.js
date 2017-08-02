 import React,{Component} from 'react';
import {Text, View, Button, ToolbarAndroid, StatusBar} from 'react-native';
import Navbar from './Navbar';
import {Toolbar } from 'react-native-material-ui';
import { BottomNavigation } from 'react-native-material-ui';

export default class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Welcome',
    header: <Navbar/>
  };

  constructor(props){

      super(props);

      this.state = {

          active: ''

      }


  }



  

  addNew(){
    const { navigate } = this.props.navigation;

    this.setState({ active: 'today' })
    navigate('Add')

  }


  render() {

    return (
      
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
          
        <Text></Text>


        <BottomNavigation active={this.state.active} hidden={false}>
        
            <BottomNavigation.Action
                key="today"
                icon="add"
                label="Add New"
                onPress={this.addNew.bind(this)}
                style={{container:{
                    marginLeft: 'auto',
                    marginRight: 'auto',

                }}}
            />
          
        </BottomNavigation>

      </View>
    );
  }
}

