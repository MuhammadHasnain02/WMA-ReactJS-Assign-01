function ProductInfo(props) {
    
    // let {product} = props
    let {product , isAboveAvg} = props

    return (
        <div>
            <h3>{product.name}</h3>
            <h4>{product.price}</h4>
            <h4>{product.status ? "Available" : "Not Available"}</h4>
            <h4>{isAboveAvg ? "above" : "below"}</h4>
            <br />
        </div>
    )

}

export default ProductInfo