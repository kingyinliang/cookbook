import wxRequest from '../utils/wxRequest'
import envConfig from '../config/env.config.js'


// 获得当前引用环境域名
const HOST = envConfig.host
const newHost = envConfig.newHost


module.exports = {
  wxRequest: wxRequest,
  HOST: HOST,
  newHost: newHost,
}
