import logo from './assets/logo.svg';
import group from './assets/Group.svg'
import './App.css';
import React from 'react';
import { useState } from 'react';
import Login from './login/Login';
import Sign_In from './login/Sign_in';

// js에서 html을 할 수 있다
// 실은 html 아니라 jsx 임 아래거는


function App() {
  
  let post = '옷 제목이다 ' // 서버에서 가져온 실제 데이터 라고 가정

  // useState -> 자료를 잠깐 저장
  // 이걸 왜 쓰나? let으로 선언한 변수 값이 웹 동작중 수정 되면 html에 반영이 안됨
  // useState 를 사용하면 반영가능, 자동 재렌더링 됨
  let [a,b] = useState(['아기 옷 추천받아요','이런 일이'])
  // 자바스크립트 이게 가능
  let[likes, nextLikes] = useState(0);
  function upLike(){
    nextLikes(likes+1);
  }
  function changeTitle(){
    b(a = "변한값")
  }
  return (
    <div className="App">
      <Login />
      <div className = "blue-nav">
        <h4 style={{color : "white" , fontSize : '16px'}}>핏핏 웹 사이트</h4>
      </div>
      <div className="list">
        <h4>글 제목 <span onClick={upLike}>👍</span> {likes} </h4>
        <p> 옷은 이거야</p>
      </div>
      <div className="list">
        <h4 onClick={changeTitle}>{a}</h4>
        <p> 옷은 이거야</p>
      </div>
      <div className="list">
        <h4>{a[1]}</h4>
        <p> 옷은 이거야</p>
      </div>
      <h4> {post} </h4>
      <div style={{width: '100%', height: '100%', background: 'white'}}>
      </div>
    </div>
  );
}

export default App;


