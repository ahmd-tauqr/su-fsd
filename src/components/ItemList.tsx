'use client';

import { useState, useEffect } from 'react';
import { sortFileNames } from '../lib/sort';

interface Item {
  createdAt: string;
  filename: string;
}

export default function ItemList() {
  const [items, setItems] = useState<Item[]>([]);
  const [sortedItems, setSortedItems] = useState<Item[]>([]);
  const [sortMode, setSortMode] = useState<string>('CREATED_AT_ASC');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/items')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch items');
        }
        return res.json();
      })
      .then((data: Item[]) => {
        setItems(data);
      })
      .catch((error) => {
        setError('Could not load items. Please try again later.' + error);
      });
  }, []);

  useEffect(() => {
    setSortedItems(sortFileNames(sortMode, [...items]));
  }, [sortMode, items]);

  return (
    <div className='p-4 bg-gray-800 min-h-screen'>
      <div className='max-w-2xl mx-auto'>
        <div className='flex justify-between items-center mb-4'>
          <h1 className='text-xl text-white'>Sortable Item List</h1>
          <select
            value={sortMode}
            onChange={(e) => setSortMode(e.target.value)}
            className='p-2 bg-gray-700 text-white rounded'
          >
            <option value='CREATED_AT_ASC'>
              Sort by Created At - Ascending
            </option>
            <option value='FILE_NAME_ASC'>Sort by Filename - Ascending</option>
            <option value='FILE_NAME_DSC'>Sort by Filename - Descending</option>
          </select>
        </div>
        {error ? (
          <div className='text-red-500 text-center'>{error}</div>
        ) : (
          <div className='grid grid-cols-2 gap-4'>
            {sortedItems.map((item, index) => (
              <div
                key={index}
                className='bg-gray-700 text-white rounded p-4 flex flex-col items-center'
              >
                <div className='text-center mb-2 text-sm text-gray-400'>
                  {item.createdAt}
                </div>
                <div className='text-center text-lg'>{item.filename}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
