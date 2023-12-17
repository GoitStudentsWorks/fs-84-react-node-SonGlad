import { useFormik } from "formik";
import { DivBodyParametrs } from "./BodyParametrs.styled";
import { BodyParametrsSchema } from "../../../utils/validationSchemas";
// import { updateBodyParamForm } from "../../../redux/Auth/auth-slice";
// import { useDispatch } from "react-redux";
// import { useAuth } from "hooks/useAuth";

export const BodyParametrs = ({ onNext, onBack }) => {
  // const dispatch = useDispatch();
  // const { userHeight, userWeight } = useAuth();
  const {
    values,
    errors,
    touched,
    isValid,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      // height: userHeight || "",
      // weight: userWeight || "",
    },

    validationSchema: BodyParametrsSchema,

    onSubmit: (values) => {
      // dispatch(updateBodyParamForm(values));
    },
  });

  const getInputClass = (fieldName) => {
    return !values[fieldName]
      ? ""
      : touched && errors[fieldName]
      ? "ErrorInput"
      : "SuccessInput";
  };

  const getInputAlert = (fieldName) => {
    return !values[fieldName] ? (
      ""
    ) : touched && errors[fieldName] ? (
      <>
        <p className="ErrorText">{errors[fieldName]}</p>
        <div className="ImgError" />
      </>
    ) : (
      <>
        <p className="SuccessText">{`${fieldName} is correct`}</p>
        <div className="ImgCorrect" />
      </>
    );
  };

  return (
    <DivBodyParametrs>
      <div className="ImageContainet">
        <span className="ImgSingUp" />
      </div>
      <div className="DivBodyContainer">
        <div className="TitleContainer">
          <h2 className="H2">Body parameters</h2>
          <p className="TitleText">
            Enter your parameters for correct performance tracking
          </p>
        </div>
        <form className="Form" onSubmit={handleSubmit}>
          <div className="DivInputContainet">
            <label className="LabelInput">
              Height
              <input
                className={getInputClass("height")}
                placeholder="Enter your height"
                id="Height"
                name="height"
                type="text"
                onChange={handleChange}
                value={values.height}
                onBlur={handleBlur}
              />
              {getInputAlert("height")}
            </label>

            <label className="LabelInput">
              Weight
              <input
                className={getInputClass("weight")}
                placeholder="Enter your weight"
                id="Weight"
                name="weight"
                type="text"
                onChange={handleChange}
                value={values.weight}
                onBlur={handleBlur}
              />
              {getInputAlert("weight")}
            </label>
          </div>
          <button
            className="ButtonNext"
            type="submit"
            name="BtnNext"
            disabled={!touched.height || !isValid}
            onClick={(e) => {
              handleSubmit(e);
              onNext();
            }}
          >
            Next
          </button>
          <button
            className="ButtonBack"
            type="submit"
            name="BtnBack"
            onClick={(e) => {
              handleSubmit(e);
              onBack();
            }}
          >
            Back
          </button>
        </form>
      </div>
    </DivBodyParametrs>
  );
};