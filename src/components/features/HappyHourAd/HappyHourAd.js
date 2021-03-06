import React from 'react';
import PropTypes from 'prop-types';
import styles from './HappyHourAd.scss';
import {formatTime} from './../../../utils/formatTime';

class HappyHourAd extends React.Component {

  static propTypes = {
    title: PropTypes.node,
    promoDescription: PropTypes.node,
  };

  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));
  
    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }
  
    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }

  constructor(){
    super();

    /* run this.forceUpdate() every second */
    setInterval(() => {
      this.forceUpdate();
    }, 1000);

  }


  render() {
    const { title, promoDescription } = this.props;
    const promoTime = this.getCountdownTime();
    if (promoTime > (23*60*60)) {
      return (
        <div className={styles.component}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.promoDescription}>{promoDescription}</div>
        </div>
      );
    } else {
      return (
        <div className={styles.component}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.promoDescription}>{formatTime(this.getCountdownTime())}</div>
        </div>
      );
    }
    
  }
}

export default HappyHourAd;
