import { FilterViewIProps } from "./type";

export const initialState: FilterViewIProps = {
    filterItems: [],
    result: {},
    currentPosition: null,
    openFilterView: (index: number | null) => { },
    onRefreshData: () => { }
};

export const filterViewReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "OPEN-FILTER-VIEW":
            console.log("OPEN-FILTER-VIEW", payload);
            return {
                ...state,
                currentPosition: payload.currentPosition
            };
        case "REFRESH-DATA": {
            return {
                ...state,
                currentPosition: payload.currentPosition
            };
        }
        default:
            throw new Error(`No case for type ${type} found in shopReducer.`);
    }
};
