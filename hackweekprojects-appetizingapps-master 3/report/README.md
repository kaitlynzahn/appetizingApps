# Link and Report

## URL
https://www.kaitlyn-zahn.com/appetizingApps/

Pre-made account:

- Email: test@test.com
- Password: pass2020

## Introduction
#### Group Name
Appetizing Apps
#### Group members
Haley Massa, Genevieve Saab, Kaitlyn Zahn
#### Background information
For our final project, we built an Ionic app that displays information and menus for restaurants in Columbia, MO. The application can be accessed from the URL above, or can be downloaded as an Android app using the .apk file included in the submission. Users will need to sign in or register a new account in order to gain access to the application. Once logged in, users can see a list of various restaurants in Columbia on the "Explore" page, view their menus by clicking on the restaurant, add and remove restaurants from their favorites with the "star button", and view all of their favorited restaurants on the "Favorites" page.

## Problem 
How often do you sit around with your friends going back and forth about what you want to eat? No one wants to make the decision. The purpose of our app is to simplify this decision-making by finding restaurants' menus in Columbia, MO. Whether it be that you can't decide what you're hungry for, you're new to town, or you're looking to try somewhere new, deciding where to eat can often be far more difficult than it needs to be. Even though most restaurants now have a website with their menu, navigating between multiple websites and making note of which restaurants interest you can be quite time-consuming. Our goal is to simplify this process.

## Solution
Our cross-platform app addresses the problem described above by organizing information from numerous restaurants into one application. This way, users can access menus from restaurants all over town with just a few clicks. In addition to being able to view a large selection of businesses and their menus, users can star their favorite restaurants for quick access in the future. This minimizes searching and consolidates your options into a more manageable list. Our user-friendly UI and specific Columbia, MO demographic is perfect for searching through your options and finding the perfect meal. 

## Related Work
There are not a ton of competitors for this specific web application because this solution is specific to Columbia. The cool part about Appetizing Apps is that it has such a specialized demographic. This app is really beneficial to Mizzou students and Columbia natives since it’s specialized for Columbia restaurants.

Some web applications that are comparable are Tripadvisor and Yelp. Both of these are popular applications, but they didn’t quite give us what we were looking for to solve this decision-making issue. First, neither of these are Columbia or restaurant specific. Another huge issue we had with these websites is that neither of them display the full menu for restaurants. Their UIs were also not very user-friendly as they required users to navigate through multiple pages, clicking back and forth to find what you’re looking for. Finally, the struggle with ads invading the content and overshadowing smaller businesses was also frustrating. 

We found that Appetizing Apps was a better solution because it is so specific to restaurants in Columbia. The UI is straightforward and is easy to use for users whether they’re on a desktop or mobile. Our app also focuses on the menu items themselves, scraping each restaurant’s menu to display the full menu at just the click of a button. 


## Implementation
We decided on using Ionic and Angular to implement the frontend of our application because we wanted to create a user-friendly UI for both mobile and desktop browsers and we also wanted the ability to create Android and iOS apps. For our database, we used Firebase Firestore because of its capabilities and because it works so seamlessly with Google Cloud Functions, which we used for our scrapers. To build these web scrapers, we used Beautiful Soup, which was a new technology to us, but ended up being really beneficial for our project. Finally, our progressive web application is hosted on our Amazon EC2 web server, which runs a LAMP stack.

We divided the implementation of this project up into three categories: frontend, backend, and data and databases. Genevieve Saab was responsible for front end, meaning she designed and implemented the user interface. Haley Massa worked on the backend and was responsible for user authentication, route guards, and retrieving data from the database. Kaitlyn Zahn's primary role was working with the database and writing the web scrapers that populated the database.

**Where to look for grading purposes:**

#### Consistent Design and User Experience
The styles for the pages all use the same colors, which can be found in their corresponding scss files. As for user experience, the simple and common layout of all the pages makes it easy for the general user to understand how to use the application. The footer and side menu keep the UI consistent and allow for easy navigation for the user. 

1. Login/Register Page is in pages/login/login.page.html

   ![login](../screenshots/code/pages/login/login.page.html1.png)

   ![login](../screenshots/code/pages/login/login.page.html2.png)

