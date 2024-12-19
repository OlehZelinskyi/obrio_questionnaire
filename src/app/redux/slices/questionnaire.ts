import { Questionnaire } from "@/app/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  answers: Record<string, unknown>;
  schema: Questionnaire | null;
}

export interface AnswerMeta {
  key: string;
  value: unknown;
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
      state.answers[action.payload.key] = {
        value: action.payload.value,
        id: action.payload.key,
      };
    },

    setSchema: (state, action: PayloadAction<Questionnaire>) => {
      state.schema = action.payload;
    },

    clearAnswer: (state, action: PayloadAction<Pick<AnswerMeta, "key">>) => {
      state.answers[action.payload.key] = undefined;
    },
  },
});

export const { addAnswer, clearAnswer, setSchema } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
