import{d as L,au as N,r,c as v,a as e,j as c,$ as S,b as n,q as h,e as s,I as o,v as _,ax as k,s as u,w,m as C,l as D,p as E,o as l,F,y,av as M}from"./index-BftOeymt.js";const W={class:"shadow-md p-4 max-w-md mx-auto h-screen"},$={class:"mt-4 flex gap-1.5 items-center border border-gray-500 rounded-md py-2 px-2"},j={class:"mt-4 flex gap-1.5 items-center border border-gray-500 rounded-md py-2 px-2"},I={class:"mt-4 flex gap-1.5 items-center border border-gray-500 rounded-md py-2 px-2 w-full"},J=["type"],T={class:"mt-4 flex gap-1.5 items-center border border-gray-500 rounded-md py-2 px-2 w-full"},q=["type"],A={key:0,class:"text-red-500 text-sm mt-2"},H={class:"flex items-center justify-center gap-5 mt-8"},K=L({__name:"Register",setup(z){const V=M(),P=N(),g=r(""),x=r(""),i=r(""),d=r(""),p=r(!1),m=r(!1),f=r(!1),R=()=>{p.value=!p.value},U=()=>{m.value=!m.value},B=async()=>{if(i.value!==d.value){y.error("Password do not match",{autoClose:1e3});return}f.value=!0,y.success("Register Successfully",{autoclose:1e3});try{await P.signUp(x.value,i.value,g.value,d.value),V.push({name:"dashboard"})}catch(b){console.error("Error Logging in:",b),y.error("Error Registering",{autoclose:1e3})}finally{f.value=!1}};return(b,t)=>(l(),v("section",W,[t[7]||(t[7]=e("div",{class:"text-center mt-20"},[e("h1",{class:"text-green-600 font-bold text-4xl"},"WasteCo"),e("p",{class:"mt-4"},[c("Welcome to "),e("strong",{class:"text-green-600"},"WasteCo"),c(" Limited")])],-1)),e("form",{class:"grid place-content-center",onSubmit:E(B,["prevent"])},[e("div",$,[e("span",null,[n(s(o),{height:"24",icon:"mdi:user",style:{color:"#00000040"},width:"24"})]),h(e("input",{id:"name","onUpdate:modelValue":t[0]||(t[0]=a=>g.value=a),class:"w-full placeholder:text-center placeholder:text-lg outline-none text-xl",placeholder:"John Doe",type:"text"},null,512),[[_,g.value]])]),e("div",j,[e("span",null,[n(s(o),{height:"24",icon:"ic:baseline-email",style:{color:"#00000040"},width:"24"})]),h(e("input",{id:"email","onUpdate:modelValue":t[1]||(t[1]=a=>x.value=a),class:"w-full placeholder:text-center placeholder:text-lg outline-none text-xl",placeholder:"John@gmail.com",type:"email"},null,512),[[_,x.value]])]),e("div",I,[e("span",null,[n(s(o),{height:"24",icon:"mdi:password",style:{color:"#00000040"},width:"24"})]),h(e("input",{id:"password","onUpdate:modelValue":t[2]||(t[2]=a=>i.value=a),type:p.value?"text":"password",class:"w-full placeholder:text-center placeholder:text-lg outline-none text-xl",placeholder:"password"},null,8,J),[[k,i.value]]),e("span",{class:"cursor-pointer",onClick:R},[p.value?(l(),u(s(o),{key:0,height:"24",icon:"mdi-light:eye",style:{color:"#00000040"},width:"24"})):(l(),u(s(o),{key:1,height:"24",icon:"mdi-light:eye-off",style:{color:"#00000040"},width:"24"}))])]),e("div",T,[e("span",null,[n(s(o),{height:"24",icon:"mdi:password",style:{color:"#00000040"},width:"24"})]),h(e("input",{id:"passwordConfirm","onUpdate:modelValue":t[3]||(t[3]=a=>d.value=a),type:m.value?"text":"password",class:"w-full placeholder:text-center placeholder:text-lg outline-none text-xl",placeholder:"confirm password"},null,8,q),[[k,d.value]]),e("span",{class:"cursor-pointer",onClick:U},[m.value?(l(),u(s(o),{key:0,height:"24",icon:"mdi-light:eye",style:{color:"#00000040"},width:"24"})):(l(),u(s(o),{key:1,height:"24",icon:"mdi-light:eye-off",style:{color:"#00000040"},width:"24"}))])]),i.value!==d.value?(l(),v("p",A," Password do not match ")):S("",!0),n(C,{class:"mb-5 text-right mt-2 text-sm",to:""},{default:w(()=>t[4]||(t[4]=[c("Forgot Password")])),_:1}),n(s(D),{class:"bg-green-500 text-white text-xl",type:"submit"},{default:w(()=>[f.value?(l(),u(s(o),{key:0,class:"animate-spin",height:"24",icon:"nrk:spinner",style:{color:"#fff"},width:"24"})):(l(),v(F,{key:1},[c("Register")],64))]),_:1})],32),e("div",H,[t[6]||(t[6]=e("p",null,"Have an account?",-1)),n(C,{"active-class":"text-blue-600",class:"underline hover:text-blue-600",to:"/auth/login"},{default:w(()=>t[5]||(t[5]=[c("Login")])),_:1})])]))}});export{K as default};
