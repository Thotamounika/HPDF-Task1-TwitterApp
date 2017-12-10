import React, { Component } from 'react';
import { List,ListItem, CheckBox, Text,} from 'native-base';
class Notifications extends Component{
  render(){
    return (


<List>
          <ListItem>
              <Text>Daily Stand Up</Text>
          </ListItem>
          <ListItem>
              <Text>Discussion with Client</Text>
          </ListItem>
          </List>

    );
  }
}

  export default Notifications;
