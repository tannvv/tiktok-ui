import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ClassNames from 'classnames/bind';
import Image from '../Image';
import styles from './AccountItem.module.scss';

const cx = ClassNames.bind(styles);
function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image src={data.avatar} alt={data.nickname} className={cx('avatar')} />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    {data.full_name}
                    <span>{data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />}</span>
                </p>
                <span className={cx('user-name')}>{data.nickname}</span>
            </div>
        </Link>
    );
}
AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountItem;
