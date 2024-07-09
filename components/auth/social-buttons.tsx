import { GithubIcon } from "@/components/icons/githubIcon";
import { GoogleIcon } from "@/components/icons/googleIcon";
import { Button } from "@/components/ui/button";

export const SocialButtons = () => {
  return (
    <div className="w-full flex space-x-1">
      <Button className="flex-1 hover:bg-slate-200">
        <GithubIcon className="h-5 w-5" />
      </Button>

      <Button className="flex-1 hover:bg-red-100">
        <GoogleIcon className="h-5 w-5" />
      </Button>
    </div>
  );
};
