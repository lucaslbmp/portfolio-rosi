"use client";

import { signoutAction } from "@/app/actions/signout";
import HeaderBody from "@/components/header-body";
import SubmitButton from "@/components/submit-button";
import { User } from "next-auth";
import Image from "next/image";
import { useState } from "react";

const AdminHeader = ({ user }: { user?: User }) => {
  const [isLoading, setIsLoading] = useState(false);
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

        <div className="flex flex-col text-xs max-w-[50px] max-w-[100px] md:max-w-[300px]">
          <span
            className="text-ellipsis overflow-hidden whitespace-nowrap font-bold"
            title={user?.name ?? ""}
          >
            {user?.name}
          </span>
          <span
            className="text-ellipsis overflow-hidden whitespace-nowrap"
            title={user?.email ?? ""}
          >
            {user?.email}
          </span>
          <form
            onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              setIsLoading(true);
              await signoutAction();
              setIsLoading(false);
            }}
          >
            <SubmitButton
              pending={isLoading}
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
