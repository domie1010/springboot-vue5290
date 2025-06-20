import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import exampaper from '@/views/modules/exampaper/list'
    import exampapertopic from '@/views/modules/exampapertopic/list'
    import examquestion from '@/views/modules/examquestion/list'
    import examrecord from '@/views/modules/examrecord/list'
    import examredetails from '@/views/modules/examredetails/list'
    import examrewrongquestion from '@/views/modules/examrewrongquestion/list'
    import gonggao from '@/views/modules/gonggao/list'
    import jiaolian from '@/views/modules/jiaolian/list'
    import jiaolianYuyue from '@/views/modules/jiaolianYuyue/list'
    import liuyan from '@/views/modules/liuyan/list'
    import yonghu from '@/views/modules/yonghu/list'
    import ziliao from '@/views/modules/ziliao/list'
    import ziliaoCollection from '@/views/modules/ziliaoCollection/list'
    import ziliaoLiuyan from '@/views/modules/ziliaoLiuyan/list'
    import config from '@/views/modules/config/list'
    import dictionaryExampaper from '@/views/modules/dictionaryExampaper/list'
    import dictionaryExamquestion from '@/views/modules/dictionaryExamquestion/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionaryJiaolianYuyueYesno from '@/views/modules/dictionaryJiaolianYuyueYesno/list'
    import dictionaryKemu from '@/views/modules/dictionaryKemu/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryZiliao from '@/views/modules/dictionaryZiliao/list'
    import dictionaryZiliaoCollection from '@/views/modules/dictionaryZiliaoCollection/list'
    import dictionaryZujuan from '@/views/modules/dictionaryZujuan/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryExampaper',
        name: '试卷状态',
        component: dictionaryExampaper
    }
    ,{
        path: '/dictionaryExamquestion',
        name: '试题类型',
        component: dictionaryExamquestion
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionaryJiaolianYuyueYesno',
        name: '报名状态',
        component: dictionaryJiaolianYuyueYesno
    }
    ,{
        path: '/dictionaryKemu',
        name: '科目',
        component: dictionaryKemu
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryZiliao',
        name: '学习资料类型',
        component: dictionaryZiliao
    }
    ,{
        path: '/dictionaryZiliaoCollection',
        name: '收藏表类型',
        component: dictionaryZiliaoCollection
    }
    ,{
        path: '/dictionaryZujuan',
        name: '组卷方式',
        component: dictionaryZujuan
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/exampaper',
        name: '试卷',
        component: exampaper
      }
    ,{
        path: '/exampapertopic',
        name: '试卷选题',
        component: exampapertopic
      }
    ,{
        path: '/examquestion',
        name: '试题表',
        component: examquestion
      }
    ,{
        path: '/examrecord',
        name: '考试记录表',
        component: examrecord
      }
    ,{
        path: '/examredetails',
        name: '答题详情表',
        component: examredetails
      }
    ,{
        path: '/examrewrongquestion',
        name: '错题表',
        component: examrewrongquestion
      }
    ,{
        path: '/gonggao',
        name: '公告信息',
        component: gonggao
      }
    ,{
        path: '/jiaolian',
        name: '教练',
        component: jiaolian
      }
    ,{
        path: '/jiaolianYuyue',
        name: '教练预约',
        component: jiaolianYuyue
      }
    ,{
        path: '/liuyan',
        name: '留言板',
        component: liuyan
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/ziliao',
        name: '学习资料',
        component: ziliao
      }
    ,{
        path: '/ziliaoCollection',
        name: '学习资料收藏',
        component: ziliaoCollection
      }
    ,{
        path: '/ziliaoLiuyan',
        name: '学习资料留言',
        component: ziliaoLiuyan
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
