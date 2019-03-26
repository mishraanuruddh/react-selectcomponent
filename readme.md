# React-SelectComponent

A simple yet powerful component to selectively render react components.

## Install

Install the package using the following command

```bash
npm install react-selectcomponent
```

## Getting Started

Using the component in your app:

```bash
import React from 'react'
import SelectComponent from "react-selectcomponent";

class App extends React.Component {
  state={
    name: "name1"
  }
  render() {
    return(
        <React.Fragment>
          <SelectComponent name={this.state.name}>
            <p name="name1">Name 1</p>
            <p name="name2">Name 2</p>
          </SelectComponent>
          <button onClick={this.handleClick}>Toggle Component</button>
        </React.Fragment>);
  }

  handleClick = () => {
    if('name1' === this.state.name) {
      this.setState({name: 'name2'});
    } else {
      this.setState({name: 'name1'});
    }
  }
}

export default App;
```

By default, the component expects every child to have a 'name' property which it compares against.
However, you can customize both the name of the key to compare and how the comparison is done.

### Using custom Key Name
To use a custom keyname, pass in the property ```keyname``` with a custom value.

```bash
import React from 'react'
import SelectComponent from "react-selectcomponent";

class App extends React.Component {
  state={
    name: "name1"
  }
  render() {
    return(
        <React.Fragment>
          <SelectComponent myKey={this.state.name} keyName={"myKey"}>
            <p myKey="name1">Name 1</p>
            <p myKey="name2">Name 2</p>
          </SelectComponent>
          <button onClick={this.handleClick}>Toggle Component</button>
        </React.Fragment>);
  }

  handleClick = () => {
    if('name1' === this.state.name) {
      this.setState({name: 'name2'});
    } else {
      this.setState({name: 'name1'});
    }
  }
}

export default App;
```

### Using a custom matching criteria

You can override the basic matching criteria with one of your own using the ```criteria``` property

```bash
import React from 'react'
// import SelectComponent from "react-selectcomponent";
import SelectComponent from "../components/selectComponent";

class App extends React.Component {
  state={
    name: 10
  }
  matchingCriteria = (x, y) => x % y === 0;
  render() {
    return(
        <React.Fragment>
          <SelectComponent name={this.state.name} criteria={this.matchingCriteria}>
            <p name={20}>Name 1</p>
            <p name={21}>Name 2</p>
          </SelectComponent>
          <button onClick={this.handleClick}>Toggle Component</button>
        </React.Fragment>);
  }

  handleClick = () => {
    if(10 === this.state.name) {
      this.setState({name: 3});
    } else {
      this.setState({name: 10});
    }
  }
}

export default App;
```

```criteria``` accepts any function that provides two arguments x,y and returns true or false.

### Using Fallback Component

There are times when no criteria is met and you want to handle this case. Pass a component in the ```fallback``` prop and that will be rendered when nothing is selected.


## Notes

The focus was on creating a simple component with no dependencies. Let me know if there are improvements possible here or features that you'd want to add.


