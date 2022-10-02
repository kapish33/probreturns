import { ChevronDownIcon, UpDownIcon, DragHandleIcon } from '@chakra-ui/icons';

export const filter = [
  {
    name: 'For Sale',
    rightIcon: <ChevronDownIcon />,
    backgroundColor: 'gray.100',
    variant: 'outline',
    fontWeight: '400',
    padding: '0 15px',
  },
  {
    name: 'Type Of House',
    rightIcon: <ChevronDownIcon />,
    backgroundColor: 'gray.100',
    variant: 'outline',
    fontWeight: '400',
    padding: '0 15px',
  },
  {
    name: 'Minimum Price',
    rightIcon: <ChevronDownIcon />,
    backgroundColor: 'gray.100',
    variant: 'outline',
    fontWeight: '400',
    padding: '0 15px',
  },
  {
    name: 'Max Price',
    rightIcon: <ChevronDownIcon />,
    backgroundColor: 'gray.100',
    variant: 'outline',
    fontWeight: '400',
    padding: '0 15px',
  },
  {
    name: 'Floor Area 60m',
    rightIcon: <UpDownIcon />,
    backgroundColor: 'gray.100',
    variant: 'outline',
    fontWeight: '400',
    padding: '0 15px',
  },
  {
    name: 'More',
    leftIcon: <DragHandleIcon />,
    backgroundColor: 'gray.100',
    variant: 'outline',
    fontWeight: '400',
    padding: '0 15px',
  },
];
