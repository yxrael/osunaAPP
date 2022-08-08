import React, { createContext, useEffect, useState } from 'react';
import cafeApi from '../api/cafeApi';
import { Negocio, NegociosResponse } from '../interfaces/appInterfaces';
import { ImagePickerResponse, Asset } from 'react-native-image-picker';

type NegociosContextProps = {
    negocios: Negocio[];
    loadNegocios: () => Promise<void>;
    addNegocio: ( categoryId: string, negocioName: string ) => Promise<Negocio>;
    updateNegocio: ( categoryId: string, negocioName: string, negocioId: string ) => Promise<Negocio>;
    deleteNegocio: ( id: string ) => Promise<void>;
    loadNegocioById: ( id: string ) => Promise<Negocio>;
    uploadImage: ( data: Asset, id: string ) => Promise<void>; // TODO: cambiar ANY
    estadoCarga: boolean
}

export const NegociosContext = createContext({} as NegociosContextProps);

export const NegociosProvider = ({ children }: any ) => {

    const [negocios, setNegocios] = useState<Negocio[]>([]);

    const [estadoCarga, setEstadoCarga] = useState(false);

    useEffect(() => {
      loadNegocios();
    }, [])
    

    const loadNegocios = async() => {
        const resp = await cafeApi.get<NegociosResponse>('/negocios?limite=50');
        setNegocios([...resp.data.negocios ]);
    }

    const addNegocio = async( categoryId: string, negocioName: string ): Promise<Negocio> => {

    
            const resp = await cafeApi.post<Negocio>('/negocios', {
                nombre: negocioName,
                categoria: categoryId
            });
            setNegocios([ ...negocios, resp.data ]);

            return resp.data;
    
        
    }

    const updateNegocio = async( categoryId: string, negocioName: string, negocioId: string ): Promise<Negocio> =>{

            const resp = await cafeApi.put<Negocio>(`/negocios/${negocioId}`, {
                nombre: negocioName,
                categoria: categoryId
            });
            setNegocios( negocios.map( negoc => {
                return ( negoc._id === negocioId)
                            ? resp.data
                            : negoc
            }));

            return resp.data;
        
    }

    const deleteNegocio = async( id: string ) => {
        try {
            const resp = await cafeApi.delete(`/negocios/${ id }`);
            console.log(resp);
            
        } catch (error) {
            console.log(error)
        }
    }

    const loadNegocioById = async( id: string ) => {
        const resp = await cafeApi.get<Negocio>(`/negocios/${ id }`);
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
            const resp = await cafeApi.put(`/uploads/negocios/${ id }`, formData, {
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
            negocios,
            loadNegocios,
            addNegocio,
            updateNegocio,
            deleteNegocio,
            loadNegocioById,
            uploadImage,
            estadoCarga
        }}>
            { children }
        </NegociosContext.Provider>
    )
}