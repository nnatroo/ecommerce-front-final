import classes from '../modules/Popular.module.scss'
import layout from '../modules/Layout.module.scss'
import arrow from '../assets/arrow.svg'
import {useEffect, useState} from "react";
const Popular = () => {

    const [popularProducts, setPopularProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=> {
                setPopularProducts(json);
                console.log(json);
            })
    }, []);

    const clickHandler = (item) => {
        console.log(item)
    }

    return <>
        <section className={`${classes['popular-wrapper']} ${layout['container']}`}>
            <div className={classes['popular-top-bar']}>
                <h3>The most popular <span>PRODUCTS</span> </h3>
                <span>View All <img src={arrow} alt=""/></span>
            </div>
            <div className={classes['popular-list']}>

                {popularProducts.map((item, index) => (
                    <a onClick={() => clickHandler(item)} key={index} className={classes['item-card']}>
                        <img src={item.image} alt=""/>
                        <span>{item.title.slice(0, 22)}...</span>
                        <span>{item.price} $</span>
                    </a>
                ))}

            </div>
        </section>
    </>
};


export default Popular;