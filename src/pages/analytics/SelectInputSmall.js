import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';



const CustomInput = styled(InputBase)(({ theme }) => ({

  'label + &': {
    marginTop: theme.spacing(1),
    color: theme.palette.success.light
  },

  '& .MuiInputBase-input': {
    borderRadius: 10,
    border: '1px solid #3dbc8d',
    fontSize: 18,
    fontWeight: 700,
    fontFamily: 'Barlow',
    color: '#939393',
    padding: '8px 26px 8px 12px',
  }
}));

export default function SelectInputSmall({ inputLabel, options }) {
  const [option, setOption] = React.useState('');

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (
    
      <FormControl style={{width: 200, height: 40}} >
        <InputLabel id={inputLabel} >{inputLabel}</InputLabel>
        <Select
          labelId={inputLabel}
          id={inputLabel}
          value={option}
          label={inputLabel}
          onChange={handleChange}
          input={<CustomInput />}
        >
          
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
            
        </Select>
      </FormControl>
    
  );
}