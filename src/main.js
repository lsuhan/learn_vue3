import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import AppCard from '@/components/AppCard.vue';

//view 인스턴스를 생성 - appId 컴포넌트에 마운트
const app = createApp(App);

// 전역으로 컴포넌트 사용.
// 단점: 1.컴파일시 전역 컴포넌트를 컴파일에 불필요하게 파일이 커질수있다. 2. 컴포넌트의 종속관계를 파악하기 힘들다.
// app.component('AppCard', AppCard);

//mount 메서드는 반드시 앱의 환경설정 및 에셋(asset)이 모두 등록 완료된 후에 호출되어야 합니다. 또한 에셋 등록 메서드와 달리 반환 값은 앱 인스턴스가 아닌 최상위 컴포넌트 인스턴스.
app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
