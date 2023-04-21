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
      name: "",
      email: "",
    },
  });

  const [submittedData, setSubmittedData] = useState(null);

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
              // eslint-disable-next-line no-useless-escape
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
        </Grid>
      )}
    </Grid>
  );
};
