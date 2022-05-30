import React, { useCallback, useMemo, useState, useEffect } from 'react';
import useMainContext from '../../hook/useMainContext'
import {Countries, Cities, Categories, Products} from '../../bussiness/interfaces'

interface pTypes {
  country: string, 
  setCountry: React.Dispatch<React.SetStateAction<string>>, 
  itemsArray: any, 
  city: string, 
  setCity: React.Dispatch<React.SetStateAction<string>>, 
  disableCity: boolean, 
  categories: Categories[],
  products: Products[],
}

export const FormLogic = () => {
    const [country, setCountry] = useState<string>('')
    const [city, setCity] = useState<string>('')
    const [categories, setCategories] = useState<any>([])
    // const [category, setCategory] = useState<string>('')
    const c = useMainContext();

    const disableCity = useMemo(() => !country,[country])

    const itemsCo = c.states.countries.map((item: Countries) => ({name: item.name, value: item.name}))
    
    const itemsCi: any = c.states.countries.map((item: any) => item.name === country ? item.cities : false)
    .filter((item) => item)[0]

    const finalCities = itemsCi && itemsCi.map((item :any ) => ({name: item.name, value: item.name}));

    const itemsArray:any = {city: finalCities, country: itemsCo}

    useEffect(() => {
      c.actions.setCountry(country)
      setCategories(c.states.categories.filter((cat: Categories) => cat.countries?.includes(country)))
    }, [country])

    // console.log('CATEGORIES TO BE DISPLAYED', categories)
    // console.log('COUNTRY FROM CONTEXT', c.states.country)

    const p : pTypes = {    
      country, 
      setCountry, 
      itemsArray, 
      city, 
      setCity, 
      disableCity, 
      categories: categories,
      products: c.states.products
    }
  return p;
}
