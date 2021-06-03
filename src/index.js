import React from 'react';
import ReactDom from 'react-dom'

import './index.css';

import {books} from './books'
import Book from './Book'
import {greeting} from './testing/testing'

// const names = ['john', 'peter', 'susan']
// const newNames = names.map((name) =>{
//   return <h1>{name}</h1>
// })

function BookList() {
  console.log(greeting)
  return (
  <section className='booklist'>
    {books.map((book) => {
      return (
        <Book key={book.id} {...book}></Book>
      );
    })}
  </section>
  );
}





// const Book = () => {
//   return <article className="book">
//     <Image></Image>
//     <Title />
//     <Author />
//   </article>
// }

// const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/51o4b5AdNLL._AC_SX184_.jpg" alt="Picture" />

// const Title = () => <h1>Where's Spot?</h1>
// const Author = () => <h4 style={{color:'#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>Eric Hill</h4>

// const Greeting = () => {
//   return React.createElement('div', {}, React.createElement('h1',{}, 'hello world'));
// }


ReactDom.render(<BookList />, document.getElementById('root'));
