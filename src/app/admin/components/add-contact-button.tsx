import Button from "@/components/button";
import OverlayPanel from "@/components/overlay-panel";
import ContactForm from "./contact-form";

const AddContactButton = () => {
  return (
    <OverlayPanel
      triggerButton={
        <Button className="mx-auto my-4">
          <i className="fa-solid fa-plus text-2xl" />
          Adicionar contato
        </Button>
      }
    >
      <div className="px-4 w-[25rem] py-2 bg-backgroundSecondary rounded-xl flex flex-col gap-6">
        <h2 className="text-2xl font-bold">Adicionar contato</h2>
        <ContactForm />
      </div>
    </OverlayPanel>
  );
};

export default AddContactButton;
