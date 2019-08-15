import { cache, history } from 'utils'

/**
 * 判断用户是否登陆
 * @returns {boolean}
 */
export function isLogin() {
  let data = sessionStorage.getItem(cache.LOGIN_DATA)
  if (!data) {
    data = sessionStorage.getItem(cache.LOGIN_DATA)
  }

  if (!data) {
    return false
  }
  //解析数据
  // 全局保存token
  ;(window as any).token = JSON.parse(data).token
  return (window as any).token != null
}

/**
 * 将信息脱敏
 * @param str 需要被脱敏的字符串
 * @param {number} beginNum 从第几位开始脱敏,后面也保留几位(默认第4位)
 * @param {number} n 脱敏几个字符
 * @returns {String} 脱敏之后的字符串
 */
export function desensitizeStr(str, beginNum = 4, n = 4) {
  // str不存在 或者 位数小于beginNum位,直接返回(不脱敏)
  if (!str || str.length < beginNum) {
    return str
  } else {
    let secretStr = ''
    for (let i = 0; i < n; i++) {
      secretStr = secretStr.concat('*')
    }
    return `${str.substring(0, beginNum)}${secretStr}${str.substring(
      str.length - beginNum,
      str.length
    )}`
  }
}

/**
 * 格式化小于10的数
 * @param num
 */
export function formateMonth(num: number) {
  if (num < 10) {
    return '0' + num
  } else {
    return num
  }
}

/**
 * 除法计算百分比,保留两位小数
 * @param a
 * @param b
 * @returns {string}
 */
export function devision(a, b) {
  // eslint-disable-next-line
  if (b == 0) {
    return 0
  } else {
    return ((parseInt(a) * 100) / parseInt(b)).toFixed(2) + '%'
  }
}

export function formateMoney(money) {
  if (money) {
    return '￥' + money.toFixed(2)
  } else {
    // eslint-disable-next-line
    return '￥' + '0.00'
  }
}

/**
 * 商品统计排序名称枚举
 * @param sortCol
 */
export function getSortCol(sortCol) {
  let sortName = ''
  switch (sortCol) {
    //下单笔数
    case '0':
      sortName = 'orderCount'
      break
    //下单金额
    case '1':
      sortName = 'orderAmt'
      break
    //下单件数
    case '2':
      sortName = 'orderNum'
      break
    //付款商品数
    case '3':
      sortName = 'payNum'
      break
    //退单笔数
    case '4':
      sortName = 'returnOrderCount'
      break
    //退单金额
    case '5':
      sortName = 'returnOrderAmt'
      break
    //退单件数
    case '6':
      sortName = 'returnOrderNum'
      break
    //转化率
    case '7':
      sortName = 'orderConversion'
      break
    default:
      sortName = 'orderNum'
      break
  }
  return sortName
}

/**
 * 商品统计排序类型枚举
 * @param sortType
 * @returns {string|string}
 */
export function getSortType(sortType) {
  // eslint-disable-next-line
  let sortOrder = sortType == 1 ? 'descend' : 'ascend'
  return sortOrder
}

/**
 * 渲染钱
 *  接受负数，负数分两种
 *  1。显示上的负数，比如平台佣金，相对于商家，显示负数
 *  2。真实运算中出现的负数
 *
 * @param value 钱数值
 * @param asMinus 是否显示为负数（比如平台佣金）
 * @param showPlus 正值是否加上+号，比如特价价格上调
 * @return {any}
 */
export function FORMAT_YUAN(value, asMinus = false, showPlus = false) {
  if (isNaN(value)) {
    return value
  } else {
    value = +value
    if (asMinus) {
      value = -value
    }
    if (value < 0) {
      return `-¥${Math.abs(value).toFixed(2)}`
    } else {
      // eslint-disable-next-line
      if (showPlus && value != 0) {
        return `+¥${value.toFixed(2)}`
      } else {
        return `¥${value.toFixed(2)}`
      }
    }
  }
}

// /**
//  * require获取图片的时候，如果本地图片不存在，直接报错，页面白屏，做一个try-catch
//  * @param srcPath
//  * @returns {null}
//  */
// export function requireLocalSrc(srcPath) {
//   let icon = null
//   try {
//     icon = require(`./images/${srcPath}`)
//   } catch (err) {
//     console.warn('本地图片加载失败 ----> ', err)
//   }
//   return icon
// }

/**
 * 清除缓存并跳转登录页
 */
export function logout() {
  const accountName = JSON.parse(sessionStorage.getItem(cache.LOGIN_DATA))
    .accountName
  localStorage.removeItem(cache.LOGIN_DATA)
  sessionStorage.removeItem(cache.LOGIN_DATA)
  sessionStorage.removeItem(cache.SYSTEM_BASE_CONFIG)
  sessionStorage.removeItem(cache.LOGIN_MENUS)
  sessionStorage.removeItem(cache.LOGIN_FUNCTIONS)
  sessionStorage.removeItem(cache.FIRST_ACTIVE)
  sessionStorage.removeItem(cache.SECOND_ACTIVE)
  sessionStorage.removeItem(cache.THIRD_ACTIVE)
  localStorage.removeItem(cache.DATA_BOARD.concat(accountName))
  history.push('/login')
}
