(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{112:function(e,t,a){},113:function(e,t,a){},252:function(e,t,a){},254:function(e,t,a){},255:function(e,t,a){},256:function(e,t,a){},257:function(e,t,a){},258:function(e,t,a){},260:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),s=a.n(n),i=a(104),r=a.n(i),l=a(3),o=(a(112),a(22)),d=a(5),m=(a(113),a(12)),j=a(4),u=a.n(j),b=a(18),h=a.n(b),p=a(26),O=a.n(p),x=a.p+"static/media/avatar.13074b25.png";var g=function(e){var t=Object(n.useState)(null),a=Object(l.a)(t,2),s=a[0],i=a[1],r=Object(n.useState)([]),o=Object(l.a)(r,2),d=o[0],j=o[1],b=Object(n.useState)([]),p=Object(l.a)(b,2),g=p[0],f=p[1],v=Object(n.useState)(""),N=Object(l.a)(v,2),k=N[0],S=N[1],C=Object(n.useState)(""),I=Object(l.a)(C,2),y=I[0],z=I[1],A=localStorage.getItem("token"),L=Object(n.useState)("false"),F=Object(l.a)(L,2),B=F[0],E=F[1],w=function(e){i((function(t){return t===e?null:e}))};Object(n.useEffect)((function(){u.a.get("http://localhost:3001/thread").then((function(e){var t=e.data.reverse();j(t)}))}),[]);var P=function(e){u.a.post("http://localhost:3001/thread/like",{idthread:e},{headers:{Authorization:"bearer ".concat(A)}}).then((function(e){var t=e.data.reverse();j(t)}))},R=function(e){!0===M()&&u.a.post("http://localhost:3001/thread/comment",{idthread:e,commentaire:k},{headers:{Authorization:"bearer ".concat(A)}}).then((function(e){var t=e.data[1].reverse();j(t),f(e.data[0]),S("")}))},D=function(e){E("true"===B?"false":"true"),u.a.post("http://localhost:3001/thread/getComments",{idthread:e},{headers:{Authorization:"bearer ".concat(A)}}).then((function(e){f(e.data)}))},M=function(){return k.trim()?(z(null),!0):(z("Veuillez remplir le champ"),!1)};return Object(c.jsxs)("main",{className:"Home",children:[Object(c.jsx)("h1",{children:"Les Derni\xe8res Publications :"}),d.map((function(t){return t.image?Object(c.jsxs)("article",{className:"Post",children:[Object(c.jsx)("div",{className:"Image",children:Object(c.jsx)(m.Image,{alt:"Image de l'article "+t.title,cloudName:"dzbs5syc9",publicId:t.image})}),Object(c.jsxs)("div",{className:"Content",children:[Object(c.jsxs)("div",{className:"title",children:[t.title," / publi\xe9 par ",t.author," le ",t.date.slice(0,10)]}),Object(c.jsx)("div",{className:"description",children:t.description})]}),Object(c.jsxs)("div",{className:"Engagement",children:[Object(c.jsx)("button",{className:"btn-icons","aria-label":"Bouton like",onClick:function(){P(t.idthread)},children:Object(c.jsx)(h.a,{"aria-hidden":"false",id:"likeButton"})}),Object(c.jsx)("div",{className:"counts",children:t.likecount}),Object(c.jsx)("button",{className:"btn-icons","aria-expanded":B,"aria-controls":"send-com",onClick:function(e){w(t.idthread),D(t.idthread)},children:Object(c.jsx)(O.a,{id:"commentButton"})}),Object(c.jsx)("div",{className:"counts",children:t.commentcount})]}),s===t.idthread&&Object(c.jsxs)("div",{className:"comments",children:[e.isLoggedIn?Object(c.jsxs)("div",{className:"send-com",id:"send-com",children:[Object(c.jsx)("label",{className:"label-img",htmlFor:"input-comment-id",children:"R\xe9pondre \xe0 la publication"}),Object(c.jsx)("input",{id:"input-comment-id",className:"input-comment",value:k,type:"text",placeholder:"r\xe9pondre...",onChange:function(e){S(e.target.value)}}),Object(c.jsx)("button",{className:"btn-comment",onClick:function(){R(t.idthread),S("")},children:"Envoyer"}),Object(c.jsxs)("p",{className:"msg-err",children:[y," "]})]}):null,g.map((function(e,t){return Object(c.jsxs)("div",{className:"post-bottom",children:[null===e.avatar&&Object(c.jsx)("img",{className:"img-comment",src:x,alt:"Avatar du profil"}),null!=e.avatar&&Object(c.jsx)(m.Image,{alt:"avatar",cloudName:"dzbs5syc9",publicId:e.avatar,className:"img-comment"}),Object(c.jsxs)("div",{className:"comment",children:[Object(c.jsx)("p",{className:"userComment",children:e.usercomment}),Object(c.jsx)("p",{children:e.comment})]})]},t)}))]})]},t.idthread):Object(c.jsxs)("article",{className:"Post",children:[Object(c.jsxs)("div",{className:"Content",children:[Object(c.jsxs)("div",{className:"title-txt",children:[t.title," / publi\xe9 par ",t.author," le ",t.date.slice(0,10)]}),Object(c.jsx)("div",{className:"description",children:t.description})]}),Object(c.jsxs)("div",{className:"Engagement",children:[Object(c.jsx)("button",{className:"btn-icons","aria-label":"Bouton like",onClick:function(){P(t.idthread)},children:Object(c.jsx)(h.a,{"aria-hidden":"false",id:"likeButton"})}),Object(c.jsx)("div",{className:"counts",children:t.likecount}),Object(c.jsx)("button",{className:"btn-icons","aria-expanded":B,"aria-label":"Comments","aria-controls":"send-com",onClick:function(e){w(t.idthread),D(t.idthread)},children:Object(c.jsx)(O.a,{id:"commentButton"})}),Object(c.jsx)("div",{className:"counts",children:t.commentcount})]}),s===t.idthread&&Object(c.jsxs)("div",{className:"comments",children:[e.isLoggedIn?Object(c.jsxs)("div",{className:"send-com",id:"send-com",children:[Object(c.jsx)("label",{className:"label-img",htmlFor:"input-comment-id",children:"R\xe9pondre \xe0 la publication"}),Object(c.jsx)("input",{id:"input-comment-id",className:"input-comment",value:k,type:"text",placeholder:"r\xe9pondre...",onChange:function(e){S(e.target.value)}}),Object(c.jsx)("button",{className:"btn-comment",onClick:function(){R(t.idthread),S("")},children:"Envoyer"}),Object(c.jsxs)("p",{className:"msg-err",children:[y," "]})]}):null,g.map((function(e,t){return Object(c.jsxs)("div",{className:"post-bottom",children:[null===e.avatar&&Object(c.jsx)("img",{className:"img-comment",src:x,alt:"Avatar du profil"}),null!=e.avatar&&Object(c.jsx)(m.Image,{alt:"avatar",cloudName:"dzbs5syc9",publicId:e.avatar,className:"img-comment"}),Object(c.jsxs)("div",{className:"comment",children:[Object(c.jsx)("p",{className:"userComment",children:e.usercomment}),Object(c.jsx)("p",{children:e.comment})]})]},t)}))]})]},t.idthread)}))]})},f=(a(252),a(105)),v=a.n(f),N=a.p+"static/media/icon-left-font-monochrome-white.5e5204e3.png";var k=function(e){var t=Object(d.e)(),a=Object(n.useState)(!1),s=Object(l.a)(a,2),i=s[0],r=s[1];return Object(c.jsxs)("header",{className:"Navbar",children:[Object(c.jsx)("img",{className:"navbar-img",src:N,alt:"Logo de l'entreprise"}),Object(c.jsxs)("nav",{className:"right-side",children:[Object(c.jsxs)("div",{className:"links",id:i?"hidden":"",children:[Object(c.jsx)("a",{href:"/",children:"Forum"}),e.isLoggedIn?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("a",{href:"/upload",children:"Publier"}),Object(c.jsx)("a",{href:"/profile",children:"Profil"}),"moderateur"===e.userRole&&Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("a",{href:"/moderateur",children:"G\xe9rer les publications"})}),Object(c.jsx)("button",{className:"btn-disconnect",onClick:function(){localStorage.removeItem("role"),localStorage.setItem("loggedIn","false"),localStorage.removeItem("username"),localStorage.removeItem("token"),t.push("/")},children:"Se d\xe9connecter"})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("a",{href:"/register",children:"Inscription"}),Object(c.jsx)("a",{href:"/login",children:"Connexion"})]})]}),Object(c.jsx)("button",{className:"btn-menu","aria-label":"Bouton du menu",onClick:function(){return r(!i)},children:Object(c.jsx)(v.a,{})})]})]})},S=(a(254),a.p+"static/media/icon.56071b0f.png");var C=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],s=t[1],i=Object(n.useState)(""),r=Object(l.a)(i,2),o=r[0],m=r[1],j=Object(n.useState)(""),b=Object(l.a)(j,2),h=b[0],p=b[1],O=Object(d.e)(),x=function(){return a.trim()||o.trim()?a.trim()?!!o.trim()||(p("Le champ mot de passe est vide"),!1):(p("Le champ nom d'utilisateur est vide"),!1):(p("Les champs sont vides"),!1)};return Object(c.jsxs)("main",{className:"Register",children:[Object(c.jsx)("img",{className:"navbar-img",src:S,alt:"Logo de Groupomania"}),Object(c.jsx)("h1",{children:"Inscription"}),Object(c.jsxs)("div",{className:"RegisterForm",children:[Object(c.jsx)("label",{className:"label-img",htmlFor:"input-username-register",children:"Choisir un nom d'utilisateur"}),Object(c.jsx)("input",{id:"input-username-register",type:"text",placeholder:"Nom d'utilisateur...",onChange:function(e){s(e.target.value)}}),Object(c.jsx)("label",{className:"label-img",htmlFor:"input-password-register",children:"Choisir un mot de passe"}),Object(c.jsx)("input",{id:"input-password-register",type:"password",placeholder:"Mot de passe...",onChange:function(e){m(e.target.value)}}),Object(c.jsx)("button",{value:"Inscription",onClick:function(){x(),console.log(x()),!0===x()&&u.a.post("https://social-media-image-backend.herokuapp.com//user/register",{username:a,password:o}).then((function(e){O.push("/"),alert("Votre compte a bien \xe9t\xe9 enregistr\xe9")})).catch((function(e){e.response&&p(e.response.data.message)}))},children:"S'inscrire"})]}),Object(c.jsx)("p",{className:"msg-err",children:h})]})};a(255);var I=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],s=t[1],i=Object(n.useState)(""),r=Object(l.a)(i,2),o=r[0],m=r[1],j=Object(n.useState)(""),b=Object(l.a)(j,2),h=b[0],p=b[1],O=Object(d.e)(),x=function(){return a.trim()||o.trim()?a.trim()?!!o.trim()||(p("Le champ mot de passe est vide"),!1):(p("Le champ nom d'utilisateur est vide"),!1):(p("Les champs sont vides"),!1)};return Object(c.jsxs)("main",{className:"Login",children:[Object(c.jsx)("img",{className:"navbar-img",src:S,alt:"Logo de Groupomania"}),Object(c.jsx)("h1",{children:"Connexion"}),Object(c.jsxs)("div",{className:"LoginForm",children:[Object(c.jsx)("label",{className:"label-img",htmlFor:"input-username-login",children:"Remplir le champ du nom d'utilisateur"}),Object(c.jsx)("input",{id:"input-username-login",type:"text",autoComplete:"on",placeholder:"Nom d'utilisateur...",onChange:function(e){s(e.target.value)}}),Object(c.jsx)("label",{className:"label-img",htmlFor:"input-password-login",children:"Remplir le champ du nom d'utilisateur"}),Object(c.jsx)("input",{id:"input-password-login",type:"password",placeholder:"Mot de passe...",onChange:function(e){m(e.target.value)}}),Object(c.jsx)("button",{value:"Connexion",onClick:function(){x(),!0===x()&&u.a.post("https://social-media-image-backend.herokuapp.com//user/login",{username:a,password:o}).then((function(e){localStorage.setItem("username",e.data.userName),localStorage.setItem("role",e.data.role),localStorage.setItem("token",e.data.token),localStorage.setItem("loggedIn",!0),O.push("/")})).catch((function(e){e.response&&p(e.response.data.message)}))},children:"Se connecter"})]}),Object(c.jsxs)("p",{className:"msg-err",children:[h," "]})]})};a(256);var y=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],s=t[1],i=Object(n.useState)(""),r=Object(l.a)(i,2),o=r[0],m=r[1],j=Object(n.useState)([]),b=Object(l.a)(j,2),h=b[0],p=b[1],O=localStorage.getItem("token"),x=Object(n.useState)(""),g=Object(l.a)(x,2),f=g[0],v=g[1],N=Object(n.useRef)(),k=Object(d.e)(),S=function(){return a.trim()||o.trim()?a.trim()?o.trim()?(v(null),!0):(v("Le champ description est vide"),!1):(v("Le champ titre est vide"),!1):(v("Les champs titre et description sont vides"),!1)};return Object(c.jsxs)("main",{className:"Upload",children:[Object(c.jsxs)("article",{className:"UploadForm",children:[Object(c.jsx)("h1",{children:"Publier un article"}),Object(c.jsx)("label",{className:"label-img",htmlFor:"input-title",children:"Choisir un titre"}),Object(c.jsx)("input",{id:"input-title",type:"text",placeholder:"Titre...",onChange:function(e){s(e.target.value)}}),Object(c.jsx)("label",{className:"label-img",htmlFor:"textarea-description",children:"Choisir une description"}),Object(c.jsx)("textarea",{id:"textarea-description",className:"description-input",type:"text",placeholder:"Description...",onChange:function(e){m(e.target.value)}}),Object(c.jsx)("label",{className:"label-img",htmlFor:"file",children:"Choisir une image"}),Object(c.jsx)("input",{id:"file",className:"img-input",type:"file",onChange:function(e){return p(e.target.files)}}),Object(c.jsx)("button",{ref:N,value:"Publication",onClick:function(){return function(){N.current.setAttribute("disabled","disabled");var e=new FormData;e.append("file",h[0]),e.append("upload_preset","h0vs2ijr"),S(),!0===S()&&(h.length>0?u.a.post("https://api.cloudinary.com/v1_1/dzbs5syc9/image/upload",e).then((function(e){var t=e.data.public_id;u.a.post("https://social-media-image-backend.herokuapp.com//thread",{title:a,description:o,image:t,author:localStorage.getItem("username")},{headers:{Authorization:"bearer ".concat(O)}}).then((function(){k.push("/")}))})):u.a.post("https://social-media-image-backend.herokuapp.com//thread",{title:a,description:o,author:localStorage.getItem("username")},{headers:{Authorization:"bearer ".concat(O)}}).then((function(){k.push("/")})))}()},children:"Publier"})]}),Object(c.jsxs)("p",{className:"msg-err",children:[f," "]})]})};a(257);var z=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],s=t[1],i=Object(n.useState)(""),r=Object(l.a)(i,2),o=r[0],j=r[1],b=Object(n.useState)(""),p=Object(l.a)(b,2),O=p[0],g=p[1],f=Object(n.useState)(""),v=Object(l.a)(f,2),N=v[0],k=v[1],S=localStorage.getItem("token"),C=localStorage.getItem("username"),I=Object(n.useState)(null),y=Object(l.a)(I,2),z=y[0],A=y[1],L=function(e){A((function(t){return t===e?null:e}))},F=Object(n.useState)([]),B=Object(l.a)(F,2),E=B[0],w=B[1],P=Object(n.useState)(!0),R=Object(l.a)(P,2),D=R[0],M=R[1],_=Object(n.useState)(""),G=Object(l.a)(_,2),J=G[0],T=G[1],U=Object(d.e)();Object(n.useEffect)((function(){var e=localStorage.getItem("token");u.a.get("https://social-media-image-backend.herokuapp.com//thread/byUser/".concat(localStorage.getItem("username")),{headers:{Authorization:"bearer ".concat(e)}}).then((function(e){s(e.data[0]),null==e.data[1][0].avatar?M(!1):T(e.data[1][0].avatar)}))}),[]),Object(n.useEffect)((function(){var e=localStorage.getItem("token"),t=new FormData;t.append("file",E[0]),t.append("upload_preset","h0vs2ijr"),E.length>0&&u.a.post("https://api.cloudinary.com/v1_1/dzbs5syc9/image/upload",t).then((function(t){var a=t.data.public_id;u.a.post("https://social-media-image-backend.herokuapp.com//user/avatar",{image:a},{headers:{Authorization:"bearer ".concat(e)}}).then((function(e){T(e.data[0].avatar)}))}))}),[E]);var V=function(e,t){u.a.delete("https://social-media-image-backend.herokuapp.com//thread/delete",{headers:{Authorization:"bearer ".concat(S)},data:{idthread:t,username:C,image:e}}).then((function(e){s(e.data[3])}))},H=function(e){q(),!0===q()&&u.a.post("https://social-media-image-backend.herokuapp.com//thread/modify",{title:o,description:O,idthread:e},{headers:{Authorization:"bearer ".concat(S)}}).then((function(t){s(t.data),L(e)})).catch((function(e){e.response&&k(e.response.data.message)}))},q=function(){return o.trim()?!!O.trim()||(k("Le champ de la description est vide"),!1):(k("Le champ du titre est vide"),!1)};return Object(c.jsxs)("main",{className:"Profile",children:[Object(c.jsxs)("article",{className:"profile-top",children:[Object(c.jsxs)("div",{className:"user-info",children:[D?Object(c.jsx)(m.Image,{alt:"Avatar",cloudName:"dzbs5syc9",publicId:J,className:"img-profile"}):Object(c.jsx)("img",{className:"img-profile",src:x,alt:"Default Avatar"}),Object(c.jsx)("h1",{children:localStorage.getItem("username")}),Object(c.jsx)("button",{className:"btn-profile",onClick:function(){u.a.delete("https://social-media-image-backend.herokuapp.com//user/delete",{headers:{Authorization:"bearer ".concat(S)}}).then((function(e){localStorage.removeItem("role"),localStorage.setItem("loggedIn","false"),localStorage.removeItem("username"),localStorage.removeItem("token"),U.push("/")}))},children:"Supprimer le compte"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"file",className:"label-file",children:"Changer d'avatar"}),Object(c.jsx)("input",{id:"file",type:"file",onChange:function(e){return w(e.target.files)},className:"input-avatar"})]})]}),Object(c.jsx)("h2",{children:"Vos publications :"}),a.map((function(e){return console.log("val",e),e.image?Object(c.jsxs)("article",{className:"thread-profile",children:[Object(c.jsxs)("div",{className:"Post",children:[Object(c.jsx)("div",{className:"Image",children:Object(c.jsx)(m.Image,{alt:"Image de l'article "+e.title,cloudName:"dzbs5syc9",publicId:e.image})}),Object(c.jsxs)("div",{className:"Content",children:[Object(c.jsxs)("div",{className:"title",children:[e.title," / publi\xe9 par ",e.author," le ",e.date.slice(0,10)]}),Object(c.jsx)("div",{className:"description",children:e.description}),Object(c.jsxs)("div",{className:"Engagement",children:[Object(c.jsx)(h.a,{id:"likeButton"}),e.likecount]})]})]}),Object(c.jsxs)("div",{className:"buttons",children:[Object(c.jsx)("button",{className:"btn-post",onClick:function(){V(e.image,e.idthread)},children:"Supprimer"}),Object(c.jsx)("button",{className:"btn-update",onClick:function(){L(e.idthread)},children:"Modifier"})]}),z===e.idthread&&Object(c.jsxs)("div",{className:"input-upload",children:[Object(c.jsx)("h3",{children:"Titre"}),Object(c.jsx)("input",{type:"text",placeholder:e.title,onChange:function(e){j(e.target.value)}}),Object(c.jsx)("h3",{children:"Description"}),Object(c.jsx)("textarea",{placeholder:e.description,onChange:function(e){g(e.target.value)}}),Object(c.jsx)("button",{onClick:function(){H(e.idthread)},children:"Confirmer la modification"}),Object(c.jsx)("p",{className:"msg-err",children:N})]})]},e.idthread):Object(c.jsxs)("article",{className:"thread-profile",children:[Object(c.jsx)("div",{className:"Post",children:Object(c.jsxs)("div",{className:"Content",children:[Object(c.jsxs)("div",{className:"title",children:[e.title," / publi\xe9 par ",e.author," le ",e.date.slice(0,10)]}),Object(c.jsx)("div",{className:"description",children:e.description}),Object(c.jsxs)("div",{className:"Engagement",children:[Object(c.jsx)(h.a,{id:"likeButton"}),e.likecount]})]})}),Object(c.jsxs)("div",{className:"buttons",children:[Object(c.jsx)("button",{className:"btn-post",onClick:function(){V(e.image,e.idthread)},children:"Supprimer"}),Object(c.jsx)("button",{className:"btn-update",onClick:function(){L(e.idthread)},children:"Modifier"})]}),z===e.idthread&&Object(c.jsxs)("div",{className:"input-upload",children:[Object(c.jsx)("h3",{children:"Titre"}),Object(c.jsx)("input",{type:"text",placeholder:e.title,onChange:function(e){j(e.target.value)}}),Object(c.jsx)("h3",{children:"Description"}),Object(c.jsx)("textarea",{type:"text",placeholder:e.description,onChange:function(e){g(e.target.value)}}),Object(c.jsx)("button",{onClick:function(){H(e.idthread)},children:"Confirmer la modification"}),Object(c.jsx)("p",{className:"msg-err",children:N})]})]},e.idthread)}))]})},A=(a(258),a(65)),L=a.n(A);var F=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],s=t[1],i=Object(n.useState)([]),r=Object(l.a)(i,2),o=r[0],d=r[1],j=localStorage.getItem("token"),b=localStorage.getItem("username"),p=function(e){s((function(t){return t===e?null:e}))},g=Object(n.useState)([]),f=Object(l.a)(g,2),v=f[0],N=f[1],k=Object(n.useState)("false"),S=Object(l.a)(k,2),C=S[0],I=S[1];Object(n.useEffect)((function(){var e=localStorage.getItem("token");u.a.get("https://social-media-image-backend.herokuapp.com//thread",{headers:{Authorization:"token ".concat(e)}}).then((function(e){console.log(e),d(e.data)}))}),[]);var y=function(e,t){u.a.delete("https://social-media-image-backend.herokuapp.com//thread/delete",{headers:{Authorization:"bearer ".concat(j)},data:{idthread:e,username:b,image:t}}).then((function(e){d(e.data[4])}))},z=function(e){I("true"===C?"false":"true"),u.a.post("https://social-media-image-backend.herokuapp.com//thread/getComments",{idthread:e},{headers:{Authorization:"bearer ".concat(j)}}).then((function(e){N(e.data)}))},A=function(e,t){u.a.delete("https://social-media-image-backend.herokuapp.com//thread/deleteComment",{headers:{Authorization:"bearer ".concat(j)},data:{idcomments:e,threadComment:t}}).then((function(e){N(e.data[2]),d(e.data[3])}))};return Object(c.jsxs)("main",{className:"moderateur",children:[Object(c.jsxs)("div",{className:"moderateur-top",children:[Object(c.jsx)("img",{className:"img-moderateur",src:x,alt:"Avatar du profil"}),Object(c.jsx)("h1",{children:"Mod\xe9rateur"})]}),Object(c.jsx)("h2",{children:"G\xe9rer les publications :"}),o.map((function(e,t){return e.image?Object(c.jsxs)("div",{className:"moderateur",children:[Object(c.jsxs)("article",{className:"Post",children:[Object(c.jsx)("div",{className:"Image",children:Object(c.jsx)(m.Image,{alt:"Image de l'article "+e.title,cloudName:"dzbs5syc9",publicId:e.image})}),Object(c.jsxs)("div",{className:"Content",children:[Object(c.jsxs)("div",{className:"title",children:[e.title," / publi\xe9 par ",e.author," le ",e.date.slice(0,10)]}),Object(c.jsx)("div",{className:"description",children:e.description}),Object(c.jsxs)("div",{className:"Engagement",children:[Object(c.jsx)(h.a,{id:"likeButton"}),e.likecount,Object(c.jsx)("button",{className:"btn-icons","aria-expanded":C,"aria-label":"Comments","aria-controls":"send-com",onClick:function(t){p(e.idthread),z(e.idthread)},children:Object(c.jsx)(O.a,{id:"commentButton"})}),Object(c.jsx)("div",{className:"counts",children:e.commentcount})]}),a===e.idthread&&Object(c.jsx)("div",{className:"comments",id:"send-com",children:v.map((function(t,a){return Object(c.jsxs)("div",{className:"post-bottom",children:[null===t.avatar&&Object(c.jsx)("img",{className:"img-comment",src:x,alt:"Avatar du profil"}),null!=t.avatar&&Object(c.jsx)(m.Image,{alt:"avatar",cloudName:"dzbs5syc9",publicId:t.avatar,className:"img-comment"}),Object(c.jsxs)("div",{className:"comment",children:[Object(c.jsx)("p",{className:"userComment",children:t.usercomment}),Object(c.jsx)("p",{children:t.comment})]}),Object(c.jsx)("button",{className:"icon-delete",onClick:function(){A(t.idcomments,e.idthread)},children:Object(c.jsx)(L.a,{})})]},a)}))})]})]}),Object(c.jsx)("div",{className:"buttons",children:Object(c.jsx)("button",{className:"btn-post",onClick:function(){y(e.idthread,t)},children:"Supprimer"})})]},e.idthread):Object(c.jsxs)("div",{className:"moderateur",children:[Object(c.jsx)("article",{className:"Post",children:Object(c.jsxs)("div",{className:"Content",children:[Object(c.jsxs)("div",{className:"title",children:[e.title," / publi\xe9 par ",e.author," le ",e.date.slice(0,10)]}),Object(c.jsx)("div",{className:"description",children:e.description}),Object(c.jsxs)("div",{className:"Engagement",children:[Object(c.jsx)(h.a,{id:"likeButton"}),e.likecount,Object(c.jsx)("button",{className:"btn-icons","aria-expanded":C,"aria-controls":"send-com",onClick:function(t){p(e.idthread),z(e.idthread)},children:Object(c.jsx)(O.a,{id:"commentButton"})}),Object(c.jsx)("div",{className:"counts",children:e.commentcount})]}),a===e.idthread&&Object(c.jsx)("div",{className:"comments",id:"send-com",children:v.map((function(t,a){return Object(c.jsxs)("div",{className:"post-bottom",children:[null===t.avatar&&Object(c.jsx)("img",{className:"img-comment",src:x,alt:"Avatar du profil"}),null!=t.avatar&&Object(c.jsx)(m.Image,{alt:"avatar",cloudName:"dzbs5syc9",publicId:t.avatar,className:"img-comment"}),Object(c.jsxs)("div",{className:"comment",children:[Object(c.jsx)("p",{className:"userComment",children:t.usercomment}),Object(c.jsx)("p",{children:t.comment})]}),Object(c.jsx)("button",{className:"icon-delete",onClick:function(){A(t.idcomments,e.idthread)},children:Object(c.jsx)(L.a,{})})]},a)}))})]})}),Object(c.jsx)("div",{className:"buttons",children:Object(c.jsx)("button",{className:"btn-post",onClick:function(){y(e.idthread,t)},children:"Supprimer"})})]},e.idthread)}))]})};var B=function(){var e=JSON.parse(localStorage.getItem("loggedIn")),t=Object(n.useState)(e),a=Object(l.a)(t,2),s=a[0],i=a[1],r=localStorage.getItem("role"),m=Object(n.useState)(r),j=Object(l.a)(m,2),u=j[0],b=j[1];return Object(n.useEffect)((function(){setInterval((function(){var e=JSON.parse(localStorage.getItem("loggedIn")),t=localStorage.getItem("role");i(e),b(t)}),0)}),[]),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(o.a,{children:[Object(c.jsx)(k,{isLoggedIn:s,userRole:u}),Object(c.jsx)(d.a,{path:"/",exact:!0,render:function(){return Object(c.jsx)(g,{isLoggedIn:s})}}),Object(c.jsx)(d.a,{path:"/register",exact:!0,render:function(){return Object(c.jsx)(C,{})}}),Object(c.jsx)(d.a,{path:"/login",exact:!0,render:function(){return Object(c.jsx)(I,{})}}),Object(c.jsx)(d.a,{path:"/upload",exact:!0,render:function(){return Object(c.jsx)(y,{})}}),Object(c.jsx)(d.a,{path:"/profile",exact:!0,render:function(){return Object(c.jsx)(z,{})}}),Object(c.jsx)(d.a,{path:"/moderateur",exact:!0,render:function(){return Object(c.jsx)(F,{})}})]})})};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(B,{})}),document.getElementById("root"))}},[[260,1,2]]]);
//# sourceMappingURL=main.a9b09be1.chunk.js.map