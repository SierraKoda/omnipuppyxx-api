import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import firebase from 'firebase/app'
/*** firebase provider store and props config ***/
import 'firebase/auth'

import { createStore, combineReducers, compose } from 'redux'
import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase'

const fbConfig = {}

const rrfConfig = {
  userProfile: 'users'
}

firebase.initializeApp(fbConfig)

const rootReducer = combineReducers({
  firebase.firebaseReducer
})

const initialState = {}
const store = createStore( rootReducer, initialState)

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
}

function App(){
  return(
    <Provider store={store}>
     <ReactReduxFirebaseProvider {...rrfProps}>
       <Todos />
     </ReactReduxFirebaseProvider>
    </Provider>
    )
}

render(<App />, document.getElementById('root'))

import React from 'react'
import { useFirebase } from 'react-redux-firebase'

export default Function Todos(){
  const firebase = useFirebase()
  
  Function addSampleTodo(){
    const templateTodo = {
      text: 'template', done: false 
    } return firebase.push('todos', templateTodo)
  } return (
    <div>
     <h1>New To-do Object</h1>
      <button onClick={addSampleTodo}>Add</button>
    </div>
    )
  
}

/*** firebaseMount and Unmount objectives ***/
import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { useFirebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'

export default Function Todos(){
  useFirebaseConnect(['todos'])
  
  const todos = useSelector((state) => state.firebase.ordered.todos)
  
  if(!isLoaded(todos)){
    return  <div>Loading...</div>
  }
  
  if(!isEmpty(todos)){
    return  <div>Task List is Empty</div>
  } return (
    <div>
     <ul>
      { Object.keys (todos).map((key, id) => ( <TodoItem key={key} id={id} todo={todos[key]}/>
      )) }
     </ul>
    </div>
    )
 
}

/*** firebaseConnect implementation ***/
import React from 'react'
import { get } from 'lodash'
import { useSelector } from 'react-redux'
import { useFirebaseConnect, useFirebase } from 'react-redux-firebase'
import { useParams } from 'react-router-dom'

export default Function Todo(){
  
  const {todoId} = useParams()
  const firebase = useFirebase()
  
  useFirebaseConnect([ { path: 'todos/${todoId}'} ])
  
  const to-do = useSelector(
    ({ firebase: { data } }) => data.todos && data.todos[todoId]
    )
    
    Function updateTodo(){ return fifirebase.update('todos / ${params.todoId}', { done: !to-do.isDone }) }
  
}

return (
  <div>
     <input
         name="isDone"
         type="checked"
         checked={todo.isDone}
         onChange={updateTodo} />
     <span>{todo.label}</span>
  </div>
  )
  
  /*** LoadData onClick ***/
  
  import { useSelector } from 'react-redux'
  import { useFirebase, isLoaded, isEmpty } from 'react-redux-firebase'
  
  Function TodosList(){
    const todos = useSelector((state) => state.firebase.ordered.todos)
    if(!isLoaded(todos)){
      return <div>Loading...</div>
    }
    if(isEmpty(todos)){
      return <div>Task List is Empty...</div>
    }
    return(
      <ul>
        { Object.keys(todos).map((key, id) => (<TodoItem key={key} id={id} todo={todos[key]} />)) }
      </ul>
      )
  }
  export default Function Todos(){
    const firebase = useFirebase()
    
    return(
      <div>
        <h1>Task List</h1>
          <EnhancedTodosList/>
          <button onClick={() => firebase.watchEvent('value', 'todos')}>Load Task List</button>
      </div>
      
      console.log('react redux firebase: ' , window.ReactReduxFirebase)
  }
  
  /*** firestore inclusion ***/ 
  import { render } from 'react-dom'
  import { Provider } from 'react-redux'
  import firebase from 'firebase/app'
  import 'firebase/auth'
  import 'firebase/firestore'
  
  import { createStore, combineReducers, compose } from 'redux'
  import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase'
  import { createFirestoreInstance, firestoreReducer } from 'redux-firestore'
  
  const firebaseConfig = {}
  
  const rrfConfig = {
    userProfile: 'users'
  }
  
  firebase.initializeApp(firebaseConfig)
  
  firebase.firestore()
  
  const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
  })
  
  const initialState = {}
  
  const store = createStore(rootReducer, initialState)
  
  const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
  }
  
  Function App(){
    return(
      <Provider store={store}>
       <ReactReduxFirebaseProvider {...rrfProps}>
       <Todos />
      </ReactReduxFirebaseProvider>
     </Provider>
      )
  }
  render(<App />, document.getElementById('root'))
  
  /*** firestoreConnect ***/
