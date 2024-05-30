# Next.js Sortable Item List

This is a Next.js application that reads a list of items from an external CSV file, fetches them via an API endpoint, and displays them in a sortable list. The items can be sorted by their creation date or filename, with special handling for filenames containing numeric parts.

## Features

- Fetches items from a CSV file and displays them in a grid.
- Supports sorting items by creation date (ascending) or filename (ascending and descending).
- Robust error handling to manage file read and parsing errors.
- Responsive UI with a simple and clean design.

## Requirements

The project requirements are detailed in the following document:
[Project Requirements](https://docs.google.com/document/d/1HTUDCpUtH1W5X4Hkp6YIT7pzfeIzvX6lIuswB5WPkpQ/edit)

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ahmd-tauqr/su-fsd.git
cd su-fsd
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Project Structure

- `app/api/items/route.ts`: API route to fetch and parse the CSV file.
- `components/ItemList.tsx`: Component to display and sort the list of items.
- `lib/sort.ts`: Sorting logic for the items.
- `public/data.csv`: Example CSV file with initial values.

## CSV File Format

The CSV file should be placed in the `public` directory and have the following format:

```csv
2023-06-25 11:00;1abc.txt
2023-06-25 12:00;abc.txt
2023-06-25 13:00;01abc.txt
2023-06-25 14:00;0010abc.txt
2023-06-25 15:00;011abc.txt
2023-06-25 16:00;20-abc.txt
2023-06-25 17:00;021-abc.txt
2023-06-25 18:00;002-abc.txt
2023-06-25 19:00;cba.txt
2023-06-25 20:00;abc010.txt
2023-06-25 21:00;abc1.txt
```

## Usage

1. Select the desired sorting method from the dropdown menu.
2. The list of items will update automatically based on the selected sorting method.

## Error Handling

- If the CSV file is not found or cannot be read, an error message will be displayed.
- Any errors during data fetching or parsing are logged to the console for debugging.

## License

This project is licensed under the MIT License.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [csv-parser](https://www.npmjs.com/package/csv-parser)
