
# 24/7 News App

This project is a 24/7 News App built with React, leveraging the [FreeNewsAPI](https://newsapi.org/) to fetch the latest news from around the world. The app provides real-time news updates, categorized by different topics, and offers a seamless and responsive user experience.

![Screenshot (68)](https://github.com/user-attachments/assets/937d0443-7443-4b82-bdec-71019d84c5d2)



## Features

- **Real-Time News Updates**: Fetches the latest news articles 24/7 using the FreeNewsAPI.
- **Categorized News**: News is organized into various categories like technology, sports, business, entertainment, and more.
- **Responsive Design**: The app is fully responsive, providing a smooth experience on all device sizes.
- **Infinite Scroll**: Automatically loads more articles as the user scrolls down.

## Tech Stack

- **Frontend**: React, JavaScript, HTML, CSS and Bootstrap
- **API**: FreeNewsAPI
- **State Management**: React Hooks (useState, useEffect)
- **Build Tool**:Create React App 

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/samiansari01/News-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd news-app
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add your FreeNewsAPI key:
   ```bash
   REACT_APP_NEWS_API_KEY=your_api_key_here
   ```
5. Start the development server:
   ```bash
   npm start
   ```

## Usage

- **Browse News**: The home page displays the latest news articles across various categories.
- **Filter by Category**: Click on the categories to filter news articles by specific topics.

## Deployment

The app can be deployed to any static site hosting service like Vercel, Netlify, or GitHub Pages. Make sure to set your environment variables for the API key on the hosting platform.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [FreeNewsAPI](https://newsapi.org/) for providing the news data.
- React for the amazing frontend library.
- All contributors and users for their support.
