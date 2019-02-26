import history from '../../util/history';
import { db } from '../../config/firebaseConfig';
import { firebaseAuth } from '../../config/firebaseConfig';
import { googleAuth } from '../../config/firebaseConfig';

// auth actions
export const watchAuthStatus = () => {
  return dispatch => {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        db.collection('users')
          .doc(user.uid)
          .get()
          .then(doc => {
            const currentUser = doc.data();
            dispatch({
              type: 'SIGNED_IN',
              payload: currentUser
            });
            history.push('/dashboard');
          });
      } else {
        console.log('no user is signed in');
        dispatch({
          type: 'SIGNED_OUT'
        });
        history.push('/');
      }
    });
  };
};

export const trySignIn = () => {
  return () => {
    firebaseAuth
      .signInWithPopup(googleAuth)
      .then(() => {
        console.log('sign in successful');
      })
      .catch(err => {
        console.log('sign in error', err);
      });
  };
};

export const trySignOut = () => {
  return () => {
    firebaseAuth
      .signOut()
      .then(() => {
        console.log('sign out successful');
      })
      .catch(err => {
        console.log('sign out error', err);
      });
  };
};

export const updateUserDoc = newData => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId;
    await db
      .collection('users')
      .doc(userId)
      .update(newData);
    dispatch({
      type: 'NEW_USER_DATA',
      payload: newData
    });
  };
};

//notes actions
export const fetchNotes = () => {
  return async (dispatch, getState) => {
    const userId = firebaseAuth.currentUser.uid;
    const snapshot = await db
      .collection('notes')
      .where('userId', '==', userId)
      .orderBy('noteTimestamp', 'desc')
      .get();
    const noteList = snapshot.docs.map(doc => {
      return { ...doc.data(), id: doc.id };
    });
    dispatch({
      type: 'FETCH_NOTES',
      payload: noteList
    });
  };
};

export const createNote = (formValues, noteTimestamp) => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const userName = getState().auth.displayName;
    const userEmail = getState().auth.userEmail;
    const newNote = {
      ...formValues,
      userId,
      userEmail,
      userName,
      noteTimestamp
    };
    await db.collection('notes').add(newNote);
    dispatch({
      type: 'CREATE_NOTE',
      payload: newNote
    });
    history.push('/dashboard');
  };
};

export const editNote = (id, formValues) => {
  return async () => {
    await db
      .collection('notes')
      .doc(id)
      .update({ ...formValues });
    history.push('/dashboard');
  };
};

export const deleteNote = id => {
  return async dispatch => {
    await db
      .collection('notes')
      .doc(id)
      .delete();
    history.push('/dashboard');
    dispatch({
      type: 'DELETE_NOTE',
      payload: id
    });
  };
};
