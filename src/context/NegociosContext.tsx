import React, { createContext, useEffect, useState } from 'react';
import cafeApi from '../api/cafeApi';
import { Producto, ProductsResponse } from '../interfaces/appInterfaces';
import { ImagePickerResponse, Asset } from 'react-native-image-picker';

type ProductsContextProps = {
    products: Producto[];
    loadProducts: () => Promise<void>;
    addProduct: ( categoryId: string, productName: string ) => Promise<Producto>;
    updateProduct: ( categoryId: string, productName: string, productId: string ) => Promise<Producto>;
    deleteProduct: ( id: string ) => Promise<void>;
    loadProductById: ( id: string ) => Promise<Producto>;
    uploadImage: ( data: Asset, id: string ) => Promise<void>; // TODO: cambiar ANY
    estadoCarga: boolean
}

export const NegociosContext = createContext({} as ProductsContextProps);

export const NegociosProvider = ({ children }: any ) => {

    const [products, setProducts] = useState<Producto[]>([]);

    const [estadoCarga, setEstadoCarga] = useState(false);

    useEffect(() => {
      loadProducts();
    }, [])
    

    const loadProducts = async() => {
        const resp = await cafeApi.get<ProductsResponse>('/productos?limite=50');
        setProducts([...resp.data.productos ]);
    }

    const addProduct = async( categoryId: string, productName: string ): Promise<Producto> => {

    
            const resp = await cafeApi.post<Producto>('/productos', {
                nombre: productName,
                categoria: categoryId
            });
            setProducts([ ...products, resp.data ]);

            return resp.data;
    
        
    }

    const updateProduct = async( categoryId: string, productName: string, productId: string ): Promise<Producto> =>{

            const resp = await cafeApi.put<Producto>(`/productos/${productId}`, {
                nombre: productName,
                categoria: categoryId
            });
            setProducts( products.map( prod => {
                return ( prod._id === productId)
                            ? resp.data
                            : prod
            }));

            return resp.data;
        
    }

    const deleteProduct = async( id: string ) => {
        try {
            const resp = await cafeApi.delete(`/productos/${ id }`);
            console.log(resp);
            
        } catch (error) {
            console.log(error)
        }
    }

    const loadProductById = async( id: string ) => {
        const resp = await cafeApi.get<Producto>(`/productos/${ id }`);
        return resp.data
    };

    // TODO: cambiar ANY
    const uploadImage = async( data: Asset, id: string ): Promise<void> => {

        setEstadoCarga(true);

        const fileToUpload = {
            uri: data.uri,
            type: data.type,
            name: data.fileName
        }

        const formData = new FormData();
        formData.append('archivo', fileToUpload);

        try {
            const resp = await cafeApi.put(`/uploads/productos/${ id }`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            console.log(resp);
            
        } catch (error) {
            console.log(error);
        };

        setEstadoCarga(false);
    }

    return(
        <NegociosContext.Provider value={{
            products,
            loadProducts,
            addProduct,
            updateProduct,
            deleteProduct,
            loadProductById,
            uploadImage,
            estadoCarga
        }}>
            { children }
        </NegociosContext.Provider>
    )
}