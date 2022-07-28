export const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_PERSON':
        const addedPeople = [...state.people, action.payload];
        return {
          ...state,
          people: addedPeople,
          isModalOpen: true,
          modalContent: 'Name Added',
        };
      case 'NO_PERSON':
        return {
          ...state,
          isModalOpen: true,
          modalContent: 'Enter the Name',
        };
      case 'CLOSE_MODAL':
        return {
          ...state,
          isModalOpen: false,
        };
      case 'DELETE_NAME':
        const deletedName = state.people.find((person) => {
          return person.id === action.payload;
        });
        const updatedName = state.people.filter((person) => {
          return person.id !== action.payload;
        });

        return {
          ...state,
          people: updatedName,
          isModalOpen: true,
          modalContent: `${deletedName.name} is deleted`,
        };
      default:
        throw new Error('no matching action type');
    }
}
    