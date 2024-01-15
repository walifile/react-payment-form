import * as yup from "yup";


export const paySchema = yup.object({
    cardNumber: yup
      .string()
      // .matches(/^[0-9]{16}$/, "Invalid card number")
      .required("Card number is required"),
    // expiryDate: yup.string().required("Expiry date is required"),
    expiryDate: yup
      .string()
      .required("Expiry date is required")
      .test("valid-month", "Invalid month", function (value) {
        if (!value) {
          return false;
        }
  
        const [month] = value.split("/").map((item) => parseInt(item, 10));
  
        return month >= 1 && month <= 12;
      })
      .test(
        "is-future-date",
        "Expiry date must be in the future",
        function (value) {
          if (!value) {
            return false;
          }
  
          const currentDate = new Date();
          const [month, year] = value
            .split("/")
            .map((item) => parseInt(item, 10));
  
          // Adding 1 to the month because JavaScript months are zero-indexed
          const expiryDate = new Date(year + 2000, month, 1);
  
          return expiryDate > currentDate;
        }
      ),
    name: yup.string().required("Name is required"),
    cvv: yup
      .string()
      .matches(/^[0-9]{3,4}$/, "Invalid CVV")
      .required("CVV is required"),
  });