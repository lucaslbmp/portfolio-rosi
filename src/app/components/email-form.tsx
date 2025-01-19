import Button from "@/components/button";
import InputField from "@/components/input-field";
import TextareaField from "@/components/text-area";

const EmailForm = ({ className }: { className?: string }) => {
  return (
    <form
      action=""
      className={
        "w-full p-4 rounded-lg bg-backgroundSecondary border-2 border-border" +
        " " +
        className
      }
    >
      <div className="flex gap-10 justify-center flex-wrap m-4">
        <div className="flex flex-col gap-6 flex-[1_0_300px]">
          <InputField label="Nome" required />
          <InputField label="Email" required />
          <InputField label="Telefone" />
        </div>

        <TextareaField
          label="Mensagem"
          required
          rows={9}
          className="flex-[2_0_600px]"
        />
      </div>

      <Button className="mx-auto px-[2rem]">Enviar</Button>
    </form>
  );
};

export default EmailForm;
