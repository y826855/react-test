import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
  //stric모드는 개발 과정 중에만 적용되고, 배포시에 자동으로 풀림.
  //안정성을 위해 사용하지만 꺼도 크게 상관은 없음
  //위의 stricMode가 켜져있으면 doubleInvoke가 발생함.
  //double Invoke란 useState, useMemo, useEffect 등의 함수들이 두번 실행되는 현상
  //
);
