export default function Skeleton({ className = "" }) {
    // Skeleton uses aspect-square so it reserves same layout as image
    return (
        <div className={`animate-pulse rounded-lg ${className}`} aria-hidden="true">
            <div className="bg-gray-200 dark:bg-gray-700 w-full aspect-square rounded-md" />
            <div className="mt-3 space-y-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
            </div>
        </div>
    );
}
