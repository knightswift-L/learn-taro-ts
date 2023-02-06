
import { View } from '@tarojs/components'
import './index.scss'
import { FilterBarView, FilterView } from '../components/FilterView';
import { FilterViewProvider } from '../components/FilterView/filterViewContext'
import { FilterItem } from '../components/FilterView/type'
const home = (props) => {
  const filterItems: Array<FilterItem> = [{
    key: "region",
    options: [{
      label: "曼谷",
      value: "001001",
      children: [{
        label: "三攀他旺县",
        value: "001001",
      },
      {
        label: "三攀他旺县",
        value: "001001",
      }, {
        label: "三攀他旺县",
        value: "001001",
      }, {
        label: "三攀他旺县",
        value: "001001",
      },
      {
        label: "三攀他旺县",
        value: "001001",
      },
      {
        label: "三攀他旺县",
        value: "001001",
      }, {
        label: "三攀他旺县",
        value: "001001",
      }, {
        label: "三攀他旺县",
        value: "001001",
      },
      {
        label: "三攀他旺县",
        value: "001001",
      },
      {
        label: "三攀他旺县",
        value: "001001",
      }, {
        label: "三攀他旺县",
        value: "001001",
      }, {
        label: "三攀他旺县",
        value: "001001",
      },
      {
        label: "三攀他旺县",
        value: "001001",
      },
      {
        label: "三攀他旺县",
        value: "001001",
      }, {
        label: "三攀他旺县",
        value: "001001",
      }, {
        label: "三攀他旺县",
        value: "001001",
      },

      ]
    }],
    title: "区域",
    content: "",
    formatResult: (options) => { return "" },
    value: []
  },
  {
    key: "price",
    options: [{
      label: "1000元以下",
      value: "0-1000",
    }, {
      label: "1000元以下",
      value: "0-1000",
    }, {
      label: "1000元以下",
      value: "0-1000",
    }, {
      label: "1000元以下",
      value: "0-1000",
    }, {
      label: "1000元以下",
      value: "0-1000",
    }],
    title: "价格",
    content: "",
    formatResult: (options) => { return "" },
    value: []
  },
  {
    key: "category",
    options: [{
      label: "公寓",
      value: "公寓",
    }, {
      label: "别墅",
      value: "别墅",
    },
    {
      label: "公寓",
      value: "公寓",
    }, {
      label: "别墅",
      value: "别墅",
    }],
    title: "类型",
    content: "",
    formatResult: (options) => { return "" },
    value: []
  },
  {
    key: "layout",
    options: [{
      label: "公寓",
      value: "公寓",
    }, {
      label: "别墅",
      value: "别墅",
    },
    {
      label: "公寓",
      value: "公寓",
    }, {
      label: "别墅",
      value: "别墅",
    }],
    title: "户型",
    content: "",
    formatResult: (options) => { return "" },
    value: []
  },
  {
    key: "sort",
    options: [{
      label: "按价格从高到低",
      value: "按价格从高到低",
    }, {
      label: "按价格从低到高",
      value: "按价格从低到高",
    },
    {
      label: "按面积从大到小",
      value: "按面积从大到小",
    }, {
      label: "按面积从小到大",
      value: "按面积从小到大",
    }],
    title: "排序",
    content: "",
    formatResult: (options) => { return "" },
    value: ["按价格从低到高"]
  }];
  // "按价格从高到低", "按价格从低到高", "按面积从大到小", "按面积从小到大",
  return (
    <FilterViewProvider onRefresh={() => {
    }} filterItems={filterItems}>
      <View className='page-container'>
        <FilterBarView />
        <FilterView />
      </View>
    </FilterViewProvider>
  )
}

export default home;



