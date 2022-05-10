import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/styles';
import { SelectStyles } from './useStyles';

interface ItemsTypes {
    value: string, 
    name: string
}

interface SelectInputTypes {
    value: string;
    handleChange: React.Dispatch<React.SetStateAction<string>>;
    items: ItemsTypes[],
    label: string,
    disable?: boolean,
    mt?: string,
}

export default function SelectInput({value, handleChange, items = [], label, disable = false, mt = '0px'}: SelectInputTypes) {
    const theme = useTheme();
    const stylesClass = makeStyles(() => ({
        underline: {
            color: theme.palette.main.text1,
            '&:after': {
                borderBottom: `2px solid ${theme.palette.main.text2}`
            },
            '&::before': {
                borderBottom: `2px solid ${theme.palette.main.text2}`
            },
              "& .MuiSvgIcon-root": {
                color: theme.palette.main.text2,
              },
        },
        inputLabelRoot: {
            color: theme.palette.main.text2,
            "&.Mui-focused": {
                color: theme.palette.main.text2,
            },
        }
    }));

    const classesSelect = SelectStyles(theme);
    const classes = stylesClass();
  return (
    <FormControl 
        variant="standard" 
        sx={{minWidth: 120, marginTop: mt,  width: '100%'}}
    >
        <InputLabel className={classes.inputLabelRoot} id="demo-simple-select-standard-label">{label}</InputLabel>
        <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={value}
        onChange={(e: any) => handleChange(e.target.value)}
        label={label}
        className={classes.underline}
        disabled={disable}
        // color='primary'
        >
            {items.map((item: ItemsTypes, index: number) => 
                <MenuItem 
                    style={{
                        backgroundColor: theme.palette.main.background, 
                        color: theme.palette.main.text1,
                        marginBottom: index === items.length - 1 ? '-8px' : '0px' ,
                        paddingBottom: index === items.length - 1 ? '8px' : '4px',
                        marginTop: index === 0 ? '-8px' : '0px',
                        paddingTop: index === 0  ? '8px' : '0px'
                    }} 
                    value={item.value}
                >{item.name}
                </MenuItem>
                )}
        </Select>
    </FormControl>
  );
}
