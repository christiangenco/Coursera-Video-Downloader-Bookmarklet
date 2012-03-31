# Coursera Video Downloader Bookmarklet

This bookmarklet adds functionality to [Coursera](http://coursera.org)'s Video Lectures page to download and organize multiple videos. 

 ![Screenshot of the Coursera Video Downloader Bookmarklet](Coursera-Video-Downloader-Bookmarklet/raw/master/screenshot.png)

The bookmarklet generates bash code that can be entered directly into the command line and will download the selected videos sequentially. The videos are organized in the following structure:

    1. Introduction - Why Model?/
       1. Why Model?.mp4
       2. Intelligent Citizens of the World.mp4
       ...
    2. Segregation and Peer Effects/
    ...

## Directions

1. Create a new bookmark in your bookmarks bar and paste in the content of "bookmarklet.js" into its href value. Alternatively, some browsers support pasting this content into the navigation bar directly.
2. Navigate to the "Video Lectures" page of any Coursera course and click the bookmarklet in your bookmarks bar.
3. Select the videos you wish to download.
4. "Select all" and "copy" the generated bash code in the text area near the top of the page.
5. On your machine, open a terminal and navigate to the location you'd like your videos downloaded to.
6. Paste the GIGANTIC command into your terminal and hit enter.

## Contact

Suggestions are welcome! Please tweet your bugs or improvements to [@cgenco](http://twitter.com/cgenco).