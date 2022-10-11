const inputArray = [3,2,1];
const target = 5 ;

const matematica = ( array , target ) => {
	let emptyArray = [];
	const getLength = array.length;
	for(let i = 0; i<getLength ; i++){
		for(j=i+1; j<= getLength; j++){
			if(array[i]+array[j] === target)
				{
					emptyArray = emptyArray.concat(array[i]).concat(array[j]);
					return (emptyArray);
				}
		}
	}
	console.log("nu s-au gasit numere");
}

matematica(inputArray,target);