import { Loader } from "lucide-react";
const Loading = () => {
  return (
    <div className="w-full h-[70vh] text-center grid place-content-center">
      {/* <div className="flex items-center gap-x-4">
        <p>Fetching posts</p>
        <Loader className="animate-spin" />
      </div> */}
      <Loader className="animate-spin w-20 h-20 text-muted-foreground" />
    </div>
  );
};

export default Loading;
