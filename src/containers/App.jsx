import React from 'react';
// import {robots} from "./robots";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "tachyons";
import "./App.css";
 
class App extends React.Component {
  constructor(){
    super()
    this.state = { robots: [], searchField: ""}
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({robots: users}))
  }

  handleChange = (event)=> {
    this.setState({searchField: event.target.value});    
  }

  render() {
    const {robots,searchField} = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    });
    return (
      <div className="tc">
        <h1 className="f1"> RoboFriends </h1>
        <SearchBox searchChange={this.handleChange}/>
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>      
      </div>
    );
  }
}
 
export default App;