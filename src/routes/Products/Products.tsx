import React, {useEffect} from 'react';
// import useMainContext from '../../hook/useMainContext'
import Box from '@mui/material/Box';
import SelectInput from './components/Select';
import { FormLogic } from './FormLogic';
import { useTheme } from '@mui/material/styles';
import useGlobalMediaQuery from '../../hook/useGlobalMediaQuery'
import RadioButtonsGroup from './components/Radio';
import RadioInput from './components/Radio';
import { Grid } from '@mui/material';

export default function Products() {
    // const c = useMainContext();
    const p = FormLogic()
    const theme = useTheme();
    const {sm, md} = useGlobalMediaQuery()
    const prueba: any = [
      {label: 'prueba uno', value: 'p1'},
      {label: 'prueba dos', value: 'p2'},
      {label: 'prueba tres', value: 'p3'}
    ]

    console.log('FORM', {'product': p.product, 'city': p.city, 'country': p.country})


    useEffect(() => {
        p.setCity('')
    },[p.country])

  return (
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <Box sx={{width: sm ? '90%' : '60%',}}>
          <Grid container style={{display: 'flex', justifyContent: 'center'}}>
            <Grid item xs={12} md={5.8} style={{margin: md ? '0px 10px 0px 0px': ''}}>
              <SelectInput mt='20px' label='Pais' value={p.country} handleChange={p.setCountry} items={p.itemsArray.country}/>
            </Grid>
            <Grid item xs={12} md={5.8} style={{margin: md ? '0px 0px 0px 10px': ''}}>
              <SelectInput mt='20px' disable={p.disableCity} label='Ciudad' value={p.city} handleChange={p.setCity} items={p.itemsArray.city}/>
            </Grid>
          </Grid>
          <RadioInput mt='20px' options={prueba} label='Producto' value={p.product} handleChange={p.setProduct}/>
        </Box>
      </Box>
  );
}
