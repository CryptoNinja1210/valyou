import { createSelector } from "reselect";

const user = (state) => state.User;

export const errorSelector = createSelector(user, (data) => data?.get("error"));

export const isLoadingSelector = createSelector(user, (data) =>
  data?.get("isLoading")
);

export const statusSelector = createSelector(user, (data) =>
  data?.get("status")
);

export const userSelector = createSelector(user, (data) =>
  data?.get("data")?.get("data")?.get("User Detail")
);
