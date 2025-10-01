import { useState, useCallback } from 'react'

export const useFormValidation = (initialValues, validationRules) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validate = useCallback((fieldName, value) => {
    const rule = validationRules[fieldName]
    if (!rule) return ''

    if (rule.required && (!value || value.trim() === '')) {
      return rule.message || `${fieldName} is required`
    }

    if (rule.email && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Please enter a valid email address'
    }

    if (rule.minLength && value && value.length < rule.minLength) {
      return `Minimum ${rule.minLength} characters required`
    }

    return ''
  }, [validationRules])

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setValues(prev => ({ ...prev, [name]: value }))
    
    const error = validate(name, value)
    setErrors(prev => ({ ...prev, [name]: error }))
  }, [validate])

  const validateAll = useCallback(() => {
    const newErrors = {}
    let isValid = true

    Object.keys(validationRules).forEach(field => {
      const error = validate(field, values[field])
      if (error) {
        newErrors[field] = error
        isValid = false
      }
    })

    setErrors(newErrors)
    return isValid
  }, [values, validate, validationRules])

  const reset = useCallback(() => {
    setValues(initialValues)
    setErrors({})
    setIsSubmitting(false)
  }, [initialValues])

  return {
    values,
    errors,
    isSubmitting,
    setIsSubmitting,
    handleChange,
    validateAll,
    reset
  }
}