import React from 'react';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice'; 
import PropTypes from 'prop-types';

const OrderOptionNumber = ({price,limits,currentValue, setOptionValue}) => (
  <div 
    className={styles.number}
  >
    <input 
      type='number'
      className={styles.inputSmall}
      value={currentValue} 
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}
    ></input>
    {formatPrice(price)}
  </div>
);

OrderOptionNumber.propTypes = {
  price: PropTypes.node,
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func,
  limits: PropTypes.object,
};


export default OrderOptionNumber;