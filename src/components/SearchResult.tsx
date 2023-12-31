"use client";
import React from "react";
import { scrapboxUrl, scrapboxIconUrl } from "./search";

function Icon(props: { result: any }) {
  const result = props.result;
  const url = scrapboxIconUrl(result.payload.project, result.payload.title);
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={url} alt="" style={{ maxWidth: 300, maxHeight: 300 }} />;
}

export function SearchResult(result: any[]) {
  const resultDom = result.map((r) => {
    const lines = r.payload.text.split(/\n/g);

    // Default: Scrapbox Result
    let title = r.payload.title;
    let link_target = scrapboxUrl(r.payload.project, r.payload.title);
    if (r.payload.project === "pluralitybook") {
      link_target =
        "https://github.com/nishio/plurality-japanese/blob/main/contents/" +
        title +
        ".md";
      title = "The Plurality Book: " + title;
    } else if (r.payload.project === "rxc_blog") {
      link_target = r.payload.url;
      title = "RxC Blog: " + title;
    }

    return (
      <li key={r.id} className="border-t border-gray-600 p-4">
        <a
          href={link_target}
          target="_blank"
          className="text-blue-400 hover:text-blue-300 hover:underline text-lg"
        >
          {title}
        </a>
        <p className="text-gray-300 text-sm mt-2">
          <span className="font-bold">Score:</span> {r.score}
          <span className="font-bold ml-4">Project:</span> {r.payload.project}
        </p>
        <div className="mt-2 text-gray-400">
          <Icon result={r} />
          {lines.map((line: string, index: number) => (
            <p key={index} className="overflow-hidden">
              {line}
            </p>
          ))}
        </div>
      </li>
    );
  });
  return resultDom;
}
