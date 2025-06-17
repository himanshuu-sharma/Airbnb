// const express=require("express");
// const app=express();
// const mongoose=require("mongoose");
// const Listing = require("./models/listing.js");
// const path=require("path");
// const methodOverride=require("method-override");


// const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";

// main().then(()=>{
//     console.log("connected to db");
// }).catch(err=>{
//     console.log(err);
// })
// async function main(){
//     await mongoose.connect(MONGO_URL);
// } 

// // Set EJS as the view engine
// app.set("view engine", "ejs");

// // Set the views directory
// app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({extended:true}));
// const express=require("express");
// const app=express();
// const mongoose=require("mongoose");
// const Listing = require("./models/listing.js");
// const path=require("path");
// const methodOverride=require("method-override");


// const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";

// main().then(()=>{
//     console.log("connected to db");
// }).catch(err=>{
//     console.log(err);
// })
// async function main(){
//     await mongoose.connect(MONGO_URL);
// } 

// // Set EJS as the view engine
// app.set("view engine", "ejs");

// // Set the views directory
// app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({extended:true}));
// app.use(methodOverride(_method));


// app.get("/",(req,res)=>{
//     res.send("hi,i am root");
// });

// //index route
// app.get("/listings",async(req, res) => {
//    const allListing=await Listing.find({});
//    res.render("listings/index",{allListing});

// });
// //new route
// app.get("/listings/new",(req,res)=>{
//     res.render("listings/new.ejs");
// })


// //show route
// app.get("/listings/:id",async(req,res)=>{
//     let {id}=req.params;
//     const listing=await Listing.findById(id);
//     res.render("listings/show.ejs",{listing});
// });
// //create route
// app.post("/listings",async(req,res)=>{
//     // let {title,description,image,price,country,location}=req.body;
//     // let listing=req.body.listing;
//     const newListing=new Listing(req.body.listing);
//     await newListing.save();
//     // console.log(listing);
//     res.redirect("/listings");
// });

// //Edit route
// app.get("/listings/:id/edit",async(req,res)=>{
//     let {id}=req.params;
//     const listing=await Listing.findById(id);
//     res.render(" listings/edit.ejs",{listing});

//     //edit route
// app.put("/listings/:id",async(req,res)=>{
//         let {id}=req.params;
//         await Listing.findByIdAndUpdate(id,{...req.body.listing});
//         redirect("/listings");


// })

// })




// // app.get("/testListing",(req,res)=>{
// //     let sampleListing=new Listing({
// //         title:"my new villa",
// //         description:"by the beach",
// //         price:1200,
// //         location:"calangute,goa",
// //         country:"india",

// //     });
// //     sampleListing.save();
// //     console.log("sample was saved");
// //     res.send("successful testing");
// // });
 
// app.listen(8080,()=>{
//     console.log("server is listening to port 8080");
// })


// app.get("/",(req,res)=>{
//     res.send("hi,i am root");
// });

// //index route
// app.get("/listings",async(req, res) => {
//    const allListing=await Listing.find({});
//    res.render("listings/index",{allListing});

// });
// //new route
// app.get("/listings/new",(req,res)=>{
//     res.render("listings/new.ejs");
// })


// //show route
// app.get("/listings/:id",async(req,res)=>{
//     let {id}=req.params;
//     const listing=await Listing.findById(id);
//     res.render("listings/show.ejs",{listing});
// });
// //create route
// app.post("/listings",async(req,res)=>{
//     // let {title,description,image,price,country,location}=req.body;
//     // let listing=req.body.listing;
//     const newListing=new Listing(req.body.listing);
//     await newListing.save();
//     // console.log(listing);
//     res.redirect("/listings");
// });

// //Edit route
// app.get("/listings/:id/edit",async(req,res)=>{
//     let {id}=req.params;
//     const listing=await Listing.findById(id);
//     res.render(" listings/edit.ejs",{listing});

//     //edit route
// app.put("/listings/:id",async(req,res)=>{
//         let {id}=req.params;
//         await Listing.findByIdAndUpdate(id,{...req.body.listing});
//         redirect("/listings");


