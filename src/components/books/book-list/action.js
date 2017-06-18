export function selectBook(book) {
    // This is an action creator need to return an action: object with type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}