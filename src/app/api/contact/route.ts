import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        
        // Log the form data (dummy processing)
        console.log('Contact Form Submission:', {
            fullName: body.fullName,
            email: body.email,
            phone: body.phone,
            message: body.message,
            privacy: body.privacy,
            timestamp: new Date().toISOString()
        })

        // Simulate processing delay
        await new Promise(resolve => setTimeout(resolve, 1000))

        // Dummy success response
        return NextResponse.json(
            { 
                success: true, 
                message: 'Form submitted successfully!',
                data: {
                    id: Math.random().toString(36).substring(7),
                    submittedAt: new Date().toISOString()
                }
            },
            { status: 200 }
        )
    } catch (error) {
        console.error('Error processing contact form:', error)
        
        return NextResponse.json(
            { 
                success: false, 
                message: 'Failed to submit form. Please try again.' 
            },
            { status: 500 }
        )
    }
}