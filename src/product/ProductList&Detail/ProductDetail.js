import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarIcon from '@material-ui/icons/Star';


const ProductDetail = ({ match, history }) => {
<<<<<<< HEAD
    let itemId = match.params.itemId;
    
    
=======
    //history로 보낸 itemId를 match.params로 받음 
    let itemId = match.params.itemId;

    //개별상품의 정보를 itemId로 받아 ProductOne에 저장 
>>>>>>> 6f3b9320d4320ff03e8b28cfc103a48db8450b1c
    const [ProductOne, setProductOne] = useState([]);
    useEffect(() => {
        const res = async () => {
            const result = await axios.get("https://alconn.co/api/item/list/itemid=" + itemId);
            setProductOne(result.data.data)
<<<<<<< HEAD
            console.log(result)
        }
        res();
    }, [itemId])
    console.log(ProductOne)
    const [ProductList, setProductList] = useState([]);
    console.log(ProductList)
=======
        }
        res();
    }, [itemId])

    const [ProductList, setProductList] = useState([]);
>>>>>>> 6f3b9320d4320ff03e8b28cfc103a48db8450b1c
    useEffect(() => {
        const res = async () => {
            const result = await axios.get("https://alconn.co/api/item/list");
            setProductList(result.data.data)
        }
        res();
    }, [])
<<<<<<< HEAD

    const sendData = {
        userSID: 5,
        entity: 2,
        itemId,
    }

=======
>>>>>>> 6f3b9320d4320ff03e8b28cfc103a48db8450b1c
    const [Review, setReview] = useState([]);
    useEffect(() => {
        const res = async () => {
            const result = await axios.get("http://192.168.0.13:9001/question/list");
            setReview(result.data)
        }
        res();
    }, [])

    const [su, setSu] = useState(1);
    const upSu = () => {
        setSu(su + 1);
    }
    const downSu = () => {
        if (su > 1) {
            setSu(su - 1);
        }
    }
<<<<<<< HEAD
    const addOneCart = () => {
        const axiosAddOneCart = async () => {
            await axios.post("http://192.168.0.13:9001/cart/add", sendData);
        }
        axiosAddOneCart();
        alert("장바구니에 담았습니다.")
    }
=======
    // const addOneCart = () => {
    //     const axiosAddOneCart = async () => {
    //         await axios.post("https://alconn.co/api/cart/item",);
    //     }
    //     axiosAddOneCart();
    //     alert("장바구니에 담았습니다.")
    // }
