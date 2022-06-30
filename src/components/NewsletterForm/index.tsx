import { Container, Form, Text, Input, Button, Label } from "./styles";
import { useState } from "react";
import chevroRright from "public/assets/chevron-right-solid-1.svg";
import Image from "next/image";
import { api } from "@services/api";
import { NewsletterModal } from "@components/NewsletterModal";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
};

export const NewsletterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  const [disableSubmitButton, setDisableSubmitButton] =
    useState<boolean>(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const payload = JSON.stringify(data);
    setDisableSubmitButton(true);
    await api
      .post("/newsletter", payload, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
      .then((res) => {
        setModalOpen(true);
        setDisableSubmitButton(false);
      });
  };

  return (
    <>
      <Container>
        <Label htmlFor="email" className={errors.email ? "error" : ""}>
          {errors.email
            ? "Insira um endereço de email válido"
            : "Inscreva-se na nossa newsletter"}
        </Label>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("email", {
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
            type="text"
            placeholder="Endereço de e-mail"
            name="email"
            id="email"
          />
          <Button
            type="submit"
            title="Inscrever-se"
            disabled={disableSubmitButton}
          >
            {disableSubmitButton ? (
              <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            ) : (
              <Image src={chevroRright} alt="chevronright icon" />
            )}
          </Button>
        </Form>
        <NewsletterModal closeModal={closeModal} modalOpen={modalOpen} />
      </Container>
    </>
  );
};
