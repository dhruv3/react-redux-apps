export function selectBook(book){
  // console.log('Book selected is:', book.title)
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
