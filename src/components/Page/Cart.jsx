import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const items = useSelector(state => state.CartReducers)
  // console.log(items);

  return (
    <div className="container mt-2">
      {
        items.cartsNumb === 0 ?
          <>
            <p className="font-weight-bolder">Carts Still Empty!!!</p>
          </>
          :
          <div className="row justify-content-around">
            <div className="col-sm-6 col-lg-6 p-0 mb-5">
              <div className="card">
                {
                  // console.log(items.carts)
                  items.carts.map((product) => {
                    console.log(product)
                    return (
                      <>
                        <div className="col" key={product.id}>
                          <div className="m-1 font-weight-bold">{product.nama}</div>
                          <div className="row justify-content-between mx-1">
                            <div className="col p-0">
                              <img src={product.gambar} className="card-img-top " alt={product.kategori} />
                            </div>
                            <div className="col-6 align-content-between pl-2">
                              <div>
                                <p className="text-left m-0">Rp.{product.harga}</p>
                                <p className="text-left m-0">Subtotal:</p>
                                <p className="text-left m-0 font-weight-bold">Rp.{product.harga}</p>
                              </div>
                              <div className="btn-group btn-group-sm my-2" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-primary ">-</button>
                                <input type="number" className="form-control mx-1 p-0 text-center" value={product.countItem} />
                                <button type="button" className="btn btn-primary ">+</button>
                              </div>
                              
                            </div>
                          </div>
                          <button type="button" className="btn btn-danger btn-sm m-2">Delete Item</button>
                          <button type="button" className="btn btn-primary btn-sm m-2">Update Jumlah</button>
                          <hr />
                        </div>
                      </>
                    )
                  })
                }
              </div>
            </div>
            <div className="col-sm col-lg-5">
              <h5 className="text-left font-weight-bold">Carts Totals</h5>
              <hr />
              <div className="row justify-content-lg-between">
                <div className="col text-left">sub total</div>
                <div className="col text-right">Rp. 300000</div>
              </div>
              <hr />
              <div className="row justify-content-lg-between font-weight-bold">
                <div className="col text-left">total</div>
                <div className="col text-right">Rp. 300000</div>
              </div>
              <button type="button" className="btn btn-outline-success btn-sm my-3">Check Out</button>
            </div>
          </div>
      }
    </div>
  )
}

export default Cart
