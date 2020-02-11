import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import HappyHourAd from './../../features/HappyHourAd/HappyHourAd';
import DaysToSummer from './../../features/DaysToSummer/DaysToSummer';

const Hero = ({variant = '', titleText, imageSrc, ...otherProps}) => (
  <div {...otherProps} className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}>
    
    <h2 className={styles.title}>{titleText}</h2>
    <img className={styles.image}  src={imageSrc} />
    <div className={styles.happyHour}>
      <DaysToSummer numberOfDays titleSummer/>
      <HappyHourAd title={'HappyHour'} promoDescription={'Take your time'}/>
    </div>
  </div>
);

Hero.propTypes = {
  variant: PropTypes.string,
  titleText: PropTypes.node.isRequired,
  imageSrc: PropTypes.string,
  titleSummer: PropTypes.node,
  numberOfDays: PropTypes.number,
};

export default Hero;
