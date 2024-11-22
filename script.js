function mincost(arr)
{ 
//write your code here
// return the min cost

	let totalCost=0;

	while(arr.length>1){
		arr.sort();
		let cost= arr.pop()+arr.pop();
		totalCost += cost;
		arr.push(cost);
		
	}
	  return totalCost;
}

module.exports=mincost;
