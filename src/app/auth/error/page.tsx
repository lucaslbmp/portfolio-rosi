import Button from "@/components/button";
import { redirect } from "next/navigation";

export default async function AuthErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // const router = useRouter();
  const { error } = await searchParams;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col gap-4 bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-semibold text-red-500">Access Denied</h1>
        <p className="text-gray-700 mt-2">
          You are not authorized to sign in to this application.
        </p>
        {error && (
          <p className="mt-2 text-sm text-gray-500">
            Reason: {decodeURIComponent(error as string)}
          </p>
        )}
        <form
          action={async () => {
            "use server";
            redirect("/");
          }}
        >
          <Button className="mx-auto">Go Home</Button>
        </form>
      </div>
    </div>
  );
}
