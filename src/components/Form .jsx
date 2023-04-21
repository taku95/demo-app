import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import React, { useState } from "react";
import { Grid, TextField, Button, Typography } from "@material-ui/core";

export const Form = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "寺田心",
      email: "BookOffnanoniHonNeJan@gmail.com",
      phone: "080-1237-2124",
    },
  });

  const [submittedData, setSubmittedData] = useState(null);

  const phoneRegex = /^(\d{3}-\d{4}-\d{4})$/;

  const onSubmit = (data) => {
    console.log(data);
    setSubmittedData(data);
    reset();
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Controller
          control={control}
          name="name"
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Name"
              error={!!errors.name}
              helperText={errors.name && "Name is required"}
              fullWidth
            />
          )}
        />
        <ErrorMessage errors={errors} name="name" />
      </Grid>
      <Grid item xs={12}>
        <Controller
          control={control}
          name="email"
          rules={{
            required: true,
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              error={!!errors.email}
              helperText={errors.email && "Please enter a valid email address"}
              fullWidth
            />
          )}
        />
        <ErrorMessage errors={errors} name="email" />
      </Grid>
      <Grid item xs={12}>
        <Controller
          control={control}
          name="phone"
          rules={{
            required: true,
            pattern: { value: phoneRegex, message: "Invalid phone number" },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Phone Number"
              error={!!errors.phone}
              helperText={
                errors.phone &&
                "Please enter a valid phone number (e.g. 080-1237-2124)"
              }
              fullWidth
            />
          )}
        />
        <ErrorMessage errors={errors} name="phone" />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </Button>
      </Grid>
      {submittedData && (
        <Grid item xs={12}>
          <Typography variant="h5">Thanks {submittedData.name}</Typography>
          <Typography variant="body1">
            The email you submitted is: {submittedData.email}
          </Typography>
          <Typography variant="body1">
            The phone number you submitted is: {submittedData.phone}
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};
