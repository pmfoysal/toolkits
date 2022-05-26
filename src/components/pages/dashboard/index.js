const {lazy} = require('react');

module.exports = {
   AddReview: lazy(() => import('./addReview/addReview')),
   AddProduct: lazy(() => import('./addProduct/addProduct')),
   EditReview: lazy(() => import('./editReview/editReview')),
   EditProduct: lazy(() => import('./editProduct/editProduct')),
   UserProfile: lazy(() => import('./userProfile/userProfile')),
   ManageUsers: lazy(() => import('./manageUsers/manageUsers')),
   ManageOrders: lazy(() => import('./manageOrders/manageOrders')),
   OrderPayment: lazy(() => import('./orderPayment/orderPayment')),
   ManageReviews: lazy(() => import('./manageReviews/manageReviews')),
   ManageProducts: lazy(() => import('./manageProducts/manageProducts')),
};
