import { createSelector } from "reselect";

const auth = (state) => state.Auth;

export const errorSelector = createSelector(auth, (data) =>
  data?.get("error")?.get("data")?.get("error")
);

export const isLoadingSelector = createSelector(auth, (data) =>
  data?.get("isLoading")
);

export const statusSelector = createSelector(auth, (data) =>
  data?.get("data")?.get("status")
);

export const errorStatusSelector = createSelector(auth, (data) =>
  data?.get("error")?.get("status")
);

export const tokenSelector = createSelector(auth, (data) =>
  data?.get("data")?.get("success")?.get("token")
);
