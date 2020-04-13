import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Greetings from './src/componets/Greeting';

class App extends Component {

  state = {
    greeting: 'Selamat Datang. Welcome'
  }

  render() {
    return (
      <View style={styles.container}>
        <Greeting text={this.state.greeting} />
        <Text>{this.state.greeting}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;



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
