import { Questionnaire } from "@/app/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  answers: Record<
    string,
    { value: unknown; id: string; question: string } | undefined
  >;
  schema: Questionnaire | null;
}

export interface AnswerMeta {
  id: string;
  value: unknown;
  question: string;
}

const initialState = {
  answers: {},
  schema: null,
} satisfies State as State;

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState: initialState,
  reducers: {
    addAnswer: (state, action: PayloadAction<AnswerMeta>) => {
      state.answers[action.payload.id] = {
        value: action.payload.value,
        id: action.payload.id,
        question: action.payload.question,
      };
    },

    clearAllAnswers: (state) => {
      state.answers = {};
    },

    setSchema: (state, action: PayloadAction<Questionnaire>) => {
      state.schema = action.payload;
    },

    clearAnswer: (state, action: PayloadAction<Pick<AnswerMeta, "id">>) => {
      state.answers[action.payload.id] = undefined;
    },
  },
});

export const { addAnswer, clearAnswer, setSchema, clearAllAnswers } =
  questionnaireSlice.actions;
export default questionnaireSlice.reducer;
