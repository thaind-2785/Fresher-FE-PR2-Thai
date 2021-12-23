import Header from './component/header'
import Footer from './component/footer'
import Home from './component/home'
import Products from './component/products'
import ProductsDetail from './component/product-detail'
import Login from './component/Login'
import Register from './component/Register'
import Account from './component/account'
import Cart from './component/cart'
import PayPage from './component/pay-page'
import ConfirmPage from './component/confirm-page'
import NotFound from './component/NotFound'
import { Routes, Route } from "react-router-dom";
import './style/_global.scss'

function App() {
    return (
        <>
            <Header></Header>
            <div className='main'>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="products" element={<Products />}/>
                    <Route path="products/:id" element={<ProductsDetail />}/>
                    <Route path="login" element={<Login />}/>
                    <Route path="register" element={<Register />}/>
                    <Route path="account" element={<Account />}/>
                    <Route path="cart" element={<Cart />}/>
                    <Route path="pay-page" element={<PayPage />}/>
                    <Route path="confirm-page" element={<ConfirmPage />}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </div>
            <Footer></Footer>
        </>
    )
}

export default App;
