// import { categories } from "@/data";
import prisma from "@/lib/prisma";
import ProductCardWrapper from "./components/product-card-wrapper";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Button from "@/components/button";
import OverlayPanel from "@/components/overlay-panel";
import ProductForm from "./components/product-form";
import CategoryHeader from "./components/category-header";
import AddCategoryButton from "./components/add-category-button";
import { auth, signOut } from "@/auth";
import Image from "next/image";
import { redirect } from "next/navigation";

const AdminPage = async () => {
  const session = await auth();
  const user = session?.user;

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/admin");
  }

  const categories = await prisma.category.findMany({
    include: { products: { include: { payment: true } } },
  });
  return (
    <>
      <div className="flex gap-4 bg-backgroundSecondary w-fit p-4 rounded-xl mr-3 mt-3 ml-auto">
        <div className="flex items-center">
          <Image
            src={user?.image ?? ""}
            alt={user?.name ?? ""}
            width={55}
            height={55}
            className="rounded-lg"
          />
        </div>

        <div className="flex flex-col text-xs">
          <span className="font-bold">{user?.name}</span>
          <span>{user?.email}</span>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button className="text-xs py-1 rounded-md">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              Sair
            </Button>
          </form>
        </div>
      </div>

      <section className="flex flex-col gap-4 p-4">
        <h2 className="text-4xl text-primary">Portifólio</h2>
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
                  <div className="flex justify-center items-center border-dashed border-2 rounded-lg h-[500px]">
                    <OverlayPanel
                      triggerButton={
                        <Button className="mx-auto">
                          <i className="fa-solid fa-plus text-4xl" />
                        </Button>
                      }
                    >
                      <div className="px-4 py-2 bg-backgroundSecondary rounded-xl flex flex-col gap-6">
                        <h3 className="text-2xl font-bold">
                          Adicionar produto
                        </h3>
                        <ProductForm category={categoryId} />
                      </div>
                    </OverlayPanel>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <AddCategoryButton />
      </section>
    </>
  );
};

export default AdminPage;
