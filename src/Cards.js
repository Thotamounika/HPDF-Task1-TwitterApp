import React, {Component} from 'react';
import {Image} from 'react-native';
import {Left,Body,Text,Icon,Thumbnail,Card,CardItem,Button,Content} from 'native-base';

class Cards extends Component{
render(){
return(
  //This is a skeleton structure for tweet card displayed on home screen. You can pass different data for different tweets using props
<Content>
<Card>
  <CardItem>
  <Left>
  <Thumbnail source={require('./icon.png')}/>


  <Text>{this.props.title}</Text>
  <Text note>{this.props.subtitle}</Text>

  </Left>
  </CardItem>
<CardItem>
<Text>
{this.props.notes}
</Text>
</CardItem>
  <CardItem cardBody>
  <Image source={require('./pic.jpeg')} style={{height: 200, width: null, flex: 1}}/>
  </CardItem>

  <CardItem >

  <Button transparent>
  <Icon active name='ios-text-outline' style={{color:"gray"}}/>
  <Text>10</Text>
  </Button>
  <Button transparent>
  <Icon active name='md-git-compare' style={{color:"gray"}}/>
  <Text>24</Text>
  </Button>

  <Button transparent>
  <Icon active name='heart' style={{color:"gray"}}/>
  <Text>24</Text>
  </Button>

  <Button transparent>
  <Icon active name='mail'style={{color:"gray"}}/>
  <Text>24</Text>
  </Button>
  </CardItem>
  </Card>
  </Content>
);
}
}

export default Cards;
