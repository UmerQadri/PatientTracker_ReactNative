import React,{Component} from 'react';
import {Text, View, ToolbarAndroid, StatusBar,StyleSheet} from 'react-native';
import {Toolbar } from 'react-native-material-ui';
import { BottomNavigation, Button, Card } from 'react-native-material-ui';
import Navbar from './Navbar';
import { TextField } from 'react-native-material-textfield';
 export default class AddPatient extends Component {

   static navigationOptions = {
 
    header:  <Navbar/>

    };

    constructor(props){

      super(props);



    }

    render() {

      const { navigate } = this.props.navigation;

      return (

        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>

          <Card style={{container :{

            padding: 20,
            marginTop: 15

          }}}>
            <TextField
        label='Patient Name'
        title='*This Field is Required'
        
      />
      <TextField
        label='Patient Age'
        title='*This Field is Required'
        
      />
      <TextField
        label='Case'
        title='*This Field is Required'
        
      />
      <TextField
        label='Doctor Name'
        title='*This Field is Required'
        
      />
          </Card>
         

          <View>
          <Button
          
            raised
            primary
            onPress={() => navigate('Home')}
            text="Add"
            style={{container:{padding: 30}}}
          />

          </View>

        </View>
      );
    }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },});