import Todo from "./models/Todo.js";
import TodoList from './components/TodoList.js';


type state = {
  isLoading: boolean;
  todos: Todo[];
}

/**
 * 할일 관리 메인
 * @class
 */
class App {
  private $app: HTMLDivElement;
  private state: state;
  private todoList: TodoList;

  /**
   * @constructor
   * @param {HTMLDivElement} $app 할일 목록 렌더링할 root DOM ( index.html 및 index.ts 참고 )
   */
  constructor($app: HTMLDivElement) {
    this.$app = $app;
    this.state = {
      isLoading: false,
      todos: []
    }

    this.todoList = new TodoList(this.$app, []);
  }

  /**
   * 상태 변경이 되면 할일 목록을 새로 렌더링 하고, 메인 페이지의 상태를 변경합니다
   * @param {state} newState 설정하는 상태값
   */
  setState = (newState: state) => {
    this.state = newState;
    this.todoList.setState(this.state.todos);
  }

  /**
   * 메인 페이지의 초기 화면을 설정합니다
   */
  init = () => {
    this.setState({
      isLoading: false,
      todos: [
        {
          id: "test1",
          content: "testContent",
          isFinish: false,
          category: "testCategory",
          tags: [],
        }
      ],
    })
  }

}

export default App;