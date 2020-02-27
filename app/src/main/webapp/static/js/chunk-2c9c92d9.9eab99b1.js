(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c9c92d9"],{"5efc":function(t,e,a){"use strict";var l=a("edc0"),n=a.n(l);n.a},"9aef":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{attrs:{header:t.$route.meta.title,shadow:"never"}},[a("el-form",{attrs:{inline:!0,model:t.listQuery}},[a("el-form-item",{attrs:{prop:"customerId",label:"客户:"}},[a("el-select",{attrs:{loading:t.customerLoading,clearable:"",filterable:"",placeholder:"请选择"},model:{value:t.listQuery.customerId,callback:function(e){t.$set(t.listQuery,"customerId",e)},expression:"listQuery.customerId"}},t._l(t.customerOptions,function(t){return a("el-option",{key:t.id,attrs:{label:t.nickname,value:t.id}})}),1)],1),a("el-form-item",{attrs:{prop:"channelId",label:"通道:"}},[a("el-select",{attrs:{loading:t.channelLoading,clearable:"",filterable:"",placeholder:"请选择"},model:{value:t.listQuery.channelId,callback:function(e){t.$set(t.listQuery,"channelId",e)},expression:"listQuery.channelId"}},t._l(t.channelOptions,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1)],1),a("el-form-item",[a("el-date-picker",{attrs:{type:"date",placeholder:"开始日期","value-format":"yyyy-MM-dd"},model:{value:t.listQuery.fromDate,callback:function(e){t.$set(t.listQuery,"fromDate",e)},expression:"listQuery.fromDate"}})],1),a("el-form-item",[a("el-date-picker",{attrs:{type:"d ate",placeholder:"结束日期","value-format":"yyyy-MM-dd"},model:{value:t.listQuery.toDate,callback:function(e){t.$set(t.listQuery,"toDate",e)},expression:"listQuery.toDate"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.search}},[t._v("\n        查询\n      ")])],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-download"},on:{click:t.exportExcel}},[t._v("\n        导出\n      ")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{size:"small",data:t.list,"element-loading-text":"正在查询中...",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{type:"expand",widt:"",h:"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"签名:"}},[a("span",[t._v(t._s(e.row.signature))])]),a("el-form-item",{attrs:{label:"5秒到达率:"}},[a("span",[t._v(t._s(e.row.fiveSecondRatio))])]),a("el-form-item",{attrs:{label:"10秒到达率:"}},[a("span",[t._v(t._s(e.row.tenSecondRatio))])]),a("el-form-item",{attrs:{label:"60秒到达率:"}},[a("span",[t._v(t._s(e.row.minuteRatio))])])],1)]}}])}),a("el-table-column",{attrs:{prop:"customer.username",label:"客户","min-width":"100"}}),a("el-table-column",{attrs:{prop:"channel.name",label:"通道","min-width":"100"}}),a("el-table-column",{attrs:{prop:"successCount",label:"成功数",width:"100",align:"right"}}),a("el-table-column",{attrs:{prop:"strategyFailureCount",label:"策略失败数",width:"100",align:"right"}}),a("el-table-column",{attrs:{prop:"submitFailureCount",label:"提交失败数",width:"100",align:"right"}}),a("el-table-column",{attrs:{prop:"reportFailureCount",label:"状态报告失败数",width:"100",align:"right"}}),a("el-table-column",{attrs:{prop:"responseTimeoutCount",label:"响应超时数",width:"100",align:"right"}}),a("el-table-column",{attrs:{prop:"reportTimeoutCount",label:"状态报告超时数",width:"100",align:"right"}}),a("el-table-column",{attrs:{prop:"successFeeCount",label:"成功计费数",width:"100",align:"right"}}),a("el-table-column",{attrs:{prop:"strategyFailureFeeCount",label:"策略失败计费数",width:"100",align:"right"}}),a("el-table-column",{attrs:{prop:"submitFailureFeeCount",label:"提交失败计费数",width:"100",align:"right"}}),a("el-table-column",{attrs:{prop:"reportFailureFeeCount",label:"状态报告失败计费数",width:"100",align:"right"}}),a("el-table-column",{attrs:{prop:"responseTimeoutFeeCount",label:"响应超时计费数",width:"100",align:"right"}}),a("el-table-column",{attrs:{prop:"reportTimeoutFeeCount",label:"状态报告超时计费数",width:"100",align:"right"}})],1),a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{background:"","current-page":t.listQuery.page+1,"page-sizes":[10,20,30,50],"page-size":t.listQuery.size,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},n=[],i={name:"home",data:function(){return{loaded:!1,total:0,listLoading:!0,list:[],listQuery:{keywordType:"NAME",keyword:void 0,customerId:void 0,channelId:void 0,fromDate:this.$moment().subtract(7,"days").format("YYYY-MM-DD"),toDate:this.$moment().format("YYYY-MM-DD"),page:0,size:10},customerOptions:[],customerLoading:!1,channelOptions:[],channelLoading:!1}},created:function(){this.loadList(),this.loadCustomerList(),this.loadChannelList()},methods:{handleSizeChange:function(t){this.listQuery.size=t,this.loadList()},handleCurrentChange:function(t){this.listQuery.page=t-1,this.loadList()},exportExcel:function(){var t=Object.assign({},this.listQuery),e="http://localhost:9000/analysis/export?";void 0!=t.customerId&&(e+="customerId="+t.customerId+"&"),void 0!=t.channelId&&(e+="channelId"+t.channelId+"&"),window.open(e+"fromDate="+t.fromDate+"&toDate="+t.toDate)},search:function(){this.listQuery.page=0,this.loadList()},loadList:function(t){var e=this,a=Object.assign({},this.listQuery,t);this.listLoading=!0,this.$http.get("http://localhost:9000/analysis/list",{params:a}).then(function(t){e.listQuery.page=a.page,e.listQuery.size=a.size,e.list=t.data.data,e.total=t.data.total,e.listLoading=!1},function(){return e.listLoading=!1})},loadCustomerList:function(){var t=this;this.customerLoading=!0,this.$http.get("http://localhost:9000/customer/list").then(function(e){t.customerOptions=e.data.data,t.customerLoading=!1},function(){return t.customerLoading=!1})},loadChannelList:function(){var t=this;this.channelLoading=!0,this.$http.get("http://localhost:9000/channel/list").then(function(e){t.channelOptions=e.data.data,t.channelLoading=!1},function(){return t.channelLoading=!1})}}},o=i,r=(a("5efc"),a("2877")),s=Object(r["a"])(o,l,n,!1,null,null,null);e["default"]=s.exports},edc0:function(t,e,a){}}]);
//# sourceMappingURL=chunk-2c9c92d9.9eab99b1.js.map