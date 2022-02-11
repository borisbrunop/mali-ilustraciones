import React, { useCallback, useMemo, useState } from 'react';
import useMainContext from '../../hook/useMainContext'
import {Countries, Cities} from '../../bussiness/interfaces'

interface pTypes {
  country: string, 
  setCountry: React.Dispatch<React.SetStateAction<string>>, 
  itemsArray: any, 
  city: string, 
  setCity: React.Dispatch<React.SetStateAction<string>>, 
  disableCity: boolean, 
  product: string, 
  setProduct: React.Dispatch<React.SetStateAction<string>>, 
}

export const FormLogic = () => {
    const [country, setCountry] = useState<string>('')
    const [city, setCity] = useState<string>('')
    const [product, setProduct] = useState<string>('')
    const c = useMainContext();

    const disableCity = useMemo(() => !country,[country])

    const itemsCo = c.states.countries.map((item: Countries) => ({name: item.name, value: item.name}))
    
    const itemsCi: any = c.states.countries.map((item: any) => item.name === country ? item.cities : false)
    .filter((item) => item)[0]

    const finalCities = itemsCi && itemsCi.map((item :any ) => ({name: item.name, value: item.name}));

    const itemsArray:any = {city: finalCities, country: itemsCo}

    const p : pTypes = {    
      country, 
      setCountry, 
      itemsArray, 
      city, 
      setCity, 
      disableCity, 
      product, 
      setProduct
    }
  return p;
}
