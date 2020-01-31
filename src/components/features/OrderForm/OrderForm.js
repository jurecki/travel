import React from 'react';
import styles from './OrderForm.scss';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import PropTypes from 'prop-types';
import {settings} from '../../../data/settings.js';
import Button from '../../common/Button/Button';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';

const prices = require('../../../data/pricing.json');

const sendOrder = (options, tripCost, tripName, countryCode, tripId) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripName,
    countryCode,
    tripId,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

class OrderForm extends React.Component {
  static propTypes = {
    tripCost: PropTypes.node,
    options: PropTypes.object,
    prices: PropTypes.array,
    defaultValue: PropTypes.node,
    setOrderOption: PropTypes.func,
    tripName: PropTypes.node,
    countryCode: PropTypes.string,
    tripId: PropTypes.node,
  }


  render () {
    const { tripCost, options, setOrderOption, tripName, countryCode, tripId} = this.props;
    return (
      <div className={styles.component}>
        <Row>
          {prices.map(pricesData => (
            <Col md={4} key={pricesData.id}>
              <OrderOption {...pricesData} currentValue={options[pricesData.id]} setOrderOption={setOrderOption}/>
            </Col>
          ))}

          <Col xs={12}>
            <OrderSummary cost={tripCost} options={options}/>
          </Col>
        </Row>
        <Button onClick={() => {
          if((options.name && options.contact) == '') {
            alert('To send order please fill name and contact field');
          } else {
            sendOrder(options, tripCost, tripName, countryCode, tripId);
          }
        }}>
          Order now!</Button>
      </div>
    );
  }
}

export default OrderForm;
