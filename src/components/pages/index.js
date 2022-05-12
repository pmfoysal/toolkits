const {lazy} = require('react');

module.exports = {
   Home: lazy(() => import('./home/home')),
};
