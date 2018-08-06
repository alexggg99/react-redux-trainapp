import authorApi from '../api/mockAuthorApi';

export function loadAuthorsSuccess(authors) {
  return {type: 'LOAD_AUTHORS_SUCCESS', authors: authors};
}

export function loadAuthors() {
  debugger;
  return function (dispatch) {
    return authorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw (error);
    });
  };
}
