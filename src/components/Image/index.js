import classNames from 'classnames';
import { forwardRef, useState } from 'react';

import styles from './Image.module.scss';
import images from '~/assets/images';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            alt={alt}
            src={fallback || src}
            {...props}
            ref={ref}
            onError={handleError}
        />
    );
});

export default Image;
