import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from '../../lib/index';

const otherFontTheme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#3441EC',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#3441EC',
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
    message: '너의 성격유형에 맞는 직업을 추천해줄게~!',
    trigger: '3'
  },
  {
    id: '3',
    message: '너의 MBTI를 알려줄래?',
    trigger: '4'
  },

  {
    id: '4',
    options: [
      { value: 1, label: 'INTJ', trigger: '1' },
      { value: 2, label: 'INTP', trigger: 'INTP-1' },
      { value: 3, label: 'ENTJ', trigger: '1' },
      { value: 4, label: 'ENTP', trigger: '1' },
      { value: 5, label: 'INFJ', trigger: '1' },
      { value: 6, label: 'INFP', trigger: 'INFP-1' },
      { value: 7, label: 'ENFJ', trigger: '1' },
      { value: 8, label: 'ENFP', trigger: '1' },
      { value: 9, label: 'ISTJ', trigger: '1' },
      { value: 10, label: 'ISFJ', trigger: 'ISFJ-1' },
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
    message: 'INTP라구? 그렇다면 논리적인 생각을 좋아하지! 맞아?',
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
    message: '너만의 독특한 관점과 왕성한 지적호기심을 가지고 있지! 맞아?',
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
    message: '좋아! 논리적인 너에게 어울리는 직업을 소개해줄게!',
    trigger: 'INTP-11'
  },
  {
    id: 'INTP-11',
    options: [
      { value: 1, label: '연구원', trigger: 'INTP-연구원-1' },
      { value: 2, label: '심리학자', trigger: 'INTP-심리학자-1' },
      { value: 3, label: '프로그래머', trigger: 'INTP-프로그래머-1' },
      { value: 4, label: '수학자', trigger: 'INTP-수학자-1' }
    ]
  },
  {
    id: 'INTP-연구원-1',
    message:
      '연구원이 하는 일은 전문적인 분야에서 실험을 통한 결과를 논리적으로 분석하여 기술적인 발전에 기여하는 일을 해! ',
    trigger: 'INTP-연구원-2'
  },
  {
    id: 'INTP-연구원-2',
    message: '연봉은 석사 연구원 4천만원 박사 연구원 5천만원 정도야',
    trigger: 'INTP-연구원-3'
  },
  {
    id: 'INTP-연구원-3',
    message: '현재 꾸준히 연봉이 늘어나고 있어서 유망 분야에선 전망이 아주 좋아',
    trigger: 'INTP-연구원-4'
  },
  {
    id: 'INTP-연구원-4',
    message: ' 성장이 기대되는 분야는 신재생에너지, 제약, 인공지능, 유전공학 등이 있어! ',
    trigger: 'INTP-연구원-5'
  },
  {
    id: 'INTP-연구원-5',
    message: '다른 직업들도 다시 볼래?',
    trigger: 'INTP-연구원-6'
  },
  {
    id: 'INTP-연구원-6',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'INTP-10' },
      { value: 2, label: '아니~ 괜찮아!', trigger: '3' }
    ]
  },
  {
    id: 'INTP-심리학자-1',
    message: '심리학자는 인간의 행동과 정신적 과정을 과학적이고 체계적 방법을 통해 연구해!',
    trigger: 'INTP-심리학자-2'
  },
  {
    id: 'INTP-심리학자-2',
    message:
      '연구 결과를 통해 의학이나 교육, 산업 현장에서 응용할 수 있는 심리학적 지식과 정보 등을 제공하지! ',
    trigger: 'INTP-심리학자-3'
  },
  {
    id: 'INTP-심리학자-3',
    message: '심리학자의 연봉은 3235만원부터 시작해!',
    trigger: 'INTP-심리학자-4'
  },
  {
    id: 'INTP-심리학자-4',
    message: '현대사회에서 국민의 정신 보건에 대한 중요성이 강조되고, 인사선발과정, 인사컨설팅, ',
    trigger: 'INTP-심리학자-5'
  },
  {
    id: 'INTP-심리학자-5',
    message:
      '청소년의 진로개발 등의 분야에서도 심리검사 수요가 증가하고 있어 고용 수가 연 1.9% 증가할 전망이야! ',
    trigger: 'INTP-심리학자-6'
  },
  {
    id: 'INTP-심리학자-6',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'INTP-심리학자-7'
  },
  {
    id: 'INTP-심리학자-7',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'INTP-10' },
      { value: 2, label: '아니~ 괜찮아!', trigger: '3' }
    ]
  },
  {
    id: 'INTP-프로그래머-1',
    message:
      '프로그래머는 컴퓨터 프로그램의 논리나 알고리즘을 설계하고, 원시 코드를 작성하여 테스트하는 사람이야!',
    trigger: 'INTP-프로그래머-2'
  },
  {
    id: 'INTP-프로그래머-2',
    message:
      '프로그래머로서 일을 하기 위해서는 적어도 컴퓨터에 대한 충분한 지식이 필요하구 세심한 주의력과 깊은 추리력이 요구돼! ',
    trigger: 'INTP-프로그래머-3'
  },
  {
    id: 'INTP-프로그래머-3',
    message: '연봉은 3577만원 정도로 시작하구 연차에 따라 7천만원까지도 상승해!',
    trigger: 'INTP-프로그래머-4'
  },
  {
    id: 'INTP-프로그래머-4',
    message: ' 4차 산업혁명의 시대가 본격화 되면서 기업체의 수요도가 나날이 증가해 전망이 좋다구! ',
    trigger: 'INTP-프로그래머-5'
  },
  {
    id: 'INTP-프로그래머-5',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'INTP-프로그래머-6'
  },
  {
    id: 'INTP-프로그래머-6',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'INTP-10' },
      { value: 2, label: '아니~ 괜찮아!', trigger: '3' }
    ]
  },
  {
    id: 'INTP-수학자-1',
    message: '수학적 지식과 이론을 발전시키기 위한 연구를 수행하며 ',
    trigger: 'INTP-수학자-2'
  },
  {
    id: 'INTP-수학자-2',
    message:
      '수학적 이론과 기법을 활용하여 경제학, 과학, 공학, 물리학 등의 관련 문제를 해결하기 위한 연구를 하는 직업이야!',
    trigger: 'INTP-수학자-3'
  },
  {
    id: 'INTP-수학자-3',
    message: '연봉은 4576만원 정도구',
    trigger: 'INTP-수학자-4'
  },
  {
    id: 'INTP-수학자-4',
    message: '향후 10년간 고용은 연평균 2.4% 증가할 것으로 전망돼. ',
    trigger: 'INTP-수학자-5'
  },
  {
    id: 'INTP-수학자-5',
    message: '4차 산업혁명 시대에는 빅데이터와 접목한 비즈니스가 활발해지고 있어서 ',
    trigger: 'INTP-수학자-6'
  },
  {
    id: 'INTP-수학자-6',
    message: '데이터 분석에 접목할 수 있는 수학연구원에 대한 인력수요가 증가한다고 해!',
    trigger: 'INTP-수학자-7'
  },
  {
    id: 'INTP-수학자-7',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'INTP-수학자-8'
  },
  {
    id: 'INTP-수학자-8',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'INTP-10' },
      { value: 2, label: '아니~ 괜찮아!', trigger: '3' }
    ]
  },

  {
    id: 'ISFJ-1',
    message: 'ISFJ구나~ 용감한 수호자! 라는데 맞는거 같아?',
    trigger: 'ISFJ-2'
  },
  {
    id: 'ISFJ-2',
    options: [
      { value: 1, label: '응 맞아!', trigger: 'ISFJ-3' },
      { value: 2, label: '음... 잘 모르겠는걸?', trigger: 'ISFJ-3' }
    ]
  },
  {
    id: 'ISFJ-3',
    message:
      '타인을 향한 연민이나 동정심이 있으면서도 가족이나 친구를 보호해야 할 때는 가차 없는 모습을 보이기도 하지. 맞니?',
    trigger: 'ISFJ-4'
  },
  {
    id: 'ISFJ-4',
    options: [
      { value: 1, label: '음... 맞는 거 같아!', trigger: 'ISFJ-5' },
      { value: 2, label: '맞는거 같기두?', trigger: 'ISFJ-5' }
    ]
  },
  {
    id: 'ISFJ-5',
    message: `ISFJ는 전체 인구의 13% 정도로 꽤 높은 인구 비율을 차지해!`,
    trigger: 'ISFJ-6'
  },
  {
    id: 'ISFJ-6',
    message: '완벽주의자만큼이나 세심하고 꼼꼼한 면모를 보이기도 하지, 안그래?',
    trigger: 'ISFJ-7'
  },
  {
    id: 'ISFJ-7',
    options: [
      { value: 1, label: '맞아 난 세심한 사람이야!', trigger: 'ISFJ-8' },
      { value: 2, label: '나에 대해 잘 아는걸?', trigger: 'ISFJ-8' }
    ]
  },
  {
    id: 'ISFJ-8',
    message:
      '후후! 넌 가치 있다고 여기는 일이 마무리되지 않고 있으면 게으르게 가만히 앉아만 있지 못하는 성격이지?',
    trigger: 'ISFJ-9'
  },
  {
    id: 'ISFJ-9',
    options: [
      { value: 1, label: '어떻게 알았어?', trigger: 'ISFJ-10' },
      { value: 2, label: '그런것 같아!', trigger: 'ISFJ-10' }
    ]
  },
  {
    id: 'ISFJ-10',
    message: '좋아! 세심하고 마음 따뜻한 너에게 어울리는 직업을 소개해줄게!',
    trigger: 'ISFJ-11'
  },
  {
    id: 'ISFJ-11',
    options: [
      { value: 1, label: '물리치료사', trigger: 'ISFJ-물리치료사-1' },
      { value: 2, label: '치과의사', trigger: 'ISFJ-치과의사-1' },
      { value: 3, label: '상담사', trigger: 'ISFJ-상담사-1' },
      { value: 4, label: '스포츠 트레이너', trigger: 'ISFJ-스포츠 트레이너-1' }
    ]
  },
  {
    id: 'ISFJ-물리치료사-1',
    message:
      '물리치료사는 온열치료, 전기치료, 광선치료, 수치료, 기계 및 기구 치료, 마사지, 기능훈련, 신체교정운동 및 재활훈련과 같은 물리요법적 치료를 하는 사람이야! ',
    trigger: 'ISFJ-물리치료사-2'
  },
  {
    id: 'ISFJ-물리치료사-2',
    message: '연봉은 3037만원 정도야!',
    trigger: 'ISFJ-물리치료사-3'
  },
  {
    id: 'ISFJ-물리치료사-3',
    message: '최근에 발달장애 아동 및 노인의 재활분야에 대한 사회복지 제도가 확대되면서',
    trigger: 'ISFJ-물리치료사-4'
  },
  {
    id: 'ISFJ-물리치료사-4',
    message: '물리치료사의 수요 증가 요인으로 작용하고 있어!',
    trigger: 'ISFJ-물리치료사-5'
  },
  {
    id: 'ISFJ-물리치료사-5',
    message: '따라서 향후 10년간 고용은 연평균 2.3% 증가할 것으로 전망된대!',
    trigger: 'ISFJ-물리치료사-6'
  },
  {
    id: 'ISFJ-물리치료사-6',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'ISFJ-물리치료사-7'
  },
  {
    id: 'ISFJ-물리치료사-7',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ISFJ-10' },
      { value: 2, label: '아니~ 괜찮아!', trigger: '3' }
    ]
  },
  {
    id: 'ISFJ-치과의사-1',
    message: '치과의사는 치아와 구강의 질환을 치료, 교정, 대치하여 예방하는 일을 해!',
    trigger: 'ISFJ-치과의사-2'
  },
  {
    id: 'ISFJ-치과의사-2',
    message: '충치나 손상된 치아를 치료하며 인공적 장치물로 대치시키기도 하지! ',
    trigger: 'ISFJ-치과의사-3'
  },
  {
    id: 'ISFJ-치과의사-3',
    message: '치과의사의 연봉은 평균 9234만원이야!',
    trigger: 'ISFJ-치과의사-4'
  },
  {
    id: 'ISFJ-치과의사-4',
    message: '향후 10년간 고용은 연평균 2.1% 증가할 것으로 전망돼!',
    trigger: 'ISFJ-치과의사-5'
  },
  {
    id: 'ISFJ-치과의사-5',
    message:
      '건강보험제도 혜택의 범위가 구강건강까지 확대되고 있고, 평균 수명이 늘어나면서 보철 및 임플란트 수요가 증가되었기 때문이야!',
    trigger: 'ISFJ-치과의사-6'
  },
  {
    id: 'ISFJ-치과의사-6',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'ISFJ-치과의사-7'
  },
  {
    id: 'ISFJ-치과의사-7',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ISFJ-10' },
      { value: 2, label: '아니~ 괜찮아!', trigger: '3' }
    ]
  },
  {
    id: 'ISFJ-상담사-1',
    message:
      '상담사는 성격, 적성, 지능, 진로 및 신체적ㆍ정서적 증상 등에 대해서 어려움을 겪고 있거나',
    trigger: 'ISFJ-상담사-2'
  },
  {
    id: 'ISFJ-상담사-2',
    message:
      '변화를 모색하는 개인에게 심리검사, 상담 프로그램 등을 활용해 문제 해결을 돕고 지원하는 일을 해! ',
    trigger: 'ISFJ-상담사-3'
  },
  {
    id: 'ISFJ-상담사-3',
    message: '연봉은 2900만원 정도야',
    trigger: 'ISFJ-상담사-4'
  },
  {
    id: 'ISFJ-상담사-4',
    message: '현대사회에서 국민의 정신보건에 대한 중요성이 강조되고 있고, ',
    trigger: 'ISFJ-상담사-5'
  },
  {
    id: 'ISFJ-상담사-5',
    message:
      '스트레스나 우울증, 대인기피증, 정신분열증 등 현대인의 정신건강이 사회적 문제가 되면서 적극적인 예방과 치료에 대한 필요인식이 증가되고있어! ',
    trigger: 'ISFJ-상담사-6'
  },
  {
    id: 'ISFJ-상담사-6',
    message: '따라서 향후 10년간 고용은 연평균 1.9% 증가할 것으로 전망되고 있어! ',
    trigger: 'ISFJ-상담사-7'
  },
  {
    id: 'ISFJ-상담사-7',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'ISFJ-상담사-8'
  },
  {
    id: 'ISFJ-상담사-8',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ISFJ-10' },
      { value: 2, label: '아니~ 괜찮아!', trigger: '3' }
    ]
  },
  {
    id: 'ISFJ-스포츠 트레이너-1',
    message: '스포츠 트레이너는 운동선수들의 건강상태를 확인하고',
    trigger: 'ISFJ-스포츠 트레이너-2'
  },
  {
    id: 'ISFJ-스포츠 트레이너-2',
    message: '선수들이 경기에서 최상의 컨디션을 발휘할 수 있도록 조언하고 훈련시키는 일을 해!',
    trigger: 'ISFJ-스포츠 트레이너-3'
  },
  {
    id: 'ISFJ-스포츠 트레이너-3',
    message: '연봉은 3505만원 정도야!',
    trigger: 'ISFJ-스포츠 트레이너-4'
  },
  {
    id: 'ISFJ-스포츠 트레이너-4',
    message: '운동선수 뿐만 아니라 재활병원, 일반인을 대상으로도. ',
    trigger: 'ISFJ-스포츠 트레이너-5'
  },
  {
    id: 'ISFJ-스포츠 트레이너-5',
    message: '부상방지 및 재활에 스포츠 트레이너의 역할이 강조되고 있기 때문에',
    trigger: 'ISFJ-스포츠 트레이너-6'
  },
  {
    id: 'ISFJ-스포츠 트레이너-6',
    message: '향후 10년간 고용은 연평균 2.1% 증가되는 전망이래!',
    trigger: 'ISFJ-스포츠 트레이너-7'
  },
  {
    id: 'ISFJ-스포츠 트레이너-7',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'ISFJ-스포츠 트레이너-8'
  },
  {
    id: 'ISFJ-스포츠 트레이너-8',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ISFJ-10' },
      { value: 2, label: '아니~ 괜찮아!', trigger: '3' }
    ]
  },

  {
    id: 'INFP-1',
    message: 'INFP 구나~ 열정적인 중재자! 맞는거 같아?',
    trigger: 'INFP-2'
  },
  {
    id: 'INFP-2',
    options: [
      { value: 1, label: '응 맞아!', trigger: 'INFP-3' },
      { value: 2, label: '음... 잘 모르겠는걸?', trigger: 'INFP-3' }
    ]
  },
  {
    id: 'INFP-3',
    message: '음... 긍정적이고 더 나은 상황을 만들고자 노력하는 진정한 이상주의자! 맞니?',
    trigger: 'INFP-4'
  },
  {
    id: 'INFP-4',
    options: [
      { value: 1, label: '음... 맞는 거 같아!', trigger: 'INFP-5' },
      { value: 2, label: '맞는거 같기두?', trigger: 'INFP-5' }
    ]
  },
  {
    id: 'INFP-5',
    message: `INFP는 전체 인구의 대략 4% 정도로 희소성이 높은 MBTI야`,
    trigger: 'INFP-6'
  },
  {
    id: 'INFP-6',
    message:
      '조용하거나 겸손해 보일 수 있지만 내면에는 활기차고 열정적인 마음을 가지고 있지! 안그래?',
    trigger: 'INFP-7'
  },
  {
    id: 'INFP-7',
    options: [{ value: 1, label: '맞아! 잘 아는걸?', trigger: 'INFP-8' }]
  },
  {
    id: 'INFP-8',
    message: '후후! 낭만이 많은 성격이며 관심분야에 대한 혼자만의 취미생활이 있지? ',
    trigger: 'INFP-9'
  },
  {
    id: 'INFP-9',
    options: [
      { value: 1, label: '어떻게 알았어? 맞아!', trigger: 'INFP-10' },
      { value: 2, label: '그런것 같아!', trigger: 'INFP-10' }
    ]
  },
  {
    id: 'INFP-10',
    message: '좋아! 감성적이며 활기찬 너에게 어울리는 직업을 소개해줄게!',
    trigger: 'INFP-11'
  },
  {
    id: 'INFP-11',
    options: [
      { value: 1, label: '프로듀서', trigger: 'INFP-프로듀서-1' },
      { value: 2, label: '작가', trigger: 'INFP-작가-1' },
      { value: 3, label: '심리학자', trigger: 'INFP-심리학자-1' },
      { value: 4, label: '영양사', trigger: 'INFP-영양사-1' }
    ]
  },
  {
    id: 'INFP-프로듀서-1',
    message: '프로듀서는 라디오 또는 텔레비전의 프로그램을 기획하고 제작하는 일을 해!',
    trigger: 'INFP-프로듀서-2'
  },
  {
    id: 'INFP-프로듀서-2',
    message: '완성된 대본을 평가하고 프로그램을 기획해 제작진과 연기자들을 선출하지',
    trigger: 'INFP-프로듀서-3'
  },
  {
    id: 'INFP-프로듀서-3',
    message:
      '뿐만 아니라 의상, 무대배경, 음악, 카메라작업 등을 결정하기 위해 제작진과 협의하는 사람이지!',
    trigger: 'INFP-프로듀서-4'
  },
  {
    id: 'INFP-프로듀서-4',
    message: '연봉은 4701만원 정도야!',
    trigger: 'INFP-프로듀서-5'
  },
  {
    id: 'INFP-프로듀서-5',
    message: '뉴미디어의 발전으로 방송이 점차 다매체, 다채널화 되어',
    trigger: 'INFP-프로듀서-6'
  },
  {
    id: 'INFP-프로듀서-6',
    message: '방송프로그램의 제작 수가 증가함에 따라 인력수요도 증가하고 있어!',
    trigger: 'INFP-프로듀서-7'
  },
  {
    id: 'INFP-프로듀서-7',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'INFP-프로듀서-8'
  },
  {
    id: 'INFP-프로듀서-8',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'INFP-10' },
      { value: 2, label: '아니~ 괜찮아!', trigger: '3' }
    ]
  },
  {
    id: 'INFP-작가-1',
    message: '작가는 예술과 취미의 분야에서 작품을 창작하는 사람을 말해!',
    trigger: 'INFP-작가-2'
  },
  {
    id: 'INFP-작가-2',
    message: '연봉은 3309만원 정도야!',
    trigger: 'INFP-작가-3'
  },
  {
    id: 'INFP-작가-3',
    message:
      '앞으로의 전망은 국민의 소득상승과 생활수준 향상으로 문화콘텐츠의 수요가 증가하고 있고',
    trigger: 'INFP-작가-4'
  },
  {
    id: 'INFP-작가-4',
    message:
      '특히 하나의 콘텐츠가 뜨게 되면 영화, 드라마, 애니메이션 등의 기타 연관 산업으로까지 활용되기 때문에 작가의 인력수요는 다소 증가할 것으로 보여!',
    trigger: 'INFP-작가-5'
  },
  {
    id: 'INFP-작가-5',
    message: '향후 10년간 고용은 연평균 1.3% 증가될 것으로 나타난대!',
    trigger: 'INFP-작가-6'
  },
  {
    id: 'INFP-작가-6',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'INFP-작가-7'
  },
  {
    id: 'INFP-작가-7',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'INFP-10' },
      { value: 2, label: '아니~ 괜찮아!', trigger: '3' }
    ]
  },
  {
    id: 'INFP-심리학자-1',
    message: '심리학자는 인간의 행동과 정신적 과정을 과학적이고 체계적 방법을 통해 연구해!',
    trigger: 'INFP-심리학자-2'
  },
  {
    id: 'INFP-심리학자-2',
    message:
      '연구 결과를 통해 의학이나 교육, 산업 현장에서 응용할 수 있는 심리학적 지식과 정보 등을 제공하지! ',
    trigger: 'INFP-심리학자-3'
  },
  {
    id: 'INFP-심리학자-3',
    message: '심리학자의 연봉은 3235만원부터 시작해!',
    trigger: 'INFP-심리학자-4'
  },
  {
    id: 'INFP-심리학자-4',
    message: '현대사회에서 국민의 정신 보건에 대한 중요성이 강조되고, 인사선발과정, 인사컨설팅, ',
    trigger: 'INFP-심리학자-5'
  },
  {
    id: 'INFP-심리학자-5',
    message:
      '청소년의 진로개발 등의 분야에서도 심리검사 수요가 증가하고 있어 고용 수가 연 1.9% 증가할 전망이야! ',
    trigger: 'INFP-심리학자-6'
  },
  {
    id: 'INFP-심리학자-6',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'INFP-심리학자-7'
  },
  {
    id: 'INFP-심리학자-7',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'INFP-10' },
      { value: 2, label: '아니~ 괜찮아!', trigger: '3' }
    ]
  },
  {
    id: 'INFP-영양사-1',
    message: '영양사는 학교, 병원, 회사, 호텔과 같은 시설에서',
    trigger: 'INFP-영양사-2'
  },
  {
    id: 'INFP-영양사-2',
    message:
      '급식대상자의 기호, 영양가, 조리능력, 비용 등을 기초로 하여 섭식의 준비를 기획하고 작성하지!',
    trigger: 'INFP-영양사-3'
  },
  {
    id: 'INFP-영양사-3',
    message: '연봉은 2907만원 정도야!',
    trigger: 'INFP-영양사-4'
  },
  {
    id: 'INFP-영양사-4',
    message: "국민의 영양 및 건강 증진을 도모하기 위한 '국민영양관리법'이 제정됨에 따라. ",
    trigger: 'INFP-영양사-5'
  },
  {
    id: 'INFP-영양사-5',
    message:
      '1회 급식인원 100인 이상의 산업체의 경우 영양사를 의무배치 하도록 식품위생법이 개정되어서',
    trigger: 'INFP-영양사-6'
  },
  {
    id: 'INFP-영양사-6',
    message: '향후 10년간 고용은 연평균 1.9% 증가되는 전망이래!',
    trigger: 'INFP-영양사-7'
  },
  {
    id: 'INFP-영양사-7',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'INFP-영양사-8'
  },
  {
    id: 'INFP-영양사-8',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'INFP-10' },
      { value: 2, label: '아니~ 괜찮아!', trigger: '3' }
    ]
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
