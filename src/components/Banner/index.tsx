import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

const Banner = () => {

    return (
        <div className={styles['body']}>
            <div className={classnames(styles['content'])}>xyz</div>
        </div>
    );
};

export default Banner;