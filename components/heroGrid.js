import styles from "./herogrid.module.scss";

import { Heading, Image } from "@chakra-ui/react";

export default function HeroGrid() {
  return (
    <>
      <div className={styles.grid}>
        <div className={styles.img1}></div>
        <div className={styles.img2}></div>
        <div className={styles.title}>
          <Heading fontWeight={400} as="h1" size="xl">
            Helping people render intent that empowers everyone.
          </Heading>
        </div>
        <div className={styles.img3}></div>
        <div className={styles.img4}></div>
      </div>
      <div className={styles.mobile}>
        <Heading fontWeight={400} as="h1" size="xl">
          Helping people render intent that empowers everyone.
        </Heading>
        <Image
          mt="2rem"
          w="100%"
          h="300px"
          objectFit="cover"
          src="/images/eu.png"
          alt="Dan Abramov"
        />
      </div>
    </>
  );
}
