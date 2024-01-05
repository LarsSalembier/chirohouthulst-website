import React from "react";

type ArticleProps = {
    title: string,
    children: React.ReactNode,
}

export function Article(props: ArticleProps) {
    return <article className="flex flex-col justify-center gap-4">
        <h2 className="text-2xl">{props.title}</h2>
        <p>
            {props.children}
        </p>
    </article>;
}