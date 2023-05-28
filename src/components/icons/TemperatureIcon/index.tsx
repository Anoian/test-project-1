import React from 'react';
import styles from './index.module.css';
import classNames from "classnames";

export interface TemperatureIconProps {
  minValue: number;
  maxValue: number;
  value: number;
}

/* Component does calculations and the input values probably don't change very often, so React.memo makes sense here */
const TemperatureIcon = React.memo((props: TemperatureIconProps) => {
  const {
    minValue,
    maxValue,
    value,
  } = props;

  if (maxValue < minValue) {
    return (
      <div className={styles.error}>
        minValue must be smaller than maxValue
      </div>
    );
  }

  // The range in degrees between the fixed min and max marks on the circle
  const visualRange = 284;

  // The maximum value adjusted to minValue 0
  const range = maxValue - minValue;
  
  // The value adjusted to minValue 0
  const zeroBasedValue = value - minValue;

  // The raw value we would get when calculating the position of the hand, rounded to the next integer.
  const rotation = Math.round(visualRange / range * zeroBasedValue);

  // value must be between 0 and 284
  const rotationLimitedToRange = Math.min(visualRange, Math.max(0, rotation));

  return (
    <div className={styles.temperatureIcon}>
      {/* See comment in index.module.css on transform: rotate() */}
      <div className={styles.circle} style={{ rotate: `${rotationLimitedToRange}deg` }} data-testid="circle">
        <div className={styles.hand} />
      </div>
      <div className={classNames(styles.foot, styles.min)} />
      <div className={classNames(styles.foot, styles.max)} />
    </div>
  );
});

export default TemperatureIcon;
