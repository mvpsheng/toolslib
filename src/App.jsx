import './App.css'
import Nav from './components/Nav'
import Subject from './components/Subject'
export default function App() {
  return (
    <div>
      <div className='navs'><Nav></Nav></div>
      <div className='subjects'><Subject></Subject></div>
    </div>
  )
}
