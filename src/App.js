import React, { Component } from 'react';
import { Container, Header, Content,Text, Body,Tab,Tabs,TabHeading ,Icon,Left,Title,Button,Fab,Drawer,Footer,FooterTab} from 'native-base';
import Home from './Home';
import Search from './Search';
import Notifications from './Notifications';
import SideBar from './MenuSample';

export default class Twitter extends Component {

  closeDrawer(){
        this._drawer._root.close()
      }
      openDrawer(){
        this._drawer._root.open()
}


  render() {
    return (

      <Drawer
        ref={(ref) => { this._drawer = ref; }}
        content={<SideBar navigator={this._navigator} />}
        onClose={() => this.closeDrawer()} >

      <Container>
      <Header hasTabs  style={{backgroundColor:"#ffffff"}}>


      <Button transparent onPress={()=>this.openDrawer()}  style={{backgroundColor:"transparent"}}>
      <Icon name='menu' style={{color:"gray"}}/>
      </Button>

        <Body>
      <Title style={{color:'black'}}>Home</Title>
      </Body>
      </Header>
      {/*When clicked on a tab you will be navigated to specified component.*/}
        <Tabs transparent>
          <Tab heading={ <TabHeading style={{backgroundColor:"transparent"}}><Icon name="home" style={{color:"gray"}} /></TabHeading>}>
            <Home />
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor:"transparent"}}><Icon name="search" style={{color:"gray"}} /></TabHeading>}>
            <Search />
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor:"transparent"}}><Icon name="md-notifications-outline" style={{color:"gray"}} /></TabHeading>}>
            <Notifications />
          </Tab>
          <Tab padder heading={ <TabHeading style={{backgroundColor:"transparent"}}><Icon name="md-mail" style={{color:"gray"}}/></TabHeading>}>
          <Text padder>This is messages Tab</Text>
          </Tab>
        </Tabs>
        <Fab
      position="bottomRight"
            ><Icon name="logo-twitter" /></Fab>
      </Container>
      <Footer>
          <FooterTab style={{backgroundColor:'white'}} >
          <Body>
              <Text style={{color:'skyblue'}} padder>All</Text>
              </Body>
            </FooterTab>
          <FooterTab style={{backgroundColor:'white'}}>
          <Body>
          <Text style={{color:'gray'}}>Mentions</Text>
          </Body>
          </FooterTab>
          <FooterTab style={{backgroundColor:'white'}}>
          <Body>
          <Icon name='settings'style={{color:'skyblue'}}/>
          </Body>
          </FooterTab>
        </Footer>
      </Drawer>
    );
  }
}
