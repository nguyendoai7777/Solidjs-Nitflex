import { Button, styled } from '@suid/material';
import { ButtonProps } from '@suid/material/Button';

export const CommonButton = styled(Button)<ButtonProps>(({ theme }) => ({
  // color: theme.palette.getContrastText(purple[500]),
  backgroundColor: 'deeppink',
  '&:hover': {
    backgroundColor: '#cf0070',
  },
}));
