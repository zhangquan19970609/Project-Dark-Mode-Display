import React from 'react'
import moment from 'moment'

// 由于 JS 的 new Date() object 不便于 React 调用，
// 因此使用 moment.js 模组来解决这个问题。

// 如何使用 moment.js? 
  // 首先在 package.js 中找到这个 dependencies。
  // 如果没有，需要在 NPM 内添加：npm install moment.

// moment js 接收一个 Date(), 并将其规定为 固定的 format.

  // moment( new Date( *sometime* )).format('MMMM Do YYYY, h:mm:ss a'); // December 29th 2022, 12:44:13 am
  // moment( new Date( *sometime* )).format('dddd');                    // Thursday
  // moment( new Date( *sometime* )).format("MMM Do YY");               // Dec 29th 22
  // moment( new Date( *sometime* )).format('YYYY [escaped] YYYY');     // 2022 escaped 2022
  // moment( new Date( *sometime* )).format();                          // 2022-12-29T00:44:13+08:00

// 因此要实现 Sunday 4th, 2020 的效果，选用的 moment js 应为:
  // moment(date).format('dddd Do, YYYY')


const Article = ({ title, date, length, snippet }) => {
  console.log(date);
  return <article className='post'>
    <h2>{title}</h2>
    <div className='post-info'>
      <span>{
        moment(date).format('dddd Do, YYYY')
      }</span>
      <span>{length} min read</span>
    </div>
    <p>{snippet}</p>
  </article>
}

export default Article

// Format Dates
// moment().format('MMMM Do YYYY, h:mm:ss a'); // December 29th 2022, 12:44:13 am
// moment().format('dddd');                    // Thursday
// moment().format("MMM Do YY");               // Dec 29th 22
// moment().format('YYYY [escaped] YYYY');     // 2022 escaped 2022
// moment().format();                          // 2022-12-29T00:44:13+08:00

// Relative Time
// moment("20111031", "YYYYMMDD").fromNow(); // 11 years ago
// moment("20120620", "YYYYMMDD").fromNow(); // 11 years ago
// moment().startOf('day').fromNow();        // 44 minutes ago
// moment().endOf('day').fromNow();          // in a day
// moment().startOf('hour').fromNow();       // 44 minutes ago

// Calendar Time
// moment().subtract(10, 'days').calendar(); // 12/19/2022
// moment().subtract(6, 'days').calendar();  // Last Friday at 12:44 AM
// moment().subtract(3, 'days').calendar();  // Last Monday at 12:44 AM
// moment().subtract(1, 'days').calendar();  // Yesterday at 12:44 AM
// moment().calendar();                      // Today at 12:44 AM
// moment().add(1, 'days').calendar();       // Tomorrow at 12:44 AM
// moment().add(3, 'days').calendar();       // Sunday at 12:44 AM
// moment().add(10, 'days').calendar();      // 01/08/2023

// Multiple Locale Support
// moment.locale();         // en
// moment().format('LT');   // 12:44 AM
// moment().format('LTS');  // 12:44:13 AM
// moment().format('L');    // 12/29/2022
// moment().format('l');    // 12/29/2022
// moment().format('LL');   // December 29, 2022
// moment().format('ll');   // Dec 29, 2022
// moment().format('LLL');  // December 29, 2022 12:44 AM
// moment().format('lll');  // Dec 29, 2022 12:44 AM
// moment().format('LLLL'); // Thursday, December 29, 2022 12:44 AM
// moment().format('llll'); // Thu, Dec 29, 2022 12:45 AM
