import admin  from 'firebase-admin'
import { getFirestore }from 'firebase-admin/firestore'

import serviceAccountfrom from '../../.firebase/serviceAccount.json'

if (!admin.apps.length)
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  })

module.exports = {
  getFirestore
} 
