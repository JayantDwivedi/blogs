import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Formik } from "formik";
import { phoneNumberValidations, validateOtp } from "@/constant/validations";
import { useRouter } from "next/router";
import { setLocalStorage } from "@/utils/localStorage";

export default function OtpModal({ openModal, closeModal }: any) {
  const router = useRouter();
  return (
    <div className="w-[30%]">
      <Dialog open={openModal.open} onClose={closeModal} maxWidth="xs">
        <DialogTitle>Enter OTP</DialogTitle>

        <DialogContent>
          <DialogContentText>
            To login to this website, please enter your otp send over your phone
            number here.
          </DialogContentText>
        </DialogContent>

        <Formik
          initialValues={{ otp: "" }}
          validationSchema={validateOtp}
          onSubmit={(values) => {
            setLocalStorage("otp", values);
            router.push("/blogs");
            closeModal();
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
            <form onSubmit={handleSubmit} className="">
              <div className="flex flex-col p-6">
                <TextField
                  name="otp"
                  label="OTP"
                  fullWidth
                  variant="outlined"
                  onChange={handleChange}
                  value={values.otp}
                  onBlur={handleBlur}
                  className=" border-color-yellow"
                  type="text"
                  placeholder="Enter Phone Number"
                  error={Boolean(errors.otp) && touched.otp}
                />
                <span className="absolute mt-[60px] text-sm text-red-700">
                  {Boolean(errors.otp) && touched.otp && errors.otp}
                </span>
              </div>

              <DialogActions className="px-6 py-4">
                <Button
                  onClick={closeModal}
                  variant="text"
                  className="text-black capitalize"
                >
                  Cancel
                </Button>
                <Button
                  color="warning"
                  variant="outlined"
                  className="capitalize"
                  type="submit"
                >
                  Validate
                </Button>
              </DialogActions>
            </form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
}
