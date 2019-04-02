<template>
    <div class="SearchPage">
       <div class="header">
        <span @click.prevent="toClick()" class="iconfont back">&#xe603;</span>
        <form>
            <input type="text" class="text" placeholder="金丝绒秋冬套装"  v-model="val" />
            <span class="iconfont to_search" @click="SearchClick()">&#xe600;</span>
        </form>
    </div>
    <ul class="content">
        <li class="hot">
            <div><span>热门搜索</span><span class="iconfont">&#xe685;</span></div>
            <ul>
                <li v-for="(item,i) of arr" :key="i">{{item}}</li>
            </ul>
        </li>
        <li class="history">
            <div><span>历史搜索</span><span class="iconfont" @click="clearAll()">&#xe60d;</span></div>
            <ul>
                <li v-for="(item,i) of list" :key="i">{{item}}<span class="del" @click="del(i)">×</span></li>
            </ul>
        </li>
        
    </ul>
    <div class="confirm" ref="confirm">
        <div>确认清空所有历史记录？</div>
        <span @click="yesClick()">是</span><span @click="noClick()">否</span>
    </div>
    </div>
</template>

<script>
    export default{
        name:"SearchPage",                      //这是  SearchPage  页面
        components:{
          
        },
        data(){
            return{
                val:"",
                list:[],
                arr:["儿童秋冬保暖内衣","呢绒时尚外套","儿童格子衬衫","金丝绒套装","时尚牛仔衣","宽松针织儿童毛衣"]
            }
        },
        methods:{
            toClick(){                                  
                this.$router.go(-1)                     //点击返回首页（上一页）
            },
            SearchClick(){                              //点击搜索的同时将输入值添加到历史记录
                if(this.val != ""){  
                    this.list.push(this.val)
                    this.val = ""
                }
            },
            clearAll(){  								 //点击清空所有	                             
                if(this.list != ""){
                    this.$refs.confirm.className = 'confirm_mask'
                    }else{
                        this.$refs.confirm.className = 'confirm_none'
                    }
            },
            yesClick(){                                   //确定清空         
                    this.list = ""
                    this.$refs.confirm.className = 'confirm_none'
            },
            noClick(){                                    //取消
                    this.$refs.confirm.className = 'confirm_none'
            },
            del(i){
                this.list.splice(i,1)           //单独删除
            }
        }
    }
</script>

<style>
.SearchPage .header{display: flex;justify-content: space-between;padding:22px 30px;background: #f4b469;}
.SearchPage .header .back{font-size: 34px;line-height: 50px;color: #fdf3e7;display: block;text-align: left;}
.SearchPage .header form{width: 606px;height: 50px;background: #fff;border-radius: 34px;overflow: hidden;padding-right: 10px;}
.SearchPage .header form .text{width: 510px;height: inherit;font-family: "黑体";font-size: 24px;
                   float:left;text-align: left;line-height: inherit;padding-left: 18px;}
.SearchPage .header form .to_search{width: 66px;height: inherit;font-size: 30px;display: block;float: left;
text-align: right;line-height: 50px;color:#f4b469;}

input::-webkit-input-placeholder {color:#999;        
                                                    /* placeholder设置样式  */
}

.SearchPage .content{padding: 20px 20px 0px 20px;}
.SearchPage .content .iconfont{font-size: 30px;}

 .hot div,.history div{width:100%;height: auto;padding-bottom: 20px;display:flex;justify-content: space-between; }
 .hot ul,.history ul{display: flex;flex-wrap: wrap;}
 .hot ul li,.history ul li{padding:12px 18px;background: #eeeeee;margin:0px 20px 20px 0px;}

.SearchPage .del{font-size: 30px;color:rgb(255,0,0);}
/* 判断是否为空和是否清除所有 */
.confirm{display: none;}
.confirm_none{display: none;}
.confirm_mask{width: 400px;height: 120px;background: #999;position: fixed;top:0px;right: 0px;bottom: 0px;left: 0px;margin: auto;
              color: #fff;text-align: center;letter-spacing: 2px;}
.confirm_mask div{margin:20px 0px 30px 0px;}
.confirm_mask span{margin:0px 50px;padding:15px;}
</style>

