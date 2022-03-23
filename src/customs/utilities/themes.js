import {blue, green} from './colorPalette';

const themes = {
   white: {
      name: 'white',
      text: {
         main: {
            head: '#1a1a1a',
            title: '#333333',
            para: '#4d4d4d',
            hold: '#808080',
         },
         sub: {
            head: '#fafafa',
            title: '#ebebeb',
            para: '#d9d9d9',
            hold: '#808080',
         },
      },
      back: {
         main: blue[500],
         sub: green[500],
      },
   },
   black: {
      name: 'black',
      text: {
         main: {
            head: '#fafafa',
            title: '#ebebeb',
            para: '#d9d9d9',
            hold: '#808080',
         },
         sub: {
            head: '#1a1a1a',
            title: '#333333',
            para: '#4d4d4d',
            hold: '#808080',
         },
      },
      back: {
         main: blue[500],
         sub: green[500],
      },
   },
};

export default themes;
