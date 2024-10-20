export function getObjectFromFormData(formData: FormData): object {
  const returnable: { [key: string]: unknown } = {};
  formData.forEach((value, key) => (returnable[key] = value));
  return returnable;
}
