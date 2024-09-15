import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function EditProduct() {

    const navigate = useNavigate();
    let { productId } = useParams();
    console.log(productId);
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

    useEffect(() => {
        loadProduct();
    }, []);

    const loadProduct = async () => {
        console.log(productId);
        const result = await axios.get(`http://localhost:8080/product/${productId}`);
        setProduct(result.data);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(productId+" product id");
       
        await axios.put(`http://localhost:8080/product/update/${productId}`,product);
        navigate('/');
    }

    return (
        <div className='container'>
            <div className='row'>
                <form className='form-control' onSubmit={(e) => onSubmit(e)}>
                    <fieldset className=''>
                        <legend> Edit Product</legend>
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
                        <button type="submit" class="btn btn-primary mx-3">Submit</button>
                        <button type="submit" to="/" class="btn btn-outline-danger">Cancle</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}
