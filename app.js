var GroceryList = (props) => (
  <ul>
    {props.list.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);

// A class component can be defined as an ES6 class that extends the base Component class included in the React library
class GroceryListItem extends React.Component {
  // A `constructor` method is expected on all ES6 classes
  // When React instantiates the component, it will pass `props` to the constructor
  constructor(props) {
    // Equivalent to ES5's React.Component.call(this, props)
    super(props);
    // `state` is just an object literal
    this.state = {
      hover: false
    };
  }
  // When a list item is mouse enter, change the `hover` boolean to true
  // The component's `render` method will run again
  onListItemMouseEnter() {
    // update the state
    this.setState({
      hover: true
    });
  }
  // When a list item is mouse leave, change the `hover` boolean to false
  // The component's `render` method will run again
  onListItemMouseLeave() {
    // update the state
    this.setState({
      hover: false
    })
  }
  // Every class component must have a `render` method
  render() {
    // Making the style conditional on our `state` lets us update it based on user interactions.
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };
    // You can pass inline styles using React's `style` attribute to any component snake-cased css properties become camelCased this this object
    // `props` is no longer passed as an argument, but instead accessed with `this.props`
    return (
      <li style={style}
      onMouseLeave={this.onListItemMouseLeave.bind(this)}
      onMouseEnter={this.onListItemMouseEnter.bind(this)}>
        {this.props.item}
      </li>
    );
  }
}

ReactDOM.render(<GroceryList list={['Pineapple', 'Apple', 'Pen']}/>, document.getElementById('app'));