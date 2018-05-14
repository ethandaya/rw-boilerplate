import { db, auth } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });

export const doGetUser = (id) =>
  db.ref(`users/${id}`).once('value');
