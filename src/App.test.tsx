import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from "react-router-dom";

import TodoListPage from "./pages/TodoListPages/page";


describe('todo컴포넌트를 테스트 시작합니다.', ()=>{
  beforeEach(() => {
    const routes = [
      {
        path: "/",
        element: <TodoListPage />,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
      initialIndex: 0,
    });

    render(
        <RouterProvider router={router} />
    );
    const linkElement = screen.getByText(/To do List/i);
    expect(linkElement).toBeInTheDocument();
  });


 test('todos에 새로운 todo가 잘 등록되는지 확인한다.',() => {
    console.log('테스트연결')
 })
})