import Vue from 'vue'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-database'
import firebaseConfig from '../../firebaseConfig'

//여기서 firebaseConfig 다른 곳에서 불러와야 되니까 위에서 import도 해줘야한다. 
firebase.initializeApp(firebaseConfig)

//$firebase 는 firebase.js 를 전역적으로 쓸 수 있게 프로토타입으로 만들어  줄 것이다.
Vue.prototype.$firebase = firebase