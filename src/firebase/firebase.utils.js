import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyDr3f3G0I93dxzCFFIm06KMxDbNUauxRCs',
  authDomain: 'react-ecom-site.firebaseapp.com',
  databaseURL: 'https://react-ecom-site.firebaseio.com',
  projectId: 'react-ecom-site',
  storageBucket: '',
  messagingSenderId: '611816580525',
  appId: '1:611816580525:web:fa6491c094b614bc',
}
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
