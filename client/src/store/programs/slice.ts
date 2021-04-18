import { createSlice } from '@reduxjs/toolkit';

interface StudyProgram {
  title: string;
  description: string;
  studies: any[];
};

const initialState: {
  programs: StudyProgram[];
} = {
  programs: [
    {
      title: "Teste",
      description: "Um teste simples",
      studies: [],
    },
    {
      title: "Teste",
      description: "Um teste simples",
      studies: [1, 2, 3],
    },
  ],
};

const programsSlice = createSlice({
  name: "programsSlice",
  initialState,
  reducers: {
    setPrograms: (programs) => {
      
    }
  },
});

export default programsSlice.reducer;