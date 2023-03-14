import { FC } from 'react'
import TodoContainer from './components/TodoApp/TodoContainer'
import ApiContainer from './components/ApiCalling/ApiContainer'

const App: FC = (): JSX.Element => {
  return (
    <div>
      {/* <TodoContainer /> */}
      <ApiContainer />
    </div>
  )
}

export default App