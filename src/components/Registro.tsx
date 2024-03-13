'use client'
import { postRegister } from "@/services/api";
import React, { useEffect, useState } from "react";

interface User {
  name: string;
  email: string;
  password: string;
}

export default function Registro() {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    password: "",
  });
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    setLoading(false);
  },[]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    

    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
    
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const apiUrl=process.env.NEXT_PUBLIC_API_AUTH ?? '';
    console.log(apiUrl);
    // Aquí puedes enviar los datos del formulario a tu servidor o realizar otras operaciones
    postRegister(apiUrl+"register",user);
  };

  return (
    <div className="w-11/12  md:w-1/5 mx-auto py-32">
      <h2 className="mt-10 text-center font-bold text-xl mb-3">Registro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white rounded-lg border-2 shadow-lg p-2 w-full mt-2"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}

