const textarea = document.querySelector("#textarea");
const button = document.querySelector("#btn");
const output = document.querySelector(".output");

console.log(textarea,button,output)

button.addEventListener('click',() => {
    console.log(button , "hello")

    if(textarea.value === ''){
        output.innerHTML = 'please enter some text'
    }else {
        // aeiou

        const val = textarea.value;
        let count = 0;
        for(let i=0; i<val.length; i++){
            if (val[i] === "a" || val[i] === "e" || val[i] === "i" || val[i] === "e" || val[i] === "u");
            count++
        
        }
        output.innerHTML = `The number of voweis are ${count}`;
    }
});