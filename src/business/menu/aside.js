// 菜单 侧边栏
export default [
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '表单组件示例',
    icon: 'folder-o',
    children: [
      { path: '/form/date', title: '日期时间' },
      { path: '/form/select', title: '选择组件' },
      { path: '/form/slot', title: '插槽式自定义组件' },
      { path: '/form/phone', title: '国际电话输入校验' }
    ]
  },
  {
    title: '酒店示例',
    icon: 'folder-o',
    children: [
      { path: '/hotel/dashboard', title: '工作台' },
      { path: '/hotel/room/list', title: '房间管理' },
      { path: '/hotel/room/checkin', title: '入住管理' },
      { path: '/hotel/room/type', title: '房间类型管理' },
      { path: '/hotel/test', title: '测试页面' }
    ]
  }
]
