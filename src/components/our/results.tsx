"use client";

import { AnswerMeta } from "@/app/redux/slices/questionnaire";
import { RootState } from "@/app/redux/store";
import { Fragment } from "react";
import { useSelector } from "react-redux";

const renderValue = (value: unknown) => {
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value.join(", ");

  return String(value);
};

const Results = () => {
  const answers = useSelector((state: RootState) => state.answers);

  return (
    <section className="grid grid-cols-2 min-w-[320px] justify-items-start">
      <p className="py-2 text-lg font-semibold tracking-wide">Question</p>
      <p className="py-2 text-lg font-semibold tracking-wide">Answer</p>
      {Object.keys(answers).map((key) => {
        if (answers[key]) {
          return (
            <Fragment key={key}>
              <p className="py-1 px-2 text-left bg-white/10 w-full">
                {(answers[key] as AnswerMeta).question}
              </p>
              <p className="py-1 px-2 text-left bg-white/10 w-full">
                {renderValue((answers[key] as AnswerMeta).value)}
              </p>
            </Fragment>
          );
        }
        return null;
      })}
    </section>
  );
};

export default Results;
