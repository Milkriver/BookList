import React from 'react';
import { booksListArray } from '../../local-storage';
import { AddBookElement } from '../add-book-element/add-book-element';
import { BookElement } from "../book-element/book-element";

function BookList() {
    return (
        <div className='bookList'>
            {<AddBookElement/>}
            {booksListArray.map((book) => {
            return (<BookElement book={book} key={book.id}/> )            
            })}
            
        </div>
    );
}

export { BookList };
