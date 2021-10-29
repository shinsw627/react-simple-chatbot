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

const steps = [
  {
    id: '1',
    message: '안녕~ 나는 진로야!',
    trigger: '2'
  },
  {
    id: '2',
    message: '너의 MBTI를 알려줄래?',
    trigger: '3'
  },

  {
    id: '3',
    options: [
      { value: 1, label: 'INTJ', trigger: '1' },
      { value: 2, label: 'INTP', trigger: 'INTP-1' },
      { value: 3, label: 'ENTJ', trigger: '1' },
      { value: 4, label: 'ENTP', trigger: '1' },
      { value: 5, label: 'INFJ', trigger: '1' },
      { value: 6, label: 'INFP', trigger: '1' },
      { value: 7, label: 'ENFJ', trigger: '1' },
      { value: 8, label: 'ENFP', trigger: '1' },
      { value: 9, label: 'ISTJ', trigger: '1' },
      { value: 10, label: 'ISFJ', trigger: '1' },
      { value: 11, label: 'ESTJ', trigger: '1' },
      { value: 12, label: 'ESFJ', trigger: '1' },
      { value: 13, label: 'ISTP', trigger: '1' },
      { value: 14, label: 'ISFP', trigger: '1' },
      { value: 15, label: 'ESTP', trigger: '1' },
      { value: 16, label: 'ESFP', trigger: '1' }
    ]
  },
  {
    id: 'INTP-1',
    message: 'INTP라구? 그렇다면 논리적인 생각을 좋아하지! 맞아?  ',
    trigger: 'INTP-2'
  },
  {
    id: 'INTP-2',
    options: [
      { value: 1, label: '응 맞아!', trigger: 'INTP-3' },
      { value: 2, label: '음... 그런거 같은데?', trigger: 'INTP-3' }
    ]
  },
  {
    id: 'INTP-3',
    message: '후후, 그리고 남들과는 다른 독창성과 창의력을 가지고 있어 그렇지? ',
    trigger: 'INTP-4'
  },
  {
    id: 'INTP-4',
    options: [
      { value: 1, label: '맞아! 난 창의적이라구!', trigger: 'INTP-5' },
      { value: 2, label: '흠... 어떻게 알았지?', trigger: 'INTP-5' }
    ]
  },
  {
    id: 'INTP-5',
    message: `INTP는 전체 인구의 3% 정도를 차지하는 흔치 않는 유형이야!`,
    trigger: 'INTP-6'
  },
  {
    id: 'INTP-6',
    message: '너 만의 독특한 관점과 왕성한 지적호기심을 가지고 있지! 맞아?',
    trigger: 'INTP-7'
  },
  {
    id: 'INTP-7',
    options: [
      { value: 1, label: '맞아 호기심이 많아!', trigger: 'INTP-8' },
      { value: 2, label: '나에 대해 잘 아는걸?', trigger: 'INTP-8' }
    ]
  },
  {
    id: 'INTP-8',
    message: '혹시 가끔 너만의 몽상에 빠져서 시간을 보내기도 하지?',
    trigger: 'INTP-9'
  },
  {
    id: 'INTP-9',
    options: [
      { value: 1, label: '그건 들키고 싶지 않았는데!', trigger: 'INTP-10' },
      { value: 2, label: '그랬을지도...?', trigger: 'INTP-10' }
    ]
  },
  {
    id: 'INTP-10',
    message: '좋아! 너에게 어울리는 직업을 소개해줄게',
    trigger: 'INTP-11'
  },
  {
    id: 'INTP-11',
    options: [
      { value: 1, label: '연구원', trigger: '연구원-1' },
      { value: 2, label: '심리학자', trigger: '1' },
      { value: 3, label: '프로그래머', trigger: '1' },
      { value: 4, label: '비평가', trigger: '1' }
    ]
  },
  {
    id: '연구원-1',
    message: '혹시 가끔 너만의 몽상에 빠져서 시간을 보내기도 하지?',
    trigger: '연구원-2'
  },
  {
    id: '연구원-2',
    message: '혹시 가끔 너만의 몽상에 빠져서 시간을 보내기도 하지?',
    trigger: '1'
  },
  {
    id: 'INTP-8',
    message: '혹시 가끔 너만의 몽상에 빠져서 시간을 보내기도 하지?',
    trigger: 'INTP-9'
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
