export const storeFilms = films => ({
  type: 'STORE_FILMS',
  films
});

export const logIn = user => ({
  type: 'LOG_IN',
  user
});

export const signOut = (user, films) => ({
  type: 'SIGN_OUT',
  user,
  films
});

export const addFavorite = film => ({
  type: 'ADD_FAVORITE',
  film
});

export const removeFavorite = film => ({
  type: 'REMOVE_FAVORITE',
  film
});
