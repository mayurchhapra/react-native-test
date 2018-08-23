/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React, {Component} from 'react';
// import {Platform, Image, Text, View} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev.',
// });

// export default class App extends Component {
//   render() {
//     let pic = {
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };
//     return (
//       <View>
//         <Image source={pic} style = {{width: 200, height: 100}} />
//       </View>
//     );
//   }
// }


// // -------------- Props ----------------
// import React , { Component } from 'react';
// import { Text, View } from 'react-native';

// class Greeting extends Component {
//   render() {
//     return (
//       <Text> Hello {this.props.name} </Text>
//     );
//   }
// }

// export default class Second extends Component {
//   render(){
//     return(
//       <View>
//         <Greeting name='ABC'/>
//         <Greeting name='DEF'/>
//         <Greeting name='GHI'/>
//       </View>
//     );
//   }
// }

// // -------------- State ----------------

// import React, { Component } from 'react';
// import { AppRegistry, Text, View } from 'react-native';

// class Blink extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {isShowingText: true};

//     // Toggle the state every second
//     setInterval(() => {
//       this.setState(previousState => {
//         return { isShowingText: !previousState.isShowingText };
//       });
//     }, 1000);
//   }

//   render() {
//     let display = this.state.isShowingText ? this.props.text : ' ';
//     return (
//       <Text>{display}</Text>
//     );
//   }
// }

// export default class BlinkApp extends Component {
//   render() {
//     return (
//       <View>
//         <Blink text='I love to blink' />
//         <Blink text='Yes blinking is so great' />
//         <Blink text='Why did they ever take this out of HTML' />
//         <Blink text='Look at me look at me look at me' />
//       </View>
//     );
//   }
// }

// // -------------- Style ----------------

// import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default class StyleEx extends Component{
//   render() {
//     return (
//       <View>
//         <Text style={style.red}>This Red.</Text>
//         <Text style={style.blue}>This Blue.</Text>
//         <Text style={style.green}>This Green.</Text>
//       </View>
//     );
//   }
// }

// const style = StyleSheet.create({
//   blue:{
//     color: 'blue',
//     fontSize: 30
//   },
//   red: {
//     color: 'red',
//     fontSize: 10
//   },
//   green: {
//     color: 'green',
//     fontSize: 50
//   }
// });

// // -------------- Style [ Hight Width ]----------------

// import React, { Component } from 'react';
// import { View } from 'react-native';

// export default class FixedDimensionsBasics extends Component {
//   render() {
//       return (
//         <View>
//           <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//           <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
//           <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
//         </View>
//       );
//   }
// }

// // ------------- Style [ Flex ]----------------
// import React, { Component } from 'react';
// import { View, Text } from 'react-native';

// export default class FlexDimenstionsBasics extends Component {
//   render() {
//     return(
//       <View style={{flex: 1}}>
//         <View style={{flex: 1, backgroundColor: 'powderblue'}}></View>
//         <View style={{flex: 2, backgroundColor: 'skyblue'}}></View>
//         <View style={{flex: 3, backgroundColor: 'steelblue'}}></View>
//       </View>
//     );
//   }
// }

// // ------------- Style [ Layout with Flexbox ]----------------
  // //-------- ROW WISE-----
// import React, { Component } from 'react';
// import { View } from 'react-native';

// export default class FlexDimenstionsBasics extends Component {
//   render() {
//     return (
//       <View style={{flex: 1, flexDirection: 'row'}}>
//         <View style={{height: 50, width: 50, backgroundColor: 'powderblue'}} />
//         <View style={{height: 50, width: 50, backgroundColor: 'skyblue'}} />
//         <View style={{height: 50, width: 50, backgroundColor: 'steelblue'}} />
//         <View style={{height: 50, width: 50, backgroundColor: 'powderblue'}} />
//         <View style={{height: 50, width: 50, backgroundColor: 'skyblue'}} />
//         <View style={{height: 50, width: 50, backgroundColor: 'steelblue'}} />
//         <View style={{height: 50, width: 50, backgroundColor: 'powderblue'}} />
        
//       </View>
//     );
//   }
// }

// //-------- COLUMN WISE-----
// import React, { Component } from 'react';
// import { View } from 'react-native';

// export default class FlexDimenstionsBasics extends Component {
//   render() {
//     return (
//       // <View style={{
//       //   flex:1,
//       //   flexDirection: 'column',
//       //   justifyContent: 'space-between'
//       // }}>
//       <View style={{
//         flex: 1,
//         flexDirection: "column",
//         justifyContent: 'center',
//         alignItems: "center"
//       }} >
//         <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}></View>
//         <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }}></View>
//         <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }}></View>
        
//       </View>
//     );
//   }
// }

// // ------------- Handling Text Input ----------------

// import React, { Component } from 'react';
// import { Text, TextInput, View } from 'react-native';

// export default class TextInputExample extends Component {
//   constructor(props){
//     super(props);
//     this.state = {text: ''};
//   }

//   render() {
//     return (
//       <View style={{padding: 10}}>
//         <TextInput
//          style={{height: 40}}
//          placeholder = "Enter Text here."
//          onChangeText={(text) => this.setState({text})}
//          />
//          <Text style={{padding: 10, fontSize: 42}} >
//           {this.state.text}
//          </Text>
//       </View>
//     );
//   }
// }

// // ------------- Displaying Button ----------------

// import React