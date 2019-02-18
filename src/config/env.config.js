// 判定现在的环境
const env = process.env.NODE_ENV === 'development' ? 'dev' : 'prod'
const newEnv = process.env.NODE_ENV === 'development' ? 'newDev' : 'newProd'
// development or production host
const hosts = {
  dev: 'https://shkapi4uat.shinho.net.cn',
  prod: 'https://kongapi.shinho.net.cn/ecs/cpk/Api/',
  test: '10.10.2.147:8080',
  newDev:'https://apimarket-test.shinho.net.cn/ecs-cpk/',
  newProd:'https://apimarket.shinho.net.cn/ecs-cpk/'
}

module.exports = {
  env,
  host: hosts[env],
  newHost:hosts[newEnv],
}
