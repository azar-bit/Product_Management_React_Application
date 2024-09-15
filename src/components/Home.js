import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
export default function Home() {
    let navigate = useNavigate();
    // const [products, setProducts] = useState({
    //     productId: '',
    //     productName: '',
    //     price: '',
    //     description: '',
    //     status: ''
    // });

    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);
    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/product/");
        // console.log(result.data);
        setProducts(result.data);
    }
    const deleteProduct = async (productId) => {
        await axios.delete(`http://localhost:8080/product/delete/${productId}`);
        loadUsers();
        navigate("/");
    }
    return (
        <div className='container'>
            <div className='row'>
                <table class="table form border shadow">
                    <thead className='text-co'>
                        <tr >
                            <th scope="col">ProductId</th>
                            <th scope="col">ProductName</th>
                            <th scope="col">Price</th>
                            <th scope="col">Discription</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{product.productName}</td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                    <td>{product.status}</td>
                                    <td>
                                        <Link to={`/editproduct/${product.productId}`} className="btn btn-outline-primary mx-2">Edit</Link>
                                        <Link to={`/viewproduct/${product.productId}`} className="btn btn-outline-success mx-2">View</Link>
                                        <button className="btn btn-outline-danger mx-2" onClick={(e) => deleteProduct(product.productId)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
