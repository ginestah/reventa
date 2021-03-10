
import { useState, useEffect } from "react";
import "./Products.css";
import Product from "../../components/Product/Product";
import Search from "../../components/Search/Search";
import Layout from "../../components/shared/Layout/Layout";
import { getProducts } from "../../services/products";
import Checkbox from "../../components/Checkbox/Checkbox";


const Products = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [queriedProducts, setQueriedProducts] = useState([]);
  const [isChecked, setChecked] = useState(false);
  const [options, setOptions] = useState([])
  const [selectedProduct, setSelectedProduct] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setAllProducts(products);
      setQueriedProducts(products);
    };
    fetchProducts();
  }, []);




  const handleChange = (e) => {
    console.log(e.action)
    // setChecked(!isChecked)
    // console.log(isChecked)
    // console.log(checked)
    // console.log(e.target.value)
    const value = e.target.type === 'checkbox' && e.target.checked
    // console.log(value)
    if (value) {

      setOptions([...options, e.target.value])
      console.log(options)
      //   console.log(options)
      // }
      // else {
      //   const remove = e.target.value
      //   const indexofRemove = options.findIndex((option) => (option === remove))
      //   console.log(indexofRemove)
      //   options.splice(indexofRemove,1,remove)
      //   setOptions([...options])
      const newQueriesProducts = allProducts.filter(product =>
        product.name.toLowerCase().includes(e.target.value.toLowerCase())

      )
      setQueriedProducts(newQueriesProducts)

    } else {
      let findNum = options.findIndex(option => option === e.target.value)
      const removeOne = (options[findNum])

      options.splice(findNum, 1, removeOne)

      setQueriedProducts(allProducts)
    }




    // setSelectedProduct([...selectedProduct,newQueriesProducts])
  }


  //   const checkSubmit = (e) => {
  //     let checkedArray = [];
  //     if (e.target.checked === true) {
  //       checkedArray.push()
  //     }

  // }
  const handleSearch = e => {
    const newQueriesProducts = allProducts.filter(product =>
      product.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setQueriedProducts(newQueriesProducts)
  }

  const handleSubmit = e => e.preventDefault();


  const productsJSX = queriedProducts.map((product, index) =>
    <Product _id={product._id} key={index} name={product.name.length > 25 && product.name.slice(0, 25)}
      photo={product.photos ? product.photos[0] ? product.photos[0].imgURL : null : null} price={product.price} />
  )
  
  return (
    <Layout user={props.user}>
      <Search onSubmit={handleSubmit} onChange={handleSearch} />
      <Checkbox onChange={handleChange} onSubmit={handleSubmit} setChecked={setChecked} isChecked={!isChecked} />
      <div className="products">
        {productsJSX}

      </div>
    </Layout>
  );
};
export default Products;
