import React from 'react';
import styles from './OrderSummary.scss';
//import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';

class OrderSummary extends React.Component {
  static propTypes = {
    cost: PropTypes.node,
    options:PropTypes.object,
  }

  render () {
    const {cost, options} = this.props;
    return (
      <h2 className={styles.component}>
        Total: <strong> {calculateTotal(formatPrice(cost),options)}</strong> 
      </h2>
    );
  }
}

export default OrderSummary;
