import React, { Component } from 'react';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { Posts } from './components/Posts';
import { Todos } from './components/Todos';
import { Albums } from './components/albums/Albums';
import { UserPosts } from './components/users/UserPosts';
import Users from './components/users/Users';
import { DisplayAlbum } from './components/albums/DisplayAlbum';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    posts: [],
    albums: [],
    users: [],
    todos: [],
    comments: [],
    photos: []
  }

  componentDidMount() {
    this.getAll("posts")
    this.getAll("albums")
    this.getAll("users")
    this.getAll("todos")
    this.getAll("comments")
    this.getAll("photos")
  }

  getAll = async (route) => {
    let data = await axios.get("https://jsonplaceholder.typicode.com/" + route)
    this.setState({ [route]: data.data })
  }
  render() {
    return (
      <BrowserRouter >
        <div className="App">
          <Route component={NavBar} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/posts" render={(props) => <Posts {...props}
            comments={this.state.comments}
            posts={this.state.posts}
            users={this.state.users}/>} />
            <Route exact path="/albums" render={(props) => <Albums {...props} albums={this.state.albums}/>} />
            <Route exact path="/albums/:id" render={(props) => <DisplayAlbum {...props}
            photos={this.state.photos}
            albums={this.state.albums}/>} />
            <Route exact path="/todos" render={(props) => <Todos {...props} todos={this.state.todos}/>} />
            <Route exact path="/users" render={ (props) => <Users {...props} users={this.state.users}/>} />
            <Route exact path="/users/:id/posts" render={ (props) => <UserPosts {...props}
                  users={this.state.users}
                  posts={this.state.posts}/>}/>
          </Switch>
        </div>
      </ BrowserRouter >
    );
  }
}

export default App;
