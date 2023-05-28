import React from 'react';
import styles from './index.module.css';
import TemperatureTile from 'components/TemperatureTile';

function App() {
  return (
    <div className={styles.app} data-testid="wrapper">
      <TemperatureTile
        minValue={-40}
        maxValue={200}
        value={-40}
      />
      <TemperatureTile
        minValue={0}
        maxValue={100}
        value={22}
      />
      <TemperatureTile
        minValue={-1000}
        maxValue={1000}
        value={0}
      />
      <TemperatureTile
        minValue={10}
        maxValue={0}
        value={5}
      />
      <TemperatureTile
        minValue={1}
        maxValue={1}
        value={0}
      />
      <TemperatureTile
        minValue={0}
        maxValue={1}
        value={0}
      />
      <TemperatureTile
        minValue={0}
        maxValue={1}
        value={1}
      />
      <TemperatureTile
        minValue={0}
        maxValue={100}
        value={200}
      />
      <TemperatureTile
        minValue={0}
        maxValue={100}
        value={66}
      />
    </div>
  );
}

export default App;
