import React from 'react';
import './Product.css';

function ProducttList(props) {
  const APIURl = process.env.REACT_APP_API_URL;
  const { products } = props;

  function deleteProduct(id) {
    fetch(`${APIURl}api/products/${id}`, {
      method: 'DELETE',
    }).then((result) => {
      result.json().then((respone) => {
        console.warn(respone);
        alert('pruduct deleted');
      });
    });
  }

  return (
    <div>
      <ul>
        {products.map((product) => (
          <div className="card">
            <div className="container">
              <div key={product.id}>
                <img
                  className="post-image"
                  width={250}
                  src={product.image}
                  alt={product.name}
                />
                <h4> {product.title}</h4>
                <p> {product.desc}</p>
                <p className="product-price"> Price:{product.price}</p>
                <p className="product-inStock"> in Stock: {product.quantaty}</p>

                <button
                  className="delete-Button"
                  onClick={() => deleteProduct(product._id)}
                >
                  {' '}
                  Add item
                </button>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ProducttList;
