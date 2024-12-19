"use client";

import { setSchema } from "@/app/redux/slices/questionnaire";
import { Questionnaire } from "@/app/types";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const SaveSchemaService = ({ data }: { data: Questionnaire }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setSchema(data));
    }
  }, [data, dispatch]);

  return null;
};

export default SaveSchemaService;
