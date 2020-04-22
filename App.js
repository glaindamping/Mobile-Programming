import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Greetings from './src/components/Greeting';
import list from './src/components/list';

// class App extends Component {

//   state = {
//     greeting: 'Selamat Datang. Welcome'
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Greeting text={this.state.greeting} />
//         <Text>{this.state.greeting}</Text>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default App;

import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

class Input extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            counter: 0
        }
    }
    onPress = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    render() {
        return (
            <View>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Enter your name"
                    onChangeText={text => this.setState({ name: text })}
                    defaultValue={this.state.name}
                />
                <Text>Your name is : {this.state.name}</Text>
                <Button
                    onPress={this.onPress}
                    title="Press Me"
                    color="#841584"
                />
                <Text>Counter: {this.state.counter}</Text>
            </View>
        )
    }
}

export default Input;



// const App = () => {}
//   return (
//     <View style={styles.container}>
//       <Text>Welcome</Text>
//     </View>
//   );
// }

// class App extends Componet{
//   constructor(){
//     super();

//     this.state = {
//       greatings: 'Selamat Datang'
//     }
//   }

//   render() {
//    return (
//     <View style={styles.container}>
//       <Greeting text='Selamat Datang'/>
//       <Text>{this.state.greeting}</Text>
//     </View>
//   )
// }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
