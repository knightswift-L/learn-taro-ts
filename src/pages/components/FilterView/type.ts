
export type Option = {
    label: string,
    value: string,
    children?: Array<Option>
}

export type FilterItem = {
    key: string,
    options: Array<Option>,
    title: string,
    content: string,
    formatResult?: (options: Array<Option>) => string,
    value: Array<string>
}


export type FilterViewIProps = {
    filterItems: Array<FilterItem>,
    currentPosition: null | number,
    result: Record<string, Array<string>>
    openFilterView: (index: number | null) => void,
    onRefreshData: () => void
}