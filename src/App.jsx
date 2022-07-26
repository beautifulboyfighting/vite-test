import RenderRouter from './router'
import {BrowserRouter} from 'react-router-dom'

import 'antd/dist/antd.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RenderRouter />
      </BrowserRouter>
    </div>
  )
}

export default App
