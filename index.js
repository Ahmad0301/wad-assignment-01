const express =require ('express')
const app = express()
const data = require('./data.js')

app.get('/api/books',(req,resp)=>{
    resp.json(data.books)
})

app.get('/api/books/avalible',(req,resp)=>{
    const ab =data.books.filter(books => books.isAvailable)
    resp.json(ab)
})

app.get('/api/books/issued',(req,resp)=>{
    const ib =data.books.filter(books => books.issuedTo)
    resp.json(ib)
})

app.get('/api/books?author=AuthorName',(req,resp)=>{
    const an =data.books.filter(books =>books.author )
    resp.json(an)
})

const port =3000
app.listen(port,()=>{
    console.log("server is open now")
})

