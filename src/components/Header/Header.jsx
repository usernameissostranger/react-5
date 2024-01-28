import { Link } from 'react-router-dom';
import './header.css';
import { useState, useEffect } from "react";
import axios from "axios";

const Header = () => {
    const [categories, setCategories] = useState([]);
    const [sign, setSign] = useState(0)
    

    useEffect(() => {
        axios('https://fakestoreapi.com/products/categories')
        .then(({data}) => setCategories(data))
    })

    const handleSignIncrement = () => {
        setSign((prevSign) => prevSign + 1);
      };

    return (
        <header className='header'>
            <div className='container header-container'>
                <h1 className='header-logo'><Link to={'/'}>Shop</Link></h1>

                <nav>
                    {
                        categories.length === 0
                        ? <div className="preloader">
                          <div className="lds-ring"><div /><div /><div /><div /></div>
                        </div>
                      :categories.map(item => {
                            return <Link to={`/category/${item}`} key={item}>{item}</Link>
                        })
                    }
                    <Link to={'/'}>home</Link>
                    <Link to={'/cart'}>cart <h1>{sign}</h1></Link>
                </nav>
            </div>
        </header>
        
    );
}

export default Header;
