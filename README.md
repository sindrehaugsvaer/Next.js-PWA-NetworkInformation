# APW-project 2022

As part of the [NTNU](https://www.ntnu.edu/) Master's course [IMT4894 - Advanced Project Work](https://www.ntnu.edu/studies/courses/IMT4894/), I have developed a progressive web app (PWA) that utilizes [Web API's](https://developer.mozilla.org/en-US/docs/Web/API) to gather information on network connection and hardware, in order to dynamically render content. 

This technique ensures faster loading times and reduced latency.

The PWA is developed with [Next.js](https://nextjs.org/), a React web framework. 

## Check it out

- The app is publicly available on the cloud hosting platform [Netlify](https://netlify.com), and can be accessed [HERE](https://apw22.netlify.app/)


- The app instantly displays current stats retrieved from your browser. By scrolling down, some mock-articles with images and a video is presented.

- All the articles links to NASA, and the video is embedded from YouTube.

## Throttling network speed

- By accessing the development-tools in your browser (Chrome is recommended), and selecting the network-tab, the option of network-throttling is shown with "No throttling". "Fast 3g", "slow 3g", and "offline" can be selected. The default option is "no throttling", or 4g. 

- By playing with these, the stats on the app will change along with app content.

**Reminder:**\
*The Network Information API is still experimental, which means it is not supported by all browsers. Chrome is recommended.*

## Github repository
Source code available [HERE](https://github.com/sindrehaugsvaer/Next.js-PWA-NetworkInformation).

## Screenshots
![App Screenshot](./screenshots/screenshot_desktop_1.png?raw=true)
![App Screenshot](./screenshots/screenshot_desktop_2.png?raw=true)
![App Screenshot](./screenshots/screenshot_desktop_3.png?raw=true)
![App Screenshot](./screenshots/screenshot_mobile_1.png?raw=true)
![App Screenshot](./screenshots/screenshot_mobile_2.png?raw=true)
