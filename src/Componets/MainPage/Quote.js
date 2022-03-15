import React from 'react';


class Quote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
      }

    //   componentDidMount(){  

    //     fetch('https://api.forismatic.com/api/1.0/method=getQuote&key=457653&format=xml&lang=ru')
    //     .then(response => console.log(response.json())
    //     )
    //     .then(data => console.log(data));
    //   }


    render() {
        return (
            <h1>Hello</h1>
        );
    }
}

export default Quote;