import * as firebase from 'firebase/app'
import * as firestore from 'firebase/firestore'

// import 'firebase/firestore'
// import 'firebase/auth'
// import 'firebase/functions'

type Config = Parameters<typeof firebase.initializeApp>[0]

export class Fuego {
  public db: ReturnType<firebase.app.App['firestore']>
  public auth: typeof firebase.auth
  public functions: typeof firebase.functions
  public storage: typeof firebase.storage
  constructor(config: Config) {
    console.log("yo")
    this.db = firestore.getFirestore()
    console.log(db)
    this.auth = firebase.auth
    this.functions = firebase.functions
    this.storage = firebase.storage
  }
}
