import type { ReactElement } from "react";

import { visuallyHidden } from "@mui/utils";
import Box from "@mui/material/Box";

type HiddenLoadingTextProps = {
  isLoading: boolean;
};

const HiddenLoadingText = (
  props: HiddenLoadingTextProps
): ReactElement | null => {
  const { isLoading } = props;
  if (!isLoading) return null;

  return <Box sx={visuallyHidden}>Loading...</Box>;
};

export default HiddenLoadingText;
