const Mock = require('mockjs')
const Random = Mock.Random

const newsData = function () {
  return {
    code: 0,
    msg: '操作成功'
    // data: articles,
  }
}

const mainData = function () {
  const articles = [{ a: '手机/运营商/数码' }, { a: '男装/女装/童装/内衣' }, { a: '男鞋/运动/户外' }, { a: '房产/汽车/汽车用品' },
    { a: '图书/文娱/教育/电子书' }, { a: '理财/众筹/白条/保险' }, { a: '安装/维修/清洗/二手' }, { a: '机票/旅店/旅游/生活' }, { a: '食品/酒类/生鲜/特产' }]

  return {
    code: 0,
    msg: '操作成功',
    data: articles
  }
}

const objectsort = function () {
  const articles = [{ kuaidiname: '高伟', kuaidiphone: '12345678910', kuaidiaddresss: '江苏苏州常熟' }]

  return {
    code: 0,
    msg: '操作成功',
    data: articles
  }
}

const mainsData = function () {
  const articles = [{ a: '小米' }, { a: '荣耀' }, { a: '华为' }, { a: '锤子' }, { a: '苹果' }, { a: 'vivo' }, { a: 'oppo' }]

  return {
    code: 0,
    msg: '操作成功',
    data: articles
  }
}

const sortsData = function () {
  const articles = [{ a: '玫瑰金' }, { a: '红色' }, { a: '蓝泽' }, { a: '玫瑰红' }]

  return {
    code: 0,
    msg: '操作成功',
    data: articles
  }
}

const detailData = function () {
  const articles = {
    first: '手机、数码、通讯',
    second: '手机',
    third: '安卓系统',
    fourth: '华为 mate40 pro',
    name: '华为 mate40 pro 秋日胡杨 8+256G全网通（碎屏险套餐）',
    pro_num: 1,
    place: '苏州仓库',
    price: '8199',
    pingjia: '9900+',
    url: 'https://img14.360buyimg.com/n0/jfs/t1/149516/31/11858/143096/5f91a2f8E3f7fe4f6/fd8dfa7f7f1ba8ea.jpg'
  }

  return {
    code: 0,
    msg: '操作成功',
    data: articles
  }
}

const asData = function () {
  const articles = [{ a: '小米' }, { a: '荣耀' }, { a: '华为' }, { a: 'MAC' }, { a: '联想' }, { a: 'vivo' }, { a: 'oppo' }]

  return {
    code: 0,
    msg: '操作成功',
    data: articles
  }
}
const Data = function () {
  return {
    code: 0,
    msg: '操作成功'
  }
}

Mock.setup({
  timeout: 500
})

// ``请严格注意get请求的地址``
Mock.mock('/api/user/loginuser', 'post', newsData) // post请求
Mock.mock(RegExp('/api/user/loginuser' + '.*'), 'get', newsData) // get请求
Mock.mock('/api/user/user', 'post', Data) // post请求
Mock.mock(RegExp('/api/user/user' + '.*'), 'get', Data) // get请求
Mock.mock('/api/user/main', 'post', mainData) // post请求
Mock.mock(RegExp('/api/user/main' + '.*'), 'get', mainData)
Mock.mock('/api/user/sort', 'post', mainsData) // post请求
Mock.mock(RegExp('/api/user/sort' + '.*'), 'get', mainData)
Mock.mock('/api/user/sorts', 'post', asData) // post请求
Mock.mock(RegExp('/api/user/sorts' + '.*'), 'get', asData)
Mock.mock('/api/user/sortobject', 'post', objectsort) // post请求
Mock.mock(RegExp('/api/user/sortobject' + '.*'), 'get', objectsort)
Mock.mock('/api/user/detail', 'post', detailData) // post请求
Mock.mock(RegExp('/api/user/detail' + '.*'), 'get', detailData)
Mock.mock('/api/user/phonesorts', 'post', sortsData) // post请求
Mock.mock(RegExp('/api/user/phonesorts' + '.*'), 'get', sortsData)
