import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Addproduct() {
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        productName: '',
        price: '',
        description: '',
        status: ''
    });
    const { productName,
        price,
        description,
        status } = product;

    const onchangeProduct = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });

    }


    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8080/product/save', product);
        navigate('/');
    }

    return (
        <div className='container'>
            <div className='row'>
                <form className='form-control' onSubmit={(e) => onSubmit(e)}>
                    <fieldset className=''>
                        <legend> Add Product</legend>
                        <div class="mb-3">
                            <label class="form-label">Product Name  </label>
                            <input type="text" class="form-control" placeholder="Product Name"
                                name='productName'
                                value={productName}
                                onChange={(e) => onchangeProduct(e)}
                            />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Price  </label>
                            <input type="text" class="form-control" placeholder="Price"
                                name='price'
                                value={price}
                                onChange={(e) => onchangeProduct(e)}
                            />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Discription  </label>
                            <input type="text" class="form-control" placeholder="Discription"
                                name='description'
                                value={description}
                                onChange={(e) => onchangeProduct(e)}
                            />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Status  </label>
                            <input type="text" class="form-control" placeholder="Status"
                                name='status'
                                value={status}
                                onChange={(e) => onchangeProduct(e)}
                            />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                        <button type="submit" to="/" class="btn btn-outline-danger mx-3">Cancle</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}
