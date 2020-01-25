import React from 'react';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice'; 
import PropTypes from 'prop-types';
import Icon from '../../common/Icon/Icon';

const OrderOptionIcons = ({values, required, setOptionValue, defaultValue}) => (
  <div className={styles.icon}>
    {required ? '' : (
      <div key='null' value=''>---</div>
    )}

    {values.map(value => (
      <div className={styles.icon}  key={value.id} onClick={value => setOptionValue(value.id)}>
        
        {console.log('defaultValue '+ defaultValue)}
        {console.log(value.id)}
        <Icon name={value.icon} />
        {value.name} 
        ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func,
  defaultValue: PropTypes.node,
  
};

export default OrderOptionIcons;