import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from '../../lib/index';

const otherFontTheme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#6e48aa',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#6E48AA',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a'
};
const mbti = ['INTP', 'INFP', 'ISTP'];
const steps = [
  {
    id: '1',
    message: '너의 MBTI를 알려줄래?',
    trigger: '2'
  },
  {
    id: '2',
    user: true,
    validator: value => {
      if (mbti.includes(value)) {
        return true;
      }
      return 'MBTI를 적어주세요!!';
    },
    trigger: '3'
  },

  {
    id: '3',
    message: '와 넌 {previousValue} 이구나! 너를 위한 직업을 생각해 봤어',
    trigger: '4'
  },
  {
    id: '4',
    options: [
      { value: 1, label: '연구원', trigger: '5' },
      { value: 2, label: '심리학자', trigger: '6' },
      { value: 3, label: '프로그래머', trigger: '7' },
      { value: 4, label: '비평가', trigger: '8' }
    ]
  },
  {
    id: '5',
    message: '연구원이 되고 싶은거구나!',
    trigger: '2'
  },
  {
    id: '6',
    message: '심리학자가 되고 싶은거구나!',
    end: true
  },
  {
    id: '7',
    message: '프로그래머가 되고 싶은거구나!',
    end: true
  },
  {
    id: '8',
    message: '비평가가 되고 싶은거구나!',
    end: true
  }
];

const ThemedExample = () => (
  <ThemeProvider theme={otherFontTheme}>
    <React.StrictMode>
      <ChatBot steps={steps} />
    </React.StrictMode>
  </ThemeProvider>
);

export default ThemedExample;
