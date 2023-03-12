import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Welcome to our About",
};
export default function About() {
  // throw new Error("Not today!")
  return (
    <>
      <h1>About page</h1>
      <Link href="/">Link to Home Page</Link>
    </>
  );
}
