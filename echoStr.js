process.stdin.setEncoding('utf-8');


process.stdin.on('readable',function(){
	var chunk = process.stdin.read();
	if(chunk !== null && chunk.length>0) {
		chunk = chunk.trim();
		echoStr(chunk);
	}
})


function echoStr(str) {
	var flag = 1;
	var maxflag = 0;
	var arr=[],left=[],right=[],res=[],temp=[];
	arr = str.split("");

	
	for(;flag<arr.length;flag++) {
		left = arr.slice(0,flag);
		right = arr.slice(flag);
		right.reverse();

		temp = maxEcho(left,right);
		temp.reverse();


		if(temp.length > res.length) {
			res = temp;
			maxflag = flag;
		}

	}

	var rev = res;

	rev = res.concat();
	rev.reverse();
	res = res.concat(rev);
	res = res.join("");
	console.log("res "+res);

}

function maxEcho(left,right){
	var i=0,j=0,m = left.length,n = right.length;
	var res = [];
	var c = [];

	for (var temp = 0;temp<n+1;temp++) {
		c[temp] = [];
	}

	for(;i<=n;i++) {
		c[i][0] = 0;
	}
 
	for(;j<=m;j++) {
		c[0][j] = 0;
	}

	for(i = 1;i<=n; i++){
		for(j = 1;j<=m;j++){
			if(left[i-1] == right[j-1]){c[i][j] = c[i-1][j-1]+1;}
			else {c[i][j] = (c[i-1][j]>c[i][j-1]) ? c[i-1][j]:c[i][j-1];}
		}
	}
	function search(l,f){
		if(l==0||j==0){return};
		if(c[l][f]>c[l-1][f] && c[l][f]>c[l][f-1]) {
			res.push(left[l-1]);
			search(l-1,f-1);
		} else if (c[l][f]>c[l-1][f]) {
			search(l,f-1);
		} else {
			search(l-1,f);
		}
	}
	search(n,m);

	return res;
}