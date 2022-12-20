import React from 'react'
import { useSpring, animated } from 'react-spring'
import { useDispatch } from 'react-redux';
import {modifyBook} from '../../features/bookSlice'
import './index.css'

export default function AddBook({modify,onClose,selectBook,index}) {

  const dispatch=useDispatch()
  const bookName=React.createRef()
  const price=React.createRef()
  const category=React.createRef()
  const description=React.createRef()

  const animation= useSpring({
    config:{
      duration:250
    },
    opacity: modify ? 1:0,
    transform: modify ? `translateY(0%)` : `translateY(-100%)`
  })

  const handleBook= (e) => { 
     e.preventDefault();
     const newData={id:selectBook.id,
                    bookName:bookName.current.value,
                    price:price.current.value,
                    category:category.current.value,
                    description:description.current.value}
    
    dispatch(modifyBook({newData,index}))
    onClose()
   }

  if(!modify) return null

  return (
    <>
    
    <div className='overlay'> </div>
    <animated.div style={animation}>
    <div className='model'>
      <button onClick={onClose}>Close</button>
      <br/>
      <h3>Modify Book</h3>
      <form> 
         <p> Name:<input ref={bookName} type="text" name="bookName" defaultValue={selectBook.bookName}/>  </p>
         <p> Price: <input  ref={price} type="text" name="price" defaultValue={selectBook.price}/>  </p>
         <p>  Category <input   ref={category} type="text" name="category" defaultValue={selectBook.category}/>  </p>  
         <p>  Description <input   ref={description} type="text" name="description" defaultValue={selectBook.description}/>  </p>  
         <button onClick={handleBook}> Save data</button>
      </form>
    </div>
    </animated.div>
    </>
  )
}
