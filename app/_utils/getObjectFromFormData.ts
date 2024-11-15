export function getObjectFromFormData(formData: FormData): object {
  const returnable: { [key: string]: unknown } = {};
  formData.forEach((value, key) => {
    if (value === "") {
      returnable[key] = null;
    } else {
      returnable[key] = value;
    }
  });
  return returnable;
}
