import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

// 如何实现 toggle?
  // 通过 button 的 toggle，来为整个 html 增加 light-theme class 或 dark-theme class.

// 应有思路：
  // 首先设置一个 state value [theme, setTheme] 用于存储 dark or light theme;
  // useEffect ，当 加载页面/theme 变动时，自动将 html className 设置为 theme;
  // 设置一个 onClick toggle，当 light/dark 时，发动一个 theme change.

// 第二问题：如何让 theme 设置保存在本地，使得用户重新刷新的时候，也从缓存中取值？
  // 1. 仿照 Grocery Bud，设置一个 getLocalStorageTheme.
  // 2. 在 useEffect 中设置一个 localStorage 的 setTheme:
    // 这样一来，local storage 中的 theme 会随着 toggle 转变 value.
      // 刷新的时候虽然会 let theme = 'light-theme', 
      // 但只要前一轮 useEffect 存储的 theme 值 为 dark-theme, 
      // useState theme 的 default value 就会设置为 darkTheme.
    // localStorage.setItem('theme', theme);
function getLocalStorageTheme() {
  let theme = 'light-theme'; // theme 初始值设为 light，
  if (localStorage.getItem('theme')){ // 若 local storage 中能够取值 theme,
    theme = localStorage.getItem('theme'); // 则 将 变量 theme 设置为 上一轮 useEffect 取到的值
  }
  return theme; // 返回一个 theme，以供在 useState hook 中作为 default value.
}

function App() {

  const [theme, setTheme] = useState(getLocalStorageTheme());

  useEffect(() => { // 此处使用 pure JS 来 query 到 html 的 class 并予以更改;
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  },[theme]);

  const toggleTheme = () => {
    setTheme (() => {
      if (theme === 'light-theme'){
        return 'dark-theme'
      } else {
        return 'light-theme'
      }
    })
  }

  return <main>
    <nav>
      <div className='nav-center'>
        <h1>overreacted</h1>
        <button className='btn' onClick={toggleTheme}>toggle</button>
      </div>
    </nav>
    <section className='articles'>
      {data.map((item,index) => {
        return <Article key={index} {...item}></Article>
      })}
    </section>
  </main>
}

export default App
