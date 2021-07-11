import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      this.setState({monsters: users})
      console.log('users: ', users)
     }
    )
  }

  handleChange = (event) => {
    this.setState({ searchField: event.target.value }, () => console.log(this.state))
    console.log(event.target.value)}

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter( (monster) => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return(
      <div className='App'>
        <h1>Monster Rolodex</h1>
        <SearchBox 
          placeholder='search monsters'
          // handleChange={(event) => {
          //   this.setState({ searchField: event.target.value }, () => console.log(this.state))
          //   console.log(event.target.value)}}
          handleChange={this.handleChange}
        />
        {/* <CardList monsters={this.state.monsters} /> */}
        <CardList monsters={filteredMonsters} />

        <button onClick={() => this.setState({string: 'Bye bye'})}>Change Text</button>
      </div>
      
    )
  }
}

export default App;
