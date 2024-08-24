import { HomePage, ProductPage, ProductsPage, ProfilePage, PaymentPage, TrackPage, SupportPage, BlogsPage, BlogPage, SignupPage, LoginPage } from "@src/features";
import { ThanksPage } from "@src/shared";
import { CartContainer, FavouritesContainer, LocationContainer, OrdersContainer } from "@src/features";
// import { ProfileRoutes } from "@src/pages/profile.page/routes";
import { Footer, Navigation, Sitemap, SupportButton } from "@src/layouts";
import { Routes, Route } from 'react-router-dom';
import { ErrorPage } from "@src/shared";

function Hub() {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="product" element={<ProductPage />} />
                <Route path="products" element={<ProductsPage />} />
                <Route path="profile" element={<ProfilePage />}>
                    <Route path="orders" element={<OrdersContainer />}/>
                    <Route path="favourites" element={<FavouritesContainer />} />
                    <Route path="cart" element={<CartContainer />} />
                    <Route path="location" element={<LocationContainer />} />
                </Route>
                <Route path="payment" element={<PaymentPage/>}/> 
                <Route path="track/order" element={<TrackPage/>}/>
                <Route path="*" element={<ErrorPage/>}/>
                <Route path="/thanks" element={<ThanksPage/>}/>
                <Route path="/support" element={<SupportPage/>}/>
                <Route path="/blogs" element={<BlogsPage/>}/>
                <Route path="/blogs/blog" element={<BlogPage/>}/>
                <Route path="/signup" element={<SignupPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
            <SupportButton/>
            <Sitemap />
            <Footer />
        </div>
    )
}

export default Hub;