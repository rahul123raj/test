//! max repeated word in a sentence

function maxRepeat(str){

    let words = []
    let word = ""
    for(let i=0;i<str.length;i++){
        if(str[i] !== " "){
            word += str[i]
        }else if(word !== ""){
            words.push(word)
            word = ""
        }
    }
    if(word !== ""){
        words.push(word)
    }

    let freq = {}
    let maxcount = 0
    let mostrepeated

    for(let j=0;j<words.length;j++){
        if(!freq[words[j]]){
            freq[words[j]] = 1
        }else{
            freq[words[j]]++
        }

        if(freq[words[j]] > maxcount){
            maxcount = freq[words[j]]
            mostrepeated = words[j]
        }
    }

    return [mostrepeated, maxcount]
}

console.log(maxRepeat("I love you and I want money"))