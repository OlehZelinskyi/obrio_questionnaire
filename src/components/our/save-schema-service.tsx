"use client";

import { clearAllAnswers, setSchema } from "@/app/redux/slices/questionnaire";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const SaveSchemaService = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/questionnaire`
      );
      const data = await response.json();

      dispatch(clearAllAnswers());
      dispatch(setSchema(data));
    })();
  }, [dispatch]);

  return null;
};

export default SaveSchemaService;
