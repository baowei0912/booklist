import React, {useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { delBook } from '../../features/bookSlice'
import AddBook from '../../pages/AddBook';
import Modify from '../../pages/Modify'
import './index.css'



const BookList = () => {
  const books=useSelector(state => state.book.list)
  const dispatch=useDispatch()
 
  const [isOpen,setIsOpen]= useState(false)
  const [modify,setModify]= useState(false)
  const [selectBook,setSelectBook]=useState({})
  const [index,setIndex]=useState()


  const modifyBook= (id,index) => {
    const select= books.find((item) => {
      return item.id ===id
     }
   )
   setSelectBook(select)
   setIndex(index)
   setModify(true);
  }

    
  return (
        <div>
            <h2>Book List</h2>
            <button onClick={() => { setIsOpen(true) }}>Add Book</button>
            <AddBook open={isOpen} onClose={() => { setIsOpen(false) }} />
            <Modify modify={modify} onClose={() => { setModify(false) }} selectBook={selectBook} index={index}/>
            <table className='table'> 
              <thead>   
                 <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Category</td>
                    <td>Del</td>
                 </tr>
              </thead>
            <tbody>
            { books.map((book,index) => {
                 return (
                 <tr key={book.id}>
                 <td>{book.id}</td>
                 <td className='selectBook' onClick={() => modifyBook(book.id,index)}>{book.bookName}</td>  
                 <td>{book.price}</td>  
                 <td>{book.category}</td>
                 <td><button onClick={() => dispatch(delBook(index))}>Delete</button></td>  
                 </tr>
                 )
                }
            )
             }
            </tbody>

            </table>

                     
        </div>
    );
}

export default BookList;
