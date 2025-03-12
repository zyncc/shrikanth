"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function handleSubmit(formData) {
  const data = Object.fromEntries(formData);
  console.log(data);

  const res = await prisma.registrations.create({
    data: {
      name: data.name,
      phone: data.phone,
      classroomNumber: data.classroomNumber,
      complaintType: data.complaintType,
      description: data.description,
    },
  });
  console.log(res);
  redirect(`/success/${res.id}`);
}
