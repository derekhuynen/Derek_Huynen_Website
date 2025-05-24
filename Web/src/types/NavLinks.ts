import type { SvgIconComponent } from '@mui/icons-material';
import type { ApplicationType } from 'config/constants';

export type NavLink = ApplicationType & { icon: SvgIconComponent };
