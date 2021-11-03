import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import cx from "classnames";

import styles from "./Header.module.scss";

const routes = ["/", "/schedule", "/registry", "/info", "/rsvp"] as const;
type Route = typeof routes[number];

type RouteConfig = {
  href: Route;
  label: string;
};

const ROUTE_CONFIG: RouteConfig[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Schedule",
    href: "/schedule",
  },
  {
    label: "Info",
    href: "/info",
  },
  {
    label: "Registry",
    href: "/registry",
  },
  {
    label: "RSVP",
    href: "/rsvp",
  },
];

type MobileMenuItemProps = RouteConfig & {
  onRoute: () => void;
};

function MobileMenuItem({ label, href, onRoute }: MobileMenuItemProps) {
  const { asPath } = useRouter();

  return (
    <Link href={href} passHref>
      <li onClick={onRoute} className={cx("mb-3", styles.MobileMenuItem)}>
        <h4
          className={cx(styles.MenuItemText, {
            [styles.MenuItemTextActive]: asPath === href,
          })}
        >
          {label}
        </h4>
      </li>
    </Link>
  );
}

function MobileMenu({
  isOpen,
  toggleIsMenuOpen,
}: {
  isOpen: boolean;
  toggleIsMenuOpen: () => void;
}) {
  return (
    <div
      className={cx(styles.MobileMenu, {
        [styles.MobileMenuOpen]: isOpen,
      })}
    >
      <ul>
        {ROUTE_CONFIG.map((config) => (
          <MobileMenuItem
            {...config}
            onRoute={toggleIsMenuOpen}
            key={`mobile_${config.href}`}
          />
        ))}
      </ul>
    </div>
  );
}

function DesktopMenu() {
  const { asPath } = useRouter();

  return (
    <div className={styles.DesktopMenu}>
      {ROUTE_CONFIG.map(({ href, label }) => (
        <Link href={href} key={`desktop_${href}`} passHref>
          <div className={styles.DesktopMenuItem}>
            <h6
              className={cx(styles.MenuItemText, {
                [styles.MenuItemTextActive]: asPath === href,
              })}
            >
              {label}
            </h6>
          </div>
        </Link>
      ))}
    </div>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleIsMenuOpen() {
    setIsOpen((open) => !open);
  }

  return (
    <header className={styles.Header}>
      <div className={styles.HeaderContent}>
        <div
          onClick={toggleIsMenuOpen}
          className={styles.MobileMenuIconWrapper}
        >
          <FiMenu
            className={cx(styles.MobileMenuIcon, styles.MobileMenuOpenIcon, {
              [styles.MobileMenuIconActive]: !isOpen,
            })}
          />
          <FiX
            className={cx(styles.MobileMenuIcon, styles.MobileMenuCloseIcon, {
              [styles.MobileMenuIconActive]: isOpen,
            })}
          />
        </div>
        <Link href="/" passHref>
          <h2 className={styles.HeaderTitle}>Claire & Michael</h2>
        </Link>
        <DesktopMenu />
      </div>
      <MobileMenu isOpen={isOpen} toggleIsMenuOpen={toggleIsMenuOpen} />
    </header>
  );
}

export default Header;