2. Explore Page is in pages/home/home.page.html

   ![home](../screenshots/code/pages/home/home.page.html.png)

3. Favorites Page is in pages/favorites/favorites.page.html

   ![favorites](../screenshots/code/pages/favorites/favorites.page.html1.png)

   ![favorites](../screenshots/code/pages/favorites/favorites.page.html2.png)

4. Menu Page is in pages/menu/menu.page.html

   ![menu](../screenshots/code/pages/menu/menu.page.html.png)

5. Error Page is in pages/error/error.page.html

   ![error](../screenshots/code/pages/error/error.page.html.png)


#### Well-Structured

1. Since a toolbar is used on both the "Explore" and "Favorites" pages, it was made into a component to better organize the code. This can be found in components/footer/footer.component.html.

   ![footer](../screenshots/code/components/footer/footer.component.html.png)

2. Pages, components, services, types, and pipes are all divided into separate folders to keep all the code organized and easy to find.

#### Authentication

1. Code for the authentication can be found in pages/login/login.page.ts.

   ![login](../screenshots/code/pages/login/login.page.ts1.png)

   ![login](../screenshots/code/pages/login/login.page.ts2.png)

   ![login](../screenshots/code/pages/login/login.page.ts3.png)

#### Architecture 

1. Our application's code is organized with MVC. Each page has a corresponding model, view, and controller. The models are kept in the service folder, controllers are the typescript files for the various pages, and the view is in the html files for all the pages.

#### Persistent

1. Firebase Firestore is used to keep data persistent. If you ever exit/logout of the application and come back, your favorited restaurants will still be there. 

#### Security

1. Auth Guards are used to prevent URL hacking, and you can see them being used in the app-routing.module.ts file. 

   ![routing](../screenshots/code/app/app-routing.module.ts1.png)

   ![routing](../screenshots/code/app/app-routing.module.ts2.png)

