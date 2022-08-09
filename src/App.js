import { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import './App.css';
import Welcome from './Welcome';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      isLoggedIn : false
    }
  }


  render () {

    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        <Container className='App'>
          <Welcome/>
        </Container>
      </div>
    );
  }
}

export default App;
