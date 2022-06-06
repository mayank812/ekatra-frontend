import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const CustomInput = styled(InputBase)(({ theme }) => ({

  'label + &': {
    marginTop: theme.spacing(1),
  },

  '& .MuiInputBase-input': {
    fontSize: 18,
    fontWeight: 700,
    width: 218,
    padding: '30px 0 22px 10px',
    border: '2px solid #000000',
    borderRadius: 20,
    '&:focus': {
      borderRadius: 20
    }
  },

}));

export default function SelectInputLarge({ inputLabel, options, value, onChange }) {

  return (

    <FormControl>
      <InputLabel id={inputLabel}>{inputLabel}</InputLabel>
      <Select
        labelId={inputLabel}
        id={inputLabel}
        value={value}
        label={inputLabel}
        onChange={onChange}
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