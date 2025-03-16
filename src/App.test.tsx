import "@testing-library/jest-dom";
import { fireEvent, render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { ThemeProvider } from './contexts/ThemeContext';
import TodoListPage from "./pages/TodoListPages/page";

describe('todo컴포넌트를 테스트 시작합니다.', () => {
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
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    );
  });

  test('초기 렌더링이 정상적으로 되는지 확인한다.', () => {
    const linkElement = screen.getByText(/To do List/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('테마 토글이 정상적으로 작동하는지 확인한다.', () => {
    const themeToggle = screen.getByTestId('theme-toggle');
    
    // 초기 테마는 light
    expect(document.querySelector('.app')).toHaveClass('light');
    
    // 다크모드로 전환
    fireEvent.click(themeToggle);
    expect(document.querySelector('.app')).toHaveClass('dark');
    
    // 다시 라이트모드로 전환
    fireEvent.click(themeToggle);
    expect(document.querySelector('.app')).toHaveClass('light');
  });

  test('todos에 새로운 todo가 잘 등록되는지 확인한다.', async () => {
    const getTodoInput = screen.getByLabelText('Add Todo');
    await fireEvent.change(getTodoInput, { target: { value: "테스트 투두" } });
    
    const addButton = screen.getByTestId('add-todo-button');
    await fireEvent.click(addButton);
    
    const newTodoItem = await screen.findByText("테스트 투두", {}, { timeout: 2000 });
    expect(newTodoItem).toBeInTheDocument();
  });
});