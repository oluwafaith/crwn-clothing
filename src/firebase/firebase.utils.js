import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"

 
const config = {
    apiKey: "AIzaSyBi_2O2G5GD6XCEfZzyfV8Ye5f8kcTfWU4",
    authDomain: "crown-clothing-9993b.firebaseapp.com",
    projectId: "crown-clothing-9993b",
    storageBucket: "crown-clothing-9993b.appspot.com",
    messagingSenderId: "135665738966",
    appId: "1:135665738966:web:8a0ef71457bf6a98251577",
    measurementId: "G-2RCWLZF6K9"
}; 

firebase.initializeApp(config)
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;