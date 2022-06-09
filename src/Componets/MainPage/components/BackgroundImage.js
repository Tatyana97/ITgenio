import React from 'react';

import im0 from "../../../img/0.jpg";
import im1 from "../../../img/1.jpg";
import im2 from "../../../img/2.jpg";
import im3 from "../../../img/3.jpg";
import im4 from "../../../img/4.jpg";
import im5 from "../../../img/5.jpg";
import im6 from "../../../img/6.jpg";
import im7 from "../../../img/7.jpg";
import im8 from "../../../img/8.jpg";
import im9 from "../../../img/9.jpg";
import im10 from "../../../img/10.jpg";
import im11 from "../../../img/11.jpg";
import im12 from "../../../img/12.jpg";
import im13 from "../../../img/13.jpg";
import im14 from "../../../img/14.jpg";
import im15 from "../../../img/15.jpg";
import im16 from "../../../img/16.jpg";
import im17 from "../../../img/17.jpg";
import im18 from "../../../img/18.jpg";
import im19 from "../../../img/19.jpg";
import im20 from "../../../img/20.jpg";
import im21 from "../../../img/21.jpg";
import im22 from "../../../img/22.jpg";
import im23 from "../../../img/23.jpg";



export class BackgroundImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().getHours(),
            background: this.backgroundImagePage(),
                0: im0,
                1: im1,
                2: im2,
                3: im3,
                4: im4,
                5: im5,
                6: im6,
                7: im7,
                8: im8,
                9: im9,
                10: im10,
                11: im11,
                12: im12,
                13: im13,
                14: im14,
                15: im15,
                16: im16,
                17: im17,
                18: im18,
                19: im19,
                20: im20,
                21: im21,
                22: im22,
                23: im23,
        };
    }

    backgroundImagePage(){

        for (let key in this.state){
            if (key == this.state.time) {
           return document.body.style.backgroundImage = `url(${this.state[key]})`;
        }else{
             document.body.style.backgroundColor = 'black';
        }
    }
    }

    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 1000);
        this.backgroundImagePage();
      }

      componentWillUnmount() {
        clearInterval(this.intervalID);
      }
      tick() {
        this.setState({
          time: new Date().getHours(),
          background: this.backgroundImagePage()
        });
      }

    render() {
        return (
                <></>
        );
    }
}