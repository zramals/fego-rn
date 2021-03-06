import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Calendar } from 'fego-rn';
import { Style } from '../../../common';

export default class Page extends Component {
  constructor() {
    super();
    this.state = {
      date1: new Date(),
      date2: new Date(2017, 6, 20),
    };
  }
  render() {
    const minDate = new Date(2017, 5, 8);
    const maxDate = new Date(2017, 8, 17);
    return (
      <ScrollView style={{ backgroundColor: '#fff' }}>
        <Text style={Style.title}>日历1使用非受控属性，您选择的是：{this.state.date1.toString()}</Text>
        <Calendar
          defaultSelectedDate={this.state.date1}
          onChange={(date) => {
          this.setState({
            date1: date,
          });
        }}
        />
        <Text style={Style.title}>日历2使用受控属性，可选日期范围：2017.06.08 - 2017.09.17；您选择的是：{this.state.date2.toString()}</Text>
        <Calendar
          maxDate={maxDate}
          minDate={minDate}
          selectedDate={this.state.date2}
          onChange={(date) => {
            this.setState({
              date2: date,
            });
          }}
          startFromMonday
          weekdays={['周一', '周二', '周三', '周四', '周五', '周六', '周日']}
          rowFixedSix
        />
      </ScrollView>
    );
  }
}
