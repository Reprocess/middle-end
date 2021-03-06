import firebase from 'firebase'
import Refs from './refs'

try {
  firebase.initializeApp({
    databaseURL: 'https://boilerplate-318f8.firebaseio.com/'
  })
} catch (err) {
  // we skip the "already exists" message which is
  // not an actual error when we're hot-reloading
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}

const root = firebase
  .database()
  .ref(Refs.PUBLIC)

export default root
