// Search Algorithms 
function linearSearch(arr, target) {
    for(let i = 0;i < arr.length;i++){
        if(arr[i] === target){
            return i
        }
    }
}

const arr = [5,3,10,-10,33,51];

console.log(linearSearch(arr,10));