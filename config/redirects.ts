import { URLPattern } from "urlpattern-polyfill";

export default function redirects(url: URL): Array<Redirect> {
	return [
		{
			source: new URLPattern("/starter", url.toString()),
			destination: "/",
			permanent: false,
		},
	];
}

interface Redirect {
	source: URLPattern;
	destination: string;
	permanent: boolean;
}
