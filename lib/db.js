import firebase from 'firebase'

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
  .ref('public')
  .child('blog')

export default root
