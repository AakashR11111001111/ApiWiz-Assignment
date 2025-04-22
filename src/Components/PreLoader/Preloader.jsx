import { useLayoutEffect, useRef } from "react";
import styles from "./Preloader.module.css";
import { gsap } from "gsap";
import Main from "../Main/Main";
const Preloader = () => {
    const comp = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
          const t1 = gsap.timeline();
          t1.from("#title1",{
            duration: 1.5,
            opacity: 0,
            ease: "power2.out",
          })
          .to("#title1",{
            duration: 1,
            opacity: 0,
            ease: "power2.out",
          })
          .from("#title2",{
            duration: 1.5,
            opacity: 0,
            ease: "power2.out",
          })
          .to("#title2",{
            duration: 1,
            opacity: 0,
            ease: "power2.out",
          })
          .from("#title3",{
            duration: 2,
            opacity: 0,
            ease: "power2.out",
          })
          .to("#title3",{
            duration: 1,
            opacity: 0,
            ease: "power2.out",
          })
          .to(comp.current,{
            y: "-100%",
            duration: 1,
            ease: "power3.out",
          })
        }, comp);
    
        return () => ctx.revert();
      }, []);

    return (
        <>
            <div className={styles.preload} ref={comp}>
                <div className={styles.titles}>
                    <h1 id="title1">Feel the Vibe</h1>
                    <h1 id="title2">Cast Your Feelings</h1>
                    <h1 id="title3">Welcome to Aura-Wiz</h1>
                </div>
            </div>
        </>
    )
}

export default Preloader;