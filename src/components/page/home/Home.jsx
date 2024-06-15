import React, { useState } from 'react'
import Modal from '../../model/Modal'
import Products from '../../products/Products'
import Promo from '../../promo/Promo'
import News from '../../news/News'

const Home = () => {
    const [isLogin, setIsLogin] = useState(false)
  return (
    <div>
        <Promo/>
        <Products/>
        <News/>
        {/* <button onClick={()=>setIsLogin(true)}>Login</button> */}
        {/* {isLogin ?
       <Modal close={setIsLogin}>
        <div>
            <h2>login</h2>
            <input type="text" />
            
            <button>Submit</button>
        </div>
       </Modal>
        :
        <></>
    } */}
    </div>
  )
}

export default Home