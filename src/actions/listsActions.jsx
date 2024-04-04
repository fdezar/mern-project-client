import { CONSTANTS } from "../actions";
import kanbanService from "../services/kanban.service";

// export const addList = title => {
//   return {
//     type: CONSTANTS.ADD_LIST,
//     payload: title
//   };
// };

export const getLists = () => async (dispatch) => {
    try {
      const { data } = await kanbanService.getAllKanbans();
  
      dispatch({
        type: CONSTANTS.GET_LISTS,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };

export const addList = title => async (dispatch) => {
    try {
        const { data } = await kanbanService.createKanban({ title });

        dispatch({
            type: CONSTANTS.ADD_LIST,
            payload: data
        });
    } catch (error) {
        console.error(error);
        // dispatch({
        //     type: BOARD_ERROR,
        //     payload: error.response.data.message,
        //   });
    }
  };

// export const addList = (title) => {
//     return async (dispatch) => {
//       try {
//         dispatch({ type: CONSTANTS.ADD_LIST_REQUEST });
  
//         const newList = await kanbanService.createKanban({ title, cards: [] });
        
//         dispatch({ type: CONSTANTS.ADD_LIST_SUCCESS, payload: newList });
//       } catch (error) {
//         dispatch({ type: CONSTANTS.ADD_LIST_FAILURE, payload: error.message });
//       }
//     };
//   };

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type
) => {
  return {
    type: CONSTANTS.DRAG_HAPPENED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexEnd,
      droppableIndexStart,
      draggableId,
      type
    }
  };
};

export const editTitle = (listID, newTitle) => {
  return {
    type: CONSTANTS.EDIT_LIST_TITLE,
    payload: {
      listID,
      newTitle
    }
  };
};

export const deleteList = listID => {
  return {
    type: CONSTANTS.DELETE_LIST,
    payload: {
      listID
    }
  };
};
