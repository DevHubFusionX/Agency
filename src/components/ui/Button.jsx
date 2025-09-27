const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  href, 
  className = '',
  ...props 
}) => {
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white',
    outline: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-600'
  }
  
  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-8 py-4 text-base',
    large: 'px-10 py-5 text-lg'
  }
  
  const baseClass = `inline-block text-center font-semibold rounded-lg transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`
  
  if (href) {
    return (
      <a href={href} className={baseClass} {...props}>
        {children}
      </a>
    )
  }
  
  return (
    <button className={baseClass} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button