import { CONSTANTS } from "../actions";

let listID = 2;
let cardID = 6;

// const initialState = [
//   {
//     title: "To Do",
//     id: `list-${0}`,
//     cards: [
//       {
//         id: `card-${0}`,
//         text: "Implement Backend"
//       },
//       {
//         id: `card-${1}`,
//         text: "Add Icons"
//       }
//     ]
//   },
//   {
//     title: "In Progress",
//     id: `list-${1}`,
//     cards: [
//       {
//         id: `card-${2}`,
//         text: "Implement Kanban"
//       },
//       {
//         id: `card-${3}`,
//         text: "Implement drag and drop"
//       },
//       {
//         id: `card-${4}`,
//         text:
//           "react-beautiful-dnd"
//       },
//       {
//         id: `card-${5}`,
//         text:
//           "Style with Material UI"
//       }
//     ]
//   },
//   {
//     title: "Done",
//     id: `list-${2}`,
//     cards: []
//   }
// ];

const initialState = [
  {
    title: "To Do",
    id: `list-${0}`,
    cards: []
  },
  {
    title: "In Progress",
    id: `list-${1}`,
    cards: []
  },
  {
    title: "Done",
    id: `list-${2}`,
    cards: []
  }
];

const listsReducer = (state = initialState, action) => {
    console.log(action.payload);
  switch (action.type) {
    // case CONSTANTS.GET_LISTS: {
    //     const { title } = action.payload;

    //     return [...state, title];
    // }

    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listID}`
      };
      listID += 1;

    //   return kanbanService.createKanban(newList)
    //     .then(newKanban => {
    //         return [...state, newKanban];
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     })
    // }

      return [...state, newList];

    // return [...state, action.payload];

    // case CONSTANTS.ADD_LIST_SUCCESS:
    //     return [...state, action.payload];

    case CONSTANTS.ADD_CARD: {
      const newCard = {
        text: action.payload.text,
        id: `card-${cardID}`
      };
      cardID += 1;

      console.log("action received", action);

      const newState = state.map(list => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          };
        } else {
          return list;
        }
      });

      return newState;
    }

    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        draggableId,
        type
      } = action.payload;
      const newState = [...state];

      // draggin lists around
      if (type === "list") {
        const list = newState.splice(droppableIndexStart, 1);
        newState.splice(droppableIndexEnd, 0, ...list);
        return newState;
      }

      // in the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      // other list
      if (droppableIdStart !== droppableIdEnd) {
        // find the list where the drag happened
        const listStart = state.find(list => droppableIdStart === list.id);
        // pull out the card from this list
        const card = listStart.cards.splice(droppableIndexStart, 1);
        // find the list where the drag ended
        const listEnd = state.find(list => droppableIdEnd === list.id);

        // put the card in the new list
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }

      return newState;

    case CONSTANTS.EDIT_CARD: {
      const { id, listID, newText } = action.payload;
      return state.map(list => {
        if (list.id === listID) {
          const newCards = list.cards.map(card => {
            if (card.id === id) {
              card.text = newText;
              return card;
            }
            return card;
          });
          return { ...list, cards: newCards };
        }
        return list;
      });
    }

    case CONSTANTS.DELETE_CARD: {
      const { id, listID } = action.payload;
      return state.map(list => {
        if (list.id === listID) {
          const newCards = list.cards.filter(card => card.id !== id);
          return { ...list, cards: newCards };
        } else {
          return list;
        }
      });
    }

    case CONSTANTS.EDIT_LIST_TITLE: {
      const { listID, newListTitle } = action.payload;
      return state.map(list => {
        if (list.id === listID) {
          list.title = newListTitle;
          return list;
        } else {
          return list;
        }
      });
    }

    case CONSTANTS.DELETE_LIST: {
      const { listID } = action.payload;
      return state.filter(list => list.id !== listID);
    }

    default:
      return state;
  }
};

export default listsReducer;
