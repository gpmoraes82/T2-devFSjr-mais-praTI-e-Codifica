import React from "react";

export default function Skeleton() {
    // preserves aspect ratio via aspect-square (plugin included)
    return (
        <div className="animate-pulse bg-slate-300 dark:bg-slate-700 rounded-md aspect-square" aria-hidden="true"></div>
    );
}
