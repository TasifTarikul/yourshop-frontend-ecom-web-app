import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import styles from "./CategoryMenu.module.css";
import { fetchCategory } from "../../api/categoryApi";
import { Button } from "@mui/material";
import { topNavActions } from "../../store/topNavSlice";

type CategoryMenuProp = {
  classNames: string
}

const CategoryMenu = (props: CategoryMenuProp) => {
  const dispatch = useDispatch();
  const categories = useSelector((state:any) => state.topNav.categories);
  const categoryError = useSelector((state:any) => state.topNav.categoryError);

  useEffect(() => {
    if (categoryError === false){ // this condition is included to avoid double execution of the code inside
                                  // when page is rendered or try again button is clicked
      fetchCategory()
      .catch((err) => {
        dispatch(topNavActions.setCategoryError(true));
      })
      .then((d) => {
        if (d !== undefined && d !== null) {
          dispatch(topNavActions.setCategories(d));
        }
      });

    }
  }, [categoryError]);

  if (categoryError) {
    return (
      <div
        id={styles["category-error-box"]}
        className={`${props.classNames} ${styles["br"]}`}
      >
        <p className={`${styles["br"]}`}>Failed to fetch category list</p>
        <Button
          variant="contained"
          onClick={() => dispatch(topNavActions.setCategoryError(false))}
        >
          Try Again
        </Button>
      </div>
    );
  } else if (!categoryError) {

    const categoryListRenderer = (categories) => {
      return categories.map((category) => {
        return (
          <li
            key={category.id}
            className={`${styles["category-list-item"]} ${
              category.children !== null ? styles.arrow : ""
            }`}
          >
            <span>{category.title}</span>
            {category.children !== null ? (
              <ul
                id={styles[""]}
                className={`${styles["br"]} ${styles["sub-category-list"]} ${props.classNames}`}
              >
                {categoryListRenderer(category.children)}
              </ul>
            ) : (
              <></>
            )}
          </li>
        );
      });
    };
    
    const categoryList = categoryListRenderer(categories);
    return (
      <ul
        id={styles["category-list"]}
        className={`${styles["br"]} ${props.classNames}`}
      >
        {categoryList}
      </ul>
    );
  }
};

export default CategoryMenu;
