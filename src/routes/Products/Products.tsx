import React, {useEffect, useMemo} from 'react';
import Box from '@mui/material/Box';
import SelectInput from './components/Select';
import { FormLogic } from './FormLogic';
  import { useTheme } from '@mui/material/styles';
import useGlobalMediaQuery from '../../hook/useGlobalMediaQuery'
import { Grid } from '@mui/material';
import { Categories } from '../../bussiness/interfaces';
import Card from '../../components/Card';
import { useNavigate } from 'react-router-dom';

export default function Products() {
    // const c = useMainContext();
    const navigate = useNavigate();
    const p = FormLogic()
    const theme = useTheme();
    const {sm, md, lg} = useGlobalMediaQuery()
    const prueba: any = [
      {label: 'prueba uno', value: 'p1'},
      {label: 'prueba dos', value: 'p2'},
      {label: 'prueba tres', value: 'p3'}
    ]

    // console.log('PRODUCTS', p.products)
    // console.log('CATEGORIES', p.categories)

    // console.log('FORM', {'city': p.city, 'country': p.country})


    useEffect(() => {
        p.setCity('')
    },[p.country])

  return (
      <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
        <Box sx={{width: sm ? '90%' : '60%',}}>
          <Grid container style={{display: 'flex', justifyContent: 'center'}}>
            <Grid item xs={12}>
              <SelectInput mt='20px' label='Pais' value={p.country} handleChange={p.setCountry} items={p.itemsArray.country}/>
            </Grid>
            {/* <Grid item xs={12} md={5.8} style={{margin: md ? '0px 10px 0px 0px': ''}}>
              <SelectInput mt='20px' disable={p.disableCity} label='Ciudad' value={p.city} handleChange={p.setCity} items={p.itemsArray.city}/>
            </Grid> */}
          </Grid>
        </Box>
        <Grid container style={{display: 'flex', justifyContent: 'flex-start', marginTop: '50px'}}>
        {p.categories[0] ? p.categories.map((category: Categories) => 
          <Card description={category.description_card} onClick={() => navigate(`/products/${category.key}`)} title={category.name} imgUrl={[category.url]}/> 
          )
          :
          <div style={{display: 'flex', justifyContent: 'center', width: '100%', marginTop: '30px'}}>
            <p style={{color: theme.palette.main.text1, fontSize: '25px'}}>Por favor seleccione un pais</p>
          </div>
        }
        </Grid>
          {/* <RadioInput mt='20px' options={prueba} label='Categories' value={p.categories} handleChange={p.setProduct}/> */}
      </Box>
  );
}
