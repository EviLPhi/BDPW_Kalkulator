var str = 'Sample Case'
str = str.toLowerCase();
str = str.replace(/\s+/g,"")
console.log(str)
each_char = str.split("")
var new_str = []
for(i in each_char){
    let char1 = each_char[i]
    if(!new_str.includes(char1)){
        new_str.push(char1)
        for(var j=i;j<each_char.length;j++){
            let char2 = each_char[j]
            if(char1 == char2 && i != j ){new_str.push(char2)}
        }
    }
}
console.log(new_str.join(""))