import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Grid,
  TextField,
  Button,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(
      /^(\d{3}-\d{4}-\d{4})$/,
      "Please enter a valid phone number (e.g. 080-1237-2124)"
    )
    .required("Phone number is required"),
  selectedOption: yup
    .string()
    .oneOf(["isCorporate", "isIndividual"], "Please select an option")
    .required("Please select an option"),
});

export const Form = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "寺田心",
      email: "BookOffnanoniHonNeJan@gmail.com",
      phone: "080-1237-2124",
      selectedOption: "",
    },
  });

  // const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    // setSubmittedData(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="email"
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                error={!!errors.email}
                helperText={
                  errors.email && "Please enter a valid email address"
                }
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="phone"
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
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="selectedOption"
            defaultValue=""
            render={({ field }) => (
              <RadioGroup {...field}>
                <FormControlLabel
                  value="isCorporate"
                  control={<Radio />}
                  label="法人"
                />
                <FormControlLabel
                  value="isIndividual"
                  control={<Radio />}
                  label="個人"
                />
              </RadioGroup>
            )}
          />
          {errors.selectedOption && (
            <Typography variant="body2" color="error">
              {errors.selectedOption.message}
            </Typography>
          )}
        </Grid>

        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit(onSubmit)}
          >
            検索
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
