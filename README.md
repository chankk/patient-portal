# Patient Portal

:construction: This project is under construction.

**Demos**:

-   [View the live website](https://patient-portal-lake.vercel.app/)

-   [See initial designs on Figma](https://www.figma.com/proto/M3cqtNItwATCM8WwJEYlA4/Patient-Portal?node-id=141-7974&starting-point-node-id=141%3A7985&t=KuSfR42GYZRBcTku-1)

## Description

**Goal:** Prototype a website where patients can access their medical records, communicate with healthcare providers, and locate healthcare services.

**Target Users:** Albertan patients

**Background:** This project started as a technical assessment. I was given 10 hours to create wireframes and a front-end implementation of a patient portal web application for desktop. Since then, I've continued development to grow my skills. Data is fictional and loosely based on Alberta's healthcare system.

## Technology

**Web:**

-   **React**: JavaScript library used to build the user interface.
-   **Next.js**: React framework for server-side rendering and static-site generation.
-   **Material UI**: React UI framework, for components based on Google's Material Design.
-   **TypeScript**: JavaScript superset that adds static types.

**Data:**

-   **PostgreSQL**: Relational database used to store and manage data.
-   **Prisma**: Object Relational Mapping tool that simplifies database management and querying.

**Deployment:**

-   **Vercel**: Cloud platform used to deploy the app.

**Mapping:**

-   **ArcGIS Maps SDK for JavaScript**: Collection of tools to build mapping applications and access location services & geospatial features.

**Design:**

-   **Figma**: User interface design tool used for initial prototyping.

## Planned Improvements

**General:**

-   Consolidate and clean up TypeScript files.
-   Add breadcumbs to improve navigation and help orient users.
-   Explore alternative UI components to improve the usability and visual design of the existing interface.

**Health Records:**

-   Design a database model to store patient data.
-   Replace hard-coded patient data.
-   Improve how records are displayed on mobile devices.

**Past Visits:**

-   Design a database model to store past visit data.
-   Replace hard coded visit data.
-   Improve how visits are displayed on mobile devices.

**Doctor Directory:**

-   Show more useful data per doctor.
-   Add search, filter, sort and other functionality.

**Medical Map**

-   Differentiate hospitals from clinics.
-   Add information to make popups useful (e.g. contact information, hours, doctors).
