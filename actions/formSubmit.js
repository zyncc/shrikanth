"use server";

export async function handleSubmit(formData) {
  const data = Object.fromEntries(formData);
  console.log(formData);
}
