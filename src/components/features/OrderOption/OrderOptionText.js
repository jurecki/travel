import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptioText = ({currentValue, setOptionValue}) => (
  <div 
    className={styles.number}
  >
    <input 
      type='text'
      className={styles.inputSmall}
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
    ></input>
    {name}
  </div>
);

OrderOptioText.propTypes = {
  price: PropTypes.node,
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func,
  limits: PropTypes.object,
};


export default OrderOptioText;