process.stdin.setEncoding('utf8');

process.stdin.on('readable',function(){
	var chunk = process.stdin.read();
	if(chunk !== null)
	{
		chunk = chunk.trim();
		var arr = chunk.split(' ');	
		console.log(arr);
		var res = quickSort(arr);
		console.log (res);
	}
})


//归并排序
function mergeSort(arr) {
	if (arr.length==1) {
		return arr;
	}
	else {
		var middle = Math.floor(arr.length/2);
		var left = arr.slice(0,middle);
		var right = arr.slice(middle);
		return merge(mergeSort(left),mergeSort(right));
	}


	function merge(left,right) {
		var res = [];
		while(left.length>0 && right.length>0) {
			if(left[0]<right[0]) {
				res.push(left.shift());
			} else {
				res.push(right.shift());
			}
		}
		return res.concat(left,right);
	}
}



//快速排序

function quickSort(arr) {
	function sort(index,endIndex) {
		var start = index;
		var end = endIndex;
		var flag = arr[index];
		if (endIndex-index>0) {
			while (start<end) {
				for(;start<end;end--) {
					if (flag>arr[end]) {
						arr[start++] = arr[end];
						break;
					}
				}

				for(;start<end;start++) {
					if (flag<arr[start]) {
						arr[end--] = arr[start];
						break;
					}
				}
			}
			arr[start] = flag;
			sort(index,start);
			sort(start+1,endIndex);
		}
	}
	sort(0,arr.length-1);
	return arr;
}