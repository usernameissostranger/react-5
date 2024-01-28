import { useState, useEffect } from "react";
import axios from 'axios'
import Card from "../../components/Card/Card"
import { useParams} from "react-router-dom"

const Category = (addCart) => {
    const [products, setProducts] = useState([])
    const params = useParams();
    const getProducts = () => {
        axios(`https://fakestoreapi.com/products/category/${params.category}`)
        .then(({data}) => setProducts(data))
    }
    useEffect(() => {
        getProducts()
    }, [params])
    return (
        <section className="category"> 
            <div className="container">
                <div className="row">
                    {
                        products.length === 0
                        ? <div className="preloader">
                          <div className="lds-ring"><div /><div /><div /><div /></div>
                        </div>
                      :products.map((item) => {
                            return (
                                <div key={item.id} className="col-4">
                                    <Card addCart={addCart} item={item} />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Category;
