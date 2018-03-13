import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'

class App extends Component {
	constructor() { //part of react
		super();
		//things that can change and react in our app (from the parent) || 'describes' an app
		//because it has state it is a 'smart' component 
		this.state = {
			robots: [],
			searchField: '',
		}
	}
	//then passes these down as 'props'

	//part of react
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({ robots: users }));
	}

	onSearchChange = (event) => {
		//updates searchField state above...to whatever is typed
		this.setState({ searchField: event.target.value })
	}

	render() {
		const { robots, searchField } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});
		return !robots.length ?
			<h1>Loading</h1> :
			(
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
				</div>
			);
	}
}
export default App;