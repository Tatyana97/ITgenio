import React from 'react';



class Day extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date().getDate(),
      mounth: this.thisMounth()
    }
  }

  thisMounth(){
    let month = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
        var d = new Date();
        var mon = month[d.getMonth()];
        var dateAll = mon
        return dateAll;    
  }

  getDate(){
    this.setState({
      date: new Date().getDate(),
      mounth: this.thisMounth()
    })
  }
  componentDidMount() {
    // localStorage.setItem('date', JSON.stringify(this.state.date));
    this.intervalID = setInterval(() => this.getDate(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  
  render(){
    return(
       <h1>Сегодня {this.state.date} {this.state.mounth}</h1>
    )
  }
}


  export default Day