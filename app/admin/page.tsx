import type { Metadata } from "next";
import Admin from "@/components/Admin";

export const metadata: Metadata = {
  title: "Admin — Edit Profile",
  description: "Edit your profile content.",
};

export default function AdminPage() {
  return <Admin />;
}
