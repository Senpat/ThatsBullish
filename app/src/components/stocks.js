import firebase from './firebase.js'

let alltickers = {}
let rankings = {}

const ref = firebase.database().ref('stockpraw4')
ref.on('value',(snapshot) => {
    alltickers = snapshot.val()
})

const tickerssorted = Object.keys(alltickers).sort((a,b) => {return alltickers[b]-alltickers[a]})

for(let k = 0; k < tickerssorted.length; k++){
    rankings[tickerssorted[k]] = k+1
}

console.log(alltickers)
//console.log(rankings)
export {alltickers,tickerssorted,rankings}