//XML-HTTP REQUEST ARE USED TO INTERACT WITH SERVERS VIA API
//4 STEPS
//STEP 01:create a XHR object
var request= new XMLHttpRequest();
//step 02:opening a connection
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
//step 03:sending a connection
request.send();
//step 04:once the data successfully loaded from server
//status code :200
//100-599
request.onload=function(){
    //the data coming from the server is of type string
    // to convert string to object we use JSON.parse
    var data=JSON.parse(request.response);
    console.log(data);
    for(var i=0;i<data.length;i++){
        console.log(data[i].name+" "+data[i].capital);
    }
    
}