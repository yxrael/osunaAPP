import React, { createContext, useEffect, useState } from 'react';
import cafeApi from '../api/cafeApi';
import { Oferta, OfertasResponse } from '../interfaces/appInterfaces';
import { ImagePickerResponse, Asset } from 'react-native-image-picker';

type OfertasContextProps = {
    ofertas: Oferta[];
    loadOfertas: () => Promise<void>;
    addOferta: ( categoryId: string, productName: string ) => Promise<Oferta>;
    updateOferta: ( categoryId: string, productName: string, productId: string ) => Promise<Oferta>;
    deleteOferta: ( id: string ) => Promise<void>;
    loadOfertaById: ( id: string ) => Promise<Oferta>;
    uploadImage: ( data: Asset, id: string ) => Promise<void>; // TODO: cambiar ANY
    estadoCarga: boolean
}

export const OfertasContext = createContext({} as OfertasContextProps);

export const OfertasProvider = ({ children }: any ) => {

    const [ofertas, setOfertas] = useState<Oferta[]>([]);

    const [estadoCarga, setEstadoCarga] = useState(false);

    useEffect(() => {
      loadOfertas();
    }, [])
    

    const loadOfertas = async() => {
        const resp = await cafeApi.get<OfertasResponse>('/ofertas?limite=50');
        setOfertas([...resp.data.ofertas ]);
    }

    const addOferta = async( categoryId: string, ofertaName: string ): Promise<Oferta> => {

    
            const resp = await cafeApi.post<Oferta>('/ofertas', {
                nombre: ofertaName,
                categoria: categoryId
            });
            setOfertas([ ...ofertas, resp.data ]);

            return resp.data;
    
        
    }

    const updateOferta = async( categoryId: string, ofertaName: string, ofertaId: string ): Promise<Oferta> =>{

            const resp = await cafeApi.put<Oferta>(`/ofertas/${ofertaId}`, {
                nombre: ofertaName,
                categoria: categoryId
            });
            setOfertas( ofertas.map( ofert => {
                return ( ofert._id === ofertaId)
                            ? resp.data
                            : ofert
            }));

            return resp.data;
        
    }

    const deleteOferta = async( id: string ) => {
        try {
            const resp = await cafeApi.delete(`/ofertas/${ id }`);
            console.log(resp);
            
        } catch (error) {
            console.log(error)
        }
    }

    const loadOfertaById = async( id: string ) => {
        const resp = await cafeApi.get<Oferta>(`/ofertas/${ id }`);
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
            const resp = await cafeApi.put(`/uploads/ofertas/${ id }`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            console.log(resp);
            
        } catch (error) {
            console.log(error);
        };

        setEstadoCarga(false);
    }

    return(
        <OfertasContext.Provider value={{
            ofertas,
            loadOfertas,
            addOferta,
            updateOferta,
            deleteOferta,
            loadOfertaById,
            uploadImage,
            estadoCarga
        }}>
            { children }
        </OfertasContext.Provider>
    )
}