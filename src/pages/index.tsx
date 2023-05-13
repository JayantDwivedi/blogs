import Image from "next/image";
import { Button, TextField } from "@mui/material";
import { Formik } from "formik";
import { phoneNumberValidations } from "@/constant/validations";
import { useEffect, useState } from "react";
import OtpModal from "@/component/OtpModal";
import { Router, useRouter } from "next/router";

export default function Home() {
  const [openModal, setOpenModal] = useState({ open: false, data: {} });
  const router = useRouter();
  useEffect(() => {
    router.replace(router.pathname, "/");
  }, []);
  return (
    <>
      <div className="container px-4 md:mx-auto md:px-0 flex items-center justify-between gap-8 md:gap-4 flex-col lg:flex-row  h-[calc(100vh-5rem)]">
        <div className="w-full md:w-1/2">
          <p className="text-4xl md:text-5xl font-bold my-8">Creative Corner</p>
          <p className="my-8 text-xl">
            Welcome to our Blogging Community! Where the power of words meets
            creativity and imagination. Join us as we share insightful,
            informative, and thought-provoking articles on a wide range of
            topics that will engage, educate and inspire you.
          </p>
          <Formik
            initialValues={{ phoneNumber: "" }}
            validationSchema={phoneNumberValidations}
            onSubmit={(values) => {
              console.log("Submited phone number", values);
              setOpenModal({
                open: true,
                data: { showPhoneNumber: false, otp: true },
              });
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form
                onSubmit={handleSubmit}
                className="flex justify-between md:justify-start gap-4"
              >
                <div className="flex flex-col">
                  <TextField
                    name="phoneNumber"
                    variant="outlined"
                    onChange={handleChange}
                    value={values.phoneNumber}
                    onBlur={handleBlur}
                    className=" border-color-yellow"
                    type="text"
                    placeholder="Enter Phone Number"
                    error={Boolean(errors.phoneNumber) && touched.phoneNumber}
                  />
                  <span className="absolute mt-[60px] text-sm text-red-700">
                    {Boolean(errors.phoneNumber) &&
                      touched.phoneNumber &&
                      errors.phoneNumber}
                  </span>
                </div>

                <Button
                  type="submit"
                  variant="contained"
                  className="bg-yellow hover:bg-yellow rounded-3xl text-black capitalize h-max-[10px] w-[8rem] relative"
                >
                  get otp
                </Button>
              </form>
            )}
          </Formik>
        </div>
        <div className="relative h-full w-full  object-contain">
          <Image src="/heroImg.jpg" layout="fill" alt="heroImg" />
        </div>
      </div>
      <OtpModal
        openModal={openModal}
        closeModal={() =>
          setOpenModal({
            open: false,
            data: { showPhoneNumber: false, otp: false },
          })
        }
      />
    </>
  );
}
