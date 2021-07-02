import React from 'react';
import { withRouter } from 'react-router-dom';
import './Product.css';

const ProductListRowItem = (props) => {
<<<<<<< HEAD
    console.log(props.row)
=======
>>>>>>> 6f3b9320d4320ff03e8b28cfc103a48db8450b1c
    let itemId = props.row.itemId

    return (
        <li
            onClick={
                () => {
                    props.history.push("/member/4/product/selectOne/" + itemId);
                }
            }>
            <dl>
                <dt>
                    <img alt={props.row.mainImg} src={props.row.mainImg} style={{ width: '230px', height: '230px' }} />
                </dt>
                <dd className="desc">
                    <div>
                        <div className="namedesc">
                            <div className="name">{props.row.itemName}</div>
                        </div>
                        <div className="price-area">
                            <em className="sale">
                                <strong className="price-value">{props.row.price}</strong>원
                            </em>
                        </div>
                    </div>
                </dd>
            </dl>
        </li>

    )
}

export default withRouter(ProductListRowItem);
