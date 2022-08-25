import Todo from '../models/Todo.js';

/**
 * 할일 목록
 * @class
 */
class TodoList {
  private state: Todo[];
  private $target: HTMLUListElement;

  /**
   * @constructor
   * @param {HTMLDivElement} $app 할일 목록 렌더링할 root DOM 
   * @param {Todo[]} todos 할일 목록 데이터
   */
  constructor($app: HTMLDivElement, todos: Todo[]) {
    this.state = todos;
    this.$target = document.createElement('ul');
    $app.appendChild(this.$target);

    this.render();
  }

  /**
   * 할일 목록에 대한 상태를 변경합니다.
   * @param {Todo[]} newState 변경된 할일 목록 데이터
   */
  setState = (newState: Todo[]) => {
    this.state = newState;
    this.render();
  }

  /**
   * 기존의 할일 데이터를 수정된 데이터로 변경합니다.
   * @param {Todo} todo 변경 입력된 할일 데이터
   */
  setTodo = (todo: Todo) => {

    this.render();
  }

  /**
   * 선택한 할일 목록을 ID를 기준으로 제거합니다.
   * @param {string} id 제거할 할일 목록 ID
   */
  removeTodo = (id: string) => {

    this.render();
  }

  /**
   * 할일 목록 데이터에 따른 LIST DOM을 렌더링 합니다.
   */
  render = () => {
    const todoList = this.state.map(todo => {
      return `<li></li>`;
    }).join('');

    this.$target.innerHTML = todoList;
  }
}

export default TodoList;