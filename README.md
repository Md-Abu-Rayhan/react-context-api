# React Context API

Welcome to the React Context API Example repository! This project demonstrates how to use React's Context API to manage global state, specifically for toggling between light and dark themes in a React application.

## Table of Contents

1. **Introduction**
2. **Features**
3. **Installation**
4. **Usage**
5. **Project Structure**
6. **Implementation Details**

## 1. Introduction

This project is a simple React application that showcases the usage of the Context API for state management. It allows users to toggle between a light and dark theme, with the state managed globally using Context.

## 2. Features

- **Theme Toggle:** Switch between light and dark themes.
- **Global State Management:** Utilizes React Context API to manage theme state across components.
- **Responsive Design:** Ensures theme changes are reflected throughout the application.

## 3. Installation

To run this project locally, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Md-Abu-Rayhan/react-context-api.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd react-context-api
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Start the Development Server**

   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 4. Usage

- **Toggle Theme:** Click on the theme toggle button to switch between light and dark modes. The entire application, including buttons and cards, will reflect the chosen theme.

## 5. Project Structure

- **`src/`**: Contains all source code.
  - **`components/`**: Reusable React components.
    - **`Card.js`**: Displays a sample card component that respects the global theme.
    - **`ThemeBtn.js`**: The theme toggle button component.
  - **`contexts/`**: Context providers and related files.
    - **`theme.js`**: Defines the ThemeContext and ThemeProvider.
  - **`App.js`**: The main application component that wraps components with ThemeProvider.
  - **`index.js`**: Entry point of the application.

## 6. Implementation Details

- **Context API:** A global state management solution for React applications. It allows passing data through the component tree without having to pass props down manually at every level.
  
- **Theme Context:** 
  - **`ThemeContext`**: Created using `React.createContext()`.
  - **`ThemeProvider`**: A component that provides the theme state and functions to update it to its child components.
  
- **Theme Toggling:**
  - The theme state is managed in the `App` component and passed down via `ThemeProvider`.
  - The `ThemeBtn` component toggles the theme by calling the provided context functions.


---


Thank you for checking out this React Context API example! If you have any questions, feel free to reach out.

Happy coding!