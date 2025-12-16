import { NextRequest, NextResponse } from 'next/server'

const CONTENT_KEY = 'admin_content'

async function getRedisClient() {
  try {
    if (process.env.REDIS_URL) {
      const Redis = (await import('ioredis')).default
      return new Redis(process.env.REDIS_URL)
    }
    
    if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
      const { kv } = await import('@vercel/kv')
      return kv
    }
    
    return null
  } catch (e) {
    console.error('Error creating Redis client:', e)
    return null
  }
}

async function getContent() {
  try {
    const client = await getRedisClient()
    if (!client) {
      console.warn('Redis not available, returning empty content')
      return {}
    }

    if (process.env.REDIS_URL) {
      const content = await (client as any).get(CONTENT_KEY)
      return content ? JSON.parse(content) : {}
    } else {
      const content = await (client as any).get<Record<string, string>>(CONTENT_KEY)
      return content || {}
    }
  } catch (e) {
    console.error('Error reading from Redis:', e)
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

    const client = await getRedisClient()
    if (!client) {
      console.error('Redis not available')
      return NextResponse.json({ 
        error: 'Redis not configured. Please set REDIS_URL or configure Vercel KV.',
        details: 'Make sure you have REDIS_URL environment variable set or have created a KV database in Vercel Storage.'
      }, { status: 503 })
    }

    const existingContent = await getContent()
    const updatedContent = { ...existingContent, ...content }

    if (process.env.REDIS_URL) {
      await (client as any).set(CONTENT_KEY, JSON.stringify(updatedContent))
    } else {
      await (client as any).set(CONTENT_KEY, updatedContent)
    }

    return NextResponse.json({ success: true, content: updatedContent })
  } catch (error: any) {
    console.error('Error in POST /api/admin/content:', error)
    return NextResponse.json({ 
      error: 'Failed to save content',
      details: error?.message || 'Unknown error'
    }, { status: 500 })
  }
}

