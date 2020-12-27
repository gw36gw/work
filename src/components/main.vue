<template>
  <div class="overflow">
    <el-container>
      <el-header>
        <div class="overflow_main">
          <div class="overflow_top">
            <div class="overflow_left" @click="denglu()">
              <a >{{ mingzi }}</a>
              <span><b >免费注册</b></span>
            </div>
            <div class="overflow_right">
              <ul>
                <li class="active">我的订单</li>
                <li class="active">我的京东</li>
                <li class="active">京东会员</li>
                <li class="active">客户服务</li>
                <li><i class="el-icon-thirdtouxiang"></i>个人中心</li>
                <li @click="gouwuches()">
                  <i class="el-icon-thirdgouwuche1"></i
                  >购物车
                </li>
                <li v-if="shoucangjia">
                  <i class="el-icon-thirdshoucangjia"></i>收藏夹
                </li>
              </ul>
            </div>
          </div>
          <div class="overflow_bottom">
            <div class="overflow_logo" @click="shouye()">
              <img src="../assets/jingdong.jpg" alt="" />
            </div>
            <div class="overflow_search">
              <el-input
                placeholder="请输入内容"
                v-model="input3"
                class="input-with-select"
              >
                <el-button slot="append" icon="el-icon-search" @click="phone()"></el-button>
              </el-input>
            </div>
            <div class="visibilty"></div>
          </div>
        </div>
      </el-header>
      <el-main>
        <div class="overflow_content">
          <div class="overflow_tabber">
            <div class="overflow_list">
              <ul>
                <li @click="phone()">秒杀</li>
                <li @click="phone()">优惠券</li>
                <li @click="phone()">PLUs会员</li>
                <li @click="phone()">品牌闪购</li>
                <li @click="phone()">拍卖</li>
                <li @click="phone()">京东超市</li>
                <li @click="phone()">京东生鲜</li>
                <li @click="phone()">京东国际</li>
                <li @click="phone()">京东金融</li>
                <li @click="phone()">京东家电</li>
              </ul>
            </div>
          </div>
          <div class="overflow_middle">
            <div class="list">
              <ul>
                <li v-for="(item, index) in list" :key="index">
                  <i/>{{ item.a }}
                </li>
              </ul>
            </div>
            <div class="lunbo">
              <div class="block">
                <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
                <el-carousel height="370px">
                  <el-carousel-item
                    v-for="(item, index) in imglist"
                    :key="index"
                  >
                    <img :src="item.src" alt="" />
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>

          </div>

<div class="list_model" @click="phone()">
		<div class="list_title clearfix">
			<h3 class="fl" id="model01">推荐商品</h3>
			<div class="subtitle">
				<span></span>
        <span>  |   </span>
				<a href="#">精选</a>
        <span>  |   </span>
				<a href="#">美食</a>
        <span>  |   </span>
				<a href="#">百货</a>
        <span>  |   </span>
        <a href="#">个护</a>
			</div>
		</div>

		<div class="goods_con clearfix">
			<div class="goods_banner fl"><img src="../assets/华为p40.jpg">
			<ul class="goods_list fl">
				<li>
					<h4><a href="#">Vivo S7e</a></h4>
					<a href="#"><img src="../assets/vivos7.png"></a>
					<div class="prize">¥ 2398.00</div>
				</li>
				<li>
					<h4><a href="#">张小泉套刀</a></h4>
					<a href="#"><img src="../assets/刀具.jpg"></a>
					<div class="prize">¥ 139.00</div>
				</li>
				<li>
					<h4><a href="#">沙宣洗护</a></h4>
					<a href="#"><img src="../assets/沙宣.jpg"></a>
					<div class="prize">¥ 99.00</div>
				</li>
				<li>
					<h4><a href="#">泰国进口榴莲</a></h4>
					<a href="#"><img src="../assets/榴莲.jpg"></a>
					<div class="prize">¥ 198.80</div>
				</li>
			</ul>
		</div>
	</div>
