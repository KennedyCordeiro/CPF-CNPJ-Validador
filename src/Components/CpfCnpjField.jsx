import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import validateTaxNumber from "./ValidateTaxNumber";
import "../Css/ValidatingButton.css";

const CpfCnpjField = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(true);

  const formatCpfCnpj = (value) => {
    if (value) {
      value = value.replace(/\D/g, "");
      if (value.length <= 11) {
        value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
      } else {
        value = value.replace(
          /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
          "$1.$2.$3/$4-$5"
        );
      }
    }
    return value;
  };

  const handleChange = (event) => {
    const formattedValue = formatCpfCnpj(event.target.value);
    setValue(formattedValue);
  };

  return (
    <div className="BoxContainer">
      <TextField
        label="Insira um CPF ou CNPJ"
        variant="outlined"
        value={value}
        onChange={handleChange}
        id="InputCheck"
      />

      <button onClick={handleClick}>
        <div class="svg-wrapper-1">
          <div class="svg-wrapper">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        <span>Validar</span>
      </button>
    </div>
  );
};

export default CpfCnpjField;
