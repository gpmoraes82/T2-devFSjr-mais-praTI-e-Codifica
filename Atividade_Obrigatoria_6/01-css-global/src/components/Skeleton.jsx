import '../styles/global.css';

const Skeleton = ({ width = '100%', height = '1rem', borderRadius = 'var(--border-radius-md)' }) => {
    return (
        <div
            className="skeleton"
            style={{ width, height, borderRadius }}
            aria-hidden="true"
        ></div>
    );
};

export default Skeleton;