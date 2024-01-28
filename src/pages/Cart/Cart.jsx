import './cart.css';

const Cart = ({cartData, setCartData, addCart}) => {
    const minusCart = (obj) => {
        const idx = cartData.findIndex(item =>{
            return item.id === obj.id
          });
        if(obj.count > 1){
            cartData[idx].count--;
            setCartData([...cartData]);
        }
    }

    const deleteCart = (obj) => {
        setCartData(cartData.filter(item => {
            return item.id !== obj.id
        }))
    }

    return (
        <section className='cart'>
            <div className="container">
                <p className='cart-total'>Total: ${
                    cartData.reduce((acc, rec) => {
                        return acc + rec.price * rec.count
                    }, 0).toFixed(2)
                    }</p>
                {
                    cartData.length === 0
                    ? <h1>You don't have any product yet</h1>
                  :
                    cartData.map(item =>{
                        return <div key={item.id} className="cart-item">
                            <div className="cart-item-left">
                                <img src={item.image} alt="" />
                                <div>
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                            <div className="cart-item-right">
                                <div>
                                    <button onClick={() => {
                                        minusCart(item)
                                    }}>-</button>
                                    <span>{item.count}</span>
                                    <button onClick={() => {
                                        addCart(item)
                                    }}>+</button>
                                </div>
                                <p>price: ${item.price * item.count}</p>
                                <button onClick={() => {
                                    deleteCart(item)
                                }}>delete</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </section>
    );
}

export default Cart;
