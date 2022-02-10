import {initializeApp} from 'firebase/app'
import {initializeFirestore} from 'firebase/firestore'

// Get a Firestore instance
export const firebaseApp = initializeApp({ projectId: 'theshinywebsite-340522' })

export const firestore = initializeFirestore(firebaseApp, {})
