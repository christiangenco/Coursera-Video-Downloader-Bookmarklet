<style>
  img{display:block;}
  .download img{display: inline;}
.done{
  text-decoration: line-through;
}
</style>

<a href="https://github.com/christiangenco/Coursera-Video-Downloader-Bookmarklet"><img style="position: absolute; top: 0; right: 0; border: 0;" src="http://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" alt="Fork me on GitHub" /></a>

# Coursera Video Downloader Bookmarklet

This bookmarklet adds functionality to [Coursera](http://coursera.org)'s Video Lectures page to download and organize multiple videos at once with curl.

 ![Screenshot of the Coursera Video Downloader Bookmarklet](https://github.com/christiangenco/Coursera-Video-Downloader-Bookmarklet/raw/master/screenshots/coursera_videos_after_bookmarklet.png)

The bookmarklet generates bash code that can be entered directly into the command line and will download the selected videos sequentially. The videos are organized in the following structure:

    1. Introduction - Why Model?/
       1. Why Model?.mp4
       2. Intelligent Citizens of the World.mp4
       ...
    2. Segregation and Peer Effects/
    ...

## Use

1. <span id="step1" class="">Navigate to this project's [GitHub Page](http://christiangenco.github.com/Coursera-Video-Downloader-Bookmarklet#step2). ([Why?](#why_github_pages))</span>
* <a name="step2"></a>Drag and drop this link to your bookmarks bar: <a href="javascript:((function()%7Bvar%20s%3Ddocument.createElement('script')%3Bs.setAttribute('type'%2C'text%2Fjavascript')%3Bs.setAttribute('charset'%2C'UTF-8')%3Bs.setAttribute('src'%2C%22https%3A%2F%2Fraw.github.com%2Fchristiangenco%2FCoursera-Video-Downloader-Bookmarklet%2Fmaster%2Fcoursera_downloader.js%22)%3Bdocument.documentElement.appendChild(s)%3B%7D)())">Coursera Downloader</a>.
   ![Bookmarklet](https://github.com/christiangenco/Coursera-Video-Downloader-Bookmarklet/raw/master/screenshots/bookmarklet.png)
* Navigate to the "Video Lectures" page of any Coursera course.
  ![Coursera Video Lectures](https://github.com/christiangenco/Coursera-Video-Downloader-Bookmarklet/raw/master/screenshots/coursera_videos_page.png)
* Click the "Coursera Downloader" bookmarklet in your bookmarks bar. This will add checkboxes to each video and a command output section at the top of the page.
  ![Coursera Video Lectures After Bookmarklet](https://github.com/christiangenco/Coursera-Video-Downloader-Bookmarklet/raw/master/screenshots/coursera_videos_after_bookmarklet.png)
* Select the videos you wish to download.
* "Select all" and "copy" the generated bash code in the text area near the top of the page.
  ![Copy Bash Code](https://github.com/christiangenco/Coursera-Video-Downloader-Bookmarklet/raw/master/screenshots/copy_code.png)
* On your machine, open a terminal and navigate to the location you'd like your videos downloaded to.
  ![cd to video download location](https://github.com/christiangenco/Coursera-Video-Downloader-Bookmarklet/raw/master/screenshots/cd_to_folder.png)
* Paste the GIGANTIC command into your terminal and hit enter.
  ![Past in generated code](https://github.com/christiangenco/Coursera-Video-Downloader-Bookmarklet/raw/master/screenshots/terminal.png)

Your selected videos will now be downloaded with the `curl` utility and organized as described above.

## Notes

<a name="why_github_pages"></a>*Why do I have to navigate to this project's [GitHub Page](http://christiangenco.github.com/Coursera-Video-Downloader-Bookmarklet) before installing the bookmark?*

The GitHub-flavored markdown renderer on [this project's repo page](https://github.com/christiangenco/Coursera-Video-Downloader-Bookmarklet) doesn't allow inline javascript, which is how the bookmark functions, so the simple "drag-and-drop" into your bookmarks bar doesn't work. GitHub pages allow this.

## Other Coursera Downloader Tools

* [coursera-dl](https://github.com/jplehmann/coursera) by [jplehmann](https://github.com/jplehmann): "Script for downloading Coursera.org videos and naming them." (python)
* [coursera_downloader.py](https://github.com/LoganDing/Coursera.org-Downloader) by [LoganDing](https://github.com/LoganDing/): "A python script to download lectures (videos and slides) from Cousera.org" (python)

## Acknowledgements

This project is an expansion of [a gist](https://gist.github.com/1989008) by [csabapalfi](https://gist.github.com/csabapalfi).

## Contact

Suggestions are welcome! Please tweet your bugs or improvements to [@cgenco](http://twitter.com/cgenco).

---

Get the source code on GitHub: <a href="https://github.com/christiangenco/Coursera-Video-Downloader-Bookmarklet">christiangenco/Coursera-Video-Downloader-Bookmarklet</a>

<div class="download">
  <a href="https://github.com/christiangenco/Coursera-Video-Downloader-Bookmarklet/zipball/master">
    <img border="0" width="90" src="https://github.com/images/modules/download/zip.png"></a>
  <a href="https://github.com/christiangenco/Coursera-Video-Downloader-Bookmarklet/tarball/master">
    <img border="0" width="90" src="https://github.com/images/modules/download/tar.png"></a>
</div>

<script type="text/javascript">
var e = document.getElementById("step1");
e.setAttribute("class", "done"); //For Most Browsers
e.setAttribute("className", "done"); //For IE; harmless to other browsers.
</script>

<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-30513002-2']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>