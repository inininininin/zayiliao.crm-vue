webpackJsonp([18],{QMaC:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("aA9S"),s=i.n(a),r={name:"containBox",data:function(){return{interst:"",containBoxList:[],createTimeFrom:"",createTimeTo:"",totalNum:"",customerId:"",customerWorkerId:"",returnVisitTime:""}},activated:function(){this.startFn()},methods:{resertFn:function(){s()(this.$data,this.$options.data()),this.$common.loginRefresh(),this.startFn()},searchFn:function(t){if(t){var e=this.moment(this.moment(t).valueOf()).format("YYYY-MM-DD HH-mm-ss").split(/[ ]+/);e=e[0].replace(/-/g,"/")+" 00:00:00",this.createTimeFrom=this.moment(e).valueOf(),this.createTimeTo=this.createTimeFrom+(864e5-1)}else this.createTimeFrom="",this.createTimeTo="";console.log(this.createTimeFrom);var i=this.moment(this.createTimeFrom).format("YYYY-MM-DD HH-mm-ss"),a=this.moment(this.createTimeTo).format("YYYY-MM-DD HH-mm-ss");console.log(i+"+"+a),this.totalNum="",this.customerId="",this.customerWorkerId="",this.containBoxList=[],this.startFn()},startFn:function(){var t=this;$.ajax({url:"/crm/my-customer-worker-trace/customer-worker-trace-list-sum",type:"GET",data:"createTimeFrom="+this.createTimeFrom+"&createTimeTo="+this.createTimeTo,async:!1,success:function(e){0==e.code&&(t.totalNum=Math.ceil(e.data.itemCount/20),console.log(t.totalNum))}}),$("#box").paging({initPageNo:1,totalPages:t.totalNum,slideSpeed:600,jump:!0,callback:function(e){t.trackrelList(t.customerId,t.customerWorkerId,e)}})},trackrelList:function(t,e,i){var a=this;$.ajax({url:"/crm/my-customer-worker-trace/customer-worker-trace-list",type:"GET",data:"customerId="+t+"&customerWorkerId="+e+"&pn="+i+"&ps=20&createTimeFrom="+this.createTimeFrom+"&createTimeTo="+this.createTimeTo,async:!0,success:function(t){if(0==t.code&&(a.interst="",t.data.itemList&&t.data.itemList.length>0))for(var e in $("#containBox .trackDetail").html(""),t.data.itemList)1==t.data.itemList[e].level?a.interst="暂不感兴趣":2==t.data.itemList[e].level?a.interst="初步感兴趣":3==t.data.itemList[e].level?a.interst="非常感兴趣":4==t.data.itemList[e].level?a.interst="近期可考察":5==t.data.itemList[e].level&&(a.interst="线上可签单"),a.containBoxList.push(t.data.itemList[e]),$("#containBox .trackDetail").append(),$("#containBox .trackDetail").scrollTop($("#containBox .trackDetail")[0].scrollHeight)}})}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"100%",height:"100%",overflow:"scroll"}},[i("div",{staticClass:"containBox",attrs:{id:"containBox"}},[i("h2",[t._v("昨天工作记录列表")]),t._v(" "),i("div",{staticClass:"selectOption",staticStyle:{width:"100%",height:"80px"}},[i("el-date-picker",{attrs:{type:"date",placeholder:"回访时间",align:"right"},on:{change:t.searchFn},model:{value:t.returnVisitTime,callback:function(e){t.returnVisitTime=e},expression:"returnVisitTime"}}),t._v(" "),i("button",{staticClass:"searchThis refresh",on:{click:t.resertFn}},[t._v("重置")])],1),t._v(" "),i("div",{staticClass:"trackDetail"},t._l(t.containBoxList,function(e,a){return i("ul",{key:a},[i("li",[i("span",[t._v(t._s(e.customerName))]),i("span",[t._v(t._s(e.customerWorkerName))])]),t._v(" "),i("li",[i("span",[t._v(t._s(t.interst))]),i("span",[t._v(t._s(t.moment(e.createTime).format("YYYY-MM-DD HH:mm:ss")))])]),t._v(" "),i("li",[t._v(t._s(e.content))])])}),0),t._v(" "),i("div",{staticClass:"box rt",attrs:{id:"box"}})])])},staticRenderFns:[]};var n=i("C7Lr")(r,o,!1,function(t){i("W/8A")},"data-v-0efe27a1",null);e.default=n.exports},"W/8A":function(t,e){}});
//# sourceMappingURL=18.745064ffa49ba4b61c26.js.map