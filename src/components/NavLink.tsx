import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

/**
 * Um wrapper para o NavLink do React Router, compatível com Tailwind + class merging.
 * Permite definir estilos diferentes para estados ativo e pendente.
 */
export const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(
            // estilos base
            "transition-colors duration-200",
            className,
            // estado ativo (ex: item selecionado)
            isActive && activeClassName,
            // estado pendente (ex: em carregamento de rota)
            isPending && pendingClassName
          )
        }
        {...props}
      />
    );
  }
);

NavLink.displayName = "NavLink";
