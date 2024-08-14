import { DELETE, ADDTASK, UPDATESTATUS, UPDATETASK, DELETEHISTORY } from "./ActionType";

const initialdata = JSON.parse(localStorage.getItem('data')) || [];
const initialdeletedata = JSON.parse(localStorage.getItem('deleteData')) || [];

const obj = {
    data: initialdata,
    deleteData: initialdeletedata
};

export const TodoList = (state = obj, { type, payload }) => {
    let updated_data;
    switch (type) {
        case ADDTASK:
            updated_data = { ...state, data: [...state.data, payload] };
            localStorage.setItem('data', JSON.stringify(updated_data.data));
            return updated_data;

        case DELETEHISTORY:
            const deletedElement = state.data.find((ele) => ele.id === payload);
                const deleteUpdatedData = { ...state, deleteData: [deletedElement, ...state.deleteData].slice(0, 10) };
                localStorage.setItem('deleteData', JSON.stringify(deleteUpdatedData.deleteData));
                return deleteUpdatedData;
            

        case DELETE:
            updated_data = { ...state, data: state.data.filter((ele) => ele.id !== payload) };
            localStorage.setItem('data', JSON.stringify(updated_data.data));
            return updated_data;

        case UPDATESTATUS:
            updated_data = { ...state, data: state.data.map((ele) => ele.id === payload ? { ...ele, status: !ele.status } : ele) };
            localStorage.setItem('data', JSON.stringify(updated_data.data));
            return updated_data;

        case UPDATETASK:
            updated_data = {
                ...state,
                data: state.data.map((ele) =>
                    ele.id === payload.id ? { ...ele, ...payload } : ele
                ),
            };
            localStorage.setItem('data', JSON.stringify(updated_data.data));
            return updated_data;

        default:
            return state;
    }
};
