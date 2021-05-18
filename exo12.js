let temp = [10, 5, -6, 14, -1];
let val = 0;
for(i = 0; i <= temp.length; i++){
    if(i != 0){
        if(Math.abs(temp[i]) < Math.abs(val)){
            val = temp[i];
        }
    }else{
        val = temp[i];
    }
}
console.log(`La temperature la plus proche de 0°C est ${val}°C`);