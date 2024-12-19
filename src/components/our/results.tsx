"use client";

import { RootState } from "@/app/redux/store";
import { useSelector } from "react-redux";

const renderValue = (value: unknown) => {
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value.join(", ");

  return String(value);
};

const Results = () => {
  const answers = useSelector((state: RootState) => state.answers);

  return (
    <section>
      <ul>
        {Object.keys(answers).map((key) => (
          <li key={key}>{renderValue(answers[key])}</li>
        ))}
      </ul>
    </section>
  );
};

export default Results;
