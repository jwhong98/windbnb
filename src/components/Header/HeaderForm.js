import React from "react";
import { Form } from "./HeaderFormElements";

const HeaderForm = () => {
  return (
    <Form>
      <input type="text" placeholder="Helsinki, Finland" />
      <input type="text" placeholder="Add guests" />
      <button>
        <ion-icon name="search"></ion-icon>
      </button>
    </Form>
  );
};

export default HeaderForm;
