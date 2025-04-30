// src/app/not-found.tsx
import Link from 'next/link'

export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
            <div className="text-center max-w-md">

                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h1 className="text-4xl font-medium text-gray-800 mb-2">Under Construction</h1>
                    <div className="flex justify-center my-4">
                        <div className="h-2 w-24 bg-amber-400 rounded-full"></div>
                    </div>
                    <p className="text-gray-600 mb-6">
                        We're working hard to build something awesome! This page is currently under construction and will be available soon.
                    </p>
                    <Link
                        href="/"
                        className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors inline-flex items-center"
                    >
                        <span>Back to Home</span>
                    </Link>
                </div>

                <div className="mt-8 flex justify-center">
                    <div className="flex space-x-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div
                                key={i}
                                className={`w-3 rounded-full bg-amber-400 animate-bounce`}
                                style={{
                                    height: `${12 + i * 4}px`,
                                    animationDelay: `${i * 0.1}s`,
                                    animationDuration: '1s'
                                }}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}