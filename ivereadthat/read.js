MutationObserver = window.MutationObserver || window.WebKitMutationObserver
var config = {
  like     : "朕知道了",
  unlike   : "朕也是看報紙才知道",
  comment  : "卿家可知？",
  share    : "宣旨",
};
var observer = new MutationObserver(function(mutations, observer) {
    jQuery(".UFILikeLink").each(function() {
        if(this.dataset.ft == '{"tn":">"}') {
            $(this).html(config.like);
        }
        else if(this.dataset.ft == '{"tn":"?"}') {
            $(this).html(config.unlike);
        }
    })
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
