(this.webpackJsonpcakegallary=this.webpackJsonpcakegallary||[]).push([[0],{109:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(15),l=a.n(c),r=(a(47),a(48),a(5)),n=a(4),i=a(13),o=a(0);var d=Object(i.b)((function(e,t){return{loginstatus:e.Showlogin.loginflag,name:e.Showlogin.user&&e.Showlogin.user.name}}))((function(e){console.log(e);var t=Object(n.f)();return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top ",children:[e.name&&Object(o.jsxs)("a",{href:"#",className:"navbar-brand",children:["wellcome ",e.name]}),Object(o.jsx)("button",{className:"navbar-toggler nav ",type:"button ","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(o.jsx)("li",{className:"nav-item active",children:Object(o.jsx)(r.b,{to:"/",className:"nav-link  my-sm-0",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.b,{to:"/Product",className:"nav-link  my-sm-0",children:"Product"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.b,{to:"/Addcackedetails",className:"nav-link  my-sm-0",children:"Add Cake Detail"})})]}),Object(o.jsxs)("form",{className:"form-inline my-2 my-lg-0",children:[Object(o.jsx)("input",{id:"inputsearch",className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(o.jsx)("button",{onClick:function(e){var a=document.getElementById("inputsearch").value;if(a){var s="/search?q="+a;t.push(s)}else t.push("./");e.preventDefault()},className:"btn btn-primary my-2 my-sm-0",type:"submit",children:"Search"})]}),!1===e.loginstatus&&Object(o.jsx)(r.b,{to:"/Login",className:"btn btn-primary ml-lg-2 my-sm-0 ml-sm-0 ml-md-0",style:{color:"white",textDecoration:"none"},children:"Login"}),!0===e.loginstatus&&Object(o.jsxs)("form",{children:[Object(o.jsx)(r.b,{to:"/",onClick:function(e){e.preventDefault(),localStorage.clear(),window.location.reload(),t.push("./")},className:"btn btn-danger ml-lg-2 my-sm-0",style:{color:"white",textDecoration:"none"},children:"logout"}),Object(o.jsx)(r.b,{to:"/cartitem",className:"btn btn-primary  ml-2 my-sm-0",style:{color:"white",textDecoration:"none"},children:"Cart"})]})]})]})})})),j="ecommerce.jpg";function m(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{id:"carouselExampleCaptions",className:"carousel slide","data-ride":"carousel",children:[Object(o.jsxs)("ol",{className:"carousel-indicators",children:[Object(o.jsx)("li",{"data-target":"#carouselExampleCaptions","data-slide-to":"0",className:"active"}),Object(o.jsx)("li",{"data-target":"#carouselExampleCaptions","data-slide-to":"1"}),Object(o.jsx)("li",{"data-target":"#carouselExampleCaptions","data-slide-to":"2"})]}),Object(o.jsxs)("div",{className:"carousel-inner",children:[Object(o.jsxs)("div",{className:"carousel-item active",children:[Object(o.jsx)("img",{src:j,className:"d-block w-100",alt:"..."}),Object(o.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(o.jsx)("h5",{children:"First slide label"}),Object(o.jsx)("p",{children:"Nulla vitae elit libero, a pharetra augue mollis interdum."})]})]}),Object(o.jsxs)("div",{className:"carousel-item",children:[Object(o.jsx)("img",{src:j,className:"d-block w-100",alt:"..."}),Object(o.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(o.jsx)("h5",{children:"Second slide label"}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]}),Object(o.jsxs)("div",{className:"carousel-item",children:[Object(o.jsx)("img",{src:j,className:"d-block w-100",alt:"..."}),Object(o.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(o.jsx)("h5",{children:"Third slide label"}),Object(o.jsx)("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."})]})]})]}),Object(o.jsxs)("a",{className:"carousel-control-prev",href:"#carouselExampleCaptions",role:"button","data-slide":"prev",children:[Object(o.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(o.jsx)("span",{className:"sr-only",children:"Previous"})]}),Object(o.jsxs)("a",{className:"carousel-control-next",href:"#carouselExampleCaptions",role:"button","data-slide":"next",children:[Object(o.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(o.jsx)("span",{className:"sr-only",children:"Next"})]})]})})}var b=a(9),h=a(6),u=a.n(h);function p(e){var t=Object(n.f)();return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:" rounded-bottom shadow  bg-light m-3 gallary_img",style:{width:"20rem"},children:[Object(o.jsx)("img",{src:e.data.image,className:"card-img-top",alt:"...",style:{maxHeight:"15rem"}}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h5",{className:"card-title",children:e.data.name}),Object(o.jsx)("p",{className:"card-text",children:e.data.description}),Object(o.jsx)("button",{className:"btn btn-primary",onClick:function(a){var s="/Cakedetails?q="+e.data.cakeid;t.push(s)},children:"Cake Details"})]})]})})}var x=a(14),O=a.n(x);var f=Object(i.b)((function(e,t){return{allcakeslist:e.Addcakedetail.cakelist}}))((function(e){var t=Object(s.useState)([]),a=Object(b.a)(t,2),c=a[0],l=a[1],r=Object(s.useState)(!0),n=Object(b.a)(r,2),i=n[0],d=n[1];return Object(s.useEffect)((function(){if(e.allcakeslist)l(e.allcakeslist),d(!1);else{u()({method:"get",url:"https://apifromashu.herokuapp.com/api/allcakes"}).then((function(t){l(t.data.data),d(!1),e.dispatch({type:"GET_ALL_CAKE",payload:t.data.data})}),(function(e){console.log(e)}))}}),[]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"container-fluid  p-5 ",children:[i&&Object(o.jsx)(O.a,{className:"w-100  d-flex justify-content-center align-items-center",type:"ThreeDots",color:"#00BFFF",height:80,width:80}),Object(o.jsx)("div",{class:"d-flex justify-content-around flex-wrap flex-row w-100",children:c.map((function(e,t){return Object(o.jsx)(p,{data:e},t)}))})]})})}));function g(e){return console.log(e.checklogindone),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(d,{}),Object(o.jsx)(m,{}),Object(o.jsx)(f,{history:e.history})]})}function v(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"container bg-dark my-1",children:Object(o.jsx)("div",{className:"d-flex text-light",children:Object(o.jsxs)("div",{className:"w-75 mx-auto ",children:[Object(o.jsx)("div",{className:"text-center my-5",children:Object(o.jsx)("h1",{className:"font-weight-bold",children:"Add Cake Details"})}),Object(o.jsxs)("form",{children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{for:"exampleInputEmail1",children:"Product Image :"}),Object(o.jsxs)("div",{className:"input-group",children:[Object(o.jsxs)("div",{className:"custom-file",children:[Object(o.jsx)("input",{type:"file",name:"files[]",className:"custom-file-input form-control",id:"customFile"}),Object(o.jsx)("label",{className:"custom-file-label",for:"customFile"})]}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary ml-2",children:"Upload"})]})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{for:"exampleInputEmail1",children:"Cake Name :"}),Object(o.jsx)("input",{type:"text",className:"form-control border-0",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter your cake name"})]}),Object(o.jsx)("div",{className:"form-group mt-5",children:Object(o.jsxs)("div",{className:"input-group",children:[Object(o.jsx)("label",{for:"exampleInputEmail1",children:"Price :"}),Object(o.jsx)("input",{type:"number",className:"form-control rounded mx-2",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter your cake price"}),Object(o.jsx)("label",{for:"exampleInputEmail1",children:"Weight :"}),Object(o.jsx)("input",{type:"number",className:"form-control rounded mx-2",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter your cake weight"}),Object(o.jsx)("span",{className:"align-items-center justify-content-center",children:"Kg"})]})}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{for:"exampleInputPassword1",children:"Address :"}),Object(o.jsx)("input",{type:"text",className:"form-control",id:"exampleInputPassword1",placeholder:"Enter your address"})]}),Object(o.jsx)("div",{className:"form-group  mt-5",children:Object(o.jsxs)("div",{className:"input-group",children:[Object(o.jsx)("label",{for:"exampleFormControlSelect2",children:"Type :"}),Object(o.jsxs)("select",{className:"form-control rounded ml-2 ",id:"exampleFormControlSelect2",children:[Object(o.jsx)("option",{children:"Select cake type"}),Object(o.jsx)("option",{children:"Friut"}),Object(o.jsx)("option",{children:"choclate"}),Object(o.jsx)("option",{children:"lava"}),Object(o.jsx)("option",{children:"white forest"})]}),Object(o.jsxs)("div",{className:"form-check form-check-inline ml-5",children:[Object(o.jsx)("label",{className:"form-check-label",for:"inlineCheckbox1",children:"Eggeless :"}),Object(o.jsx)("input",{className:"form-check-input ml-2",type:"checkbox",id:"inlineCheckbox1",value:"option1"})]})]})}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{for:"exampleInputEmail1",children:"Flavour :"}),Object(o.jsx)("input",{type:"text",className:"form-control border-0",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter your cake Flavour"})]}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("button",{type:"submit",className:"btn btn-primary my-5",children:"Add Product"})})]})]})})})})}var N=a(16),y=a(17),w=a(19),k=a(18),C=a(20),E=(a(27),function(e){Object(w.a)(a,e);var t=Object(k.a)(a);function a(){var e;return Object(N.a)(this,a),(e=t.call(this)).user={},e.handleEmail=function(t){e.user.email=t.target.value},e.handlePassword=function(t){e.user.password=t.target.value},e.handleName=function(t){e.user.name=t.target.value},e.signup=function(t){if(t.preventDefault()," "==e.user.name||void 0==e.user.name)alert("Enter Your name");else if(" "==e.user.email||void 0==e.user.email)alert("Enter Your Email Id");else if(" "==e.user.password||void 0==e.user.password)alert("Enter Your password");else if(" "==!e.user.password||void 0==e.user.password&&" "==!e.user.email||void 0==e.user.email){u()({method:"post",url:"https://apifromashu.herokuapp.com/api/register",data:e.user}).then((function(t){"Please Provide Details"==t.data.message?alert("Please Provide correct Details"):(console.log(t.data.message),C.b.success("Login Succsefully Done",{position:"top-left",autoClose:!1,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),e.props.history.push("/"))}),(function(e){alert("invalid credential")}))}},e}return Object(y.a)(a,[{key:"render",value:function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(d,{}),Object(o.jsx)("div",{className:" bg-light rounded p-5 mt-5 shadow",style:{width:"50%",margin:"auto"},children:Object(o.jsxs)("form",{className:"mt-1",children:[Object(o.jsx)("h1",{children:"Signup Here"}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{for:"exampleInputEmail1",children:"Name"}),Object(o.jsx)("input",{onChange:this.handleName,type:"text",className:"form-control","aria-describedby":"emailHelp",placeholder:"Enter Name"})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{for:"exampleInputEmail1",children:"Email address"}),Object(o.jsx)("input",{onChange:this.handleEmail,type:"email",className:"form-control","aria-describedby":"emailHelp",placeholder:"Enter email"}),Object(o.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{for:"exampleInputPassword1",children:"Password"}),Object(o.jsx)("input",{onChange:this.handlePassword,type:"password",className:"form-control",placeholder:"Password"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:this.signup,type:"submit",className:"btn btn-primary mt-3",children:"Signup"}),Object(o.jsx)(C.a,{position:"top-left",autoClose:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0})]})]})})]})}}]),a}(s.PureComponent)),S=function(e){Object(w.a)(a,e);var t=Object(k.a)(a);function a(){var e;return Object(N.a)(this,a),(e=t.call(this)).user={},e.handleEmail=function(t){e.user.email=t.target.value},e.recover=function(t){if(t.preventDefault(),console.log(e.user.email)," "==e.user.email||void 0==e.user.email)alert("Enter Your Email Id");else if(" "==!e.user.email||void 0==e.user.email){u()({method:"post",url:"https://apifromashu.herokuapp.com/api/recoverpassword",data:e.user}).then((function(t){t.data.message?(alert("Your password is send on your emailid please check"),e.props.history.push("/Login")):"responce.data.message"==t.data.message?alert("No Such Email exists"):alert("Getting error while recovering password")}),(function(e){alert("invalid credential")}))}},e}return Object(y.a)(a,[{key:"render",value:function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(d,{}),Object(o.jsx)("div",{className:"bg-light rounded p-5 mt-5 shadow",style:{width:"50%",margin:"auto"},children:Object(o.jsxs)("form",{className:"mt-2",children:[Object(o.jsx)("h1",{children:"Recover Password"}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{for:"exampleInputEmail1",children:"Email address"}),Object(o.jsx)("input",{onChange:this.handleEmail,type:"email",className:"form-control","aria-describedby":"emailHelp",placeholder:"Enter email"}),Object(o.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{onClick:this.recover,type:"submit",className:"btn btn-primary mt-3",children:"Recover Password"})})]})})]})}}]),a}(s.PureComponent),F=a(24),P=a.n(F),I=a(42),_=a.n(I);var D=function(e){var t=P.a.parse(e.location.search).q,a=Object(s.useState)({}),c=Object(b.a)(a,2),l=c[0],r=c[1],n=Object(s.useState)(!0),i=Object(b.a)(n,2),j=i[0],m=i[1],h={name:l.name,cakeid:l.cakeid,price:l.price,weight:l.weight,image:l.image};return Object(s.useEffect)((function(){var e="https://apifromashu.herokuapp.com/api/cake/"+t;u()({method:"get",url:e}).then((function(e){console.log("response from  cake details api",e.data.data),r(e.data.data),m(!1)}),(function(e){console.log("error from all cakes api",e)}))}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(d,{}),j&&Object(o.jsx)("div",{className:"d-flex vh-100 ",children:Object(o.jsx)(O.a,{className:"w-100 mt-5  d-flex justify-content-center align-items-center",type:"ThreeDots",color:"#00BFFF",height:80,width:80})}),!j&&Object(o.jsx)("div",{className:"maincakedetails w-100 h-100 ",children:Object(o.jsx)("div",{className:"container  w-100 h-100 p-2 containercakedetails mt-5",children:Object(o.jsxs)("div",{className:"d-flex m-3 ",children:[Object(o.jsxs)("div",{className:"float-left  w-50",children:[Object(o.jsx)("div",{className:"p-3 rounded ",children:Object(o.jsx)("img",{src:l.image,className:"card-img-top",alt:"..."})}),Object(o.jsxs)("div",{className:"m-2 d-flex flex-column flex-wrap p-4 ingridentcontainer",children:[Object(o.jsx)("h3",{children:"Ingrediant"}),l.ingredients&&Object(o.jsx)("ul",{className:"d-flex flex-wrap justify-content-start align-items-center",children:l.ingredients.map((function(e){return Object(o.jsx)("li",{className:"ingredentitem",children:e})}))})]})]}),Object(o.jsx)("div",{className:" text-center w-50 ",children:Object(o.jsx)("div",{className:"h-100  d-flex justify-content-center align-self-center ",children:Object(o.jsxs)("div",{className:"bg-secondar w-100 p-5 align-self-center",children:[Object(o.jsx)("h1",{children:l.name}),Object(o.jsx)(_.a,{rating:l.ratings,starRatedColor:"blue",numberOfStars:5,name:"rating",starDimension:"25px",starSpacing:"1px"}),Object(o.jsxs)("p",{className:"card-text my-2 font-weight-light ",children:[l.reviews," reviews"]}),Object(o.jsx)("p",{className:"card-text my-2",children:l.description}),Object(o.jsxs)("h5",{className:"my-4",children:["Current Price: ",Object(o.jsx)("span",{children:l.price})]}),Object(o.jsxs)("h5",{className:"card-text  my-4",children:["Weight:",Object(o.jsx)("span",{children:"o.5"}),"Kg"]}),Object(o.jsxs)("h5",{className:"card-text  my-4",children:["Flavour: ",Object(o.jsx)("span",{children:l.flavour})]}),Object(o.jsxs)("h5",{className:"card-text  my-4",children:["Occasion: ",Object(o.jsx)("span",{children:l.type})]}),Object(o.jsx)("button",{onClick:function(){alert("Item added into Cart"),u()({headers:{authtoken:localStorage.token},method:"post",url:"https://apifromashu.herokuapp.com/api/addcaketocart",data:h}).then((function(e){console.log("response from addto cart api",e.data.data)}),(function(e){console.log("error from all cakes api",e)}))},className:" btn btn-primary btnaddtocart",children:"Add To Cart"})]})})})]})})})]})},H=function(e){Object(w.a)(a,e);var t=Object(k.a)(a);function a(){var e;return Object(N.a)(this,a),(e=t.call(this)).user={},e.handleEmail=function(t){e.user.email=t.target.value},e.handlePassword=function(t){e.user.password=t.target.value},e.login=function(t){if(t.preventDefault(),console.log(e.user.email)," "==e.user.email||void 0==e.user.email)alert("Enter Your Email Id");else if(" "==e.user.password||void 0==e.user.password)alert("Enter Your password");else if(" "==!e.user.password||void 0==e.user.password&&" "==!e.user.email||void 0==e.user.email){u()({method:"post",url:"https://apifromashu.herokuapp.com/api/login",data:e.user}).then((function(t){console.log(t),t.data.token?(e.props.dispatch({type:"LOGIN",payload:t.data}),e.props.history.push("/"),localStorage.token=t.data.token,C.b.success("Hi welcome to our CakeGallary",{position:"top-left",autoClose:!1,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):alert("invalid creadential")}),(function(e){}))}},e.state={name:"nayana"},e}return Object(y.a)(a,[{key:"render",value:function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(d,{}),Object(o.jsx)("div",{className:"mt-5 bg-light rounded p-5 shadow",style:{width:"50%",margin:"auto"},children:Object(o.jsxs)("form",{children:[Object(o.jsx)("h1",{children:"Login Here"}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{for:"exampleInputEmail1",children:"Email address"}),Object(o.jsx)("input",{onChange:this.handleEmail,type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"}),Object(o.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{for:"exampleInputPassword1",children:"Password"}),Object(o.jsx)("input",{onChange:this.handlePassword,type:"password",className:"form-control",placeholder:"Password"})]}),Object(o.jsxs)("div",{className:"mt-4",children:[Object(o.jsx)("label",{className:"errormessage",children:this.state.errorMessage}),Object(o.jsx)("button",{onClick:this.login,type:"submit",className:"btn btn-primary",children:"Submit"}),Object(o.jsx)(C.a,{position:"top-left",autoClose:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0})]}),Object(o.jsx)("div",{className:"mt-5",children:Object(o.jsx)(r.b,{to:"/signup",children:"New User? Signup Here"})}),Object(o.jsx)("div",{className:"mt-2",children:Object(o.jsx)(r.b,{to:"/forgotpassword",children:"Forgor Password"})})]})})]})}}]),a}(s.Component);H=Object(n.g)(H);var T=Object(i.b)()(H);function L(e){var t=Object(s.useState)([]),a=Object(b.a)(t,2),c=a[0],l=a[1],r=Object(s.useState)(!0),n=Object(b.a)(r,2),i=n[0],j=n[1],m=P.a.parse(e.location.search).q;return console.log("query object",m),Object(s.useEffect)((function(){var e="https://apifromashu.herokuapp.com/api/searchcakes?q="+m;u()({method:"get",url:e}).then((function(e){l(e.data.data),console.log(e.data.data),j(!1)}),(function(e){console.log(e)}))}),[m]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(d,{}),i&&Object(o.jsx)("div",{className:"d-flex vh-100 ",children:Object(o.jsx)(O.a,{className:"w-100 mt-5  d-flex justify-content-center align-items-center",type:"ThreeDots",color:"#00BFFF",height:80,width:80})}),Object(o.jsx)("div",{className:"container-fluid  p-5 h-100",children:Object(o.jsxs)("div",{class:"d-flex justify-content-around flex-wrap flex-row w-100",children:[!i&&0==c&&Object(o.jsx)("div",{className:"mt-5",children:Object(o.jsx)("h1",{children:"Cake not found"})}),c.map((function(e,t){return Object(o.jsx)(p,{data:e},t)}))]})})]})}function A(e){var t=Object(s.useState)(1),a=Object(b.a)(t,2),c=a[0],l=a[1],r=Object(s.useState)([]),i=Object(b.a)(r,2),j=i[0],m=i[1],h=Object(s.useState)(!0),p=Object(b.a)(h,2),x=p[0],f=p[1],g=Object(n.f)();Object(s.useEffect)((function(){u()({headers:{authtoken:localStorage.token},method:"post",url:"https://apifromashu.herokuapp.com/api/cakecart"}).then((function(e){m(e.data.data),f(!1),console.log(e.data.data)}),(function(e){console.log("error from all cakes api",e)}))}),[]);var v=j.map((function(e,t){return Object(o.jsx)("div",{className:"d-flex border-bottom py-3",children:Object(o.jsxs)("div",{className:"d-flex w-100 justify-content-between align-items-center flex-xl-row flex-column",children:[Object(o.jsxs)("div",{className:"d-flex  align-items-center mb-2 ",children:[Object(o.jsx)("img",{src:e.image,alt:"cartitemimage",style:{maxWidth:"5rem"}}),Object(o.jsx)("div",{className:"item_text_holder mx-lg-3 mx-2",children:Object(o.jsx)("h5",{children:e.name})})]}),Object(o.jsxs)("div",{className:"d-flex ",children:[Object(o.jsx)("div",{className:"item_count_holder d-flex",children:Object(o.jsxs)("div",{className:"d-flex flex-row",children:[Object(o.jsx)("button",{onClick:function(){return e=t,l(c+1),void console.log(e);var e},className:"border-0",children:"+"}),Object(o.jsx)("span",{id:"cartitemcount",className:"border font-weight-bolder px-2",style:{display:"block",margin:"0.2rem"},children:c}),Object(o.jsx)("button",{onClick:function(){return e=t,document.getElementById("cartitemcount").innerText,void console.log(e);var e},className:"border-0",children:"-"})]})}),Object(o.jsxs)("div",{className:"mx-lg-3 mx-2 ",children:[Object(o.jsx)("span",{className:"d-inline-block px-2 border-0 font-weight-bolder",children:e.price}),Object(o.jsx)("span",{className:"font-weight-bold",children:"Rupees"})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{className:"border-0 font-weight-bolder",children:"\xd7 "})})]})]})},t)}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(d,{}),x&&Object(o.jsx)("div",{className:"d-flex vh-100 ",children:Object(o.jsx)(O.a,{className:"w-100 mt-5  d-flex justify-content-center align-items-center",type:"ThreeDots",color:"#00BFFF",height:80,width:80})}),!localStorage.token&&g.push("/Login"),localStorage.token&&!x&&Object(o.jsx)("div",{className:"container mt-3",children:Object(o.jsx)("div",{className:"d-flex vh-100 ",children:Object(o.jsxs)("div",{className:"d-flex flex-xl-row flex-column cart_container  justify-content-xl-between align-self-center rounded",children:[Object(o.jsxs)("div",{className:"bg-white p-lg-5 p-2 rounded cart_itm_details_container",children:[Object(o.jsxs)("div",{className:"d-flex border-bottom py-3 justify-content-between align-items-center  ",children:[Object(o.jsx)("div",{className:"flex-grow-1",children:Object(o.jsx)("h1",{style:{fontSize:"1.6rem"},children:"Shopping Cart"})}),Object(o.jsx)("div",{children:Object(o.jsx)("h6",{children:"3 items"})})]}),v]}),Object(o.jsxs)("div",{className:"rounded py-5 px-4 cart_itm_summary_container ",children:[Object(o.jsx)("div",{className:"d-flex py-1 border_dark justify-content-between align-items-center  ",children:Object(o.jsx)("div",{children:Object(o.jsx)("h5",{children:"Summary"})})}),Object(o.jsx)("div",{className:"d-flex border_dark py-4",children:Object(o.jsxs)("div",{className:"d-flex w-100 justify-content-between align-items-center ",children:[Object(o.jsx)("div",{children:Object(o.jsxs)("h6",{children:["Item",Object(o.jsx)("span",{id:"totalitemcount",children:"3"})]})}),Object(o.jsxs)("div",{className:"item_text_holder",children:[Object(o.jsx)("span",{className:"d-inline-block px-1 border-0 font-weight-bolder",children:"315"}),Object(o.jsx)("span",{className:"font-weight-bold",children:"Rupees"})]})]})}),Object(o.jsx)("div",{className:"d-flex  py-4",children:Object(o.jsxs)("div",{className:"d-flex w-100 justify-content-between ",children:[Object(o.jsx)("div",{children:Object(o.jsx)("h6",{children:"TOTAL PRICE"})}),Object(o.jsxs)("div",{className:"item_text_holder",children:[Object(o.jsx)("span",{className:"px-1 border-0 font-weight-bolder",children:"315"}),Object(o.jsx)("span",{className:"font-weight-bold",children:"Rupees"})]})]})}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{className:"btn btn-dark btn-block",children:" CHECKOUT"})})]})]})})})]})}var B=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(n.a,{exact:!0,path:"/",render:function(){return Object(o.jsx)(g,{})}}),Object(o.jsx)(n.a,{exact:!0,path:"/Product",component:f}),Object(o.jsx)(n.a,{exact:!0,path:"/Cakedetails",component:D}),Object(o.jsx)(n.a,{exact:!0,path:"/Addcackedetails",component:v}),Object(o.jsx)(n.a,{exact:!0,path:"/search",component:L}),Object(o.jsx)(n.a,{exact:!0,path:"/cartitem",component:A}),Object(o.jsx)(n.a,{exact:!0,path:"/Login",component:function(){return Object(o.jsx)(T,{})}}),Object(o.jsx)(n.a,{exact:!0,path:"/forgotpassword",component:S}),Object(o.jsx)(n.a,{exact:!0,path:"/Signup",component:E})]})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,110)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,l=t.getLCP,r=t.getTTFB;a(e),s(e),c(e),l(e),r(e)}))},q=a(31),Y=a(25),G=Object(q.a)({Addcakedetail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ALL_CAKE":return(e=Object(Y.a)({},e)).cakelist=t.payload,e;case"ADD_TO_CART":return(e=Object(Y.a)({},e)).cartitemlist=t.payload,e;default:return e}},Showlogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loginflag:!!localStorage.token},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return(e=Object(Y.a)({},e)).loginflag=!0,e.user=t.payload,e;default:return e}}}),W=Object(q.b)(G),K=W;console.log("store ",W.getState()),W.dispatch({type:"logout"}),W.dispatch({type:"Add_Cart"}),console.log("store ",W.getState()),l.a.render(Object(o.jsx)(i.a,{store:K,children:Object(o.jsx)(r.a,{children:Object(o.jsxs)(n.c,{children:[Object(o.jsx)(B,{}),"  "]})})}),document.getElementById("root")),R()},47:function(e,t,a){},48:function(e,t,a){}},[[109,1,2]]]);
//# sourceMappingURL=main.a2455442.chunk.js.map