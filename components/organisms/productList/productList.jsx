import ProductCard from "../../molecules/cards/productCard"

const ProductList = () => {
  return(
    <div className="productList">
      <div className="grid grid-cols-3 gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default ProductList;