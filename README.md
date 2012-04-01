# Coursera Video Downloader Bookmarklet

This bookmarklet adds functionality to [Coursera](http://coursera.org)'s Video Lectures page to download and organize multiple videos. 

 ![Screenshot of the Coursera Video Downloader Bookmarklet](https://github.com/christiangenco/Coursera-Video-Downloader-Bookmarklet/raw/master/screenshots/coursera_videos_after_bookmarklet.png)

The bookmarklet generates bash code that can be entered directly into the command line and will download the selected videos sequentially. The videos are organized in the following structure:

    1. Introduction - Why Model?/
       1. Why Model?.mp4
       2. Intelligent Citizens of the World.mp4
       ...
    2. Segregation and Peer Effects/
    ...

## Directions

1. Navigate to this project's [README on GitHub Pages](http://christiangenco.github.com/Coursera-Video-Downloader-Bookmarklet). [Why?][why_github_pages] 
* [step2] Drag and drop this bookmarklet to your bookmarks bar: <a href="javascript:((function()%7Bvar%20s%3Ddocument.createElement('script')%3Bs.setAttribute('type'%2C'text%2Fjavascript')%3Bs.setAttribute('charset'%2C'UTF-8')%3Bs.setAttribute('src'%2C%22https%3A%2F%2Fraw.github.com%2Fchristiangenco%2FCoursera-Video-Downloader-Bookmarklet%2Fmaster%2Fcoursera_downloader.js%22)%3Bdocument.documentElement.appendChild(s)%3B%7D)())">Coursera Downloader</a>.
   ![Bookmarklet](https://github.com/christiangenco/Coursera-Video-Downloader-Bookmarklet/raw/master/screenshots/bookmarklet.png)
* Navigate to the "Video Lectures" page of any Coursera course.
  ![Coursera Video Lectures](https://github.com/christiangenco/Coursera-Video-Downloader-Bookmarklet/raw/master/screenshots/coursera_videos_page.png)
* Click the bookmarklet in your bookmarks bar. This will add checkboxes to each video and a command output section at the top of the page.
  ![Coursera Video Lectures After Bookmarklet](https://github.com/christiangenco/Coursera-Video-Downloader-Bookmarklet/raw/master/screenshots/coursera_videos_after_bookmarklet.png)
* Select the videos you wish to download.
* "Select all" and "copy" the generated bash code in the text area near the top of the page.
  ![Copy Bash Code](https://github.com/christiangenco/Coursera-Video-Downloader-Bookmarklet/raw/master/screenshots/copy_code.png)
* On your machine, open a terminal and navigate to the location you'd like your videos downloaded to.
  ![cd to video download location](https://github.com/christiangenco/Coursera-Video-Downloader-Bookmarklet/raw/master/screenshots/cd_to_folder.png)
* Paste the GIGANTIC command into your terminal and hit enter.
  ![Past in generated code](https://github.com/christiangenco/Coursera-Video-Downloader-Bookmarklet/raw/master/screenshots/terminal.png)


## Contact

Suggestions are welcome! Please tweet your bugs or improvements to [@cgenco](http://twitter.com/cgenco).

## Notes

[why_github_pages]: 