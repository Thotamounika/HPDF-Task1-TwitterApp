
import React, { Component } from 'react';
import {Image} from 'react-native';
import {Content} from 'native-base'
import Cards from './Cards';
  class Home extends Component
  {
    render(){
    return(
<Content>
{/*Here you can pass different data for different tweets by using the same component Cards*/}
<Cards title="NativeBase" subtitle="@GeekyAnts .1d" notes="NativeBase is a free and open source UI component library for React Nativeto build native mobile apps for iOS and Android platforms."/>
<Cards title="NativeBase" subtitle="@GeekyAnts .2d" notes="One of our main goal with NativeBase 2.0 is to make it easy to theme the components with very little changes to components themselves."/>
<Cards title="Build your App" subtitle="@TechCrunch .4d" notes="Get on the mobile fast track with the featured apps of NativeBase, to build high-quality iOS and Android mobile apps."/>
</Content>

    );
  }
}
export default Home