// })

// })




// // app.get("/testListing",(req,res)=>{
// //     let sampleListing=new Listing({
// //         title:"my new villa",
// //         description:"by the beach",
// //         price:1200,
// //         location:"calangute,goa",
// //         country:"india",

// //     });
// //     sampleListing.save();
// //     console.log("sample was saved");
// //     res.send("successful testing");
// // });
 
// app.listen(8080,()=>{
//     console.log("server is listening to port 8080");
// })









//clean code:-
// const express=require("express");
// const app=express();
// const mongoose=require("mongoose");
// const Listing = require("./models/listing.js");
// const path=require("path");
// const methodOverride=require("method-override");


// const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";

// main().then(()=>{
//     console.log("connected to db");
// }).catch(err=>{
//     console.log(err);
// })
// async function main(){
//     await mongoose.connect(MONGO_URL);
// } 

// // Set EJS as the view engine
// app.set("view engine", "ejs");

// // Set the views directory
// app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({extended:true}));
// app.use(methodOverride('_method'));



// app.get("/",(req,res)=>{
//     res.send("hi,i am root");
// });

// //index route
// app.get("/listings",async(req, res) => {
//    const allListing=await Listing.find({});
//    res.render("listings/index",{allListing});

// });
// //new route
// app.get("/listings/new",(req,res)=>{
//     res.render("listings/new.ejs");
// })


// //show route
// app.get("/listings/:id",async(req,res)=>{
//     let {id}=req.params;
//     const listing=await Listing.findById(id);
//     res.render("listings/show.ejs",{listing});
// });
// //create route
// app.post("/listings",async(req,res)=>{
//     // let {title,description,image,price,country,location}=req.body;
//     // let listing=req.body.listing;
//     const newListing=new Listing(req.body.listing);
//     await newListing.save();
//     // console.log(listing);
//     res.redirect("/listings");
// });

// //Edit route
// app.get("/listings/:id/edit",async(req,res)=>{
//     let {id}=req.params;
//     const listing=await Listing.findById(id);
//     res.render(" listings/edit.ejs",{listing});

//     //edit route
// app.put("/listings/:id",async(req,res)=>{
//         let {id}=req.params;
//         await Listing.findByIdAndUpdate(id,{...req.body.listing});
//         res.redirect("/listings");
// })
// })
// // app.get("/testListing",(req,res)=>{
// //     let sampleListing=new Listing({
// //         title:"my new villa",
// //         description:"by the beach",
// //         price:1200,
// //         location:"calangute,goa",
// //         country:"india",

// //     });
// //     sampleListing.save();
// //     console.log("sample was saved");
// //     res.send("successful testing");
// // });
 
// app.listen(8080,()=>{
//     console.log("server is listening to port 8080");
// })




//YAHA SE CLEAN CODE HAIN:-

const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Listing = require("./models/listing.js");
const path=require("path");
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate");  


const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";

main().then(()=>{
    console.log("connected to db");
}).catch(err=>{
    console.log(err);
})
async function main(){
    await mongoose.connect(MONGO_URL);
} 

// Set EJS as the view engine
app.set("view engine", "ejs");

// Set the views directory
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,"/public")));




app.get("/",(req,res)=>{
    res.send("hi,i am root");
});

//index route
app.get("/listings",async(req, res) => {
   const allListing=await Listing.find({});
   res.render("listings/index",{allListing});
});

//new route
app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs");
})

//show route
app.get("/listings/:id",async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
});

//create route
app.post("/listings",async(req,res)=>{
    const newListing=new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
});

// ✅ FIXED: Yahan sirf space hata diya
app.get("/listings/:id/edit",async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
});

// ✅ FIXED: Ye wala route bahar likha hai, nested nahi
app.put("/listings/:id",async(req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);

});


//DELETE ROUTE
app.delete("/listings/:id", async (req, res) => {
    let { id } = req.params;
    let deletedListing=await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");

});


app.listen(8080,()=>{
    console.log("server is listening to port 8080");
});








