$(document).ready(function(e) {
  (function($) {
    $("#myForm").on("submit", function(e) {
      e.preventDefault();
      var myMessage = $("#myMessage").val();

      var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");
      var x = canvas.width / 2;
      var y = canvas.height / 2;

      // Create gradient
      var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop("0", "magenta");
      gradient.addColorStop("0.5", "blue");
      gradient.addColorStop("1.0", "red");
      // Fill with gradient
      ctx.fillStyle = gradient;
      ctx.font = "30px Arial";
      ctx.textAlign = "center";
      // ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillText(myMessage, x, y + 7.5);
    });

    $("#myDownload").on("click", function() {
      var canvas = document.getElementById("myCanvas");
      var fullQuality = canvas.toDataURL("image/png", 1.0);
      window.open(fullQuality);
    });
  })(jQuery);
});
