// src/app/categories/page.tsx

import CategoryMenu from '../components/CategoryMenu';

interface Category {
  _id: string;
  name: string;
  children?: Category[];
}

export default async function CategoriesPage() {
  const res = await fetch('http://localhost:3000/categories/with-children', {
    cache: 'no-store',
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }
  
  const categories: Category[] = await res.json();
  
  return (
    <div>
      <h1>Categories</h1>
      <CategoryMenu categories={categories} />
    </div>
  );
}
