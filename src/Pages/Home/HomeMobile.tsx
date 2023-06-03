import React, { useEffect } from 'react'
import Product from '../../Components/Product/Product'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType, RootState } from '../../Redux/configStore'
import { ProductModel, getDataProductApi } from '../../Redux/reducers/productReducer'
import { Action, AnyAction, Dispatch } from '@reduxjs/toolkit'
import {NavLink} from 'react-router-dom';
type Props = {}
export default function HomeMobile({ }: Props) {
  const { arrProduct } = useSelector((state: RootState) => state.productReducer);
  const dispatch: DispatchType = useDispatch();
  //Gọi api
  const getDataProductList = async () => {

    const actionApi = getDataProductApi();
    dispatch(actionApi);
  }
  useEffect(() => {
    getDataProductList();
  },[])

  const renderProducts = (): JSX.Element[] => {

    return arrProduct.map((item:ProductModel,index) => {
      return <div className='row my-2' key={item.id}>
        <div className='d-flex'>
            <img src={item.image} alt="..." className="w-25" />
            <div className='bg-dark text-white p-3'>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="text-end">
                    <NavLink className="btn btn-success" to={`/detail/${item.id}`}>View detail</NavLink>
                </div>
            </div>
        </div>
      </div>
    })

  }



  return (
    <div className=''>
      <h3>Shop</h3>
        {renderProducts()}
    </div>
  )
}