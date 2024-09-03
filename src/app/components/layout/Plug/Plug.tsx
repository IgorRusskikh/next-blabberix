import { obrazec800, openSans600 } from "../../../../utils/fonts";

import Image from "next/image";
import styles from "./Plug.module.css";

const Plug = () => {
  return (
    <div className={[styles.plug].join(" ")}>
      <p className={styles.presaleDate}>
        The token pre-sale will begin on October 7, 2024. Stay tuned for
        updates.
      </p>

      <div className={styles.plugContent}>
        <div className={styles.circle}>
          <h1 className={[styles.header].join(" ")}>
            Blabberi<span className={styles.xChar}>x</span>
          </h1>

          <div className={styles.imgCont}>
            <Image src="/images/plug/girl.png" fill alt="Blabberix girl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plug;
