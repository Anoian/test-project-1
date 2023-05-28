import React from 'react';
import styles from './index.module.css';
import Tile from 'libs/ui/Tile';
import TemperatureIcon, { TemperatureIconProps } from 'components/icons/TemperatureIcon';

type TemperatureTileProps = TemperatureIconProps;

function TemperatureTile(props: TemperatureTileProps) {
  const {
    value,
  } = props;

  return (
    <Tile>
      <div className={styles.innerWrapper}>
        <TemperatureIcon
          {...props}
        />
        <div className={styles.value}>{value}°C</div>
      </div>
    </Tile>
  );
}

export default TemperatureTile;
