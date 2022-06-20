import React from 'react';

function BookElement(bookElement) {
    const book = bookElement.book;
    return (
        <div className='bookElement'>
            <div className='bookAuthorTitle'>Автор: </div>
            <div className='bookAuthor'>{book.author}</div>
            <div className='bookNameTitle'>Название: </div>
            <div className='bookName'>{book.name}</div>
            <div><img src={book.image} alt={book.name} className='bookImage' /></div>
            <button className='buyBookButton'>Купить</button>
        </div>
    );
}

export { BookElement };
