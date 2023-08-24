# ProfileFuse

# Welcome to ProfileFuse - Your Open Source Linktree Alternative

ProfileFuse is a simple and customizable open-source alternative to services like Linktree, designed to help you showcase a collection of links important to you or your brand, all in one place. Whether you want to share your social media profiles, portfolio, blog, or any other online presence, ProfileFuse has got you covered. The best part? You have complete control over your data and the look of your page.

![ProfileFuse Screenshot](screenshot.png)

## Features

- **Easy to Use**: ProfileFuse is built with simplicity in mind. No coding experience required. Just follow the setup steps below and you'll have your page up and running.
- **Customizable**: Make your ProfileFuse page your own! You can easily customize the colors, fonts, and arrangement of your links to match your personal style or branding.

- **Open Source**: ProfileFuse is completely open source. This means you can contribute to its development, suggest features, report bugs, or even host your own version.

- **Powered by Astro**: ProfileFuse is built using [Astro](https://astro.build/), a powerful static site generator. This ensures fast loading times and great performance for your link page.

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the Repository**

   Open your terminal and run the following command to clone the ProfileFuse repository:

   ```bash
   git clone https://github.com/Pritam1136/ProfileFuse.git
   ```

2. **Navigate to the Project**

   Move into the project directory:

   ```bash
   cd ProfileFuse
   ```

3. **Install Dependencies**

   Install the required dependencies using npm:

   ```bash
   npm install
   ```

4. **Configure Your Links**

   Open the `src/content/data/your-github-username.md` file in your favorite text editor. You will find a section that looks like this, here is a example:

   ```md
   ---
   
   name: Bikash sahu
   slug: bikash4569
   img:
   content: Hello world 12
   links:
   [
   { platform: github, link: https://www.github.com },
   { platform: twitter, link: https://www.twitter.com },
   ]
   
   ---

   I am Bikas and i am a web developer. I am learning react.js right now.
   ```

Update the `links` array with your own links and their titles.

5. **Preview Your Site**

Run the development server to preview your ProfileFuse page:

```bash
npm run dev
```

Open your browser and visit `http://localhost:3000` to see your page in action.

6. **Customize**

   Want to customize the look? Open the `src/content/data/your-github-username.md` file to modify styles, fonts, and layout.

## Deployment

Once you're satisfied with your ProfileFuse page, it's time to deploy it!

You can deploy your ProfileFuse site to various platforms, such as Vercel, Netlify, GitHub Pages, or your own server. Check out the deployment guides for these platforms to get started.

## Contributing

Contributions to ProfileFuse are welcome! Whether you're a developer, designer, or just found a bug, we appreciate your input. Please refer to our [Contribution Guidelines](https://github.com/Pritam1136/ProfileFuse/blob/main/Contributing.md) for more information on how to contribute.

## License

ProfileFuse is released under the [MIT License](LICENSE).

---

Ready to share your important links with the world? ProfileFuse makes it easy. If you have any questions, issues, or ideas, feel free to open an issue on our GitHub repository. Happy linking!
