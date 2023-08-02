// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Channels',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Subcriptions',
    path: '/dashboard/subcriptions',
    icon: icon('ic_cart'),
  },
];

export default navConfig;
