// 地域分布切换title
$('.region_cities>span').on('click', function () {
  $(this).addClass('citiesCur').siblings().removeClass('citiesCur');
  var index = $(this).index();
  $('.region_content>div').eq(index).addClass('change_cur').siblings().removeClass('change_cur');
});
// 地域分布
function randomData() {
  return Math.round(Math.random() * 600);
}
var mydata = [
  { name: '北京', value: '100' }, { name: '天津', value: randomData() },
  { name: '上海', value: randomData() }, { name: '重庆', value: randomData() },
  { name: '河北', value: randomData() }, { name: '河南', value: randomData() },
  { name: '云南', value: randomData() }, { name: '辽宁', value: randomData() },
  { name: '黑龙江', value: randomData() }, { name: '湖南', value: randomData() },
  { name: '安徽', value: randomData() }, { name: '山东', value: randomData() },
  { name: '新疆', value: randomData() }, { name: '江苏', value: randomData() },
  { name: '浙江', value: randomData() }, { name: '江西', value: randomData() },
  { name: '湖北', value: randomData() }, { name: '广西', value: randomData() },
  { name: '甘肃', value: randomData() }, { name: '山西', value: randomData() },
  { name: '内蒙古', value: randomData() }, { name: '陕西', value: randomData() },
  { name: '吉林', value: randomData() }, { name: '福建', value: randomData() },
  { name: '贵州', value: randomData() }, { name: '广东', value: randomData() },
  { name: '青海', value: randomData() }, { name: '西藏', value: randomData() },
  { name: '四川', value: randomData() }, { name: '宁夏', value: randomData() },
  { name: '海南', value: randomData() }, { name: '台湾', value: randomData() },
  { name: '香港', value: randomData() }, { name: '澳门', value: randomData() }
];
var optionMap = {
  backgroundColor: 'rgba(255, 255, 255, 0)',
  tooltip: {
    trigger: 'item'
  },

  visualMap: {
    show: true,
    x: 'left',
    y: 'center',
    splitList: [
      { start: 500, end: 600 }, 
      { start: 400, end: 500 },
      { start: 300, end: 400 }, 
      { start: 200, end: 300 },
      { start: 100, end: 200 }, 
      { start: 0, end: 100 },
    ],
    color: ['#3EC7F4', '#59C8ED', '#71CAE8', '#A2D2E2', '#CBDFE5', '#DDE6EA']
  },

  //配置属性
  series: [{
    name: '数据',
    type: 'map',
    mapType: 'china',
    itemStyle: {
      normal: {//未选中状态
        borderWidth: 1,//边框大小
        borderColor: '#999999',
        areaColor: '#999999',//背景颜色
        label: {
          show: true//显示名称
        }
      },
      emphasis: {// 也是选中样式
        borderWidth: 2,
        borderColor: '#999999',
        areaColor: '#cccccc',
        label: {
          show: true,
          textStyle: {
            color: '#fff'
          }
        }
      }
    },
    roam: false,
    label: {
      normal: {
        show: false  //省份名称  
      },
      emphasis: {
        show: true
      }
    },
    data: mydata  //数据
  }]
};
var myChart = echarts.init(document.getElementById('anal_map'));
myChart.setOption(optionMap);
// 年龄分布
var age_dom = document.getElementById("anal_age");
var age_myChart = echarts.init(age_dom);
var age_app = {};
age_option = null;
age_option = {
  color: ['#3ec7f5'],
  tooltip: {
  },
  xAxis: {
    type: 'category',
    data: ['19岁以下', '20~29岁', '30~39岁', '40~49岁', '50以上及其他'],
    axisTick: {
      show: false
    },
    axisLabel: {
      interval: 0
    }
  },
  yAxis: {
    type: 'value',
    min: 0,
    max: 100,
    interval: 25,
    axisLabel: {
      show: true,
      interval: 'auto',
      formatter: '{value} %'
    },
    axisTick: {
      show: false
    },
    // y 轴线
    axisLine: {
      show: false,
    },
    position: 'right'
  },
  series: [{
    data: [12, 24, 40, 5, 19],
    type: 'bar',
    label: {
      normal: {
        show: false,
        position: 'inside',
        formatter: '{c}%'
      }
    }
  }]
};
age_myChart.setOption(age_option, true);
// 性别分布
var sex_dom = echarts.init(document.getElementById('anal_sex'));

