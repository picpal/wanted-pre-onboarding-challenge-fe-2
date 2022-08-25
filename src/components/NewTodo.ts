import Todo from "../models/Todo";

/**
 * 할일 등록
 * @class
 */
class NewTodo {
  $app: HTMLDivElement;
  todo: Todo;
  state: Todo;

  /**
   * @constructor
   * @param {HTMLDivElement} $app 할일 목록을 렌더링할 root DOM 
   * @param {Todo} todo 신규 등록할 할일 데이터
   */
  constructor($app: HTMLDivElement, todo: Todo) {
    this.$app = $app;
    this.todo = todo;
    this.state = {
      id: "",
      content: "",
      isFinish: false,
      category: "",
      tags: []
    }

    this.render();
  }

  /**
   * 신규 할일 등록 객체의 상태를 변경합니다
   * @param {Todo} newState 추가된 객체 데이터
   */
  setState = (newState: Todo) => {

  }

  /**
   * 신규 입력한 할일 데이터를 추가합니다.
   * @param {Todo} todo 할일 추가 객체데이터
   */
  addTodo = (todo: Todo) => {

  }

  /**
   * 신규 입력 버튼 클릭 이벤트를 처리합니다.
   * @param {Event} event 클릭 이벤트 객체
   */
  addClickEvent = (event: Event) => {

  }

  /**
   * 신규 할일 from을 렌더링 합니다.
   */
  render = () => {

  }

}

export default NewTodo;