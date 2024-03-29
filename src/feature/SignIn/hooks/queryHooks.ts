import { gql, useMutation } from "@apollo/client";

import { ManagerSignInInput, ManagerSignInOutput } from "./queryHooks.types";

export function useManagerSignIn() {
  const [apiCaller, status] = useMutation<{ managerSignIn: ManagerSignInOutput }, { input: ManagerSignInInput }>(
    gql`
      mutation ManagerSignIn($input: ManagerSignInInput!) {
        managerSignIn(ManagerSignInInput: $input) {
          token
        }
      }
    `
  );
  const mutateAsync = async (input: ManagerSignInInput) => {
    try {
      const result = await apiCaller({ variables: { input } });
      return result.data?.managerSignIn;
    } catch (error) {
      throw new Error(error);
    }
  };

  return { mutateAsync, data: status.data?.managerSignIn, isPending: status.loading, ...status };
}
