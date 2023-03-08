import { Select, styled } from '@suid/material';
import { ButtonProps } from '@suid/material/Button';

export const CommonSelect = styled(Select)<ButtonProps>(({ theme }) => ({
  // color: theme.palette.getContrastText(purple[500]),
  color: '#fff',
  borderWidth: '1px',
  borderStyle: 'solid',
  minHeight: '1.4375em',
  padding: '16.5px 14px',
  'label + &': {
    color: '#fff',
  },
  '&.Mui-focused': {
    borderColor: 'transparent !important',
  },
  '&:hover': {
    boxShadow: '1px 1px 2px grey',
  },
  '&:hover fieldset': {
    borderColor: 'transparent !important',
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    border: 'unset',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
  },
  '&.Mui-focused fieldset': {
    borderColor: 'deeppink !important',
  },
}));

export const CommonSelectStyle = {
  width: '120px',
  color: '#fff',
  '& label': {
    color: '#fff',
  },
  '& .MuiSelect-select': {
    color: '#fff',
  },
  '& label.Mui-focused': {
    color: '#fff',
  },
  '& .Mui-focused fieldset': {
    borderColor: 'rgba(255,255,255,0.85) !important',
  },
  '& fieldset': {
    borderColor: 'rgba(255,255,255,0.85)',
  },
  '& svg': {
    fill: 'rgba(255,255,255,0.85) !important',
  },
  '&:hover fieldset': {
    borderColor: '#fff !important',
  },
  '& *': {},
};
