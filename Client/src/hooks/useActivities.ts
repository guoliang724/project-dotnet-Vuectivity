import { useQuery, useMutation, useQueryClient } from "@tanstack/vue-query";
import { getActivityList, createActivity } from "@/api/activity";

export function useActivities() {
  const queryClient = useQueryClient();

  const {
    data: activities,
    isLoading,
    isPending,
  } = useQuery({
    queryKey: ["activities"],
    queryFn: getActivityList,
  });

  const createMutation = useMutation({
    mutationFn: createActivity,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["activities"] });
    },
  });

  return {
    activities,
    isLoading,
    isPending,
    createActivity: createMutation.mutateAsync,
  };
}
