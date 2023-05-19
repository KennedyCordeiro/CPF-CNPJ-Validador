import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import validateTaxNumber from "./ValidateTaxNumber";
import "../Css/CpfCnpjField.css";

const CpfCnpjField = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(false);
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

  const validateInput = (value) => {
    let isValid = value.length === 11 || value.length === 14;
    if (isValid) {
      let checkStatus = validateTaxNumber(value);
      return checkStatus === true;
    }
    return false;
  };

  useEffect(() => {
    if (value.length === 11 || value.length === 14) {
      setError(validateInput(value) ? false : true);
      setMessage(validateInput(value) ? true : false);
    }
  });

  const handleChange = (event) => {
    const formattedValue = formatCpfCnpj(event.target.value);
    setValue(formattedValue);
  };

  const handleClick = () => {
    setError(!error);
  };

  return (
    <div
      className="boxContainer"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div style={{ marginTop: "10px", marginBottom: "30px" }}>
        <i> CPF VALIDATOR</i>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ alignSelf: "flex-start", marginBottom: message ? '2px' : '0'}}>
            <TextField
              label="Insira um CPF ou CNPJ"
              variant="outlined"
              value={value}
              onChange={handleChange}
              id="InputCheck"
              style={{ marginRight: "5px" }}
              inputProps={{ maxLength: 18 }}
            />
          </div>
          {message && (
            <div
              style={{
                marginTop: "8px",
                fontSize: "10px",
                textAlign: "center",
              }}
            >
              {" "}
              Tudo certo !
            </div>
          )}
        </div>
        <button
          onClick={handleClick}
          disabled={error}
          style={{ backgroundColor: error ? "red" : "royalblue" }}
        >
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
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
    </div>
  );
};

export default CpfCnpjField;
