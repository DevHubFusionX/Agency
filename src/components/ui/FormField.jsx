const FormField = ({ 
  label, 
  name, 
  type = 'text', 
  value, 
  onChange, 
  error, 
  required = false,
  placeholder,
  options = [],
  rows
}) => {
  const baseInputClasses = "w-full p-4 bg-slate-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
  const errorClasses = error ? "border-red-500 focus:ring-red-500" : ""
  
  const renderInput = () => {
    if (type === 'select') {
      return (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={`${baseInputClasses} ${errorClasses}`}
          style={{borderRadius: 'var(--radius-xl)'}}
          required={required}
        >
          <option value="">{placeholder}</option>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )
    }
    
    if (type === 'textarea') {
      return (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows={rows || 5}
          className={`${baseInputClasses} ${errorClasses} resize-none`}
          style={{borderRadius: 'var(--radius-xl)'}}
          placeholder={placeholder}
          required={required}
        />
      )
    }
    
    return (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`${baseInputClasses} ${errorClasses}`}
        style={{borderRadius: 'var(--radius-xl)'}}
        placeholder={placeholder}
        required={required}
      />
    )
  }

  return (
    <div>
      <label className="block text-sm font-semibold text-gray-300 mb-2">
        {label} {required && '*'}
      </label>
      {renderInput()}
      {error && (
        <p className="text-red-400 text-sm mt-2">{error}</p>
      )}
    </div>
  )
}

export default FormField