sex_option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  legend: {
    data: ['男', '未知', '女'],
    x: 'center',
    y: 'bottom',
  },
  calculable: true,
  xAxis: [
    {
      type: 'value',
      show: false,
    }
  ],
  yAxis: [
    {
      type: 'category',
      data: [''],
      show: false
    }
  ],
  series: [
    {
      name: '男',
      type: 'bar',
      stack: '性别',
      itemStyle: { normal: { label: { show: true, position: 'insideLeft', formatter: '{c}%' } } },
      data: [50],
      color: '#4DBBF9'
    },
    {
      name: '未知',
      type: 'bar',
      stack: '性别',
      itemStyle: { normal: { label: { show: true, position: 'insideLeft', formatter: '{c}%' } } },
      data: [14],
      color: '#BEC2C9'
    },
    {
      name: '女',
      type: 'bar',
      stack: '性别',
      itemStyle: { normal: { label: { show: true, position: 'insideLeft', formatter: '{c}%' } } },
      data: [36],
      color: '#FF7CB6'
    }
  ]
};

sex_dom.setOption(sex_option);
// 行业分布
var seriesLabel = {
  normal: {
    show: true,
    position: 'insideLeft'
  }
}
var industry_dom = document.getElementById("anal_industry");
var myChart = echarts.init(industry_dom);
var app = {};
option = null;
app.title = '坐标轴刻度与标签对齐';

option = {
  color: ['#3398DB'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'value',
      show: false,
      axisLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
    }
  ],
  yAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', '第八个', '第九个', '其他'],
      axisTick: {
        alignWithLabel: true
      },
      inverse: true,
      axisTick: {
        show: false
      },
      // y 轴线
      axisLine: {
        show: false,
      }
    },
    
  ],
  series: [
    {
      name: '行业分布',
      type: 'bar',
      barWidth: '60%',
      data: [10, 52, 200, 334, 390, 330, 220, 100, 200, 30],
      itemStyle: {
        normal: {
          color: '#3ec7f5'
        }
      },
      label: seriesLabel,
      rich: {
        align: 'left'
      }
    }
  ]
};
myChart.setOption(option, true);

// 第一个终端分布
var myChart = echarts.init(document.getElementById('anal_phones_fir'));

option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  legend: {
    data: ['未知', 'iPhone', 'Android']
  },
  calculable: true,
  xAxis: [
    {
      type: 'value',
      min: 0,
      interval: 500
    }
  ],
  yAxis: [
    {
      type: 'category',
      data: ['']

    }
  ],
  series: [
    {
      name: '未知',
      type: 'bar',
      stack: '终端',
      itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
      data: [1000],
      color: '#65F26B'
    },
    {
      name: 'iPhone',
      type: 'bar',
      stack: '终端',
      itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
      data: [124],
      color: '#65DDE5'
    },
    {
      name: 'Android',
      type: 'bar',
      stack: '终端',
      itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
      data: [220],
      color: '#EBCB6A'
    }
  ]
};

myChart.setOption(option);
// 最后一个终端分布
var myChart = echarts.init(document.getElementById('anal_phones_sec'));

myChart.setOption({
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: '55%',
      data: [
        { value: 5515, name: '未知', itemStyle: { color: '#44B548' } },
        { value: 242, name: 'OPPO R9S', itemStyle: { color: '#4A91E3' } },
        { value: 196, name: 'OPPO R9', itemStyle: { color: '#EBCB6A' } },
        { value: 185, name: 'OPPO A57', itemStyle: { color: '#BB7EB3' } },
        { value: 164, name: 'OPPO R7s', itemStyle: { color: '#DB7C29' } },
        { value: 153, name: 'OPPO R9s PLUS', itemStyle: { color: '#FFCF54' } },
        { value: 128, name: 'VIVO X9', itemStyle: { color: '#6ED5E7' } },
        { value: 125, name: '苹果 IPHONE 5S', itemStyle: { color: '#F57BC1' } },
        { value: 124, name: 'OPPO A59S', itemStyle: { color: '#DEB288' } },
        { value: 123, name: '小米 红米 NOTE 4X', itemStyle: { color: '#657C9E' } }
      ]
    }
  ]
})