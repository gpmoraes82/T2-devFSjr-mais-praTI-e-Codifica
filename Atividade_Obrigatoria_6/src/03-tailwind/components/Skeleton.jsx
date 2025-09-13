import React from "react";

export default function Skeleton() {
    return (
        <div className="animate-pulse bg-slate-300 dark:bg-slate-700 rounded-md aspect-square" aria-hidden="true"></div>
    );
}
