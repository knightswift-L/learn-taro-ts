import { createContext, useReducer, useContext } from "react";
import { initialState, filterViewReducer } from "./filterViewReducer";
import { FilterViewIProps } from "./type";

const FilterViewContext = createContext<FilterViewIProps>(initialState);

export const FilterViewProvider = ({ children, onRefresh, filterItems, }) => {
    const [state, dispatch] = useReducer(filterViewReducer, initialState);
    const openFilterView = (position) => {
        dispatch({
            type: "OPEN-FILTER-VIEW",
            payload: {
                currentPosition: position
            }
        });
    };

    const onRefreshData = () => {
        onRefresh();
        dispatch({
            type: "REFRESH-DATA",
            payload: {
                currentPosition: null
            }
        });
    };

    const value = {
        filterItems: filterItems ?? state.filterItems,
        result: state.result,
        currentPosition: state.currentPosition,
        openFilterView,
        onRefreshData
    };
    return <FilterViewContext.Provider value={value}> {children} </FilterViewContext.Provider>;
};

const useFilterView = () => {
    const context = useContext(FilterViewContext);

    if (context === undefined) {
        throw new Error("useShop must be used within ShopContext");
    }

    return context;
};

export default useFilterView;
