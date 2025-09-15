const Skeleton = ({ width = '100%', height = '1rem', borderRadius = 'rounded-md' }) => {
    return (
        <div
            className="bg-skeleton relative overflow-hidden"
            style={{ width, height }}
            aria-hidden="true"
        >
            <div className={`absolute inset-0 -translate-x-full bg-gradient-to-r from-skeleton via-skeleton-highlight to-skeleton animate-skeleton-shimmer ${borderRadius}`}></div>
        </div>
    );
};

export default Skeleton;