2. The hosted site uses HTTPS (https://www.kaitlyn-zahn.com/appetizingApps/).

#### Responsive

1. Using a responsive grid makes the "Explore" and "Favorites" pages display well on both a desktop and mobile. There is also specific CSS that only applies when the device is at a certain screen size. This can be seen in the pages/home/home.page.scss file, for example. 

   ![screen](../screenshots/code/pages/home/home.page.scss.png)

2. These screenshots show how the display changes to work on both desktop and mobile:

   Desktop Explore Page

   ![desktop](../screenshots/application/explore.png)

   

   Mobile Explore Page

   ![routing](../screenshots/mobile/explore.png)

#### Content

1. After logging in, all the restaurants are displayed on the "Explore" page. If you login with the pre-made account, then some restaurants will already be favorited. 

#### Error Handling and User Feedback

 1. There are numerous error checks for the login and registration, which 	can be found in pages/login/login.page.ts (lines 61-73 and 90-107).  These errors are displayed as alerts.

    Incorrect Email

    ![error-handling](../screenshots/application/loginEmailError.png)

    

    Incorrect Password

    ![error-handling](../screenshots/application/loginPasswordError.png)

    

    Invalid Email

    ![error-handling](../screenshots/application/registerEmailError.png)

    

    Email Already Taken

    ![error-handling](../screenshots/application/registerEmailTakenError.png)

    

    Weak Password

    ![error-handling](../screenshots/application/registerPasswordStrengthError.png)

#### Publicly Viewable

1. This app is hosted on an Amazon AWS server and be be viewed using this URL: https://www.kaitlyn-zahn.com/appetizingApps/

#### Overall Purpose

1. The application aims to solve a common problem of deciding where you want to eat, this is discussed more in the problem and solution section.

#### Data Collection with Reactive Forms

1. Data is collected with reactive forms when users register for an account. See the login page in the pages folder to view the html and typescript files. 

#### Above and Beyond

1. Multiple scrapers were made to scrape the menus from the restaurants (a total of three). This took extra time and required extra data. 

2. We also generated a .apk file for users to be able to download our application as an Android app

#### End-Points Load Correctly

1. Currently, there is a .htaccess file on the server where the project is hosted, but there is still an issue with loading the correct page through the URL. 

#### Production Build for Security

1. The project was successfully built with a production build and that is what is hosted on the server. 

## Knowledge gained

Overall, this project was really beneficial in sharpening our knowledge on so much of what we learned in this class. Since we all worked on different areas of the application, we each learned something different:

### Frontend (Genevieve):

I mostly learned about many different Ionic UI Components because I was not familiar with many of them and had to read through Ionic documentation to determine what I wanted to use.

On the login, I found that Ionic segments were the best option to navigate to the login and register forms (forms are displayed accordingly with an ngSwitch)

![login](../screenshots/application/login.png)



There is a toolbar in the footer to navigate between pages, and I learned that something that is used on each page can be made into its own component to simplify adding it to all the pages.

![toolbar](../screenshots/application/favorites.png)



I also learned how to add in an Ionic Menu. The menu in the top-left can be clicked to logout and show some about information. 

![menu](../screenshots/application/appMenu.png)



Finally, I learned how a responsive grid is extremely useful in creating a responsive application that makes the display seamlessly transition between desktop and mobile.

It was fun to look more into Ionic and this will help me create apps in the future faster because I am already familiar with various components. 

### Backend (Haley):

In terms of backend technologies, this project taught me a lot about asynchronous JavaScript and how to handle data from these asynchronous functions. Earlier in the semester I tried using asynchronous functions with IndexedDB and I really struggled with it, so I am very glad I got the opportunity to learn more and actually implement something with these new skills. I also gained experience using Angular pipes, especially the async pipe that helps display asynchronous data items. I also had the opportunity to create my own pipe to implement the favorite functionality, so that definitely helped me understand more about the feature. In addition, this was my first time using Firestore, so I learned a lot about retrieving and storing data as well as handling errors from the database. I really enjoyed working with Firebase and Firestore because it drastically simplifies things like user authenitication and connecting to and querying the database. Finally, I learned more about Angular and Ionic production standards and best practices, which will definitely be a beneficial skill should I pursue a career in web development. 


### Data & Database (Kaitlyn):

This entire project was a learning experience for me in regards to databases. This project made me more comfortable with non-relational databases in general. Before this application, I never worked extensively with non-relational databases. I had never written a program that used Firebase Firestore before, so I relied heavily on Professor Wergeles' lectures in doing so. Working with Google Cloud Functions was also new to me and working with this for the scrapers made me more comfortable with Firebase overall. I am also relatively new to web scraping and explored Scrapy further, but ultimately decided to use Beautiful Soup which meant learning and working with this entirely new scraper. This included reading documentation and working through issues as I attempted to scrape pages. Earlier in the semester, I had a hard time with Scrapy and didn't truly understand how it worked, but writing so many scrapers for this application was really beneficial for me. Looking into Beautiful Soup gave me a greater understanding of the potential of web scraping while also familiarizing me with inspecting pages and using selectors to grab items. Overall, I learned a lot about non-relational databases, web scraping, and connecting Firestore and Google Cloud Functions to a frontend. 

## Future Work
One thing that’s really exciting about Appetizing Apps is that there is so much potential for continued growth. A time-consuming, but valuable next step that we want to take is scraping more restaurants’ websites to continue to add data to the application. The goal is that it would be populated with all of Columbia’s most popular restaurants’ menus. Another feature to implement in the future is to grab images from the website’s menus. The main reason we didn’t previously grab these is because those that we scraped didn’t have images on their corresponding websites. To enhance the user experience, we also want to add a system for users to review and rate restaurants and menu items. Many of our competitor sites have this functionality and it provides users with valuable information, so including a rating and review system in our application would make it even more competitive. In addition, we also want to categorize restaurants by type so that users can filter results to their specifications. Similarly, we also want to create a function that allows the user to search for something specific, say “grilled cheese” and have that menu item and all of the restaurants that offer it show up. For the customer's convenience, we could also link an online ordering system for restaurants that support it.


## Bonus Opportunities

1. We submitted our code by the original due date, Sunday, November 22

2. We presented our application before the presentation due date on Thursday, December 3

3. Writing multiple scrapers 

4. Generating the .apk file for Android applications

5. Attendance and interaction during presentations
