import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  message: string;
}

export function useSubmitContact() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      if (!actor)
        throw new Error("Service temporarily unavailable. Please try again.");
      await actor.submitContactForm(
        data.name,
        data.email,
        data.phone,
        data.businessType,
        data.message,
      );
    },
  });
}
