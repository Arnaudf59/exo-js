const temp = [12, 25, 5, 7, 6, -5];
/*const trie_val = (i,j) => i - j;
const trie = [...temp].sort(trie_val);
console.log(`->[${trie}]`);*/
let val_0 = 0;
let val_1 = 0;
let val_2 = 0;
let val_3 = 0;
let val_4 = 0;
for(let i = 0; i < temp.length; i++){
    if(i == 0){
        val_0 = temp[i];
        console.log(val_0);
    }else{
        for(y = (i-1); y >= 1; y--){
            variable = 'val_'+y;
            variable2 = 'val_'+i;
            console.log(variable2);
            if(temp[i] >= variable){
                variable2 = temp[i];
            }else{
                variable2 = variable;
                variable = temp[i];
                console.log(variable);
            }
        }
    }
}
let result = [val_0, val_1, val_2, val_3, val_4];
console.log(`-> [${result}]`);
