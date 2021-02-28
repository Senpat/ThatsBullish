import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDxC1CIvhUcCY7S12LFUGk3lgM2CQIHUvE",
    authDomain: "thatsbullish-15d47.firebaseapp.com",
    databaseURL: "https://thatsbullish-15d47-default-rtdb.firebaseio.com",
    projectId: "thatsbullish-15d47",
    storageBucket: "thatsbullish-15d47.appspot.com",
    messagingSenderId: "886349094285",
    appId: "1:886349094285:web:3ca0c092798dbe8174b1c4",
    measurementId: "G-NG48BRSKCN"
}

firebase.initializeApp(config)
export default firebase