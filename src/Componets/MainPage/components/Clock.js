import React from 'react';

export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString()
        };
    }

    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 1000);
      }
      componentWillUnmount() {
        clearInterval(this.intervalID);
      }
      tick() {
        this.setState({
          time: new Date().toLocaleTimeString()
        });
      }

    render() {
        return (
            <h2 className="App-clock">
                Текущее время: {this.state.time}
            </h2>
        );
    }
}