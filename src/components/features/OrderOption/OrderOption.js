import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import OrderOptionDropdown from './OrderOptionDropdown';
import OrderOptionIcons from './OrderOptionIcons';
import OrderOptionNumber from './OrderOptionsNumber';
import OrderOptionCheckboxes from './OrderOptionCheckboxes';

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
  
};

const OrderOption = ({id,setOrderOption, name, type, ...otherProps}) => {
  const OptionComponent = optionTypes[type];
  if (!OptionComponent) {
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent {...otherProps} setOptionValue={value => setOrderOption({[id]: value})} />
      </div>
    );
  }
};

OrderOption.propTypes = {
  currentValue: PropTypes.node,
};

export default OrderOption;
