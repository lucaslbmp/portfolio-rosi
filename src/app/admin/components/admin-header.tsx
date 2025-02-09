import { signOut } from "@/auth";
import Button from "@/components/button";
import HeaderBody from "@/components/header-body";
import { User } from "next-auth";
import Image from "next/image";

const AdminHeader = ({ user }: { user?: User }) => {
  return (
    <HeaderBody className="flex justify-between mb-6 sticky top-0 z-10 bg-background">
      <h1 className="text-4xl font-montserrat italic  text-primary">
        Amigurumis da Rosi
        <p className="text-sm text-foregroundTertiary not-italic font-bold">
          Modo de Edição
        </p>
      </h1>
      <div className="flex gap-4 w-fit">
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
    </HeaderBody>
  );
};

export default AdminHeader;
