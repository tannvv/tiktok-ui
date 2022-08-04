import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ClassNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = ClassNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3028d885728c2a676f1ddf2aabe251c1~c5_100x100.jpeg?x-expires=1659801600&x-signature=2dLhJcAX%2FF0JJ%2F8hUWktHRWuOQs%3D"
                alt="TanNV"
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    Nguyen Van Tan
                    <span>
                        <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                    </span>
                </p>
                <span className={cx('user-name')}>Tannv@tiktok</span>
            </div>
        </div>
    );
}

export default AccountItem;
