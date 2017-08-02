import React, {Component} from 'react';
import {StatusBar, ToolbarAndroid, StyleSheet, Text, View } from 'react-native';
import {Toolbar } from 'react-native-material-ui';


export default class Navbar extends Component{

    render(){

        return(

            <Toolbar
                   
                    centerElement="Patient Tracker"
                    searchable={{
                    autoFocus: true,
                    placeholder: 'Search',
                    }}
                    style={{
                    
                    container: {
                        paddingTop: StatusBar.currentHeight,

                    }


                    }}
                />



        );


    }



}