>>>>>>> 6f3b9320d4320ff03e8b28cfc103a48db8450b1c

    return (
        <div className="total-wrap">
            <div className="totaldesc">
                <div className="header">
                    <div className="dsecImage" style={{ width: '410px', height: '410px' }}><img className="productImage"  alt={ProductOne.mainImg} src={ProductOne.itemDetailFormList&&ProductOne.itemDetailFormList[0].mainImg} /></div>
                    <div className="productdesc" >
                        <div className="productName" style={{ width: '479px', borderBottom: '1px sloid gray' }}><h2>{ProductOne.itemName}</h2>{ProductOne.description}</div>
                        <div className="productStar"><StarIcon className="smstar"></StarIcon></div>
                        <div className="productPrice"><div style={{ marginTop: '10px' }}><strong style={{ fontSize: '16pt', color: '#AE0000' }}>{ProductOne.itemDetailFormList&&ProductOne.itemDetailFormList[0].price}</strong>원</div></div>
                        <div className="productSizeColor">
                            <div className="productSize">
                                {ProductOne.itemDetailFormList&&ProductOne.itemDetailFormList[0].optionName} : &nbsp; <button onClick={() => history.push("/member/4/ProductAddTest")}>추가폼</button>
                                <select>
                                    {ProductOne.itemDetailFormList&&ProductOne.itemDetailFormList.map((row,idx) => {
                                        return(
                                            <option row={row} key={idx}>{ProductOne.itemDetailFormList[0].optionValue}</option>
                                        )
                                    })}
                                </select>
                            </div>
<<<<<<< HEAD
=======
                            <div>잔고수량 : {ProductOne.itemDetailFormList&&ProductOne.itemDetailFormList[0].stockQuantity}</div>
>>>>>>> 6f3b9320d4320ff03e8b28cfc103a48db8450b1c
                        </div>
                        <div className="productSeller">
                            <div className="seller">판매자 : {ProductOne.sellerSID}</div>
                            <div className="deliver">택배사 : 우체국MES</div>
                        </div>
                        <div className="cartPerchase" style={{ width: '500px' }}>
                            <div className="prod-buy-quantity" style={{ float: 'left' }}>
                                <div className="prod-quantity__form">
                                    <input type="text" value={su}
                                        className="prod-quantity__input" maxLength="6"
                                        autoComplete="off" readOnly style={{ float: 'left' }} />
                                    <div style={{ display: 'TableCell', verticalAlign: 'top', float: 'left', height: '40px', width: '20px' }}>
                                        <div style={{ float: 'left', width: '20px', height: '20px', borderBottom: '1px solid #ccc' }}><button className="prod-quantity__plus" type="button" onClick={upSu}><ExpandLessIcon style={{ maxWidth: '20px' }}></ExpandLessIcon></button></div>
                                        <div style={{ width: '20px', height: '20px' }}><button className="prod-quantity__minus" type="button" onClick={downSu}><ExpandMoreIcon style={{ maxWidth: '20px' }}></ExpandMoreIcon></button></div>
                                    </div>
                                </div>
                            </div>
<<<<<<< HEAD
                            <button className="cart" onClick={addOneCart}>장바구니 담기</button>
=======
                            <button className="cart" onClick={()=>{
                                const sendData = {
                                    itemDetailId: ProductOne.itemDetailFormList[0].itemDetailId,
                                    itemId,
                                    amount:su
                                }
                                const axiosAddOneCart = async () => {
                                    const token =localStorage.getItem("accessToken");
                                    await axios.post("https://alconn.co/api/cart/item",sendData,{
                                        headers:{
                                            Authorization:`Bearer ${token}`
                                        }
                                    });
                                }
                                axiosAddOneCart();
                                alert("장바구니에 담겼습니다.")
                                }}>장바구니 담기</button>
>>>>>>> 6f3b9320d4320ff03e8b28cfc103a48db8450b1c
                            <button className="perchase" onClick={
                                () => {
                                    const data = {
                                        name: ProductOne.itemName,
                                        price: ProductOne.itemDetailFormList&&ProductOne.itemDetailFormList[0].price,
                                        entity: su,
                                        imageName: ProductOne.image,
                                        userSID: 20,
                                        itemNo : itemId
                                    }
                                    history.push("/member/4/orderpage", data);
                                }
                            }>바로구매</button>
                        </div>
                    </div>
<<<<<<< HEAD
                </div>
                <div className="otherProduct">
                    <h2>다른상품</h2>
                    <ul className="otherProduct-ul">
                        {
                            ProductList && ProductList.map((row, idx) => {
                                return (
                                    <li row={row} key={idx}
                                        onClick={
                                            () => {
                                                history.push("/member/4/product/selectOne/" + row.itemId+"/ProductDescBottom");
                                            }
                                        }>
                                        <dl>
                                            <dt>
                                                <img alt={row.mainImg} src={row.mainImg} style={{ width: '230px', height: '230px' }} />
                                            </dt>
                                            <dd className="desc">
                                                <div>
                                                    <div className="namedesc">
                                                        <div className="name">{row.itemName}</div>
                                                    </div>
                                                    <div className="price-area">
                                                        <em className="sale">
                                                            <strong className="price-value">{row.price}</strong>원
                                                        </em>
                                                    </div>
                                                </div>
                                            </dd>
                                        </dl>
                                    </li>)
                            })
                        }
                    </ul>
                </div>
                <div className="productMenuBar" style={{ position: 'sticky' }}>
                    <ul className="productMenuBarUl">
                        <li className="ProductDescBottom" onClick={
                            () => {
                                history.push("/member/4/product/selectOne/" + itemId + "/ProductDescBottom");
                            }
                        }>상품상세</li>
                        <li className="ProductReviewBottom" onClick={
                            () => {
                                history.push("/member/4/product/selectOne/" + itemId + "/ProductReviewBottom");
                            }
                        }>상품리뷰({Review.length})</li>
                        <li className="ProductQuestionBottom" onClick={
                            () => {
                                history.push("/member/4/product/selectOne/" + itemId + "/ProductQuestionBottom");
                            }
                        }>상품문의</li>
                    </ul>
=======
>>>>>>> 6f3b9320d4320ff03e8b28cfc103a48db8450b1c
                </div>
                <div className="otherProduct">
                    <h2>다른상품</h2>
                    <ul className="otherProduct-ul">
                        {
                            ProductList && ProductList.map((row, idx) => {
                                return (
                                    <li row={row} key={idx}
                                        onClick={
                                            () => {
                                                history.push("/member/4/product/selectOne/" + row.itemId+"/ProductDescBottom");
                                            }
                                        }>
                                        <dl>
                                            <dt>
                                                <img alt={row.mainImg} src={row.mainImg} style={{ width: '230px', height: '230px' }} />
                                            </dt>
                                            <dd className="desc">
                                                <div>
                                                    <div className="namedesc">
                                                        <div className="name">{row.itemName}</div>
                                                    </div>
                                                    <div className="price-area">
                                                        <em className="sale">
                                                            <strong className="price-value">{row.price}</strong>원
                                                        </em>
                                                    </div>
                                                </div>
                                            </dd>
                                        </dl>
                                    </li>)
                            })
                        }
                    </ul>
                </div>
                <div className="productMenuBar" style={{ position: 'sticky' }}>
                    <ul className="productMenuBarUl">
                        <li className="ProductDescBottom" onClick={
                            () => {
                                history.push("/member/4/product/selectOne/" + itemId + "/ProductDescBottom");
                            }
                        }>상품상세</li>
                        <li className="ProductReviewBottom" onClick={
                            () => {
                                history.push("/member/4/product/selectOne/" + itemId + "/ProductReviewBottom");
                            }
                        }>상품리뷰({Review.length})</li>
                        <li className="ProductQuestionBottom" onClick={
                            () => {
                                history.push("/member/4/product/selectOne/" + itemId + "/ProductQuestionBottom");
                            }
                        }>상품문의</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;