import React from 'react'
import '../scss/Products.scss'
import Sidebar from './Sidebar'
import ProductsShow from './ProductsShow';

function Products() {

    const productsData = [
        {
            categoryId: "Y4wlWVRg8AUjnGt8zjJC",
            createdDate: "",
            description: "Bán trong ngày",
            id: "1HRb0ycLjymqcUYInB83",
            image: "https://firebasestorage.googleapis.com/v0/b/ecommerce-da802.appspot.com/o/v18.jpg?alt=media&token=f9a240f4-0d36-4316-8efb-db75846be7a6",
            name: "Dưa chuột",
            rating: 5,
            price: 7000,
        },
        {
            categoryId: "Y4wlWVRg8AUjnGt8zjJC",
            createdDate: "",
            description: "Bán trong ngày Bán trong ngày Bán trong ngày Bán trong ngày",
            id: "1HRb0ycLjymqcUYInB83",
            image: "https://firebasestorage.googleapis.com/v0/b/ecommerce-da802.appspot.com/o/v18.jpg?alt=media&token=f9a240f4-0d36-4316-8efb-db75846be7a6",
            name: "Dưa chuột",
            rating: 3,
            price: 5000,
        },
        {
            categoryId: "Y4wlWVRg8AUjnGt8zjJC",
            createdDate: "",
            description: "Bán trong ngày",
            id: "1HRb0ycLjymqcUYInB83",
            image: "https://firebasestorage.googleapis.com/v0/b/ecommerce-da802.appspot.com/o/v18.jpg?alt=media&token=f9a240f4-0d36-4316-8efb-db75846be7a6",
            name: "Dưa chuột",
            rating: 4,
            price: 12000,
        },
        {
            categoryId: "Y4wlWVRg8AUjnGt8zjJC",
            createdDate: "",
            description: "Bán trong ngày",
            id: "1HRb0ycLjymqcUYInB83",
            image: "https://firebasestorage.googleapis.com/v0/b/ecommerce-da802.appspot.com/o/v18.jpg?alt=media&token=f9a240f4-0d36-4316-8efb-db75846be7a6",
            name: "Dưa chuột",
            rating: 5,
            price: 7000,
        },
        {
            categoryId: "Y4wlWVRg8AUjnGt8zjJC",
            createdDate: "",
            description: "Bán trong ngày",
            id: "1HRb0ycLjymqcUYInB83",
            image: "https://firebasestorage.googleapis.com/v0/b/ecommerce-da802.appspot.com/o/v18.jpg?alt=media&token=f9a240f4-0d36-4316-8efb-db75846be7a6",
            name: "Dưa chuột",
            rating: 3,
            price: 5000,
        },
        {
            categoryId: "Y4wlWVRg8AUjnGt8zjJC",
            createdDate: "",
            description: "Bán trong ngày",
            id: "1HRb0ycLjymqcUYInB83",
            image: "https://firebasestorage.googleapis.com/v0/b/ecommerce-da802.appspot.com/o/v18.jpg?alt=media&token=f9a240f4-0d36-4316-8efb-db75846be7a6",
            name: "Dưa chuột",
            rating: 4,
            price: 12000,
        },
    ];

    return (
        <section className="products-container">
            <Sidebar data={productsData}></Sidebar>
            <ProductsShow data={productsData}></ProductsShow>
        </section>
    )
}

export default Products
