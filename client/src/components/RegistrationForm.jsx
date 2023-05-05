import "./UserForm.css";
import { useState, useRef } from "react";
import { getCurrentAge } from "../helpers/getCurrentAge";

// * FORMIK / YUP
import { Formik, Form } from "formik";
import { registrationsSchema } from "../schemas/registrationsSchema";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import CustomDate from "./CustomDate";

// * REACT-QUERY
import { useMutation } from "react-query";
import { createRegistration } from "../api/registrations";

// * REACT-ROUTER-DOM
import { useNavigate } from "react-router-dom";

// * TOAST
import { toast } from "react-toastify";

// * CAPTCHA
import ReCaptcha from "./ReCaptcha";

function RegistrationForm() {
  const [captchaToken, setcaptchaToken] = useState("");
  const navigate = useNavigate();

  const notify = () => {
    toast.success("🎉 Registrado correctamente!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });
  };
  const errorNotify = (string) => {
    toast.error(`${string}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });
  };

  const addRegistrationMutation = useMutation({
    mutationFn: createRegistration,
    onSuccess: (data) => {
      notify();

      window.localStorage.removeItem("resultData");
      window.localStorage.setItem("resultData", JSON.stringify(data.data.body));

      // window.alert('Registrado correctamente! 😀')
      navigate("/result");
    },
    onError: (error) => {
      window.alert(error);
    },
  });

  const onSubmit = async (values, actions) => {
    if (getCurrentAge(values.fecha_nacimiento) < 18) {
      // window.alert('Menores de 18 años no pueden participar 😥')
      errorNotify("Menores de 18 no pueden participar 😢");
    } else {
      if (captchaToken) {
        addRegistrationMutation.mutate({
          ...values,
          fecha_inscripcion: new Date().toISOString(),
        });
      } else {
        errorNotify("Captcha no resulto 😐");
        setcaptchaToken(null);
      }
    }

    actions.resetForm();
  };

  const onChange = (token) => {
    setcaptchaToken(token);
  };

  return (
    <Formik
      initialValues={{
        carnet: "",
        nombre: "",
        direccion: "",
        genero: "",
        telefono: "",
        fecha_nacimiento: "",
        carrera: "",
        genero_poesia: "",
      }}
      validationSchema={registrationsSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="w-[550px] bg-slate-800 p-4 rounded-md">
          <h1 className="font-bold mb-3">
            Registro <span className="text-sm">poesia</span>
          </h1>

          <div className="flex flex-row justify-center gap-2">
            <CustomInput
              label="Carnet"
              name="carnet"
              type="text"
              placeholder="Introduce tu carnet"
            />

            <CustomInput
              label="Teléfono"
              name="telefono"
              type="text"
              placeholder="Introduce tu telefono"
            />
          </div>

          <CustomInput
            label="Nombre"
            name="nombre"
            type="text"
            placeholder="Introduce tu nombre"
          />

          <CustomInput
            label="Direccion"
            name="direccion"
            type="text"
            placeholder="Introduce tu dirección"
          />

          <div className="flex flex-row justify-center gap-2">
            <CustomSelect
              label="Género"
              name="genero"
              type="text"
              placeholder="Selecciona tu género"
            >
              <option value="">Selecciona tu género</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </CustomSelect>

            <CustomDate
              label="Fecha de nacimiento"
              name="fecha_nacimiento"
              type="date"
              placeholder="Selecciona tu fecha de nacimiento"
            />

            <CustomSelect
              label="Género de poesía"
              name="genero_poesia"
              type="text"
              placeholder="Selecciona el género de poesía"
            >
              <option value="">Selecciona un género</option>
              <option value="Lírica">Lírica</option>
              <option value="Épica">Épica</option>
              <option value="Dramática">Dramática</option>
            </CustomSelect>
          </div>

          <CustomInput
            label="Carrera"
            name="carrera"
            type="text"
            placeholder="Introduce tu carrera"
          />

          <div className="flex flex-row gap-2 justify-around items-center">
            <ReCaptcha
              sitekey="6LcfKeUlAAAAADjauxxmIz9QQSfRXIEkjQDPJje9"
              onChange={onChange}
            />

            <button
              disabled={isSubmitting}
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-4"
            >
              Enviar
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default RegistrationForm;
