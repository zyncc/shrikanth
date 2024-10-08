import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="h-screen container w-screen flex items-start justify-start z-10 text-black gap-10">
          <div className="flex flex-col mt-[200px]">
            <h1 className="font-bold text-5xl">Your Voice, Our Action</h1>
            <Link href="/register" className="w-fit">
              <Button
                size="lg"
                className="w-full mt-5 hover:bg-purple-900 rounded-3xl bg-purple-600"
              >
                Post a Complaint
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div></div>
      </section>
    </>
  );
}
