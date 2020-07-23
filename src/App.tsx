import React, { useState } from 'react';
import './App.css';
import { useTodos, useTodoActions } from './hooks/state/use-todos';
import { TodoList } from './components/todo-list';
import { ThemeProvider, ThemeMap } from './theme';
import { ThemeSwitcher } from './components/theme-switcher';

export type Theme = {
  primary: string;
}

const themes: ThemeMap<Theme> = {
  'red': {
    primary: 'rgba(255, 0, 0, 1)'
  }, 
  'blue': {
    primary: 'rgba(0, 0, 255, 1)'
  }
}

function App() {

  const todos = useTodos();

  const { toggleToDoItem } = useTodoActions();

  return (
    <ThemeProvider themes={themes} initialTheme={'red'}>
      <div>
        <h2 >Todos:</h2>
        <TodoList todos={todos} onItemClick={toggleToDoItem}> </TodoList>
        <h2 >Themes: </h2>
        <ThemeSwitcher></ThemeSwitcher>
      </div>
    </ThemeProvider>
  );
}

export default App;
