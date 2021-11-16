//write your code here
const replaceWithYerr = (array, start = 0, num= array.length-1 )=>{
    const replaced = [];
    for (let i = 0; i< array.length; i++){
        if (i > start && i < start+num){
            replaced.push("yerr")
        }else{
            replaced.push(array[i])
        }
    }
    return replaced
}
const months= ['Jan', 'February', 'March', 'April', 'May', 'June'];

console.log(replaceWithYerr(months, 1,3))