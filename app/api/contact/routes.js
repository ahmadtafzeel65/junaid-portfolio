// src/app/api/contact/route.js
export async function POST(request) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { name, email, subject, message } = body
    
    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: 'All fields are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email format' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // In production, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM
    
    // For now, simulate successful submission
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate processing

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Message sent successfully! I\'ll get back to you soon.' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })

  } catch (error) {
    console.error('Contact form error:', error)
    
    return new Response(JSON.stringify({ 
      error: 'Something went wrong. Please try again later.' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}