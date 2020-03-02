// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

 var acctData =[
   {
      "acctNum":"AAA - 1234",
      "user":"Alice"
   },
   {
      "acctNum":"AAA - 5231",
      "user":"Bob"
   },
   {
      "acctNum":"AAA - 9921",
      "user":"Alice"
   },
   {
      "acctNum":"AAA - 8191",
      "user":"Alice"
   }
];
 var balance = {  "AAA - 1234": 4593.22, 
  "AAA - 9921": 0,  
  "AAA - 5231": 232142.5, 
  "AAA - 8191": 4344 }; 

//1.1 list of account numbers for user name . 
//Here Username is taken as "Alice"
function accList(input, name) {
    var output = [];
    for (var i=0; i < input.length ; ++i)
        if(input[i]['user']===name){
            output.push(input[i]['acctNum']);
}
    return output;
};
var accNumbers=accList(acctData,"Alice");
console.log(accNumbers);

//List of account numbers searched of User ="Alice"
// Output :["AAA - 1234", "AAA - 9921", "AAA - 8191"]


//1.2 Sorting the array on the basis of acctNum

acctData.sort(function(a,b){
if(a.acctNum>b.acctNum){
  return 1;
}else if(a.acctNum<b.acctNum){
  return-1;
}else{
  return 0;
}
});

/*output :[ {acctNum: "AAA - 1234", user: "Alice"},
            {acctNum: "AAA - 5231", user: "Bob"},
            {acctNum: "AAA - 8191", user: "Alice"},
            {acctNum: "AAA - 9921", user: "Alice"}]*/




//1.3 sorting in direction with asc default

var sortedDetails=acctNum(acctData,"desc");

function acctNum(acctData,order){
if(order=='asc'){
  acctData.sort(function(a,b){
    if(a['acctNum']>b['acctNum'])
      return 1;
    else if(a['acctNum']<b['acctNum'])
        return -1;
else
  return 0;

});


}
else{
  acctData.sort(function(a,b){
    if(a['acctNum']<b['acctNum'])
      return 1;
    else if(a['acctNum']>['acctNum'])
        return -1;
else
  return 0;

});

}};

//2.1 filtering by object in array of object

function filterByBob(acctData){
 
  var newArray=[];
for(var i=0; i<acctData.length;i++){
  if(acctData[i]['user']==='Bob'){
    newArray.push(acctData[i]);
  }
}
return newArray;

};

var filterList=filterByBob(acctData);
console.log(filterList);

//outPut :{acctNum: "AAA - 5231", user: "Bob"}
//0:{acctNum: "AAA - 5231", user: "Bob"}


//2.2  filtered by Charlie

function filterByCharlie(acctData){
 
  var newArray=[];
for(var i=0; i<acctData.length;i++){
  if(acctData[i]['user']==='Charlie'){
    newArray.push(acctData[i]);
  }
}
return newArray;

};

var filterList=filterByCharlie(acctData);
console.log(filterList);

//OutPut :Undefined

//2.3  filtered by Charlie

acctData.sort(function(a,b){
if(a.acctNum>b.acctNum){
  return 1;
}else if(a.acctNum<b.acctNum){
  return-1;
}else{
  return 0;
}
});

/*output :[ {acctNum: "AAA - 1234", user: "Alice"},
            {acctNum: "AAA - 5231", user: "Bob"},
            {acctNum: "AAA - 8191", user: "Alice"},
            {acctNum: "AAA - 9921", user: "Alice"}]*/



//2.4 d) filtered by Alice; sorted by balance ascending 

function filterAndSort(acctData,name,balance){

 var aliceArray=[];

for(var i=0;i<acctData.length;i++){
  if(acctData[i]['user']==='Alice'){
    aliceArray.push(acctData[i]);
  }
}
console.log(aliceArray);

/*
0: {acctNum: "AAA - 1234", user: "Alice"}
1: {acctNum: "AAA - 9921", user: "Alice"}
2: {acctNum: "AAA - 8191", user: "Alice"}
length: 3
*/

var balanceEntry = Object.entries(balance);
var sortedBalance = balanceEntry.sort((a, b) => a[1] - b[1]);
console.log(sortedBalance);

/*OutPUT:0: (2) ["AAA - 9921", 0]
1: (2) ["AAA - 8191", 4344]
2: (2) ["AAA - 1234", 4593.22]
3: (2) ["AAA - 5231", 232142.5]
*/


};
 




