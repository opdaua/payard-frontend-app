import React, { useContext, useState } from "react";

import s from "./CTA.module.scss";
import Image from "next/image";
import { ScrollContext } from "@/lib/providers/ScrollProvider/context";
import { AnimatePresence, motion } from "framer-motion";
import { VideoPlayer } from "@/utils/VideoPlayer/VideoPlayer";
import clsx from "clsx";
import LazyLoad from "react-lazyload";
import { DataContext } from "@/lib/providers/DataProvider/context";

export default function CTA() {
  const { scrollStop, scrollResume } = useContext(ScrollContext);
  const { data: allData } = useContext(DataContext);

  const data = allData?.appInstruction;

  const sectionText = data?.sectionText;

  const [isPlayerActive, setIsPlayerActive] = useState(false);

  const handlerOpenPlayer = () => {
    scrollStop();
    setIsPlayerActive(true);
  };

  const handlerClosePlayer = () => {
    scrollResume();
    setIsPlayerActive(false);
  };

  return (
    data &&
    data.showSection && (
      <section className={s.cta}>
        <LazyLoad className={s.hiden_video}>
          <video src={data.video} />
        </LazyLoad>

        <div className={s.phone}>
          <Image fill src="/images/CTA/phone.png" alt="phone decor" />
        </div>
        <div className={s.left}>
          <h1 className={s.title}>{sectionText.title}</h1>
          <motion.div
            className={clsx(s.button, {
              [s.button_active]: isPlayerActive,
            })}
            onClick={handlerOpenPlayer}
            layoutId="videoCta"
            transition={{
              duration: 0.7,
              ease: [0.12, 0.73, 0.28, 0.99],
            }}
          >
            <span className={s.bg} />
            <svg
              className={s.buttonIcon}
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="20" fill="white" />
              <path
                d="M27 20.5L15.75 28.7272L15.75 12.2728L27 20.5Z"
                fill="#38D091"
              />
            </svg>
            <span className={s.buttonText}>{sectionText.buttonText}</span>
          </motion.div>

          <AnimatePresence>
            {isPlayerActive && (
              <motion.div
                className={s.video_main_wrapper}
                layoutId="videoCta"
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <VideoPlayer customClass={s.video_main} url={data.video}>
                  <span
                    className={s.video_main_close}
                    onClick={handlerClosePlayer}
                  >
                    <svg
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="21.2133"
                        width="2"
                        height="30"
                        transform="rotate(45 21.2133 0)"
                        fill="white"
                      />
                      <rect
                        x="0.000366211"
                        y="1.41406"
                        width="2"
                        height="30"
                        transform="rotate(-45 0.000366211 1.41406)"
                        fill="white"
                      />
                    </svg>
                  </span>
                </VideoPlayer>
                <span className={s.bg} onClick={handlerClosePlayer} />
              </motion.div>
            )}
          </AnimatePresence>

          <p className={"shadow " + s.text}>{sectionText.text}</p>
        </div>
      </section>
    )
  );
}
