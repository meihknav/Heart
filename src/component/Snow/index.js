import styles from './snow.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);


function SnowAnimation() {
    return ( 
        <div className={cx('snowflakes')} aria-hidden="true">
  <div className={cx('snowflake')}>❅</div>
  <div className={cx('snowflake')}>❆</div>
  <div className={cx('snowflake')}>❅</div>
  <div className={cx('snowflake')}>❆</div>
  <div className={cx('snowflake')}>❅</div>
  <div className={cx('snowflake')}>❆</div>
  <div className={cx('snowflake')}>❅</div>
  <div className={cx('snowflake')}>❆</div>
  <div className={cx('snowflake')}>❅</div>
  <div className={cx('snowflake')}>❆</div>
  <div className={cx('snowflake')}>❅</div>
  <div className={cx('snowflake')}>❆</div>
</div>
     );
}

export default SnowAnimation;