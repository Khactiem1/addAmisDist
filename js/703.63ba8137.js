"use strict";(self["webpackChunkquanlynhanvien_amis_ketoan"]=self["webpackChunkquanlynhanvien_amis_ketoan"]||[]).push([[703],{8687:function(e,l,a){var o=a(7877);const t=e=>o.Z.post("/Employees/fitter",e),i=e=>o.Z.post("/Employees",e),n=e=>o.Z.get(`/Employees/${e}`),d=e=>o.Z.put(`/Employees/${e.employeeID}`,e),m=e=>o.Z["delete"](`/Employees/${e}`),u=()=>o.Z.get("/Employees/next_value"),s=e=>o.Z.post("/Employees/bulk_delete",e),c=()=>o.Z.get("/Employees/export_data"),r=e=>o.Z.get(`/Employees/ToggleActive/${e}`);l["Z"]={exportDataApi:c,deleteMultipleApi:s,nextValue:u,deleteRecordApi:m,editRecordApi:d,getRecordList:t,createRecordApi:i,getRecordApi:n,toggleActiveApi:r}},8703:function(e,l,a){a.r(l),a.d(l,{default:function(){return Ne}});var o=a(3396),t=a(7139);const i=e=>((0,o.dD)("data-v-411b4a5d"),e=e(),(0,o.Cn)(),e),n={class:"modal-body"},d={class:"form"},m={class:"form-header"},u={class:"modal-title"},s={class:"form-header_checkbox"},c={class:"check form-checkbox_item"},r=i((()=>(0,o._)("div",{class:"info-checkbox"},"Là khách hàng",-1))),p={class:"check form-checkbox_item"},v=i((()=>(0,o._)("div",{class:"info-checkbox"},"Là nhà cung cấp",-1))),y={class:"modal-close"},f=i((()=>(0,o._)("div",{class:"modal-icon modal-icon_help"},null,-1))),h={class:"form-container"},g={class:"form-detail flex-center"},_={class:"form-item"},b={class:"form-item_input"},V={class:"form-group ms-small"},k={class:"form-group ms-big"},C={class:"form-group"},N={class:"form-group"},E={class:"form-item"},A={class:"form-item_input"},I={class:"form-group ms-small"},x={style:{"padding-left":"16px"},class:"form-group ms-big"},D=i((()=>(0,o._)("label",null,"Giới tính",-1))),w={class:"input-radio_item"},Z={class:"form-item_input"},F={class:"form-group ms-big"},B={class:"form-group ms-small"},O={class:"form-group"},U={class:"form-detail"},L={class:"form-group"},S={class:"form-item flex-center"},T={class:"form-group"},W={class:"form-group"},M={class:"form-group"},P={class:"form-item flex-center"},R={class:"form-group"},H={class:"form-group"},q={class:"form-group"},$={class:"form-action"},J={class:"form-action_container"},Y={class:"form-action_item"},j={class:"form-action_item"},z={ref:"focusLoop",class:"focus-loop"};function G(e,l,a,i,G,K){const Q=(0,o.up)("input-checkbox"),X=(0,o.up)("input-default"),ee=(0,o.up)("input-combobox"),le=(0,o.up)("input-calendar"),ae=(0,o.up)("input-radio");return(0,o.wg)(),(0,o.iD)("div",n,[(0,o._)("div",d,[(0,o._)("div",m,[(0,o._)("div",u,[(0,o._)("h2",null,(0,t.zw)(i.titleForm),1),(0,o._)("div",s,[(0,o._)("div",c,[(0,o.Wm)(Q,null,{default:(0,o.w5)((()=>[r])),_:1})]),(0,o._)("div",p,[(0,o.Wm)(Q,null,{default:(0,o.w5)((()=>[v])),_:1})])])]),(0,o._)("div",y,[f,(0,o._)("div",{onClick:l[0]||(l[0]=e=>i.handleCloseModal(!1)),class:"modal-icon modal-icon_close"})])]),(0,o._)("div",h,[(0,o._)("div",g,[(0,o._)("div",_,[(0,o._)("div",b,[(0,o._)("div",V,[(0,o.Wm)(X,{focus:!0,required:!0,type:"text",maxLength:20,messageValid:i.employeeNotification.validateCode,label:"Mã",class:(0,t.C_)({"is-valid":i.isValid&&""==i.employee.employeeCode}),modelValue:i.employee.employeeCode,"onUpdate:modelValue":l[1]||(l[1]=e=>i.employee.employeeCode=e),ref:"inputFocus"},null,8,["messageValid","class","modelValue"])]),(0,o._)("div",k,[(0,o.Wm)(X,{required:!0,type:"text",maxLength:80,messageValid:i.employeeNotification.validateName,label:"Tên",class:(0,t.C_)({"is-valid":i.isValid&&""==i.employee.employeeName}),modelValue:i.employee.employeeName,"onUpdate:modelValue":l[2]||(l[2]=e=>i.employee.employeeName=e)},null,8,["messageValid","class","modelValue"])])]),(0,o._)("div",C,[(0,o.Wm)(ee,{options:i.optionUnit,value:"unitID",header:"unitName",label:"Đơn vị",labelCode:"Mã đơn vị",labelName:"Tên đơn vị",required:!0,headerCode:"unitCode",messageValid:i.employeeNotification.validateUnit,class:(0,t.C_)({"is-valid":i.isValid&&!i.employee.unitID}),modelValue:i.employee.unitID,"onUpdate:modelValue":l[3]||(l[3]=e=>i.employee.unitID=e)},null,8,["options","messageValid","class","modelValue"])]),(0,o._)("div",N,[(0,o.Wm)(X,{type:"text",label:"Chức danh",modelValue:i.employee.employeeTitle,"onUpdate:modelValue":l[4]||(l[4]=e=>i.employee.employeeTitle=e)},null,8,["modelValue"])])]),(0,o._)("div",E,[(0,o._)("div",A,[(0,o._)("div",I,[(0,o.Wm)(le,{label:"Ngày sinh",maxDate:new Date,messageValid:i.employeeNotification.validateDateOfBirth,modelValue:i.employee.dateOfBirth,"onUpdate:modelValue":l[5]||(l[5]=e=>i.employee.dateOfBirth=e)},null,8,["maxDate","messageValid","modelValue"])]),(0,o._)("div",x,[D,(0,o._)("div",w,[(0,o.Wm)(ae,{label:"Nam",value:i.eNum.MALE,modelValue:i.employee.gender,"onUpdate:modelValue":l[6]||(l[6]=e=>i.employee.gender=e),modelModifiers:{number:!0}},null,8,["value","modelValue"]),(0,o.Wm)(ae,{label:"Nữ",value:i.eNum.FEMALE,modelValue:i.employee.gender,"onUpdate:modelValue":l[7]||(l[7]=e=>i.employee.gender=e),modelModifiers:{number:!0}},null,8,["value","modelValue"]),(0,o.Wm)(ae,{label:"Khác",value:i.eNum.OTHER,modelValue:i.employee.gender,"onUpdate:modelValue":l[8]||(l[8]=e=>i.employee.gender=e),modelModifiers:{number:!0}},null,8,["value","modelValue"])])])]),(0,o._)("div",Z,[(0,o._)("div",F,[(0,o.Wm)(X,{type:"text",label:"Số CMND",toolTip:"Số chứng minh nhân dân",modelValue:i.employee.identityCard,"onUpdate:modelValue":l[9]||(l[9]=e=>i.employee.identityCard=e)},null,8,["modelValue"])]),(0,o._)("div",B,[(0,o.Wm)(le,{label:"Ngày cấp",maxDate:new Date,messageValid:i.employeeNotification.validateDayForIdentity,modelValue:i.employee.dayForIdentity,"onUpdate:modelValue":l[10]||(l[10]=e=>i.employee.dayForIdentity=e)},null,8,["maxDate","messageValid","modelValue"])])]),(0,o._)("div",O,[(0,o.Wm)(X,{type:"text",label:"Nơi cấp",modelValue:i.employee.grantAddressIdentity,"onUpdate:modelValue":l[11]||(l[11]=e=>i.employee.grantAddressIdentity=e)},null,8,["modelValue"])])])]),(0,o._)("div",U,[(0,o._)("div",L,[(0,o.Wm)(X,{type:"text",label:"Địa chỉ",modelValue:i.employee.employeeAddress,"onUpdate:modelValue":l[12]||(l[12]=e=>i.employee.employeeAddress=e)},null,8,["modelValue"])]),(0,o._)("div",S,[(0,o._)("div",T,[(0,o.Wm)(X,{type:"text",label:"ĐT di động",toolTip:"Điện thoại di động",isPhone:!0,messageValid:i.employeeNotification.validatePhoneNumber,modelValue:i.employee.phoneNumber,"onUpdate:modelValue":l[13]||(l[13]=e=>i.employee.phoneNumber=e)},null,8,["messageValid","modelValue"])]),(0,o._)("div",W,[(0,o.Wm)(X,{type:"text",label:"ĐT cố định",isPhone:!0,toolTip:"Điện thoại cố định",messageValid:i.employeeNotification.validateLandlinePhone,modelValue:i.employee.landlinePhone,"onUpdate:modelValue":l[14]||(l[14]=e=>i.employee.landlinePhone=e)},null,8,["messageValid","modelValue"])]),(0,o._)("div",M,[(0,o.Wm)(X,{type:"text",label:"Email",isEmail:!0,messageValid:i.employeeNotification.validateEmail,modelValue:i.employee.employeeEmail,"onUpdate:modelValue":l[15]||(l[15]=e=>i.employee.employeeEmail=e)},null,8,["messageValid","modelValue"])])]),(0,o._)("div",P,[(0,o._)("div",R,[(0,o.Wm)(X,{type:"text",label:"Tài khoản ngân hàng",modelValue:i.employee.bankAccount,"onUpdate:modelValue":l[16]||(l[16]=e=>i.employee.bankAccount=e)},null,8,["modelValue"])]),(0,o._)("div",H,[(0,o.Wm)(X,{type:"text",label:"Tên ngân hàng",modelValue:i.employee.nameBank,"onUpdate:modelValue":l[17]||(l[17]=e=>i.employee.nameBank=e)},null,8,["modelValue"])]),(0,o._)("div",q,[(0,o.Wm)(X,{type:"text",label:"Chi nhánh",modelValue:i.employee.branchBank,"onUpdate:modelValue":l[18]||(l[18]=e=>i.employee.branchBank=e)},null,8,["modelValue"])])])])]),(0,o._)("div",$,[(0,o._)("div",J,[(0,o._)("div",Y,[(0,o._)("button",{onClick:l[19]||(l[19]=e=>i.handleSaveData(!0)),style:{"margin-right":"9px"},class:"btn modal-icon btn-form_cat"}," Cất "),(0,o._)("button",{onClick:l[20]||(l[20]=e=>i.handleSaveData(!1)),class:"btn btn-success modal-icon btn-form_cat-them"}," Cất và thêm ")]),(0,o._)("div",j,[(0,o._)("button",{onClick:l[21]||(l[21]=e=>i.handleCloseModal(!0)),class:"btn"}," Huỷ ")])])]),(0,o._)("button",z,null,512)])])}var K=a(4870),Q=a(9447),X=a(7151),ee=a(5734),le=a(5257);const ae=e=>((0,o.dD)("data-v-4acc0d2d"),e=e(),(0,o.Cn)(),e),oe=["checked","value","tabindex"],te={class:"info"},ie=ae((()=>(0,o._)("span",{class:"input-radio_focus"},null,-1)));function ne(e,l,a,i,n,d){return(0,o.wg)(),(0,o.iD)("label",{class:(0,t.C_)(["input-radio_check",{active:d.isChecked}])},[(0,o._)("input",{type:"radio",checked:d.isChecked,value:a.value,tabindex:a.tab,onChange:l[0]||(l[0]=l=>e.$emit("update:modelValue",l.target.value))},null,40,oe),(0,o._)("span",te,(0,t.zw)(a.label),1),ie],2)}var de={props:{label:{type:String,default:"",required:!0},modelValue:{default:""},value:{default:void 0},tab:{}},computed:{isChecked(){return this.modelValue==this.value}}},me=a(89);const ue=(0,me.Z)(de,[["render",ne],["__scopeId","data-v-4acc0d2d"]]);var se=ue,ce=a(65),re=a(177),pe=a(8410),ve=a(9176),ye=a(2325),fe=a(4419),he=a(7794),ge=a(8687),_e=a(7877);const be=()=>_e.Z.get("/Units");var Ve={getRecordList:be},ke={components:{InputCheckbox:Q.Z,InputDefault:ee.Z,InputCombobox:le.Z,InputRadio:se,InputCalendar:X.Z},props:{recordEdit:{type:Object},recordAdd:{type:Object}},setup(e,l){const{nextValue:a,createRecordApi:t,editRecordApi:i}=ge.Z,n=(0,K.iH)(""),{formatDateYYYYMMDD:d}=ye.Z,{QUESTION_DATA_CHANGE:m,employeeNotification:u}=pe.Z,s=(0,K.iH)(null),c=(0,K.iH)(null),r=(0,K.iH)(!0),{recordEdit:p,recordAdd:v}=(0,K.BK)(e),y=(0,K.iH)(!1),f=(0,ce.oR)(),{TypeSuccess:h,MessageSuccessAdd:g,MessageSuccessEdit:_,AddFormEmployee:b,EditFormEmployee:V}=re.Z,{validateEmail:k,validatePhone:C}=ve.Z,N=(0,K.iH)({employeeName:"",gender:re.Z.MALE,dateOfBirth:null,identityCard:"",employeeTitle:"",unitID:"",bankAccount:"",nameBank:"",branchBank:"",dayForIdentity:null,grantAddressIdentity:"",phoneNumber:"",landlinePhone:"",employeeEmail:"",employeeAddress:"",employeeCode:""}),E=(0,K.iH)(null),A=(0,K.iH)({employeeName:"",gender:re.Z.MALE,dateOfBirth:null,identityCard:"",employeeTitle:"",unitID:"",bankAccount:"",nameBank:"",branchBank:"",dayForIdentity:null,grantAddressIdentity:"",phoneNumber:"",landlinePhone:"",employeeEmail:"",employeeAddress:"",employeeCode:""}),I=(0,K.iH)([]);(0,o.wF)((async()=>{n.value=b,await(0,he.Z)(Ve.getRecordList,null,(async e=>{I.value=e}),f,!0),p.value?(n.value=V,N.value={...p.value,dateOfBirth:d(p.value.dateOfBirth),dayForIdentity:d(p.value.dayForIdentity)},r.value=!1,E.value={...p.value,dateOfBirth:d(p.value.dateOfBirth),dayForIdentity:d(p.value.dayForIdentity)}):(n.value=b,v.value&&(N.value={...v.value,dateOfBirth:d(v.value.dateOfBirth),dayForIdentity:d(v.value.dayForIdentity)}),await(0,he.Z)(a,null,(e=>{N.value.employeeCode=e,A.value.employeeCode=e}),f,!0))}));const x=function(){s.value.tagInput.focus()},{handleEventFormCtrlShiftS:D,handleEventInterruptFormCtrlShiftS:w}=fe.Z;function Z(e){D(e,T,null,U,!1,U,!0)}function F(){return[""===N.value.employeeCode.trim()?u.validateCode:null,""===N.value.employeeName.trim()?u.validateName:null,N.value.unitID?null:u.validateUnit,N.value.dateOfBirth&&new Date(N.value.dateOfBirth)>new Date?u.validateDateOfBirth:null,N.value.dayForIdentity&&new Date(N.value.dayForIdentity)>new Date?u.validateDayForIdentity:null,!1===C(N.value.phoneNumber)&&""!=N.value.phoneNumber&&N.value.phoneNumber?u.validatePhoneNumber:null,!1===C(N.value.landlinePhone)&&""!=N.value.landlinePhone&&N.value.landlinePhone?u.validateLandlinePhone:null,!1===k(N.value.employeeEmail)&&""!=N.value.employeeEmail&&N.value.employeeEmail?u.validateEmail:null].filter((e=>{if(e)return!0}))}(0,o.bv)((()=>c.value.addEventListener("focus",x))),(0,o.bv)((()=>window.addEventListener("keydown",Z))),(0,o.bv)((()=>window.addEventListener("keyup",w))),(0,o.Ah)((()=>window.removeEventListener("focus",x))),(0,o.Ah)((()=>window.removeEventListener("keydown",Z))),(0,o.Ah)((()=>window.removeEventListener("keyup",w)));const B=(0,K.iH)(!1);async function O(e){await(0,he.Z)(e,{...N.value,dateOfBirth:""===N.value.dateOfBirth?null:N.value.dateOfBirth,dayForIdentity:""===N.value.dayForIdentity?null:N.value.dayForIdentity},(async e=>{f.dispatch("config/addNotification",{type:h,message:r.value?g:_}),B.value=!1,r.value?f.dispatch("employee/addRecordAction",{...N.value,employeeID:e}):(r.value=!0,f.dispatch("employee/editRecordAction",{...N.value,employeeID:e}))}),f,!1,(()=>{B.value=!0}))}async function U(e){const o=F();o.length>0?(y.value=!0,f.dispatch("config/setToggleShowNotificationErrorAction",o)):(r.value?await O(t):await O(i),!0===e&&!1===B.value?l.emit("handle-click-close-modal"):!1===B.value&&(n.value=b,y.value=!1,N.value={...A.value},await(0,he.Z)(a,null,(e=>{N.value.employeeCode=e}),f,!0),s.value.tagInput.focus()))}function L(){l.emit("handle-click-close-modal")}function S(){U(!0)}function T(e){e?l.emit("handle-click-close-modal"):r.value?JSON.stringify(N.value)!=JSON.stringify(A.value)?W():l.emit("handle-click-close-modal"):!1===r.value&&(JSON.stringify(N.value)!=JSON.stringify(E.value)?W():l.emit("handle-click-close-modal"))}function W(){f.dispatch("config/setToggleShowNotificationQuestionAction",{action:S,refuseAction:L,message:m})}return{inputFocus:s,employee:N,employeeNotification:u,eNum:re.Z,isValid:y,focusLoop:c,titleForm:n,optionUnit:I,handleCloseModal:T,handleSaveData:U}},emits:["handle-click-close-modal"]};const Ce=(0,me.Z)(ke,[["render",G],["__scopeId","data-v-411b4a5d"]]);var Ne=Ce}}]);
//# sourceMappingURL=703.63ba8137.js.map