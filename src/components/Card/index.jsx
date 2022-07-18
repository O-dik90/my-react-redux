import React, { useEffect } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { cartsActions } from '../../redux/actions/cartActions';
import productsActions from '../../redux/actions/productActions';

const Card = () => {
  const products = useSelector((state) => state.ProductsReducers)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(productsActions());
  }, [dispatch])

  const handleAddCart = (item) => {
      // console.log(item);
      dispatch(cartsActions(item))
  }

  return (
    <div className="my-2">
      <div className="col">
        <div className="d-flex justify-content-around flex-wrap mb-3">
          {
            products.Products.map(item => {
              return (
                <div className="p-1 my-2" key={item.id}>
                  <div className="card mx-auto" style={{ width: "148px" }}>
                    <img src={item.gambar} className="card-img-top " alt={item.nama} />
                    <div className="card-body p-1">
                      <p className="m-0 ">{item.nama}</p>
                      <p className="m-0 font-weight-bold">Rp. {item.harga}</p>
                      {/* detail untuk rekomendasi/review belum ada */}
                      <button type="button" className="btn btn-info btn-sm m-1">Detail</button>
                      <button className="btn btn-info btn-sm m-1" onClick={()=>handleAddCart(item)}><FaShoppingCart />+</button>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}

export default Card