import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBy98M3Zs5LaoZqDhxSVz7b3lb-BEkTeOY',
  authDomain: 'thedojosite-d075f.firebaseapp.com',
  projectId: 'thedojosite-d075f',
  storageBucket: 'thedojosite-d075f.appspot.com',
  messagingSenderId: '10021964032',
  appId: '1:10021964032:web:3373b08ea145a0cf1c4be5',
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
