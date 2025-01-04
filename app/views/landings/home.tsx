import { ArrowRight, Copy, CopyCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "react-aria-components";
import type { Route } from "./+types/home";

export default function Home(_: Route.ComponentProps) {
	return (
		<main className="bg-white dark:bg-black text-black dark:text-white min-h-dvh w-screen flex flex-col items-center justify-center gap-6 text-center px-4">
			<h1 className="text-pretty font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl dark:text-neutral-50">
				Edge-first
				<br />
				Starter Kit for React
			</h1>

			<p className="mx-auto max-w-3xl text-pretty text-lg text-neutral-800 sm:font-light sm:text-base md:text-xl dark:text-neutral-200">
				Ship to the Edge with the{" "}
				<span className="text-accent-500">One Person Starter Kit</span>. DB, KV,
				FS, AI & Auth. All Open Source.
			</p>

			<Command />
		</main>
	);
}

const command = "bun create edgefirst-dev/starter";

function Command() {
	let [copied, setCopied] = useState(false);

	useEffect(() => {
		if (copied) {
			let timeout = setTimeout(setCopied, 5000, false);
			return () => clearTimeout(timeout);
		}
	}, [copied]);

	return (
		<Button
			type="button"
			className="items-center gap-2 rounded-md bg-neutral-100 px-3 py-1.5 font-light font-mono text-neutral-950 text-xs/none shadow focus:outline-2 focus:outline-accent-400 focus:outline-offset-2 flex dark:bg-neutral-900 dark:text-neutral-50"
			onPress={() => {
				navigator.clipboard.writeText(command).then(() => setCopied(true));
			}}
		>
			<span>{command}</span>
			{copied ? (
				<CopyCheck aria-hidden className="size-4" />
			) : (
				<Copy aria-hidden className="size-4" />
			)}
		</Button>
	);
}

function GetStarted() {
	return (
		<a
			className="button relative rounded-md bg-accent-500 px-5 py-2.5 font-light text-accent-50 text-base/none shadow-md focus:outline-2 focus:outline-accent-400 focus:outline-offset-2 dark:bg-accent-500 dark:text-accent-950 dark:shadow-none"
			href="https://github.com/edgefirst-dev/stack"
		>
			<span className="flex relative gap-2">
				<span>Get Started</span>
				<ArrowRight aria-hidden className="size-5" />
			</span>
		</a>
	);
}
