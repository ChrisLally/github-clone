# GitHub Clone

A modern, responsive GitHub UI clone built with Next.js 15, React, Tailwind CSS 3, and shadcn/ui components. This project aims to recreate the GitHub interface with a focus on clean code and component-based architecture.

![GitHub Clone Screenshot](https://github.com/ChrisLally/github-clone/public/screenshot.png)

## Live Demo

Check out the live demo deployed on Vercel: [GitHub Clone](https://github-clone-vercel.app)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FChrisLally%2Fgithub-clone)

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Headless UI components)
- **Deployment**: [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- pnpm (v7 or later) or npm (v8 or later)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/github-clone.git
cd github-clone
```

2. Install dependencies:

Using pnpm (recommended):
```bash
pnpm install
```

Or using npm:
```bash
npm install
```

3. Start the development server:

Using pnpm:
```bash
pnpm dev
```

Or using npm:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
├── app/                  # Next.js app directory
├── components/           # React components
│   ├── header.tsx        # Header component
│   ├── pull-requests/    # Pull requests components
│   └── ...               # Other components
├── public/               # Static assets
└── ...
```

## Development Process

This project was built using the following process:

1. **Design Inspiration**: Components were designed based on the free [GitHub UI Kit](https://www.figma.com/community/file/1235155662725718346) available on Figma.

2. **Component Generation**: Initial components were generated using [v0.dev](https://v0.dev), an AI-powered component generator. lovable.com, bolt.new and others could also be worth trying!

3. **Code Refinement**: Components were then refined and optimized using [Cursor](https://cursor.sh), an AI-powered code editor, to ensure clean, maintainable code. Windsurf and others could also be worth trying!

4. **Component Architecture**: The codebase was structured into modular, reusable components following React best practices.

## Contributing

Contributions are welcome and encouraged! Here's how you can contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows the project's style guidelines and includes appropriate tests.

## Roadmap

- [ ] Add authentication
- [ ] Implement repository view
- [ ] Add issues page
- [ ] Create profile page
- [ ] Add dark/light theme toggle

## License

This project is licensed under the MIT License - see below for details:

```
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Acknowledgments

- [GitHub UI Kit](https://www.figma.com/community/file/1235155662725718346) for design inspiration
- [v0.dev](https://v0.dev) for initial component generation
- [Cursor](https://cursor.sh) for AI-powered code editing
- [Vercel](https://vercel.com) for hosting the application 