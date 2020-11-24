import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

import styles from "./skeleton-admin.module.css";

function SkeletonAdmin() {
  const skeletonTab = (
    <React.Fragment>
      <div className={styles.loadingProductSmall}>
        <Skeleton variant="rect" width={360} height={100} />
      </div>
      <div className={styles.loadingProductMedium}>
        <Skeleton variant="rect" width={700} height={180} />
      </div>
    </React.Fragment>
  );
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingTitleSmall}>
        <Skeleton variant="rect" width={280} height={50} />
      </div>
      <div className={styles.loadingTitleMedium}>
        <Skeleton variant="rect" width={500} height={50} />
      </div>
      <div className={styles.loadingButtonSmall}>
        <Skeleton variant="rect" width={180} height={50} />
      </div>
      <div className={styles.loadingButtonMedium}>
        <Skeleton variant="rect" width={220} height={60} />
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

export default SkeletonAdmin;
