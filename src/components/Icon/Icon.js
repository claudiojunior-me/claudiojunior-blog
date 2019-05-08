import React from 'react';
import styles from './Icon.module.scss';

const Icon = ({ icon }) => {
  if (icon.path1 && icon.path2) {
    return (
			<svg className={styles['icon']} viewBox={icon.viewBox}>
				<path d={icon.path1} />
				<path d={icon.path2} />
			</svg>
    );
  }

  return (
		<svg className={styles['icon']} viewBox={icon.viewBox}>
			<path d={icon.path} />
		</svg>
  );
};

export default Icon;
