// insert the "Download All Selected" header and textarea

$("div#course-page-content div.course-item-list").before("<br><br><br><h3>Download All Selected</h3>Cut and paste this bash code into the command line. <a href='http://christiangenco.github.com/Coursera-Video-Downloader-Bookmarklet/#select_all' target='_blank'>How?</a><br><textarea id='cmd' rows='5'></textarea><br><br>")

// section selectors
$("h3").prepend("<a data-placement='left' rel='twipsy' data-original-title='Include chapter in multi-download' style='margin-right:10px'><input type='checkbox' class='multidownload_chapter'></input></a>")

// video selectors
$(".lecture-link").prepend("<a data-placement='left' rel='twipsy' data-original-title='Include in multi-download'><input type='checkbox' class='multidownload'></input></a>")

// check/uncheck individual videos based on viewed status
$(".multidownload").each(function(){
  if($(this).parents("li").hasClass('unviewed'))
    $(this).prop("checked", true);
});


// check/uncheck section based on its videos
function refreshSectionCheckmarks(){
  $(".multidownload_chapter").each(function(){
    var chapterCheckbox = $(this);
    chapterCheckbox.prop("checked", true);

    $(this).parents(".course-item-list-header").next(".course-item-list-section-list").find(".multidownload").each(function(){
      if(!$(this).attr("checked")){
        chapterCheckbox.prop("checked", false);
        return;
      }
    });
  });
}
refreshSectionCheckmarks();

// the actual work of writing the command to download the checked videos
function buildCommand(){
  var command = "";
  $("h3").each(function(sectionIndex){
    var sectionName = $(this).text().replace(/Chapter .+ - /,"").replace(/\:/,'-').replace(/^(V|I|X)+\. /,'');
    $(this).parent().next().find("a.lecture-link").each(function(videoIndex){
      var $lectureLink = $(this);
      var videoName = $.trim($lectureLink.text()).replace("/","_").replace("/","_").replace("/","_").replace("/","_").replace(":","_");
      var videoName = videoName.replace("(","_").replace(")","_");
      var videoName = videoName.replace("(","_").replace(")","_");
      var videoName = videoName.replace(":","_").replace(":","_");
      //videoName = videoName.replace(":","_").videoName.replace(":","_");
      var downloadLink = $lectureLink.attr('href').replace('/lecture/','/lecture/download.mp4?lecture_id=');
      var cookieHeader = ' --header \"Cookie:'+ document.cookie + '\" ';
      
      var directory = (sectionIndex+1) + '. ' + sectionName + '/';
      var filename = directory + (videoIndex+1) + '. ' + videoName + '.mp4';
      
      var cmd = 'echo "' + filename + '" && ';
      cmd += 'mkdir -p "' + directory + '" && ';
      cmd += 'curl -L -C - ' + cookieHeader + downloadLink + ' -o "' + filename + '"';

      if($(this).find(".multidownload").attr("checked")) {
        command += cmd + "; ";
      }
    });
  });
  $("#cmd").val(command);
}

buildCommand();

// clicking a section checkbox
$(".multidownload_chapter").unbind();
$(".multidownload_chapter").click(function(e) {
  var check = $(this).attr("checked") ? true : false;
  $(this).parents(".course-item-list-header").next(".course-item-list-section-list").find(".multidownload").each(function(){
    $(this).prop("checked", check);
    console.log(check);
  });

  buildCommand();  
  e.stopPropagation();
});

// clicking a video checkbox
$(".multidownload").unbind();
$(".multidownload").click(function(e) {
  buildCommand();
  refreshSectionCheckmarks();
  e.stopPropagation();
});
