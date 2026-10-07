import { useState } from "react";

export const useForm = (valorInicial) => {
  const [form, setForm] = useState(valorInicial);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleReset = () => {
    setForm(valorInicial);
  };

  return { form, handleInputChange, handleReset };
};
