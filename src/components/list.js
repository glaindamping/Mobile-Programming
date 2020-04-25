import React from 'react';
import { View, Text, FlatList, Image } from 'react-native'
import { render } from 'react-dom';

class List extends React.Component{
    constructor(){
        super();
        this.state = {
            students: [
                {
                    id: 1,
                    name: 'John',
                    faculty: 'Computer Science'
                },
                {
                    id: 2,
                    name: 'Jane',
                    faculty: 'Computer Science'
                },
                {
                    id: 3,
                    name: 'Bob',
                    faculty: 'Computer Science'
                },
                {
                    id: 4,
                    name: 'Mike',
                    faculty: 'Computer Science'
                },
            ],
            refreshing: false
        }
    }

    renderItem = ({ item }) => (
    <View style={{ padding: 20, borderBottomWidth: 1,
                   flexDirection: 'row', borderBottomColor: '#000' }}>
        <Image 
            source={{ url: 'https://robohash.org/${item.id}?set=set1'}}
            style={{ width: 50, height: 50 }}
        />
        <View>
        <Text>Name : {item.name}</Text>
        <Text>Username : {item.username}</Text>
        </View>
    </View>
    )   

    onRefresh = () => {
        this.getDataApi();
    }

    componentDidMount = () => {
        this.getDataApi();
    }

    getDataApi = async () => {
        this.setState({ refreshing: true})
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(json => this.setState({ users: json, refreshing: false}))
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await response.json();
        this.setState({ users: json, refreshing: false})

    }
render(){

    return(
        <View>
           <FlatList
                data={this.state.users}
                keyExtractor={item => item.id.toString()}
                renderItem={this.renderItem}
                refreshing={this.state.refreshing}
                onRefresh={ this.onRefresh}
            />
        </View>

        )
    }
}

export default List;