const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="font-montserrat text-5xl text-primary pt-2 pb-6 text-center">
      {children}
    </h1>
  );
};

export default Title;
