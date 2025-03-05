import { useState } from "react";
import axios from "axios";

interface Form {
  title: string;
  description: string;
}

export default function Home() {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [form, setForm] = useState<Form>({
    title: "",
    description: "",
  });
  async function handleOnSubmit() {
    if (form.title.trim() === "" || form.description.trim() === "") {
      alert("El nombre no puede estar vacío");
      return;
    }

    try {
      const response = await axios.post(`${apiUrl}api/Todo`, form, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("response", response.data);
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  }

  function handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  }

  return (
    <div className="grid grid-cols-12  gap-4 ">
      <div className="col-[2/5] ">
        <h2 className="text-xl font-bold leading-none text-gray-900 mb-8">
          Agregar tarea
        </h2>
        <form action="">
          <div className="flex flex-col ">
            <label className="text-lg font-bold" htmlFor="title">
              Nombre de la tarea
            </label>
            <input
              type="text"
              className="border border-gray-700 focus:border-gray-800 rounded-lg p-2 "
              id="title"
              name="title"
              onChange={handleChange}
              placeholder="Nombre de la tarea"
            />
          </div>

          <div className="flex flex-col ">
            <label className="text-lg font-bold" htmlFor="description">
              Nombre de la tarea
            </label>
            <textarea
              className="border border-gray-700 focus:border-gray-800 rounded-lg p-2 "
              id="description"
              name="description"
              onChange={handleChange}
              placeholder="Descripción de la tarea"
            />
          </div>
          <button
            type="button"
            className="p-2 mt-4 bg-blue-700 rounded-lg font-bold cursor-pointer text-white hover:bg-blue-600"
            onClick={() => handleOnSubmit()}
          >
            Agregar
          </button>
        </form>
      </div>

      <div className="col-[5/12]">
        <h2 className="text-xl font-bold leading-none text-gray-900 mb-8">
          Agregar tarea
        </h2>
      </div>
    </div>
  );
}
