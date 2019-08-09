
import {observable,action} from 'mobx';

// | 'primary'// 主题色
// | 'secondary' // 次要主题色

// | 'primary' // 主题色
// | 'secondary' // 次要主题色

// | 'accent' // 强调色
// | 'red' // 红色，错误色
// | 'yellow' // 黄色，警告色
// | 'grey' // 银灰色
// | 'inverse' // 反色

// | 'border' // 边框色
// | 'background' // 全局背景色
// | 'cardBackground' // 模块背景色

// | 'textDefault' // 默认文本
// | 'textSecondary' // 次要文本
// | 'textMuted' // 禁用文本

// | 'textTitle' // 标题文本
// | 'textLink' // 链接文本

export const defaultTheme={
    normal:'#bfbfbf',
    primary: '#0d86ff',
    secondary: '#262626',
    accent: '#4caf50',
    red: '#ff5722',
    yellow: '#ffeb3b',
    grey: '#efefef',
    inverse: '#333333',
    border: '#BBBBBB',
    background: '#FFFFFF',
    cardBackground: '#FFFFFF',
    menuBackground:'#f7f7f7',
    
    textDefault: '#555',
    textSecondary: '#bbb',
    textMuted: '#eee',

    textTitle: '#222',
    textLink: '#000'
};

export const darkTheme={
    normal:'#bfbfbf',
    primary: '#0d86ff',
    secondary: '#262626',
    accent: '#4caf50',
    red: '#ff5722',
    yellow: '#ffeb3b',
    grey: '#efefef',
    inverse: '#FFFFFF',
    border: '#333333',
    background: '#091b34',
    cardBackground: '#191919',
    menuBackground:'#091b34',

    textDefault: '#ffffff',
    textSecondary: '#777777',
    textMuted: '#333333',
  
    textTitle: '#EEEEEE',
    textLink: '#FFFFFF'
};

const themeControl=observable(defaultTheme);

// themeControl.updateTheme=action(function(showDarkTheme){
//     Object.keys(defaultTheme).map(key=>{
//         themeControl[key]=showDarkTheme?darkTheme[key]:defaultTheme[key]
//     });
// });

export const updateTheme=action(function(showDarkTheme){
        Object.keys(defaultTheme).map(key=>{
            themeControl[key]=showDarkTheme?darkTheme[key]:defaultTheme[key]
        });
    });

export default themeControl;

