import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function ViewProduct() {
    let { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        productId: '',
        productName: '',
        price: '',
        description: '',
        status: ''
    });
    useEffect(() => {
        loadProduct();
    }, []);
    const loadProduct = async () => {
        const response = await axios.get(`http://localhost:8080/product/${productId}`);
        setProduct(response.data);
    }
    return (
        <div className='container'>
            <div className='row form-control bg-shadow'>
                <ul class="list-group">
                    <label className='text-center text-bold  mx-3'>Product</label>
                    <li class="list-group-item">ProductName : {product.productName}</li>
                    <li class="list-group-item">ProductName : {product.price}</li>
                    <li class="list-group-item">ProductName : {product.description}</li>
                    <li class="list-group-item">ProductName : {product.status}</li>
                    
                </ul>
                <Link className='btn btn-outline-danger' to='/'>Back To Home</Link>
            </div>
        </div>
    )
}
