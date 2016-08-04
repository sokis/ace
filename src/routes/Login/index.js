// Sync route definition
export default {
  name: 'login',
  title: 'Login',
  auth: false,
  component: resolve => require(['./components/LoginView'], resolve)
};


