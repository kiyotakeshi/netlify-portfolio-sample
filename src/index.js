import React from 'react';
import ReactDOM from 'react-dom';
// ブラウザごとにもつユーザーエージェントスタイルシートという差分を埋めて、
// 表示を統一するために追加する、 CSS リセット
import 'minireset.css';
import './index.css';
import App from './App';

// sample data
const posts = [
    {
        title: 'はてなブログ(iyokan)',
        date: '2021/06/13',
        url: 'https://ponkan1219.hateblo.jp/',
    },
    {
        title: 'Qiita(ponkan1219)',
        date: '2021/06/14',
        url: 'https://qiita.com/ponkan1219',
    },
    {
        title: 'GitHub(iyokan)',
        date: '2021/06/15',
        url: 'https://github.com/kiyotakeshi',
    },
];

const works = [
    {
        title: 'はてなブログ(iyokan)',
        roles: ['Author', 'Spring', 'C#'],
        imageUrl: '/work.png',
    },
    {
        title: 'Qiita(ponkan1219)',
        roles: ['Author', 'RaspberryPi'],
        imageUrl: '/work.png',
    },
    {
        title: 'GitHub(iyokan)',
        roles: ['Author', 'Git'],
        imageUrl: '/work.png',
    },
];

ReactDOM.render(
    <App posts={posts} works={works} />,
    document.getElementById('root')
);
