import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyC2xQEtycC3dGsUuIz6gaTNW1j6hn335HA',
  authDomain: 'prima-b940d.firebaseapp.com',
  databaseURL: 'https://prima-b940d.firebaseio.com/',
  projectId: 'prima-b940d',
  storageBucket: 'prima-b940d.appspot.com',
  messagingSenderId: '954179346784'
}
export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
const databaseRef = firebase.database().ref()
export const todosRef = databaseRef.child('todos')
