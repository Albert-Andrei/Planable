## **Overview**
This is a **Next.js application** developed as part of the provided assignment. The application is built with a modular and scalable architecture to ensure maintainability and ease of further development. It was a lot of fun and I'm glad I finally got the chance to experiment with some things I've been wanting to try for a while in this project. Below is a breakdown of features, the application's folder structure and key components, and more useful info. But first, let's look into how to run the app locally

_Note:_ Because of lack of time on my side I ended up rushing several aspects of the project, which led to some compromises and questionable decisions I normally try to avoid. This might explain some of the messy code you may come across. Anyway, I'd be happy to walk you through my decisions if we have the chance to discuss them.

## **How to Run the app**

1. Clone the repository:
```
git clone https://github.com/Albert-Andrei/Planable.git
cd Planable
```

2. Install dependencies:
```
npm install
```

3. Run the development server:
```
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.


## **Features**

- **Core Features:**

  - [x] Folder Navigation: Displays a simple folder structure in a sidebar. Users can click on a folder to view its contents.

  - [x] Media Grid: Shows media files in the selected folder in a grid layout, displaying mock thumbnails and file names while accounting for aspect ratios.

- **Advanced Features:**

  - [x] File Management: Allows users to delete, and rename files from the folder, or drag and drop files to different folders.

  - [x] File Filters: Includes a filtering bar or dropdown to filter files by:
      - File type (e.g., image, video).
      - File name (partial match).

_Note:_ 
1. **Rename functionality** was not implemented.
2. To **delete a file**, select the file and press the **Delete** or **Backspace** key on the keyboard.
3. You can **add a file** by clicking on the empty state or by dragging a file into the page.  
   **⚠️ IMPORTANT:** Only one file can be selected, and dragging a file into the page works only when the page is empty. 🤷‍♂️ Sorry, no time.
4. There might be more, but that's all I remember right now. I might update this in the future.


## **Architecture**

*Folder Structure*

`/app:`  
&nbsp;&nbsp;Contains the core pages and layout logic of the application.

`/folders:`  
&nbsp;&nbsp;Handles routes related to folders.  

&nbsp;&nbsp;`[folderId]:`  
&nbsp;&nbsp;&nbsp;&nbsp;Dynamic routing for specific folders.  

&nbsp;&nbsp;&nbsp;&nbsp;Includes:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- `error.tsx`: Displays error messages for folder-specific issues.  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- `loading.tsx`: Shows loading states during folder data fetch.  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- `page.tsx`: Main page displaying folder content.  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- `components/`: Contains folder-specific reusable components.

`layout.tsx:`  
&nbsp;&nbsp;Global layout for the application. (has the UI that is persistent across the pages like sidebar and navbar)

`page.tsx:`  
&nbsp;&nbsp;Entry point page for the application. (home page)

`/components:`  
&nbsp;&nbsp;Contains reusable UI components

`/store:`  
&nbsp;&nbsp;State management logic for the app using Zustand or a similar library.  
&nbsp;&nbsp;Files include:  
&nbsp;&nbsp;&nbsp;&nbsp;- `filters.store.tsx`: Manages filter-related states.  
&nbsp;&nbsp;&nbsp;&nbsp;- `folders.store.tsx`: Handles folder data state.  
&nbsp;&nbsp;&nbsp;&nbsp;- `media-count.store.tsx`: Tracks media count-related data.  
&nbsp;&nbsp;&nbsp;&nbsp;- `search.store.tsx`: Manages search functionality.  
&nbsp;&nbsp;&nbsp;&nbsp;- `selected-files.store.tsx`: Keeps track of selected files in the UI.


`/styles:`  
&nbsp;&nbsp;Contains global CSS files.  


`/types:`  
&nbsp;&nbsp;Type definitions for TypeScript.  


`/utils:`  
&nbsp;&nbsp;Utility functions for reuse across the application.  


`/config:`  
&nbsp;&nbsp;Configuration files for app settings.


`/data:`  
&nbsp;&nbsp;Static data or mock data files.

`/providers:`

_Note:_ Server-Side Generation (SSG) was used for the folder pages.

*State Management*

This project uses Zustand for state management. 

*Styling*

Tailwind CSS is used for styling in this project.

*Deployment*

This Next.js project is deployed on Vercel, which provides an easy and quick deployment process. 

## **Known Limitations**

**1. Static Mock Data:**  
&nbsp;&nbsp;The app currently uses mock data for folder and file display. Integrating a real backend is required for full functionality.

**2. Limited Responsive Design:**  
&nbsp;&nbsp;While partially responsive, the app may require additional adjustments for smaller screen sizes.

**3. Limited Darg'n Drop functionality:**  
&nbsp;&nbsp;Right now a file must be selected before dragging to a folder
&nbsp;&nbsp;The UI is not fully adjusted for Drag'n Drop missing some states
&nbsp;&nbsp;Drag to add a file to the folder works only if the folder is empty

**4. Missing Functionality**
&nbsp;&nbsp;Unfortunately rename file feature was not implemented 🥲

## **Next Steps to Productionize**

**1. Fix the known limitation:**  

&nbsp;&nbsp;Probably the first step would be to fix all the limitations the app currently has

**2. Testing:**  

&nbsp;&nbsp;Add unit tests and integration tests to ensure robustness.

**4. Error Logging:**  

&nbsp;&nbsp;Integrate tools like Sentry for monitoring runtime errors.

**5. Enhanced Accessibility:**  

&nbsp;&nbsp;Improve accessibility features to ensure WCAG compliance.

**6. Enhance the UX**

&nbsp;&nbsp;Improve the app by adding missing UI states, such as:

&nbsp;&nbsp; - Toasts: To provide feedback indicating that an action has been successfully completed.

&nbsp;&nbsp; - Confirmation Dialogs: To prompt users for confirmation before performing critical actions, like deleting a file.

**7. Implement critical feature**
&nbsp;&nbsp;Would be nice if the user could create update and delete a folder, preview a file, and other...
