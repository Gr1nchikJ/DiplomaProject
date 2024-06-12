import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCertificate, deleteCertificate } from "./certificateApi";
import { useNavigate } from "react-router-dom";

export const useCreateCertificateMutation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data) => createCertificate(data),
    onMutate: () => {},
    onError: () => {
      console.error("error");
    },
    onSuccess: () => {},
    onSettled: async (_, error) => {
      if (!error) {
        await queryClient.invalidateQueries({ queryKey: ["certificates"] });
      }
    },
  });
};

export const useDeleteCertificate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => deleteCertificate(data),
    onMutate: () => {},
    onError: () => {
      console.error("error");
    },
    onSuccess: () => {},
    onSettled: async (_, error) => {
      if (!error) {
        await queryClient.invalidateQueries({ queryKey: ["certificates"] });
      }
    },
  });


};

export const useUpdateCertification = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => deleteCertificate(data),
    onMutate: () => {},
    onError: () => {
      console.error("error");
    },
    onSuccess: () => {},
    onSettled: async (_, error) => {
      if (!error) {
        await queryClient.invalidateQueries({ queryKey: ["certificates"] });
      }
    },
  });
}
