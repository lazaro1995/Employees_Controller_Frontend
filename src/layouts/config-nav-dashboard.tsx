import { Label } from 'src/components/label';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor width="100%" height="100%" src={`/assets/icons/navbar/${name}.svg`} />
);

export const navData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: icon('ic-cart'),
  },
  {
    title: 'Timecards',
    path: '/blog',
    icon: icon('ic-blog'),
  },
  {
    title: 'Employees',
    path: '/user',
    icon: icon('ic-user'),
  },
  {
    title: 'Reports',
    path: '/products',
    icon: icon('ic-cart'),
    info: (
      <Label color="success" variant="inverted">
        +3
      </Label>
    ),
  },
  
  {
    title: 'Sign in',
    path: '/sign-in',
    icon: icon('ic-lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic-disabled'),
  },
];
