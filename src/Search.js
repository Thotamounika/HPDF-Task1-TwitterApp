import React, { Component } from 'react';
import {View} from 'react-native';
import {Button,Card,CardItem,Thumbnail,Left,Right,Body,Icon,Text,Content,Container,Header,Title,Item,Input} from 'native-base';
class Search extends Component{
  render(){
    return(

      <Header searchBar rounded style={{backgroundColor:'white'}}>
          <Item>
            <Icon name="arrow-back" style={{color:'skyblue'}}/>
            <Input placeholder="Search Twitter" />
          </Item>
        </Header>


    );
  }
}
export default Search
