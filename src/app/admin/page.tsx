// import { categories } from "@/data";
import prisma from "@/lib/prisma";
import ProductCardWrapper from "./components/product-card-wrapper";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/fontawesome-free/css/all.css";
import CategoryHeader from "./components/category-header";
import AddCategoryButton from "./components/add-category-button";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import AdminHeader from "./components/admin-header";
import SectionContacts from "./components/section-contacts";
import AddProductButton from "./components/add-product-button";

const AdminPage = async () => {
  const session = await auth();
  const user = session?.user;

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/admin");
  }

  const categories = await prisma.category.findMany({
    include: {
      products: { include: { payment: true }, orderBy: { createdAt: "asc" } },
    },
    orderBy: { updatedAt: "desc" },
  });
  const contacts = await prisma.contact.findMany();

  return (
    <>
      <AdminHeader user={user} />
      <SectionContacts contacts={contacts} />
      <hr />
      <section className="flex flex-col gap-4 py-8 px-4">
        <h2 className="text-4xl text-primary">Portifólio</h2>
        <AddCategoryButton />
        <div className="flex flex-col gap-4">
          {categories.map(
            ({ id: categoryId, name: categoryName, products }) => (
              <div key={categoryId} className="flex flex-col gap-4">
                <CategoryHeader id={categoryId} name={categoryName} />

                <div className="grid grid-cols-auto-fill-250 gap-4">
                  {products.map(({ id, name, image, size, payment }) => (
                    <ProductCardWrapper
                      id={id}
                      key={id}
                      categoryId={categoryId}
                      name={name}
                      image={image}
                      size={size ?? undefined}
                      payment={payment ?? undefined}
                      categories={categories.map(({ id, name }) => ({
                        id,
                        name,
                      }))}
                    />
                  ))}
                  <div className="flex justify-center items-center border-dashed border-2 rounded-lg h-[500px] w-[350px]">
                    <AddProductButton categoryId={categoryId} />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
};

export default AdminPage;
