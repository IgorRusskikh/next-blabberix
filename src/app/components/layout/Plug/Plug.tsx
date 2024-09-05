import Container from "../../ui/Container";
import Image from "next/image";
import styles from "./Plug.module.css";

export default function Plug() {
  return (
    <header id={`${styles.header}`}>
      <p className={`${styles.presaleDate}`}>
        The token pre-sale will begin on October 7, 2024. Stay tuned for
        updates.
      </p>

      <Container className="py-[90px] md:py-[130px] lg:py-[120px] xl:py-[128px] 3xl:!py-[40px] pb-[30px] md:pb-[60px] lg:pb-[30px] xl:pb-[30px] 3xl:!pb-[30px]">
        {/* HEADER WITH NAVBAR */}
        <div className={styles.plugContent}>
          <div className={styles.circle}>
            <h1 className={[styles.header].join(" ")}>
              Blabberi<span className={styles.xChar}>x</span>
              <div className={`${styles.description}`}>
                <p className={`hidden md:block ${styles.text}`}>
                  Social network, AI, blockchain, crypto – everything you need
                  all in one
                </p>

                <div
                  className={`${styles.whitepaper} !hidden md:!block md:max-w-[155px] lg:max-w-[170px] xl:max-w-[210px] 3xl:max-w-[255px]`}
                >
                  <p className={`${styles.text}`}>
                    For all questions:{" "}
                    <a
                      href="mailto:blabberix@gmail.com"
                      className="text-primary lowercase"
                    >
                      blabberix@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </h1>

            <div className={styles.imgCont}>
              <Image src="/images/plug/girl.png" fill alt="Blabberix girl" />
            </div>
          </div>

          <p className={`${styles.text} md:hidden mt-6`}>
            Social network, AI, blockchain, crypto – everything you need all in
            one
          </p>

          <p className={`${styles.text} md:hidden mt-6`}>
            For all questions:{" "}
            <a href="mailto:blabberix@gmail.com" className="text-primary">
              blabberix@gmail.com
            </a>
          </p>
        </div>
      </Container>
    </header>
  );
}
