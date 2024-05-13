import React,{lazy,Suspense} from 'react'
// import Home from './Home'
// import Contact from './Contact'
const Home = lazy(()=>import('./Home'))
const Contact = lazy(()=>import('./Contact'))

const LazyloadingComponent = () => {
  return (
    <div>
      <h3>Lazy loading component</h3>
      <Suspense fallback={(<div><h3>Please wait .....</h3></div>)}>
        <Home />
      </Suspense>
      <Suspense fallback={(<div>Loading....</div>)}>
      <Contact />
      </Suspense>
    </div>
  )
}

export default LazyloadingComponent
