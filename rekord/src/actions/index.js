import axios from 'axios';


export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const SAVING = 'SAVING';
export const SAVED = 'SAVED';
export const UPDATING = 'UPDATING';
export const UPDATED = 'UPDATED';
export const DELETING = 'DELETING';
export const DELETED = 'DELETED';
export const ERROR = 'ERROR';
export const FETCHING_NOTE = 'FETCHING_NOTE';
export const FETCHED_NOTE = 'FETCHED_NOTE';


export const fetchNotes = () => {
    console.log("------ fetchNotes() fired");
    return dispatch => {
         dispatch({ type: FETCHING });
         axios
         .get('https://backend-project-lee.herokuapp.com/notes')
         .then(response => {
            console.log("Pushar: fetchNotes: ", response.data);
             dispatch({ type: FETCHED, payload: response.data });
            })
            .catch(error => {
                dispatch({ type: ERROR, payload: error });
            })
        }
    }

export const addNote = (note, history) => {
    return dispatch => {
        dispatch({ type: SAVING });
        axios.post('https://backend-project-lee.herokuapp.com/notes/addnote', {
            title: note.title,
            textBody: note.content,
        })
        .then(response => {
            dispatch({ type: SAVED, payload: response.data })
        })
        .catch(error => {
            dispatch({ type: ERROR, payload: error })
        })
    }
}

export const fetchNote = id => {
    return dispatch => {
        dispatch({ type: FETCHING_NOTE });
         axios.get(`https://backend-project-lee.herokuapp.com/notes/${id}`)
            .then(response => {
                dispatch({ type: FETCHED_NOTE, payload: response.data });
            })
            .catch(error => {
                dispatch({ type: ERROR, payload: error });
            })
    }
}

// to do delete and update
export const deleteNote =  (NoteId, history) => {
    return dispatch => {
        dispatch ({ type: DELETING });
        axios
        .delete(`https://backend-project-lee.herokuapp.com/notes/delete/${NoteId}`)
        .then(response => {
            dispatch({ type: DELETED, payload: response.data})
        })
        .then(response => history.push('/'))
        .catch(error => {
            dispatch({type: ERROR, payload: error })
        })
    }
}

export const updateNote = note => {
    return dispatch => {
        dispatch({ type: UPDATING});
        axios
        .put(`https://backend-project-lee.herokuapp.com/notes/edit/${note.id}`, {
            title: note.title,
            textBody: note.content
        })
        .then(response => {
            dispatch({ type: UPDATED, payload: response.data});
        })
        .catch(error => {
            dispatch({type: ERROR, payload: error})
        })
    }
}