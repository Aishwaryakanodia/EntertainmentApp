(()=>{var e={388:(e,a,r)=>{var t;e=r.nmd(e),(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const s=r(185),o=r(126),l=r(613),i=async()=>{try{const e=await s.connect("mongodb+srv://mpmanju9:cUMeVlG1AeDhiqoA@cluster0.xtasiys.mongodb.net/?retryWrites=true&w=majority");console.log(`MongoDB connected: ${e.connection.host}`.cyan.underline),await o.deleteMany({}),await o.insertMany(l)}catch(e){console.log(e),process.exit(1)}};var n,d;e.exports=i,(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&n.register(i,"connectDB","C:\\Users\\aishw\\OneDrive\\Desktop\\Entertainment App\\server\\config\\db.js"),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)},478:(e,a,r)=>{var t;e=r.nmd(e),(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const s=r(776),o=r(957),l=r(621),i=s((async(e,a)=>{const r=await o.find({userId:e.user.id});a.status(200).json(r)})),n=s((async(e,a)=>{if(!e.body.title)throw a.status(400),new Error("Please add a bookmark");if(await o.findOne({userId:e.user.id,title:e.body.title}))throw a.status(400),new Error("This show is already bookmarked");const r=await o.create({title:e.body.title,userId:e.user.id});a.status(200).json(r)})),d=s((async(e,a)=>{const r=await o.findById(e.params.id);if(!r)throw a.status(400),new Error("Bookmark not found");const t=await l.findById(e.user.id);if(!t)throw a.status(401),new Error("User not found");if(r.userId.toString()!==t.id)throw a.status(401),new Error("user not authorized");await r.remove(),a.status(200).json({id:e.params.id})}));var u,m;e.exports={getBookmarks:i,setBookmark:n,deleteBookmark:d},(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(i,"getBookmarks","C:\\Users\\aishw\\OneDrive\\Desktop\\Entertainment App\\server\\controllers\\bookmarkController.js"),u.register(n,"setBookmark","C:\\Users\\aishw\\OneDrive\\Desktop\\Entertainment App\\server\\controllers\\bookmarkController.js"),u.register(d,"deleteBookmark","C:\\Users\\aishw\\OneDrive\\Desktop\\Entertainment App\\server\\controllers\\bookmarkController.js")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)},335:(e,a,r)=>{var t;e=r.nmd(e),(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const s=r(344),o=r(432),l=r(776),i=r(621),n=e=>s.sign({id:e},"HardcodedSecretKey",{expiresIn:"30d"}),d=l((async(e,a)=>{const{email:r,password:t}=e.body;if(!r||!t)throw a.status(400),new Error("Please add all fields");if(await i.findOne({email:r}))throw a.status(400),new Error("User already exists");const s=await o.genSalt(10),l=await o.hash(t,s),d=await i.create({email:r,password:l});if(!d)throw a.status(400),new Error("Invalid User data!");a.status(201).json({_id:d.id,email:d.email,token:n(d._id)})})),u=l((async(e,a)=>{const{email:r,password:t}=e.body,s=await i.findOne({email:r});if(!s||!await o.compare(t,s.password))throw a.status(400),new Error("Invalid credentials!");a.json({_id:s.id,email:s.email,token:n(s._id)})})),m=l((async(e,a)=>{const r=await i.findById(e.user._id).select("-password");if(!r)throw a.status(400),new Error("Invalid User!");a.status(200).json(r)}));var g,p;e.exports={registerUser:d,loginUser:u,validateUser:m},(g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(g.register(n,"generateToken","C:\\Users\\aishw\\OneDrive\\Desktop\\Entertainment App\\server\\controllers\\userController.js"),g.register(d,"registerUser","C:\\Users\\aishw\\OneDrive\\Desktop\\Entertainment App\\server\\controllers\\userController.js"),g.register(u,"loginUser","C:\\Users\\aishw\\OneDrive\\Desktop\\Entertainment App\\server\\controllers\\userController.js"),g.register(m,"validateUser","C:\\Users\\aishw\\OneDrive\\Desktop\\Entertainment App\\server\\controllers\\userController.js")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)},93:(e,a,r)=>{"use strict";r.d(a,{Z:()=>n}),r(354),require("webpack-dev-middleware"),require("webpack-hot-middleware"),r(83);var t,s=r(142),o=r.n(s);e=r.hmd(e),(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature,o().config();const l=e=>{},i={compile:l},n=i;var d,u;(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(l,"compile","C:\\Users\\aishw\\OneDrive\\Desktop\\Entertainment App\\server\\devBundle.js"),d.register(i,"default","C:\\Users\\aishw\\OneDrive\\Desktop\\Entertainment App\\server\\devBundle.js")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)},486:(e,a,r)=>{var t;e=r.nmd(e),(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const s=r(344),o=r(776),l=r(621),i=o((async(e,a,r)=>{let t;if(e.headers.authorization&&e.headers.authorization.startsWith("Bearer"))try{t=e.headers.authorization.split(" ")[1];const a=s.verify(t,"HardcodedSecretKey");e.user=await l.findById(a.id).select("-password"),r()}catch(e){throw console.log(e),a.status(401),new Error("Not Authorized")}if(!t)throw a.status(401),new Error("Not Authorized")}));var n,d;e.exports={protect:i},(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&n.register(i,"protect","C:\\Users\\aishw\\OneDrive\\Desktop\\Entertainment App\\server\\middleware\\authMiddleware.js"),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)},69:(e,a,r)=>{var t;e=r.nmd(e),(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const s=(e,a,r,t)=>{const s=r.statusCode?r.statusCode:500;r.status(s),r.json({message:e.message,stack:null})};var o,l;e.exports={errorHandler:s},(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&o.register(s,"errorHandler","C:\\Users\\aishw\\OneDrive\\Desktop\\Entertainment App\\server\\middleware\\errorMiddleware.js"),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)},126:(e,a,r)=>{var t;e=r.nmd(e),(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const s=r(185),o=new s.Schema({title:String,year:Number,category:String,rating:String,isTrending:Boolean});var l,i;e.exports=s.model("Movie",o),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&l.register(o,"movieSchema","C:\\Users\\aishw\\OneDrive\\Desktop\\Entertainment App\\server\\models\\MovieModel.js"),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)},957:(e,a,r)=>{var t;e=r.nmd(e),(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const s=r(185),o=s.Schema({userId:{type:s.Schema.Types.ObjectId,required:!0,ref:"User"},title:{type:String,required:[!0,"Bookmark title required"]}},{timestamps:!0});var l,i;e.exports=s.model("Bookmark",o),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&l.register(o,"bookmarkSchema","C:\\Users\\aishw\\OneDrive\\Desktop\\Entertainment App\\server\\models\\bookmarkModel.js"),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)},621:(e,a,r)=>{var t;e=r.nmd(e),(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const s=r(185),o=s.Schema({email:{type:String,required:[!0,"Please enter an email"],unique:!0},password:{type:String,required:[!0,"Please enter a password"]}},{timestamps:!0});var l,i;e.exports=s.model("User",o),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&l.register(o,"userSchema","C:\\Users\\aishw\\OneDrive\\Desktop\\Entertainment App\\server\\models\\userModel.js"),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)},970:(e,a,r)=>{var t;e=r.nmd(e),(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const s=r(860).Router(),{getBookmarks:o,setBookmark:l,deleteBookmark:i}=r(478),{protect:n}=r(486);var d,u;s.route("/").get(n,o).post(n,l),s.route("/:id").delete(n,i),e.exports=s,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&d.register(s,"router","C:\\Users\\aishw\\OneDrive\\Desktop\\Entertainment App\\server\\routes\\bookmarkRoutes.js"),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)},686:(e,a,r)=>{var t;e=r.nmd(e),(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const s=r(860).Router(),{registerUser:o,loginUser:l,validateUser:i}=r(335),{protect:n}=r(486);var d,u;s.post("/",o),s.post("/login",l),s.route("/").get(n,i),e.exports=s,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&d.register(s,"router","C:\\Users\\aishw\\OneDrive\\Desktop\\Entertainment App\\server\\routes\\userRoutes.js"),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)},423:(e,a,r)=>{"use strict";r.r(a);var t,s=r(860),o=r.n(s),l=r(93),i=r(17),n=r.n(i),d=r(604);e=r.hmd(e),(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature,r(357);const u=r(142).config(),{errorHandler:m}=r(69);r(388)();const g=o()();l.Z.compile(g);const p=process.cwd();g.use("/public",o().static(n().join(p,"public"))),g.use(o().json()),g.use(o().urlencoded({extended:!1})),g.use("/user",r(686)),g.use("/bookmarks",r(970)),g.get("*",((e,a)=>{a.status(200).send((0,d.Z)())})),g.use(m);let c=process.env.PORT||3e3;var b,h;g.listen(c,(e=>{e&&console.log(e),console.info("Server started on port %s.",c)})),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(u,"dotenv","C:\\Users\\aishw\\OneDrive\\Desktop\\Entertainment App\\server\\server.js"),b.register(g,"app","C:\\Users\\aishw\\OneDrive\\Desktop\\Entertainment App\\server\\server.js"),b.register(p,"CURRENT_WORKING_DIR","C:\\Users\\aishw\\OneDrive\\Desktop\\Entertainment App\\server\\server.js"),b.register(c,"port","C:\\Users\\aishw\\OneDrive\\Desktop\\Entertainment App\\server\\server.js")),(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&h(e)},604:(e,a,r)=>{"use strict";r.d(a,{Z:()=>l}),r.p;const t=r.p+"736eae1ff09acfe04c50e0fb91172267.png";var s;"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature,e=r.hmd(e),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&s(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const o=()=>`\n    <!doctype html>\n    <html lang="en">\n    <head>\n        <meta charset="utf-8">\n        \n        <meta name="viewport" content="width=device-width, initial-scale=1">\n\n        <link rel="shortcut icon" type="image/png" sizes="32x32" href=${t}>\n\n        <title>Entertainment Web App</title>\n    </head>\n    <body>\n        <div id="root"></div>\n        <script src="/public/bundle.js"><\/script>\n    </body>\n    </html>`,l=o;var i,n;(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&i.register(o,"default","C:\\Users\\aishw\\OneDrive\\Desktop\\Entertainment App\\template.js"),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&n(e)},83:(e,a,r)=>{var t;e=r.nmd(e),(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const s=r(17),{CleanWebpackPlugin:o}=r(159),l=r(510),i=r(354),n=process.cwd(),d={name:"browser",mode:"development",devtool:"eval-source-map",entry:["webpack-hot-middleware/client?reload=true",s.join(n,"client/index.js")],output:{path:s.join(n,"/public"),filename:"bundle.js",publicPath:"/public/"},module:{rules:[{test:/\.js?$/,exclude:/node_modules/,use:["babel-loader"]},{test:/\.(png|jpg|gif)$/,use:[{loader:"file-loader",options:{name:"[path][name].[ext]"}}]},{test:/\.svg$/,use:["@svgr/webpack"]},{test:/\.(woff|woff2|eot|ttf|otf)$/,type:"asset/resource"},{test:/\.css$/,use:["style-loader","css-loader"]},{test:/\.scss$/,use:["style-loader","css-loader","sass-loader"]}]},plugins:[new o({cleanOnceBeforeBuildPatterns:["**/*"]}),new i.HotModuleReplacementPlugin,new i.NoEmitOnErrorsPlugin,new l({favicon:"./client/assets/favicon-32x32.png"})],resolve:{alias:{"react-dom":"@hot-loader/react-dom"}}};var u,m;e.exports=d,(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(n,"CURRENT_WORKING_DIR","C:\\Users\\aishw\\OneDrive\\Desktop\\Entertainment App\\webpack.config.client.js"),u.register(d,"config","C:\\Users\\aishw\\OneDrive\\Desktop\\Entertainment App\\webpack.config.client.js")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)},432:e=>{"use strict";e.exports=require("bcryptjs")},159:e=>{"use strict";e.exports=require("clean-webpack-plugin")},357:e=>{"use strict";e.exports=require("colors")},142:e=>{"use strict";e.exports=require("dotenv")},860:e=>{"use strict";e.exports=require("express")},776:e=>{"use strict";e.exports=require("express-async-handler")},510:e=>{"use strict";e.exports=require("html-webpack-plugin")},344:e=>{"use strict";e.exports=require("jsonwebtoken")},185:e=>{"use strict";e.exports=require("mongoose")},354:e=>{"use strict";e.exports=require("webpack")},17:e=>{"use strict";e.exports=require("path")},613:e=>{"use strict";e.exports=JSON.parse('[{"title":"Beyond Earth","thumbnail":{"trending":{"small":"./assets/thumbnails/beyond-earth/trending/small.jpg","large":"./assets/thumbnails/beyond-earth/trending/large.jpg"},"regular":{"small":"./assets/thumbnails/beyond-earth/regular/small.jpg","medium":"./assets/thumbnails/beyond-earth/regular/medium.jpg","large":"./assets/thumbnails/beyond-earth/regular/large.jpg"}},"year":2019,"category":"Movie","rating":"PG","isBookmarked":false,"isTrending":true},{"title":"Bottom Gear","thumbnail":{"trending":{"small":"./assets/thumbnails/bottom-gear/trending/small.jpg","large":"./assets/thumbnails/bottom-gear/trending/large.jpg"},"regular":{"small":"./assets/thumbnails/bottom-gear/regular/small.jpg","medium":"./assets/thumbnails/bottom-gear/regular/medium.jpg","large":"./assets/thumbnails/bottom-gear/regular/large.jpg"}},"year":2021,"category":"Movie","rating":"PG","isBookmarked":false,"isTrending":true},{"title":"Undiscovered Cities","thumbnail":{"trending":{"small":"./assets/thumbnails/undiscovered-cities/trending/small.jpg","large":"./assets/thumbnails/undiscovered-cities/trending/large.jpg"},"regular":{"small":"./assets/thumbnails/undiscovered-cities/regular/small.jpg","medium":"./assets/thumbnails/undiscovered-cities/regular/medium.jpg","large":"./assets/thumbnails/undiscovered-cities/regular/large.jpg"}},"year":2019,"category":"TV Series","rating":"E","isBookmarked":false,"isTrending":true},{"title":"1998","thumbnail":{"trending":{"small":"./assets/thumbnails/1998/trending/small.jpg","large":"./assets/thumbnails/1998/trending/large.jpg"},"regular":{"small":"./assets/thumbnails/1998/regular/small.jpg","medium":"./assets/thumbnails/1998/regular/medium.jpg","large":"./assets/thumbnails/1998/regular/large.jpg"}},"year":2021,"category":"Movie","rating":"18+","isBookmarked":false,"isTrending":true},{"title":"Dark Side of the Moon","thumbnail":{"trending":{"small":"./assets/thumbnails/dark-side-of-the-moon/trending/small.jpg","large":"./assets/thumbnails/dark-side-of-the-moon/trending/large.jpg"},"regular":{"small":"./assets/thumbnails/dark-side-of-the-moon/regular/small.jpg","medium":"./assets/thumbnails/dark-side-of-the-moon/regular/medium.jpg","large":"./assets/thumbnails/dark-side-of-the-moon/regular/large.jpg"}},"year":2018,"category":"TV Series","rating":"PG","isBookmarked":true,"isTrending":true},{"title":"The Great Lands","thumbnail":{"regular":{"small":"./assets/thumbnails/the-great-lands/regular/small.jpg","medium":"./assets/thumbnails/the-great-lands/regular/medium.jpg","large":"./assets/thumbnails/the-great-lands/regular/large.jpg"}},"year":2019,"category":"Movie","rating":"E","isBookmarked":false,"isTrending":false},{"title":"The Diary","thumbnail":{"regular":{"small":"./assets/thumbnails/the-diary/regular/small.jpg","medium":"./assets/thumbnails/the-diary/regular/medium.jpg","large":"./assets/thumbnails/the-diary/regular/large.jpg"}},"year":2019,"category":"TV Series","rating":"PG","isBookmarked":false,"isTrending":false},{"title":"Earth’s Untouched","thumbnail":{"regular":{"small":"./assets/thumbnails/earths-untouched/regular/small.jpg","medium":"./assets/thumbnails/earths-untouched/regular/medium.jpg","large":"./assets/thumbnails/earths-untouched/regular/large.jpg"}},"year":2017,"category":"Movie","rating":"18+","isBookmarked":true,"isTrending":false},{"title":"No Land Beyond","thumbnail":{"regular":{"small":"./assets/thumbnails/no-land-beyond/regular/small.jpg","medium":"./assets/thumbnails/no-land-beyond/regular/medium.jpg","large":"./assets/thumbnails/no-land-beyond/regular/large.jpg"}},"year":2019,"category":"Movie","rating":"E","isBookmarked":false,"isTrending":false},{"title":"During the Hunt","thumbnail":{"regular":{"small":"./assets/thumbnails/during-the-hunt/regular/small.jpg","medium":"./assets/thumbnails/during-the-hunt/regular/medium.jpg","large":"./assets/thumbnails/during-the-hunt/regular/large.jpg"}},"year":2016,"category":"TV Series","rating":"PG","isBookmarked":false,"isTrending":false},{"title":"Autosport the Series","thumbnail":{"regular":{"small":"./assets/thumbnails/autosport-the-series/regular/small.jpg","medium":"./assets/thumbnails/autosport-the-series/regular/medium.jpg","large":"./assets/thumbnails/autosport-the-series/regular/large.jpg"}},"year":2016,"category":"TV Series","rating":"18+","isBookmarked":false,"isTrending":false},{"title":"Same Answer II","thumbnail":{"regular":{"small":"./assets/thumbnails/same-answer-2/regular/small.jpg","medium":"./assets/thumbnails/same-answer-2/regular/medium.jpg","large":"./assets/thumbnails/same-answer-2/regular/large.jpg"}},"year":2017,"category":"Movie","rating":"E","isBookmarked":false,"isTrending":false},{"title":"Below Echo","thumbnail":{"regular":{"small":"./assets/thumbnails/below-echo/regular/small.jpg","medium":"./assets/thumbnails/below-echo/regular/medium.jpg","large":"./assets/thumbnails/below-echo/regular/large.jpg"}},"year":2016,"category":"TV Series","rating":"PG","isBookmarked":false,"isTrending":false},{"title":"The Rockies","thumbnail":{"regular":{"small":"./assets/thumbnails/the-rockies/regular/small.jpg","medium":"./assets/thumbnails/the-rockies/regular/medium.jpg","large":"./assets/thumbnails/the-rockies/regular/large.jpg"}},"year":2015,"category":"TV Series","rating":"E","isBookmarked":true,"isTrending":false},{"title":"Relentless","thumbnail":{"regular":{"small":"./assets/thumbnails/relentless/regular/small.jpg","medium":"./assets/thumbnails/relentless/regular/medium.jpg","large":"./assets/thumbnails/relentless/regular/large.jpg"}},"year":2017,"category":"Movie","rating":"PG","isBookmarked":true,"isTrending":false},{"title":"Community of Ours","thumbnail":{"regular":{"small":"./assets/thumbnails/community-of-ours/regular/small.jpg","medium":"./assets/thumbnails/community-of-ours/regular/medium.jpg","large":"./assets/thumbnails/community-of-ours/regular/large.jpg"}},"year":2018,"category":"TV Series","rating":"18+","isBookmarked":false,"isTrending":false},{"title":"Van Life","thumbnail":{"regular":{"small":"./assets/thumbnails/van-life/regular/small.jpg","medium":"./assets/thumbnails/van-life/regular/medium.jpg","large":"./assets/thumbnails/van-life/regular/large.jpg"}},"year":2015,"category":"Movie","rating":"PG","isBookmarked":false,"isTrending":false},{"title":"The Heiress","thumbnail":{"regular":{"small":"./assets/thumbnails/the-heiress/regular/small.jpg","medium":"./assets/thumbnails/the-heiress/regular/medium.jpg","large":"./assets/thumbnails/the-heiress/regular/large.jpg"}},"year":2021,"category":"Movie","rating":"PG","isBookmarked":true,"isTrending":false},{"title":"Off the Track","thumbnail":{"regular":{"small":"./assets/thumbnails/off-the-track/regular/small.jpg","medium":"./assets/thumbnails/off-the-track/regular/medium.jpg","large":"./assets/thumbnails/off-the-track/regular/large.jpg"}},"year":2017,"category":"Movie","rating":"18+","isBookmarked":true,"isTrending":false},{"title":"Whispering Hill","thumbnail":{"regular":{"small":"./assets/thumbnails/whispering-hill/regular/small.jpg","medium":"./assets/thumbnails/whispering-hill/regular/medium.jpg","large":"./assets/thumbnails/whispering-hill/regular/large.jpg"}},"year":2017,"category":"Movie","rating":"E","isBookmarked":false,"isTrending":false},{"title":"112","thumbnail":{"regular":{"small":"./assets/thumbnails/112/regular/small.jpg","medium":"./assets/thumbnails/112/regular/medium.jpg","large":"./assets/thumbnails/112/regular/large.jpg"}},"year":2013,"category":"TV Series","rating":"PG","isBookmarked":false,"isTrending":false},{"title":"Lone Heart","thumbnail":{"regular":{"small":"./assets/thumbnails/lone-heart/regular/small.jpg","medium":"./assets/thumbnails/lone-heart/regular/medium.jpg","large":"./assets/thumbnails/lone-heart/regular/large.jpg"}},"year":2017,"category":"Movie","rating":"E","isBookmarked":true,"isTrending":false},{"title":"Production Line","thumbnail":{"regular":{"small":"./assets/thumbnails/production-line/regular/small.jpg","medium":"./assets/thumbnails/production-line/regular/medium.jpg","large":"./assets/thumbnails/production-line/regular/large.jpg"}},"year":2018,"category":"TV Series","rating":"PG","isBookmarked":false,"isTrending":false},{"title":"Dogs","thumbnail":{"regular":{"small":"./assets/thumbnails/dogs/regular/small.jpg","medium":"./assets/thumbnails/dogs/regular/medium.jpg","large":"./assets/thumbnails/dogs/regular/large.jpg"}},"year":2016,"category":"TV Series","rating":"E","isBookmarked":true,"isTrending":false},{"title":"Asia in 24 Days","thumbnail":{"regular":{"small":"./assets/thumbnails/asia-in-24-days/regular/small.jpg","medium":"./assets/thumbnails/asia-in-24-days/regular/medium.jpg","large":"./assets/thumbnails/asia-in-24-days/regular/large.jpg"}},"year":2020,"category":"TV Series","rating":"PG","isBookmarked":false,"isTrending":false},{"title":"The Tasty Tour","thumbnail":{"regular":{"small":"./assets/thumbnails/the-tasty-tour/regular/small.jpg","medium":"./assets/thumbnails/the-tasty-tour/regular/medium.jpg","large":"./assets/thumbnails/the-tasty-tour/regular/large.jpg"}},"year":2016,"category":"TV Series","rating":"PG","isBookmarked":false,"isTrending":false},{"title":"Darker","thumbnail":{"regular":{"small":"./assets/thumbnails/darker/regular/small.jpg","medium":"./assets/thumbnails/darker/regular/medium.jpg","large":"./assets/thumbnails/darker/regular/large.jpg"}},"year":2017,"category":"Movie","rating":"18+","isBookmarked":true,"isTrending":false},{"title":"Unresolved Cases","thumbnail":{"regular":{"small":"./assets/thumbnails/unresolved-cases/regular/small.jpg","medium":"./assets/thumbnails/unresolved-cases/regular/medium.jpg","large":"./assets/thumbnails/unresolved-cases/regular/large.jpg"}},"year":2018,"category":"TV Series","rating":"18+","isBookmarked":false,"isTrending":false},{"title":"Mission: Saturn","thumbnail":{"regular":{"small":"./assets/thumbnails/mission-saturn/regular/small.jpg","medium":"./assets/thumbnails/mission-saturn/regular/medium.jpg","large":"./assets/thumbnails/mission-saturn/regular/large.jpg"}},"year":2017,"category":"Movie","rating":"PG","isBookmarked":true,"isTrending":false}]')}},a={};function r(t){var s=a[t];if(void 0!==s)return s.exports;var o=a[t]={id:t,loaded:!1,exports:{}};return e[t](o,o.exports,r),o.loaded=!0,o.exports}r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a}),a},r.d=(e,a)=>{for(var t in a)r.o(a,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.p="/public/";var t=r(423);module.exports=t})();