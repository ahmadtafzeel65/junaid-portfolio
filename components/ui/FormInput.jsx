// src/components/ui/FormInput.jsx
'use client'

import { motion } from 'framer-motion'

const FormInput = ({ label, type = 'text', name, value, onChange, required = false, placeholder }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <motion.input
        whileFocus={{ scale: 1.01 }}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full bg-primary-dark border border-secondary/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
      />
    </div>
  )
}

export default FormInput