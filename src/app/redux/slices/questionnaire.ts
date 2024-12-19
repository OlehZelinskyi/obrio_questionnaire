import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  answers: Record<string, unknown>;
}

export interface AnswerMeta {
  key: string;
  value: unknown;
  question: string;
}

const initialState = {
  answers: {},
} satisfies State as State;

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState: initialState,
  reducers: {
    addAnswer: (state, action: PayloadAction<AnswerMeta>) => {
      state.answers[action.payload.key] = {
        question: action.payload.question,
        value: action.payload.value,
      };
    },

    clearAnswer: (state, action: PayloadAction<Pick<AnswerMeta, "key">>) => {
      state.answers[action.payload.key] = undefined;
    },
  },
});

export const { addAnswer, clearAnswer } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
