import React from 'react';
import './Сonversion.css'


class Сonversion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstNumberIgf120: 0,
            firstNumberIgf60: 0,
            firstNumberIF: 0,
            firstNumberGF: 0,
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputChange1 = this.handleInputChange1.bind(this);
        this.handleInputChange2 = this.handleInputChange2.bind(this);
        this.handleInputChange3 = this.handleInputChange3.bind(this);
      }

      handleInputChange(event) {
        const target = event.target.value;
    
        this.setState({
            firstNumberIgf120: target,
        });
      }

      handleInputChange1(event) {
        const target = event.target.value;
    
        this.setState({
            firstNumberIgf60:target,
        });
      }

      handleInputChange2(event) {
        const target = event.target.value;
    
        this.setState({
            firstNumberIF: target,
        });
      }

      handleInputChange3(event) {
        const target = event.target.value;
    
        this.setState({
            firstNumberGF: target,
        });
      }

       format = {
            igf120: "ИГФ 120",
            igf60: "ИГФ 60",
            if: "ИФ",
            gf: "ГФ",
      }
    

            render (){
                return (
                    <div className='allTablws'>
                    <div className='tables'>
                        <div className='tableStyle'>
                            <p className='highlight'>{this.format.igf120}</p>
                            <p>{this.format.igf60}</p>
                            <p>{this.format.if}</p>
                            <p>{this.format.gf}</p>
                        </div>
                        <div className='tableStyle'>
                              <input value={this.state.firstNumberIgf120} onChange={this.handleInputChange} />
                              <p>{Math.round((this.state.firstNumberIgf120 * 1.5)* 100)/ 100}</p>
                              <p>{Math.round((this.state.firstNumberIgf120 / 1.3)* 100)/ 100}</p>
                              <p>{Math.round(((this.state.firstNumberIgf120 * 1.5) * 2)* 100)/ 100}</p>
                        </div>
                    </div>

                    <div className='tables'>
                        <div className='tableStyle'>
                            <p className='highlightIGF60'>{this.format.igf60}</p>
                            <p>{this.format.igf120}</p>
                            <p>{this.format.if}</p>
                            <p>{this.format.gf}</p>
                        </div>
                        <div className='tableStyle'>
                              <input value={this.state.firstNumberIgf60} onChange={this.handleInputChange1} />
                              <p>{Math.round((this.state.firstNumberIgf60 / 1.5)* 100)/ 100}</p>
                              <p>{Math.round((this.state.firstNumberIgf60 / 2)* 100)/ 100}</p>
                              <p>{Math.round((this.state.firstNumberIgf60 * 2)* 100)/ 100}</p>
                        </div>
                    </div>

                    <div className='tables'>
                        <div className='tableStyle'>
                            <p className='highlightIF'>{this.format.if}</p>
                            <p>{this.format.igf120}</p>
                            <p>{this.format.igf60}</p>
                            <p>{this.format.gf}</p>
                        </div>
                        <div className='tableStyle'>
                              <input value={this.state.firstNumberIF} onChange={this.handleInputChange2} />
                              <p>{Math.round((this.state.firstNumberIF * 1.3)* 100)/ 100}</p>
                              <p>{Math.round((this.state.firstNumberIF * 2)* 100)/ 100}</p>
                              <p>{Math.round(((this.state.firstNumberIF * 2) * 2)* 100)/ 100}</p>
                        </div>
                    </div>

                    <div className='tables'>
                        <div className='tableStyle'>
                            <p className='highlightGF'>{this.format.gf}</p>
                            <p>{this.format.igf60}</p>
                            <p>{this.format.igf120}</p>
                            <p>{this.format.if}</p>
                        </div>
                        <div className='tableStyle'>
                              <input value={this.state.firstNumberGF} onChange={this.handleInputChange3} />
                              <p>{Math.round((this.state.firstNumberGF / 2)* 100)/ 100}</p>
                              <p>{Math.round(((this.state.firstNumberGF / 2) / 1.5)* 100)/ 100}</p>
                              <p>{Math.round(((this.state.firstNumberGF / 2) / 2)* 100)/ 100}</p>
                        </div>
                    </div>
                    </div>
                )
            }
    }
export default Сonversion