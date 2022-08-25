/**
 * 할일 공통 Type 설정
 * @interface Todo
 * @typedef {Object} Todo
 * @property {string} id 할일 고유 ID
 * @property {string} content 할일 내용
 * @property {boolean} isFinish 할일 완료 여부
 * @property {string} category 할일 분류
 * @property {string[]} tags 태그
 */
interface Todo {
  id: string;
  content: string;
  isFinish: boolean;
  category: string;
  tags: string[];
}

export default Todo;