import Vue from 'vue'
import Router from "vue-router";
import Address from './pages/address';
import Loginpage from './pages/login-page';
import Cart from './pages/cart'
import Registerpage from './pages/register-page'
import NconfsysPage from './pages/nconfsys-page'
import PersonalCenter from './pages/personal-center'
import ConfManageCenter from './pages/conf-manage-center'
import SecretePage from './pages/secretary-page'
import PaperManageCenter from "./pages/paper-manage-center"
import ConfDetailPage from "./pages/conf-detail-page"
import PaperViewCenter from "./pages/paper-view-center"
import TestPage from './pages/testpage'
import CreteConfPage from './pages/createConf-page'
import CompleteConfInfoPage from './pages/completedConfInfo-page'
import FinancerPage from './pages/financer-page'
import findpassword from "./pages/findpassword";
import AdminPage from "./pages/admin-page";
//使路由生效
Vue.use(Router);
const router= new Router({
  routes:[
    {
      path:'/address',
      name: 'address',
      meta:{},
      component: Address
    },
    {
      path:'/cart',
      name: 'cart',
      meta:{},
      component: Cart
    },
    {
      path:'/user-login',
      name:'login-page',
      component:Loginpage,
    },
    {
      path:'/user-register',
      name:'register-page',
      component:Registerpage,
    },
    {
      path:'/',
      name:'nconfsys-page',
      component:NconfsysPage,
    },
    {
      path:'/home',
      name:'nconfsys-page',
      component:NconfsysPage,
    },
    {
      path:'/personal-center',
      name:'personal-center',
      component:PersonalCenter,
    },
    {
      path:'/conf-manage-center',
      name:'conf-manage-center',
      component:ConfManageCenter
    },
    {
      path:'/secretepage',
      name:'secretary-page',
      component:SecretePage
    },
    {
      path:'/paper-manage-center',
      name:'paper-manage-center',
      component:PaperManageCenter
    },
    {
      path:'/conf-detail-page',
      name:'conf-detail-page',
      component:ConfDetailPage
    },
    {
      path:'/paper-view-center',
      name:'paper-view-center',
      component:PaperViewCenter
    },
    {
      path:'/testpage',
      name:'testpage',
      component:TestPage
    },
    {
      path:'/createconf',
      name:'创建会议',
      component:CreteConfPage
    },
    {
      path:'/complete-conf-page',
      name:'完善会议信息',
      component:CompleteConfInfoPage
    },
    {
      path:'/financer-page',
      name:'财务管理',
      component:FinancerPage
    },
    {
      path:'/paper-upload',
      name:'提交论文',
      component:FinancerPage
    },
    {
      path:'/findpassword',
      name:'找回密码',
      component:findpassword
    },
    {
      path:'/admin',
      name:'管理员',
      component:AdminPage
    },
  ]
});
//挂在路由导航
router.beforeEach((to,from,next)=>{
  if (to.path==='/user-login' || to.path==='/'|| to.path==='/user-register'||to.path==='/conf-detail-page'){
    return next();//放行
  }
  const token=window.sessionStorage.getItem('token');
 /* if (!token){
    return next('/user-login');
  }*/
  next();
});
//暴露出去
export default router;
