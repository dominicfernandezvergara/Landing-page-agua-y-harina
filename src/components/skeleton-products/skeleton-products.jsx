import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

import styles from "./skeleton-products.module.css";

function SkeletonProducts() {
  const skeletonTab = (
    <React.Fragment>
      <div className={styles.loadingProductSmall}>
        <Skeleton variant="rect" width={150} height={260} />
      </div>
      <div className={styles.loadingProductMedium}>
        <Skeleton variant="rect" width={200} height={280} />
      </div>
      <div className={styles.loadingProductLarge}>
        <Skeleton variant="rect" width={250} height={300} />
      </div>
    </React.Fragment>
  );
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingTitleSmall}>
        <Skeleton variant="rect" width={280} height={50} />
      </div>
      <div className={styles.loadingContainerProducts}>
        {skeletonTab}
        {skeletonTab}
        {skeletonTab}
        {skeletonTab}
        {skeletonTab}
        {skeletonTab}
      </div>
    </div>
  );
}

export default SkeletonProducts;
