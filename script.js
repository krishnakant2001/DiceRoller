
const rotation = () => {

    let timer = 0
    let interval = setInterval(() => {
        timer = timer + 120
        let n = Math.floor(Math.random()*6 + 1)
        
        for(let i=1; i<=6; i++){
            if(n == i){
                document.getElementById('image').src = "images/dice" + i + ".png"
                document.getElementById('wait').innerHTML = "Please wait"
                document.getElementById('num').innerHTML = ""
            }
        }
        
        if(timer > 1600){
            document.getElementById('wait').innerHTML = ""
            document.getElementById('num').innerHTML = n
            clearInterval(interval)
        }
    }, 100)


}
let button = document.getElementById('button')
button.addEventListener('click', rotation)

// function rotation(){
//     let number = Math.floor(Math.random()*6 + 1)

//     console.log(number)

//     for(let i=1; i<=6; i++){
//         if(number == i){
//             document.getElementById('image').src = "images/dice" + i + ".png"
//             document.getElementById('num').innerHTML = i
//         }
//     }
// }

// button.addEventListener('click', rotation)

// const show = () => {
//     let n = Math.floor(Math.random()*6 + 1)
//     for(let i=1; i<=6; i++){
//         if(n == i){
//             document.getElementById('image').src = "images/dice" + i + ".png"
//             document.getElementById('num').innerHTML = i
//         }
//     }
// }
