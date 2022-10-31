const Cartitem = (props) => {
    const {name, count, price, src} = props.props
    let total = (parseInt(price.replace('$,"')) * count)
    return ( <div className="cart-item">
                <img alt={name} src={src} />
        <p> {name}</p>
        <p> {total} </p>
        <p> {count} </p>
        <button className="btn"> - </button> 
    </div>  );
}
 
export default Cartitem;