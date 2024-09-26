import { raleway } from "@/lib/fonts";

const Footer = () => {
  return (
    <footer className="w-full h-10">
      <div className="w-[80%] mx-auto h-full border-t-[1px] border-muted-foreground">
        <p
          className={`${raleway.className} text-sm text-muted-foregound text-center py-2 font-light`}>
          Copyright @ by Aayman Khalid
        </p>
      </div>
    </footer>
  );
};

export default Footer;
