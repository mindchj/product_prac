import axios from "axios";
<<<<<<< HEAD
import { useState } from "react";

const Test22 = () => {

    const [imgname, setImgname] = useState();

=======

const Test22 = () => {

>>>>>>> 6f3b9320d4320ff03e8b28cfc103a48db8450b1c
    const getCart = () => {
        const axiosGetCart = async () => {
            const token = localStorage.getItem("accessToken");
            console.log(token);
            const data = {
                headers: {
                    Authorization: `Bearer ${token}`
                  }
            }
            const result = await axios.get("https://alconn.co/api/cart",data);
            console.log("reslut:");
            console.log(result);
        }
        axiosGetCart();
    }

<<<<<<< HEAD
    const axiosTest = () => {
        axios.defaults.baseURL = "http://localhost:9001/cart/selectall";
        axios.defaults.headers.common['Authorization'] = 'bearer aaaa';

        const getCart = async () => {
            const result = await axios.get();
            console.log(result);
        }
        getCart();
    }

    const onchangeInput = (e) => {
        setImgname(e.target.files[0].name);
    }

    const printProduct = () => {
        console.log(Product.filename);
    }

    const Product = {
        "filename" : imgname,
=======
    const addCart = () => {
        const axiosAddCart = async () => {
            const token = localStorage.getItem("accessToken");
            console.log(token);
            const data = {
                "itemId" : 1002,
                "itemDetailId" : 1003,
                "amount" : 2
            }
            const result = await axios.post("https://alconn.co/api/cart/item",data)
            console.log(result);
        }
        axiosAddCart();
>>>>>>> 6f3b9320d4320ff03e8b28cfc103a48db8450b1c
    }

     return (
        <div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" value=""/>Option 1
            </div>
<<<<<<< HEAD
            <button onClick={getCart}>카트토큰 예제</button>
            <button onClick={axiosTest}>axios default 테스트</button>
            <input onChange={onchangeInput} type="file"/>
            <button onClick={printProduct}>Product 출력</button>
=======
            <button onClick={getCart}>장바구니 조회(로그인후 할 것)</button>
            <button onClick={addCart}>장바구니 추가(1002,1003,3)</button>
>>>>>>> 6f3b9320d4320ff03e8b28cfc103a48db8450b1c
            
        </div>
    )
}

export default Test22;