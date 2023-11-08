import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "react-toastify";
import "./style.css";

const schema = z.object({
  name: z.string().min(1, {
    message: "No puede estar vacio",
  }),
  email: z.string().email({ message: "Email no válido" }),
  phone: z
    .string()
    .min(9, { message: "Tiene que tener 9 dígitos" })
    .max(9, { message: "Tiene que tener 9 dígitos" }),
});

export const CrearUsuario = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = ({ name, email, phone }) => {
    setIsLoading(true);

    axios
      .post("https://654acfad5b38a59f28ee3f86.mockapi.io/api/users", {
        nombre: name,
        email: email,
        celular: Number(phone),
      })
      .then(() => {
        toast.success("Salio todo piola :)");
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        toast.error("Algo a salido mal :(");
      });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputs-container">
          <label>Name</label>
          <input type="text" {...register("name")} />
        </div>
        {errors.name && <p>{errors.name.message}</p>}

        <div className="inputs-container">
          <label>Email</label>
          <input type="text" {...register("email")} />
        </div>
        {errors.email && <p>{errors.email.message}</p>}

        <div className="inputs-container">
          <label>Phone</label>
          <input type="number" {...register("phone")} />
        </div>
        {errors.phone && <p>{errors.phone.message}</p>}

        <button disabled={isLoading}>Crear</button>
      </form>
    </div>
  );
};
