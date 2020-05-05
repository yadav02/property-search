import React, { Component } from 'react'
import classes from './home.module.css'
import profileLogo from '../img/alex-suprun-801039-unsplash.png';
export default class home extends Component {
    render() {
        return (
          <div className={classes.backGround}>
            <div className={classes.overlay}></div>
             <h1>Houzquest</h1>
             <div className={classes.topbar}>
               <a>Buy</a>
               <a>Sell</a>
               <a>Property Camparison Tool</a>
               <a>Find Retailor</a>
               <a>Market Insight</a>
               <a>About Us</a>
               <a>Contact</a>
               <h4>John Doe</h4>
               <img src={profileLogo} className={classes.profileimg} alt="logo" />
            </div>
          <div className={classes.heading}>
              <h1>Connecting People & Property</h1>
          </div>
        <div className={classes.heading2}>
          <h3>Make your deram home your own home</h3>
        </div>
        <div className={classes.propertyBg}>
        <div className={classes.searchBox}>
      <input type="text" placeholder="Search by city,neighborhod, address or zipecode" />
        <i class="fas fa-filter" style={{color: "#4AC376",position: "absolute",right: "119%",top: "5%",fontSize:"183%"}}></i>
        <i class="fas fa-search" style={{color: "#011689",position: "absolute",left: "147%",top: "5%",fontSize:"173%"}}></i>
        <hr className={classes.hr1}/>
        <div className={classes.vl}></div>
        </div>
        <div className={classes.priceWrap}>
          <h3>Price Range :</h3>
        </div>
        <div className={classes.price}>
        <h3>$200,000 - $2,000,000</h3>
        </div>
        <hr/>
        <div className={classes.bedsHeading}>
        <h3>Beds :</h3>
       </div>
       <div className={classes.container}>
          <button className={classes.btn}>Any</button>
          <button className={classes.btn}>1+</button>
          <button className={classes.btn}>2+</button>
          <button className={classes.btn}>3+</button>
          <button className={classes.btn}>4+</button>
          <button className={classes.btn}>5+</button>
       </div>
    </div>
        
            </div>
        )
    }
}
