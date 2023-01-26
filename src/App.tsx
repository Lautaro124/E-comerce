import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import { getItems } from './redux/modules/items/actions'
import Home from './components/home/Index'
import Layout from './components/layout/Index'
import CheckBag from './components/checkBag/Index'
import { Route, Routes } from 'react-router-dom'
export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    getItems(dispatch)
  }, [])

  return (
    <div className="body">
      <Routes>
        <Route path='/' element={
          <Layout>
            <Home />
          </Layout>
        } />
        <Route path='/bag'element={
          <Layout>
            <CheckBag />
          </Layout>
        }/>
      </Routes>
    </div>
  )
}