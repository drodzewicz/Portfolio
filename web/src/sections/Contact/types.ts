export type FormMessage = {
  email: string;
  message: string;
};

export interface IContactFormProps {
  setIsFormSubmitted: (state: boolean) => void;
}
