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
          {/* need to add logic that checks if user is logged in, rendering either welcome or home */}
          <Welcome/>
        </Container>
      </div>
    );
  }
}

export default App;
