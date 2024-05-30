import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

interface Item {
  createdAt: string;
  filename: string;
}

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'data.csv');
  const results: Item[] = [];

  return new Promise<Response>((resolve, reject) => {
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        return reject(new Error('CSV file not found'));
      }

      fs.createReadStream(filePath)
        .pipe(csv({ separator: ';', headers: ['createdAt', 'filename'] }))
        .on('data', (data: Item) => results.push(data))
        .on('end', () => {
          const response = NextResponse.json(results);
          response.headers.set('Cache-Control', 'no-store');
          resolve(response);
        })
        .on('error', (error) => {
          reject(new Error('Failed to parse CSV file: ' + error.message));
        });
    });
  }).catch((error) => {
    console.error('API error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  });
}
