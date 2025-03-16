import { render, screen } from '@testing-library/react';
import App from './App';

describe('todo컴포넌트를 테스트 시작합니다.', ()=>{
  test('페이지를 렌더링 합니다.', () => {
    render(<App />);
    const linkElement = screen.getByText(/To do List/i);
    expect(linkElement).toBeInTheDocument();
});



 test('todos에 새로운 todo가 잘 등록되는지 확인한다.',() => {
    console.log('테스트연결')
 })
})