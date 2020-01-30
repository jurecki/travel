import React from 'react';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';
import PropTypes from 'prop-types';
import Icon from '../../common/Icon/Icon';

const OrderOptionIcons = ({
  values,
  required,
  setOptionValue,
  defaultValue,
}) => (
  <div>
    {required ? (
      ''
    ) : (
      <div key='null' value=''>
        ---
      </div>
    )}
    {values.map(value => {
      return (
        <div
          className={value.id == defaultValue ? styles.iconActive : styles.icon}
          key={value.id}
          onClick={event => {
            const iconActive = document.querySelectorAll(
              'div[class*="OrderOption_icon"]'
            );
            for (let icon of iconActive) {
              icon.classList.remove(styles.iconActive);
              event.currentTarget.classList.add(styles.iconActive);
            }
            
            setOptionValue(value.id);
          }}
        >
          <Icon name={value.icon} />
          {value.name}({formatPrice(value.price)})
        </div>
      );
    })}
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
