<template>
  <div class="contain">
 <h2 style="display: inline-block;margin-top: 30px;height:50px;width:100px;" v-color>{{msg.title}}</h2>
    <img src="../common/img/me.jpg" alt="个人照" :style="imgStyle">
    <div style="height:120px;width:270px;position: absolute;margin-top:-80px;box-shadow: 5px 5px 5px  #737373;border-radius: 2px;">
      姓名:{{msg.name}}<br>
      <hr>
      年龄:{{msg.age}}<br>
      <hr>
      身高:{{msg.height}}<br>
      <hr>
      体重:{{msg.weight}}<br>
      <hr>
      生日:{{msg.born}}
    </div>
    <div class="baseMsg">
      <el-input v-model="msg.school" :style="elInputStyle" :disabled="true"><i slot="prepend">学校</i></el-input>
      <el-input v-model="msg.zy" :style="elInputStyle" :disabled="true"> <i slot="prepend">专业</i></el-input>
      <el-input v-model="msg.xl" :style="elInputStyle" :disabled="true"> <i slot="prepend">学历</i></el-input>
      <el-input v-model="msg.jg" :style="elInputStyle" :disabled="true"> <i slot="prepend">籍贯</i></el-input>
      <el-input v-model="msg.phone" :style="elInputStyle" :disabled="true"> <i slot="prepend">电话</i></el-input>
      <el-input v-model="msg.email" :style="elInputStyle" :disabled="true"> <i slot="prepend">邮箱</i></el-input>
      <el-input v-model="msg.zzmm" :style="elInputStyle" :disabled="true"> <i slot="prepend">政治面貌</i></el-input>
      <el-input v-model="msg.workTime" :style="elInputStyle" :disabled="true"> <i slot="prepend">工作经验</i></el-input>
    </div>
    <div class="want">
      <el-input v-model="msg.qzyx" style="width:442px;margin-top:20px;margin-left: 0px; " :disabled="true"><i slot="prepend">求职意向</i></el-input>
      <el-input v-model="msg.body" style="width:450px;"  :disabled="true"><i slot="prepend">健康状况</i></el-input>
    </div>
    <div class="like">
      <p>兴趣爱好</p>
      <div class="content" style="width:100%;height:160px;" >
     <span v-for="item in msg.like" >{{item}}</span>
      </div>
    </div>
    <div class="get">
    <p>获得何种奖项/证书</p>
      <p>{{msg.english}}</p>
      <p>{{msg.money}}</p>
  </div>
    <div class="doWhat">
     <p>项目经验</p>
      <p>
        {{msg.doWhat}}
      </p>
    </div>
    <div class="aboutMe" id="myChart">
    </div>
    <div class="foot">
     <p>{{msg.zwpj}}</p>
      <p>{{msg.github}}</p>
    </div>
  </div>
</template>

<script>
  import {getList} from "../api/table";

  export default {
  name: 'index',
  data () {
    return {
      msg:{},
      like:[],
      elInputStyle:{
        'width':'220px',
        'margin-top':'20px'
      },
      imgStyle:{
        'height':'110px',
        'width':'100px',
        'display': 'inline-block',
        'position': 'absolute',
        'margin-left': '220px',
        'margin-top':'10px',
        '-webkit-transform':'rotate(-10deg)'
      },
      spanColor:{}
    }
  },
    directives:{
     color:function (el,binding) {
      el.style.color='black';
     }
    },
    mounted(){
    this.drawLine();
    },
    created(){
  this._getList();
     },
    methods:{
    _getList(){
    getList().then((ops)=>{
    this.msg=ops.data[0];
    })
    },
      drawLine() {
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        myChart.setOption({
          backgroundColor: '#2c343c',
          title: {
            text: '个人能力分析',
            left: 'left',
            top: 40,
            textStyle: {
              color: '#ccc'
            }
          },

          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },

          visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
              colorLightness: [0, 1]
            }
          },
          series : [
            {
              name:'访问来源',
              type:'pie',
              radius : '55%',
              center: ['50%', '50%'],
              data:[
                {value:300, name:'js'},
                {value:350, name:'html'},
                {value:350, name:'css'},
                {value:235, name:'jquey'},
                {value:400, name:'vue'}
              ].sort(function (a, b) { return a.value - b.value; }),
              roseType: 'radius',
              label: {
                normal: {
                  textStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                  }
                }
              },
              labelLine: {
                normal: {
                  lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                  },
                  smooth: 0.2,
                  length: 10,
                  length2: 20
                }
              },
              itemStyle: {
                normal: {
                  color: '#c23531',
                  shadowBlur: 200,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },

              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: function (idx) {
                return Math.random() * 200;
              }
            }
          ]
        });
      }
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  $borderColor:#000000;
.contain{
  background-color: #a1a1a1;
  height:800px;
  width:900px;
   margin: 5% auto;
  box-shadow: 10px 10px 5px  #888888;
}
  .baseMsg{
    height:140px;
    width:100%;
    margin-top: 30px;
  }
  i{
    color: #4d4d4d;
  }
  .want{
    height:80px;
    width:100%;
  }
  .like{
    height:150px;
    width:100%;
    overflow: auto;
  }
  .get{
    height:80px;
    width:100%;
  }
  .doWhat{
    height:60px;
    width:100%;
  }
.aboutMe{
  height:110px;
  width:100%;
}
  p{
    font-size: 20px;
    font-weight: bolder;
  }
  span{
    height:30px;
    width:100%;
    display: inline-block;
    text-align: center;
    font-weight: bolder;
  }
  .foot{
    height:55px;
    width:100%;
  }
  span:nth-child(2n-1){
    color: #fffd8a;
  }
  .baseMsg,.want,.like,.get,.doWhat,.aboutMe{
    border-bottom: 2px solid $borderColor;
  }
</style>
