import { useForm, Controller } from "react-hook-form";

import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Grid,
  TextField,
  Button,
  FormControlLabel,
  FormControl,
  FormHelperText,
  Checkbox,
  Box,
  Typography,
} from "@material-ui/core";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("名前は必須です"),
  email: yup
    .string()
    .email("正しいメールアドレスを入力してください")
    .required("メールアドレスは必須です"),
  phone: yup
    .string()
    .matches(
      /^(\d{3}-\d{4}-\d{4})$/,
      "正しい電話番号を入力してください (例：080-1237-2124)"
    )
    .required("電話番号は必須です"),
  selectedOptions: yup
    .array()
    .min(1, "法人または個人どちらかを選択してください。"),
});

export const Form = () => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "寺田心",
      email: "BookOffnanoniHonNeJan@gmail.com",
      phone: "080-1237-2124",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Box>
      <Typography variant="h6">ReactHookForm超入門</Typography>
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
                  helperText={errors.name?.message}
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
                  helperText={errors.email?.message}
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
                  helperText={errors.phone?.message}
                  fullWidth
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl error={!!errors.selectedOptions}>
              <FormControlLabel
                control={
                  <Checkbox
                    {...register("selectedOptions")}
                    value="isCorporate"
                    defaultChecked
                  />
                }
                label="法人"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    {...register("selectedOptions")}
                    value="isIndividual"
                    defaultChecked
                  />
                }
                label="個人"
              />
              {errors.selectedOptions && (
                <FormHelperText>
                  {errors.selectedOptions.message}
                </FormHelperText>
              )}
            </FormControl>
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
    </Box>
  );
};
