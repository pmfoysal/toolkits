const {lazy} = require('react');

module.exports = {
   AddReview: lazy(() => import('./addReview/addReview')),
   AddProduct: lazy(() => import('./addProduct/addProduct')),
   EditReview: lazy(() => import('./editReview/editReview')),
   EditProduct: lazy(() => import('./editProduct/editProduct')),
   UserProfile: lazy(() => import('./userProfile/userProfile')),
   ManageAdmins: lazy(() => import('./manageAdmins/manageAdmins')),
   ManageOrders: lazy(() => import('./manageOrders/manageOrders')),
   ManageReviews: lazy(() => import('./manageReviews/manageReviews')),
   ManageProducts: lazy(() => import('./manageProducts/manageProducts')),
};
