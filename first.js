


var obj ={
	toString: function(){
	return "Buddhi";
	},
	valueOf: function(){
	return 10;
	}
};


test(0,0);

function test(var_1,var_2){


var today = new Date();
var from = new Date("2015/12/31");

//console.log(from);


//var s1 = new String("Buddhi");
//var s2 = new String("Buddhi");

//console.log("Test object :" + var_2);

//console.log(typeof "Buddhi");
//console.log("Buddhi Ediriisnghe".toUpperCase());
//var a = NaN;

//console.log(a!==a);

//var b ="foobar";

//console.log(b!==b);


}



function isRealyNaN(value){
	return value!==value;

}


function point(x,y){

	if(x===undefined){
		x=320;
	}
	if(y===undefined){
		y=240;
	}
	return {x:x,y:y};
}

