// insert the "Download All Selected" header and textarea
$("h2").parent().after("<br><br><br><h3>Download All Selected</h3>(cut and paste this bash code into the command line)<br><textarea id='cmd' rows='5'></textarea><br><br>")

// section selectors
$("h3.list_header").prepend("<a data-placement='left' rel='twipsy' data-original-title='Include chapter in multi-download' style='margin-right:10px'><input type='checkbox' class='multidownload_chapter'></input></a>")

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

    $(this).parents(".list_header_link").next(".item_section_list").find(".multidownload").each(function(){
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
  $("h3.list_header").each(function(sectionIndex){
    var sectionName = $(this).text().replace(/Chapter .+ - /,"").replace(/\:/,'-').replace(/^(V|I|X)+\. /,'');
    $(this).parent().next().find("a.lecture-link").each(function(videoIndex){
      var $lectureLink = $(this);
      var videoName = $.trim($lectureLink.text());
      var downloadLink = $lectureLink.attr('href').replace('view','download.mp4');
      var cookieHeader = ' --header \"Cookie:'+ document.cookie + '\" ';
      
      var directory = (sectionIndex+1) + '. ' + sectionName + '/';
      var filename = directory + (videoIndex+1) + '. ' + videoName + '.mp4';
      
      var cmd = 'echo "' + filename + '" && ';
      cmd += 'mkdir -p "' + directory + '" && ';
      cmd += 'curl -L -C - ' + cookieHeader + downloadLink + ' -o "' + filename + '"';

      if($(this).find(".multidownload").attr("checked"))
        command += cmd + "; ";
    });
  });
  $("#cmd").val(command);
}

buildCommand();

// clicking a section checkbox
$(".multidownload_chapter").unbind();
$(".multidownload_chapter").click(function(e) {
  var check = $(this).attr("checked") ? true : false;
  $(this).parents(".list_header_link").next(".item_section_list").find(".multidownload").each(function(){
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