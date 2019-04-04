import React, { Component } from 'react';

import { Hero, Container, Heading } from 'react-bulma-components/full'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero color="primary" size="fullheight">
          <Hero.Body>
            <Container>
              <Heading>Hero title Primary</Heading>
              <Heading subtitle size={3}>
                Subtitle
              </Heading>
            </Container>
          </Hero.Body>
        </Hero>
        <Hero color="warning" size="fullheight">
          <Hero.Body>
            <Container>
              <Heading>Hero title Primary</Heading>
              <Heading subtitle size={3}>
                Subtitle
              </Heading>
            </Container>
          </Hero.Body>
        </Hero>
      </div>
    );
  }
}

export default App;
