const {lazy} = require('react');

module.exports = {
   Home: lazy(() => import('./home/home')),
   Blogs: lazy(() => import('./blogs/blogs')),
   Signin: lazy(() => import('./signin/signin')),
   Signup: lazy(() => import('./signup/signup')),
   Forget: lazy(() => import('./forget/forget')),
   Contact: lazy(() => import('./contact/contact')),
   Purchase: lazy(() => import('./purchase/purchase')),
   NotFound: lazy(() => import('./notFound/notFound')),
   Products: lazy(() => import('./products/products')),
   Dashboard: lazy(() => import('./dashboard/dashboard')),
   Portfolio: lazy(() => import('./portfolio/portfolio')),
};
