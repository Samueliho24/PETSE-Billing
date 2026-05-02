import React, { useState } from 'react'

// Login page. Minimal UI with client-side form handling.
export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      if (res.ok) {
        // Redirige a una ruta de onboarding/dashboard tras login exitoso
      } else {
        const data = await res.json()
        setError(data?.message || 'Error de inicio de sesion')
      }
    } catch (err) {
      setError('Error de red')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div style={containerStyle}>
        <form onSubmit={handleSubmit} style={formStyle}>
          <h1 style={{ marginTop: 0 }}>Iniciar sesion</h1>
          {error && <p style={errorStyle}>{error}</p>}
          <label style={labelStyle}>
            Correo electronico
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={inputStyle}
            />
          </label>
          <label style={labelStyle}>
            Contrasena
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={inputStyle}
            />
          </label>
          <button type="submit" disabled={loading} style={buttonStyle}>
            {loading ? 'Iniciando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </>
  )
}

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '80vh',
  padding: '1rem',
  background: '#f7f7f7',
}
const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  width: '100%',
  maxWidth: '420px',
  padding: '2rem',
  border: '1px solid #e5e5e5',
  borderRadius: '8px',
  background: '#fff',
  boxShadow: '0 2px 8px rgba(0,0,0,.04)'
}
const labelStyle = {
  display: 'flex',
  flexDirection: 'column',
  fontSize: '0.9rem',
  color: '#333',
}
const inputStyle = {
  padding: '0.75rem 0.9rem',
  fontSize: '1rem',
  borderRadius: '6px',
  border: '1px solid #ccc',
  marginTop: '4px',
}
const buttonStyle = {
  padding: '0.75rem 1rem',
  fontSize: '1rem',
  borderRadius: '6px',
  border: 'none',
  background: '#0070f3',
  color: '#fff',
  cursor: 'pointer',
}
const errorStyle = { color: '#d32f2f', margin: 0 }
