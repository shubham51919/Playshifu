// API base URL - change this to your backend URL
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api"

// Generic fetch function with error handling
async function fetchAPI(endpoint: string, options = {}) {
    const url = `${API_URL}/${endpoint}`

    try {
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
            },
            ...options,
        })

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`)
        }

        return await response.json()
    } catch (error) {
        console.error(`Error fetching ${url}:`, error)
        throw error
    }
}

// Products
export async function getProducts(params = {}) {
    const queryParams = new URLSearchParams()

    // Add any filters to the query params
    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
            queryParams.append(key, String(value))
        }
    })

    const query = queryParams.toString() ? `?${queryParams.toString()}` : ""
    return fetchAPI(`products${query}`)
}

export async function getProductById(id: string) {
    return fetchAPI(`products/${id}`)
}

// Categories
export async function getCategories() {
    return fetchAPI("categories")
}

export async function getCategoryById(id: string) {
    return fetchAPI(`categories/${id}`)
}

export async function getProductsByCategory(categoryId: string, params = {}) {
    const queryParams = new URLSearchParams()

    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
            queryParams.append(key, String(value))
        }
    })

    const query = queryParams.toString() ? `?${queryParams.toString()}` : ""
    return fetchAPI(`categories/${categoryId}/products${query}`)
}

// Age Groups
export async function getAgeGroups() {
    return fetchAPI("age-groups")
}

export async function getAgeGroupById(id: string) {
    return fetchAPI(`age-groups/${id}`)
}

export async function getProductsByAgeGroup(ageGroupId: string, params = {}) {
    const queryParams = new URLSearchParams()

    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
            queryParams.append(key, String(value))
        }
    })

    const query = queryParams.toString() ? `?${queryParams.toString()}` : ""
    return fetchAPI(`age-groups/${ageGroupId}/products${query}`)
}

// Testimonials
export async function getTestimonials(params = {}) {
    const queryParams = new URLSearchParams()

    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
            queryParams.append(key, String(value))
        }
    })

    const query = queryParams.toString() ? `?${queryParams.toString()}` : ""
    return fetchAPI(`testimonials${query}`)
}

// Media Features
export async function getMediaFeatures(params = {}) {
    const queryParams = new URLSearchParams()

    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
            queryParams.append(key, String(value))
        }
    })

    const query = queryParams.toString() ? `?${queryParams.toString()}` : ""
    return fetchAPI(`media-features${query}`)
}

// Awards
export async function getAwards() {
    return fetchAPI("awards")
}

// Banners
export async function getBanners(params = {}) {
    const queryParams = new URLSearchParams()

    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
            queryParams.append(key, String(value))
        }
    })

    const query = queryParams.toString() ? `?${queryParams.toString()}` : ""
    return fetchAPI(`banners${query}`)
}

// Partners
export async function getPartners() {
    return fetchAPI("partners")
}
