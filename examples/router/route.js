import config from './nav.json'

const RegisterRoute = (config) => {
  let route = [];
  config.list.map(item =>
    route.push({
      path: item.path,
      component: require(`../components${item.path}.vue`).default,
      name: item.name
    })
  )
  return { route, navs: config }
}

const route = RegisterRoute(config)
route.route.push({
  path: '/',
  redirect: '/button'
})

export default route.route