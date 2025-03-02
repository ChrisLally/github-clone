# GitHub Clone

A modern, responsive GitHub UI clone built with Next.js, React, and Tailwind CSS. This project aims to recreate the GitHub interface with high fidelity while maintaining a clean, modular codebase.

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">Make your <a href="https://twitter.com/lovable_dev?ref_src=twsrc%5Etfw">@lovable_dev</a> / Bolt / v0 / Cursor / Replit websites look beautiful <a href="https://t.co/1WmNXPlphl">pic.twitter.com/1WmNXPlphl</a></p>&mdash; Daniel Dhawan (@daniel_dhawan) <a href="https://twitter.com/daniel_dhawan/status/1872766766910455989?ref_src=twsrc%5Etfw">December 27, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## 🚀 Live Demo

Check out the live demo deployed on Vercel: [GitHub Clone](https://github-clone-vercel.app)

## ✨ Features

- Responsive design that works on mobile, tablet, and desktop
- Dark mode UI matching GitHub's design system
- Modular component architecture
- Pull requests page with filtering options
- Profile view
- And more!

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [React](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide Icons](https://lucide.dev/) - Beautiful open-source icons

## 🏁 Getting Started

### Prerequisites

- Node.js (v16 or newer)
- pnpm package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/github-clone.git
cd github-clone
```

2. Install dependencies:

```bash
pnpm i
```

3. Start the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🧩 Project Structure

```
github-clone/
├── app/                  # Next.js app directory
├── components/           # React components
│   ├── header.tsx        # Site header
│   ├── pull-requests/    # Pull requests components
│   └── ...
├── public/               # Static assets
└── ...
```

## 🔄 Development Process

This project was built using the following workflow:

1. **Design Reference**: Components were based on the free [GitHub UI Kit](https://www.figma.com/community/file/1235155662725718346) from Figma.

2. **Initial Component Generation**: Used [v0.dev](https://v0.dev) to generate the initial component code based on the design.

3. **Code Refinement**: Used [Cursor](https://cursor.sh/) to clean up and refactor the generated code into modular components.

4. **Deployment**: Deployed the application on Vercel for easy access and sharing.

## 👥 Contributing

Contributions are welcome and appreciated! Here's how you can contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows the project's style and includes appropriate tests.

## 📝 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2023 Chris Lally

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

## 🙏 Acknowledgements

- [GitHub UI Kit](https://www.figma.com/community/file/1235155662725718346) for the design reference
- [v0.dev](https://v0.dev) for initial component generation
- [Cursor](https://cursor.sh/) for code editing and refinement
- [Vercel](https://vercel.com) for hosting the application
- [Daniel Dhawan](https://twitter.com/daniel_dhawan) for the Twitter showcase 