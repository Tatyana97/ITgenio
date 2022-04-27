import React from 'react';


class Quote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          quote: '',
          author: ''
        };
      }
    
      
      componentDidMount() {
        this.fetchAdvice()
        this.intervalID = setInterval(() => this.fetchAdvice(), (600000*6));
      }


      componentWillUnmount() {
        clearInterval(this.intervalID);
      }
      

      async fetchAdvice() {
        fetch('https://tatyana97.github.io/quote.github.io/Quote/quote.json')
        .then (response => response.json())
         .then(data => {
          let num = Math.floor(Math.random() * data.length);

              this.setState({
              author: data[num].author,
              quote: data[num].quoteText
            })
            }
         )}


      render() {
        return (
            <div>
              <h2>{this.state.quote}</h2>
               <h3>{this.state.author}</h3>
            </div>
        );
      }

}

export default Quote;