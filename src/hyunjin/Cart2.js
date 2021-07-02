import { useEffect, useState } from 'react';
import axios from 'axios';
<<<<<<< HEAD
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import {Table} from 'reactstrap';

const cartData1 = {
    "cartId" : 542,
    "clientId" : 4,
    "totalAmount" : 9,
    "totalPrice" : 165940,
    "cartItems" : [ {
      "itemDetailId" : 1,
      "itemId" : 5,
      "itemName" : "망고",
      "price" : 4500,
      "amount" : 2,
      "optionName" : "중량",
      "optionValue" : "1KG",
      "unitTotal" : 9000
    }, {
      "itemDetailId" : 3,
      "itemId" : 23,
      "itemName" : "키위",
      "price" : 56000,
      "amount" : 2,
      "optionName" : "중량",
      "optionValue" : "99KG",
      "unitTotal" : 112000
    }, {
      "itemDetailId" : 2,
      "itemId" : 32,
      "itemName" : "바나나",
      "price" : 8988,
      "amount" : 5,
      "optionName" : "중량",
      "optionValue" : "6KG",
      "unitTotal" : 44940
    } ]
  }

const Cart = () => {
    const server = "https://alconn.co";
    const [total, setTotal] = useState();
    const [refresh, setRefresh] = useState(0);
    const [cart, setCart] = useState(
        [ {
            "itemDetailId" : 1,
            "itemId" : 5,
            "itemName" : "망고",
            "price" : 4500,
            "amount" : 2,
            "optionName" : "중량",
            "optionValue" : "1KG",
            "unitTotal" : 9000
          }, {
            "itemDetailId" : 3,
            "itemId" : 23,
            "itemName" : "키위",
            "price" : 56000,
            "amount" : 2,
            "optionName" : "중량",
            "optionValue" : "99KG",
            "unitTotal" : 112000
          }, {
            "itemDetailId" : 2,
            "itemId" : 32,
            "itemName" : "바나나",
            "price" : 8988,
            "amount" : 5,
            "optionName" : "중량",
            "optionValue" : "6KG",
            "unitTotal" : 44940
          } ]
    );
=======
import { Button } from 'reactstrap';
import { Table } from 'reactstrap';
import './Cart2.css';


const Cart2 = () => {
    const server = "http://192.168.0.13:9001";
    const userSID = 3;
    const [cart, setCart] = useState();
    const [total, setTotal] = useState(0);
    const [refresh, setRefresh] = useState(0);
    const [idx, setIdx] = useState();
    const [allchk, setAllchk] = useState();
    



    const getCart2 = () => {
        const axiosGetCart = async () => {
            const result = await axios.get("https://alconn.co/api/cart");
            console.log(result);
        }
        axiosGetCart();
    }

    const addCart2 = () => {
        const axiosAddCart = async () => {
            const data = {
                "itemId" : 1002,
                "itemDetailId" : 1003,
                "amount" : 2
            }
            const result = await axios.post("https://alconn.co/api/cart/item",data)
            console.log(result);
        }
        axiosAddCart();
    }


    // amount: 5
    // cartId: 1043
    // itemDetailId: 1003
    // itemId: 1002
    // itemName: "과자"
    // mainImg: ""
    // optionName: "맛"
    // optionValue: "매운맛"
    // price: 600
    // unitTotal: 0









    //userSID의 카트리스트 받아와서 cart 에 저장
    const axiosCartList = async () => {
        const {data} = await axios.get("https://alconn.co/api/cart");
        console.log("cartList 결과:");
        console.log(data);
        setCart(data.data.cartItems);
    }

    //refresh 될 때마다 카트리스트 리렌더링
    useEffect( ()=>{
        axiosCartList();
    },[refresh])

    // cart 내역 바뀔때마다 항목 갯수 업데이트
    useEffect( () => {
        cart && setIdx(cart.length);
        getTotal();
    },[cart])

    useEffect( () => {
        console.log("idx변화 캐치");
        getTotal();
    },[idx])
>>>>>>> 6f3b9320d4320ff03e8b28cfc103a48db8450b1c

    //카트 항목 1개 증가
    const addCart = (item) => {
        const axiosAddCart = async () => {
<<<<<<< HEAD
            const token = localStorage.getItem("accessToken");
            const cartData = {
                itemId : item.itemId,
                itemDetailId : item.itemDetailId,
                amount : item.amount,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const result = await axios.post(server+"/api/cart/item",cartData);
=======
            const data = {
                itemId : item.itemId,
                itemDetailId : item.itemDetailId,
                amount : item.amount+1,
            }
            const result = await axios.post("https://alconn.co/api/cart/item/amount",data);
            console.log("addCart 결과:");
            console.log(result);
>>>>>>> 6f3b9320d4320ff03e8b28cfc103a48db8450b1c
            setRefresh(prev => prev+1);  
        }
        axiosAddCart();
    }
    //카트 항목 1개 감소
    const removeOneCart = (item) => {
        const axiosRemoveOneCart = async () => {
<<<<<<< HEAD
            //const result = await axios.post("/cart/removeone",cartData);
=======
            const data = {
                itemId : item.itemId,
                itemDetailId : item.itemDetailId,
                amount : item.amount-1,
            }
            const result = await axios.post("https://alconn.co/api/cart/item/amount",data);
            console.log("removeOneCart 결과:");
            console.log(result);
>>>>>>> 6f3b9320d4320ff03e8b28cfc103a48db8450b1c
            setRefresh(prev => prev+1);
        }
        axiosRemoveOneCart();
    }
    //카트 라인 제거
    const removeLineCart = (item) => {
        const axiosRemoveLineCart = async () => {
<<<<<<< HEAD
            const cartData = {
                userSID : item.userSID,
                productSID : item.productSID,
            }
            const result = await axios.post("/cart/removeline",cartData);
=======
            const result = await axios.delete("https://alconn.co/api/cart/item/"+item.itemDetailId);
>>>>>>> 6f3b9320d4320ff03e8b28cfc103a48db8450b1c
            console.log("removeLineCart 결과:");
            console.log(result);
            setRefresh(prev => prev+1);
        }
        axiosRemoveLineCart();
    }
    //카트 전부 비우기
<<<<<<< HEAD
    const removeUserCart = (userSID) => {
        const axiosRemoveUserCart = async () => {
            const result = await axios.delete("/cart/removeuser/"+userSID);
=======
    const removeUserCart = () => {
        const axiosRemoveUserCart = async () => {
            const result = await axios.delete("https://alconn.co/api/cart");
>>>>>>> 6f3b9320d4320ff03e8b28cfc103a48db8450b1c
            console.log("removeUserCart 결과:");
            console.log(result);
            setRefresh(prev => prev+1);
        }
        axiosRemoveUserCart();
    }
    //카트 담긴 내역을 주문서로 이동
    const cartToOrder = (userSID) => {
        //여기서 구매창으로 페이지 이동시킴. 밑의 axios는 원래 구매창에서 실행할 함수
        const axiosCartToOrder = async () => {
<<<<<<< HEAD
            const result = await axios.get("/order/insertcart/"+userSID);
=======
            const result = await axios.get(server+"/order/insertcart/"+userSID);
>>>>>>> 6f3b9320d4320ff03e8b28cfc103a48db8450b1c
            console.log("cartToOrder 결과:");
            console.log(result);
            //구매창으로 이동 후 결제 되었다 가정, 장바구니 비우고 주문서 추가
            setRefresh(prev => prev+1);
        }
        axiosCartToOrder();
    }

<<<<<<< HEAD
    const btnStyle = {
        float : 'right',
    }

    return(
        <div style={{width:'800px',margin:'0 auto', padding:'20px', border:'2px solid gray'}}>
            <h2><b>장바구니</b></h2><br/>
            <Table  hover>
                <thead>
                    <tr>
                        <td>사진</td>
                        <td>상품</td>
                        <td>수량</td>
                        <td>가격</td>
                        <td><Button style={btnStyle} startIcon={<DeleteOutlineIcon/>} onClick={()=>removeUserCart(cart[0].userSID)} variant="outlined">전부 비우기</Button></td>
=======
    // 체크박스 전체 클릭시 처리
    const onChangeCheckAll = (e) => {
        setAllchk(e.target.checked);
        for(let i=0; i<idx; i++)
        {
            document.getElementById(i).checked = e.target.checked;
        }
        getTotal();
    }

    // 체크박스 1 항목 클릭시 처리
    const onChangeCheckOne = (e) => {
        let check = true;
        // 체크박스중 하나라도 false면 전부 false 처리
        for(let i=0;i<idx;i++)
        {
            if(document.getElementById(i).checked === false)
                check = false;
        }
        setAllchk(check);
        getTotal();
    }

    // 주문 총액 계산하여 출력 업데이트
    const getTotal = () => {
        let total = 0;
        cart && cart.map( (row,idxorder) => {
            const item = document.getElementById(idxorder);
            if(item.checked === true)
                total += row.price*row.amount;
            return null;
        })
        setTotal(total);
    }

    const numberFormat = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    return(
        <div style={{width:'1000px',margin:'0 auto', padding:'20px'}}>
            <h2><b><i class='fas fa-shopping-cart'></i> 장바구니</b></h2><br/>
            <Table  hover>
                <thead>
                    <tr>
                        <td>
                            <div className="form-check">
                                <input onChange={onChangeCheckAll} type="checkbox" className="form-check-input" checked={allchk}/>
                            </div>
                        </td>
                        <td style={{width:'100px'}}><h4><b>사진</b></h4></td>
                        <td style={{width:'300px'}}><h4><b>상품</b></h4></td>
                        <td style={{width:'100px'}}><h4><b>가격</b></h4></td>
                        <td style={{width:'100px'}}><h4><b>수량</b></h4></td>
                        <td style={{width:'100px'}}><h4><b>합계</b></h4></td>
                        <td style={{width:'290px'}}><Button style={{float:'right'}} color="primary" onClick={()=>removeUserCart(cart[0].userSID)}>전체 비우기　<i className='fas fa-trash'/></Button></td>
>>>>>>> 6f3b9320d4320ff03e8b28cfc103a48db8450b1c
                    </tr>
                </thead>
                <tbody>
                {
                    cart && cart.map( (item, idx)=>
<<<<<<< HEAD
                        <tr key={idx}>
                            <td>{item.image}</td>
                            <td>{item.productName}</td>
                            <td>{item.entity}</td>
                            <td>{item.price*item.entity}</td>
                            <td>
                                <Button style={btnStyle} startIcon={<DeleteIcon/>} onClick={()=>removeLineCart(item)} variant="outlined"></Button>&nbsp;&nbsp;&nbsp;
                                <Button style={btnStyle} startIcon={<RemoveIcon/>} onClick={()=>removeOneCart(item)} variant="outlined"></Button>&nbsp;&nbsp;&nbsp;
                                <Button style={btnStyle} startIcon={<AddIcon/>} onClick={()=>addCart(item)} variant="outlined"></Button>&nbsp;&nbsp;&nbsp;
                            </td>
                        </tr>
=======
                        {
                            return(
                                <tr key={idx} className="body-td">
                                    <td>
                                        <div className="form-check">
                                            <input id={idx} onChange={onChangeCheckOne} type="checkbox" className="form-check-input" value=""/>
                                        </div>
                                    </td>
                                    <td><img alt="사진x" style={{width:'100px',height:'100px'}} src={item.mainImg}/></td>
                                    <td>{item.itemName}</td>
                                    <td>{numberFormat(item.price)}</td>
                                    <td>{item.amount}</td>
                                    <td> {numberFormat(item.price*item.amount)}</td>
                                    <td>
                                        <Button style={{float:'right'}} color="primary" onClick={()=>removeLineCart(item)}><i className='fas fa-trash-alt'/></Button>&nbsp;&nbsp;&nbsp;
                                        <Button style={{float:'right',marginRight:'30px'}} color="primary" onClick={()=>removeOneCart(item)}><i className='fas fa-minus'/></Button>&nbsp;&nbsp;&nbsp;
                                        <Button style={{float:'right',marginRight:'10px'}} color="primary" onClick={()=>addCart(item)}><i className='fas fa-plus'/></Button>&nbsp;&nbsp;&nbsp;
                                    </td>
                                </tr>
                            )
                        }
>>>>>>> 6f3b9320d4320ff03e8b28cfc103a48db8450b1c
                    )
                }
                </tbody>
            </Table>
            <hr/>
<<<<<<< HEAD
            <h2 style={{display:'inline'}}>총 주문액 : {total}</h2>
            {cart && cart[0] && <Button style={{alignItems:'center',float:'right'}} onClick={()=>cartToOrder(cart[0].userSID)} variant="outlined">주문하기!</Button>}
=======
            {cart && cart[0] && <Button style={{alignItems:'center',float:'right'}} size="lg" color="primary" onClick={()=>cartToOrder(cart[0].userSID)}>주문하기</Button>}
            <h2 style={{display:'inline',float:'right',marginRight:'30px'}}>
                총 주문액&nbsp;

                {numberFormat(total)} 원
            </h2>
>>>>>>> 6f3b9320d4320ff03e8b28cfc103a48db8450b1c
            
        </div>
    )
}

<<<<<<< HEAD
export default Cart;
=======
export default Cart2;
>>>>>>> 6f3b9320d4320ff03e8b28cfc103a48db8450b1c
