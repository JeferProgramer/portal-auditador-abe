import { getStatusColor } from "@/helpers/getStatusColor";
import styles from "./StatusInidicator.module.scss";
export const StatusInidicator = ({ state }) => {
  return (
    <div
      className={styles.statusCircle}
      style={{ backgroundColor: getStatusColor(state) }}
    />
  );
};
