import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  answers: Record<string, unknown>;
}

interface AnswerMeta {
  key: string;
  value: unknown;
}

const initialState = {
  answers: {},
} satisfies State as State;

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState: initialState,
  reducers: {
    addAnswer: (state, action: PayloadAction<AnswerMeta>) => {
      state.answers[action.payload.key] = action.payload.value;
    },

    clearAnswer: (state, action) => {
      state.answers[action.payload.key] = undefined;
    },
  },
});

export const { addAnswer, clearAnswer } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
