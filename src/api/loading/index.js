import React from "react";
import { Circles } from "react-loader-spinner";
import LoadingOverlay from "react-loading-overlay";
import { LOADING_OVERLAY_STYLE } from "../config";
export default function Loading({ active = false }) {
  return (
    <LoadingOverlay
      active={active}
      spinner={<Circles color="#d1937c" />}
      styles={{
        overlay: () => LOADING_OVERLAY_STYLE?.STYLE,
      }}
    />
  );
}