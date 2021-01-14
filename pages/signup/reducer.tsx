import React from "react";

type SignupState = {
  email: string;
  password: string;
  confirmPassword: string;
  companyName?: string;
  referrer?: string;
  termFlag: boolean;
  newsLetterFlag: boolean;
};

export const initialState: SignupState = {
  email: "",
  password: "",
  confirmPassword: "",
  companyName: "",
  referrer: "",
  termFlag: false,
  newsLetterFlag: false,
};

interface UpdateFieldAction {
  type: "UPDATE_FIELD";
  payload: [key: string, value: string | boolean];
}

type SignUpFormTypes = UpdateFieldAction;

export const reducer: React.Reducer<SignupState, SignUpFormTypes> = (
  state: SignupState,
  action: SignUpFormTypes
) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.payload[0]]: action.payload[1],
      };
    default:
      return state;
  }
};
