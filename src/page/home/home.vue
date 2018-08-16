<template>
    <div class="bgfff">
        <mt-header fixed>
            <span slot="left" style="font-weight: 600">仿饿了么</span>
            <mt-button slot="right" @click="toLogin">登录|注册</mt-button>
        </mt-header>
        <div class="padtop40 bgf5">
            <div class="ih45 padlr10 box bgfff">
                <span >当前选择城市:</span>
                <span class="right fs0-8 col9f">定位不准时,请在城市列表选择</span>
            </div>
            <mt-cell :title="$store.state.nowCity.name" to="/city" is-link value="" class="col after bodt1" style="font-weight:500"></mt-cell>
            <div class="mgtop10 bgfff">
                <mt-cell class="after" title="热门城市"></mt-cell>
                <div class="itembox ovhid col"   >
                    <div v-for="(item,index) in hotList" :key="index" @click="toCity({name:item.name,id:item.id})">{{item.name}}</div>
                </div>
            </div>
            <div class="mgtop10 bgfff" v-for="(items,index) in getList" >
                <mt-cell :title="index" class="after"></mt-cell>
                <div class="itembox ovhid">
                    <div v-for="item in items" class="nowrap fz0-8" @click="toCity({name:item.name,id:item.id})">{{ item.name }}</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'home',
    data() {
      return {
        list: {},
        hotList: {}
      }
    },
    mounted: function () {
      axios.get('http://cangdu.org:8001/v1/cities?type=group').then(response => {
        this.list = response.data
      })
      axios.get('http://cangdu.org:8001/v1/cities?type=hot').then(response => {
        this.hotList = response.data
        console.log(this.hotList)
      })
      // axios.get('http://cangdu.org:8001/v1/cities?type=guess').then((response, err) => {
      //   console.log(response)
      //   this.$store.state.nowcity = response.body.name
      //   if (err) {
      //     console.log(err)
      //   }
      // })
      // this.$store.state.nowcity = '北京'
    },
    methods: {
      toLogin() {
        this.$router.push('login')
      },
      toCity(name) {
        this.$router.push('city')
        this.$store.state.nowCity = name
      }
    },
    computed: {
      getList() {
        var cityList = {}
        for (var i = 65; i <= 90; i++) {
          var num = String.fromCharCode(i)
          cityList[num] = this.list[num]
        }
        return cityList
      }
    }

  }
</script>

<style scoped>
    .itembox > div {
        width: 25%;
        float: left;
        text-align: center;
        height: 40px;
        line-height: 40px;
        box-sizing: border-box;
        border-right: 1px solid #e4e4e4;
        border-bottom: 1px solid #e4e4e4;
    }

    .itembox > div:nth-child(4n) {
        border-right: 0px;
    }
</style>