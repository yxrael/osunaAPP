import {useEffect, useState} from 'react';
import { Categoria, CategoriesResponse } from '../interfaces/appInterfaces';
import cafeApi from '../api/cafeApi';

export const useCategories = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    useEffect(() => {
    
        getCategories();

    }, [])
    
    const getCategories = async () => {
        const resp = await cafeApi.get<CategoriesResponse>('/categorias')
        // console.log( resp.data.categorias)
        setCategorias( resp.data.categorias );
        setIsLoading(false);
    }

  return  {
    categorias,
    isLoading
  }
}