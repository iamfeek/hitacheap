'use client';
import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { products } from './hitachi/data';

function HitachiCatalogContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    const initialCategories = searchParams.get('categories')?.split(',').filter(Boolean) || [];
    const [selectedCategories, setSelectedCategories] = useState(initialCategories);
    const [isTableScrollable, setIsTableScrollable] = useState(true);
    
    const allCategories = ['All', ...new Set(products.flatMap(product => product.categories))];
    
    const filteredProducts = selectedCategories.length === 0 
        ? products 
        : products.filter(product => 
            selectedCategories.every(category => product.categories.includes(category))
        );

    const toggleCategory = (category) => {
        let newCategories;
        
        if (category === 'All') {
            newCategories = [];
            router.push(window.location.pathname);
        } else {
            if (selectedCategories.includes(category)) {
                newCategories = selectedCategories.filter(c => c !== category);
            } else {
                newCategories = [...selectedCategories, category];
            }
            
            const newUrl = newCategories.length 
                ? `?categories=${newCategories.join(',')}` 
                : '';
            router.push(newUrl);
        }
        
        setSelectedCategories(newCategories);
    };

    return (
        <div className="max-w-full px-2 sm:px-4 md:px-6 py-4">
            <h1 className="text-xl sm:text-2xl font-bold mb-4">Product Catalog</h1>
            
            {/* Category Filter - Scrollable on mobile */}
            <div className="mb-4 overflow-x-auto pb-2">
                <div className="flex flex-nowrap gap-2 min-w-min">
                    <button
                        onClick={() => toggleCategory('All')}
                        className={`whitespace-nowrap px-3 py-1.5 rounded-full text-sm font-medium transition-colors
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
                            className={`whitespace-nowrap px-3 py-1.5 rounded-full text-sm font-medium transition-colors
                                ${selectedCategories.includes(category)
                                    ? 'bg-blue-500 text-white' 
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            {category} ({products.filter(p => p.categories.includes(category)).length})
                        </button>
                    ))}
                </div>
            </div>

            {/* Selected Filters - Scrollable on mobile */}
            {selectedCategories.length > 0 && (
                <div className="mb-4 overflow-x-auto">
                    <div className="flex flex-nowrap gap-2 items-center min-w-min pb-2">
                        <span className="text-sm text-gray-600 whitespace-nowrap">Active filters:</span>
                        {selectedCategories.map((category) => (
                            <span 
                                key={category}
                                className="inline-flex items-center px-2 py-1 rounded-full text-sm bg-blue-100 text-blue-800 whitespace-nowrap"
                            >
                                {category}
                                <button 
                                    onClick={() => toggleCategory(category)}
                                    className="ml-1 text-blue-600 hover:text-blue-800"
                                >
                                    ×
                                </button>
                            </span>
                        ))}
                        <button
                            onClick={() => toggleCategory('All')}
                            className="text-sm text-blue-500 hover:text-blue-700 whitespace-nowrap"
                        >
                            Clear all
                        </button>
                    </div>
                </div>
            )}

            {/* Results Count */}
            <div className="mb-4 text-sm text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
            </div>

            {/* Mobile View - Cards */}
            <div className="md:hidden grid gap-4">
                {filteredProducts.map((product) => (
                    <div key={product.materialCode} className="bg-white rounded-lg shadow p-4">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-sm text-gray-500">#{product.no}</span>
                            <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                        </div>
                        <h3 className="font-medium mb-2">{product.description}</h3>
                        <div className="text-sm text-gray-600 mb-2">{product.dimensions}</div>
                        <div className="flex flex-wrap gap-1 mb-3">
                            {product.categories.map((category, index) => (
                                <span 
                                    key={index}
                                    className={`inline-block px-2 py-0.5 text-xs font-medium rounded
                                        ${selectedCategories.includes(category)
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-blue-100 text-blue-800'
                                        }`}
                                >
                                    {category}
                                </span>
                            ))}
                        </div>
                        <a 
                            href={product.searchUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full block text-center px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                        >
                            Search Images
                        </a>
                    </div>
                ))}
            </div>

            {/* Desktop View - Table */}
            <div className="hidden md:block overflow-x-auto -mx-2 sm:mx-0">
                <table className="w-full border-collapse min-w-[800px]">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 bg-gray-100 p-2 text-left">No</th>
                            <th className="border border-gray-300 bg-gray-100 p-2 text-left">Description</th>
                            <th className="border border-gray-300 bg-gray-100 p-2 text-left">Categories</th>
                            <th className="border border-gray-300 bg-gray-100 p-2 text-left">Dimensions</th>
                            <th className="border border-gray-300 bg-gray-100 p-2 text-left">Price (SGD)</th>
                            <th className="border border-gray-300 bg-gray-100 p-2 text-left">Search</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map((product) => (
                            <tr key={product.materialCode} className="even:bg-gray-50 hover:bg-gray-100">
                                <td className="border border-gray-300 p-2">{product.no}</td>
                                <td className="border border-gray-300 p-2 min-w-[200px]">{product.description}</td>
                                <td className="border border-gray-300 p-2 min-w-[200px]">
                                    <div className="flex flex-wrap gap-1">
                                        {product.categories.map((category, index) => (
                                            <span 
                                                key={index}
                                                className={`inline-block px-2 py-0.5 text-xs font-medium rounded
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
                                <td className="border border-gray-300 p-2 min-w-[180px]">{product.dimensions}</td>
                                <td className="border border-gray-300 p-2 text-right">{product.price.toFixed(2)}</td>
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
        </div>
    );
}

export default function HitachiCatalog() {
    return (
        <Suspense fallback={<div className="p-4">Loading...</div>}>
            <HitachiCatalogContent />
        </Suspense>
    );
} 