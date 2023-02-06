import { View, Text } from "@tarojs/components";
import './index.scss';
type BottomButtonViewProps = {
    onCancel: () => void;
    onConfirm: () => void;
}

const BottomButtonView = (props: BottomButtonViewProps) => {
    const { onCancel, onConfirm } = props;
    return <View className="bottom-button-view-container">
        <View className="bottom-button-view bottom-button-view-left" onClick={(e) => {
            e.stopPropagation();
            onCancel();
        }}><Text>重置</Text></View>
        <View className="bottom-button-view bottom-button-view-right" onClick={(e) => {
            e.stopPropagation();
            console.log("this is a refresh data");
            onConfirm();
        }} catchMove><Text>确认</Text></View>
    </View>
}

export default BottomButtonView;