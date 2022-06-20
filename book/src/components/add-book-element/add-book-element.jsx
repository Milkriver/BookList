import React from 'react';

function AddBookElement() {
    return (
        <form className='addBookElement'>
           <input type="text" placeholder ='Введите имя автора' className='addBookElementAuthor'></input>
           <input type="text" placeholder ='Введите название книги' className='addBookElementName'></input>
           <input type="file" className='addBookElementImage'></input>
           <button type='submit' className='addBookElementButton'>Добавить</button>
        </form>
    );
}

export { AddBookElement };
