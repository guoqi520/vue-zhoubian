import vue from "vue"
import Router from "vue-router"


vue.use(Router)




let HomeTop = () => import("@/pages/home/home-top.vue")  //首页
let Add = () => import("@/pages/home/add.vue")//详情页
let Serve = () => import("@/pages/home/serve.vue")//搜索页
let Cate = () => import("@/pages/home/cate.vue")//分类页
let Submit = () => import("@/pages/home/submit.vue")//提交
let Payment = () => import("@/pages/home/payment.vue")//订单页
let PaymentOk = () => import("@/pages/home/paymentOk.vue")//支付成功页

let Main = () => import("@/pages/home/Main.vue")//日历组件
let Biaodan = () => import("@/pages/home/biaodan.vue")//表单组件

let Login = () => import("@/pages/my/login.vue")//登录
let MyTop = () => import("@/pages/my/my-top.vue")//我的页面
const router = new Router({
    mode: "history",
    routes: [
        { name: "home-top", path: "/home-top", component: HomeTop },
        { name: "my-top", path: "/my-top", component: MyTop },
        { name: "add", path: "/add", component: Add },
        { name: "serve", path: "/serve", component: Serve },
        { name: "cate", path: "/cate", component: Cate },
        { name: "submit", path: "/submit", component: Submit },
        //路由独享守卫，抵挡没有登录就进入支付页面
        {
            name: "payment", path: "/payment", component: Payment,
            beforeEnter: (to, from, next) => {
                if (to.path === "/login") return next()
                const token = window.sessionStorage.getItem("token")
                if (!token) return next("/login")
                next()
            }
        },

        { name: "paymentok", path: "/paymentok", component: PaymentOk },
        { name: "login", path: "/login", component: Login },
        { name: "Main", path: "/Main", component: Main },
        { name: "biaodan", path: "/biaodan", component: Biaodan },
        { path: "/", redirect: "/home-top" }
    ]
})


export default router