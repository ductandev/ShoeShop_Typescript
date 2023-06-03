//rxslice
import { Action, createSlice,PayloadAction } from '@reduxjs/toolkit'
import { DispatchType } from '../configStore';
import axios from 'axios';
import { http, httpNonAuth } from '../../Util/config';

export interface ProductModel {
    id: number;
    name: string;
    alias: string;
    price: number;
    description: string;
    size: string;
    shortDescription: string;
    quantity: number;
    deleted: boolean;
    categories: string;
    relatedProducts: string;
    feature: boolean;
    image: string;
}
export interface ProductState {
    arrProduct: ProductModel[]
}
const initialState:ProductState = {
    arrProduct: []
}
const productReducer = createSlice({
    name: 'productReducer',
    initialState,
    reducers: {
        getProductsAction: (state:ProductState,action:PayloadAction<ProductModel[]>) => {
            state.arrProduct = action.payload;
        }
    }
});

export const { getProductsAction} = productReducer.actions

export default productReducer.reducer

// ---------------- action async --------------

export const getDataProductApi = () => {
    return async (dispatch:DispatchType) => {
        // const res = await axios({
        //     url: 'https://shop.cyberlearn.vn/api/Produc',
        //     method:'GET';
        // })
        const res = await httpNonAuth.get('/api/product');


        //Sau khi lấy dữ liệu từ api về ta sẽ đưa lên reducer
        //CÁCH 1:
        // const action: PayloadAction<ProductModel[]> = {
        //     type: 'productReducer/getProductsAction',
        //     payload: res.data.content
        // }
        //CÁCH 2: 
        const action:PayloadAction<ProductModel[]> = getProductsAction(res.data.content);
        dispatch(action);
    }
}