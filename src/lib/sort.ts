interface Item {
  createdAt: string;
  filename: string;
}

function extractAndConvertNumbers(str: string): string {
  if (typeof str !== 'string') {
    return '';
  }
  return str.replace(/\d+/g, (num) => String(Number(num)).padStart(10, '0'));
}

export function sortFileNames(mode: string, files: Item[]): Item[] {
  if (mode === 'CREATED_AT_ASC') {
    return files.sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
  } else if (mode === 'FILE_NAME_ASC') {
    return files.sort((a, b) =>
      extractAndConvertNumbers(a.filename).localeCompare(
        extractAndConvertNumbers(b.filename)
      )
    );
  } else if (mode === 'FILE_NAME_DSC') {
    return files.sort((a, b) =>
      extractAndConvertNumbers(b.filename).localeCompare(
        extractAndConvertNumbers(a.filename)
      )
    );
  }
  return files;
}
