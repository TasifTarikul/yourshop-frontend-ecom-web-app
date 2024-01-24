"use client";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import parse from 'html-react-parser';
import Image from "next/image";
import Link from "next/link";
import styles from "./TopNav.module.css";
import brandLogoDark from "../../../public/brandLogo/amazon-2.svg";
import downArrow from "../../../public/accesories/down-arrow-5-svgrepo-com.svg";
import search from "../../../public/accesories/search-alt-svgrepo-com.svg";
import cart from "../../../public/accesories/cart-shopping-svgrepo-com.svg";
import user from "../../../public/accesories/user-svgrepo-com.svg";

import { topNavActions } from "../../store/topNavSlice";
import CategoryMenu from "../CategoryMenu/CategoryMenu";

const TopNav = () => {
  const dispatch = useDispatch();
  const brandLogoIsActive = useSelector((state: any) => state.topNav.brandLogoIsActive);
  const categoryIsActive = useSelector((state: any) => state.topNav.categoryIsActive);
  const cartIsActive = useSelector((state: any) => state.topNav.cartIsActive);
  const accountIsActive = useSelector((state: any) => state.topNav.accountIsActive);

  const navBar = useRef(null);
  const searchFormRef = useRef(null);
  const logoRef = useRef();
  const categoryRef = useRef();
  const cartRef = useRef();
  const accountRef = useRef();

  const brandLogoClickHandler = () => {
    dispatch(topNavActions.brandLogoClickAction())
  };

  const categoryClickHandler = () => {
    dispatch(topNavActions.categoryClickHandler())
  };

  const cartClickHandler = () => {
    dispatch(topNavActions.cartClickHandler())
  };

  const accountClickHandler = () => {
    dispatch(topNavActions.accountClickHandler())
  };

  useEffect(() => {
    if (
      !categoryIsActive &&
      !brandLogoIsActive &&
      !cartIsActive &&
      !accountIsActive
    )
      return;

    const handleNavItemClick = (event: any) => {
      if (
        (logoRef.current &&
          !logoRef.current.contains(event.target) &&
          categoryRef.current &&
          !categoryRef.current.contains(event.target) &&
          cartRef.current &&
          !cartRef.current.contains(event.target) &&
          accountRef.current &&
          !accountRef.current.contains(event.target)) ||
        (searchFormRef.current && searchFormRef.current.contains(event.target))
      ) {
        dispatch(topNavActions.allNavItemInactive())
      }
    };
    window.addEventListener("click", handleNavItemClick);

    return () => window.removeEventListener("click", handleNavItemClick);
  }, [categoryIsActive, brandLogoIsActive, cartIsActive, accountIsActive]);

  return (
      <nav id={styles["nav-belt"]} className={styles["p-10"]} ref={navBar}>
        <div id={styles["nav-left"]}>
          <div
            id={styles["nav-logo-wrapper"]}
            className={`${styles["nav-belt-items"]} ${styles["br"]} ${
              styles["p-10"]
            } ${brandLogoIsActive ? styles["nav-belt-items-active"] : ""}`}
            onClick={brandLogoClickHandler}
            ref={logoRef}
          >
            <Link className={`nav-belt-items-links`} href="/">
              <Image
                src={brandLogoDark}
                alt="brand logo"
                style={{ height: "100%", width: "auto" }}
              />
            </Link>
          </div>
          <div id={styles["category-slot"]} ref={categoryRef}>
            <div
              id={styles["category-text-container"]}
              className={`${styles["nav-belt-items"]} ${styles["br"]}`}
            >
              <div
                id={styles["category-text-wrapper"]}
                className={`${styles["p-10"]} ${styles["flex-center"]} ${
                  styles["br"]
                } ${categoryIsActive ? styles["nav-belt-items-active"] : ""}`}
                onClick={categoryClickHandler}
              >
                <span>Categories</span>
                <span>
                  <Image
                    src={downArrow}
                    alt="down arrow"
                    height={20}
                    width={20}
                  />
                </span>
              </div>
            </div>
            <CategoryMenu
              classNames={`${categoryIsActive ? "" : styles.dNone}`}
            />
          </div>
        </div>
        <div id={styles["nav-fill"]}>
          <div id={styles["search-form-wrapper"]} className={styles["p-10"]}>
            <form id={styles["search-form"]} ref={searchFormRef}>
              <input type="text" />
              <button type="submit" className={styles["p-10"]}>
                <Image
                  src={search}
                  alt="search icon"
                  style={{ height: "100%", width: "auto" }}
                />
              </button>
            </form>
          </div>
        </div>
        <div id={styles["nav-right"]}>
          <div
            id={styles["cart-slot"]}
            className={`${styles["nav-belt-items"]} ${styles["br"]} ${
              styles["p-10"]
            } ${cartIsActive ? styles["nav-belt-items-active"] : ""}`}
            onClick={cartClickHandler}
            ref={cartRef}
          >
            <Image
              src={cart}
              alt="cart icon"
              style={{ height: "100%", width: "auto" }}
            />
          </div>
          <div id={styles["account-slot"]} onClick={accountClickHandler}>
            <div
              id={styles["account-item-container"]}
              className={`${styles["nav-belt-items"]} ${styles["br"]} ${
                styles["p-10"]
              } ${accountIsActive ? styles["nav-belt-items-active"] : ""}`}
              ref={accountRef}
            >
              <Image
                src={user}
                alt="account icon"
                style={{ height: "100%", width: "auto" }}
              />
            </div>
            <ul
              id={styles["account-menu"]}
              className={`${styles["br"]} ${accountIsActive ? "" : styles.dNone}`}
            >
              <li className={`${styles["account-menu-items"]}`}>My Account</li>
              <li className={`${styles["account-menu-items"]}`}>My Order</li>
              <li className={`${styles["account-menu-items"]}`}>My Review</li>
              <li className={`${styles["account-menu-items"]}`}>My Wishlist</li>
              <li className={`${styles["account-menu-items"]}`}>Log Out</li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default TopNav;
