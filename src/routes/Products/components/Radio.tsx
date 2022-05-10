import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { makeStyles } from '@material-ui/styles';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useTheme } from '@mui/material/styles';

interface RadioTypes {
    options: {label: string, value: string}[],
    label: string,
    value: string;
    handleChange: React.Dispatch<React.SetStateAction<string>>;
    mt?: string
}

export default function RadioInput({options, label, value, handleChange, mt = '0px'}: RadioTypes) {
    const theme = useTheme();
    const styles = makeStyles(() => ({
        radioButton: {
            color: theme.palette.main.text2,
            "&.Mui-checked": {
                color: theme.palette.main.text2,
            },
        },
        inputLabelRoot: {
            color: theme.palette.main.text2,
            "&.Mui-focused": {
                color: theme.palette.main.text2,
            },
        },
        label: {
            color: theme.palette.main.text1,
        }
    }));
    const classes = styles()


  return (
    <FormControl sx={{minWidth: 120, marginTop: mt,  width: '100%', padding: '0px, 10px, 0px 10px'}}>
      <FormLabel className={classes.inputLabelRoot} id="demo-radio-buttons-group-label">{label}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        row
        value={value}
        onChange={(e: any) => handleChange(e.target.value)}
      >
          {options.map((option: {label: string, value: string}) =>
            <FormControlLabel key={option.label} className={classes.label}  value={option.value} control={<Radio className={classes.radioButton} />} label={option.label} />
          )}
      </RadioGroup>
    </FormControl>
  );
}
