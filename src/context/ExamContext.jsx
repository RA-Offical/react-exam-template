import React, { useContext, createContext, useState } from "react";

// creating context
const ExamContext = createContext();

// creating context provider
export const ExamProvider = ({ children }) => {
  // defining state
  const [products, setProducts] = useState([]);

  return (
    <ExamContext.Provider value={{ products, setProducts }}>
      {children}
    </ExamContext.Provider>
  );
};

// custom hook to use the context
export const useExamContext = () => useContext(ExamContext);