</div>
<div class="list_model" @click="computer()">
		<div class="list_title clearfix">
			<h3 class="fl" id="model01">京东专场</h3>
			<div class="subtitle">
				<span></span>
        <span>  |   </span>
				<a href="#">京东京造</a>
        <span>  |   </span>
				<a href="#">京东时尚</a>
        <span>  |   </span>
				<a href="#">京东超市</a>
        <span>  |   </span>
        <a href="#">京东工业品</a>
			</div>
		</div>

		<div class="goods_con clearfix">
			<div class="goods_banner fl"><img src="../assets/iphone12.jpg">
			<ul class="goods_list fl">
				<li>
					<h4><a href="#">京东京造 记忆棉枕头</a></h4>
					<a href="#"><img src="../assets/记忆棉枕头.jpg"></a>
					<div class="prize">¥ 109.00</div>
				</li>
				<li>
					<h4><a href="#">京东时尚 瑞士手表</a></h4>
					<a href="#"><img src="../assets/瑞士手表.jpg"></a>
					<div class="prize">¥ 5250.00</div>
				</li>
				<li>
					<h4><a href="#">京东超市 百草味</a></h4>
					<a href="#"><img src="../assets/麻薯.jpg"></a>
					<div class="prize">¥ 29.90</div>
				</li>
				<li>
					<h4><a href="#">京东工业品 工盾坊</a></h4>
					<a href="#"><img src="../assets/口罩.jpg"></a>
					<div class="prize">¥ 18.50</div>
				</li>
			</ul>
		</div>
	</div>
</div>
<div class="list_model" @click="computer()">
		<div class="list_title clearfix">
			<h3 class="fl" id="model01">京东秒杀</h3>
			<div class="subtitle">
				<span></span>
        <span>  |   </span>
				<a href="#">10：:00正在秒杀</a>
        <span>  |   </span>
				<a href="#">12：00即将开始</a>
        <span>  |   </span>
				<a href="#">14：00即将开始</a>
        <span>  |   </span>
        <a href="#">16:00即将开始</a>
			</div>
		</div>

		<div class="goods_con clearfix">
			<div class="goods_banner fl"><img src="../assets/索尼.jpg">
			<ul class="goods_list fl">
				<li>
					<h4><a href="#">泸州老窖</a></h4>
					<a href="#"><img src="../assets/泸州老窖.jpg"></a>
					<div class="prize">¥ 218.00</div>
				</li>
				<li>
					<h4><a href="#">中国电信流量王卡</a></h4>
					<a href="#"><img src="../assets/电信.jpg"></a>
					<div class="prize">¥ 9.99</div>
				</li>
				<li>
					<h4><a href="#">小米儿童电话手表</a></h4>
					<a href="#"><img src="../assets/小米电话.jpg"></a>
					<div class="prize">¥ 1199.00</div>
				</li>
				<li>
					<h4><a href="#">温斯丹尼 火烧石实木餐桌椅</a></h4>
					<a href="#"><img src="../assets/桌子.jpg"></a>
					<div class="prize">¥ 2390.00</div>
				</li>
			</ul>
		</div>
	</div>
