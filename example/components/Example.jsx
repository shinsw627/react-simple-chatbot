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
  },
  {
    id: 'ESTP-1',
    message: 'ESTP 모험을 즐기는 사업가구나~ ',
    trigger: 'ESTP-2'
  },
  {
    id: 'ESTP-2',
    message: '넌 사실적이고 관대하며 개방적이고 사람이나 사물에 대한 선입견이 별로 없지? ',
    trigger: 'ESTP-3'
  },
  {
    id: 'ESTP-3',
    options: [
      { value: 1, label: '오... 맞는거 같은데?', trigger: 'ESTP-4' },
      { value: 2, label: '음... 잘 모르겠는걸?', trigger: 'ESTP-4' }
    ]
  },
  {
    id: 'ESTP-4',
    message: '음... 긴 설명을 싫어하고 현실적이고 실용적인 것을 좋아하지?',
    trigger: 'ESTP-5'
  },
  {
    id: 'ESTP-5',
    options: [
      { value: 1, label: '음... 맞는 거 같아!', trigger: 'ESTP-6' },
      { value: 2, label: '맞는거 같기두?', trigger: 'ESTP-6' }
    ]
  },
  {
    id: 'ESTP-6',
    message: `ESTP는 전체 인구의 대략 4% 정도로 희소성이 높은 MBTI야`,
    trigger: 'ESTP-7'
  },
  {
    id: 'ESTP-7',
    message:
      '충만한 영감과 설득력, 그리고 다양한 성격을 가지고 팀을 이끄는 타고난 리더형이라고 하는데 맞아?',
    trigger: 'ESTP-8'
  },
  {
    id: 'ESTP-8',
    options: [{ value: 1, label: '맞아! 잘 아는걸?', trigger: 'ESTP-9' }]
  },
  {
    id: 'ESTP-9',
    message: '스릴을 좋아하는 편이며 무대의 중심에 서는 것과 관심을 즐기는 편이지?',
    trigger: 'ESTP-10'
  },
  {
    id: 'ESTP-10',
    options: [
      { value: 1, label: '어떻게 알았어? 맞아!', trigger: 'ESTP-11' },
      { value: 2, label: '그런것 같아!', trigger: 'ESTP-11' }
    ]
  },
  {
    id: 'ESTP-11',
    message:
      '좋아! 개방적이지고 스릴을 즐기지만 현실적인 사람인 너에게 어울리는 직업을 소개해줄게!',
    trigger: 'ESTP-12'
  },
  {
    id: 'ESTP-12',
    options: [
      { value: 1, label: '기자', trigger: 'ESTP-기자-1' },
      { value: 2, label: '경찰', trigger: 'ESTP-경찰-1' },
      { value: 3, label: '빅데이터 전문가', trigger: 'ESTP-빅데이터 전문가-1' },
      { value: 4, label: '요리사', trigger: 'ESTP-요리사-1' }
    ]
  },
  {
    id: 'ESTP-기자-1',
    message: '기자는 우리 주변에서 일어나는 각종 사고, 사건 ,정치, 경제 소식, 생활 정보 등을',
    trigger: 'ESTP-기자-2'
  },
  {
    id: 'ESTP-기자-2',
    message: '신문, 잡지, 라디오, TV, 인터넷 등을 통해 일반인에게 신속하게 알려주는 일을 해',
    trigger: 'ESTP-기자-3'
  },
  {
    id: 'ESTP-기자-3',
    message: '연봉은 3992만원 정도야!',
    trigger: 'ESTP-기자-4'
  },
  {
    id: 'ESTP-기자-4',
    message: '인터넷에 기반한 새로운 뉴스 매체들의 시장진입과',
    trigger: 'ESTP-기자-5'
  },
  {
    id: 'ESTP-기자-5',
    message: '뉴미디어의 발전으로 방송이 점차 다매체, 다채널화로 뉴스 소비패턴이 다양화되면서',
    trigger: 'ESTP-기자-6'
  },
  {
    id: 'ESTP-기자-6',
    message: '뉴스 콘텐츠 수요가 증가하고 있어! 향후 10년간 고용률도 연평균 1.0% 증가할 전망이야!',
    trigger: 'ESTP-기자-7'
  },
  {
    id: 'ESTP-기자-7',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'ESTP-기자-8'
  },
  {
    id: 'ESTP-기자-8',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ESTP-10' },
      { value: 2, label: '아니~ 괜찮아!', trigger: '3' }
    ]
  },
  {
    id: 'ESTP-경찰-1',
    message: '경찰관은 국민의 생명과 재산을 보호하는 역할을 해!',
    trigger: 'ESTP-경찰-2'
  },
  {
    id: 'ESTP-경찰-2',
    message: '범죄 수사를 통해 범인을 잡고, 안전한 사회를 만들기 위해 노력하지!',
    trigger: 'ESTP-경찰-3'
  },
  {
    id: 'ESTP-경찰-3',
    message: '연봉은 3783만원 정도야',
    trigger: 'ESTP-경찰-4'
  },
  {
    id: 'ESTP-경찰-4',
    message: '민생치안을 위한 경찰인력 증원이 필요하다는 국민의 공감대가 형성되어',
    trigger: 'ESTP-경찰-5'
  },
  {
    id: 'ESTP-경찰-5',
    message: '향후 10년간 고용은 연평균 1.7% 증가할 것으로 전망된대!',
    trigger: 'ESTP-경찰-6'
  },
  {
    id: 'ESTP-경찰-6',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'ESTP-경찰-7'
  },
  {
    id: 'ESTP-경찰-7',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ESTP-10' },
      { value: 2, label: '아니~ 괜찮아!', trigger: '3' }
    ]
  },
  {
    id: 'ESTP-빅데이터전문가-1',
    message:
      '빅데이터 전문가는 분석할 빅데이터 자원을 수집하여 프로그램을 만들고 통계학적으로 분석하는 일을 해!',
    trigger: 'ESTP-빅데이터전문가-2'
  },
  {
    id: 'ESTP-빅데이터전문가-2',
    message:
      '대용량의 데이터를 처리하는 플랫폼을 통해 빅데이터를 처리한 후 분석결과를 시각화 하지! ',
    trigger: 'ESTP-빅데이터전문가-3'
  },
  {
    id: 'ESTP-빅데이터전문가-3',
    message: '연봉은 3670만원부터 시작한다고 해!',
    trigger: 'ESTP-빅데이터전문가-4'
  },
  {
    id: 'ESTP-빅데이터전문가-4',
    message:
      '빅데이터는 다양한 분야의 서비스, 소프트웨어, 하드웨어 등에 매우 큰 영향을 미치기도 하기 때문에',
    trigger: 'ESTP-빅데이터전문가-5'
  },
  {
    id: 'ESTP-빅데이터전문가-5',
    message:
      '경영학, 통계학, 컴퓨터공학 등 다양한 분야의 협력이 반드시 필요하다는 점에서 발전 가능성이 크고 이에 따라 빅 데이터 전문가의 직업적 전망도 밝다고 할 수 있어!',
    trigger: 'ESTP-빅데이터전문가-6'
  },
  {
    id: 'ESTP-빅데이터전문가-6',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'ESTP-빅데이터전문가-7'
  },
  {
    id: 'ESTP-빅데이터전문가-7',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ESTP-10' },
      { value: 2, label: '아니~ 괜찮아!', trigger: '3' }
    ]
  },
  //요리사 수정해야함 전망 별로
  {
    id: 'ESTP-요리사-1',
    message: '요리사는 준비한 재료에 물리적, 화학적 방법을 가하여 음식을 만드는 일을 해!',
    trigger: 'ESTP-요리사-2'
  },
  {
    id: 'ESTP-요리사-2',
    message:
      '각종 양념, 조미료 등을 준비하고, 오븐, 솥, 전자렌지 등 각종 요리기구를 사용하여 적당한 조리법에 따라 요리하지!',
    trigger: 'ESTP-요리사-3'
  },
  {
    id: 'ESTP-요리사-3',
    message: '연봉은 3499만원 정도야!',
    trigger: 'ESTP-요리사-4'
  },
  {
    id: 'ESTP-요리사-4',
    message:
      '다른 산업에 비해 진입이 쉬워 청년층 뿐만 아니라 은퇴한 중년층의 음식점 창업에 몰리면서 외식시장이 포화상태에 있다고 해!',
    trigger: 'ESTP-요리사-5'
  },
  {
    id: 'ESTP-요리사-5',
    message: '조리사 및 주방장에 대한 인력수요는 증가할 것으로 전망된대!',
    trigger: 'ESTP-요리사-6'
  },
  {
    id: 'ESTP-요리사-6',
    message: '향후 10년간 고용은 연평균 1.9% 증가할 것이라네!',
    trigger: 'ESTP-요리사-7'
  },
  {
    id: 'ESTP-요리사-7',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'ESTP-요리사-8'
  },
  {
    id: 'ESTP-요리사-8',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ESTP-10' },
      { value: 2, label: '아니~ 괜찮아!', trigger: '3' }
    ]
  },

  {
    id: 'ENTP-1',
    message: 'ENTP구나! 너는 자존감과 자기 확신이 높아 맞아?',
    trigger: 'ENTP-2'
  },
  {
    id: 'ENTP-2',
    options: [
      { value: 1, label: '응 맞아!', trigger: 'ENTP-3' },
      { value: 2, label: '음... 잘 모르겠는걸?', trigger: 'ENTP-3' }
    ]
  },
  {
    id: 'ENTP-3',
    message: '그리고 혼자서도 뭐든 잘놀고 재밌게 생활 할 수 있어 맞니?',
    trigger: 'ENTP-4'
  },
  {
    id: 'ENTP-4',
    options: [
      { value: 1, label: '음... 맞는 거 같아!', trigger: 'ENTP-5' },
      { value: 2, label: '맞는거 같기두?', trigger: 'ENTP-5' }
    ]
  },
  {
    id: 'ENTP-5',
    message: `또 개인적인 시간과 장소를 비교적 많이 필요로 해 그치?`,
    trigger: 'ENTP-6'
  },
  {
    id: 'ENTP-6',
    message:
      '조용하거나 겸손해 보일 수 있지만 내면에는 활기차고 열정적인 마음을 가지고 있지! 안그래?',
    trigger: 'ENTP-7'
  },
  {
    id: 'ENTP-7',
    options: [{ value: 1, label: '맞아! 잘 아는걸?', trigger: 'ENTP-8' }]
  },
  {
    id: 'ENTP-8',
    message: '후후! 낭만이 많은 성격이며 관심분야에 대한 혼자만의 취미생활이 있지? ',
    trigger: 'ENTP-9'
  },
  {
    id: 'ENTP-9',
    options: [
      { value: 1, label: '어떻게 알았어? 맞아!', trigger: 'ENTP-10' },
      { value: 2, label: '그런것 같아!', trigger: 'ENTP-10' }
    ]
  },
  {
    id: 'ENTP-10',
    message: '좋아! 감성적이며 활기찬 너에게 어울리는 직업을 소개해줄게!',
    trigger: 'ENTP-11'
  },
  {
    id: 'ENTP-11',
    options: [
      { value: 1, label: '프로듀서', trigger: 'ENTP-프로듀서-1' },
      { value: 2, label: '작가', trigger: 'ENTP-작가-1' },
      { value: 3, label: '심리학자', trigger: 'ENTP-심리학자-1' },
      { value: 4, label: '영양사', trigger: 'ENTP-영양사-1' }
    ]
  },
  {
    id: 'ENTP-프로듀서-1',
    message: '프로듀서는 라디오 또는 텔레비전의 프로그램을 기획하고 제작하는 일을 해!',
    trigger: 'ENTP-프로듀서-2'
  },
  {
    id: 'ENTP-프로듀서-2',
    message: '완성된 대본을 평가하고 프로그램을 기획해 제작진과 연기자들을 선출하지',
    trigger: 'ENTP-프로듀서-3'
  },
  {
    id: 'ENTP-프로듀서-3',
    message:
      '뿐만 아니라 의상, 무대배경, 음악, 카메라작업 등을 결정하기 위해 제작진과 협의하는 사람이지!',
    trigger: 'ENTP-프로듀서-4'
  },
  {
    id: 'ENTP-프로듀서-4',
    message: '연봉은 4701만원 정도야!',
    trigger: 'ENTP-프로듀서-5'
  },
  {
    id: 'ENTP-프로듀서-5',
    message: '뉴미디어의 발전으로 방송이 점차 다매체, 다채널화 되어',
    trigger: 'ENTP-프로듀서-6'
  },
  {
    id: 'ENTP-프로듀서-6',
    message: '방송프로그램의 제작 수가 증가함에 따라 인력수요도 증가하고 있어!',
    trigger: 'ENTP-프로듀서-7'
  },
  {
    id: 'ENTP-프로듀서-7',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'ENTP-프로듀서-8'
  },
  {
    id: 'ENTP-프로듀서-8',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ENTP-10' },
      { value: 2, label: '아니~ 괜찮아!', trigger: '3' }
    ]
  },
  {
    id: 'ENTP-작가-1',
    message: '작가는 예술과 취미의 분야에서 작품을 창작하는 사람을 말해!',
    trigger: 'ENTP-작가-2'
  },
  {
    id: 'ENTP-작가-2',
    message: '연봉은 3309만원 정도야!',
    trigger: 'ENTP-작가-3'
  },
  {
    id: 'ENTP-작가-3',
    message:
      '앞으로의 전망은 국민의 소득상승과 생활수준 향상으로 문화콘텐츠의 수요가 증가하고 있고',
    trigger: 'ENTP-작가-4'
  },
  {
    id: 'ENTP-작가-4',
    message:
      '특히 하나의 콘텐츠가 뜨게 되면 영화, 드라마, 애니메이션 등의 기타 연관 산업으로까지 활용되기 때문에 작가의 인력수요는 다소 증가할 것으로 보여!',
    trigger: 'ENTP-작가-5'
  },
  {
    id: 'ENTP-작가-5',
    message: '향후 10년간 고용은 연평균 1.3% 증가될 것으로 나타난대!',
    trigger: 'ENTP-작가-6'
  },
  {
    id: 'ENTP-작가-6',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'ENTP-작가-7'
  },
  {
    id: 'ENTP-작가-7',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ENTP-10' },
      { value: 2, label: '아니~ 괜찮아!', trigger: '3' }
    ]
  },
  {
    id: 'ENTP-심리학자-1',
    message: '심리학자는 인간의 행동과 정신적 과정을 과학적이고 체계적 방법을 통해 연구해!',
    trigger: 'ENTP-심리학자-2'
  },
  {
    id: 'ENTP-심리학자-2',
    message:
      '연구 결과를 통해 의학이나 교육, 산업 현장에서 응용할 수 있는 심리학적 지식과 정보 등을 제공하지! ',
    trigger: 'ENTP-심리학자-3'
  },
  {
    id: 'ENTP-심리학자-3',
    message: '심리학자의 연봉은 3235만원부터 시작해!',
    trigger: 'ENTP-심리학자-4'
  },
  {
    id: 'ENTP-심리학자-4',
    message: '현대사회에서 국민의 정신 보건에 대한 중요성이 강조되고, 인사선발과정, 인사컨설팅, ',
    trigger: 'ENTP-심리학자-5'
  },
  {
    id: 'ENTP-심리학자-5',
    message:
      '청소년의 진로개발 등의 분야에서도 심리검사 수요가 증가하고 있어 고용 수가 연 1.9% 증가할 전망이야! ',
    trigger: 'ENTP-심리학자-6'
  },
  {
    id: 'ENTP-심리학자-6',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'ENTP-심리학자-7'
  },
  {
    id: 'ENTP-심리학자-7',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ENTP-10' },
      { value: 2, label: '아니~ 괜찮아!', trigger: '3' }
    ]
  },
  {
    id: 'ENTP-영양사-1',
    message: '영양사는 학교, 병원, 회사, 호텔과 같은 시설에서',
    trigger: 'ENTP-영양사-2'
  },
  {
    id: 'ENTP-영양사-2',
    message:
      '급식대상자의 기호, 영양가, 조리능력, 비용 등을 기초로 하여 섭식의 준비를 기획하고 작성하지!',
    trigger: 'ENTP-영양사-3'
  },
  {
    id: 'ENTP-영양사-3',
    message: '연봉은 2907만원 정도야!',
    trigger: 'ENTP-영양사-4'
  },
  {
    id: 'ENTP-영양사-4',
    message: "국민의 영양 및 건강 증진을 도모하기 위한 '국민영양관리법'이 제정됨에 따라. ",
    trigger: 'ENTP-영양사-5'
  },
  {
    id: 'ENTP-영양사-5',
    message:
      '1회 급식인원 100인 이상의 산업체의 경우 영양사를 의무배치 하도록 식품위생법이 개정되어서',
    trigger: 'ENTP-영양사-6'
  },
  {
    id: 'ENTP-영양사-6',
    message: '향후 10년간 고용은 연평균 1.9% 증가되는 전망이래!',
    trigger: 'ENTP-영양사-7'
  },
  {
    id: 'ENTP-영양사-7',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'ENTP-영양사-8'
  },
  {
    id: 'ENTP-영양사-8',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ENTP-10' },
      { value: 2, label: '아니~ 괜찮아!', trigger: '3' }
    ]
  },

  //동건님 부분, 수정할 것 INFJ만 있다.
  {
    id: 'INFJ-1',
    message: '안녕! 너 이름이 뭐니!?',
    trigger: 'INFJ-2'
  },
  {
    id: 'INFJ-2',
    user: true,
    trigger: 'INFJ-3'
  },
  {
    id: 'INFJ-3',
    message: ' {previousValue}?, 좋은 이름이네!',
    trigger: 'INFJ-4'
  },
  {
    id: 'INFJ-4',
    message: ' mbti는?',
    trigger: 'INFJ-5'
  },
  {
    id: 'INFJ-5',
    user: true,
    trigger: 'INFJ-6'
  },
  {
    id: 'INFJ-6',
    message: ' {previousValue}?, 특이한 유형이네!',
    trigger: 'INFJ-7'
  },
  {
    id: 'INFJ-7',
    message: ' 전 세계 MBTI 유형중 가장 희귀한 소수의 유형인거 알고있니?',
    trigger: 'INFJ-8'
  },
  {
    id: 'INFJ-8',
    message: ' 이 사람들은 어떤 직업을 가지고 있을까??? 궁금하지?',
    trigger: 'INFJ-9'
  },
  {
    id: 'INFJ-9',
    options: [{ value: 1, label: 'ㅇㅇ! 궁금해!', trigger: 'INFJ-10' }]
  },
  {
    id: 'INFJ-10',
    message: ' 좋아! 한 번 알아 보자!',
    trigger: 'INFJ-11'
  },
  {
    id: 'INFJ-11',
    message:
      ' INFJ 사람들은 물리치료사 , 보건 교사 , 디자이너,  번역가, 사회과학자 등으로 활약 하고 있지! 혹시 흥미로운 직업이 보이니??',
    trigger: 'INFJ-12'
  },
  {
    id: 'INFJ-12',
    options: [
      { value: 1, label: '물리치료사', trigger: 'INFJ-물리치료사' },
      { value: 2, label: '보건 교사', trigger: 'INFJ-보건 교사' },
      { value: 3, label: '번역가', trigger: 'INFJ-번역가' },
      { value: 4, label: '디자이너', trigger: 'INFJ-디자이너' }
    ]
  },
  {
    id: 'INFJ',
    message: '다른 직업도 궁금하니?',
    trigger: 'INFJ-12'
  },
  {
    id: 'INFJ-물리치료사',
    message: ' 물리치료사에 관심이 있구나!!',
    trigger: 'INFJ-물리치료사-2'
  },
  {
    id: 'INFJ-물리치료사-2',
    message: ' 좋은 직업이지!',
    trigger: 'INFJ-물리치료사-3'
  },
  {
    id: 'INFJ-물리치료사-3',
    message:
      ' 물리치료사는 근골격계 또는 신경계 손상 환자들을 대상으로 온열치료, 전기치료, 광선치료, 수치료, 도수치료, 기계 및 기구치료, 치료적 마사지, 기능훈련, 신체교정운동 및 재활훈련과 이에 필요한 기기, 환자교육, 약품의 사용 및 관리 등의 일을 하는 분들이야!',
    trigger: 'INFJ-물리치료사-4'
  },
  {
    id: 'INFJ-물리치료사-4',
    message:
      ' 현재 대한민국에서 연간 배출인원은 약 3,100명 이고 물리치료사를 포함한 물리 및 작업치료사의 종사자 수는 48,000명이며, 최근에 발달장애 아동 및 노인의 재활분야에 대한 사회복지 제도가 확대되면서 물리치료사의 수요 증가 요인으로 작용하고 있어! 따라서 향후 10년간 고용은 연평균 2.3% 증가할 것으로 전망되지!',
    trigger: 'INFJ-물리치료사-5'
  },
  {
    id: 'INFJ-물리치료사-5',
    message: ' 전망증가 66%, 현상유지 20%, 감소 13%',
    trigger: 'INFJ-물리치료사-6'
  },
  {
    id: 'INFJ-물리치료사-6',
    message: ' 임금수준물리치료사 하위(25%) 2,841만원, 중위값 3,278만원, 상위(25%) 3,917만원',
    trigger: 'INFJ-물리치료사-7'
  },
  {
    id: 'INFJ-물리치료사-7',
    message: ' 직업만족도물리치료사에 대한 직업 만족도는 69.5% (백점 기준)',
    trigger: 'INFJ-물리치료사-8'
  },
  {
    id: 'INFJ-물리치료사-8',
    message: ' 전망증가 66%, 현상유지 20%, 감소 13%',
    trigger: 'INFJ'
  },
  {
    id: 'INFJ-보건 교사',
    message: '보건 교사에 관심이 있구나!!',
    trigger: 'INFJ-보건 교사-2'
  },
  {
    id: 'INFJ-보건 교사-2',
    message: '좋은 직업이지!',
    trigger: 'INFJ-보건 교사-3'
  },
  {
    id: 'INFJ-보건 교사-3',
    message:
      '보건교사는 학생과 교직원의 건강상태와 학교의 보건활동 진행상태를 평가하기 위해 정기적인 건강 진단 또는 검사를 실시하시고. 응급처치, 가정간호, 질병 및 전염병에 대한 보건교육과 건강상담을 담당하며 예방접종을 시행하시는 분이야!',
    trigger: 'INFJ-보건 교사-4'
  },
  {
    id: 'INFJ-보건 교사-4',
    message:
      '보건교사가 되기 위해서는 간호학사를 취득하고 각 시·도 교육청에서 실시하는 보건교사 임용시험에 합격해야해',
    trigger: 'INFJ-보건 교사-5'
  },
  {
    id: 'INFJ-보건 교사-5',
    message:
      '교육부는 비교과 분야의 보건·영양 등의 교원이 2018년도 법정정원에 현저히 미달되어 있어 이 분야 인력을 대규모로 채용하겠다고 발표했으며 실제로 2021년도엔 보건교사 모집이 역대 최대 수치로 이루어졌어!',
    trigger: 'INFJ-보건 교사-6'
  },
  {
    id: 'INFJ-보건 교사-6',
    message: '하위(25%) 3,488만 원, 중위값 4,078만 원, 상위(25%) 5,305만 원',
    trigger: 'INFJ'
  },
  {
    id: 'INFJ-번역가',
    message: '번역가에 관심이 있구나!!',
    trigger: 'INFJ-번역가-2'
  },
  {
    id: 'INFJ-번역가-2',
    message: '좋은 직업이지!',
    trigger: 'INFJ-번역가-3'
  },
  {
    id: 'INFJ-번역가-3',
    message:
      '번역가는 외국어를 국문으로, 국문을 외국어로 번역하고 글로 작성하는 역할을 하는 직업이야',
    trigger: 'INFJ-번역가-4'
  },
  {
    id: 'INFJ-번역가-4',
    message: '번역가 하위(25%) 3,137만 원, **중위값 3,736만 원**, 상위(25%) 4,335만 원',
    trigger: 'INFJ-번역가-5'
  },
  {
    id: 'INFJ-번역가-5',
    message:
      '향후 5년간 번역가의 고용은 현 상태를 유지하는 수준 또는 향상이 될 것으로 전망된다고 해! 전 세계적으로 문화교류가 증가하면서 각국의 문학작품이나 영상물 등 다양한 자료들의 번역 업무가 늘어나고 있기 때문이지!',
    trigger: 'INFJ-번역가-6'
  },
  {
    id: 'INFJ-번역가-6',
    message: '번역가로 유명한 사람으로는  안정효 님 류시화 시인님 등이 있어!',
    trigger: 'INFJ'
  },
  {
    id: 'INFJ-디자이너',
    message: '디자이너에 관심이 있구나!!',
    trigger: 'INFJ-디자이너-2'
  },
  {
    id: 'INFJ-디자이너-2',
    message: '좋은 직업이지!',
    trigger: 'INFJ-디자이너-3'
  },
  {
    id: 'INFJ-디자이너-3',
    message:
      '실물을 제작하기 전에 도면, 계획서, 설계도 등을 작성함으로써 그 구조나 형태를 계획하는 사람을  포괄적으로 디자이너라고해! 여기서 실물이라 함은 건물, 옷, 기계 등의 유형물일 수도 있고, 법률, 서비스, 비디오게임, 그래픽 등의 무형물일 수도 있지!',
    trigger: 'INFJ-디자이너-4'
  },
  {
    id: 'INFJ-디자이너-4',
    message: '하위(25%) 3,388만 원, **중위값 4,145만 원**, 상위(25%) 5,096만 원',
    trigger: 'INFJ-디자이너-5'
  },
  {
    id: 'INFJ-디자이너-5',
    message:
      '디자이너의 일자리 전망은 분야에 따라 상이한 양상을 보이지만, 철저히 능력위주로 평가받기 때문에 좋은 디자이너를 원하는 기업들은 점점더 많아 질것으로 전망되지! 지속적인 자기계발을 한다면 좋은 선택이 될 것이라고 평가받고 있어!',
    trigger: 'INFJ-디자이너-6'
  },
  {
    id: 'INFJ-디자이너-6',
    message:
      '디자이너로 유명한 사람으로는 레이먼드 로위,가브리엘 샤넬,TBWA,알렉세이 브로도비치 등이 있어!',
    trigger: 'INFJ'
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
