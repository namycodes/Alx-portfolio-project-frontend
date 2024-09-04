import react, { Component } from 'react';

class LifecycleExample extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    };

    componentDidMount () {
        console.log('Component did mount!');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component did Update!');
    }
    componentWillUnmount() {
        console.log('Component will unmount');
    }

    increment = () => {
        this.setState({ count: this.state.count + 1});


    };

    render() {
        return(
        <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.increment}Increament></button>
        </div>
        );
    };
}

export default LifecycleExample;