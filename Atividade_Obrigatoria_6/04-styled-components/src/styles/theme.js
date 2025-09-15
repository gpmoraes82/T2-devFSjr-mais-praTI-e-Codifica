export const lightTheme = {
    name: 'light',
    bgPrimary: '#ffffff',
    bgSecondary: '#f8f9fa',
    textPrimary: '#212529',
    textSecondary: '#6c757d',
    accent: '#0d6efd',
    accentHover: '#0b5ed7',
    border: '#dee2e6',
    success: '#198754',
    warning: '#ffc107',
    danger: '#dc3545',
    rating: '#fd7e14',
    skeleton: '#e9ecef',
    skeletonHighlight: '#f8f9fa',

    spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
    },

    borderRadius: {
        sm: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
    },

    boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    },

    transition: 'all 0.2s ease-in-out',
};

export const darkTheme = {
    ...lightTheme,
    name: 'dark',
    bgPrimary: '#121212',
    bgSecondary: '#1e1e1e',
    textPrimary: '#f8f9fa',
    textSecondary: '#adb5bd',
    border: '#343a40',
    skeleton: '#2d2d2d',
    skeletonHighlight: '#3d3d3d',
};