// assets
import { IconTarget, IconListNumbers, IconShoppingCart, IconDeviceGamepad } from '@tabler/icons';

// constant
const icons = { IconTarget, IconListNumbers, IconShoppingCart, IconDeviceGamepad };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: '',
    type: 'group',
    children: [
        {
            id: 'spin',
            title: 'گردونه',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconTarget,
            breadcrumbs: false
        },
        {
            id: 'leaderBoard',
            title: 'رده بندی',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconListNumbers,
            breadcrumbs: false
        },
        {
            id: 'shop',
            title: 'فروشگاه',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconShoppingCart,
            breadcrumbs: false
        },
        {
            id: 'games',
            title: 'بازی‌ها',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconDeviceGamepad,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
