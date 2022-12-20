import { createSlice } from '@reduxjs/toolkit'


export const bookSlice = createSlice({
  name: 'book',
  initialState: {
    list:[
        {id:"001",bookName:"A Doll's House ",price:11,category:"family",description:"family story"},
        {id:"002",bookName:"World War 2",price:31,category:"war",description:"world war"},
        {id:"003",bookName:"Music List ",price:21,category:"music",description:"music",},
        {id:"004",bookName:"Skating",price:46,category:"sport",description:"skating",},
        {id:"005",bookName:"Reading Habit",price:11,category:"reading",description:"reading"},
      ]}
  ,
  reducers: {
    delBook(state,{payload}){
       state.list.splice(payload,1)
    },

    addBook(state,{payload}){
        state.list.push(payload)
    },

    modifyBook(state,{payload}){
      state.list.splice(payload.index,1,payload.newData)
    }
  }
})

export const { delBook,addBook, modifyBook} = bookSlice.actions

export default bookSlice.reducer