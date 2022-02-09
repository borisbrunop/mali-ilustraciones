import React, {useEffect} from 'react';
// import useMainContext from '../../hook/useMainContext'
import Box from '@mui/material/Box';
import SelectInput from './components/Select';
import { FormLogic } from './FormLogic';
import { useTheme } from '@mui/material/styles';
import useGlobalMediaQuery from '../../hook/useGlobalMediaQuery'

export default function Form() {
    // const c = useMainContext();
    const {country, setCountry, itemsArray, city, setCity, disableCity} = FormLogic()
    const theme = useTheme();
    const {sm} = useGlobalMediaQuery()

    useEffect(() => {
        setCity('')
    },[country])

  return (
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <Box sx={{width: sm ? '90%' : '40%',}}>
            <SelectInput mt='20px' label='Pais' value={country} handleChange={setCountry} items={itemsArray.country}/>
            <SelectInput mt='20px' disable={disableCity} label='Ciudad' value={city} handleChange={setCity} items={itemsArray.city}/>
        </Box>
      </Box>
  );
}
