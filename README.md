<div id="top"></div>

## Built With

* [Expo](https://docs.expo.dev/)
* [React Native](https://reactnative.dev/)
* [UI Kitten](https://akveo.github.io/react-native-ui-kitten/)
* [TypeScript](https://www.typescriptlang.org/)
* [Yarn](https://yarnpkg.com/)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

We are using Expo to expedite development of the app.

### Installation

You'll need to install a few things before you can build and run the project.

#### Install Expo:
`npm install --global expo-cli`

#### Install Yarn:
`npm install -g yarn`

#### Install Dependencies
Make sure you're in the project root and run:
`yarn install`


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

To run boot the app, you'll want to run:

`expo start`

and then once expo is loaded in your browser you can click "Run on iOS Simulator"

<p align="right">(<a href="#top">back to top</a>)</p>

## Developers

### Defining Icons
`common/utils/asset-icons.tsx` and 
`common/views/general/Icon.tsx` renders an icon via specifying a name.

The name should be defined in `common/utils/asset-icons.tsx`.

### Using Icons
Add a svg file in a directory, and define it in asset-icons.tsx then please import Icon from Icon.tsx file and specify the name + size of icon.

<!-- CONTRIBUTING -->
## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Unicorn/MAV-VS.svg?style=for-the-badge
[contributors-url]: https://github.com/Unicorn/MAV-VS/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Unicorn/MAV-VS.svg?style=for-the-badge
[forks-url]: https://github.com/Unicorn/MAV-VS/network/members
[stars-shield]: https://img.shields.io/github/stars/Unicorn/MAV-VS.svg?style=for-the-badge
[stars-url]: https://github.com/Unicorn/MAV-VS/stargazers
[issues-shield]: https://img.shields.io/github/issues/Unicorn/MAV-VS.svg?style=for-the-badge
[issues-url]: https://github.com/Unicorn/MAV-VS/issues
[license-shield]: https://img.shields.io/github/license/Unicorn/MAV-VS.svg?style=for-the-badge
[license-url]: https://github.com/Unicorn/MAV-VS/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png


<!-- how to use the fonts? -->
First of all, keep all the fonts in your project folder named as `@/common/assets/fonts` with .ttf format.

Install the package 'expo-font'
After installing the package, first load the fonts.

After loading the font you can use the key in the fontFamily style prop of a Text element.
Check the helper.ts file. (common\helpers.ts)