</div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import '../components/main.less'
export default {
  data () {
    return {
      shoucangjia: false,
      mingzi: '',
      input3: '',
      list: [],
      lists: [],
      listes: [],
      imglist: [
        { src: require('../assets/1.jpg') },
        { src: require('../assets/2.jpg') },
        { src: require('../assets/3.jpg') },
        { src: require('../assets/4.jpg') }
      ]
    }
  },
  methods: {
    gouwuches () {
      this.$router.push('/money')
    },
    shouye () {
      this.$router.push('/')
    },
    denglu () {
      this.$router.push('/login')
    },
    zhuce () {
      this.$router.push('/login')
    },
    phone () {
      this.$router.push('/information')
    },
    computer () {
      this.$router.push('/information')
    },
    get () {
      var _this = this
      _this.$http
        .post('/api/user/main', {})
        .then(function (response) {
          if ((response.staus = 200)) {
            console.log(response.data.data)
            _this.list = response.data.data
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    post () {
      var _this = this
      _this.$http
        .post('/api/user/sort', {})
        .then(function (response) {
          if ((response.staus = 200)) {
            console.log(response.data.data)
            _this.listes = response.data.data
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    computerget () {
      var _this = this
      _this.$http
        .post('/api/user/sorts', {})
        .then(function (response) {
          if ((response.staus = 200)) {
            console.log(response.data.data)
            _this.listes = response.data.data
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  created () {
    var _this = this
    _this.get()
    _this.post()
    _this.computerget()
    var a = _this.$route.params.Id
    _this.mingzi = a || '你好，请登录'
    _this.shoucangjia = !!a
  }
}
</script>
<style lang="less" scoped>
.center_con{width:1200px;height:270px;margin:0 auto;}
.subnav{width:198px;height:270px;border-left:1px solid #eee;border-right:1px solid #eee;}
.subnav li{height:44px;border-bottom:1px solid #eee;background:url('../assets/arrow-next.png') 178px -257px no-repeat #fff;}

.subnav li a{display:block;height:44px;line-height:44px;text-indent:71px;font-size:14px;color:#333}
.subnav li a:hover{color:#ff8800}

.subnav li .fruit{background:url('../assets/arrow-next.png') 28px 0px no-repeat;}
.subnav li .seafood{background:url('../assets/arrow-next.png') 28px -43px no-repeat;}
.subnav li .meet{background:url('../assets/arrow-next.png') 28px -86px no-repeat;}
.subnav li .egg{background:url('../assets/arrow-next.png') 28px -132px no-repeat;}
.subnav li .vegetables{background:url('../assets/arrow-next.png') 28px -174px no-repeat;}
.subnav li .ice{background:url('../assets/arrow-next.png') 28px -220px no-repeat;}

.list_model{width:1453px;height:430px;margin-left: 12%;}
.list_title{height:100px;border-bottom:5px solid #363837}
.list_title h3{height:40px;line-height:20px;font-size:30px;color:#37ab40;}
.list_title .subtitle{height:20px;line-height:20px;margin-top:70px;}
.list_title .subtitle span{color:rgb(0, 0, 0);margin:0 10px 0 20px;margin-left:8%;}
.list_title .subtitle a{color:rgb(0, 0, 0);margin:0 5px;}
.list_title .subtitle a:hover,.goods_more:hover{color:#ff0000}

.goods_con{height:360px;}
.goods_banner{width:200px;height:360px;display: flex;}
.goods_banner img{width:200px;height:300px;}
.goods_list{width:1000px;height:299px;border-bottom:1px solid #ededed}
.goods_list li{height:299px;width:249px;border-right:1px solid #ededed;float:left;margin-left: 8%;}
.goods_list li:hover{width:248px;height:297px;border:1px solid gold;}
.goods_list li:hover img{opacity:0.8}

.goods_list li h4{width:200px;height:50px;margin:20px auto 0;text-align:center;}
.goods_list li h4 a{font-size:14px;color:rgb(0, 0, 0);font-weight:normal;line-height:24px;}
.goods_list li h4 a:hover{color:#ff8800}

.goods_list li img{display:block;width:180px;height:180px;margin:0 auto;}
.goods_list li .prize{text-align:center;font-size:20px;color:#c40000;margin-top:5px;}

.slide{width:760px;height:270px;position:relative;overflow:hidden;}
.slide .slide_pics{position:relative;left:0;top:0;width:760px;height:270px;}
.slide .slide_pics li{width:760px;height:270px;position:absolute;left:0;top:0}
.slide .prev,.slide .next{width:17px;height:23px;background:url('../assets/arrow-next.png') left -388px no-repeat;position:absolute;left:11px;top:122px;cursor:pointer;}
.slide .next{background-position:left -428px;left:732px;}
.points{width:100%;height:11px;position:absolute;left:0;top:250px;text-align:center;}
.points li{display:inline-block;width:11px;height:11px;margin:0 5px;background-color:#9f9f9f;border-radius:50%;cursor:pointer;}
.points li.active{background-color:#cecece}
.clearfix:before,.clearfix:after{content:"";display:table}
.clearfix:after{clear:both;}
.clearfix{zoom:1}
.adv{width:240px;height:270px; overflow:hidden; background-color:gold;}
.adv a{display:block;float:left;}
.fl{float:left;display: flex;list-style: none;}
.fr{float:right}
</style>
