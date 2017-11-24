var fs = require('fs');
var list=[];
fs.readFile('list_read.txt', function(err, data) {
    if(err) throw err;
    // var array = data.toString().split("\n");
    // for(i in array) {
    	// console.log('data', data.toString().split(',').forEach(x => JSON.parse(x).map(getShape)));
    	// list = array[i];
        JSON.parse('['+data.toString()+']').map(getShape);
    // }
});


function getShape(x){
    x.sort(function(a,b){return a - b});//sort numbers
    
    switch(true){
        case (x.length>4):
            console.log('other polygon') ;
            break;
        case (x.length==4):          
            if(x.map((num, i)=>num == num[i+1]||num==num[i-1])) console.log('square');
        	else if (x[0]==x[1]&&x[2]==x[3]) console.log('rectangle');
        	else console.log('other polygon');
            break;
        case (x.length==3):
            if (x[0]+x[1]>x[2]) console.log('triangle');
            break;
        default:
             console.log('length too short');

    }
}