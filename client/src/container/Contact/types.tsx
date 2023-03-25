export type FormMessage = {
  name: string;
  email: string;
  message: string;
};

export interface IContactFormProps {
  setIsFormSubmitted: (state: boolean) => void;
}
