<template>
	<div class="address">
                <div class="header">
                  <span class="iconfont back" @click="back()">&#xe603;</span>
                  <h2>我的收货地址</h2>
                  <span>确认</span>
                </div>
                <van-address-list
                v-if="bool"
                  v-model="chosenAddressId"
                  :list="list"
                  :disabled-list="disabledList"
                  disabled-text="以下地址超出配送范围"
                  @add="onAdd"
                  @edit="onEdit"
                />
              <van-address-edit
                v-else
                show-postal
                show-delete
                show-set-default
                show-search-result
                :search-result="searchResult"
                @save="onSave"
                @delete="onDelete"
                @change-detail="onChangeDetail"
              />

</div>
</template>

<script>
import Vue from 'vue'
import { AddressList } from 'vant'
Vue.use(AddressList)

import { AddressEdit } from 'vant';
Vue.use(AddressEdit);

import { Toast } from 'vant';
Vue.use(Toast);

import { Area } from 'vant';
Vue.use(Area);
                      export default{
                        name:"address",
                        data() {
                        return {
                          bool:true,
                          chosenAddressId: '1',
                          searchResult: [],
                          list: [
                            {
                              id: '1',
                              name: '张子君',
                              tel: '15937221956',
                              address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
                            },
                            {
                              id: '2',
                              name: '程四',
                              tel: '13113875642',
                              address: '广东省广州市天河区棠东正南市场'
                            },
                            {
                              id: '3',
                              name: '陈芳语',
                              tel: '13136112467',
                              address: '广东省广州市越秀区越秀路 20 号'
                            },
                            {
                              id: '4',
                              name: '王五双',
                              tel: '13743112123',
                              address: '广东省广州市拱墅区莫干山路 50 号'
                            }
                          ],
                          disabledList: [
                            {
                              id: '3',
                              name: '王五',
                              tel: '13245223454',
                              address: '广东省广州市滨江区江南大道 15 号'
                            }
                          ]
                        }
                      },

                      methods: {
                        onAdd() {
                          Toast('新增地址');
                        this.bool = false
                        },
                        onEdit(item, index) {
                          Toast('编辑地址:');
                        this.bool = false
                        },
                      onSave() {
                          Toast('save');
                        },
                        onDelete() {
                          Toast('delete');
                        },
                        onChangeDetail(val) {
                          if (val) {
                            this.searchResult = [{
                              name: '黄龙万科中心',
                              address: '杭州市西湖区'
                            }];
                          } else {
                            this.searchResult = [];
                          }
                        },
                        back(){
                          this.$router.go(-1)
                        }
                      }
	}
</script>

<style scoped>
.address{padding-top: 80px;}
.address .header{
	padding:22px 30px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	line-height: 36px;
	font-family: '黑体';
	font-size: 36px;
	color: #fff;
	background: #f4b469;
	box-sizing: border-box;
	position: fixed;
	top: 0px;
	right: 0px;
	left: 0px;
}
.address .header .back{font-size: 36px;color: #fff;}	
.address >>> .van-address-list{margin-top:6px;}
.address >>> .van-address-item__address{line-height: 40px;}	
.address >>> .van-radio__label{margin-left: 10px;}
.address >>> .van-address-item{margin-bottom:6px;background: #EEEEEE;}
.address >>> .van-address-list__disabled-text{line-height: 66px;}
.address >>> .van-button{height: 100px;font-size: 40px;}
.address >>> .van-address-item__name{line-height: 40px;}
.address >>> .van-address-edit{margin-top:30px;}
.address >>> .van-address-edit__buttons{padding:0px;width: 100%;position: absolute;bottom: 0px;}
.address >>> .van-cell{background:#F1F1F1;margin-bottom:30px;}

.address >>> .van-address-edit__buttons{
	margin-bottom: 0px;
}
.address >>> .van-button {
    margin-bottom: 0px;
}
</style>