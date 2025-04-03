// import { categories } from "@/data";
import prisma from "@/lib/prisma";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import AdminHeader from "./components/admin-header";
import SectionContacts from "./components/sections/section-contacts";
import SectionPortfolio from "./components/sections/section-portfolio";
import { cache } from "react";

export async function generateMetadata() {
  await getCategories();
  await getContacts();
  return {
    title: "Amigurumis da Rosi - Página de Admin",
    description: "Página de administrador do portfólio de amigurumis",
  };
}

const getContacts = cache(async () => {
  return await prisma.contact.findMany();
});

const getCategories = cache(async () => {
  return await prisma.category.findMany({
    include: {
      products: { include: { payment: true }, orderBy: { createdAt: "asc" } },
    },
    orderBy: { updatedAt: "desc" },
  });
});

const AdminPage = async () => {
  const session = await auth();
  const user = session?.user;

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/admin");
  }

  const categories = await getCategories();
  const contacts = await getContacts();

  return (
    <>
      <AdminHeader user={user} />
      <SectionContacts contacts={contacts} />
      <hr />
      <SectionPortfolio categories={categories} />
    </>
  );
};

export default AdminPage;

export const revalidate = 0;
