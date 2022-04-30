// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class OrderDetailsService {

//   constructor() { }
  
// }
import { Injectable } from '@angular/core';

@Injectable({

providedIn: 'root'

})

export class OrderDetailsService {

constructor() { }

packageDetails = [

{

id:1,

packageName:"Place-1",

packageDetails:"Boston commoms details here",

packageCost:300,

packageImg:"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"

},

{

id:2,

packageName:"PLace - 2",

packageDetails:"Place - 2 details here",

packageCost:500,

packageImg:"https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1816&q=80"

},

{

id:3,

packageName:"PLace - 3",

packageDetails:"Place - 3 details here",

packageCost:600,

packageImg:"https://images.unsplash.com/photo-1542971326-5353882f757e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80"

},

{

id:4,

packageName:"Place-4",

packageDetails:"Place-4 here",

packageCost:450,

packageImg:"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"

},

{

id:5,

packageName:"PLace - 5",

packageDetails:"Place - 5 details here",

packageCost:500,

packageImg:"https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1816&q=80"

},

{

id:6,

packageName:"Place-6",

packageDetails:"Place-6 details here",

packageCost:800,

packageImg:"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"

},

{

id:7,

packageName:"PLace - 7",

packageDetails:"Place - 7 details here",

packageCost:700,

packageImg:"https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1816&q=80"

},

{

id:8,

packageName:"PLace - 8",

packageDetails:"Place - 28details here",

packageCost:850,

packageImg:"https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1816&q=80"

}

]

}