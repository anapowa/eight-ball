
const icosahedronDie = Math.floor((Math.random() * 20) + 1)

Linebreak = document.createElement("span")


let magic8 = function() {
    switch (icosahedronDie) {
        case 1:
            return "It is certain"
            break;
        case 2:
            return "It is decidedly so"
            break;
        case 3:
            return "Without a doubt"
            break;
        case 4:
            return "Yes –definitely"
            break;
        case 5:
            return "You may rely on it"
            break;
        case 6:
            return "As I see it, yes"
            break;
        case 7:
            return "Most likely"
            break;
        case 8:
            return "Outlook good"
            break;
        case 9:
            return "Yes"
            break;
        case 10:
            return "Signs point to yes"
            break;
        case 11:
            return "Reply hazy, try again"
            break;
        case 12:
            return "Ask again later"
            break;
        case 13:
            return "Better not tell you now"
            break;
        case 14:
            return "Cannot predict now"
            break;
        case 15:
            return "Concentrate and ask again"
            break;
        case 16:
            return "Don't count on it"
            break;
        case 17:
            return "My reply is no"
            break;
        case 18:
            return "My sources say no"
            break;
        case 19:
            return "Outlook not so good"
            break;
        case 20:
            return "Very doubtful"
            break;
        
    }

}


let ball = document.querySelector("#eightBall")

ball.addEventListener("click", function (evt) {
    // const ballNode = evt.target
    
    console.log(icosahedronDie + ": " + magic8())

    let newFortuneText = document.createElement("div")
    newFortuneText.id = "icosahedronText"
    newFortuneNode = document.createTextNode(magic8())
    newFortuneText.appendChild(newFortuneNode)
        
    let newfortuneTriangle = document.createElement("div")
    newfortuneTriangle.id = "triangle"
        
    let newfortuneBkgrd = document.createElement("div")
    newfortuneBkgrd.id = "dark"

    let eightBallNum = document.querySelector("#eight")
    let eightBallBckgrnd = document.querySelector("#luna")
        
    ball.appendChild(newfortuneTriangle)
    
    replaceFortText = eightBallBckgrnd.replaceChild(newFortuneText, eightBallNum)
    ball.appendChild(newFortuneText)
    replaceFortBack = ball.replaceChild(newfortuneTriangle, eightBallBckgrnd)
    ball.appendChild(newfortuneBkgrd)
    
    
    console.log(replaceFortBack)
    console.log(replaceFortText)

})

let refreshButton = document.querySelector("#refresh")
refreshButton.addEventListener("click", function (evt){
    // const buttonNode = evt.target
    location.reload()

})