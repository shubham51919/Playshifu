import { type NextRequest, NextResponse } from "next/server"

// This is a proxy API route to avoid CORS issues when calling the backend from the client
export async function GET(request: NextRequest, { params }: { params: { path: string[] } }) {
  try {
    const path = params.path.join("/")
    const apiUrl = `${process.env.API_URL || "http://localhost:5000/api"}/${path}`

    // Forward the search params
    const url = new URL(request.url)
    const queryString = url.search
    const fullUrl = `${apiUrl}${queryString}`

    const response = await fetch(fullUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    })

    const data = await response.json()

    return NextResponse.json(data)
  } catch (error) {
    console.error("API proxy error:", error)
    return NextResponse.json({ error: "Failed to fetch data from API" }, { status: 500 })
  }
}

export async function POST(request: NextRequest, { params }: { params: { path: string[] } }) {
  try {
    const path = params.path.join("/")
    const apiUrl = `${process.env.API_URL || "http://localhost:5000/api"}/${path}`

    const body = await request.json()

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })

    const data = await response.json()

    return NextResponse.json(data)
  } catch (error) {
    console.error("API proxy error:", error)
    return NextResponse.json({ error: "Failed to post data to API" }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest, { params }: { params: { path: string[] } }) {
  try {
    const path = params.path.join("/")
    const apiUrl = `${process.env.API_URL || "http://localhost:5000/api"}/${path}`

    const body = await request.json()

    const response = await fetch(apiUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })

    const data = await response.json()

    return NextResponse.json(data)
  } catch (error) {
    console.error("API proxy error:", error)
    return NextResponse.json({ error: "Failed to update data in API" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { path: string[] } }) {
  try {
    const path = params.path.join("/")
    const apiUrl = `${process.env.API_URL || "http://localhost:5000/api"}/${path}`

    const response = await fetch(apiUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })

    const data = await response.json()

    return NextResponse.json(data)
  } catch (error) {
    console.error("API proxy error:", error)
    return NextResponse.json({ error: "Failed to delete data from API" }, { status: 500 })
  }
}
