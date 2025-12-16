import { NextRequest, NextResponse } from 'next/server'
import { kv } from '@vercel/kv'

const CONTENT_KEY = 'admin_content'

async function getContent() {
  try {
    const content = await kv.get<Record<string, string>>(CONTENT_KEY)
    return content || {}
  } catch (e) {
    console.error('Error reading from KV:', e)
    return {}
  }
}

export async function GET() {
  try {
    const content = await getContent()
    return NextResponse.json(content)
  } catch (error) {
    console.error('Error in GET /api/admin/content:', error)
    return NextResponse.json({ error: 'Failed to load content' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { content } = body

    if (!content || typeof content !== 'object') {
      return NextResponse.json({ error: 'Invalid content' }, { status: 400 })
    }

    const existingContent = await getContent()
    const updatedContent = { ...existingContent, ...content }

    await kv.set(CONTENT_KEY, updatedContent)

    return NextResponse.json({ success: true, content: updatedContent })
  } catch (error) {
    console.error('Error in POST /api/admin/content:', error)
    return NextResponse.json({ error: 'Failed to save content' }, { status: 500 })
  }
}

