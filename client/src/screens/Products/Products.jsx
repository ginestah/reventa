import { useState, useEffect } from 'react'
import './Products.css'
import Product from "../../components/Product/Product"
import Search from "../../components/Search/Search"
import Layout from "../../components/shared/Layout/Layout"
import { getProducts } from "../../services/products"
import Checkbox from "../../components/Checkbox/Checkbox"


const Products = (props) => {
  const [allProducts, setAllProducts] = useState([])
  const [queriedProducts, setQueriedProducts] = useState([])
  // const [checked, setChecked] = useState(false)



  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts()
      setAllProducts(products)
      setQueriedProducts(products)
    }
    fetchProducts()
  }, [])

  // const handleClick = (e) => {
  //   setChecked(!checked)
  //   if (checked===true) {
  //     const newQueriesProducts = allProducts.filter(product =>
  //       product.name.toLowerCase().includes(e.target.value.toLowerCase()) )
  //     setQueriedProducts(newQueriesProducts)
  //   }
  // }




  const handleSearch = e => {
    const newQueriesProducts = allProducts.filter(product =>
      product.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setQueriedProducts(newQueriesProducts)
  }
  const handleSubmit = e => e.preventDefault();


  const productsJSX = queriedProducts.map((product, index) =>
    <Product _id={product.id} key={index} name={product.name}
      photo={product.photos[0].imgURL} price={product.price} />
  )

  return (
    <Layout user={props.user}>
      <Search onSubmit={handleSubmit} onChange={handleSearch} />
      {/* <Checkbox onClick={handleClick} setChecked={ }/> */}
      <div className="products">
        {productsJSX}
      </div>
    </Layout>
  )

}
export default Products;
