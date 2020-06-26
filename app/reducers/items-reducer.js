export const itemsReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_ITEM":
            const item = action.payload.trim();
            if (state.includes(item) || !item) return state;
            return [...state, item];

        case "DELETE_ITEM":
            const list = [...state];
            list.splice(list.indexOf(action.payload), 1)
            return list;

        default:
            return state;
    }
}