import styles from './heart.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function Heart() {
    return ( 
        <div className={cx('heart')}>
            <div className={cx('left')}></div>
            <div className={cx('right')}></div>
        </div>
     );
}

export default Heart;