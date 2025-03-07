import{d as $,r,b as F,o as S,c as L,f as l,w as o,F as k,h as x,e as P,D as z,g as A,i as C,t as f,B as G,j as m,G as j,_ as H,a as K,l as X,k as Y,H as q,E as J}from"./index-DpYZfZlD.js";import{A as i}from"./index-BHndqmlX.js";import{l as Q}from"./lodash-BoxlOHhu.js";const W=$({__name:"AddressSelect",setup(B,{expose:N}){const c=r([]);r([]);const b=r(""),g=r([]),R=r({}),y=r(""),V=r("");N({addressList:g,addressDetail:R});const E={value:"code",label:"name",children:"children",lazy:!0,lazyLoad:async(e,a)=>{const{level:_}=e;let D=[];console.log("node",e.value),_===0?(D=await i.ADDRESS.PROVINCE_LIST(),console.log("data",D)):_===1?D=await i.ADDRESS.CITY_LIST({province_code:e.value}):_===2?D=await i.ADDRESS.BLOCK_LIST({city_code:e.value}):_===3?(console.log("node1",e),D=await i.ADDRESS.STREET_LIST({block_code:e.value})):_===4&&(console.log("node2",e),c.value=[e.data.province_code,e.data.city_code,e.data.block_code,e.data.code].map(p=>`${p}`)),a(D.map(p=>({...p,code:`${p.code}`,isLeaf:!1,children:[],leaf:_>=3})))}},O=e=>{console.log("Selected address:",e,c.value)},T=()=>{i.ADDRESS.LIST().then(e=>{console.log("res",e),g.value=e})},U=()=>{i.ADDRESS.ADD({province_code:c.value[0],city_code:c.value[1],block_code:c.value[2],street_code:c.value[3],detail:b.value,name:y.value,phone:V.value}).then(e=>{console.log("res",e),T(),t(),c.value=[],b.value=""})},w=e=>{i.ADDRESS.CONFIG_MOD(e).then(a=>{console.log("res",a),T(),t()})},t=()=>{i.ADDRESS.CONFIG_DETAIL().then(e=>{console.log("res API.ADDRESS.CONFIG_DETAIL",e),R.value=e})},s=e=>{i.ADDRESS.DEL(e).then(a=>{console.log("res",a),T()})},n=e=>{document.body.style.cursor=e};return F(()=>{T(),t()}),(e,a)=>{const _=m("el-button"),D=m("el-card"),p=m("el-col"),h=m("el-row"),v=m("el-input");return S(),L(k,null,[l(h,null,{default:o(()=>[(S(!0),L(k,null,x(g.value,d=>(S(),P(p,{span:4},{default:o(()=>[l(D,{style:{"max-width":"480px"},class:z([R.value.selected_address_uuid===d.uuid?"addressbox-selected":"","address-card"]),onMouseenter:a[0]||(a[0]=u=>n("pointer")),onMouseleave:a[1]||(a[1]=u=>n("default")),onClick:u=>w({selected_uuid:d.uuid})},{footer:o(()=>[l(_,{type:"primary",onClick:u=>s({uuid:d.uuid}),size:"mini"},{default:o(()=>a[6]||(a[6]=[A("删除地址")])),_:2},1032,["onClick"])]),default:o(()=>[C("p",null,f(d.full_address),1),C("p",null,f(d.name),1),C("p",null,f(d.phone),1)]),_:2},1032,["class","onClick"])]),_:2},1024))),256))]),_:1}),l(h,null,{default:o(()=>[l(p,{span:4},{default:o(()=>[l(G(j),{modelValue:c.value,"onUpdate:modelValue":a[2]||(a[2]=d=>c.value=d),props:E,onChange:O,width:"100px",placeholder:"请选择地址"},null,8,["modelValue"])]),_:1}),l(p,{span:4,class:"detail-address"},{default:o(()=>[l(v,{modelValue:b.value,"onUpdate:modelValue":a[3]||(a[3]=d=>b.value=d),placeholder:"请输入详细地址 "},null,8,["modelValue"])]),_:1}),l(p,{span:4,class:"detail-address"},{default:o(()=>[l(v,{modelValue:y.value,"onUpdate:modelValue":a[4]||(a[4]=d=>y.value=d),placeholder:"请输入姓名 "},null,8,["modelValue"])]),_:1}),l(p,{span:4,class:"detail-address"},{default:o(()=>[l(v,{modelValue:V.value,"onUpdate:modelValue":a[5]||(a[5]=d=>V.value=d),placeholder:"请输入电话 "},null,8,["modelValue"])]),_:1}),l(p,{span:4,class:"detail-address-add"},{default:o(()=>[l(_,{type:"primary",onClick:U},{default:o(()=>a[7]||(a[7]=[A("添加地址")])),_:1})]),_:1})]),_:1})],64)}}}),Z=H(W,[["__scopeId","data-v-d71a39e1"]]),ee={class:"about"},le={class:"address-box"},oe={class:"shop-name"},ae={class:"cart-item"},de=$({__name:"CartView",setup(B){const N=X();Y(),r({}),r(1);const c=r([]),b=r([]),g=r(null),R=r("Ordinary Transportation"),y=r({}),V=r(!1),E=()=>{i.CART.LIST().then(t=>{console.log("res",t),c.value=t,b.value=Q.groupBy(t,"name"),console.log("multiCartList.value",b.value)})},O=()=>{const t=q.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"});console.log("addressSelectRef",g.value.addressDetail);const s=g.value.addressDetail.selected_address_uuid,n=g.value.addressList;if(console.log("address_uuid",s),console.log("addressSelectRef.value.addressList",g.value.addressList),!n.filter(e=>e.uuid===s).length){J.info("请选择收货地址");return}i.ORDER.ADD({address_uuid:s,use_point:V.value}).then(e=>{console.log("res",e.pay_uuid),t.close(),N.push(`/pay/${e.pay_uuid}`)}).catch(()=>{t.close()})},T=(t,s,n,e)=>{console.log("New value:",t),console.log("Old value:",event),console.log("UUID:",n),console.log("Product UUID:",e),console.log("onNumberChange"),console.log("curVal, oldVal",t,s,n,e),i.CART.ADD_X({uuid:n,product_uuid:e,amount:t}).then(a=>{console.log("res",a),E()})},U=t=>{console.log("onDelCart"),console.log("uuid",t),i.CART.DEL({product_uuid:t}).then(s=>{console.log("res",s),E()})},w=()=>{i.POINT.DETAIL().then(t=>{console.log("res",t),y.value=t})};return F(()=>{E(),w()}),(t,s)=>{const n=m("el-col"),e=m("el-row"),a=m("el-input-number"),_=m("el-button"),D=m("el-radio-button"),p=m("el-radio-group"),h=m("el-switch");return S(),L("div",ee,[C("div",le,[l(Z,{ref_key:"addressSelectRef",ref:g},null,512)]),(S(!0),L(k,null,x(b.value,(v,d)=>(S(),L("div",null,[C("p",oe,f(decodeURIComponent(d)),1),(S(!0),L(k,null,x(v,u=>(S(),L("div",ae,[l(e,null,{default:o(()=>[l(n,null,{default:o(()=>[A(f(decodeURIComponent(u.title)),1)]),_:2},1024)]),_:2},1024),l(e,null,{default:o(()=>[l(n,null,{default:o(()=>[l(a,{modelValue:u.amount,"onUpdate:modelValue":I=>u.amount=I,min:1,max:u.inventory,onChange:(I,M)=>T(I,M,u.uuid,u.product_uuid)},null,8,["modelValue","onUpdate:modelValue","max","onChange"])]),_:2},1024)]),_:2},1024),l(e,null,{default:o(()=>[l(n,null,{default:o(()=>[C("p",null,"¥ "+f(Number.parseFloat(u.price/100).toFixed(2)),1)]),_:2},1024)]),_:2},1024),l(e,null,{default:o(()=>[l(n,null,{default:o(()=>[C("p",null,f(u.amount)+"件",1)]),_:2},1024)]),_:2},1024),l(e,null,{default:o(()=>[l(n,null,{default:o(()=>[l(_,{type:"danger",onClick:I=>U(u.product_uuid)},{default:o(()=>s[3]||(s[3]=[A("删除")])),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]))),256)),C("div",null,[l(e,null,{default:o(()=>[l(n,null,{default:o(()=>[A(f({cn:"运输方式",en:"Mode Of Transportation"}[t.$store.state.lang]),1)]),_:1}),l(n,null,{default:o(()=>[l(p,{modelValue:R.value,"onUpdate:modelValue":s[0]||(s[0]=u=>R.value=u),size:"Ordinary Transportation"},{default:o(()=>[l(D,{label:{cn:"一般运输",en:"Ordinary Transportation"}[t.$store.state.lang],value:"Ordinary Transportation"},null,8,["label"]),l(D,{label:{cn:"空运",en:"Air Transport"}[t.$store.state.lang],value:"Air Transport"},null,8,["label"])]),_:1},8,["modelValue"])]),_:1})]),_:1})])]))),256)),C("div",null,[l(e,null,{default:o(()=>[l(n,null,{default:o(()=>[A(" 商品总数："+f(c.value.length)+"件 ",1)]),_:1}),l(n,null,{default:o(()=>[C("p",null,"¥ "+f(Number.parseFloat(c.value.reduce((v,d)=>v+d.price*d.amount,0)/100).toFixed(2)),1)]),_:1}),l(n,null,{default:o(()=>[A(" 积分总数： "+f(y.value.point)+"（每100积分抵用1元，每下单100元得100积分） ",1)]),_:1}),y.value.point>0?(S(),P(n,{key:0},{default:o(()=>[l(h,{modelValue:V.value,"onUpdate:modelValue":s[1]||(s[1]=v=>V.value=v),disabled:y.value.point<=0},null,8,["modelValue","disabled"]),A(" "+f(V.value?"使用积分":"不使用积分"),1)]),_:1})):K("",!0),l(n,{class:"pay-button"},{default:o(()=>[l(_,{type:"primary",onClick:s[2]||(s[2]=v=>O()),disabled:!c.value.length||!g.value.addressList.filter(v=>v.uuid===g.value.addressDetail.selected_address_uuid).length},{default:o(()=>s[4]||(s[4]=[A("立即支付")])),_:1},8,["disabled"])]),_:1})]),_:1})])])}}});export{de as default};
