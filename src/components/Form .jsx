import { useForm, Controller } from "react-hook-form";

import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Box,
  Typography,
} from "@material-ui/core";
import { Stack } from "@mui/material";
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
});

export const Form = () => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    setError,
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
    if (!data.isCorporate && !data.isIndividual) {
      setError("selectValid", {
        type: "manual",
        message: "ステータスのいずれかにチェックをつけてください。",
      });
    } else {
      console.log(data);
    }
  };

  return (
    <Box width="50%" margin="auto">
      <Typography variant="h6">ReactHookForm超入門</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <Box>
            <TextField
              {...register("name")}
              label="名前"
              error={!!errors.name}
              helperText={errors.name?.message}
              required
              fullWidth
            />
          </Box>
          <Box>
            <TextField
              {...register("email")}
              label="Email"
              error={!!errors.email}
              helperText={errors.email?.message}
              required
              fullWidth
            />
          </Box>
          <Box>
            <TextField
              {...register("phone")}
              label="Phone Number"
              error={!!errors.phone}
              helperText={errors.phone?.message}
              required
              fullWidth
            />
          </Box>

          <Box>
            <Controller
              name="isCorporate"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      {...field}
                      color="primary"
                      checked={field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                    />
                  }
                  label="法人"
                />
              )}
            />
            <Controller
              name="isIndividual"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      {...field}
                      color="primary"
                      checked={field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                    />
                  }
                  label="個人"
                />
              )}
            />
            <Box>
              {errors.selectValid && (
                <Typography variant="caption" color="error">
                  {errors.selectValid.message}
                </Typography>
              )}
            </Box>
          </Box>
          <Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="small"
              fullWidth
            >
              検索
            </Button>
          </Box>
        </Stack>
      </form>
    </Box>
  );
};
