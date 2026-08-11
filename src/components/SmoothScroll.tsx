"use client";

import { useEffect } from "react";
import gsap from "gsap";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type SmoothScrollProps = {
	children: React.ReactNode;
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const lenis = new Lenis({
			lerp: 0.085,
			smoothWheel: true,
			smoothTouch: false,
			wheelMultiplier: 1,
			anchors: true,
		});

		lenis.on("scroll", ScrollTrigger.update);

		const raf = (time: number) => {
			lenis.raf(time * 1000);
		};

		gsap.ticker.add(raf);
		gsap.ticker.lagSmoothing(0);
		ScrollTrigger.refresh();

		return () => {
			gsap.ticker.remove(raf);
			lenis.destroy();
		};
	}, []);

	return <>{children}</>;
}