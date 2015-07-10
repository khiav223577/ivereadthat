MutationObserver = window.MutationObserver || window.WebKitMutationObserver
var config = {
  like         : '朕知道了',            //讚
  unlike       : '朕也是看報紙才知道',   //收回讚
  comment      : '卿家可知？',          //留言
  share        : '宣旨',               //分享
  flodCommnets : '檢視另XXX則留言~~喵', //檢視另XXX則留言
  allSay       : '都說哈哈',           //都說讚

  dddddd       : ''
};
var observer = new MutationObserver(function(mutations, observer) {
    jQuery(".UFILikeLink").each(function() {
        if(this.dataset.ft == '{"tn":">"}') {
            $(this).html(config.like);
        }
        else if(this.dataset.ft == '{"tn":"?"}') {
            $(this).html(config.unlike);
        }
    });
    $('.comment_link > span').each(function(){
      if ($(this).text() == '回應') $(this).text(config.comment);
    });
    $('.UFIPagerLink > span').each(function(){
      var mat = $(this).text().match(/檢視另(\d+)則留言/);
      if (mat == null) return;
      $(this).text(config.flodCommnets.replace('XXX', mat[1]));
    });
    $('.UFILikeSentenceText > span > span').each(function(){
      var text = $(this).text();
      if (text.match(/都說讚/)) $(this).text(text.replace('都說讚', '都說哈哈'));
      // else if (text.match(/都說讚/)) $(this).text('都說哈哈');
    });
    jQuery(".uiLinkButtonInput").each(function() {
        if (this.value == "Comment" || this.value == "留言" || this.value == '回應') {
            this.value = config.comment;
        }
    })
    jQuery(".share_action_link").each(function() {
        if ($(this).text() == "Share" || $(this).text() == "分享") {
            $(this).text(config.share);
        }
    })
})

observer.observe(document, {
    subtree: true,
    attributes: true
})
