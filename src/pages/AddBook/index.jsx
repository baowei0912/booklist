import React from 'react'
import { nanoid } from 'nanoid'
import { useSpring, animated } from 'react-spring'
import { useDispatch } from 'react-redux';
import { addBook } from '../../features/bookSlice'

import './index.css'

export default function AddBook({open,onClose}) {
  const dispatch=useDispatch()
  const bookName=React.createRef()
  const price=React.createRef()
  const category=React.createRef()
  const description=React.createRef()

  const animation= useSpring({
    config:{
      duration:250
    },
    opacity: open ? 1:0,
    transform: open ? `translateY(0%)` : `translateY(-100%)`
  })

  const handleBook= (e) => { 
     e.preventDefault();
     let bookNameValue=bookName.current.value;
     let priceValue=price.current.value;
     let categoryValue=category.current.value;
     if (bookNameValue=="" || priceValue==" " ||categoryValue==""){
            alert('Please input name,price,and category')
        }
      else {const newBook={id:nanoid(),
                    bookName:bookNameValue,
                    price:priceValue,
                    category:categoryValue,
                    description:description.current.value
                  };
      dispatch(addBook(newBook));
       onClose()
                }
    }

  if(!open) return null

  return (
    <>
    
    <div className='overlay'> </div>
    <animated.div style={animation}>
    <div className='model'>
      <button onClick={onClose}>Close</button>
      <br/>
      <h3>Add Book Details</h3>
      <form> 
         <p> Name:<input ref={bookName} type="text" name="bookName"/>  </p>
         <p> Price: <input  ref={price} type="text" name="price"/>  </p>
         <p>  Category <input   ref={category} type="text" name="category"/>  </p>  
         <p>  Description <input   ref={description} type="text" name="description"/>  </p>  
         <button onClick={handleBook}> Add</button>
      </form>
    </div>
    </animated.div>
    </>
  )
}
