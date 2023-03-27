import React from "react";
import banner1 from '../../../img/banner1.webp';
import banner2 from '../../../img/banner2.webp';
import banner3 from '../../../img/banner3.webp';
import banner4 from '../../../img/banner4.webp';
import banner5 from '../../../img/banner5.webp';
import banner6 from '../../../img/banner6.webp';
import './Banner.css'

class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.leftBanner = [banner1, banner2, banner3];
        this.rightBanner = [banner4, banner5, banner6];
        this.changeLeftBannerIntv = null;
        this.changeRightBannerIntv = null;
        this.state = {
            leftCounter: 0,
            rightCounter: 0
        }
    }

    changeleftBanner() {
        this.setState(prev => {
            const newLeftCounter = (prev.leftCounter + 1) % this.leftBanner.length;
            return {
                ...prev, 
                leftCounter: newLeftCounter
            }
        })
    }

    changeRightBanner() {
        this.setState(prev => {
            const newRightCounter = (prev.rightCounter + 1) % this.rightBanner.length;
            return {
                ...prev,
                rightCounter: newRightCounter
            }
        })
    }

    componentDidMount() {
        this.changeLeftBannerIntv = setInterval(() => {
            this.changeleftBanner();
        }, 3000);

        this.changeRightBannerIntv = setInterval(() => {
            this.changeRightBanner();
        }, 3000);
    }

    componentWillUnmount () {
        if(this.changeLeftBannerIntv !== null) {
            clearInterval(this.changeLeftBannerIntv);
        }

        if(this.changeRightBannerIntv !== null) {
            clearInterval(this.changeRightBannerIntv);
        }
    }

    render() {
        return (
            <div className="banner">
                <div className="banner__item banner__left">
                    <img src={this.leftBanner[this.state.leftCounter]} />
                </div>
                <div className="banner__item banner__right">
                    <img src={this.rightBanner[this.state.rightCounter]} />
                </div>
            </div>
        )
    }
}

export default Banner