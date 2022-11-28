"use strict";(self["webpackChunkquanlynhanvien_amis_ketoan"]=self["webpackChunkquanlynhanvien_amis_ketoan"]||[]).push([[672],{7923:function(e,a,t){var l=t(7877);const n=e=>l.Z.post("/UnitCalculations/fitter",e),o=()=>l.Z.get("/UnitCalculations"),i=e=>l.Z.post("/UnitCalculations",e),c=e=>l.Z.get(`/UnitCalculations/${e}`),u=e=>l.Z.put(`/UnitCalculations/${e.unitCalculationID}`,e),s=e=>l.Z["delete"](`/UnitCalculations/${e}`),d=()=>l.Z.get("/UnitCalculations/export_data"),r=e=>l.Z.get(`/UnitCalculations/ToggleActive/${e}`),v=()=>l.Z.get("/UnitCalculations/active");a["Z"]={exportDataApi:d,deleteRecordApi:s,editRecordApi:u,getRecordList:n,createRecordApi:i,getRecordApi:c,toggleActiveApi:r,getAllRecordList:o,getAllRecordListActive:v}},3578:function(e,a,t){t.r(a),t.d(a,{default:function(){return P}});var l=t(3396),n=t(7139),o=t(9242);const i=e=>((0,l.dD)("data-v-58e89368"),e=e(),(0,l.Cn)(),e),c={class:"modal-body"},u={class:"form"},s={class:"form-header"},d={class:"modal-title"},r={class:"modal-close"},v=i((()=>(0,l._)("div",{class:"modal-icon modal-icon_help"},null,-1))),g={class:"form-container"},h={class:"form-group ms-small"},m={class:"form-group"},p=i((()=>(0,l._)("label",null,"Mô tả",-1))),f={class:"form-action"},C={class:"form-action_container"},_={class:"form-action_item"},b={class:"form-action_item"},w={ref:"focusLoop",class:"focus-loop"};function y(e,a,t,i,y,A){const k=(0,l.up)("input-default");return(0,l.wg)(),(0,l.iD)("div",c,[(0,l._)("div",u,[(0,l._)("div",s,[(0,l._)("div",d,[(0,l._)("h2",null,(0,n.zw)(i.titleForm),1)]),(0,l._)("div",r,[v,(0,l._)("div",{onClick:a[0]||(a[0]=e=>i.handleCloseModal(!1)),class:"modal-icon modal-icon_close"})])]),(0,l._)("div",g,[(0,l._)("div",h,[(0,l.Wm)(k,{focus:!0,required:!0,type:"text",maxLength:100,messageValid:i.unitCalculationNotification.validateName,label:"Đơn vị tính",class:(0,n.C_)({"is-valid":i.isValid&&""==i.unitCalculation.unitCalculationName}),modelValue:i.unitCalculation.unitCalculationName,"onUpdate:modelValue":a[1]||(a[1]=e=>i.unitCalculation.unitCalculationName=e),ref:"inputFocus"},null,8,["messageValid","class","modelValue"])]),(0,l._)("div",m,[p,(0,l.wy)((0,l._)("textarea",{class:"input","onUpdate:modelValue":a[2]||(a[2]=e=>i.unitCalculation.unitCalculationDetail=e)},null,512),[[o.nr,i.unitCalculation.unitCalculationDetail]])])]),(0,l._)("div",f,[(0,l._)("div",C,[(0,l._)("div",_,[(0,l._)("button",{onClick:a[3]||(a[3]=e=>i.handleSaveData(!0)),style:{"margin-right":"9px"},class:"btn modal-icon btn-form_cat"}," Cất "),(0,l._)("button",{onClick:a[4]||(a[4]=e=>i.handleSaveData(!1)),class:"btn btn-success modal-icon btn-form_cat-them"}," Cất và thêm ")]),(0,l._)("div",b,[(0,l._)("button",{onClick:a[5]||(a[5]=e=>i.handleCloseModal(!0)),class:"btn"}," Huỷ ")])])]),(0,l._)("button",w,null,512)])])}var A=t(4870),k=t(5734),R=t(65),L=t(177),S=t(8410),Z=t(4419),E=t(7794),T=t(7923),D={components:{InputDefault:k.Z},props:{recordEdit:{type:Object},recordAdd:{type:Object}},setup(e,a){const{createRecordApi:t,editRecordApi:n}=T.Z,o=(0,A.iH)(""),{QUESTION_DATA_CHANGE:i,unitCalculationNotification:c}=S.Z,u=(0,A.iH)(null),s=(0,A.iH)(null),d=(0,A.iH)(!0),{recordEdit:r,recordAdd:v}=(0,A.BK)(e),g=(0,A.iH)(!1),h=(0,R.oR)(),{TypeSuccess:m,MessageSuccessAdd:p,MessageSuccessEdit:f,AddFormUnit:C,EditFormUnit:_}=L.Z,b=(0,A.iH)({unitCalculationName:"",unitCalculationDetail:"",isActive:!0}),w=(0,A.iH)(null),y=(0,A.iH)({unitCalculationName:"",unitCalculationDetail:"",isActive:!0});(0,l.wF)((async()=>{o.value=C,r.value?(o.value=_,b.value={...r.value},d.value=!1,w.value={...r.value}):(o.value=C,v.value&&(b.value={...v.value}))}));const k=function(){u.value.tagInput.focus()},{handleEventFormCtrlShiftS:D,handleEventInterruptFormCtrlShiftS:N}=Z.Z;function U(e){try{D(e,V,null,F,!1,F,!0)}catch(a){console.log(a)}}function P(){return[""===b.value.unitCalculationName.trim()?c.validateName:null].filter((e=>{if(e)return!0}))}(0,l.bv)((()=>s.value.addEventListener("focus",k))),(0,l.bv)((()=>window.addEventListener("keydown",U))),(0,l.bv)((()=>window.addEventListener("keyup",N))),(0,l.Ah)((()=>window.removeEventListener("focus",k))),(0,l.Ah)((()=>window.removeEventListener("keydown",U))),(0,l.Ah)((()=>window.removeEventListener("keyup",N)));const H=(0,A.iH)(!1);async function I(e){await(0,E.Z)(e,{...b.value},(async e=>{a.emit("handle-save-data-props",{...b.value,unitCalculationID:e}),h.dispatch("config/addNotification",{type:m,message:d.value?p:f}),H.value=!1,d.value?h.dispatch("unitCalculation/addRecordAction",{...b.value,unitCalculationID:e}):(d.value=!0,h.dispatch("unitCalculation/editRecordAction",{...b.value,unitCalculationID:e}))}),h,!1,(()=>{H.value=!0}))}async function F(e){try{const l=P();l.length>0?(g.value=!0,h.dispatch("config/setToggleShowNotificationErrorAction",l)):(d.value?await I(t):await I(n),!0===e&&!1===H.value?a.emit("handle-click-close-modal"):!1===H.value&&(o.value=C,g.value=!1,b.value={...y.value},u.value.tagInput.focus()))}catch(l){console.log(l)}}function M(){try{a.emit("handle-click-close-modal")}catch(e){console.log(e)}}function O(){try{F(!0)}catch(e){console.log(e)}}function V(e){try{e?a.emit("handle-click-close-modal"):d.value?JSON.stringify(b.value)!=JSON.stringify(y.value)?x():a.emit("handle-click-close-modal"):!1===d.value&&(JSON.stringify(b.value)!=JSON.stringify(w.value)?x():a.emit("handle-click-close-modal"))}catch(t){console.log(t)}}function x(){h.dispatch("config/setToggleShowNotificationQuestionAction",{action:O,refuseAction:M,message:i})}return{inputFocus:u,unitCalculation:b,unitCalculationNotification:c,isValid:g,focusLoop:s,titleForm:o,handleCloseModal:V,handleSaveData:F}},emits:["handle-click-close-modal","handle-save-data-props"]},N=t(89);const U=(0,N.Z)(D,[["render",y],["__scopeId","data-v-58e89368"]]);var P=U},672:function(e,a,t){t.r(a),t.d(a,{default:function(){return J}});var l=t(3396),n=t(7139);const o=e=>((0,l.dD)("data-v-c0d67b70"),e=e(),(0,l.Cn)(),e),i={class:"container-table"},c={class:"container-table_header"},u={class:"name-table"},s=o((()=>(0,l._)("h1",null,"Đơn vị tính",-1))),d=o((()=>(0,l._)("div",{class:"prev_page-icon"},null,-1))),r=o((()=>(0,l._)("div",{class:"prev_page-text"},"Tất cả danh mục",-1))),v={class:"action-table"},g={class:"table-content"},h={class:"table-function sticky"},m={class:"search-table"},p=o((()=>(0,l._)("div",{class:"icon-search"},null,-1))),f={class:"table-function_search"},C=["href"],_={class:"table-scroll"},b={class:"table-container"},w={key:0,class:"paging-container sticky"},y={class:"total-record"},A=(0,l.Uk)(" Tổng số: "),k=(0,l.Uk)(" bản ghi "),R={class:"paging"};function L(e,a,t,o,L,S){const Z=(0,l.up)("router-link"),E=(0,l.up)("table-data"),T=(0,l.up)("input-combobox"),D=(0,l.up)("paging-page"),N=(0,l.up)("form-unit"),U=(0,l.up)("modal-form");return(0,l.wg)(),(0,l.iD)("div",i,[(0,l._)("div",c,[(0,l._)("div",u,[s,(0,l.Wm)(Z,{to:"/warehouse",class:"prev_page"},{default:(0,l.w5)((()=>[d,r])),_:1})]),(0,l._)("div",v,[(0,l._)("button",{onClick:a[0]||(a[0]=e=>o.handleOpenModal(!0)),class:"btn btn-success btn-add"}," Thêm ")])]),(0,l._)("div",g,[(0,l._)("div",h,[(0,l._)("div",m,[(0,l._)("input",{class:"input input-table_search",type:"text",onInput:a[1]||(a[1]=(...e)=>o.handleSearchData&&o.handleSearchData(...e)),placeholder:"Tìm theo đơn vị tính"},null,32),p]),(0,l._)("div",f,[(0,l._)("div",{onClick:a[2]||(a[2]=e=>o.loadData({v_Offset:o.recordSelectPaging,v_Limit:o.countRecordPageRecord,v_Where:o.keyword})),class:"action-render_table reload-table"}),(0,l._)("a",{target:"_blank",href:o.configs.baseUrl+"/UnitCalculations/export_data?keyword="+o.keyword,class:"action-render_table export-data"},null,8,C)])]),(0,l._)("div",_,[(0,l._)("div",b,[(0,l.Wm)(E,{tableList:o.recordList,columns:o.columns,actionTable:o.actionTable,handleClickActionColumTable:o.handleClickActionColumTable,isShowLoaderTable:o.isShowLoaderTable},null,8,["tableList","columns","actionTable","handleClickActionColumTable","isShowLoaderTable"])])]),0!==o.recordList.length?((0,l.wg)(),(0,l.iD)("div",w,[(0,l._)("div",y,[A,(0,l._)("strong",null,(0,n.zw)(o.totalCount),1),k]),(0,l._)("div",R,[(0,l.Wm)(T,{options:[{value:10,header:"10 bản ghi trên 1 trang"},{value:20,header:"20 bản ghi trên 1 trang"},{value:30,header:"30 bản ghi trên 1 trang"},{value:50,header:"50 bản ghi trên 1 trang"},{value:100,header:"100 bản ghi trên 1 trang"}],disabled:!0,value:"value",header:"header",noAnimation:!0,modelValue:o.countRecordPageRecord,"onUpdate:modelValue":a[3]||(a[3]=e=>o.countRecordPageRecord=e),autoPosition:!0},null,8,["modelValue"]),((0,l.wg)(),(0,l.j4)(D,{totalCount:o.totalCount,countRecordPageRecord:o.countRecordPageRecord,modelValue:o.recordSelectPaging,"onUpdate:modelValue":a[4]||(a[4]=e=>o.recordSelectPaging=e),key:o.countRecordPageRecord||o.keyword},null,8,["totalCount","countRecordPageRecord","modelValue"]))])])):(0,l.kq)("",!0)]),((0,l.wg)(),(0,l.j4)(l.lR,{to:"#app"},[o.isShowModal?((0,l.wg)(),(0,l.j4)(U,{key:0},{default:(0,l.w5)((()=>[(0,l.Wm)(N,{onHandleClickCloseModal:o.handleCloseModal,recordEdit:o.recordEdit,recordAdd:o.recordAdd},null,8,["onHandleClickCloseModal","recordEdit","recordAdd"])])),_:1})):(0,l.kq)("",!0)]))])}var S=t(3403),Z=t(6654),E=t(8334),T=t(3578),D=t(9121),N=t(4930),U=t(5257),P=t(4870),H=t(65),I=t(9468),F=t(8410),M=t(2325),O=t(6730),V=t(177),x=t(7794),W=t(7923),j={components:{TableData:S.Z,ModalForm:E.Z,InputCombobox:U.Z,FormUnit:T["default"],PagingPage:Z.Z},setup(){const{getRecordList:e,getRecordApi:a,deleteRecordApi:t,toggleActiveApi:n}=W.Z,{TypeSuccess:o,MessageSuccessDelete:i}=V.Z,{getCountRecordPageRecord:c,setCountRecordPageRecord:u}=M.Z,s=(0,l.Fl)((()=>m.state.unitCalculation.columns.filter((function(e){return e.isShow})))),{EDIT:d,DELETE:r,REPLICATION:v,STOP_USING:g}=I.Z,{WANNING_DELETE:h}=F.Z,m=(0,H.oR)(),p=(0,l.Fl)((()=>m.state.unitCalculation.recordList)),f=(0,l.Fl)((()=>m.state.unitCalculation.totalCount)),C=(0,l.Fl)((()=>m.state.unitCalculation.actionTable)),_=(0,P.iH)(null),b=(0,P.iH)(null),w=(0,P.iH)(!1),y=(0,P.iH)(!1),A=(0,P.iH)(c()),k=(0,P.iH)(0),R=(0,P.iH)("");async function L(a){a&&(await m.dispatch("unitCalculation/setFilterAction",a),y.value=!0);const t=m.state.unitCalculation.filter;await(0,x.Z)(e,t,(e=>{m.dispatch("unitCalculation/getRecordListAction",e)}),m,!0),a&&(y.value=!1)}async function S(e){await(0,x.Z)(t,e,(()=>{m.dispatch("config/addNotification",{type:o,message:i}),L()}),m)}async function Z(e,a,t){try{e==d?T(a):e==r?U(a,t):e==v?j(a):e===g&&E(a)}catch(l){console.log(l)}}async function E(e){await(0,x.Z)(n,e,(()=>{m.dispatch("unitCalculation/setToggleActiveAction",e)}),m,!0)}async function T(e){await(0,x.Z)(a,e,(e=>{_.value=e,J(d)}),m)}async function U(e,a){m.dispatch("config/setToggleShowNotificationWanningAction",{action:S,message:h+`<${a}> không?`,id:e})}async function j(e){await(0,x.Z)(a,e,(async e=>{b.value={...e},J(v)}),m)}function q(e){try{(0,N.Z)(600,$,e)}catch(a){console.log(a)}}function $(e){R.value=e.target.value,k.value=0,L({v_Offset:k.value,v_Limit:A.value,v_Where:R.value})}function J(e){try{!0===e?(_.value=null,b.value=null):e===d?b.value=null:e===v&&(_.value=null),w.value=!w.value}catch(a){console.log(a)}}function G(){try{w.value=!w.value}catch(e){console.log(e)}}(0,l.YP)(A,(e=>{u(e),L({v_Offset:0,v_Limit:A.value,v_Where:R.value})})),(0,l.YP)(k,(()=>{L({v_Offset:k.value,v_Limit:A.value,v_Where:R.value})})),(0,l.wF)((()=>{L({v_Offset:k.value,v_Limit:A.value,v_Where:R.value})}));const{handleEventCtrlAltA:z,handleEventInterruptCtrlAltA:Q}=D.Z;function Y(e){try{z(e,J,!0)}catch(a){console.log(a)}}return(0,l.bv)((()=>window.addEventListener("keydown",Y))),(0,l.bv)((()=>window.addEventListener("keyup",Q))),(0,l.Ah)((()=>window.removeEventListener("keydown",Y))),(0,l.Ah)((()=>window.removeEventListener("keyup",Q))),{recordList:p,totalCount:f,columns:s,actionTable:C,isShowModal:w,countRecordPageRecord:A,recordEdit:_,recordAdd:b,isShowLoaderTable:y,recordSelectPaging:k,keyword:R,configs:O.Z,handleOpenModal:J,handleCloseModal:G,handleClickActionColumTable:Z,handleSearchData:q,loadData:L}}},q=t(89);const $=(0,q.Z)(j,[["render",L],["__scopeId","data-v-c0d67b70"]]);var J=$}}]);
//# sourceMappingURL=672.e60c2b41.js.map