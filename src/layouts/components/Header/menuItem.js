import { faCircleQuestion, faEarthAsia, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language', 
            data: [
                {
                    code: 'en',
                    title: 'English',
                    children: {
                        title: 'English',
                        data: [
                            {
                                code: 'unitedState',
                                title: 'United state',
                            },
                            {
                                code: 'unitedKingdom',
                                title: 'United kingdom',
                            },
                        ],
                    },
                },
                {
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    code: 'cn',
                    title: 'Chinese',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
