import React from 'react';
import PropTypes from 'prop-types';
import styles from './DaysToSummer.scss';


class DaysToSummer extends React.Component {

  static propTypes = {
    titleSummer: PropTypes.node,
    numberOfDays: PropTypes.node,
  };

  getDaysToSummer() {
    let today = new Date();
    let daysToSummer;
    let summerStart=new Date(today.getFullYear(),5, 20);
    let oneDay=1000*60*60*24;
    let oneYear=1000*60*60*24*365;
    
    if (today.getMonth()<=5 && today.getDate()<=21) {
      daysToSummer = (Math.ceil((summerStart.getTime()-today.getTime())/(oneDay)));
    } else if (today.getMonth()>=8 && today.getDate()>23) {
      daysToSummer = ((Math.ceil((summerStart.getTime()+oneYear-today.getTime()+oneDay)/(oneDay))));
    }
    return (daysToSummer);
    
  }

  render() { 
    const daysToSummer = this.getDaysToSummer();
    if (daysToSummer == 1) {
      return (
        <div className={styles.component}>
          <h3 className={styles.numberOfDays}>{this.getDaysToSummer()}</h3>
          <div className={styles.title}>{' day to Summer'}</div>
        </div>
      );
    } else if (daysToSummer > 1) {
      return (
        <div className={styles.component}>
          <h3 className={styles.numberOfDays}>{this.getDaysToSummer()}</h3>
          <div className={styles.title}>{' days to Summer'}</div>
        </div>
      );
    } else {
      return ( 
        <div className={styles.component}>
          <h3 className={styles.numberOfDays}>{this.getDaysToSummer()}</h3>
          <div className={styles.title}>{' Summer is now!'}</div>
        </div>
      ); 
    }
  }
}

export default DaysToSummer;
