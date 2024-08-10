import React from "react";
import classNames from "../../../utils/classNames";
import Info from "../../../assets/images/Info.svg";
import Menu from "../../../assets/images/Menu.svg";
// import Error from "../../../assets/icon/error.svg";
import Facebook from "../../../assets/images/Facebook.png";
import Instagram from "../../../assets/images/Instagram.png";
import LinkedIn from "../../../assets/images/LinkedIn.png";
import Twitter from "../../../assets/images/Twitter.png";
import Website from "../../../assets/images/Website.png";

// import DropdownIcon from "../../../assets/images/DropdownActive.svg";


const components = {
  // Error: Error,
  // DropdownIcon: DropdownIcon,
  Info: Info,
  Menu: Menu,
  Facebook: Facebook,
  LinkedIn: LinkedIn,
  Instagram: Instagram,
  Twitter: Twitter,
  Website: Website,
};

export interface CustomIconProps {
  name:
    | string
    | "Error"
    | "Info"
    | "Menu"
    | "Facebook"
    | "LinkedIn"
    | "Instagram"
    | "DropdownIcon"
    | "Twitter"
    | "Website";
  size?: string | "xsmall" | "small" | "bigger" | "medium" | "large" | "xlarge";
  alt?: string;
  className?: any;
  onClick?: VoidFunction;
}

const CustomIcon: React.FC<CustomIconProps> = ({
  name = "",
  size = "medium",
  alt = "",
  className = "",
  onClick,
  ...otherProps
}) => {
  const icon = components[name];
  return (
    <img
      className={classNames(
        size === "xsmall"
          ? "h-2"
          : size === "small"
          ? "h-4"
          : size === "bigger"
          ? "h-6"
          : size === "medium"
          ? "h-8"
          : size === "large"
          ? "h-10"
          : size === "xlarge"
          ? "h-12"
          : "",
        className
      )}
      alt={alt || name}
      src={icon}
      loading="lazy"
      onClick={onClick}
      {...otherProps}
    />
  );
};

export default CustomIcon;
