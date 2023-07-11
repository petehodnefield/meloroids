export const checkPasswordCriteria = async (e: string) => {
  const passwordFormat =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (e.match(passwordFormat) && e.length >= 8) {
    setFormErrors({ ...formErrors, passwordCriteriaError: "" });
  } else if (e.length < 8) {
    setFormErrors({
      ...formErrors,
      passwordCriteriaError: "Password must be at least 8 characters!",
    });
  }
};
