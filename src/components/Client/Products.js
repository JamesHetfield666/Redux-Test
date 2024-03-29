import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchedProducts } from "../../redux/actions";
import '../../styles/products.scss'

const Product = ({ syncProducts }) => {
    const burger = useSelector(state => state.burger.burger)
    const dispatch = useDispatch()
    dispatch(fetchedProducts())
    let obj = {}
    syncProducts.forEach(el => [obj[el.type] = el])
    return (
        <div className="products" style={{ transform: burger ? 'scale(0.8)' : 'scale(1)' }}>
            {Object.keys(obj).length > 0 &&
                <div className='products_container'>
                    <div className="products--technics--services--accessories">
                        <div className='products--technics--services'>
                            <div className='products--technics short_item' style={{ background: `url(${obj.technics.image})` }}><span>{obj.technics.title}</span></div>
                            <div className='products--services short_item' style={{ background: `url(${obj.services.image})` }}><span>{obj.services.title}</span></div>
                        </div>
                        <div className='products--accessories long_item' style={{ background: `url(${obj.accessories.image})` }}><span>{obj.accessories.title}</span></div>
                    </div>
                    <div className="products--games" style={{ background: `url(${obj.games.image})` }}><span>{obj.games.title}</span></div>
                </div>
            }

        </div>
    )
}

const mapStateToProps = state => {
    return {
        syncProducts: state.products.fetchedProducts
    }
}

export default connect(mapStateToProps, null)(Product)