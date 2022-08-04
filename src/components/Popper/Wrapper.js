import ClassNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = ClassNames.bind(styles);

function Wrapper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

export default Wrapper;
