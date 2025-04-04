"use client";

import { signoutAction } from "@/app/actions/signout";
import HeaderBody from "@/components/header-body";
import SubmitButton from "@/components/submit-button";
import { User } from "next-auth";
import Image from "next/image";

const AdminHeader = ({ user }: { user?: User }) => {
  return (
    <HeaderBody className="flex justify-between mb-6 sticky top-0 z-10 bg-background">
      <div className="text-4xl font-montserrat italic text-primary text-center">
        <div className="h-[90px] w-[240px] relative">
          <Image
            src="/logo.png"
            alt="logo"
            fill
            className="mx-auto bg-center object-cover "
          />
        </div>
        <p className="text-sm text-foregroundTertiary not-italic font-bold">
          Modo de Edição
        </p>
      </div>
      <div className="flex gap-4 w-fit">
        <div className="flex items-center w-[64px] relative">
          <Image
            src={user?.image ?? ""}
            alt={user?.name ?? ""}
            fill
            className="rounded-full object-cover"
          />
        </div>

        <div className="flex flex-col text-xs max-w-[100px] md:max-w-[300px]">
          <span
            className="text-ellipsis overflow-hidden whitespace-nowrap font-bold text-sm"
            title={user?.name ?? ""}
          >
            {user?.name}
          </span>
          <span
            className="text-ellipsis overflow-hidden whitespace-nowrap mb-1"
            title={user?.email ?? ""}
          >
            {user?.email}
          </span>
          <form
            onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              await signoutAction();
            }}
          >
            <SubmitButton
              className="text-xs py-1 rounded-md px-1 md:px-2"
              title="Sair"
            >
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              <span className="hidden md:block">Sair</span>
            </SubmitButton>
          </form>
        </div>
      </div>
    </HeaderBody>
  );
};

export default AdminHeader;
