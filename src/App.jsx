import TaskList from "./components/TaskList"
import Button from "./ui/Button/Button";
import Input from './ui/Input/Input';
import MainContainer from "./ui/MainContainer/MainContainer";
function App() {
  return (
    <>
    <MainContainer>
      <Input placeholder="Enter your task" />
      <Button>Добавить заметку</Button>
      <TaskList />
    </MainContainer>
    </>
  )
}

export default App
