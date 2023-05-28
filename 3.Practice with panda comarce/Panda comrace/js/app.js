// //work 1 connect to index.html;
// console.log("I am connecting to dom");

// যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা। 
const headers =document.getElementsByTagName('h2');
for (const header of headers) {
    header.style.color="darkblue";
    
}


// ৩. ওই ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা। 

 document.getElementById("backpack").style.backgroundColor="lightgray";
 document.getElementById("backpack").style.borderRadius="20px";


// ৪. card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা 
        //    document.getElementsByClassName("card").style.borderRadius="30px"
        const cards= document.getElementsByClassName("card");
        // console.log(cards);
        for(const card of cards)
        {
            card.style.borderRadius="30px";
        }
// // .

// ৫. কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো 

function red_bag(){
    console.log("I just ordered the Red Back");
}

// ৬. এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে সেটা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো। 

const delCards =document.getElementsByClassName('panda-btn-buy-now');

for(const btn of delCards){
   
    btn.addEventListener('click',function(){
        btn.style.display="none";
    })
}

// ৭. একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না। 
        
    document.getElementById("exampleInputEmail1").addEventListener('keyup',function(event){
        const InputValue=event.target.value;
        console.log(InputValue);
        if (InputValue=="email") {
            document.getElementById('submit').removeAttribute("disabled");
        }
        else{
            document.getElementById('submit').setAttribute("disabled",true);
        }
    })

// ৮. (অপশনাল) একটা মজার চ্যালেঞ্জ। কোন একটা ইমেজ এর উপরে mouseenter করলে সেই ইমেজটা চেইঞ্জ হয়ে যাবে। একটু গুগলে সার্চ দিয়ে দেখো। জিনিসটা কিভাবে করা যেতে পারে। 
const image = document.getElementById('chageBag');
console.log(image);
image.addEventListener('mouseover', function(){
    image.src = "images/bags/bag-3.png"
  })
  image.addEventListener('mouseout', function(){
      image.src = "images/bags/bag-1.png"
    })
// ৯. (অপশনাল) নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে। 

document.getElementById("subscribe").addEventListener("dblclick",function(e){
    document.getElementById("subscribe").style.backgroundColor='lightblue';
})