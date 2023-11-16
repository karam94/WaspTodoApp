import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Props {
  icon: IconDefinition;
  className?: string;
}

export const Icon = ({ icon, className }: Props) => {
  return <FontAwesomeIcon icon={icon} className={className} />;
};
