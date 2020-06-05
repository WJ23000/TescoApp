import React, { Component } from 'react';
import {
  View, 
  Text
} from 'react-native';
import classNames from 'classnames';

export default class Home extends Component {
  constructor(props) {  
    super(props);  
    this.state = { 
      title : '首页' 
    };  
  }  

  componentDidMount() {

  }

  render() {
    const { title } = this.state;
    return(
        <View>
            <Text>{title}</Text>
        </View>
    )
  }
}
