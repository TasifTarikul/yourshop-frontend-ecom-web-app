'use client';
import Image from "next/image";
import styles from "./TopNav.module.css";
import brandLogoDark from "../../../public/brandLogo/amazon-2.svg";
import downArrow from "../../../public/accesories/down-arrow-5-svgrepo-com.svg";
import search from "../../../public/accesories/search-alt-svgrepo-com.svg";
import cart from "../../../public/accesories/cart-shopping-svgrepo-com.svg";
import user from "../../../public/accesories/user-svgrepo-com.svg";

const TopNav = () => {
  
  // const clickHandlerCategory = () => {
  //   console.log('hey there!');
  //   const c = document.getElementById("category-slot");
  //   console.log(c);
  // };

  return (
    <nav id={styles["nav-belt"]}>
      <button onClick={() => console.log('here')}>Test</button>
      <div id={styles["nav-left"]}>
        <div
          id={styles["nav-logo-wrapper"]}
          className={`${styles["nav-belt-items"]} ${styles["br"]}`}
        >
          <Image
            src={brandLogoDark}
            alt="brand logo"
            style={{ height: "100%", width: "auto" }}
          />
        </div>
        <div
          id={styles["category-slot"]}
          className={`${styles["nav-belt-items"]} ${styles["br"]}`}
        >
          <div
            id={styles["category-text-wrapper"]}
            className={`${styles["flex-center"]}`}
          >
            <span>Categories</span>
            <span>
              <Image src={downArrow} alt="down arrow" height={20} width={20} />
            </span>
          </div>
          <ul id={styles["category-list"]}>
            <li>Category 1</li>
            <li>Category 2</li>
            <li>Category 3</li>
            <li>Category 4</li>
          </ul>
        </div>
      </div>
      <div id={styles["nav-fill"]}>
        <div id={styles["search-form-wrapper"]}>
          <form id={styles["search-form"]}>
            <input type="text" />
            <button type="submit">
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
          className={`${styles["nav-belt-items"]} ${styles["br"]}`}
        >
          <Image
            src={cart}
            alt="cart icon"
            style={{ height: "100%", width: "auto" }}
          />
        </div>
        <div
          id={styles["account-slot"]}
          className={`${styles["nav-belt-items"]} ${styles["br"]}`}
        >
          <Image
            src={user}
            alt="account icon"
            style={{ height: "100%", width: "auto" }}
          />
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
