function randomize(input){
    var res = 0;
    var arr = [];
        for(var i=0; i < 100;i++){
            var random = Math.floor(Math.random()*input);
            random++
            // random.toString()
            if(random % 2 == true && arr.length < input){
                arr.push(random)

            }
         }    
    console.log ("array : [" + arr + "]" )
for(var e = 0; e < input; e++){
   res += arr[e] 
}
    console.log(res)
}

randomize(10)