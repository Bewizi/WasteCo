import{d as f,r as d,c as m,b as x,a as s,k as p,n as v,p as b,q as l,v as r,s as y,e as w,I as k,F as u,j as h,o as i,x as j,y as c}from"./index-BftOeymt.js";const V={class:"max-w-7xl mx-auto"},M={class:"max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8"},S={class:"mt-12 sm:mt-16 md:mt-0"},q={class:"mt-1"},B={class:"mt-1"},C={class:"mt-1"},_={class:"mt-1"},N=["disabled"],I=f({__name:"ContactView",setup(U){const t=d({name:"",email:"",subject:"",message:""}),o=d(!1),g=async()=>{o.value=!0;try{const{data:n,error:e}=await j.from("contactform").insert([t.value]);if(e)throw e;c.success("Message sent successfully",{autoclose:1e3}),t.value={name:"",email:"",subject:"",message:""}}catch(n){console.error("Error submitting form:",n),c.error("There was an error submitting your message. Please try again.")}o.value=!1};return(n,e)=>(i(),m(u,null,[x(p),s("section",V,[s("section",M,[e[9]||(e[9]=v('<section><h2 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">Contact Information</h2><div class="mt-3"><p class="text-lg text-gray-500"> Have questions? We&#39;re here to help. Send us a message and we&#39;ll respond as soon as possible. </p></div><div class="mt-9"><div class="flex"><div class="flex-shrink-0"><svg class="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></div><div class="ml-3 text-base text-gray-500"><p>+234 90-648-097-40</p></div></div><div class="mt-6 flex"><div class="flex-shrink-0"><svg class="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></div><div class="ml-3 text-base text-gray-500"><p>support@wasteco.com</p></div></div></div></section>',1)),s("section",S,[e[8]||(e[8]=s("h2",{class:"text-2xl font-extrabold text-gray-900 sm:text-3xl"},"Send us a message",-1)),s("form",{class:"mt-9 grid grid-cols-1 gap-y-6",onSubmit:b(g,["prevent"])},[s("div",null,[e[4]||(e[4]=s("label",{class:"block text-sm font-medium text-gray-700",for:"name"},"Name",-1)),s("div",q,[l(s("input",{id:"name","onUpdate:modelValue":e[0]||(e[0]=a=>t.value.name=a),class:"py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md",name:"name",required:"",type:"text"},null,512),[[r,t.value.name]])])]),s("div",null,[e[5]||(e[5]=s("label",{class:"block text-sm font-medium text-gray-700",for:"email"},"Email",-1)),s("div",B,[l(s("input",{id:"email","onUpdate:modelValue":e[1]||(e[1]=a=>t.value.email=a),class:"py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md",name:"email",required:"",type:"email"},null,512),[[r,t.value.email]])])]),s("div",null,[e[6]||(e[6]=s("label",{class:"block text-sm font-medium text-gray-700",for:"subject"},"Subject",-1)),s("div",C,[l(s("input",{id:"subject","onUpdate:modelValue":e[2]||(e[2]=a=>t.value.subject=a),class:"py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md",name:"subject",required:"",type:"text"},null,512),[[r,t.value.subject]])])]),s("div",null,[e[7]||(e[7]=s("label",{class:"block text-sm font-medium text-gray-700",for:"message"},"Message",-1)),s("div",_,[l(s("textarea",{id:"message","onUpdate:modelValue":e[3]||(e[3]=a=>t.value.message=a),class:"py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md",name:"message",required:"",rows:"4"},null,512),[[r,t.value.message]])])]),s("div",null,[s("button",{disabled:o.value,class:"w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",type:"submit"},[o.value?(i(),y(w(k),{key:0,class:"animate-spin",height:"24",icon:"nrk:spinner",style:{color:"#fff"},width:"24"})):(i(),m(u,{key:1},[h(" Send Message ")],64))],8,N)])],32)])])])],64))}});export{I as default};
