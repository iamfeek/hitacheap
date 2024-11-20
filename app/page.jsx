'use client';
import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { products } from './hitachi/data';

// Move the main component logic into a separate component
function HitachiCatalogContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    // Get categories from URL or default to empty array
    const initialCategories = searchParams.get('categories')?.split(',').filter(Boolean) || [];
    const [selectedCategories, setSelectedCategories] = useState(initialCategories);
    
    // Get unique categories from all products
    const allCategories = ['All', ...new Set(products.flatMap(product => product.categories))];
    
    // Filter products based on selected categories
    const filteredProducts = selectedCategories.length === 0 
        ? products 
        : products.filter(product => 
            selectedCategories.every(category => product.categories.includes(category))
        );

    const toggleCategory = (category) => {
        let newCategories;
        
        if (category === 'All') {
            newCategories = [];
            // Remove all query parameters by pushing to base path
            router.push(window.location.pathname);
        } else {
            if (selectedCategories.includes(category)) {
                newCategories = selectedCategories.filter(c => c !== category);
            } else {
                newCategories = [...selectedCategories, category];
            }
            
            // Update URL only for non-"All" categories
            const newUrl = newCategories.length 
                ? `?categories=${newCategories.join(',')}` 
                : '';
            router.push(newUrl);
        }
        
        setSelectedCategories(newCategories);
    };

    return (
        <div className="font-sans m-5 p-5">
            <h1 className="text-2xl font-bold mb-5">Product Catalog</h1>
            
            {/* Category Filter */}
            <div className="mb-5 flex flex-wrap gap-2">
                <button
                    onClick={() => toggleCategory('All')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                        ${selectedCategories.length === 0
                            ? 'bg-blue-500 text-white' 
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                >
                    All
                </button>
                {allCategories.filter(cat => cat !== 'All').map((category) => (
                    <button
                        key={category}
                        onClick={() => toggleCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                            ${selectedCategories.includes(category)
                                ? 'bg-blue-500 text-white' 
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                    >
                        {category} ({products.filter(p => p.categories.includes(category)).length})
                    </button>
                ))}
            </div>

            {/* Selected Filters */}
            {selectedCategories.length > 0 && (
                <div className="mb-5 flex flex-wrap gap-2 items-center">
                    <span className="text-sm text-gray-600">Active filters:</span>
                    {selectedCategories.map((category) => (
                        <span 
                            key={category}
                            className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                        >
                            {category}
                            <button 
                                onClick={() => toggleCategory(category)}
                                className="ml-2 text-blue-600 hover:text-blue-800"
                            >
                                ×
                            </button>
                        </span>
                    ))}
                    <button
                        onClick={() => toggleCategory('All')}
                        className="text-sm text-blue-500 hover:text-blue-700"
                    >
                        Clear all
                    </button>
                </div>
            )}

            {/* Results Count */}
            <div className="mb-5 text-sm text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
            </div>

            {/* Products Table */}
            <table className="w-full border-collapse mt-5">
                <thead>
                    <tr>
                        <th className="border border-gray-300 bg-gray-100 p-2 text-left sticky top-0">No</th>
                        <th className="border border-gray-300 bg-gray-100 p-2 text-left sticky top-0">Material Code</th>
                        <th className="border border-gray-300 bg-gray-100 p-2 text-left sticky top-0">Description</th>
                        <th className="border border-gray-300 bg-gray-100 p-2 text-left sticky top-0">Categories</th>
                        <th className="border border-gray-300 bg-gray-100 p-2 text-left sticky top-0">Dimensions (mm)</th>
                        <th className="border border-gray-300 bg-gray-100 p-2 text-left sticky top-0">Price (SGD)</th>
                        <th className="border border-gray-300 bg-gray-100 p-2 text-left sticky top-0">Search</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map((product) => (
                        <tr key={product.materialCode} className="even:bg-gray-50 hover:bg-gray-100">
                            <td className="border border-gray-300 p-2">{product.no}</td>
                            <td className="border border-gray-300 p-2">{product.materialCode}</td>
                            <td className="border border-gray-300 p-2">{product.description}</td>
                            <td className="border border-gray-300 p-2">
                                <div className="flex flex-wrap gap-1">
                                    {product.categories.map((category, index) => (
                                        <span 
                                            key={index}
                                            className={`inline-block px-2 py-1 text-xs font-medium rounded
                                                ${selectedCategories.includes(category)
                                                    ? 'bg-blue-500 text-white'
                                                    : 'bg-blue-100 text-blue-800'
                                                }`}
                                        >
                                            {category}
                                        </span>
                                    ))}
                                </div>
                            </td>
                            <td className="border border-gray-300 p-2">{product.dimensions}</td>
                            <td className="border border-gray-300 p-2 text-right">
                                {product.price.toFixed(2)}
                            </td>
                            <td className="border border-gray-300 p-2">
                                <a 
                                    href={product.searchUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm inline-block"
                                >
                                    Search
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

// Create the main page component that wraps the content in Suspense
export default function HitachiCatalog() {
    return (
        <Suspense fallback={<div className="font-sans m-5 p-5">Loading...</div>}>
            <HitachiCatalogContent />
        </Suspense>
    );
} 