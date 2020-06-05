import React, { Component } from 'react';
import {
  View, 
  Text
} from 'react-native';
import classNames from 'classnames';

export default class GoodsList extends Component {
  constructor(props) {  
    super(props);  
    this.state = { };  
  }  

  componentDidMount() {

  }

  clickGoods(value1, value2) {
    this.props.getGoodsList(value1, value2);
  }

  render() {
    console.log("父组件传递过来的数据====", this.props);
    const { type, goods } = this.props;
    return(
        <View>
            <Text>{type}{goods}</Text>
            <Text onPress={this.clickGoods.bind(this, '商品列表1', '商品列表2')}>触发父组件事件</Text>
        </View>
    )
  }
}
