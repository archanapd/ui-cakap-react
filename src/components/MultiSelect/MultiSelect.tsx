import React, { FC } from 'react';
import styles from './MultiSelect.module.scss';

interface MultiSelectProps {}

const MultiSelect: FC<MultiSelectProps> = () => (
  <div className={styles.MultiSelect} data-testid="MultiSelect">
    MultiSelect Component
  </div>
);

export default MultiSelect;
