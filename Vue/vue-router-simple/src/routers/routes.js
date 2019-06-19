const routes = [
  {
    path: '/',
    component: () => import('@/components/RouterOne')
  },
  {
    path: '/hello',
    component: () => import('@/components/HelloWorld')
  }
]

export default routes
