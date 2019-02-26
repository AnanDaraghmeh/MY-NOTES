const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.newUserJoined = functions.auth.user().onCreate(user => {
  const newUserDoc = {
    userId: user.uid,
    displayName: user.displayName,
    userEmail: user.email,
    userPhoto: user.photoURL,
    joined: admin.firestore.FieldValue.serverTimestamp()
  };

  return admin
    .firestore()
    .collection('users')
    .doc(newUserDoc.userId)
    .set(newUserDoc);
});
