import React from "react";
import MuiAlert from "@material-ui/lab/Alert";

import styles from "./error-loading-data.module.css";
import emptyStateImage from "../../images/empty-state/undraw_fixing_bugs_w7gi.svg";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function ErrorLoadingData() {
  return (
    <div className={styles.contianerErrorLoadingData}>
      <Alert severity="error">Failed to load! Please reload the page.</Alert>
      <img
        className={styles.errorLoadingDataimage}
        src={emptyStateImage}
        alt=""
      />
    </div>
  );
}

export default ErrorLoadingData;
