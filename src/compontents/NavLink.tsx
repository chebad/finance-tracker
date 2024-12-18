import React from "react";

interface NavLinkProps {
  name: string;
  href: string;
  bottomBorder?: boolean;
}

const NavLink = ({ href, name, bottomBorder = true }: NavLinkProps) => {
  return <div>NavLink</div>;
};

export default NavLink;
