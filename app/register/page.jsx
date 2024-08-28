import React from "react";
import { handleSubmit } from "@/actions/formSubmit";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Register() {
  return (
    <div className="container">
      <form action={handleSubmit} className="flex flex-col gap-y-5">
        <Input placeholder="Name" required type="text" name="name" />
        <Input placeholder="Name" required type="text" name="name" />
        <Input placeholder="Name" required type="text" name="name" />
        <Input placeholder="Name" required type="text" name="name" />
        <Input placeholder="Name" required type="text" name="name" />
        <Input placeholder="Name" required type="text" name="name" />
        <Input placeholder="Name" required type="text" name="name" />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
