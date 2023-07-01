import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Add the Ward No."
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.wardNo}
                name="wardNo"
                error={!!touched.wardNo && !!errors.wardNo}
                helperText={touched.wardNo && errors.wardNo}
                sx={{ gridColumn: "span 4" }}
              />
              
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Starting Point longitude"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.startLong}
                name="startLong"
                error={!!touched.startLong && !!errors.startLong}
                helperText={touched.startLong && errors.startLong}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Stoping Point longitude"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.stoplong}
                name="stoplong"
                error={!!touched.stoplong && !!errors.stoplong}
                helperText={touched.stoplong && errors.stoplong}
                sx={{ gridColumn: "span 2" }}
              />
               <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Starting Point latitude"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.startlat}
                name="startlat"
                error={!!touched.startlat && !!errors.startlat}
                helperText={touched.startlat && errors.startlat}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Stoping Point latitude"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.stoplat}
                name="stoplat"
                error={!!touched.stoplat && !!errors.stoplat}
                helperText={touched.stoplat && errors.stoplat}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Distance to be covered"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.distance}
                name="distance"
                error={!!touched.distance && !!errors.distance}
                helperText={touched.distance && errors.distance}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};


const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

export default Form;
