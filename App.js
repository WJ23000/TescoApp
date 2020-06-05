import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import classNames from 'classnames';
import GoodsList from './src/components/GoodsList';
// import { getLineMap } from "./src/services/Index";

export default class Home extends Component {
  constructor(props) {  
    super(props);  
    this.state = { 
      title: '欢迎您',
      type: '联想',
      goods: '电脑'
    };  
  } 

  componentDidMount() {
    // 获取折线图数据
    // getLineMap("map").then((res) => {
    //     console.log("远程接口返回的数据", res);
    // })
  }

  setTitle(value) {
    this.setState({
      title: value
    })
  }

  getGoodsList(s1, s2) {
    console.log("子组件触发了父组件商品列表事件");
    console.log("子组件传递过来的参数====", s1, s2);
  }

  render() {
    const { title, type, goods } = this.state;
    return(
      <View style={styles.app}>
        <Text style={styles.title} onPress={this.setTitle.bind(this, "杭州欢迎您")}>{title}</Text>
        <GoodsList type={type} goods={goods} getGoodsList={this.getGoodsList.bind(this)}></GoodsList>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  app: {
    
  },
  title: {
    fontSize: 18,
    color: '#3982f6',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});