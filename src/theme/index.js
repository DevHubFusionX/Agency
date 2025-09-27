// Global theme configuration
export const theme = {
  colors: {
    primary: 'rgb(var(--primary))',
    primaryDark: 'rgb(var(--primary-dark))',
    secondary: 'rgb(var(--secondary))',
    accent: 'rgb(var(--accent))',
    background: 'rgb(var(--background))',
    surface: 'rgb(var(--surface))',
    surfaceDark: 'rgb(var(--surface-dark))',
    text: 'rgb(var(--text))',
    textMuted: 'rgb(var(--text-muted))',
    border: 'rgb(var(--border))',
  },
  
  gradients: {
    primary: 'var(--gradient-primary)',
    dark: 'var(--gradient-dark)',
  },
  
  shadows: {
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)',
    xl: 'var(--shadow-xl)',
  },
  
  spacing: {
    section: 'var(--section-padding)',
    container: 'var(--container-padding)',
  },
  
  borderRadius: {
    default: 'var(--border-radius)',
    lg: 'var(--border-radius-lg)',
  }
}

// Theme utility classes
export const themeClasses = {
  container: 'theme-container',
  section: 'theme-section',
  gradient: 'theme-gradient',
  gradientDark: 'theme-gradient-dark',
  shadow: 'theme-shadow',
}