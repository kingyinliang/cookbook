import { 
    wxRequest, 
    HOST,
    newHost,
} from './index.js'

//获取轮播图片
export const getRotationPic = (params) => wxRequest.post('https://kongapi.shinho.net.cn' + '/ecs/ec/api/Banner/GetBanner', params)

//菜品库首页 获取各个板块最新几笔菜品信息
export const getNewDishes = (params) => wxRequest.get(newHost + 'weixin/index', params)

//获取当月人气
export const getPopularityOfTheMonth = (params) => wxRequest.get(newHost + 'weixin/getDyrq', params)

//首页顶部或者每个版块顶部通过关键字查找菜品名称搜索
export const getCaiPinNameListByParms = (params) => wxRequest.post(newHost + 'weixin/getCaiPinNameListByParms', params,false)

//根据不同参数获取菜品列表(通过板块名称、菜品名称、二级分类ID等)
export const getCaiPinListByParms = (params) => wxRequest.post(newHost + 'weixin/getCaiPinListByParms', params)

//获取所有分类
export const getAllCategory = (params) => wxRequest.get(newHost + 'weixin/getAllCategory', params)

//根据菜品id获取基本信息
export const getCaiPinBasicInfoById = (params) => wxRequest.get(newHost + 'weixin/getCaiPinBasicInfoById', params)

//根据菜品id获取富文本信息
export const getCaiPinRichInfoById = (params) => wxRequest.get(newHost + 'weixin/getCaiPinRichInfoById', params)

//根据菜品id获取调料 步骤信息
export const getCaiPinMaterialById = (params) => wxRequest.get(newHost + 'weixin/getCaiPinMaterialById', params)

//获取opeid
export const getOpenId = (params) => wxRequest.get(newHost + 'weixin/getUserId', params)

//根据调料(产品)id获取不同规格的产品列表
export const getProductListById = (params) =>  wxRequest.get(newHost + 'weixin/getGuiGeListByProductId', params)

//星厨星菜模块获取菜品列表
export const getXcxcCaiPinList = (params) =>  wxRequest.post(newHost + 'weixin/getXcxcCaiPinList', params)

//增加例如浏览、收藏、点赞、播放记录
export const addActionRecord =  (params) =>  wxRequest.post(newHost + 'weixin/addActionRecord', params)

//微信解密敏感数据
export const decryptData = (params) => wxRequest.get(newHost + 'weixin/decryptData', params)

//获取板块或者菜品留言
export const getMessage = (params) => wxRequest.post(newHost + 'weixin/getLiuYanInfo', params)

//增加留言信息(菜品、板块)
export const addLiuYanInfo =  (params) =>  wxRequest.post(newHost + 'weixin/addLiuYanInfo', params)