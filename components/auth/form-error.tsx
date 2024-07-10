import { InfoIcon } from "@/components/icons/infoIcon";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

type FormErrorProps = {
  title?: string;
  message: string;
};

export const FormError = ({ title = "Error", message }: FormErrorProps) => {
  return (
    <Alert variant="destructive">
      <InfoIcon className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};
