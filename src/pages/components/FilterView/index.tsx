import { View, Text } from "@tarojs/components"
import { useCallback, useState } from "react";
import BottomButtonView from "../BottomButtonView";
import useFilterView from "./filterViewContext";
import './index.scss';

export const FilterBarView = (props) => {
    const { filterItems, currentPosition, openFilterView } = useFilterView();
    const onTap = useCallback((index: number) => {
        openFilterView(index);
    }, [currentPosition]);
    return <View className='nav'>
        {filterItems.map((value, index) => (<NavItem title={value.title} position={index} isOpen={index == currentPosition} onTap={onTap} />))}
    </View>
}

type NavItemProps = {
    isOpen: boolean,
    title: string,
    position: number,
    onTap: (index: number) => void
}

const NavItem = (props: NavItemProps) => {
    const { isOpen, title, onTap, position } = props;
    const handleClick = useCallback(() => {
        onTap(position);
    }, [])
    return (<View className='nav_item' onClick={handleClick}>
        <Text>{title}</Text>
        <View className={isOpen ? "open-view" : "close-view"} />
    </View>);
}

export const FilterView = (props) => {
    const { currentPosition, openFilterView, onRefreshData } = useFilterView();
    const sorts = [
        "按价格从高到低", "按价格从低到高", "按面积从大到小", "按面积从小到大",
        "按价格从高到低", "按价格从低到高", "按面积从大到小", "按面积从小到大",
        "按价格从高到低", "按价格从低到高", "按面积从大到小", "按面积从小到大",
    ];

    const onTapContainer = useCallback(() => {
        console.log("onTapContainer");
        openFilterView(null);
    }, [])

    const renders = () => {
        switch (currentPosition) {
            case null: return <View />
            case 0: return <RelationShipView />
            case 1: return <View className='pop-content-container'>
                <View className='options-container'>
                </View>
                <BottomButtonView onCancel={() => { }} onConfirm={() => { }} />
            </View>;
            case 2: return <LayoutView />;
            case 3: return <View />
            case 4: return <LayoutView />;
        }
    }
    return (<View className='pop-container' onClick={onTapContainer}>
        {
            renders()
        }
    </View>)
}



const LayoutView = () => {
    const { filterItems, currentPosition, onRefreshData } = useFilterView();
    const { options, value: values } = filterItems[currentPosition ?? 0];
    const [selected, setSelected] = useState<Array<string>>(values);
    return <View className='pop-content-container'>
        <View className='options-container'>
            {options.map((value) => <View className='sort-item' onClick={
                (e) => {
                    e.stopPropagation();
                    var temp = Array.from(selected);
                    if (selected.includes(value.value)) {
                        temp = temp.filter((item) => item != value.value)

                    } else {
                        temp.push(value.value);
                    }
                    setSelected(temp);
                }
            }><Text className={`${selected.includes(value.value) ? "selected" : ""}`}>{value.label}</Text></View>)}
        </View>
        <BottomButtonView onCancel={() => {

        }} onConfirm={() => {
            onRefreshData();
        }} />
    </View>;
}

const RelationShipView = () => {
    const { filterItems, currentPosition, onRefreshData, openFilterView } = useFilterView();
    const { options, value: values } = filterItems[currentPosition ?? 0];
    const onTapContainer = useCallback(() => {
        console.log("onTapContainer");
        openFilterView(null);
    }, [])
    return (
        <View className='pop-content-container' onClick={onTapContainer}>
            <View className="relation-ship-container">
                <View className="relation-ship-container-left">
                    {options.map((value) => <View className="item"><Text>{value.label}</Text></View>)}
                </View>
                <View className="relation-ship-container-right">
                    {options[0].children?.map((value) => <View className="item"><Text>{value.label}</Text></View>)}
                </View>
            </View>
            <BottomButtonView onCancel={() => {

            }} onConfirm={() => {
                onRefreshData();
            }} />
        </View>
    );
}