import React from 'react';
import styles from './OrderForm.scss';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import PropTypes from 'prop-types';

const prices = require('../../../data/pricing.json');


class OrderForm extends React.Component {
  static propTypes = {
    tripCost: PropTypes.node,
    options: PropTypes.object,
    prices: PropTypes.array,
    defaultValue: PropTypes.node,
    setOrderOption: PropTypes.func,
  }


  render () {
    const { tripCost, options, setOrderOption} = this.props;
    return (
      <div className={styles.component}>
        <Row>
        
          {prices.map(pricesData => (
            <Col md={4} key={pricesData.id}>
              <OrderOption {...pricesData} currentValue={options[pricesData.id]} setOrderOption={setOrderOption}/>
            </Col>
          ))}

          <Col xs={12}>
            <OrderSummary cost={tripCost} options={options} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default OrderForm;
