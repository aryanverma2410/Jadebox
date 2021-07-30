import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import ProductListScreen from './screens/ProductListScreen'
import UserEditScreen from './screens/UserEditScreen'
import UserConfirmScreen from './screens/UserConfirmScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import PackagingEditScreen from './screens/PackagingEditScreen'
import OrderListScreen from './screens/OrderListScreen'
import PackagingListScreen from './screens/PackagingListScreen'
import ScrollToTop from './components/ScrollToTop'
import ResetPasswordMailScreen from './screens/ResetPasswordEmailScreen'
import ResetPasswordScreen from './screens/ResetPasswordScreen'
import WishlistScreen from './screens/WishlistScreen'
import LandingScreen from './screens/LandingScreen'
import CatalogueScreen from './screens/CatalogueScreen'
import ProductPageScreen from './screens/ProductPageScreen'
const App = () => {
	return (
		<Router>
			<ScrollToTop />
			<Header />
			<main className='py-3'>
				<>
					{' '}
					{/* <Route path='/home' component={HomeScreen} exact /> */}
					<Route path='/landing' component={LandingScreen} exact />
					<Route path='/order/:id' component={OrderScreen} />
					<Route path='/login' component={LoginScreen} />
					<Route path='/reset' component={ResetPasswordMailScreen} />
					<Route path='/shipping' component={ShippingScreen} />
					<Route path='/placeorder' component={PlaceOrderScreen} />
					<Route path='/payment' component={PaymentScreen} />
					<Route path='/register' component={RegisterScreen} />
					<Route path='/profile' component={ProfileScreen} />
					<Route path='/wishlist' component={WishlistScreen} />
					{/* <Route path='/product/:id' component={ProductScreen} /> */}
					<Route path='/product/:id' component={ProductPageScreen} />
					<Route path='/cart/:id?' component={CartScreen} />
					<Route path='/admin/userlist' component={UserListScreen} />
					<Route path='/admin/user/:id/edit' component={UserEditScreen} />
					<Route
						path='/api/user/confirmation/:token'
						component={UserConfirmScreen}
					/>
					<Route
						path='/api/user/reset/:token'
						component={ResetPasswordScreen}
					/>
					<Route
						path='/admin/productlist'
						component={ProductListScreen}
						exact
					/>
					<Route
						path='/admin/packaginglist'
						component={PackagingListScreen}
						exact
					/>
					<Route
						path='/admin/productlist/:pageNumber'
						component={ProductListScreen}
						exact
					/>
					<Route path='/admin/product/:id/edit' component={ProductEditScreen} />
					<Route
						path='/admin/packaging/:id/edit'
						component={PackagingEditScreen}
					/>
					<Route path='/admin/orderlist' component={OrderListScreen} />
					<Route path='/home' component={CatalogueScreen} />
					<Route path='/search/:keyword' component={CatalogueScreen} exact />
					<Route path='/page/:pageNumber' component={CatalogueScreen} exact />
					<Route
						path='/search/:keyword/page/:pageNumber'
						component={CatalogueScreen}
						exact
					/>
				</>
			</main>
			<Footer />
		</Router>
	)
}
export default App
