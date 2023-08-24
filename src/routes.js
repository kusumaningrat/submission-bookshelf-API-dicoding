const { 
    addBookHadler, 
    getAllBookHandler, 
    getBookByIdHandler, 
    updateBookHandler,
    deleteBookHandler,
} = require("./handler");

const routes = [
    {
        method: 'GET',
        path: '/books',
        handler: getAllBookHandler
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBookByIdHandler
    },
    {
        method: 'POST',
        path: '/books',
        handler: addBookHadler
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: updateBookHandler
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBookHandler
    }
]

module.exports = routes;