import React from 'react'
import { BookList } from "../book-list/book-list";
import { PageHeader } from "../page-header/page-header";

export default function App() {
  return (
    <div>
      <PageHeader />
      <BookList />
    </div>
  )
};
