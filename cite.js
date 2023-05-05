// 

// console.log(output)

const bodyParser = require('body-parser');
const express = require('express');


var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function(request, response, next){

	response.send(`
	<html lang="en-US" class="no-js"  itemscope itemtype="https://schema.org/WebPage">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
<!-- head -->
<head>
<link
  rel="stylesheet"
  href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
/>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

<style>
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  
  .topnavI {
    overflow: hidden;

    display: flex;
    flex-direction: column;
    margin: 20px;
    height: 130px;
    border-radius: 5px;
    width: 90%;
    padding: 30px;
    outline: none;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: hidden;
  }

  
  

  @media screen and (max-width: 600px) {
    .topnav a,
    .topnav input[type='text'] {
      float: none;
      display: block;
      text-align: left;
      width: 100%;
      margin: 0;
      padding: 14px;
    }

    .topnav {
      border: 1px solid #ccc;
    }
    input[type='submit'] {
      width: 25%;
      border:1px solid black;
    }
  }


</style>



<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "cmdaycrfv8");
</script>

	<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-33260609-2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-33260609-2');
</script>
<script type="text/javascript">
var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:"16aa818900d6f02401931f63460f7f3c30306aa80f6fb6c2547156c0b0c94b20a830b57b460405e648167f0adc6fe37d", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.com/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);d.write("<div id='zsiqwidget'></div>");
</script>
<!-- meta -->
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="description" content="Our  Dissertation Writing services. Master Dissertation topic, research proposal, UG Dissertation, Dissertation Statistics, etc., " />
<meta name="keywords" content="Master dissertation,phd dba dissertation,coursework help,editing services,Manuscript writing help, UK master dissertation, Uk thesis writing, help me with dissertation , write my thesis paper, literature review writing, research methodology, research proposal, coding and algorithm, dissertation topic, dissertation part, report writing" />
<link rel="alternate" hreflang="en-us" href="https://www.tutorsindia.com/our-services/" />
<script type="text/javascript">
var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:"16aa818900d6f02401931f63460f7f3c30306aa80f6fb6c2547156c0b0c94b20a830b57b460405e648167f0adc6fe37d", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.com/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);d.write("<div id='zsiqwidget'></div>");
</script>







<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-56QLHN9');</script>
<!-- End Google Tag Manager -->




<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WFPG9JM"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->







<link rel="shortcut icon" href="https://www.tutorsindia.com/wp-content/uploads/2021/02/Tutorssindia-Logo-pixed-1.jpg" />
<link rel="apple-touch-icon" href="https://www.tutorsindia.com/wp-content/uploads/2021/02/Tutorssindia-Logo-pixed-1.jpg" />

<!-- wp_head() -->
<title>Our Services &#8211; Tutors India</title>
<!-- script | dynamic -->
<script id="mfn-dnmc-config-js">
//<![CDATA[
window.mfn_ajax = "https://www.tutorsindia.com/wp-admin/admin-ajax.php";
window.mfn = {mobile_init:825,nicescroll:40,parallax:"translate3d",responsive:1,retina_js:0};
window.mfn_lightbox = {disable:false,disableMobile:false,title:false,};
window.mfn_sliders = {blog:0,clients:0,offer:0,portfolio:0,shop:0,slider:0,testimonials:3000};
//]]>
</script>
<meta name='robots' content='max-image-preview:large' />
<link rel='dns-prefetch' href='//fonts.googleapis.com' />
<link rel="alternate" type="application/rss+xml" title="Tutors India &raquo; Feed" href="https://www.tutorsindia.com/feed/" />
<link rel="alternate" type="application/rss+xml" title="Tutors India &raquo; Comments Feed" href="https://www.tutorsindia.com/comments/feed/" />
<script type="text/javascript">
window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/www.tutorsindia.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.2"}};
/*! This file is auto-generated */
!function(e,a,t){var n,r,o,i=a.createElement("canvas"),p=i.getContext&&i.getContext("2d");function s(e,t){p.clearRect(0,0,i.width,i.height),p.fillText(e,0,0);e=i.toDataURL();return p.clearRect(0,0,i.width,i.height),p.fillText(t,0,0),e===i.toDataURL()}function c(e){var t=a.createElement("script");t.src=e,t.defer=t.type="text/javascript",a.getElementsByTagName("head")[0].appendChild(t)}for(o=Array("flag","emoji"),t.supports={everything:!0,everythingExceptFlag:!0},r=0;r<o.length;r++)t.supports[o[r]]=function(e){if(p&&p.fillText)switch(p.textBaseline="top",p.font="600 32px Arial",e){case"flag":return s("\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f","\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")?!1:!s("\ud83c\uddfa\ud83c\uddf3","\ud83c\uddfa\u200b\ud83c\uddf3")&&!s("\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");case"emoji":return!s("\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c\udfff","\ud83e\udef1\ud83c\udffb\u200b\ud83e\udef2\ud83c\udfff")}return!1}(o[r]),t.supports.everything=t.supports.everything&&t.supports[o[r]],"flag"!==o[r]&&(t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&t.supports[o[r]]);t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&!t.supports.flag,t.DOMReady=!1,t.readyCallback=function(){t.DOMReady=!0},t.supports.everything||(n=function(){t.readyCallback()},a.addEventListener?(a.addEventListener("DOMContentLoaded",n,!1),e.addEventListener("load",n,!1)):(e.attachEvent("onload",n),a.attachEvent("onreadystatechange",function(){"complete"===a.readyState&&t.readyCallback()})),(e=t.source||{}).concatemoji?c(e.concatemoji):e.wpemoji&&e.twemoji&&(c(e.twemoji),c(e.wpemoji)))}(window,document,window._wpemojiSettings);
</script>
<style type="text/css">
img.wp-smiley,
img.emoji {
	display: inline !important;
	border: none !important;
	box-shadow: none !important;
	height: 1em !important;
	width: 1em !important;
	margin: 0 0.07em !important;
	vertical-align: -0.1em !important;
	background: none !important;
	padding: 0 !important;
}
</style>
	<link rel='stylesheet' id='wp-block-library-css' href='https://www.tutorsindia.com/wp-includes/css/dist/block-library/style.min.css?ver=6.2' type='text/css' media='all' />
<link rel='stylesheet' id='wc-blocks-vendors-style-css' href='https://www.tutorsindia.com/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/wc-blocks-vendors-style.css?ver=9.4.4' type='text/css' media='all' />
<link rel='stylesheet' id='wc-blocks-style-css' href='https://www.tutorsindia.com/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/wc-blocks-style.css?ver=9.4.4' type='text/css' media='all' />
<link rel='stylesheet' id='classic-theme-styles-css' href='https://www.tutorsindia.com/wp-includes/css/classic-themes.min.css?ver=6.2' type='text/css' media='all' />
<style id='global-styles-inline-css' type='text/css'>
body{--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--duotone--dark-grayscale: url('#wp-duotone-dark-grayscale');--wp--preset--duotone--grayscale: url('#wp-duotone-grayscale');--wp--preset--duotone--purple-yellow: url('#wp-duotone-purple-yellow');--wp--preset--duotone--blue-red: url('#wp-duotone-blue-red');--wp--preset--duotone--midnight: url('#wp-duotone-midnight');--wp--preset--duotone--magenta-yellow: url('#wp-duotone-magenta-yellow');--wp--preset--duotone--purple-green: url('#wp-duotone-purple-green');--wp--preset--duotone--blue-orange: url('#wp-duotone-blue-orange');--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);}:where(.is-layout-flex){gap: 0.5em;}body .is-layout-flow > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-flow > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-flow > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-constrained > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-constrained > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)){max-width: var(--wp--style--global--content-size);margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignwide{max-width: var(--wp--style--global--wide-size);}body .is-layout-flex{display: flex;}body .is-layout-flex{flex-wrap: wrap;align-items: center;}body .is-layout-flex > *{margin: 0;}:where(.wp-block-columns.is-layout-flex){gap: 2em;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
.wp-block-navigation a:where(:not(.wp-element-button)){color: inherit;}
:where(.wp-block-columns.is-layout-flex){gap: 2em;}
.wp-block-pullquote{font-size: 1.5em;line-height: 1.6;}
</style>
<link rel='stylesheet' id='contact-form-7-css' href='https://www.tutorsindia.com/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=5.7.5.1' type='text/css' media='all' />
<style id='contact-form-7-inline-css' type='text/css'>
.wpcf7 .wpcf7-recaptcha iframe {margin-bottom: 0;}.wpcf7 .wpcf7-recaptcha[data-align="center"] > div {margin: 0 auto;}.wpcf7 .wpcf7-recaptcha[data-align="right"] > div {margin: 0 0 0 auto;}
</style>
<link rel='stylesheet' id='woocommerce-layout-css' href='https://www.tutorsindia.com/wp-content/plugins/woocommerce/assets/css/woocommerce-layout.css?ver=7.4.1' type='text/css' media='all' />
<link rel='stylesheet' id='woocommerce-smallscreen-css' href='https://www.tutorsindia.com/wp-content/plugins/woocommerce/assets/css/woocommerce-smallscreen.css?ver=7.4.1' type='text/css' media='only screen and (max-width: 768px)' />
<link rel='stylesheet' id='woocommerce-general-css' href='https://www.tutorsindia.com/wp-content/plugins/woocommerce/assets/css/woocommerce.css?ver=7.4.1' type='text/css' media='all' />
<style id='woocommerce-inline-inline-css' type='text/css'>
.woocommerce form .form-row .required { visibility: visible; }
</style>
<link rel='stylesheet' id='style-css' href='https://www.tutorsindia.com/wp-content/themes/betheme/style.css?ver=20.9.7' type='text/css' media='all' />
<link rel='stylesheet' id='mfn-base-css' href='https://www.tutorsindia.com/wp-content/themes/betheme/css/base.css?ver=20.9.7' type='text/css' media='all' />
<link rel='stylesheet' id='mfn-layout-css' href='https://www.tutorsindia.com/wp-content/themes/betheme/css/layout.css?ver=20.9.7' type='text/css' media='all' />
<link rel='stylesheet' id='mfn-shortcodes-css' href='https://www.tutorsindia.com/wp-content/themes/betheme/css/shortcodes.css?ver=20.9.7' type='text/css' media='all' />
<link rel='stylesheet' id='mfn-animations-css' href='https://www.tutorsindia.com/wp-content/themes/betheme/assets/animations/animations.min.css?ver=20.9.7' type='text/css' media='all' />
<link rel='stylesheet' id='mfn-jquery-ui-css' href='https://www.tutorsindia.com/wp-content/themes/betheme/assets/ui/jquery.ui.all.css?ver=20.9.7' type='text/css' media='all' />
<link rel='stylesheet' id='mfn-jplayer-css' href='https://www.tutorsindia.com/wp-content/themes/betheme/assets/jplayer/css/jplayer.blue.monday.css?ver=20.9.7' type='text/css' media='all' />
<link rel='stylesheet' id='mfn-responsive-css' href='https://www.tutorsindia.com/wp-content/themes/betheme/css/responsive.css?ver=20.9.7' type='text/css' media='all' />
<link rel='stylesheet' id='Poppins-css' href='https://fonts.googleapis.com/css?family=Poppins%3A1%2C100%2C300%2C400%2C500%2C700%2C900&#038;ver=6.2' type='text/css' media='all' />
<link rel='stylesheet' id='Roboto-css' href='https://fonts.googleapis.com/css?family=Roboto%3A1%2C100%2C300%2C400%2C500%2C700%2C900&#038;ver=6.2' type='text/css' media='all' />
<link rel='stylesheet' id='mfn-woo-css' href='https://www.tutorsindia.com/wp-content/themes/betheme/css/woocommerce.css?ver=20.9.7' type='text/css' media='all' />
<script type='text/javascript' src='https://www.tutorsindia.com/wp-includes/js/jquery/jquery.min.js?ver=3.6.3' id='jquery-core-js'></script>
<script type='text/javascript' src='https://www.tutorsindia.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.0' id='jquery-migrate-js'></script>
<link rel="https://api.w.org/" href="https://www.tutorsindia.com/wp-json/" /><link rel="alternate" type="application/json" href="https://www.tutorsindia.com/wp-json/wp/v2/pages/55" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://www.tutorsindia.com/xmlrpc.php?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://www.tutorsindia.com/wp-includes/wlwmanifest.xml" />
<meta name="generator" content="WordPress 6.2" />
<meta name="generator" content="WooCommerce 7.4.1" />
<link rel="canonical" href="https://www.tutorsindia.com/our-services/" />
<link rel='shortlink' href='https://www.tutorsindia.com/?p=55' />
<link rel="alternate" type="application/json+oembed" href="https://www.tutorsindia.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.tutorsindia.com%2Four-services%2F" />
<link rel="alternate" type="text/xml+oembed" href="https://www.tutorsindia.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.tutorsindia.com%2Four-services%2F&#038;format=xml" />
<meta name="generator" content="Site Kit by Google 1.95.0" /><!-- style | dynamic -->
<style id="mfn-dnmc-style-css">
@media only screen and (min-width: 825px){body:not(.header-simple) #Top_bar #menu{display:block!important}.tr-menu #Top_bar #menu{background:none!important}#Top_bar .menu > li > ul.mfn-megamenu{width:984px}#Top_bar .menu > li > ul.mfn-megamenu > li{float:left}#Top_bar .menu > li > ul.mfn-megamenu > li.mfn-megamenu-cols-1{width:100%}#Top_bar .menu > li > ul.mfn-megamenu > li.mfn-megamenu-cols-2{width:50%}#Top_bar .menu > li > ul.mfn-megamenu > li.mfn-megamenu-cols-3{width:33.33%}#Top_bar .menu > li > ul.mfn-megamenu > li.mfn-megamenu-cols-4{width:25%}#Top_bar .menu > li > ul.mfn-megamenu > li.mfn-megamenu-cols-5{width:20%}#Top_bar .menu > li > ul.mfn-megamenu > li.mfn-megamenu-cols-6{width:16.66%}#Top_bar .menu > li > ul.mfn-megamenu > li > ul{display:block!important;position:inherit;left:auto;top:auto;border-width:0 1px 0 0}#Top_bar .menu > li > ul.mfn-megamenu > li:last-child > ul{border:0}#Top_bar .menu > li > ul.mfn-megamenu > li > ul li{width:auto}#Top_bar .menu > li > ul.mfn-megamenu a.mfn-megamenu-title{text-transform:uppercase;font-weight:400;background:none}#Top_bar .menu > li > ul.mfn-megamenu a .menu-arrow{display:none}.menuo-right #Top_bar .menu > li > ul.mfn-megamenu{left:auto;right:0}.menuo-right #Top_bar .menu > li > ul.mfn-megamenu-bg{box-sizing:border-box}#Top_bar .menu > li > ul.mfn-megamenu-bg{padding:20px 166px 20px 20px;background-repeat:no-repeat;background-position:right bottom}.rtl #Top_bar .menu > li > ul.mfn-megamenu-bg{padding-left:166px;padding-right:20px;background-position:left bottom}#Top_bar .menu > li > ul.mfn-megamenu-bg > li{background:none}#Top_bar .menu > li > ul.mfn-megamenu-bg > li a{border:none}#Top_bar .menu > li > ul.mfn-megamenu-bg > li > ul{background:none!important;-webkit-box-shadow:0 0 0 0;-moz-box-shadow:0 0 0 0;box-shadow:0 0 0 0}.mm-vertical #Top_bar .container{position:relative;}.mm-vertical #Top_bar .top_bar_left{position:static;}.mm-vertical #Top_bar .menu > li ul{box-shadow:0 0 0 0 transparent!important;background-image:none;}.mm-vertical #Top_bar .menu > li > ul.mfn-megamenu{width:98%!important;margin:0 1%;padding:20px 0;}.mm-vertical.header-plain #Top_bar .menu > li > ul.mfn-megamenu{width:100%!important;margin:0;}.mm-vertical #Top_bar .menu > li > ul.mfn-megamenu > li{display:table-cell;float:none!important;width:10%;padding:0 15px;border-right:1px solid rgba(0, 0, 0, 0.05);}.mm-vertical #Top_bar .menu > li > ul.mfn-megamenu > li:last-child{border-right-width:0}.mm-vertical #Top_bar .menu > li > ul.mfn-megamenu > li.hide-border{border-right-width:0}.mm-vertical #Top_bar .menu > li > ul.mfn-megamenu > li a{border-bottom-width:0;padding:9px 15px;line-height:120%;}.mm-vertical #Top_bar .menu > li > ul.mfn-megamenu a.mfn-megamenu-title{font-weight:700;}.rtl .mm-vertical #Top_bar .menu > li > ul.mfn-megamenu > li:first-child{border-right-width:0}.rtl .mm-vertical #Top_bar .menu > li > ul.mfn-megamenu > li:last-child{border-right-width:1px}.header-plain:not(.menuo-right) #Header .top_bar_left{width:auto!important}.header-stack.header-center #Top_bar #menu{display:inline-block!important}.header-simple #Top_bar #menu{display:none;height:auto;width:300px;bottom:auto;top:100%;right:1px;position:absolute;margin:0}.header-simple #Header a.responsive-menu-toggle{display:block;right:10px}.header-simple #Top_bar #menu > ul{width:100%;float:left}.header-simple #Top_bar #menu ul li{width:100%;padding-bottom:0;border-right:0;position:relative}.header-simple #Top_bar #menu ul li a{padding:0 20px;margin:0;display:block;height:auto;line-height:normal;border:none}.header-simple #Top_bar #menu ul li a:after{display:none}.header-simple #Top_bar #menu ul li a span{border:none;line-height:44px;display:inline;padding:0}.header-simple #Top_bar #menu ul li.submenu .menu-toggle{display:block;position:absolute;right:0;top:0;width:44px;height:44px;line-height:44px;font-size:30px;font-weight:300;text-align:center;cursor:pointer;color:#444;opacity:0.33;}.header-simple #Top_bar #menu ul li.submenu .menu-toggle:after{content:"+"}.header-simple #Top_bar #menu ul li.hover > .menu-toggle:after{content:"-"}.header-simple #Top_bar #menu ul li.hover a{border-bottom:0}.header-simple #Top_bar #menu ul.mfn-megamenu li .menu-toggle{display:none}.header-simple #Top_bar #menu ul li ul{position:relative!important;left:0!important;top:0;padding:0;margin:0!important;width:auto!important;background-image:none}.header-simple #Top_bar #menu ul li ul li{width:100%!important;display:block;padding:0;}.header-simple #Top_bar #menu ul li ul li a{padding:0 20px 0 30px}.header-simple #Top_bar #menu ul li ul li a .menu-arrow{display:none}.header-simple #Top_bar #menu ul li ul li a span{padding:0}.header-simple #Top_bar #menu ul li ul li a span:after{display:none!important}.header-simple #Top_bar .menu > li > ul.mfn-megamenu a.mfn-megamenu-title{text-transform:uppercase;font-weight:400}.header-simple #Top_bar .menu > li > ul.mfn-megamenu > li > ul{display:block!important;position:inherit;left:auto;top:auto}.header-simple #Top_bar #menu ul li ul li ul{border-left:0!important;padding:0;top:0}.header-simple #Top_bar #menu ul li ul li ul li a{padding:0 20px 0 40px}.rtl.header-simple #Top_bar #menu{left:1px;right:auto}.rtl.header-simple #Top_bar a.responsive-menu-toggle{left:10px;right:auto}.rtl.header-simple #Top_bar #menu ul li.submenu .menu-toggle{left:0;right:auto}.rtl.header-simple #Top_bar #menu ul li ul{left:auto!important;right:0!important}.rtl.header-simple #Top_bar #menu ul li ul li a{padding:0 30px 0 20px}.rtl.header-simple #Top_bar #menu ul li ul li ul li a{padding:0 40px 0 20px}.menu-highlight #Top_bar .menu > li{margin:0 2px}.menu-highlight:not(.header-creative) #Top_bar .menu > li > a{margin:20px 0;padding:0;-webkit-border-radius:5px;border-radius:5px}.menu-highlight #Top_bar .menu > li > a:after{display:none}.menu-highlight #Top_bar .menu > li > a span:not(.description){line-height:50px}.menu-highlight #Top_bar .menu > li > a span.description{display:none}.menu-highlight.header-stack #Top_bar .menu > li > a{margin:10px 0!important}.menu-highlight.header-stack #Top_bar .menu > li > a span:not(.description){line-height:40px}.menu-highlight.header-transparent #Top_bar .menu > li > a{margin:5px 0}.menu-highlight.header-simple #Top_bar #menu ul li,.menu-highlight.header-creative #Top_bar #menu ul li{margin:0}.menu-highlight.header-simple #Top_bar #menu ul li > a,.menu-highlight.header-creative #Top_bar #menu ul li > a{-webkit-border-radius:0;border-radius:0}.menu-highlight:not(.header-fixed):not(.header-simple) #Top_bar.is-sticky .menu > li > a{margin:10px 0!important;padding:5px 0!important}.menu-highlight:not(.header-fixed):not(.header-simple) #Top_bar.is-sticky .menu > li > a span{line-height:30px!important}.header-modern.menu-highlight.menuo-right .menu_wrapper{margin-right:20px}.menu-line-below #Top_bar .menu > li > a:after{top:auto;bottom:-4px}.menu-line-below #Top_bar.is-sticky .menu > li > a:after{top:auto;bottom:-4px}.menu-line-below-80 #Top_bar:not(.is-sticky) .menu > li > a:after{height:4px;left:10%;top:50%;margin-top:20px;width:80%}.menu-line-below-80-1 #Top_bar:not(.is-sticky) .menu > li > a:after{height:1px;left:10%;top:50%;margin-top:20px;width:80%}.menu-link-color #Top_bar .menu > li > a:after{display:none!important}.menu-arrow-top #Top_bar .menu > li > a:after{background:none repeat scroll 0 0 rgba(0,0,0,0)!important;border-color:#ccc transparent transparent;border-style:solid;border-width:7px 7px 0;display:block;height:0;left:50%;margin-left:-7px;top:0!important;width:0}.menu-arrow-top.header-transparent #Top_bar .menu > li > a:after,.menu-arrow-top.header-plain #Top_bar .menu > li > a:after{display:none}.menu-arrow-top #Top_bar.is-sticky .menu > li > a:after{top:0!important}.menu-arrow-bottom #Top_bar .menu > li > a:after{background:none!important;border-color:transparent transparent #ccc;border-style:solid;border-width:0 7px 7px;display:block;height:0;left:50%;margin-left:-7px;top:auto;bottom:0;width:0}.menu-arrow-bottom.header-transparent #Top_bar .menu > li > a:after,.menu-arrow-bottom.header-plain #Top_bar .menu > li > a:after{display:none}.menu-arrow-bottom #Top_bar.is-sticky .menu > li > a:after{top:auto;bottom:0}.menuo-no-borders #Top_bar .menu > li > a span{border-width:0!important}.menuo-no-borders #Header_creative #Top_bar .menu > li > a span{border-bottom-width:0}.menuo-no-borders.header-plain #Top_bar a#header_cart,.menuo-no-borders.header-plain #Top_bar a#search_button,.menuo-no-borders.header-plain #Top_bar .wpml-languages,.menuo-no-borders.header-plain #Top_bar a.action_button{border-width:0}.menuo-right #Top_bar .menu_wrapper{float:right}.menuo-right.header-stack:not(.header-center) #Top_bar .menu_wrapper{margin-right:150px}body.header-creative{padding-left:50px}body.header-creative.header-open{padding-left:250px}body.error404,body.under-construction,body.template-blank{padding-left:0!important}.header-creative.footer-fixed #Footer,.header-creative.footer-sliding #Footer,.header-creative.footer-stick #Footer.is-sticky{box-sizing:border-box;padding-left:50px;}.header-open.footer-fixed #Footer,.header-open.footer-sliding #Footer,.header-creative.footer-stick #Footer.is-sticky{padding-left:250px;}.header-rtl.header-creative.footer-fixed #Footer,.header-rtl.header-creative.footer-sliding #Footer,.header-rtl.header-creative.footer-stick #Footer.is-sticky{padding-left:0;padding-right:50px;}.header-rtl.header-open.footer-fixed #Footer,.header-rtl.header-open.footer-sliding #Footer,.header-rtl.header-creative.footer-stick #Footer.is-sticky{padding-right:250px;}#Header_creative{background-color:#fff;position:fixed;width:250px;height:100%;left:-200px;top:0;z-index:9002;-webkit-box-shadow:2px 0 4px 2px rgba(0,0,0,.15);box-shadow:2px 0 4px 2px rgba(0,0,0,.15)}#Header_creative .container{width:100%}#Header_creative .creative-wrapper{opacity:0;margin-right:50px}#Header_creative a.creative-menu-toggle{display:block;width:34px;height:34px;line-height:34px;font-size:22px;text-align:center;position:absolute;top:10px;right:8px;border-radius:3px}.admin-bar #Header_creative a.creative-menu-toggle{top:42px}#Header_creative #Top_bar{position:static;width:100%}#Header_creative #Top_bar .top_bar_left{width:100%!important;float:none}#Header_creative #Top_bar .top_bar_right{width:100%!important;float:none;height:auto;margin-bottom:35px;text-align:center;padding:0 20px;top:0;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}#Header_creative #Top_bar .top_bar_right:before{display:none}#Header_creative #Top_bar .top_bar_right_wrapper{top:0}#Header_creative #Top_bar .logo{float:none;text-align:center;margin:15px 0}#Header_creative #Top_bar #menu{background-color:transparent}#Header_creative #Top_bar .menu_wrapper{float:none;margin:0 0 30px}#Header_creative #Top_bar .menu > li{width:100%;float:none;position:relative}#Header_creative #Top_bar .menu > li > a{padding:0;text-align:center}#Header_creative #Top_bar .menu > li > a:after{display:none}#Header_creative #Top_bar .menu > li > a span{border-right:0;border-bottom-width:1px;line-height:38px}#Header_creative #Top_bar .menu li ul{left:100%;right:auto;top:0;box-shadow:2px 2px 2px 0 rgba(0,0,0,0.03);-webkit-box-shadow:2px 2px 2px 0 rgba(0,0,0,0.03)}#Header_creative #Top_bar .menu > li > ul.mfn-megamenu{margin:0;width:700px!important;}#Header_creative #Top_bar .menu > li > ul.mfn-megamenu > li > ul{left:0}#Header_creative #Top_bar .menu li ul li a{padding-top:9px;padding-bottom:8px}#Header_creative #Top_bar .menu li ul li ul{top:0}#Header_creative #Top_bar .menu > li > a span.description{display:block;font-size:13px;line-height:28px!important;clear:both}#Header_creative #Top_bar .search_wrapper{left:100%;top:auto;bottom:0}#Header_creative #Top_bar a#header_cart{display:inline-block;float:none;top:3px}#Header_creative #Top_bar a#search_button{display:inline-block;float:none;top:3px}#Header_creative #Top_bar .wpml-languages{display:inline-block;float:none;top:0}#Header_creative #Top_bar .wpml-languages.enabled:hover a.active{padding-bottom:11px}#Header_creative #Top_bar .action_button{display:inline-block;float:none;top:16px;margin:0}#Header_creative #Top_bar .banner_wrapper{display:block;text-align:center}#Header_creative #Top_bar .banner_wrapper img{max-width:100%;height:auto;display:inline-block}#Header_creative #Action_bar{display:none;position:absolute;bottom:0;top:auto;clear:both;padding:0 20px;box-sizing:border-box}#Header_creative #Action_bar .social{float:none;text-align:center;padding:5px 0 15px}#Header_creative #Action_bar .social li{margin-bottom:2px}#Header_creative .social li a{color:rgba(0,0,0,.5)}#Header_creative .social li a:hover{color:black}#Header_creative .creative-social{position:absolute;bottom:10px;right:0;width:50px}#Header_creative .creative-social li{display:block;float:none;width:100%;text-align:center;margin-bottom:5px}.header-creative .fixed-nav.fixed-nav-prev{margin-left:50px}.header-creative.header-open .fixed-nav.fixed-nav-prev{margin-left:250px}.menuo-last #Header_creative #Top_bar .menu li.last ul{top:auto;bottom:0}.header-open #Header_creative{left:0}.header-open #Header_creative .creative-wrapper{opacity:1;margin:0!important;}.header-open #Header_creative .creative-menu-toggle,.header-open #Header_creative .creative-social{display:none}.header-open #Header_creative #Action_bar{display:block}body.header-rtl.header-creative{padding-left:0;padding-right:50px}.header-rtl #Header_creative{left:auto;right:-200px}.header-rtl.nice-scroll #Header_creative{margin-right:10px}.header-rtl #Header_creative .creative-wrapper{margin-left:50px;margin-right:0}.header-rtl #Header_creative a.creative-menu-toggle{left:8px;right:auto}.header-rtl #Header_creative .creative-social{left:0;right:auto}.header-rtl #Footer #back_to_top.sticky{right:125px}.header-rtl #popup_contact{right:70px}.header-rtl #Header_creative #Top_bar .menu li ul{left:auto;right:100%}.header-rtl #Header_creative #Top_bar .search_wrapper{left:auto;right:100%;}.header-rtl .fixed-nav.fixed-nav-prev{margin-left:0!important}.header-rtl .fixed-nav.fixed-nav-next{margin-right:50px}body.header-rtl.header-creative.header-open{padding-left:0;padding-right:250px!important}.header-rtl.header-open #Header_creative{left:auto;right:0}.header-rtl.header-open #Footer #back_to_top.sticky{right:325px}.header-rtl.header-open #popup_contact{right:270px}.header-rtl.header-open .fixed-nav.fixed-nav-next{margin-right:250px}#Header_creative.active{left:-1px;}.header-rtl #Header_creative.active{left:auto;right:-1px;}#Header_creative.active .creative-wrapper{opacity:1;margin:0}.header-creative .vc_row[data-vc-full-width]{padding-left:50px}.header-creative.header-open .vc_row[data-vc-full-width]{padding-left:250px}.header-open .vc_parallax .vc_parallax-inner { left:auto; width: calc(100% - 250px); }.header-open.header-rtl .vc_parallax .vc_parallax-inner { left:0; right:auto; }#Header_creative.scroll{height:100%;overflow-y:auto}#Header_creative.scroll:not(.dropdown) .menu li ul{display:none!important}#Header_creative.scroll #Action_bar{position:static}#Header_creative.dropdown{outline:none}#Header_creative.dropdown #Top_bar .menu_wrapper{float:left}#Header_creative.dropdown #Top_bar #menu ul li{position:relative;float:left}#Header_creative.dropdown #Top_bar #menu ul li a:after{display:none}#Header_creative.dropdown #Top_bar #menu ul li a span{line-height:38px;padding:0}#Header_creative.dropdown #Top_bar #menu ul li.submenu .menu-toggle{display:block;position:absolute;right:0;top:0;width:38px;height:38px;line-height:38px;font-size:26px;font-weight:300;text-align:center;cursor:pointer;color:#444;opacity:0.33;}#Header_creative.dropdown #Top_bar #menu ul li.submenu .menu-toggle:after{content:"+"}#Header_creative.dropdown #Top_bar #menu ul li.hover > .menu-toggle:after{content:"-"}#Header_creative.dropdown #Top_bar #menu ul li.hover a{border-bottom:0}#Header_creative.dropdown #Top_bar #menu ul.mfn-megamenu li .menu-toggle{display:none}#Header_creative.dropdown #Top_bar #menu ul li ul{position:relative!important;left:0!important;top:0;padding:0;margin-left:0!important;width:auto!important;background-image:none}#Header_creative.dropdown #Top_bar #menu ul li ul li{width:100%!important}#Header_creative.dropdown #Top_bar #menu ul li ul li a{padding:0 10px;text-align:center}#Header_creative.dropdown #Top_bar #menu ul li ul li a .menu-arrow{display:none}#Header_creative.dropdown #Top_bar #menu ul li ul li a span{padding:0}#Header_creative.dropdown #Top_bar #menu ul li ul li a span:after{display:none!important}#Header_creative.dropdown #Top_bar .menu > li > ul.mfn-megamenu a.mfn-megamenu-title{text-transform:uppercase;font-weight:400}#Header_creative.dropdown #Top_bar .menu > li > ul.mfn-megamenu > li > ul{display:block!important;position:inherit;left:auto;top:auto}#Header_creative.dropdown #Top_bar #menu ul li ul li ul{border-left:0!important;padding:0;top:0}#Header_creative{transition: left .5s ease-in-out, right .5s ease-in-out;}#Header_creative .creative-wrapper{transition: opacity .5s ease-in-out, margin 0s ease-in-out .5s;}#Header_creative.active .creative-wrapper{transition: opacity .5s ease-in-out, margin 0s ease-in-out;}}@media only screen and (min-width: 825px){#Top_bar.is-sticky{position:fixed!important;width:100%;left:0;top:-60px;height:60px;z-index:701;background:#fff;opacity:.97;filter:alpha(opacity = 97);-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,0.1);-moz-box-shadow:0 2px 5px 0 rgba(0,0,0,0.1);box-shadow:0 2px 5px 0 rgba(0,0,0,0.1)}.layout-boxed.header-boxed #Top_bar.is-sticky{max-width:825px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.layout-boxed.header-boxed.nice-scroll #Top_bar.is-sticky{margin-left:-5px}#Top_bar.is-sticky .top_bar_left,#Top_bar.is-sticky .top_bar_right,#Top_bar.is-sticky .top_bar_right:before{background:none}#Top_bar.is-sticky .top_bar_right{top:-4px;height:auto;}#Top_bar.is-sticky .top_bar_right_wrapper{top:15px}.header-plain #Top_bar.is-sticky .top_bar_right_wrapper{top:0}#Top_bar.is-sticky .logo{width:auto;margin:0 30px 0 20px;padding:0}#Top_bar.is-sticky #logo{padding:5px 0!important;height:50px!important;line-height:50px!important}.logo-no-sticky-padding #Top_bar.is-sticky #logo{height:60px!important;line-height:60px!important}#Top_bar.is-sticky #logo img.logo-main{display:none}#Top_bar.is-sticky #logo img.logo-sticky{display:inline;max-height:35px;}#Top_bar.is-sticky .menu_wrapper{clear:none}#Top_bar.is-sticky .menu_wrapper .menu > li > a{padding:15px 0}#Top_bar.is-sticky .menu > li > a,#Top_bar.is-sticky .menu > li > a span{line-height:30px}#Top_bar.is-sticky .menu > li > a:after{top:auto;bottom:-4px}#Top_bar.is-sticky .menu > li > a span.description{display:none}#Top_bar.is-sticky .secondary_menu_wrapper,#Top_bar.is-sticky .banner_wrapper{display:none}.header-overlay #Top_bar.is-sticky{display:none}.sticky-dark #Top_bar.is-sticky{background:rgba(0,0,0,.8)}.sticky-dark #Top_bar.is-sticky #menu{background:rgba(0,0,0,.8)}.sticky-dark #Top_bar.is-sticky .menu > li > a{color:#fff}.sticky-dark #Top_bar.is-sticky .top_bar_right a{color:rgba(255,255,255,.5)}.sticky-dark #Top_bar.is-sticky .wpml-languages a.active,.sticky-dark #Top_bar.is-sticky .wpml-languages ul.wpml-lang-dropdown{background:rgba(0,0,0,0.3);border-color:rgba(0,0,0,0.1)}}@media only screen and (min-width: 768px) and (max-width: 825px){.header_placeholder{height:0!important}}@media only screen and (max-width: 824px){#Top_bar #menu{display:none;height:auto;width:300px;bottom:auto;top:100%;right:1px;position:absolute;margin:0}#Top_bar a.responsive-menu-toggle{display:block}#Top_bar #menu > ul{width:100%;float:left}#Top_bar #menu ul li{width:100%;padding-bottom:0;border-right:0;position:relative}#Top_bar #menu ul li a{padding:0 25px;margin:0;display:block;height:auto;line-height:normal;border:none}#Top_bar #menu ul li a:after{display:none}#Top_bar #menu ul li a span{border:none;line-height:44px;display:inline;padding:0}#Top_bar #menu ul li a span.description{margin:0 0 0 5px}#Top_bar #menu ul li.submenu .menu-toggle{display:block;position:absolute;right:15px;top:0;width:44px;height:44px;line-height:44px;font-size:30px;font-weight:300;text-align:center;cursor:pointer;color:#444;opacity:0.33;}#Top_bar #menu ul li.submenu .menu-toggle:after{content:"+"}#Top_bar #menu ul li.hover > .menu-toggle:after{content:"-"}#Top_bar #menu ul li.hover a{border-bottom:0}#Top_bar #menu ul li a span:after{display:none!important}#Top_bar #menu ul.mfn-megamenu li .menu-toggle{display:none}#Top_bar #menu ul li ul{position:relative!important;left:0!important;top:0;padding:0;margin-left:0!important;width:auto!important;background-image:none!important;box-shadow:0 0 0 0 transparent!important;-webkit-box-shadow:0 0 0 0 transparent!important}#Top_bar #menu ul li ul li{width:100%!important}#Top_bar #menu ul li ul li a{padding:0 20px 0 35px}#Top_bar #menu ul li ul li a .menu-arrow{display:none}#Top_bar #menu ul li ul li a span{padding:0}#Top_bar #menu ul li ul li a span:after{display:none!important}#Top_bar .menu > li > ul.mfn-megamenu a.mfn-megamenu-title{text-transform:uppercase;font-weight:400}#Top_bar .menu > li > ul.mfn-megamenu > li > ul{display:block!important;position:inherit;left:auto;top:auto}#Top_bar #menu ul li ul li ul{border-left:0!important;padding:0;top:0}#Top_bar #menu ul li ul li ul li a{padding:0 20px 0 45px}.rtl #Top_bar #menu{left:1px;right:auto}.rtl #Top_bar a.responsive-menu-toggle{left:20px;right:auto}.rtl #Top_bar #menu ul li.submenu .menu-toggle{left:15px;right:auto;border-left:none;border-right:1px solid #eee}.rtl #Top_bar #menu ul li ul{left:auto!important;right:0!important}.rtl #Top_bar #menu ul li ul li a{padding:0 30px 0 20px}.rtl #Top_bar #menu ul li ul li ul li a{padding:0 40px 0 20px}.header-stack .menu_wrapper a.responsive-menu-toggle{position:static!important;margin:11px 0!important}.header-stack .menu_wrapper #menu{left:0;right:auto}.rtl.header-stack #Top_bar #menu{left:auto;right:0}.admin-bar #Header_creative{top:32px}.header-creative.layout-boxed{padding-top:85px}.header-creative.layout-full-width #Wrapper{padding-top:60px}#Header_creative{position:fixed;width:100%;left:0!important;top:0;z-index:1001}#Header_creative .creative-wrapper{display:block!important;opacity:1!important}#Header_creative .creative-menu-toggle,#Header_creative .creative-social{display:none!important;opacity:1!important;filter:alpha(opacity=100)!important}#Header_creative #Top_bar{position:static;width:100%}#Header_creative #Top_bar #logo{height:50px;line-height:50px;padding:5px 0}#Header_creative #Top_bar #logo img.logo-sticky{max-height:40px!important}#Header_creative #logo img.logo-main{display:none}#Header_creative #logo img.logo-sticky{display:inline-block}.logo-no-sticky-padding #Header_creative #Top_bar #logo{height:60px;line-height:60px;padding:0}.logo-no-sticky-padding #Header_creative #Top_bar #logo img.logo-sticky{max-height:60px!important}#Header_creative #Action_bar{display:none}#Header_creative #Top_bar .top_bar_right{height:60px;top:0}#Header_creative #Top_bar .top_bar_right:before{display:none}#Header_creative #Top_bar .top_bar_right_wrapper{top:0;padding-top:9px}#Header_creative.scroll{overflow:visible!important}}#Header_wrapper, #Intro {background-color: #000119;}#Subheader {background-color: rgba(247, 247, 247, 1);}.header-classic #Action_bar, .header-fixed #Action_bar, .header-plain #Action_bar, .header-split #Action_bar, .header-stack #Action_bar {background-color: #292b33;}#Sliding-top {background-color: #545454;}#Sliding-top a.sliding-top-control {border-right-color: #545454;}#Sliding-top.st-center a.sliding-top-control,#Sliding-top.st-left a.sliding-top-control {border-top-color: #545454;}#Footer {background-color: #292b33;}body, ul.timeline_items, .icon_box a .desc, .icon_box a:hover .desc, .feature_list ul li a, .list_item a, .list_item a:hover,.widget_recent_entries ul li a, .flat_box a, .flat_box a:hover, .story_box .desc, .content_slider.carouselul li a .title,.content_slider.flat.description ul li .desc, .content_slider.flat.description ul li a .desc, .post-nav.minimal a i {color: #626262;}.post-nav.minimal a svg {fill: #626262;}.themecolor, .opening_hours .opening_hours_wrapper li span, .fancy_heading_icon .icon_top,.fancy_heading_arrows .icon-right-dir, .fancy_heading_arrows .icon-left-dir, .fancy_heading_line .title,.button-love a.mfn-love, .format-link .post-title .icon-link, .pager-single > span, .pager-single a:hover,.widget_meta ul, .widget_pages ul, .widget_rss ul, .widget_mfn_recent_comments ul li:after, .widget_archive ul,.widget_recent_comments ul li:after, .widget_nav_menu ul, .woocommerce ul.products li.product .price, .shop_slider .shop_slider_ul li .item_wrapper .price,.woocommerce-page ul.products li.product .price, .widget_price_filter .price_label .from, .widget_price_filter .price_label .to,.woocommerce ul.product_list_widget li .quantity .amount, .woocommerce .product div.entry-summary .price, .woocommerce .star-rating span,#Error_404 .error_pic i, .style-simple #Filters .filters_wrapper ul li a:hover, .style-simple #Filters .filters_wrapper ul li.current-cat a,.style-simple .quick_fact .title {color: #9845aa;}.themebg,#comments .commentlist > li .reply a.comment-reply-link,#Filters .filters_wrapper ul li a:hover,#Filters .filters_wrapper ul li.current-cat a,.fixed-nav .arrow,.offer_thumb .slider_pagination a:before,.offer_thumb .slider_pagination a.selected:after,.pager .pages a:hover,.pager .pages a.active,.pager .pages span.page-numbers.current,.pager-single span:after,.portfolio_group.exposure .portfolio-item .desc-inner .line,.Recent_posts ul li .desc:after,.Recent_posts ul li .photo .c,.slider_pagination a.selected,.slider_pagination .slick-active a,.slider_pagination a.selected:after,.slider_pagination .slick-active a:after,.testimonials_slider .slider_images,.testimonials_slider .slider_images a:after,.testimonials_slider .slider_images:before,#Top_bar a#header_cart span,.widget_categories ul,.widget_mfn_menu ul li a:hover,.widget_mfn_menu ul li.current-menu-item:not(.current-menu-ancestor) > a,.widget_mfn_menu ul li.current_page_item:not(.current_page_ancestor) > a,.widget_product_categories ul,.widget_recent_entries ul li:after,.woocommerce-account table.my_account_orders .order-number a,.woocommerce-MyAccount-navigation ul li.is-active a,.style-simple .accordion .question:after,.style-simple .faq .question:after,.style-simple .icon_box .desc_wrapper .title:before,.style-simple #Filters .filters_wrapper ul li a:after,.style-simple .article_box .desc_wrapper p:after,.style-simple .sliding_box .desc_wrapper:after,.style-simple .trailer_box:hover .desc,.tp-bullets.simplebullets.round .bullet.selected,.tp-bullets.simplebullets.round .bullet.selected:after,.tparrows.default,.tp-bullets.tp-thumbs .bullet.selected:after{background-color: #9845aa;}.Latest_news ul li .photo, .Recent_posts.blog_news ul li .photo, .style-simple .opening_hours .opening_hours_wrapper li label,.style-simple .timeline_items li:hover h3, .style-simple .timeline_items li:nth-child(even):hover h3,.style-simple .timeline_items li:hover .desc, .style-simple .timeline_items li:nth-child(even):hover,.style-simple .offer_thumb .slider_pagination a.selected {border-color: #9845aa;}a {color: #9845aa;}a:hover {color: #772d86;}*::-moz-selection {background-color: #0095eb;color: white;}*::selection {background-color: #0095eb;color: white;}.blockquote p.author span, .counter .desc_wrapper .title, .article_box .desc_wrapper p, .team .desc_wrapper p.subtitle,.pricing-box .plan-header p.subtitle, .pricing-box .plan-header .price sup.period, .chart_box p, .fancy_heading .inside,.fancy_heading_line .slogan, .post-meta, .post-meta a, .post-footer, .post-footer a span.label, .pager .pages a, .button-love a .label,.pager-single a, #comments .commentlist > li .comment-author .says, .fixed-nav .desc .date, .filters_buttons li.label, .Recent_posts ul li a .desc .date,.widget_recent_entries ul li .post-date, .tp_recent_tweets .twitter_time, .widget_price_filter .price_label, .shop-filters .woocommerce-result-count,.woocommerce ul.product_list_widget li .quantity, .widget_shopping_cart ul.product_list_widget li dl, .product_meta .posted_in,.woocommerce .shop_table .product-name .variation > dd, .shipping-calculator-button:after,.shop_slider .shop_slider_ul li .item_wrapper .price del,.testimonials_slider .testimonials_slider_ul li .author span, .testimonials_slider .testimonials_slider_ul li .author span a, .Latest_news ul li .desc_footer,.share-simple-wrapper .icons a {color: #a8a8a8;}h1, h1 a, h1 a:hover, .text-logo #logo { color: #161922; }h2, h2 a, h2 a:hover { color: #161922; }h3, h3 a, h3 a:hover { color:black!important; }h4, h4 a, h4 a:hover, .style-simple .sliding_box .desc_wrapper h4 { color: #161922; }h5, h5 a, h5 a:hover { color: #161922; }h6, h6 a, h6 a:hover,a.content_link .title { color: #161922; }.dropcap, .highlight:not(.highlight_image) {background-color: #9845aa;}a.button, a.tp-button {background-color: #f7f7f7;color: #747474;}.button-stroke a.button, .button-stroke a.button .button_icon i, .button-stroke a.tp-button {border-color: #f7f7f7;color: #747474;}.button-stroke a:hover.button, .button-stroke a:hover.tp-button {background-color: #f7f7f7 !important;color:black;}a.button_theme, a.tp-button.button_theme,button, input[type="submit"], input[type="reset"], input[type="button"] {background-color:coral!important;color: #ffffff;}.button-stroke a.button.button_theme,.button-stroke a.button.button_theme .button_icon i, .button-stroke a.tp-button.button_theme,.button-stroke button, .button-stroke input[type="submit"], .button-stroke input[type="reset"], .button-stroke input[type="button"] {border-color: #9845aa;color: #9845aa !important;}.button-stroke a.button.button_theme:hover, .button-stroke a.tp-button.button_theme:hover,.button-stroke button:hover, .button-stroke input[type="submit"]:hover, .button-stroke input[type="reset"]:hover, .button-stroke input[type="button"]:hover {background-color:none !important;color:black!important;}a.mfn-link {color: #656B6F;}a.mfn-link-2 span, a:hover.mfn-link-2 span:before, a.hover.mfn-link-2 span:before, a.mfn-link-5 span, a.mfn-link-8:after, a.mfn-link-8:before {background: #9845aa;}a:hover.mfn-link {color: #9845aa;}a.mfn-link-2 span:before, a:hover.mfn-link-4:before, a:hover.mfn-link-4:after, a.hover.mfn-link-4:before, a.hover.mfn-link-4:after, a.mfn-link-5:before, a.mfn-link-7:after, a.mfn-link-7:before {background: #772d86;}a.mfn-link-6:before {border-bottom-color: #772d86;}.woocommerce #respond input#submit,.woocommerce a.button,.woocommerce button.button,.woocommerce input.button,.woocommerce #respond input#submit:hover,.woocommerce a.button:hover,.woocommerce button.button:hover,.woocommerce input.button:hover{background-color: #9845aa;color: #fff;}.woocommerce #respond input#submit.alt,.woocommerce a.button.alt,.woocommerce button.button.alt,.woocommerce input.button.alt,.woocommerce #respond input#submit.alt:hover,.woocommerce a.button.alt:hover,.woocommerce button.button.alt:hover,.woocommerce input.button.alt:hover{background-color: #9845aa;color: #fff;}.woocommerce #respond input#submit.disabled,.woocommerce #respond input#submit:disabled,.woocommerce #respond input#submit[disabled]:disabled,.woocommerce a.button.disabled,.woocommerce a.button:disabled,.woocommerce a.button[disabled]:disabled,.woocommerce button.button.disabled,.woocommerce button.button:disabled,.woocommerce button.button[disabled]:disabled,.woocommerce input.button.disabled,.woocommerce input.button:disabled,.woocommerce input.button[disabled]:disabled{background-color: #9845aa;color: #fff;}.woocommerce #respond input#submit.disabled:hover,.woocommerce #respond input#submit:disabled:hover,.woocommerce #respond input#submit[disabled]:disabled:hover,.woocommerce a.button.disabled:hover,.woocommerce a.button:disabled:hover,.woocommerce a.button[disabled]:disabled:hover,.woocommerce button.button.disabled:hover,.woocommerce button.button:disabled:hover,.woocommerce button.button[disabled]:disabled:hover,.woocommerce input.button.disabled:hover,.woocommerce input.button:disabled:hover,.woocommerce input.button[disabled]:disabled:hover{background-color: #9845aa;color: #fff;}.button-stroke.woocommerce-page #respond input#submit,.button-stroke.woocommerce-page a.button,.button-stroke.woocommerce-page button.button,.button-stroke.woocommerce-page input.button{border: 2px solid #9845aa !important;color: #9845aa !important;}.button-stroke.woocommerce-page #respond input#submit:hover,.button-stroke.woocommerce-page a.button:hover,.button-stroke.woocommerce-page button.button:hover,.button-stroke.woocommerce-page input.button:hover{background-color: #9845aa !important;color: #fff !important;}.column_column ul, .column_column ol, .the_content_wrapper ul, .the_content_wrapper ol {color: #9845aa;}.hr_color, .hr_color hr, .hr_dots span {color: #9845aa;background: #9845aa;}.hr_zigzag i {color: #9845aa;}.highlight-left:after,.highlight-right:after {background: #9845aa;}@media only screen and (max-width: 767px) {.highlight-left .wrap:first-child,.highlight-right .wrap:last-child {background: #9845aa;}}#Header .top_bar_left, .header-classic #Top_bar, .header-plain #Top_bar, .header-stack #Top_bar, .header-split #Top_bar,.header-fixed #Top_bar, .header-below #Top_bar, #Header_creative, #Top_bar #menu, .sticky-tb-color #Top_bar.is-sticky {background-color: #ffffff;}#Top_bar .wpml-languages a.active, #Top_bar .wpml-languages ul.wpml-lang-dropdown {background-color: #ffffff;}#Top_bar .top_bar_right:before {background-color: #e3e3e3;}#Header .top_bar_right {background-color: #f5f5f5;}#Top_bar .top_bar_right a:not(.action_button) {color: #333333;}a.action_button{background-color: #f7f7f7;color: #747474;}.button-stroke a.action_button{border-color: #f7f7f7;}.button-stroke a.action_button:hover{background-color: #f7f7f7!important;}#Top_bar .menu > li > a,#Top_bar #menu ul li.submenu .menu-toggle {color: #444444;}#Top_bar .menu > li.current-menu-item > a,#Top_bar .menu > li.current_page_item > a,#Top_bar .menu > li.current-menu-parent > a,#Top_bar .menu > li.current-page-parent > a,#Top_bar .menu > li.current-menu-ancestor > a,#Top_bar .menu > li.current-page-ancestor > a,#Top_bar .menu > li.current_page_ancestor > a,#Top_bar .menu > li.hover > a {color: #9845aa;}#Top_bar .menu > li a:after {background: #9845aa;}.menuo-arrows #Top_bar .menu > li.submenu > a > span:not(.description)::after {border-top-color: #444444;}#Top_bar .menu > li.current-menu-item.submenu > a > span:not(.description)::after,#Top_bar .menu > li.current_page_item.submenu > a > span:not(.description)::after,#Top_bar .menu > li.current-menu-parent.submenu > a > span:not(.description)::after,#Top_bar .menu > li.current-page-parent.submenu > a > span:not(.description)::after,#Top_bar .menu > li.current-menu-ancestor.submenu > a > span:not(.description)::after,#Top_bar .menu > li.current-page-ancestor.submenu > a > span:not(.description)::after,#Top_bar .menu > li.current_page_ancestor.submenu > a > span:not(.description)::after,#Top_bar .menu > li.hover.submenu > a > span:not(.description)::after {border-top-color: #9845aa;}.menu-highlight #Top_bar #menu > ul > li.current-menu-item > a,.menu-highlight #Top_bar #menu > ul > li.current_page_item > a,.menu-highlight #Top_bar #menu > ul > li.current-menu-parent > a,.menu-highlight #Top_bar #menu > ul > li.current-page-parent > a,.menu-highlight #Top_bar #menu > ul > li.current-menu-ancestor > a,.menu-highlight #Top_bar #menu > ul > li.current-page-ancestor > a,.menu-highlight #Top_bar #menu > ul > li.current_page_ancestor > a,.menu-highlight #Top_bar #menu > ul > li.hover > a {background: #9845aa;}.menu-arrow-bottom #Top_bar .menu > li > a:after { border-bottom-color: #9845aa;}.menu-arrow-top #Top_bar .menu > li > a:after {border-top-color: #9845aa;}.header-plain #Top_bar .menu > li.current-menu-item > a,.header-plain #Top_bar .menu > li.current_page_item > a,.header-plain #Top_bar .menu > li.current-menu-parent > a,.header-plain #Top_bar .menu > li.current-page-parent > a,.header-plain #Top_bar .menu > li.current-menu-ancestor > a,.header-plain #Top_bar .menu > li.current-page-ancestor > a,.header-plain #Top_bar .menu > li.current_page_ancestor > a,.header-plain #Top_bar .menu > li.hover > a,.header-plain #Top_bar a:hover#header_cart,.header-plain #Top_bar a:hover#search_button,.header-plain #Top_bar .wpml-languages:hover,.header-plain #Top_bar .wpml-languages ul.wpml-lang-dropdown {background: #9845aa;color: #9845aa;}.header-plain #Top_bar,.header-plain #Top_bar .menu > li > a span:not(.description),.header-plain #Top_bar a#header_cart,.header-plain #Top_bar a#search_button,.header-plain #Top_bar .wpml-languages,.header-plain #Top_bar a.action_button {border-color: #F2F2F2;}#Top_bar .menu > li ul {background-color: #F2F2F2;}#Top_bar .menu > li ul li a {color: #5f5f5f;}#Top_bar .menu > li ul li a:hover,#Top_bar .menu > li ul li.hover > a {color: #2e2e2e;}#Top_bar .search_wrapper {background: #9845aa;}.overlay-menu-toggle {color: #0095eb !important;background: transparent;}#Overlay {background: rgba(152, 69, 170, 0.95);}#overlay-menu ul li a, .header-overlay .overlay-menu-toggle.focus {color: #FFFFFF;}#overlay-menu ul li.current-menu-item > a,#overlay-menu ul li.current_page_item > a,#overlay-menu ul li.current-menu-parent > a,#overlay-menu ul li.current-page-parent > a,#overlay-menu ul li.current-menu-ancestor > a,#overlay-menu ul li.current-page-ancestor > a,#overlay-menu ul li.current_page_ancestor > a {color: #B1DCFB;}#Top_bar .responsive-menu-toggle,#Header_creative .creative-menu-toggle,#Header_creative .responsive-menu-toggle {color: #0095eb;background: transparent;}#Side_slide{background-color: #191919;border-color: #191919; }#Side_slide,#Side_slide .search-wrapper input.field,#Side_slide a:not(.action_button),#Side_slide #menu ul li.submenu .menu-toggle{color: #A6A6A6;}#Side_slide a:not(.action_button):hover,#Side_slide a.active,#Side_slide #menu ul li.hover > .menu-toggle{color: #FFFFFF;}#Side_slide #menu ul li.current-menu-item > a,#Side_slide #menu ul li.current_page_item > a,#Side_slide #menu ul li.current-menu-parent > a,#Side_slide #menu ul li.current-page-parent > a,#Side_slide #menu ul li.current-menu-ancestor > a,#Side_slide #menu ul li.current-page-ancestor > a,#Side_slide #menu ul li.current_page_ancestor > a,#Side_slide #menu ul li.hover > a,#Side_slide #menu ul li:hover > a{color: #FFFFFF;}#Action_bar .contact_details{color: #bbbbbb}#Action_bar .contact_details a{color: #0095eb}#Action_bar .contact_details a:hover{color: #007cc3}#Action_bar .social li a,#Header_creative .social li a,#Action_bar .social-menu a{color: #bbbbbb}#Action_bar .social li a:hover,#Header_creative .social li a:hover,#Action_bar .social-menu a:hover{color: black}#Subheader .title{color: #9845aa;}#Subheader ul.breadcrumbs li, #Subheader ul.breadcrumbs li a{color: rgba(152, 69, 170, 0.6);}#Footer, #Footer .widget_recent_entries ul li a {color: #cccccc;}#Footer a {color: #9845aa;}#Footer a:hover {color: #772d86;}#Footer h1, #Footer h1 a, #Footer h1 a:hover,#Footer h2, #Footer h2 a, #Footer h2 a:hover,#Footer h3, #Footer h3 a, #Footer h3 a:hover,#Footer h4, #Footer h4 a, #Footer h4 a:hover,#Footer h5, #Footer h5 a, #Footer h5 a:hover,#Footer h6, #Footer h6 a, #Footer h6 a:hover {color: #ffffff;}#Footer .themecolor, #Footer .widget_meta ul, #Footer .widget_pages ul, #Footer .widget_rss ul, #Footer .widget_mfn_recent_comments ul li:after, #Footer .widget_archive ul,#Footer .widget_recent_comments ul li:after, #Footer .widget_nav_menu ul, #Footer .widget_price_filter .price_label .from, #Footer .widget_price_filter .price_label .to,#Footer .star-rating span {color: #9845aa;}#Footer .themebg, #Footer .widget_categories ul, #Footer .Recent_posts ul li .desc:after, #Footer .Recent_posts ul li .photo .c,#Footer .widget_recent_entries ul li:after, #Footer .widget_mfn_menu ul li a:hover, #Footer .widget_product_categories ul {background-color: #9845aa;}#Footer .Recent_posts ul li a .desc .date, #Footer .widget_recent_entries ul li .post-date, #Footer .tp_recent_tweets .twitter_time,#Footer .widget_price_filter .price_label, #Footer .shop-filters .woocommerce-result-count, #Footer ul.product_list_widget li .quantity,#Footer .widget_shopping_cart ul.product_list_widget li dl {color: #a8a8a8;}#Footer .footer_copy .social li a,#Footer .footer_copy .social-menu a{color: #65666C;}#Footer .footer_copy .social li a:hover,#Footer .footer_copy .social-menu a:hover{color: #FFFFFF;}a#back_to_top.button.button_js,#popup_contact > a.button{color: #65666C;background:transparent;-webkit-box-shadow:none;box-shadow:none;}.button-stroke #back_to_top,.button-stroke #popup_contact > .button{border-color: ;}.button-stroke #back_to_top:hover,.button-stroke #popup_contact > .button:hover{background-color:!important;}a#back_to_top.button.button_js:after,#popup_contact > a.button:after{display:none;}#Sliding-top, #Sliding-top .widget_recent_entries ul li a {color: #cccccc;}#Sliding-top a {color: #9845aa;}#Sliding-top a:hover {color: #772d86;}#Sliding-top h1, #Sliding-top h1 a, #Sliding-top h1 a:hover,#Sliding-top h2, #Sliding-top h2 a, #Sliding-top h2 a:hover,#Sliding-top h3, #Sliding-top h3 a, #Sliding-top h3 a:hover,#Sliding-top h4, #Sliding-top h4 a, #Sliding-top h4 a:hover,#Sliding-top h5, #Sliding-top h5 a, #Sliding-top h5 a:hover,#Sliding-top h6, #Sliding-top h6 a, #Sliding-top h6 a:hover {color: #ffffff;}#Sliding-top .themecolor, #Sliding-top .widget_meta ul, #Sliding-top .widget_pages ul, #Sliding-top .widget_rss ul, #Sliding-top .widget_mfn_recent_comments ul li:after, #Sliding-top .widget_archive ul,#Sliding-top .widget_recent_comments ul li:after, #Sliding-top .widget_nav_menu ul, #Sliding-top .widget_price_filter .price_label .from, #Sliding-top .widget_price_filter .price_label .to,#Sliding-top .star-rating span {color: #9845aa;}#Sliding-top .themebg, #Sliding-top .widget_categories ul, #Sliding-top .Recent_posts ul li .desc:after, #Sliding-top .Recent_posts ul li .photo .c,#Sliding-top .widget_recent_entries ul li:after, #Sliding-top .widget_mfn_menu ul li a:hover, #Sliding-top .widget_product_categories ul {background-color: #9845aa;}#Sliding-top .Recent_posts ul li a .desc .date, #Sliding-top .widget_recent_entries ul li .post-date, #Sliding-top .tp_recent_tweets .twitter_time,#Sliding-top .widget_price_filter .price_label, #Sliding-top .shop-filters .woocommerce-result-count, #Sliding-top ul.product_list_widget li .quantity,#Sliding-top .widget_shopping_cart ul.product_list_widget li dl {color: #a8a8a8;}blockquote, blockquote a, blockquote a:hover {color: #444444;}.image_frame .image_wrapper .image_links,.portfolio_group.masonry-hover .portfolio-item .masonry-hover-wrapper .hover-desc {background: rgba(152, 69, 170, 0.8);}.masonry.tiles .post-item .post-desc-wrapper .post-desc .post-title:after,.masonry.tiles .post-item.no-img,.masonry.tiles .post-item.format-quote,.blog-teaser li .desc-wrapper .desc .post-title:after,.blog-teaser li.no-img,.blog-teaser li.format-quote {background: #9845aa;}.image_frame .image_wrapper .image_links a {color: #ffffff;}.image_frame .image_wrapper .image_links a:hover {background: #ffffff;color: #9845aa;}.image_frame {border-color: #f8f8f8;}.image_frame .image_wrapper .mask::after {background: rgba(255, 255, 255, 0.4);}.sliding_box .desc_wrapper {background: #9845aa;}.sliding_box .desc_wrapper:after {border-bottom-color: #9845aa;}.counter .icon_wrapper i {color: #9845aa;}.quick_fact .number-wrapper {color: #9845aa;}.progress_bars .bars_list li .bar .progress {background-color: #9845aa;}a:hover.icon_bar {color: #9845aa !important;}a.content_link, a:hover.content_link {color: #9845aa;}a.content_link:before {border-bottom-color: #9845aa;}a.content_link:after {border-color: #9845aa;}.get_in_touch, .infobox {background-color: #9845aa;}.google-map-contact-wrapper .get_in_touch:after {border-top-color: #9845aa;}.timeline_items li h3:before,.timeline_items:after,.timeline .post-item:before {border-color: #9845aa;}.how_it_works .image .number {background: #9845aa;}.trailer_box .desc .subtitle,.trailer_box.plain .desc .line {background-color: #9845aa;}.trailer_box.plain .desc .subtitle {color: #9845aa;}.icon_box .icon_wrapper, .icon_box a .icon_wrapper,.style-simple .icon_box:hover .icon_wrapper {color: #9845aa;}.icon_box:hover .icon_wrapper:before,.icon_box a:hover .icon_wrapper:before {background-color: #9845aa;}ul.clients.clients_tiles li .client_wrapper:hover:before {background: #9845aa;}ul.clients.clients_tiles li .client_wrapper:after {border-bottom-color: #9845aa;}.list_item.lists_1 .list_left {background-color: #9845aa;}.list_item .list_left {color: #9845aa;}.feature_list ul li .icon i {color: #9845aa;}.feature_list ul li:hover,.feature_list ul li:hover a {background: #9845aa;}.ui-tabs .ui-tabs-nav li.ui-state-active a,.accordion .question.active .title > .acc-icon-plus,.accordion .question.active .title > .acc-icon-minus,.faq .question.active .title > .acc-icon-plus,.faq .question.active .title,.accordion .question.active .title {color: #9845aa;}.ui-tabs .ui-tabs-nav li.ui-state-active a:after {background: #9845aa;}body.table-hover:not(.woocommerce-page) table tr:hover td {background: #9845aa;}.pricing-box .plan-header .price sup.currency,.pricing-box .plan-header .price > span {color: #9845aa;}.pricing-box .plan-inside ul li .yes {background: #9845aa;}.pricing-box-box.pricing-box-featured {background: #9845aa;}input[type="date"], input[type="email"], input[type="number"], input[type="password"], input[type="search"], input[type="tel"], input[type="text"], input[type="url"],select, textarea, .woocommerce .quantity input.qty,.dark input[type="email"],.dark input[type="password"],.dark input[type="tel"],.dark input[type="text"],.dark select,.dark textarea{color: #626262;background-color: rgba(255, 255, 255, 0);border-color: #EBEBEB;}::-webkit-input-placeholder {color: #929292;}::-moz-placeholder {color: #929292;}:-ms-input-placeholder {color: #929292;}input[type="date"]:focus, input[type="email"]:focus, input[type="number"]:focus, input[type="password"]:focus, input[type="search"]:focus, input[type="tel"]:focus, input[type="text"]:focus, input[type="url"]:focus, select:focus, textarea:focus {color: #1982c2;background-color: rgba(233, 245, 252, 0) !important;border-color: #d5e5ee;}:focus::-webkit-input-placeholder {color: #929292;}:focus::-moz-placeholder {color: #929292;}.woocommerce span.onsale, .shop_slider .shop_slider_ul li .item_wrapper span.onsale {border-top-color: #9845aa !important;}.woocommerce .widget_price_filter .ui-slider .ui-slider-handle {border-color: #9845aa !important;}@media only screen and ( min-width: 768px ){.header-semi #Top_bar:not(.is-sticky) {background-color: rgba(255, 255, 255, 0.8);}}@media only screen and ( max-width: 767px ){#Top_bar{background-color: #ffffff !important;}#Action_bar{background-color: #FFFFFF !important;}#Action_bar .contact_details{color: #222222}#Action_bar .contact_details a{color: #0095eb}#Action_bar .contact_details a:hover{color: #007cc3}#Action_bar .social li a,#Action_bar .social-menu a{color: #bbbbbb}#Action_bar .social li a:hover,#Action_bar .social-menu a:hover{color: #777777}}html {background-color: #FCFCFC;}#Wrapper, #Content {background-color: #FCFCFC;}body, button, span.date_label, .timeline_items li h3 span, input[type="submit"], input[type="reset"], input[type="button"],input[type="text"], input[type="password"], input[type="tel"], input[type="email"], textarea, select, .offer_li .title h3 {font-family: "Poppins", Arial, Tahoma, sans-serif;}#menu > ul > li > a, a.action_button, #overlay-menu ul li a {font-family: "Poppins", Arial, Tahoma, sans-serif;}#Subheader .title {font-family: "Poppins", Arial, Tahoma, sans-serif;}h1, h2, h3, h4, .text-logo #logo {font-family: "Poppins", Arial, Tahoma, sans-serif;}h5, h6 {font-family: "Roboto", Arial, Tahoma, sans-serif;}blockquote {font-family: "Poppins", Arial, Tahoma, sans-serif;}.chart_box .chart .num, .counter .desc_wrapper .number-wrapper, .how_it_works .image .number,.pricing-box .plan-header .price, .quick_fact .number-wrapper, .woocommerce .product div.entry-summary .price {font-family: "Poppins", Arial, Tahoma, sans-serif;}body {font-size: 13px;line-height: 25px;font-weight: 400;letter-spacing: 0px;}big,.big {font-size: 16px;line-height: 28px;font-weight: 400;letter-spacing: 0px;}#menu > ul > li > a, a.action_button, #overlay-menu ul li a{font-size: 16px;font-weight: 400;letter-spacing: 0px;}#overlay-menu ul li a{line-height: 24px;}#Subheader .title {font-size: 25px;line-height: 25px;font-weight: 400;letter-spacing: 1px;}h1, .text-logo #logo {font-size: 25px;line-height: 25px;font-weight: 300;letter-spacing: 0px;}h2 {font-size: 30px;line-height: 30px;font-weight: 300;letter-spacing: 0px;}h3 {font-size: 25px;line-height: 27px;font-weight: 300;letter-spacing: 0px;}h4 {font-size: 21px;line-height: 25px;font-weight: 300;letter-spacing: 0px;}h5 {font-size: 15px;line-height: 19px;font-weight: 700;letter-spacing: 0px;}h6 {font-size: 14px;line-height: 25px;font-weight: 400;letter-spacing: 0px;}#Intro .intro-title {font-size: 70px;line-height: 70px;font-weight: 400;letter-spacing: 0px;}@media only screen and (min-width: 768px) and (max-width: 959px){body {font-size: 13px;line-height: 21px;}big,.big {font-size: 14px;line-height: 24px;}#menu > ul > li > a, a.action_button, #overlay-menu ul li a {font-size: 14px;}#overlay-menu ul li a{line-height: 21px;}#Subheader .title {font-size: 21px;line-height: 21px;}h1, .text-logo #logo {font-size: 21px;line-height: 21px;}h2 {font-size: 26px;line-height: 26px;}h3 {font-size: 21px;line-height: 23px;}h4 {font-size: 18px;line-height: 21px;}h5 {font-size: 13px;line-height: 19px;}h6 {font-size: 13px;line-height: 21px;}#Intro .intro-title {font-size: 60px;line-height: 60px;}blockquote { font-size: 15px;}.chart_box .chart .num { font-size: 45px; line-height: 45px; }.counter .desc_wrapper .number-wrapper { font-size: 45px; line-height: 45px;}.counter .desc_wrapper .title { font-size: 14px; line-height: 18px;}.faq .question .title { font-size: 14px; }.fancy_heading .title { font-size: 38px; line-height: 38px; }.offer .offer_li .desc_wrapper .title h3 { font-size: 32px; line-height: 32px; }.offer_thumb_ul li.offer_thumb_li .desc_wrapper .title h3 {font-size: 32px; line-height: 32px; }.pricing-box .plan-header h2 { font-size: 27px; line-height: 27px; }.pricing-box .plan-header .price > span { font-size: 40px; line-height: 40px; }.pricing-box .plan-header .price sup.currency { font-size: 18px; line-height: 18px; }.pricing-box .plan-header .price sup.period { font-size: 14px; line-height: 14px;}.quick_fact .number { font-size: 80px; line-height: 80px;}.trailer_box .desc h2 { font-size: 27px; line-height: 27px; }.widget > h3 { font-size: 17px; line-height: 20px; }}@media only screen and (min-width: 480px) and (max-width: 767px){body {font-size: 13px;line-height: 19px;}big,.big {font-size: 13px;line-height: 21px;}#menu > ul > li > a, a.action_button, #overlay-menu ul li a {font-size: 13px;}#overlay-menu ul li a{line-height: 19.5px;}#Subheader .title {font-size: 19px;line-height: 19px;}h1, .text-logo #logo {font-size: 19px;line-height: 19px;}h2 {font-size: 23px;line-height: 23px;}h3 {font-size: 19px;line-height: 20px;}h4 {font-size: 16px;line-height: 19px;}h5 {font-size: 13px;line-height: 19px;}h6 {font-size: 13px;line-height: 19px;}#Intro .intro-title {font-size: 53px;line-height: 53px;}blockquote { font-size: 14px;}.chart_box .chart .num { font-size: 40px; line-height: 40px; }.counter .desc_wrapper .number-wrapper { font-size: 40px; line-height: 40px;}.counter .desc_wrapper .title { font-size: 13px; line-height: 16px;}.faq .question .title { font-size: 13px; }.fancy_heading .title { font-size: 34px; line-height: 34px; }.offer .offer_li .desc_wrapper .title h3 { font-size: 28px; line-height: 28px; }.offer_thumb_ul li.offer_thumb_li .desc_wrapper .title h3 {font-size: 28px; line-height: 28px; }.pricing-box .plan-header h2 { font-size: 24px; line-height: 24px; }.pricing-box .plan-header .price > span { font-size: 34px; line-height: 34px; }.pricing-box .plan-header .price sup.currency { font-size: 16px; line-height: 16px; }.pricing-box .plan-header .price sup.period { font-size: 13px; line-height: 13px;}.quick_fact .number { font-size: 70px; line-height: 70px;}.trailer_box .desc h2 { font-size: 24px; line-height: 24px; }.widget > h3 { font-size: 16px; line-height: 19px; }}@media only screen and (max-width: 479px){body {font-size: 13px;line-height: 19px;}big,.big {font-size: 13px;line-height: 19px;}#menu > ul > li > a, a.action_button, #overlay-menu ul li a {font-size: 13px;}#overlay-menu ul li a{line-height: 19.5px;}#Subheader .title {font-size: 15px;line-height: 19px;}h1, .text-logo #logo {font-size: 15px;line-height: 19px;}h2 {font-size: 18px;line-height: 19px;}h3 {font-size: 15px;line-height: 19px;}h4 {font-size: 13px;line-height: 19px;}h5 {font-size: 13px;line-height: 19px;}h6 {font-size: 13px;line-height: 19px;}#Intro .intro-title {font-size: 42px;line-height: 42px;}blockquote { font-size: 13px;}.chart_box .chart .num { font-size: 35px; line-height: 35px; }.counter .desc_wrapper .number-wrapper { font-size: 35px; line-height: 35px;}.counter .desc_wrapper .title { font-size: 13px; line-height: 26px;}.faq .question .title { font-size: 13px; }.fancy_heading .title { font-size: 30px; line-height: 30px; }.offer .offer_li .desc_wrapper .title h3 { font-size: 26px; line-height: 26px; }.offer_thumb_ul li.offer_thumb_li .desc_wrapper .title h3 {font-size: 26px; line-height: 26px; }.pricing-box .plan-header h2 { font-size: 21px; line-height: 21px; }.pricing-box .plan-header .price > span { font-size: 32px; line-height: 32px; }.pricing-box .plan-header .price sup.currency { font-size: 14px; line-height: 14px; }.pricing-box .plan-header .price sup.period { font-size: 13px; line-height: 13px;}.quick_fact .number { font-size: 60px; line-height: 60px;}.trailer_box .desc h2 { font-size: 21px; line-height: 21px; }.widget > h3 { font-size: 15px; line-height: 18px; }}.with_aside .sidebar.columns {width: 23%;}.with_aside .sections_group {width: 77%;}.aside_both .sidebar.columns {width: 18%;}.aside_both .sidebar.sidebar-1{margin-left: -82%;}.aside_both .sections_group {width: 64%;margin-left: 18%;}@media only screen and (min-width:1240px){#Wrapper, .with_aside .content_wrapper {max-width: 1240px;}.section_wrapper, .container {max-width: 1220px;}.layout-boxed.header-boxed #Top_bar.is-sticky{max-width: 1240px;}}@media only screen and (max-width: 767px){.section_wrapper,.container,.four.columns .widget-area { max-width: 480px !important; }}#Top_bar #logo,.header-fixed #Top_bar #logo,.header-plain #Top_bar #logo,.header-transparent #Top_bar #logo {height: 60px;line-height: 60px;padding: 15px 0;}.logo-overflow #Top_bar:not(.is-sticky) .logo {height: 90px;}#Top_bar .menu > li > a {padding: 15px 0;}.menu-highlight:not(.header-creative) #Top_bar .menu > li > a {margin: 20px 0;}.header-plain:not(.menu-highlight) #Top_bar .menu > li > a span:not(.description) {line-height: 90px;}.header-fixed #Top_bar .menu > li > a {padding: 30px 0;}#Top_bar .top_bar_right,.header-plain #Top_bar .top_bar_right {height: 90px;}#Top_bar .top_bar_right_wrapper {top: 25px;}.header-plain #Top_bar a#header_cart,.header-plain #Top_bar a#search_button,.header-plain #Top_bar .wpml-languages,.header-plain #Top_bar a.action_button {line-height: 90px;}@media only screen and (max-width: 767px){#Top_bar a.responsive-menu-toggle {top: 40px;}.mobile-header-mini #Top_bar #logo{height:50px!important;line-height:50px!important;margin:5px 0;}}.twentytwenty-before-label::before { content: "Before";}.twentytwenty-after-label::before { content: "After";}#Side_slide{right:-250px;width:250px;}.blog-teaser li .desc-wrapper .desc{background-position-y:-1px;}
</style>
<!-- style | custom css | page options -->
<style id="mfn-dnmc-page-css">
.ui-tabs .ui-tabs-nav li.ui-state-active a {
    background-color: #efefef;
    color: #1a2461 !important;
}
.section.mcb-section.no-margin-h.no-margin-v.full-width.sertv {
    box-shadow: inset 0 0 0 2000px #333333a3;
}
.ui-tabs .ui-tabs-nav li {
    list-style: none;
    float: left;
    position: relative;
    white-space: nowrap;
    border-style: solid;
    border-width: 0 1px 0 0;
    margin: 0;
    padding: 0;
    background-color: #01003e !important;
    width: 225px;
    border-right: 1px solid;
    color: #fff;
}

.innerpadcontentt {
    padding: 0px 47px;
      background-color: #161618cc !important;
}
.ui-tabs-panel ul {
    margin: 14px 0 15px 0px;
}
.ourcl li:before {
    content: '\f178';
    font-family: 'FontAwesome';
    font-size: 18px;
    color: #000;
}
.ourcl li {
    list-style-type: none;
    text-indent: -4%;
    padding-bottom: 2%;
}
.section.mcb-section.no-margin-h.no-margin-v.full-width {
    background-size: cover;
}


li {
    list-style-type: none!important;
}




a.tabidd {
    color: aliceblue;
}



.list-unstyled {
    padding-left: 0;
    list-style: none;
}

a.idd {
    display: block;
    background: #003c81;
    color: #fff;
    border-bottom: 3px solid #404040;
    margin-bottom: 10px;
    padding: 10px 40px 10px 20px;
    position: relative;
    font-size: 1.2em;
}
a.white {
    color: #313131 !important;
    font-size: 17px;
}
a.idd:hover {
    background-color: #00244e;
}

p.patternsection {
    font-size: 18px;
    padding: 1px;
}


@media only screen and (max-width:768px)
{
.ourservicesrightpanelcontent h3 {
    font-size: 20px !important;
}
.innerpadcontentt {
    
 width: 368px;
 margin-left: 0px;
}

}





@media only screen and (max-width:480px)
{
.ourservicesrightpanelcontent h3 {
    margin-right: 43% !important;
}
.sertv .innerpadcontentt {
    padding: 20px 44px;
    width: 343px;
    background-color: #132e8d;
    margin-top: -26px;
    margin-left: 2px;
}
.innerpadcontentt {
   
    width: 400px;
    margin-left: 0px;
}

}

@media only screen and (max-width:360px)
{

.innerpadcontentt {
    width: 400px;
    margin-left: -28px;
}

.column_attr.align_center {
    text-align: center;
}
}
</style>
	<noscript><style>.woocommerce-product-gallery{ opacity: 1 !important; }</style></noscript>
	<link rel="icon" href="https://www.tutorsindia.com/wp-content/uploads/2019/07/cropped-Tutorssindia-Logo-pixed-1-32x32.png" sizes="32x32" />
<link rel="icon" href="https://www.tutorsindia.com/wp-content/uploads/2019/07/cropped-Tutorssindia-Logo-pixed-1-192x192.png" sizes="192x192" />
<link rel="apple-touch-icon" href="https://www.tutorsindia.com/wp-content/uploads/2019/07/cropped-Tutorssindia-Logo-pixed-1-180x180.png" />
<meta name="msapplication-TileImage" content="https://www.tutorsindia.com/wp-content/uploads/2019/07/cropped-Tutorssindia-Logo-pixed-1-270x270.png" />
		<style type="text/css" id="wp-custom-css">
			#Top_bar a#header_cart {
    display: none;
    position: relative;
    top: 9px;
    display: none!important;
    float: left;
    font-size: 22px;
    line-height: 22px;
    margin-right: 5px;
}


.leftsidebg .column_attr.align_center {
    padding-left: 4%;
    padding-right: 5%;
    height: 755px;
}
@media only screen and (max-width:350px) {
  .law-007 {
      background-color: #eaeef2;
    width: 100%;
    float: left;
 padding-right: 31px;
    padding-top: 20px;
  }
}
.fisee .column_attr.clearfix {
    height: 296px;
    background: #efefef !important;
}
#Footer .footer_copy .copyright {
    /* float: right; */
    width: 100%;
    font-weight: 600;
    font-size: 14px;
    color: #ded8d8;
    margin: 5px 0px;
   text-align: center!important; 
}
@media screen and (max-width: 900px) and (min-width: 300px) {
 . writing-works-white{
   color:white;
	 padding-bottom:0%!important;
	 line-height:20px;
	 height:200px!important;
  }
}
@media screen and (max-width: 900px) and (min-width: 300px)
{
.un_limi {
    padding-top: 3%!important;
    padding-bottom: 21%!important;
    border-bottom: 1px solid #b0afaf!important;
    height: 180px!important;
}
}




.column.mcb-column.one.column_column.mwhi {
    margin-top: -21px!important;
}
@media only screen and (max-width: 1280px)
.rightpaddtr .column_attr.clearfix.align_center {
	height: 308px!important;}
.fa-book:before {
    content: "\f02d";
	color:black;
}
.leftcontactbg .column_attr.clearfix {
    height: 100%!important;
}
i.fas.fa-map-marker {
    color: white!important;
}
.fa-headset:before {
    color: white!important;
}
.fa-whatsapp-square:before {
	color: white!important;
}
.fa-hand-point-up:before{
	color:white!important;
}
.fa-book:before{
	color:white!important;
}
.fa-skype:before{
	color:white!important;
}
@media only screen and (max-width: 300px) {
.widgets_wrapper {
    padding: 0px  !important;
}}

/*footer#Footer {
    padding: 0px 80px !important;
}*/

.alert-secondary {
    padding-top: 2%;
}
a.btn.btn-block.btn-info {
    color: #fff;
}
.soicailmedi a:hover {
    color: #fff !important;
}
.widget-area:before {
    background: #fff0;
}
.panel.panel-default br {
    display: none;
}
.ornowhel {
    background: rgb(34 45 104) !important;
}

.panel.panel-default a {
    padding-bottom: 10px;
    display: inline-block;
}
.panel.panel-default {
    padding-bottom: 1%;
}
ul.subarrow a {
  
    vertical-align: middle;
}
.subarrow h5 {
    font-size: 20px;
    font-weight: 400;
}
.samwork a:hover {
    color: inherit;
}
.samwork ol {
    margin-left: 14px;
}
.samwork strong {
    font-weight: 600;
}
ul.sub-menu li a {
    padding: 0;
}
h5, h6 {
 
    font-family: inherit;
}
table.basicdetails td {
    text-align: left;
}
.ui-tabs .ui-tabs-nav li a {
    font-size: 14px!important;
    font-weight: 400 !important;
}
.samwork table td {
    color: #212529;
}
.samwork a {
    color: #0b57a8;
    font-weight: 500;
}
.button-stroke button:hover {
    background-color: #071d37 !important;
    color: #fff !important;
}
aside#custom_html-5 h3 {
    font-size: 18px;
    color: #212529;
    font-weight: 500;
}
.sidwidside i.fa.fa-angle-right {
    padding-left: 2%;
    font-size: 17px;
    vertical-align: middle;
    font-weight: 600;
}
.sidwidside ul li {
    color: #0b57a8 !important;
    font-size: 15px;
    padding-bottom: 1%;
}
.ornow .column_attr.align_left {
    text-align: left;
    padding-left: 3%;
    padding-top: 2%;
    padding-bottom: 1%;
}
.sidwidside ul li a {
    color: #0b57a8;
}
.ornow a.btn.btn-defaultfourboxx {
   
    margin-top: 0%;
}
.sampledis h3 {
    background: #071d37;
    padding: 3%;
    padding-left: 3%;
    font-size: 19px;
    margin-bottom: 0;
}
.list-group.list-icons-arrow h4.white {
    color: #222222 !important;
}
.subrab {
   
    margin-bottom: 1%;
}
.sampledis {
    width: 94%;
    margin: auto;
    display: block;
    margin-left: 2%;
}
.botsid p {
    text-align: center;
}
p.text-primary.mb-0 {
    color: #117c8d;
}
.botsid h2 {
    color: #212529 !important;
}
ul.subrab i.fa.fa-angle-right {
    padding-left: 1%;
}
.subpnel {
    margin-top: 0;
    border: 1px solid rgba(0,0,0,.125);
    padding-top: 1%;
    height: auto;
    padding-bottom: 1%;
}
.subrab a {
    color: #0b57a8 !important;
    font-weight: 500;
    font-size: 15px;
}
ul.subrab li {
    list-style-type: none;
    margin-bottom: 0;


}
.sampledis .fa {
    font-weight: 600;
}
.sampledis h3 i.fa.fa-angle-right {
    float: right;
    font-size: 27px;
}
.botsid h2 {
    color: #212529 !important;
    text-align: center;
    font-size: 26px;
    font-weight: 500;
	    margin-bottom: 10px;
}
ul.subrab li a {
    color: #0b57a8;
    font-weight: 500;
    font-size: 15px;
}
.subrab {
    margin-left: 16px;
    border: 1px solid rgba(0,0,0,.125);
    padding: 1%;
    margin-top: 0;
}
.subrab p {
    margin-bottom: 0;
}
i.fa.fa-angle-down {
    float: right;
    font-size: 27px;
}
.servicess h4 a {
    color: #fff;
    font-size: 15px;
    font-weight: 500;
}
div#contentsecpart a.btn.btn-defaulttt:hover {
    background: #222c67 !important;
    color: #fff !IMPORTANT;
}
.servicess h4 {
    background: #071d37;
    margin-top: -3%;
    padding: 3%;
    font-size: 20px;
    color: #fff;
}
.sampledis h3 a {
    color: #fff;
    font-size: 18px;
}
.botsid a {
    background: #071d37;
    color: #fff;
    padding: 6px 20px;
    border-radius: 5px;
    font-size: 15px;
    display: inline-block;
}
.botsid {
    text-align: center;
}


.uniimg img {
    width: 7%;
    vertical-align: middle;
    padding-right: 2%;
}
.samwork h4 {
    font-size: 19px;
    color: #071d37 !important;
    font-weight: 400;
}
.samwork h5 {
    font-size: 23px;
    color: #071d37 !important;
    font-weight: 400;
}
.samwork ul li {
  
    color: #222222;
}
.samwork ol li {
    color: #212529;
}
ul.diss-com li {
    list-style-type: disc;
    padding-left: 0;
    margin-left: 6%;
    padding-bottom: 3%;
}

.ornoww {
    padding-left: 6%;
    padding-top: 27px !important;
    padding-bottom: 1% !important;
    background: #dddfe3;
}

.ornoww h4.white {
    color: #000 !important;
    margin-bottom: 2px;
    font-size: 19px !important;
}
.ornoww a.btn.btn-defaultfourboxx {
    border: 1px solid #fff;
    font-size: 15px;
    color: #fff;
    background: #fff;
    font-weight: bold;
    border-radius: 7px;
    padding: 15px 28px;
    background-color: #1a245f !important;
    display: inline-block;
    margin-top: 0px;
}
.ornoww h3.white {
    color: #313131 !important;
    margin-top: 0px;
    line-height: 21px;
    font-size: 16px !IMPORTANT;
}

.icon_box .icon_wrapper, .icon_box a .icon_wrapper, .style-simple .icon_box:hover .icon_wrapper {
    color: #01003e;
}
.icon_box:hover .icon_wrapper:before, .icon_box a:hover .icon_wrapper:before {
    background-color: #01003e;
}
ul.filters_buttons {
    display: none;
}
.post-meta .author-date a {
    
    color: #222222;
}
.zcwf_lblLeft .zcwf_col_fld input[type=text], .zcwf_lblLeft .zcwf_col_fld textarea {
    width: 100% !important;
    margin-bottom: 4px;
}
.soicailmedi .fa-facebook {
  background: #3B5998;
  color: white;
}

.soicailmedi .fa-twitter {
  
    color: white;
}



.soicailmedi .fa-linkedin {

  color: white;
}

ul.soicailmedi .fa {
    font-size: 18px;
    padding-left: 6px;
}
.soicailmedi a.facebook {
    background-color: #3b5998;
}
.soicailmedi a.twitter {
    background-color: #136394;
}
.soicailmedi a.linkedin {
    background: #0077b5;
}
.soicailmedi a.whatsapp {
    background: #296925;
}

.soicailmedi .fa-instagram {
 
  color: white;
}

.soicailmedi .fa-whatsapp {
    
    color: white;
}
ul.soicailmedi li {
    display: inline-block;
	    margin: 0 !important;
}

.soicailmedi a.whatsapp {
    background: #296925;
}
.soicailmedi a {
    padding: 5px 12px !important;
    border-radius: 2px;
    color: #fff;
    margin: 2px;
}
.samwork {
    padding-left: 3%;
    padding-bottom: 6% !important;
}
.samwork b {
    font-weight: 500;
}
p.sharet {
    float: left;
 padding-top: 0px !important;
    padding-right: 7px;
}
.samwork .column.mcb-column.one.column_column.one.column {
  
    margin-bottom: 0;
}
.samwork img {
    margin: auto;
    display: block;
	margin-bottom: 3%;
}
.samwork h6 {
    font-size: 18px;
    font-family: inherit;
}
.samwork h2 {
    font-size: 23px;
    color: #071d37;
    font-weight: 400;
}
a.taglit {
    background: #071d37;
    color: #fff !important;
    padding: 2px 7px;
    border-radius: 6px;
    font-size: 13px;
    margin-bottom: 2%;
    display: inline-block;
}
.samwork h3 {
    font-size: 20px;
    color: #071d37;
    font-weight: 400;
}
.pricelist h3 {
    color: #222222 !important;
    font-size: 22px;
    font-weight: 600;
    padding-bottom: 4%;
}
.pricelist h1 {
    padding-bottom: 4%;
}
.pricelist p {
    color: #000;
text-align: center;
}
.btn-success {
    color: #fff;
    background-color: salmon;
    width: 73%;
    padding: 1% 3%;
    margin: auto;
    display: inline-block;
    margin-bottom: 3%;
    margin-top: 4%;
}
.btn-whatsapp {
    color: #fff;
    background-color: #25d366;
    border-color: #25d366;
    margin: auto;
    padding: 1% 10%;
    margin-bottom: 5%;
    display: inline-block;
}
a.livechat.btn.btn-secondary.mt-2.btn-block {
    display: inline-block;
    color: #fff;
    background-color: #2368b0;
    border-color: #2368b0;
    margin: auto;
    padding: 1% 14%;
}
.sidwid {
    -webkit-box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
    padding-left: 7px;
    padding-right: 7px;
    width: 100%;
    margin-right: 1%;
    margin-left: 2%;
    margin-bottom: 4%;
    border: 1px solid #dee2e6;
	    background: #fff;
	    border-radius: 5px;
}
.column_column ul, .column_column ol, .the_content_wrapper ul, .the_content_wrapper ol {
    
    color: inherit;
}
.pricelist {
    background: #fff;
    border-radius: 18px;
    padding: 20px 0 21px;
    width: 100%;
    text-align: center !important;
    margin: auto;
    margin-top: 5%;
    padding-bottom: 6%;
}
.sidwid ul li {
    list-style-type: none;
    padding-bottom: 3%;
}
.alert-secondary a {
    color: #fff;
    background-color: #222;
    border-color: #222;
    margin: auto;
    text-align: center;
    display: table;
    padding: 8px 18px;
    border-radius: 5px;
    margin-top: 8px;
}
.esaaufi {
    background: linear-gradient(180deg,#071d37,#0b57a8 95%);
}
.esaaufi a {
   
    color: #071d37 !important;
    
}
.sidwid h3 {
    color: #222 !important;
    text-align: left;
    font-weight: 500;
    font-size: 22px;
}
i.fa.fa-check {
    padding-right: 2%;
}
.samwork ul li {
    font-size: 14px;
    margin-left: 3%;
}
.samwork ul {
    margin-left: 0;
}
.samwork h1 {
    color: #222;
    font-weight: 400;
    padding-bottom: 3%;
    line-height: 30px;
}

.esaaufi p {
    width: 80%;
    margin: auto;
    font-size: 16px;
    padding-bottom: 1%;
}
.esaaufi a {
    font-weight: 700;
    color: #071d37;
    font-size: 14px;
}
.esaaufi h1 {
    font-size: 30px;
	padding-bottom: 0 !important;
   
	font-weight: 500 !important;
}
.samworks h3 {
    color: #222222 !important;
}
.samworks {
    padding-right: 3%;
}
ul.sailli li {
    list-style-type: disc;
}
ul.sailli {
    margin-left: 7%;
	    padding-top: 6%;
}
.lidiss a.list-group-item {
    font-size: 15px;
    display: list-item;
    list-style-type: disc;
}
ul.fulled li:before {
       -webkit-text-stroke: 1px #fcfcfc !important;
}
ul.fulled {
    color: #fff;
}

a.btn.btn-info:hover {
    background-color: #fff;
      color: #000 !important;
    border: 1px solid #01003e;
}

div#middleinnersec {
    background-color: #222c67;
}
ul.dropdown-menu {
    padding-left: 3%;
}
div#contentsecpart h3.white {
    color: #fff !important;
}
div#contentsecpart p.white {
    color: #fff !important;
}
.litedy h3 {
    color: #1a2562 !important;
    font-size: 18px;
    font-weight: 400;
}
.litedy a {
    color: #08437e;
}
ul.brati li {
    list-style-type: disc !important;
}
.litedy ul li {
    list-style-type: disc;
    margin-left: 2%;
}
ul.brati li:before {
    content: none;
}
.sidescroll ul {
    margin-left: 0px;
}
.sidebarr a.list-group-item:hover {
    background: none;
    color: #222;
}
.sidebarr a.list-group-item {
    
    padding-left: 1%;
}
.sidebarr ul li:before {
    content: "\f105";
    font-family: 'FontAwesome';
       padding-right: 1% !important;
    color: #000;
    -webkit-text-stroke: 1px #1b2562;
}
.sidebarr ul li {
    list-style-type: none;
}
.sidebarr ul {
    margin-left: 0px;
}

.sidescroll ul li {
   
    text-align: justify;
}

.sidescroll {
    margin-top: 1%;
    margin-bottom: 3%;
}

h4.orderessay {
    margin-bottom: 0px;
    background-color: #1b2562;
    padding-top: 8px;
    padding-bottom: 6px;
    padding-left: 7px;
    font-size: 15px;
    font-weight: 600;
    margin-top: 4%;
}
h4.orderessay a {
    color: #fff !important;
}
a.expbu {
    display: inline-block;
    margin-top: 4%;
    font-size: 14px;
}

.covivontenttli {
    position: relative;
    height: 400px;
}

.sampleref {
    background-color: #efefef;
    padding: 10px;
    border-radius: 0px;
}
.covivontentpresent {
    position: relative;
    height: 1271px;
}

.sidescroll a:hover {
    color: #1b2562;
}

.sidescroll a.btn.btn-block.btn-info {
    color: #fff;
}
.pad h3 {
    color: #222222 !important;
    padding-top: 3%;
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: 500;
}
.sidescroll a {
    
    font-weight: 500;
}
.list-group i:hover {
    color: #000;
}
.covivontenfor {
    position: relative;
    height: 986px;
}
.covivontentpar {
    position: relative;
    height: 1901px;
}
.covivontentpa {
    position: relative;
    height: 813px;
}

.covivontentdel {
    position: relative;
    height: 881px;
}

.covivontentpres {
    position: relative;
    height: 887px;
}
.featureboxside ul li {
    color: #000;
}
.covivontprp {
    position: relative;
    height: 672px;
}

div#contentsecpart {
    padding-left: 3%;
}
.press-page a:hover {
    color: #222c67;
}
.eff a.btn.btn-block.btn-warning {
    color: #fff !important;
}
a.btn.btn-warning {
       color: #fff;
}


.bac_blue h2.white {
    color: #000;
}
p.blackcontent a {
    color: #161d5e;
    font-weight: 600;
}
.accordion .question.active .title
{
    color: black;
}
div#contentsecpart a.btn.btn-defaulttt {
    background: #222c67;
    color: #fff;
}
.column.mcb-column.one-second.column_accordion li

.manu_your h2.white {
   
    font-size: 29px;
   
    line-height: 25px;
}
.manu_bac h2.white {
   
    font-size: 29px;
   
    line-height: 25px;
}
.acaresearch h2.white {
   
    font-size: 29px;
   
    line-height: 25px;
}
.manu-your h2.white {
    font-size: 29px;
    line-height: 37px;
}
.manu-bac h2.white {
   
    font-size: 29px;
   
    line-height: 25px;
}

.deliprocess h2.white {
   
    font-size: 29px;
   
    line-height: 25px;
}
.whychooe h2.white {
    font-size: 29px;

}

.rightwhatservices ul li {
    color: #000;
}

.bac-blue h2.white {
    color: #000 !important;
}
.specisubj h4.white {
   
    color: #000 !important;
  
}
.rightwhatservices a.btn.btn-defaultfourboxx {

   
    background: #222c67;
  
    color: #fff;
}
.rightwhatservices h3.white {
    color: #000 !important;
   
}
.servicessec .section_wrapper.mcb-section-inner {
    box-shadow: inset 0 0 0 2000px rgb(15 16 32 / 73%);
}
.covivontentrec {
    position: relative;
    height: 550px;
}

h2.offerclass {
    font-weight: 600;
    font-size: 29px;
    color: #fffffe;
}

.ornow h3.white {
    text-align: left;
}

.our-deli h2.white {
    font-weight: 500;
    font-size: 29px;
    color: #000;
}
.tidiff h2.blue:before {
    content: counter(my-awesome-counter);
    color: #222c67;
    font-size: 1.6rem;
    position: absolute;
    left: -55px;
    line-height: 41px;
    width: 40px;
    height: 40px;
    top: 0;
    border-radius: 50%;
    border: 1px solid #222c67;
    text-align: center;
}
.tidiff h2.blue {
    counter-increment: my-awesome-counter;
    position: relative;
}
a.btn.btn-defaulttt {
   
    margin: 0px 15px 0px 0px;
   
   
}
.fotsi .btn-info {
    padding: 7px 11px !important;
}


.protu h1 {
    color: #fff !important;
}

.sectionscroll a:hover {
    color: #222d68;
}

p.reference a:hover {
    color: #222d68;
}

.covivontentess {
    position: relative;
 
    height: 833px;
}

.covivontentsyo {
    position: relative;
    
    height: 2522px;
}


.covivontentpla {
    position: relative;
   
    height: 710px;
}

.covivontentcour {
    position: relative;
   
    height: 917px;
}


.covivontentme {
    position: relative;
   height: 2814px;
}

.covivontentpol {
    position: relative;
    height: 1578px;
}

.covivontentext {
    position: relative;
    height: 190px;
}

.covivontentgrat {
    position: relative;
    height: 719px;
}


.cabra {
    padding-top: 3% !important;
}
.allca .column_attr.clearfix {
   
    width: 97%;
}
a.ask:hover {
    color: #222c67;
}
.covivontentla {
    position: relative;
    height: 1017px;
}
.covivontentsur {
    position: relative;
    height: 1051px;
}

.covivontentelea {
    position: relative;
    height: 333px;
}

h3.ble {
    color: #092e9a !important;
    font-size: 16px;
	font-weight: 600;
}
h4.ble {
    color: #092e9a !important;
    
	    font-size: 16px !important;
	font-weight: 600;
}
.covivontentweb {
    position: relative;
    height: 232px;
}
.covivontentgra {
    position: relative;
    height: 447px;
}

.covivontentbig {
    position: relative;
    height: 789px;
}

.covivontentpog {
    position: relative;
    height: 406px;
}
.covivontentcod {
    position: relative;
    height: 364px;
}
.covivontentsser {
    position: relative;
    height: 1459px;
}
.covivontenten {
    position: relative;
    height: 1795px;
}
.covivontencom {
    position: relative;
    height: 974px;
}
.covivontenbios {
    position: relative;
    height: 1435px;
}
.covivontentmedi {
    position: relative;
    height: 1434px;
}

.covivontentab {
    position: relative;
    height: 1121px;
}
.covivontenqua {
    position: relative;
    height: 878px;
}
.covivontentser {
    position: relative;
    height: 870px;
}
.covivontenttex {
    position: relative;
    height: 394px;
}
.topspaeakbu .column_attr.clearfix.align_center.bg-cover {
    box-shadow: inset 0 0 0 2000px rgb(0 2 42 / 97%);
}

.covivontenttbu {
    position: relative;
    height: 873px;
}
.covivontentcrit {
    position: relative;
    height: 420px;
}
.covivontentre {
    position: relative;
    height: 1133px;
}
.covivontenttp {
    position: relative;
    height: 1119px;
}
.pull-right.global-socials a:hover {
    color: #0e4699;
}
.fotsi a.list-group-item {
    font-size: 15px;
    position: relative;
    left: 5%;
}
.lidiss a.list-group-item {
    padding-bottom: 5px;
}
.on-delivery {
    background: #0f1542;
    height: 168px;
    padding-top: 4%;
    padding-bottom: 7%;
    padding-left: 3%;
    padding-right: 3%;
}
.ori_gua {
    padding-top: 38px;
    padding-bottom: 38px;
    height: 191px;
    background: #0f1542;
    text-align: center;
    padding-left: 4%;
    padding-right: 4%;
}
.un_limi h3.white {
    color: #000 !important;
}
.un_limi p.white {
    color: #000;
}
.un_limi {
    padding-top: 2%;
    padding-bottom: 9%;
    background: #dddfe3;
    color: #000;
    padding-left: 3%;
    padding-right: 3%;
    height: 165px;
}
.rightsidebge h1#lineheighthone {
    color: #fff;
}
input[type="date"], input[type="email"], input[type="number"], input[type="password"], input[type="search"], input[type="tel"], input[type="text"], input[type="url"], select, textarea {
    
    margin-bottom: 13px;
  
}
div#topsectionmenu a {
    display: inline-block;
    margin-top: 0%;
    color: #000;
}
ul.dropdown-menu li {
    list-style-type: disc;
    color: #000;
}
div#topsectionmenu a:hover {
    color: #252781;
}
.g-recaptcha {
    transform: scale(0.91);
    transform-origin: 0 0;
}
.leftsidebg h3 {
    font-weight: 500;
}

a.btn.btn-block.btn-warning:hover {
    color: #06c !important;
}
.panelleftdissertationtopic h1#lineheighthone {
    color: #fff;
}
.tidiff h3.blue:before {
    content: counter(my-awesome-counter);
    color: #222c67;
    font-size: 1.6rem;
    position: absolute;
    left: -55px;
    line-height: 41px;
    width: 40px;
    height: 40px;
    top: 0;
    border-radius: 50%;
    border: 1px solid #222c67;
    text-align: center;
}
.tidiff .column_attr.clearfix {
    padding: 15px 20px 20px 68px;
}
.tidiff h3.blue {
    counter-increment: my-awesome-counter;
    position: relative;
}
.convincepad h4.white {
   
    font-weight: 400;
}
.specisubj .column_attr.clearfix.align_center {
    position: relative;
	background: #fff;
   
}
.freeoff h4.white {
    font-size: 16px;
    color: #fff !important;
    font-weight: 400;
}
.post-links a:hover {
    color: #1a2562 !important;
}
ul.Acacon {
    column-count: 2;
}
.economics h4.white {
    color: #000 !important;
}
.economics p.white {
    color: #000;
   
}
.tindia h1#lineheighthone {
    color: #fff;
}
.covivontet {
    position: relative;
    height: 2674px;
}
.covivontug {
    position: relative;
    height: 2738px;
}
.covivonsta {
    position: relative;
    height: 1685px;
}
.covivontcv {
    position: relative;
    height: 531px;
}
.covivontpo {
    position: relative;
    height: 1070px;
}
.covivontresi {
    position: relative;
    height: 1716px;
}
.covivontdpart {
    height: 2715px;
    position: relative;
}
i.icon-search-fine {
    position: relative;
    top: 53px;
    color: #000;
}
#Top_bar.is-sticky i.icon-search-fine {
    position: relative;
    top: 0px;
    color: #fff;
}

.covivontentt {
    position: relative;
    height: 614px;
}
.madis .column_attr.clearfix.align_center.bg-cover {
    height: 640px;
}
ul.colcounrw {
    column-count: 2;
}
.topspaeakk .column_attr.clearfix.align_center.bg-cover {
    box-shadow: inset 0 0 0 2000px rgb(0 2 42 / 97%);
}
div#secone {
    padding: 0px;
    background-color: #dfdfdf00;
}

div#sectwo {
    padding: 0px;
    background-color: #dfdfdf00;
}

div#secthree {
    padding: 0px;
    background-color: #dfdfdf00;
}
div#secfour {
    padding: 0px;
    background-color: #dfdfdf00;
}
div#secfive {
    padding: 0px;
    background-color: #dfdfdf00;
}
div#secsix {
    padding: 0px;
    background-color: #dfdfdf00;
}
div#secseven {
    padding: 0px;
    background-color: #dfdfdf00;
}
div#seceight {
    padding: 0px;
    background-color: #dfdfdf00;
}
div#secnine {
    padding: 0px;
    background-color: #dfdfdf00;
}
div#secten {
    padding: 0px;
    background-color: #dfdfdf00;
}
div#seceleven {
    padding: 0px;
    background-color: #dfdfdf00;
}
div#sectwelve {
    padding: 0px;
    background-color: #dfdfdf00;
}
div#secthirteen {
    padding: 0px;
    background-color: #dfdfdf00;
}
.endiss .column_attr.clearfix.align_center.bg-cover {
    height: 1819px;
}
.tosel .column_attr.clearfix {
    padding-left: 4%;
    padding-right: 4%;
}
h1#lineheighthone {
    color: #000;
}
.whychooe h4.white {
    font-weight: 400;
}
.featureboxside .column_attr.clearfix {
    padding-left: 4%;
    padding-right: 4%;
}
.ukassi .column_attr.clearfix.align_center.bg-cover {
    height: 963px;
}
.csleftl .column_attr.clearfix {
    background: #efefef;
    margin-bottom: -10px;
}
.ornow {
    
    padding-bottom: 1% !important;
}
.csleftl h4 {
    color: #222c67 !important;
}
.csleftfou .bg-cover {
    height: 878px;
}
.csleftl h4.black {
    font-size: 16px;
}

p#lineheighthone {
    color: #313131;
}
.csleftufi .bg-cover {
    height: 888px;
}
div#bgfortopicchoose {
    background-color: #efefef;
	padding: 0px;
   
}
div#bgfortopicchoosebottom {
    background-color: #efefef;
	padding: 0px;
}
div#bgfortopicchoosebottom1 {
    background-color: #efefef;
	padding: 0px;
}
div#bgfortopicchoose1 {
    background-color: #efefef;
	padding: 0px;
   
}
.csleftl .col-md-6 {
    padding-left: 15px!important;
    margin-top: 0px!important;
    height: 174px !important;
}
.csleftl .col-md-6:after {
    content: "";
    display: block;
    border-bottom: 1px solid #bfbfbfe3;
    width: 78%;
    position: relative;
    bottom: 1px;
    margin-bottom: 0px;
}
.ornow h3.white {
    color: #000 !important;
    margin-bottom: 2px;
    font-size: 19px !important;
}
.ornow h4.white {
    color: #313131 !important;
    margin-bottom: 0px;
}
.ornow a.btn.btn-defaultfourboxx {
    border: 1px solid #fff;
    font-size: 15px;
    color: #fff;
    background: #fff;
    font-weight: bold;
    border-radius: 7px;
    background-color: #1a245f !important;
}
.csleftl .col-md-6 a {
    padding: 2px 10px !important;
    font-size: 13px !important;
    background: #222a63f2 !important;
    color: #fff !important;
    margin-bottom: 20px;
    display: inline-block;
    margin-left: 8%;
}
.csleftl p.white {
    font-size: 16px;
    color: #000 !important;
    padding-left: 8%;
    margin-top: -3%;
	    text-align: left;
}
.csleftl img {
    vertical-align: middle;
    width: 50px;
}

.bac_blue .col-md-2 {
    padding-top: 1%;
}
.ornow a {
    display: inline-block;
    margin-top: 1%;
}
.ornow {
    background: #dddfe3;
}
#Top_bar .menu li ul li {
    
    width: 250px;
   
}
.paddddleft ul.list-unstyled {
    margin-right: 0px;
    margin-left: 0px;
}
.paddddleft li {
    list-style-type: none!important;
    width: 86%;
    margin: auto;
}
Top_bar .menu li ul li {
 width: 240px;
}
#Top_bar .menu > li > a, #Top_bar .top_bar_right a {
    color: #101020;
}
.leeftwhatservicesside br {
    display: none;
}
.leeftwhatservicesside .col-md-6 {
    width: 25%;
    float: left;
    margin: 1%;
}
.servicessec .section_wrapper.mcb-section-inner {
    background: linear-gradient(rgb(0 2 42 / 77%),rgb(0 2 42 / 75%)),transparent url(https://www.tutorsindia.com/wp-content/uploads/2016/07/What-Services-do-we-offer-under-tutors-india.jpg) center center/cover repeat scroll !important;
}
.dtopic .column_attr.align_center {
    height: 856px;
    position: relative;
    background: #efefef;
}
.ui-tabs .ui-tabs-nav li a {
   
    padding: 6px 18px 6px 18px!important;
}
.dtopic .rightpaddbgcolorr {
    background-color: #efefef;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    padding-left: 30px;
    padding-right: 30px;
}
.ui-tabs .ui-tabs-nav li img {
    width: 19%;
}
.ui-tabs .ui-tabs-nav li:hover img {
    webkit-filter: grayscale(1) invert(1);
    filter: grayscale(1) invert(1);
}
.primarysearch
{
	    background-color: rgba(233, 235, 237, 0.85);
}
.homc img {
    vertical-align: middle;
    position: relative;
    right: 3%;
}
.ui-tabs .ui-tabs-nav li.ui-state-active img {
    webkit-filter: grayscale(1) invert(1);
    filter: grayscale(1) invert(1);
}
.slick-slide img {
 border-radius: 50px;
}
.topspaeak .column_attr.clearfix.align_center.bg-cover {
    height: 643px;
    background: linear-gradient(rgb(0 2 42 / 90%),rgb(0 2 42 / 97%)),transparent url(https://www.tutorsindia.com/wp-content/uploads/2016/07/dissertation-propsal-features-tutorsindia-scaled-1-scaled.jpg) center center/cover no-repeat scroll !important;
}
.vercontai {
    margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}
.topspaeakk .convincepad {
    background-color: #fff0;
}
.topspaeakk .column_attr.clearfix.align_center.bg-cover {
   
   
	    padding-left: 7%;
    padding-right: 7%;
}
.ui-tabs .ui-tabs-nav li a {
 color: #fff;
}
.topspaeak br {
    display: none;
}
.covivontent {
  
   
    padding-top: 35%;
    padding-left: 7%;
    padding-right: 7%;
}
.servicessec .section_wrapper.mcb-section-inner {
    background: #000000ba;
}
.servicessec .rightwhatservices {
    background: none;
}
.covivontspec {
    height: 1221px;
    position: relative;
}
.convincepd1 {
    padding-top: 6%;
}

ul.contact_details li {
    position: relative;
    top: 6px;
}
.unbeateblece h1.white {
    color: #fff;
}
.unbeateblece h3.white {
    color: #fff !important;
}
.imgheigtritee h4.white {
   color: #222c67 !important;
}
.rightsidebge {
   
    background: linear-gradient(#000000ba,#000000c9),transparent center center/cover repeat scroll;
	height:755px;
}
.rightsidebge h3.white {
    font-size: 24px !important;
}
.rightsidebge .column_attr.clearfix.align_center {
    border-radius: 6px;
    margin-top: 21%;
    padding: 35px;
    background-color: #2a3c8f00 !important;
}
.rightsidebgee h3.white {
    font-size: 24px !important;
}
.rightsidebgee {
    height: 756px;
    background: linear-gradient(#000000ba,#000000c9),transparent center center/cover repeat scroll;
}

span.ideor {
    font-size: 14px;
}
#Top_bar .menu li ul {
 top: 98%;
}
#Footer .widgets_wrapper .widget h4:after {
    content: "";
    display: block;
    border-bottom: 2px solid #fff;
    width: 15%;
    position: relative;
    bottom: -8px;
	margin-bottom: 8%;
}

.accordion .question .title > .acc-icon-plus, .accordion .question .title > .acc-icon-minus {
    
    color: rgb(26 36 95);
}

.section.mcb-section.marspace {
    margin-left: 8%;
    margin-right: 8%;
}
.marspace .column_attr.clearfix {
    margin-right: 5%;
}
.paddddleft p {
    padding-left: 2%;
    padding-right: 4%;
}
#Top_bar .menu > li.pricingmenu > a span:not(.description) {
    line-height: 9px;
}
#Footer .widget_nav_menu ul li:after {
    border: none;
}
.pricingmenu {
    background: #161d5e;
    margin-top: 21px !important;
    border-radius: 12px;
}
#Top_bar.is-sticky .menu > li.pricingmenu > a span:not(.description) {
    line-height: 30px;
}
.mm-vertical #Top_bar .menu > li > ul.mfn-megamenu a.mfn-megamenu-title {
    font-weight: 700;
    font-size: 13px;
}
.pricingmenu a {
    color: #fff !important;
	    padding: 10px !important;
}
#Top_bar.is-sticky .menu .pricingmenu {
    background: #161d5e00;
    margin-top: 0px !important;
    border-radius: 0px;
    display: none;
}

li#menu-item-5155 {
    margin-right: 15px !important;
    margin-left: 35px !important;
}
#Top_bar.is-sticky li#menu-item-5155 {
    margin-right: 0px !important;
	 margin-left: 0px !important;
}
#Top_bar .menu > li.orderno > a span:not(.description) {
    line-height: 9px;
}
div#seconf {
    padding: 0px;
}     
.orderno {
    background: #dddfe3;
    margin-top: 21px !important;
    border-radius: 12px;
}

.orderno a {
    padding: 10px !important;
	color: #fff !important;
color: #000 !important;
   
}
#Top_bar.is-sticky .menu > li.orderno > a span:not(.description) {
    line-height: 30px;
}

#Top_bar.is-sticky .menu .orderno {
    background: #161d5e00;
    margin-top: 0px !important;
    border-radius: 0px;
    display: none;
}


img.logo-sticky.scale-with-grid {
    width: 60%;
}
#Top_bar.is-sticky .menu_wrapper .menu > li > a span:after {
    content: "";
    border-top: 5px solid #fff !important;
}

.menuo-arrows #Top_bar .menu > li.submenu > a > span:not(.description):after {
    
    border-top: 5px solid #444444;
  
}
.mm-vertical #Top_bar .menu > li > ul.mfn-megamenu > li a {
  
 padding: 9px 16px;
   
}
.menu-line-below #Top_bar .menu > li > a:after {
    
	display:none
}
ul.contact_details i {
    color: #fff;
}

.mm-vertical #Top_bar .menu > li > ul.mfn-megamenu {
             width: 90%!important;
  
    padding: 0px 0;
}

#Top_bar.is-sticky .menu > li > a, #Top_bar.is-sticky .menu > li > a span {
   
    color: #fff !important;
}
#Top_bar .menu > li.current-menu-item > a, #Top_bar .menu > li.current_page_item > a, #Top_bar .menu > li.current-menu-ancestor > a, #Top_bar .menu > li.current_page_ancestor > a, #Top_bar .menu > li.hover > a {
    color: #252781;
}


.logo {
    height: 61px !important;
}
#Top_bar.is-sticky .menu_wrapper .menu > li > a {
    padding: 15px 28px;
}
.menuo-arrows #Top_bar .menu > li.submenu > a > span:not(.description) {
       padding-right: 13px;
}
#Top_bar .menu > li > a span:not(.description) {
  
    
    padding: 0px 1px;
   
    border: none;
}
#Top_bar .menu > li a:after {
    background: #252781 !important;
}
#Top_bar .menu > li > a {
   
       font-size: 14px;
    font-weight: 500;
	       padding: 13px 40px;
}
#Footer .widgets_wrapper .widget {
    padding: 0px 0;
    margin-bottom: 0;
}
ul.sub-menu.mfn-megamenu.mfn-megamenu-6 {
    font-size: 14px !important;
    color: #252781;
    font-weight: 700;
}
#Top_bar .menu li ul li a span {
   
    font-size: 14px;
}
#Top_bar .menu > li > ul.mfn-megamenu a.mfn-megamenu-title {
   
    background-color: #252781!important;
    color: #f0f8ff!important;
}
.mm-vertical #Top_bar .menu > li > ul.mfn-megamenu > li {
    width: 14%;
    padding: 0 0px;
    border-right: 1px solid rgba(0, 0, 0, 0.05);
}
ul.sub-menu.mfn-megamenu.mfn-megamenu-6 li a {
    font-size: 14px;
    font-weight: 400;
}
#Top_bar .menu > li > ul.mfn-megamenu a.mfn-megamenu-title {
   
    font-size: 11px;
}

.softdel .rightpaddbgcolorr {
    height: 847px;
}
.cadly h3.blue {
    font-size: 22px !important;
}
.inneritemspaddsixl h3.blue {
    font-size: 22px !important;
}
.inneritemspaddnineo h3.blue {
    font-size: 22px !important;
}
.deliprocess br {
    display: none;
}
.whychooe h3.white {
    margin-bottom: 0px;
}
.cadly .column_attr.clearfix.align_justify {
    background: #fff !important;
}

.acaresetrans .rightpaddbgcolorr {
    padding-top: 31%;
    padding-bottom: 31%;
}
blockquote {
    font-size: 14px;
    line-height: 23px;
   
}
.leftsidebg h4.white {
   
    font-size: 16px;
}

.icon-left-open-big:before {
    content: '\e8b8';
    color: #fff;
}
.icon-right-open-big:before {
    content: '\e916';
    color: #fff;
}
.disparttri .bg-cover {
    height: 2727px;
}
.disstat .column_attr.clearfix.align_center {
    height: 895px;
}
.rightdispartt .rightpaddbgcolorr {
    height: 772px;
}
.massp .bg-cover {
    height: 1268px;
}
.specificdi .rightpaddbgcolorr {
    height: 1523px;
}
.fullbacdi .rightpaddbgcolorr {
    height: 1001px;
}
.masfulldi .bg-cover {
    height: 2700px;
}
.rprop .bg-cover {
    height: 1841px;
}
p {
    font-size: 15px;
    text-align: justify;
    color: #212529;
    line-height: 1.7em;
}
.manuscriptre .rightpaddbgcolorr {
    height: 531px;
}
.editomanu .bg-cover {
    height: 1153px;
}
.ukessaywriting .rightpaddbgcolorr {
    height: 667px;
}

.ourukmeth .rightpaddbgcolorr {
    height: 2413px;
}
.ourukrefle .rightpaddbgcolorr {
    height: 781px;
}
.writinsup .bg-cover {
    height: 1338px;
}
.defencepre .bg-cover {
    height: 757px;
}
.bestspoke .rightpaddbgcolorr {
    height: 756px;
}
.resitdesser .bg-cover {
    height: 2169px;
}
.ukaano .bg-cover {
    height: 1117px;
}
.ouruk .rightpaddbgcolorr {
    height: 1000px;
}
.wpb_text_column.wpb_content_element.turta {
    background: #ebeef6;
    height: 695px;
}

.column.mcb-column.one-second.column_accordion {
    margin-top: 1%;
    margin-bottom: 1%;
}

.accordion .question .title {
   
    background: #e4e6ea !important;
}

.acaresearch .column_attr.clearfix.align_center {
    background: #251d60 !important;
	    padding-left: 5% !important;
    padding-right: 7% !important;
}
.assituk .rightpaddbgcolorr {
    height: 670px;
}
.orderdisser .column_attr.clearfix {
    padding-left: 20px;
}
li#slick-slide00 img {
    margin: 0 auto;
}
.orderdisser ul.black {
    column-count: 2;
}
.ourexpress .bg-cover {
    height: 1423px;
}
.researchacademic .bg-cover {
    height: 716px;
}
.essarwripad .bg-cover {
    height: 1071px;
}
.cvwriting .bg-cover {
    height: 611px;
}
.posterpre .bg-cover {
    height: 1565px;
}
.massdissert .column_attr.clearfix.align_center.bg-cover {
    height: 2162px;
}
.academiclaw .column_attr.clearfix.align_center.bg-cover {
    height: 851px;
}
.engitech .column_attr.clearfix.align_center.bg-cover {
    height: 653px;
}
.test-secpad {
    padding-top: 5% !important;
    padding-bottom: 2%;
}
.bac_blue h3.white {
    margin-bottom: 3px;
}
.manu-your {
    background-color: #03023e !important;
}
.manu-bac {
    background-color: #03023e !important;
}
div#placeorderyellow a.btn.btn-defaultfourboxx {
    background: #090844;
    border-radius: 7px;
    padding: 7px 11px;
}
#crmWebToEntityForm.zcwf_lblLeft * input[type=reset] {
    box-sizing: border-box;
    color: #fff !important;
}
.button-stroke input[type=reset] {
  
    background: #222d68 !important;
   
}

.bac_blue h3 {
    color: #000 !important;
}
.bac_blue a.btn.btn-defaultfourboxx {
    color: #fff;
    background-color: #1a245f !important;
    border-radius: 4px;
    padding: 15px 28px;
    margin: auto;
	border: none;
}
.bac_blue a.btn.btn-defaultfourboxx:hover {
    color: #000 !important;
    border: 1px solid;
    background: #fff !important;
}
.bac_blue h4.white {
    color: #313131 !important;
    margin-top: -3px;
    line-height: 21px;
}
.acaresearch a.btn.btn-defaultfourboxx {
    background: #fff;
    color: #000;
    border-radius: 7px;
}
input#formsubmit {
    background: #222d68 !important;
    color: #fff !important;
}


.column.mcb-column.one.column_testimonials.test-secpad {
    padding-top: 4%;
}


.powerpoint .bg-cover {
    height: 1258px;
}
h4.padtopicsel {
    color: #222d68 !important;
}

.convibnpad {
    background-color: #01003ee3;
    padding: 45px;
    margin-top: 40%;
}
h3.padtopicsel {
    color: #0d1d91 !important;
    font-size: 28px!important;
    line-height: 34px;
    padding-left: 4%;
}

.leeftwhatservicesside .column_attr.clearfix {
    background: #00000000;
}

.specilized .rightwhatservices {
    background: #01003ed9;
}
.csleftuali .bg-cover {
       height: 828px;
}

.reporwi h4.black {
    font-size: 16px;
}
.convincepadpadd {
    background-color: #01003e;
    padding: 45px;
    margin-bottom: 129%;
}
.rightpaddbgcolorr {
    background-color: #efefef;
}
.rightpaddbgcolorr h3.white {
    color: #000 !important;
}
.rightpaddbgcolorr h4.white {
    color: #000 !important;
}
.convincad {
   background-color: #01003e;
    padding: 45px;
  margin-top: 129%;
}
.leftsidebg {
    background: #01003ec9 !important;
}
.plali .column_attr.clearfix.align_center {
        background: #222d68 !important;
}
.freeoffers .column_attr.clearfix.align_center {
        background: #222d68 !important;
}
.voicecus .column_attr.clearfix.align_center {
        background: #222d68 !important;
}
.whychooe .column_attr.clearfix.align_center {
       background: #251d60 !important;
	    padding-left: 5% !important;
    padding-right: 7% !important;
}
.deliprocess .column_attr.clearfix.align_center {
    background: #0f101c !important;
    padding-left: 5%;
    padding-right: 7%;
    padding-top: 2%;
    padding-bottom: 3%;
}
.belofourbox .column_attr.clearfix.align_center {
    background: #0d223b !important;
}

.faq-bacc .column_attr.clearfix.align_center {
    background:#251d60 !important;
}
.how-does .column_attr.clearfix.align_center {
    background-color: #01003e !important;
    color: #fff !important;
    padding-left: 5%;
    padding-right: 5%;
}
.how-does h3.white {
    color: #fff !important;
}
.how-does h4.white {
    color: #fff !important;
	   font-weight: 400;
}
.how-does a.btn.btn-defaultfourboxx {
    font-weight: 500;
    border: 1px solid;
    background: #fff;
    color: #000;
    border-radius: 7px;
    padding: 8px 15px;
}
.our-deli a.btn.btn-defaultfourboxx {
    color: #fff;
    background: #080640;
    border-radius: 7px;
    padding: 8px 15px;
    border: none;
}
.manu-your a.btn.btn-defaultfourboxx {
    color: #000;
    background: #fff;
    border-radius: 7px;
}
.btncololorbac a.btn.btn-defaultfourboxx {
    color: #000;
    background: #fff;
    border-radius: 7px;
}
#bgfortopicchoose1 a.btn.btn-defaultfourbox {
    color: #000;
    background: #fff;
    border-radius: 7px;
}

div#bgfortopicchoose a.btn.btn-defaultfourbox {
   
    border: 1px solid;
   
    color: #fff;
    border-radius: 7px;
}

div#bgfortopicchoosebottom a.btn.btn-defaultfourbox {
    border: 1px solid;
  
    color: #fff;
    border-radius: 7px;
	    padding: 8px 16px;
}
#bgfortopicchoosebottom1 a.btn.btn-defaultfourbox {
    border: 1px solid;
    background: #222d68;
    color: #fff;
    border-radius: 7px;
    padding: 8px 16px;
}
.whychooe a.btn.btn-defaultfourboxx {
    background: #fff;
    color: #000;
    border-radius: 7px;
}
.deliprocess a.btn.btn-defaultfourboxx {
    background: #fff;
    color: #000;
    border-radius: 7px;
}
.manu_your a.btn.btn-defaultfourboxx {
    background: #fff;
    color: #000;
    border-radius: 7px;
}
.faq-bacc a.btn.btn-defaultfourboxx {
    background: #fff;
    color: #000;
    border-radius: 7px;
}
.voicecus a.btn.btn-defaultfourboxx {
    background: #fff;
    color: #000;
    border-radius: 7px;
}
.bac-topp a.btn.btn-defaultfourboxx {
    background: #fff;
    color: #000;
    border-radius: 7px;
}
.bac-blue a.btn.btn-defaultfourboxx {
   color: #fff;
    background-color: #1a245f !important;
    border-radius: 4px;
    padding: 15px 28px;
    margin: auto;
	border: none;
}
.bac-blue a.btn.btn-defaultfourboxx:hover {
    color: #000 !important;
    border: 1px solid;
    background: #fff !important;
}
.our_deli .column_attr.clearfix.align_center {
    background-color: #01003e !important;
}
.convincepad {
        background-color: #01003ee3;
    padding: 45px;
}
.rightwhatservices {
    background-color: #2a3c8f;
    padding-left: 30px;
    padding-right: 30px;
    position: relative;
  
}
.manu_bac .column_attr.clearfix.align_center {
    background-color: #251d60 !important;
    padding-left: 5% !important;
    padding-right: 7% !important;
}
.freeoff .column_attr.clearfix.align_center {
        background-color: #0f101c !important;
	padding-left: 5%;
    padding-right: 7%;
}
.manu-bac .column_attr.clearfix.align_center {
      background-color: #01245a !important;
    padding-left: 5% !important;
    padding-right: 7% !important;
}
p.editr {
    padding-left: 4%;
    padding-right: 4%;
}
.manu_your .column_attr.clearfix.align_center {
    background: #00022a !important;
}
.manu_your h4 {
    padding-left: 5%;
    padding-right: 7%;
}
.manu-your h4 {
    padding-left: 5%;
    padding-right: 7%;
}
.manu-your h3 {
    padding-left: 5%;
    padding-right: 7%;
}
.manu_your .column_attr.clearfix.align_center {
    background-color: #251d60 !important;
}
.our-deli .column_attr.clearfix.align_center {
    background: #dddfe3 !important;
}
.our-deli h3.white {
    color: #313131 !important;
	    font-weight: 500;alignment-adjust
}
.our-deli h4.white {
    color: #313131 !important;
	font-weight: 500;
}
.bac_topp .column_attr.clearfix.align_center {
   background: #0d223b !important;
}
.bac-topp .column_attr.clearfix.align_center {
  background: #01003e !important;
}
.bac_blue .column_attr.clearfix.align_center {
    background: #e4e5e8 !important;
    text-align: center;
    padding-bottom: 0px;
}
.bac-blue .column_attr.clearfix.align_center {
    background: #dddfe3 !important;
}
.bac-blue h3.white {
    text-align: center;
    padding-bottom: 0px;
    color: #000 !important;
    font-size: 21px !important;
}
.bac-blue h4.white {
    color: #000 !important;
	    margin-bottom: 0px;
}



div#secbluefour {
    background-color: #f9f9f9;
	    height: 257px;
	    padding: 45px 45px 0px;
   
}
div#secbluetwo {
    background-color: #f9f9f9;
    
}
div#secbluefive {
   background-color: #e4e6ea;
}
div#secbluethree {
    background-color: #e4e6ea;
    
}
div#secbluesix {
    background-color: #FAF8F8;
}
div#secblueone {
       background-color: #e4e6ea;
}
.editingproo .column_attr.clearfix.align_center.bg-cover {
    height: 785px;
}
.masdisserta .column_attr.clearfix.align_center.bg-cover {
    height: 700px;
}
.convincepad_cli {
    background-color: #08539f;
    padding: 54px;
    margin-top: 243px;
    margin-bottom: 241px;
}
.convincepad_rea {
    background-color: #010240;
    padding: 45px;
    margin-top: 24%;
    margin-bottom: 0%;
}
.convinc_pla {
    background-color: #00003e;
    padding: 45px;
    margin-top: 18%;
    margin-bottom: 17%;
}
.convincepad_pro {
    background-color: #08539f;
    padding: 45px;
    margin-top: 52%;
    margin-bottom: 53%;
}
.convince_gua {
    background-color: #08539f;
    padding: 45px;
    margin-top: 23%;
    margin-bottom: 23%;
}

.convinc_co .convincepad {
    margin-top: 39px;
    margin-bottom: 39px;
}



.testimonials_slider .testimonials_slider_ul li {
   
    height: 274px;
}

.test_Secpad {
    padding-top: 5%;
    padding-bottom: 5%;
}
.test_secpad {
    padding-top: 5%;
    padding-bottom: 2%;
}


#Footer .widgets_wrapper .widget h4 {
   
    color: #fff !important;
}





.widgets_wrapper {
    padding: 25px 60px !important;
}

.testimonials_slider .testimonials_slider_ul li .author h5 {
    text-align: right;
    color: #fff;
}

.dalo {
    margin-bottom: 3%;
}

.inneritemspaddnineo .col-md-4 {
    background: #fff !important;
    border-style: solid;
    border-color: #080844;
    border-bottom: 4px solid #080844;
    height: 97px;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
    border-radius: 4px;
    width: 85%;
    float: left;
    padding: 33px;
    margin-left: 3%;
}
.inneritemspaddsixl .col-md-4 {
    background: #fff !important;
    border-style: solid;
    border-color: #04033f;
    border-bottom: 4px solid #040542;
    height: 285px;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
    border-radius: 4px;
    padding: 20px;
    width: 25.3%;
    float: left;
    padding: 33px;
    margin: 17px;
}
.inneritemspaddsix .col-md-4 {
    margin: 17px;
}

.rightsidebgee .column_attr.clearfix.align_center {
    border-radius: 6px;
    margin-top: 21%;
    padding: 35px;
    background-color: #2a3c8f00 !important;
}
.addhea .column_attr.clearfix.align_center {
    margin-top: 0px;
    margin-bottom: 0px;
}
.wholeco .column_attr.clearfix.align_center {
    margin-top: 0px;
	    background: #1a2663 !important;
}
.cadly .column_attr.clearfix.align_justify {
    margin: 17px;
}
.inneritemspaddone .column_attr.clearfix.align_justify {
    
    border-style: solid;
       border-color: #090844;
    border-bottom: 4px solid #090844;
    height: 281px;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
    border-radius: 4px;
    padding: 20px;
}

.inneritemspaddtwo .column_attr.clearfix.align_justify {
    
    border-style: solid;
   border-color: #090844;
    border-bottom: 4px solid #090844;
       height: 281px;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
    border-radius: 4px;
    padding: 20px;
}
.inneritemspaddthree .column_attr.clearfix.align_justify {
    
    border-style: solid;
       border-color: #090844;
    border-bottom: 4px solid #090844;
    height: 281px;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
    border-radius: 4px;
    padding: 20px;
}
.inneritemspaddfive .column_attr.clearfix.align_justify {
   
    border-style: solid;
       border-color: #090844;
    border-bottom: 4px solid #090844;
        height: 294px;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
    border-radius: 4px;
    padding: 20px;
}
.inneritemspaddsix .column_attr.clearfix.align_justify {
    
    border-style: solid;
       border-color: #07053f;
    border-bottom: 4px solid #090844;
    height: 260px;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
    border-radius: 4px;
    padding: 20px;
}
.inneritemspaddeight .column_attr.clearfix.align_justify {
   
    border-style: solid;
   border-color: #090844;
    border-bottom: 4px solid #090844;
    height: 281px;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
    border-radius: 4px;
    padding: 20px;
}
.inneritemspaddnine .column_attr.clearfix.align_justify {
   
    border-style: solid;
   border-color: #090844;
    border-bottom: 4px solid #090844;
    height: 105px;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
    border-radius: 4px;
    padding: 20px;
}
.inneritemspaddfour .column_attr.clearfix.align_justify {
    
    border-style: solid;
   border-color: #090844;
    border-bottom: 4px solid #090842;
    height: 281px;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
    border-radius: 4px;
    padding: 20px;
}
.inneritemspaddseven .column_attr.clearfix.align_justify {
   
    border-style: solid;
    border-color: #090844;
    border-bottom: 4px solid #090844;
    height: 281px;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
    border-radius: 4px;
    padding: 20px;
}
.inneritemspadd .column_attr.clearfix.align_justify {
    
    border-style: solid;
   border-color: #010240;
    border-bottom: 4px solid #0c0b47;
    height: 281px;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
    border-radius: 4px;
    padding: 20px;
}


.cadly {
    margin-left: 4%;
    margin-right: 4%;
    margin-top: 3%;
    margin-bottom: 3%;
}

.wpb_text_column.wpb_content_element.turta {

    height: 695px;
}
.wpb_text_column.wpb_content_element.turta p {
    color: #313131;
}
.wpb_text_column.wpb_content_element.turta h3.black {
    color: #000 !important;
}
.wpb_text_column.wpb_content_element.fisrb {
    background: #f5f5f5 !important;
    height: 695px;
}

.wpb_text_column.wpb_content_element.fiseec {
    background: #eaeef2 !important;
    height: 695px;
}


.wpb_text_column.wpb_content_element.turt {
    background: #ebeef6;
    height: 296px;
}
.wpb_text_column.wpb_content_element.fisee {
    height: 296px;
    background: #eaeef2 !important;
}
.wpb_text_column.wpb_content_element.fisr {
    height: 296px;
    background: #f5f5f5 !important;
}
.wpb_text_column.wpb_content_element.inneritemspa {
    background: #f2f2f1 !important;
    border-style: solid;
   border-color: #080540;
    border-bottom: 4px solid #090844;
    height: 308px;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
    border-radius: 4px;
    padding: 20px;
}
.wpb_text_column.wpb_content_element.inneritemspaa {
    background: #f2f2f1 !important;
    border-style: solid;
      border-color: #090844;
    border-bottom: 4px solid #090844;
    height: 100px;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
    border-radius: 4px;
    padding: 20px;
}

.perhee img {
    height: 1217px !important;
    object-fit: cover;
}

.rightsidebg {
    width: 57%;
    margin-left: 16%;
    border-radius: 6px;
    margin-top: 29%;
    padding: 35px;
}
.wpb_text_column.wpb_content_element.leftsidebg {
    text-align: center;
    padding-top: 11%;
    padding-bottom: 11%;
	    padding-left: 4%;
    padding-right: 4%;
}
.wpb_text_column.wpb_content_element.leftsidebg {
    text-align: center;
}


.fisec .vc_col-has-fill>.vc_column-inner, .vc_row-has-fill+.vc_row-full-width+.vc_row>.vc_column_container>.vc_column-inner, .vc_row-has-fill+.vc_row>.vc_column_container>.vc_column-inner, .vc_row-has-fill>.vc_column_container>.vc_column-inner {
    padding-top: 0px;
}
.column.mcb-column.one.column_column.smmat {
    margin-left: 0px;
}
.column.mcb-column.one.column_column.addhea {
    margin-left: 0px;
}
.column.mcb-column.one.column_column.inneritemspa .column_attr.clearfix.align_justify {
    background: #f2f2f1 !important;
    border-style: solid;
    border-color: #25aae1;
    border-bottom: 4px solid #25aae1;
    height: 112px;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
    border-radius: 4px;
    width: 91%;
    margin-left: 1%;
}
.fise .column_attr.clearfix {
    background: #bfccf5 !important;
    height: 316px;
}
.section.mcb-section.bg- .section_wrapper, .container {
    max-width: 1380px;
    margin-left: 0px;
    margin-right: 0px;
}
.column.mcb-column.one.column_column.wholeco {
    margin-left: 0px;
}
.column.mcb-column.one.column_column.one.column {
    width: 100%;
}

.ourmassec {
    padding-left: 40px;
}
.column.mcb-column.one-third.column_column.inneritemspa .column_attr.clearfix.align_justify {
    background: #f2f2f1 !important;
    border-style: solid;
    border-color: #25aae1;
    border-bottom: 4px solid #25aae1;
    height: 265px;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
    border-radius: 4px;
}

.column.mcb-column.one-third.column_column.inneritemspa {
    width: 30%;
}

.img-section img {
  height: 352px!important;
    width: 100%;
    object-fit: cover;
}

.inner-section {
    padding: 29px;
       height: 294px;
}

.column.mcb-column.one-second.column_column.rightsidebg {
    width: 41%;
    padding-left: 6%;
    padding-top: 12%;
}


.rightssidecont .convincepad {
    margin-left: 25px;
    margin-right: 25px;
}

.rightssidecont .column_attr.clearfix.align_center.bg-cover {
   padding-top:277px;
	padding-bottom:277px;
}
.mastt .column_attr.clearfix.align_center {
    padding-top: 30px;
    padding-bottom: 20px;
}
.feaadd h3.white {
    margin-bottom: 0px;
}

.feaadd h4.white {
    margin-bottom: 0px;
}
.mashi .column_attr.clearfix.align_center {
    padding-top: 26px;
    padding-bottom: 13px;
}
.wholeco h4.black {
    color: #1b2562 !important;
    font-weight: 600;
}
div#placeorderyellow {
    padding-top: 11px;
    padding-bottom: 20px;
    background-color: #080844;
    margin-top: 5%;
}
#placeorderyellow h3#stripe {
    font-size: 20px !important;
    margin-bottom: 13px;
    color: #fff !important;
}

div#placeorderyellow h4.white {
    margin-bottom: 0px;
    color: #fff !important;
}
.addifea h3.white {
    margin-bottom: 0px;
}
.addhea .column_attr.clearfix.align_center {
    padding-top: 24px;
    padding-bottom: 15px;
	    background: #01003e !important;
}
.addhea h4.white {
    margin-bottom: 5px;
}
div#ordernowpaddings p.blackcontent {
    text-align: center;
}
div#ordernowone p.blackcontent {
    text-align: center;
}
div#ordernoweight p.blackcontent {
    text-align: center;
}
div#ordernowfour p.blackcontent {
    text-align: center;
}
div#ordernowfive p.blackcontent {
    text-align: center;
}
div#ordernowsix p.blackcontent {
    text-align: center;
}
div#ordernowseven p.blackcontent {
    text-align: center;
}
div#ordernownine p.blackcontent {
    text-align: center;
}
div#ordernowten p.blackcontent {
    text-align: center;
}
.smmat .column_attr.clearfix.align_center {
    padding-top: 28px;
    padding-bottom: 22px;
	    background-color: #090844 !important;
}

.smmat h3.white {
    margin-bottom: 3px;
}

.layouthi .column_attr.align_center {
    padding-top: 37px;
    padding-bottom: 18px;
	    background: #0d223b !important;
}
.layouthi h3.white {
    line-height: 17px;
}
.phdhei h3.white {
    margin-bottom: 5px;
}
.phdhei .column_attr.align_center {
    padding-top: 24px;
    padding-bottom: 24px;
	    background-color: #090844 !important;
}
a.popup-link {
    color: #ffffff;
    border: 0px solid #000;
    font-size: 14px !important;
    border-radius: 7px;
    padding: 6px 12px;
    background: #2d1260;
    font-weight: 600;
}
.leftsidebg h3#headtophead {
    line-height: 35px !important;
}
a.btn.btn-defaulttt {
    border-radius: 7px;
    font-weight: 600;
    padding: 8px 15px;
    font-size: 15px;
    background: #fff;
    color: #000;
}

div#featuree1 {
    background: #bfccf5;
}
.featurepurpose {
    padding: 35px;
}
div#featuree3 {
    background-color: #eaeef2;
}
div#featuree1 p.blackcontent {
    color: #000;
}
#featuree1 h3.black {
    color: #000 !important;
}

#ordernowpaddingsthree div, #ordernowpaddings div, #ordernowpaddingsone div, #ordernowpaddingstwo div {
    height: 80px!important;
	   padding: 20px;
}
.wholeco h4 {
    font-size: 20px !important;
    margin-bottom: 7px;
}
.wholeco h3 {
    margin-bottom: 0px;
}
.wholeco p.blackcontent {
    text-align: center;
}

div#ordernowpaddings .col-md-4 {
    margin-left: 30px;
    margin-bottom: 0px;
    margin-top: 27px;
    margin-right: 30px;
	   background: #f5f5f5;
}
div#ordernowpaddingsthree .col-md-4 {
    margin: 24px;
	    background: #eaeef2;
}
div#ordernowpaddingsone .col-md-4 {
    margin: 24px;
	    background: #eaeef2;
}
div#ordernowpaddingstwo .col-md-4 {
    margin: 24px;
	    background: #f5f5f5;
}
.feahei .column_attr.clearfix {
    height: 570px;
    background: #ebeef6 !important;
    box-shadow: 0 0 5px 0 rgb(0 0 0 / 11%);
}
.feahei br {
    display: none;
}
.feaheio br {
    display: none;
}
.feaheit br {
    display: none;
}
.feahei p.blackcontent {
    color: #000;
}
.feahei h3.black {
    color: #000 !important;
}
.feaheio .column_attr.clearfix {
    height: 570px;
    background: #f5f5f5 !important;
	    box-shadow: 0 0 5px 0 rgb(0 0 0 / 11%);
}
.feaheio h3.black {
    color: #000 !important;
}
.feaheit h3.black {
    color: #000 !important;
}
.feahio p.blackcontent {
    color: #fff;
}

.feaheit .column_attr.clearfix {
    height: 570px;
    background: #eaeef2 !important;
	box-shadow: 0 0 5px 0 rgb(0 0 0 / 11%);
}
.feahit p.blackcontent {
    color: #fff;
}

div#bgfortopicchoose11 h4.white {
    font-size: 20px;
    font-weight: 500;
}
.turt p.blackcontent {
    color: #000;
}
.fisr .column_attr.clearfix {
    height: 296px;
    background: #f5f5f5 !important;
}
.turt .column_attr.clearfix {
    height: 296px;
    background: #ebeef6 !important;
}
.fisr .column_attr.clearfix {
    height: 296px;
    background: #f5f5f5 !important;
}

.fisee .column_attr.clearfix {
    height: 296px;
       background: #efefef !important;
}
div#bgfortopicchoose11 {
        background-color: #484e54;
    padding: 13.2px;
    height: 173px;
    padding: 15px!important;
}
.leftsidebg h4.white {
    font-weight: 400;
    font-size: 15px;
}
.researchpro .bg-cover {
    height: 801px;
}
.leftsidebg h3#headtophead {
    margin-bottom: 0px;
    font-size: 28px !important;
    line-height: 35px;
}

.accordion .question .title:before
{

margin-bottom: 20px;
}
h4.rightsidefourbox {
   font-size: 16px;
 }

a.whiteblack {
    font-size: 16px !important;
   
}
a.btn.btn-defaulttt1 {
    border-radius: 7px;
    font-weight: 600;
    padding: 8px 15px;
    background: #fff;
    color: #000;
	font-size: 15px;
}

.sese .column_attr.clearfix {
    background: #f5f5f5 !important;
}


.thse .column_attr.clearfix {
    background: #e4e6ea !important;
}

.fise p.blackcontent {
    color: #000;
}
.thse a.whiteblack {
    color: #000;
}

.accordion {
    margin-bottom: 24px;
    margin-top: 27px;
}
a.sc-7dvmpp-1.gCdMUP {
    display: none;
}
p.wht {
    font-size: 16px;
    color: #fff;
}
h1.whit {
    font-size: 32px;
    color: #fff;
    line-height: 32px;
    font-weight: 500;
}
.plali br {
    display: none;
}
.plali br {
    display: none;
}
.convincepad h4 {
    font-size: 16px;
}
.fisec h4 {
    font-weight: 500;
}

div#placeorderyellow br {
    display: none;
}
.disscho br {
    display: none;
}
.mobiw h4 {
    font-weight: 500;
}
.rightpaddbgcolorr h4 {
    font-size: 16px !important;
}
.question {
    margin: 17px;
}

a.sc-7dvmpp-1.hasyTc {
    display: none;
}
.panel-body a:hover {
    color: #246ea7;
}
.section-related-adjustment.simple {
    display: none;
}
p.nocomments {
    display: none;
}
.column.one.author-box {
    display: none;
}
.section.section-post-intro-share {
    display: none;
}
.ui-tabs .ui-tabs-nav li.ui-state-active a
{
   background-color: #222c67;
}
.ui-tabs .ui-tabs-nav li.ui-state-active a {
    background-color: #efefef;
    color: #1a2461 !important;
}
.ui-tabs .ui-tabs-nav li a:hover {
    background: #efefef !important;
    color: #000 !important;
}
.ui-tabs .ui-tabs-nav li.ui-state-active a:after {
    background: #ffffff;
}
.ui-tabs .ui-tabs-nav li.ui-state-active a:after
{
bottom: 5px;
}
.sidebarr img.img-responsive {
    padding-top: 5%;
}
.ui-tabs .ui-tabs-panel {
    
    background: #fff;
}
.sidebarr h4.white {
    
       margin-bottom: 1%;
    padding-top: 4%;
	    color: #01003e !important;
}
a:hover {
    color: #fff;
}

.perhee .bg-cover {
    height: 1227px;
}
.perheer .bg-cover {
    height: 1336px;
}
.perheel .bg-cover {
    height: 1200px;
}

.bestma {
    height: 346px;
}

.fotsi h4.white {
    color: #222c67!important;
}
.fotsi .btn-info {
    padding: 7px 11px;
}

#Footer .widget_nav_menu ul li {
    color: #fff;
        list-style-type: none !important;
}
#Footer .widget_nav_menu ul li a:before {
    font-family: 'FontAwesome';
    content: "\f0da";
    padding-right: 4%;
    font-size: 16px;
}
.widget_archive ul, .widget_nav_menu ul {
   
    padding: 5px 10px 5px 0px;
   
}
.interbu .banner-list li {
    padding: 15px 0px;
}
.cdss {
    display: none !important;
}
.column.mcb-column.one-third.column_column.ppc-menu {
    width: 30%;
}
#Footer .widgets_wrapper .widget h4 {
    font-weight: 700;
}
a#back_to_top {
    display: none;
}
#Top_bar {
   
    border-bottom: 1px solid transparent;
    
}
.accordion h5.black {
    font-size: 16px;
    color: #080844;
    font-weight: 500 !important;
    margin-bottom: 0px;
}

.textwidget h3.blue {
    font-size: 24px !important;
}
.sidebott {
    bottom: 22px;
    padding-right: 23px;
    padding-top: 25px;
    box-shadow: rgb(17 17 26 / 10%) 0px 0px 16px;
    margin-top: 6%;
    margin-right: 6%;
    margin-bottom: 7%;
    border: 1px solid #e9ecef;
}

.sawork a {
    display: flex;
    text-align: center;
    padding: 0px 10px;
    justify-content: space-around;
}
.white-tt {
    color: #fff !important;
}
ul.sticklist {
    color: aliceblue;
    line-height: 14px;
    font-size: 15px;
	line-height: 24px;
}






.marquee {
        width: 100%;
        background-color: #2a3c8f;
	 color:#fff;
      }


#crmWebToEntityForm > form > table{
  width:389px;
}
.crmzoho-form tr td {
    width: 50%;
    position: relative;
    display: table-cell;
}
.crmzoho-form.style {
    width:auto!important;
    background:none!important;
    color: black;
}

.crmzoho-form tr td {
    width: 100%;
    position: relative;
    display: table-cell;
	font-size: 15px!important;
}
.crmzoho-form.style {
    width:auto!important;
    background:none!important;
    color: black;
}

Style Attribute {
    width:auto!important;
    background:none!important;
    color: black;
}
.crmzoho-form table {
    width: 50%!important;
    background-color: white;
    color: black;
}
.crmzoho-form strong {
    font-weight: 700;
    font-size: 24px;
    color: #3678b5;
}




div#crmWebToEntityForm tr td {
  font-weight: 500;
    border: unset;
}
input[type=text], textarea {
    background-color: #f1f3f7 !important;
     color: #626262;
    box-shadow: inset 0 0 2px 2px rgba(0,0,0,.02);
}
@media only screen and (max-device-width: 480px){
	.cadly .inneritemspaddnine .column_attr.clearfix.align_justify {
    height: 242px !important;
}
	.header-classic #Top_bar .top_bar_right {
    
    display: none;
}
	#Top_bar #logo img.logo-mobile {
    padding-top: 0px;
}
#Top_bar.is-sticky {
    width: 100%;
    position: fixed;
}
#Top_bar.is-sticky .logo {
    margin: 0 13px 0 0px !important;
}
	.pricingmenu {
    
    
    border-radius: 12px;
    width: 28% !important;
}
.orderno {
  
    width: 28% !important;
    margin-left: 3% !important;
}
.logo {
    height: 61px !important;
}
.rc-anchor-logo-portrait {
    margin: 6px 0 0 0px;
    width: 58px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}
#Content > div > div > div > div:nth-child(1) > div > div:nth-child(1) > div > div.column.mcb-column.one-second.column_column.cspad{
margin-left: -149px;
    margin-bottom: 52px;
}
}
==============================


#wh-call-to-action{display: none!important;}

div#_hj-f5b2a1eb-9b07_poll {
    display: none!important;
}
ul.social span {
    font-weight: 600;
    font-size: 16px;
    color: #ded8d8;
}

#Footer .footer_copy {
    display: block!important;
    background: #2a3c8f!important;
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 1000;
}
#Footer .footer_copy .one {
   margin-bottom: 0px!important;
    padding-top: 0px!important;
}

#Footer .footer_copy .copyright {
    float: right;
    /* width: 81%; */
font-weight: 600;
    font-size: 14px;
    color: #ded8d8;
 margin: 5px 0px;
}
#Footer .footer_copy .social {
    float: left!important;
    margin-right: 20px;
    padding-top: 6px;
}
#Footer .footer_copy .social li a {
    color: rgb(226, 222, 222)!important;
}

div#footerdown {
    display: none!important;
}
#Footer .footer_copy {
    display: block!important;
    background: #18191d!important;
    border: none !important;
}

@media (max-width:400px) and (min-width: 280px){
        .btn-left{
        left:-21% !important; 
        }
        .right-float{
        right:0px !important;
        }
}

@media (max-width:767px) and (min-width: 401px){
        .btn-left{
        left:-18% !important; 
        }
        .right-float{
        right:0px !important;
        }
}
.btn-left{
    transform: rotate(90deg);
    left: -5%;
    position: fixed;
    color: #fff;
    background: #57a4e8;
    border-radius: 10px 10px 0px 0px;
    top: 50%;
    z-index: 99;
    padding: 5px 10px 5px;
    box-shadow: 2px 0px 1px #57a4e852;
}
.btn-left:hover{
    color:#fff;
}

.chat-sec {
    width: 100%;
     position: relative;
    display: block;
}
.chat-sec ul li {
    float: left;
    width: 175px;
    position: relative;
	border-radius: 20px;
	color: #6f6c6c!important;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
}
.footer-copy-center #Footer .footer_copy .copyright {
    margin: 0px;
    padding: 10px 19px !important;
}
.footer-copy-center #Footer .footer_copy .social {
    float: left;
    margin: 10px!important;
}
.chat-sec ul li {
    padding: 2px 0 2px;
    margin-top: 4px;
    text-align: center;
    margin-right: 15px;
  }
.chat-sec ul li a {
    color: #fff!important;
}




.chat-sec ul li a {
    color: #6f6c6c!important;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
}


@media screen and (max-width: 480px) and (min-width: 400px) {
#Footer .footer_copy {
    text-align: center;
    padding: 8px 20px!important;
}
#Footer .footer_copy .copyright {
    float: right;
    text-align: center;
}
}


@media only screen and (max-width: 767px){
.tutors{
    margin: 0 0 0 62px;
}

#Top_bar #menu {
    
    height: auto;
    width: 300px;
    bottom: auto;
    top: 100%;
    right: 1px;
    position: absolute;
    margin: 0
}

}



div#mine-log {
    background-color: #2a3c8f
}

#Footer a {
    color: #e0e1e2
}

table.basicdetails {
    color: #fff;
    font-size: 14px
}


a.btn.btn-defaultfourbox:hover {
    background-color: #fff;
    color: #4e4e4e
}



h2.blue {
    font-size: 26px;
    color: #102182;
    font-weight: 400;
}
a.btn.btn-defaultfourbox {
    padding: 5px 16px;
    border: 2px solid #fff;
    font-size: 15px;
    color: #fff;
    font-weight: bold;
    border-radius: 5px
}

a.button.button_js.slider_prev {
    width: 7px
}

a.button.button_js.slider_next {
    width: 7px
}

a.btn.btn-defaultfourboxx {
    padding: 5px 12px;
    border: 1px solid #fff;
    font-size: 15px;
    color: #000;
    background: #fff;
    font-weight: bold;
    border-radius: 7px
}

h3.blue {
    color: #0d1d91 !important;
    font-size: 19px !important;
    line-height: 22px;
    font-weight: 500;
}
h3.offerclass {
    color: #fff !important;
    font-size: 28px !important;
    line-height: 35px;
    padding-top: 3%;
  padding-bottom: 0%;
}

a.blue {
    border: 1px solid #0c2da1;
    color: #5f5f61;
    padding: 6px;
    font-size: 15px;
}

h4.white {
    font-size: 15px;
    color: #fff !important;
    font-weight: 500
}

#Subheader {
    background-color: #F7F7F7;
    background-color: #fff;
    background-position: center top;
    background-repeat: no-repeat;
    padding: 0 !important;
    position: relative
}

#popup_contact>a.button {
    width: 55px !important;
    height: 43px !important;
    line-height: 44px !important;
    font-size: 27px !important;
    margin: 0;
    text-align: center;
    color: #fff !important;
    background: #1d35a9 !important;
    position: absolute;
    bottom: 0;
    right: 0
}

.subheader-both-left #Subheader .breadcrumbs {
    width: 100%;
    text-align: left;
    margin-top: 0 !important;
    font-size: 13px !important;
    font-weight: 600
}



li.topheaderr {
    color: #fff !important
}

li.topheaderrr {
    color: #fff !important;
    margin-top: -15px
}

.twentyfourr {
    margin-top: 10px !important;
    line-height: 20px
}

.header-stack #Top_bar .menu_wrapper {
    clear: both;
    width: 1700px
}



ul.social-network {
    list-style: none;
    display: inline;
    margin-left: 0 !important;
    padding: 0;
    font-size: 14px !important
}


h4.black {
    font-size: 20px;
    color: #000 !important;
    font-weight: 500;
}

a {
  
    color: #0b57a8;
}

a:hover {
    text-decoration: inherit !important;
}

.gallery-icon .image_frame {
    border-width: 0
}

.contact_icons a {
    font-size: 30px;
    line-height: 30px
}

#Top_bar .menu>li>ul.mfn-megamenu a.mfn-megamenu-title {
    text-transform: uppercase;
    font-weight: 400;
    background-color: #ff6903 !important;
    color: #252781 !important;
}

#Top_bar .menu>li ul li a {
    color: #333 !important;
}


h4 {
    color: #fff !important;
}

h2 {
    font-size: 44px;
    color: #f0f8ff
}



#Action_bar .contact_details {
    float: right !important;
    padding: 7px !important;
    margin-top: -10px
}

span.ubermenu-target-title.ubermenu-target-text:active {
    color: #af840a !important
}

#Top_bar #logo img {
    vertical-align: middle;
    max-height: 100%;
    vertical-align: middle;
    max-height: 100%;
    margin-top: -31px !important;
    margin-left: 90px;
}

.logo {
    height: 61px !important
}

.header-stack #Action_bar {
    background-color: #2a3c8f;
    position: static
}

h2.white {
    font-weight: 500;
    font-size: 25px;
    color: #fffffe;
}
h2#whitee {
    color: #f0f8ff
}



p.white {
    color: #fff;
    font-size: 16px
}

p#innerpaddingid {
    padding: 14px
}

#Footer {
    background-color: #0f101c !important;
}

#Top_bar .search_wrapper {
    background: #084197 !important
}

.header-stack #Action_bar .contact_details li {
    padding: 15px 0;
    margin-left: 0 !important;
}

a#topinlevelorder {
    margin-top: -4px;
    margin-left: 2px !important;
    margin-right: 2px !important;
}

a#logo {
 
    margin-left: -95px
}

.header-stack #Action_bar .social {
    padding: 30px 0
}

h3 {
    color: #fff;
    font-size: 25px
}

h3.whitee {
    font-size: 32px;
    font-weight: 700
}

h3.white {
    color: #fff;
    font-size: 28px !important;
    font-weight: 500;
    line-height: 35px
}

.samplepaddtext {
    font-size: 23px;
    color: #fff;
    text-align: -webkit-center;
    background-color: #363636;
    padding: 12px
}

.samplepaddtextt {
    font-size: 23px;
    color: #fff;
    text-align: -webkit-center;
    background-color: #454343;
    padding: 12px
}


 a#outlibebtnbtn {
    background-color: #fff;
    border-color: #000;
    padding: 6px 11px!important;
    font-size: 14px!important;;
    color: #000!important;;
    border: 0px solid #fff;
    border-radius: 7px;
    font-weight: 600;
    font-size: 11px!important;;
    
}

a#outlibebtnbtn:hover {
    background-color: #f0f8ff;
    color: #000 !important
}

h1.white {
    font-size: 28px;
    color: #fff;
    font-weight: 500;
    line-height: 35px
}

h1.bestslide {
    text-align: center;
    font-size: 35px;
    font-weight: 700
}

li.ui-state-default.ui-corner-top:hover {
    background-color: #e6edf5 !important
}

#Content {
    width: 100%;
    padding-top: 0 !important
}

h1.black {
    font-size: 30px;
    font-weight: 500
}

h3.black {
    font-weight: 400 !important;
    font-size: 26px !important;
    color: #000 !important
}

b {
    font-weight: 700;
    font-size: 16px
}

.header-stack #Top_bar {
    position: static;
    background-color: #fff;
    border-bottom: 2px solid #003c81 !important
}



h1#pinkypink {
    color: #0f55d6
}

ul.social-network {
    list-style: none;
    display: inline;
    margin-left: 0 !important;
    padding: 0
}

ul.social-network li {
    display: inline;
    margin: 0 5px
}

.social-network a.icoRss:hover {
    background-color: #F56505
}

.social-network a.icoFacebook:hover {
    background-color: #3B5998
}

.social-network a.icoTwitter:hover {
    background-color: #3cf
}

.social-network a.icoGoogle:hover {
    background-color: #BD3518
}

.social-network a.icoVimeo:hover {
    background-color: #0590B8
}

.social-network a.icoLinkedin:hover {
    background-color: #007bb7
}

.social-network a.icoRss:hover i,
.social-network a.icoFacebook:hover i,
.social-network a.icoTwitter:hover i,
.social-network a.icoGoogle:hover i,
.social-network a.icoVimeo:hover i,
.social-network a.icoLinkedin:hover i {
    color: #fff
}

a.socialIcon:hover,
.socialHoverClass {
    color: #44BCDD
}

.social-circle li i {
    margin: 0;
    line-height: 50px;
    text-align: center
}

.social-circle li a:hover i,
.triggeredHover {
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -ms--transform: rotate(360deg);
    transform: rotate(360deg);
    -webkit-transition: all .2s;
    -moz-transition: all .2s;
    -o-transition: all .2s;
    -ms-transition: all .2s;
    transition: all .2s
}

.social-circle i {
    color: #fff;
    -webkit-transition: all .8s;
    -moz-transition: all .8s;
    -o-transition: all .8s;
    -ms-transition: all .8s;
    transition: all .8s
}

.social-circle li a {
    display: inline-block;
    position: relative;
    margin: 0 auto;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    text-align: center;
    width: 46px !important;
    height: 45px !important;
    font-size: 19px !important
}

div#footbg {
    background-color: #2f3232
}

a.white {
    color: #fff;
    font-size: 17px
}

h2#lineheighthone {
    line-height: 36px
}

a.idd {
    display: block;
    background: #efefef !important;
      color: #313131 !important;
    margin-bottom: 10px;
    padding: 10px 40px 10px 20px;
    position: relative;
    font-size: 15px !important;
    border: 1px solid #01003e08;
    margin-left: 0px;
}
a.idd:hover {
    background-color: #00244e
}

.ui-tabs .ui-tabs-nav li a {
    cursor: pointer;
    font-size: 18px
}

p.blackcontent {
    font-size: 15px;
    text-align: justify;
    color: #313131;
    line-height: 1.7em;
}

h1#sampless {
  font-size: 20px !important;
    line-height: 13px;
}

h1.blue {
    font-size: 23px;
    line-height: 34px;
    color: #01013e;
    font-weight: 500;
}

ul.black {
    font-size: 16px;
    color: #000;
    list-style-type: disc !important
}

ul.blackfish {
    font-size: 16px;
    color: #000;
    list-style-type: bullet !important
}



ul.white {
    color: #fff
}

h5.black {
    font-size: 17px
}

li.noneone {
    list-style: none !important
}

p.black {
    font-size: 15px
}

p.ask {
    font-size: 13px
}

h3#headtophead {
    font-size: 36px !important;
    line-height: 40px
}


h4.blackk {
    color: #1f1f1f !important
}

#Subheader ul.breadcrumbs li,
#Subheader ul.breadcrumbs li a {
    color: #1a44a1 !important;
    margin-top: 0;
    display: inline-block
}

.subheader-both-left #Subheader .title {
    width: 100%;
    display: none
}

a.whiteblack:hover {
    color: #fff;
    background-color: #0e3297;
    padding: 10px
}

ul.questionslist {
    padding: 10px;
    background-color: #f1f1f1;
    width: 95%;
}
ul.samplesfo {
    padding: 6px;
    background-color: #fff;
    border: 1px solid #ededed
}

ul.samplesfo:hover {
    background-color: #07345b
}

a.samplesfor {
    font-size: 16px
}

.ordernoww {
    background-color: #d7dae2;
    padding: 8px
}

a.list-group-item:hover {
    background-color: #1140c0;
    color: #fff
}

h4.blackk {
    color: #f7f9fc !important;
    background-color: #1b2562;
    padding-top: 8px;
    padding-bottom: 6px;
    padding-left: 7px;
    font-size: 15px;
    font-weight: 600;
    margin-top: 4%;
}
.sectionscroll a {
    color: #222c67;
    font-weight: 600;
}
a.list-group-item {
    font-size: 15px;
    color: #1b2562;
    font-weight: 500;
}
a.btn.btn-block.btn-warning {
    color: #222c67;
    font-weight: 500;
    display: inline-block;
    font-size: 15px;
   
}
div#menusss {
    width: 417px;
    padding: 0 15px
}


.ui-tabs .ui-tabs-nav li {
    list-style: none;
    float: left;
    position: relative;
    white-space: nowrap;
    border-style: solid;
    border-width: 0 1px 0 0;
    margin: 0;
    padding: 0;
    background-color: #01003e !important;
    width: 225px;
    border-right: 1px solid;
    color: #fff;
}

p.notednote {
    padding-left: 30px
}

h4.orangee {
    font-size: 30px;
    color: #ffb96e !important;
    line-height: 35px
}

h4.whitee {
    font-size: 30px;
    line-height: 35px
}

h4.blue {
    color: #092e9a !important;
    font-size: 22px;
    font-weight: 400
}

h2.entry-title {
    line-height: 40px;
    font-size: 32px
}

#floatingbox {
    position: fixed;
    right: 0;
    top: 250px;
    width: 32px !important;
    height: 76px;
    z-index: 9999
}

#floatingbox a {
    font-family: Arial;
    color: #fff;
    font-size: 20px;
    padding: 1px 0 80px;
    text-decoration: none
}

#floatingbox a:hover {
    text-decoration: none
}

img.heightimghome {
    height: 110px;
    width: 35px
}

#floatingboxindights {
    position: fixed;
    right: 0;
    top: 370px;
    width: 32px !important;
    height: 76px;
    z-index: 9999
}

input.wpcf7-form-control.wpcf7-submits:hover {
    background-color: #18349c !important
}

i.fa.fa-comment-o {
    color: #fff
}



li.soccialssl {
    display: inline-block;
    font-size: 15px
}

div#rowtophome {
    position: absolute;
    width: 105%;
    top: 182px
}

ul.Socialing-medias {
    padding: 6px
}

a.facing-book {
    padding: 10px;
    background-color: #39599c;
    color: #fff
}

a.twitter-book {
    padding: 10px;
    background-color: #21a2f7;
    color: #fff
}

a.reddit-book {
    padding: 10px;
    background-color: #ff4501;
    color: #fff
}

a.Linked-book {
    padding: 10px;
    background-color: #0075b5;
    color: #fff
}

a.google-plus-book {
    padding: 10px;
    background-color: #de4d42;
    color: #fff
}

a.Instagram-book {
    padding: 10px;
    background-color: #157870;
    color: #fff
}

li.soccialhome {
    display: inline-block;
    font-size: 15px;
    padding: 20px
}

.twentyseven {
    font-size: 16px
}

.twentyfive {
    font-size: 16px;
    font-weight: 700
}

#footertopp {
    background-color: #2a2a2a !important;
    padding: 0 105px
}

#footerdown {
    background-color: #FFF !important;
    padding: 20px 105px;
    text-align: center
}

a.numbering {
    color: #fff
}

#localnumber {
    color: #d9534f;
    font-size: 18px
}

li.socciala {
    display: inline-block;
    font-size: 15px;
    padding: 20px
}

ul.Socialing-know {
    padding: 2px;
    margin-top: -29px
}

#facial {
    font-size: 20px
}

li.soccialfs {
    display: inline-block;
    font-size: 15px;
    padding: 5px
}

li.soccialtw {
    display: inline-block;
    font-size: 15px;
    padding: 5px
}

li.soccialgs {
    display: inline-block;
    font-size: 15px;
    padding: 5px
}

.copyfire {
    text-align: center;
    color: #000
}

#navlist li {
    display: inline;
    list-style-type: none;
    padding-right: 20px;
    color: #000 !important
}

#navlist li a {
    display: inline;
    list-style-type: none;
    padding-right: 20px;
    color: #000 !important
}

#navlist li a:link {
    color: #000 !important
}

#navlist li a:hover {
    color: green
}

.input-group-btn:last-child>.btn,
.input-group-btn:last-child>.btn-group {
    z-index: 2;
    margin-left: -1px;
    border-color: #fff;
    height: 34px;
    background-color: #d9534f !important
}

.input-group .form-control:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-radius: 4px;
    left: 2px;
    width: 200px
}

.button-stroke button {
    color: #FFF !important
}

ul.Socialing-widg {
    padding: 2px;
    margin-top: -16px
}

.example {
    margin-bottom: 1.5em
}

input[type=checkbox]:not(old),
input[type=radio]:not(old) {
    width: 2em;
    margin: 0;
    padding: 0;
    font-size: 1em;
    opacity: 0
}

input[type=checkbox]:not(old)+label,
input[type=radio]:not(old)+label {
    display: inline-block;
    margin-left: -2em;
    line-height: 1.5em
}

input[type=checkbox]:not(old)+label>span,
input[type=radio]:not(old)+label>span {
    display: inline-block;
    width: .875em;
    height: .875em;
    margin: .25em .5em .25em .25em;
    border: .0625em solid silver;
    border-radius: .25em;
    background: #e0e0e0;
    background-image: -moz-linear-gradient(#f0f0f0, #e0e0e0);
    background-image: -ms-linear-gradient(#f0f0f0, #e0e0e0);
    background-image: -o-linear-gradient(#f0f0f0, #e0e0e0);
    background-image: -webkit-linear-gradient(#f0f0f0, #e0e0e0);
    background-image: linear-gradient(#f0f0f0, #e0e0e0);
    vertical-align: bottom
}

input[type=checkbox]:not(old):checked+label>span,
input[type=radio]:not(old):checked+label>span {
    background-image: -moz-linear-gradient(#e0e0e0, #f0f0f0);
    background-image: -ms-linear-gradient(#e0e0e0, #f0f0f0);
    background-image: -o-linear-gradient(#e0e0e0, #f0f0f0);
    background-image: -webkit-linear-gradient(#e0e0e0, #f0f0f0);
    background-image: linear-gradient(#e0e0e0, #f0f0f0)
}

input[type=checkbox]:not(old):checked+label>span:before {
    content: '✓';
    display: block;
    width: 1em;
    color: #9c6;
    font-size: .875em;
    line-height: 1em;
    text-align: center;
    text-shadow: 0 0 .0714em #73994d;
    font-weight: 700
}

input[type=radio]:not(old):checked+label>span>span {
    display: block;
    width: .5em;
    height: .5em;
    margin: .125em;
    border: .0625em solid #73994d;
    border-radius: .125em;
    background: #9c6;
    background-image: -moz-linear-gradient(#b3d98c, #9c6);
    background-image: -ms-linear-gradient(#b3d98c, #9c6);
    background-image: -o-linear-gradient(#b3d98c, #9c6);
    background-image: -webkit-linear-gradient(#b3d98c, #9c6);
    background-image: linear-gradient(#b3d98c, #9c6)
}

i.icon_search.icon-search {
    padding-left: 201px;
    margin: 0
}

.icon_close {
    display: none
}

.disc {
    list-style-type: disc !important
}

.discfish {
    list-style-type: square !important
}

input[type=submit] {
    background: url(https://www.tutorsindia.com/wp-content/uploads/2017/07/search.png);
    border: 0;
    display: block;
    height: _the_image_height;
    width: _the_image_width
}

#searchsubmit {
    background: url(https://www.tutorsindia.com/wp-content/uploads/2017/07/search.png) 0 0 no-repeat;
    border: 0;
    display: block;
    height: _the_image_height;
    width: _the_image_width;
    background-position: center;
    background-color: #283ea3 !important;
    right: 30px;
    height: 43px
}

input[type="search"] {
    background-color: #fff;
    color: #626262;
    -webkit-box-shadow: inset 0 0 2px 2px rgba(0, 0, 0, 0.02);
    box-shadow: inset 0 0 2px 2px rgba(0, 0, 0, 0.02);
    float: right;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px
}

#tutorsindians {
    margin-right: 100px !important
}

#searchsubmittop {
    background: url(https://www.tutorsindia.com/wp-content/uploads/2017/07/search.png) 0 0 no-repeat;
    border: 0;
    display: block;
    height: _the_image_height;
    width: _the_image_width;
    background-position: center;
    background-color: #27a3e3 !important;
    right: 30px;
    height: 43px
}

#tutorsindiafile {
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0
}

#searchsubmittophe {
    background: url(https://www.tutorsindia.com/wp-content/uploads/2017/07/search.png) 0 0 no-repeat;
    border: 0;
    display: block;
    height: _the_image_height;
    width: _the_image_width;
    background-position: center;
    background-color: #27a3e3 !important;
    right: 31px;
    height: 43px;
    margin-top: 0
}

.intutors {
    width: 450px
}

#tutorsindiabook {
    margin: 0;
    padding: 0;
    position: absolute;
    top: -3px;
    left: -88px
}

@media only screen and (max-width: 767px) {
    #Top_bar,
    #Action_bar {
        background: #2a3c8f !important;
        position: static
    }
}

@media only screen and (max-width: 767px) {
    .header-stack #Action_bar .contact_details li {
        padding: 16px 0;
        margin-left: -1px !important;
        margin-top: 20px !important
    }
}

@media only screen and (max-width: 767px) {
    #Action_bar .contact_details {
        display: none;
        float: left !important;
        padding: 34px !important;
        margin-top: -12px
    }
}

@media only screen and (max-width: 767px) {
    #tutorsindiafile {
        margin: 0;
        padding: 0;
        position: absolute;
        top: 190px;
        margin-left: -50px
    }
}

@media only screen and (max-width: 767px) {
    #searchsubmittophe {
        background: url(https://www.tutorsindia.com/wp-content/uploads/2017/07/search.png) 0 0 no-repeat;
        border: 0;
        display: block;
        height: _the_image_height;
        width: _the_image_width;
        background-position: center;
        background-color: #27a3e3 !important;
        right: 40px;
        height: 43px;
        margin-bottom: 26px !important;
        top: -62px
    }
}

.twentyseven a {
    color: #fff !important
}

#tutorsindiafinger {
    left: -40px
}

.twentyseven>.btn-danger {
    color: #fff !important;
    background-color: #c0392b !important;
    border-color: #c0392b !important;
}

.twentyseven>.btn-warning {
    color: #fff !important;
    background-color: #c0392b !important;
    border-color: #c0392b !important
}

.rightpadd {
    padding: 120px 62px 25px 75px
}

.padinside1 {
    background-color: rgb(15 16 28 / 76%)
}

.padinside2 {
    background-color: rgba(11, 49, 155, 0.84)
}

.leftsidebg {
    background-color: rgba(15, 30, 136, 0.76)
}

.rightsideidebg {
    background-color: rgba(15, 41, 114, 0.82) !important
}




 

.panelleftdissertationtopic {
    background-color: rgb(1 3 62 / 92%);
}

#Footer .footer_copy {
    display: none;
}

.brouchers img {
    border: 4px solid #fff !important;
}































.left-float {
    position: fixed;
    top: 0;
    left: 10px!important;
    bottom: 0;
    height: 2em;
    margin: auto;
    background-color: #57a4e8!important;
    z-index: 999!important;
    padding: 0px 10px;
    color: #fff!important;
    border-radius: 5px!important;
    border: 1px solid #57a4e8;
    box-shadow: 0px 2px 2px 2px #ced2dc!important;
}
input[type="button"].left-float{background-color: #57a4e8!important;}

 .left-float {
   left: 0;
   -webkit-transform-origin: 100% 50%;
      -moz-transform-origin: 100% 50%;
       -ms-transform-origin: 100% 50%;
        -o-transform-origin: 100% 50%;
           transform-origin: 100% 50%;
   -webkit-transform: rotate(90deg) translate(50%, 50%);
      -moz-transform: rotate(90deg) translate(50%, 50%);
       -ms-transform: rotate(90deg) translate(50%, 50%);
        -o-transform: rotate(90deg) translate(50%, 50%);
           transform: rotate(90deg) translate(50%, 50%);
}


.right-float {
    position: fixed;
    top: 0;
    right: 10px!important;
    bottom: 0;
    height: 2em;
    margin: auto;
    background-color: #57a4e8!important;
    z-index: 999!important;
    padding: 0px 10px;
    color: #fff!important;
    border-radius: 5px!important;
    border: 1px solid #57a4e8;
    box-shadow: 0px 2px 2px 2px #ced2dc!important;
}
input[type="button"].right-float{background-color: #57a4e8!important;}

 .right-float {
   right: 0;
   -webkit-transform-origin: 100% 50%;
      -moz-transform-origin: 100% 50%;
       -ms-transform-origin: 100% 50%;
        -o-transform-origin: 100% 50%;
           transform-origin: 100% 50%;
   -webkit-transform: rotate(90deg) translate(50%, 50%);
      -moz-transform: rotate(90deg) translate(50%, 50%);
       -ms-transform: rotate(90deg) translate(50%, 50%);
        -o-transform: rotate(90deg) translate(50%, 50%);
           transform: rotate(90deg) translate(50%, 50%);
}

button#float-button {background-color: #57a4e8!important;}


@media screen and (max-width: 480px) {
	ul.soicailmedi li {
    display: inline-block;
    margin: 0 !important;
    width: 100%;
    margin-bottom: 6% !important;
}
	.subarrow h3 {
  
    font-size: 20px;
    padding-top: 4%;
}
	.logo-overflow #Top_bar #logo img {
 
    width: 55%;
}
	#Top_bar #logo img {
   
    margin-left: 0;
}
	.header-classic #Action_bar {
     position: relative !important;
    
}
#Action_bar .contact_details {
    display: block;
   
}
	.sidebarr ul {
    margin-left: 30px;
}
	.rightpaddtr h3.white {
    font-size: 20px !important;
}
	.pricing-condition {
    padding-left: 6%;
    padding-right: 6%;
}
	.pride p.blackcontent {
    padding-left: 7%;
    padding-right: 7%;
}
	
	.bactut ul {
    margin-left: 0px;
    margin-right: 0px;
}
	div#subone p.blackcontent {
    
    padding-right: 10%;
}
	div#featuree1 {
  
    width: 100%;
    
}
#featuree1, #featuree2, #featuree3 {
    height: 658px;
}
div#featuree2 {
  
    width: 100%;
    
}
div#featuree3 {
  width: 100%;
}
	.coprin .inner-section {
    height: 582px;
}
	.inneritemspaddnineo .col-md-4 {
    height: 225px !important;
    width: 77% !important;
    margin-left: 4% !important;
   
}
	.inneritemspaddsixl .col-md-4 {
    height: 257px;
   
}
	.inner-section {
  
    height: 478px;
}
	div#ordernowpaddingsone .col-md-4 {
  
    height: 121px !important;
}
div#ordernowpaddingstwo .col-md-4 {
   
    height: 134px !important;
}
	div#ordernowpaddingsthree .col-md-4 {
    margin: 24px;
    background: #eaeef2;
    margin-left: 0px;
    margin-right: 0px;
}
#ordernowpaddingsthree div
{
height: 180px!important;
    padding: 20px;
}
	#ordernowpaddings div
{
    height: 164px!important;
    padding: 11px;
    padding-top: 4px;
    padding-bottom: 0px;
}
	
	
	div#ordernowpaddingstwo .col-md-4 {
   margin-left: 0px;
    margin-right: 0px;
}
	div#ordernowpaddings .col-md-4 {
    margin-left: 0px;
  margin-right: 0px;
  
}
div#ordernowpaddingsone .col-md-4 {
   
    margin-left: 0px;
    margin-right: 0px;
}
	.feahei .column_attr.clearfix {
    height: 642px;
    
}
.feaheio .column_attr.clearfix {
    height: 601px;
    
}
.feaheit .column_attr.clearfix {
    height: 606px;
    }
	.authe h3.black {
    color: #000 !important;
    font-size: 18px !important;
}
	.column.mcb-column.one.column_column.inneritemspaddnine .column_attr.clearfix.align_justify {
    height: 223px !important;
}
	.paddddleft p.notednote {
    padding-left: 30px;
    padding-right: 30px;
}
	ul.Socialing-medias {
    padding: 0px;
}
	
	.leftcontactbg .column_attr.clearfix {
    height: 774px;
}
	.bac-blue h4.white {
    
    font-size: 15px;
}
	.bac-blue .column_attr.clearfix.align_center {
   
    padding-left: 4%;
    padding-right: 4%;
}
	i.icon-menu-fine {
    color: #fff;
}
	.mwhi .column_attr.clearfix.align_center {
    padding-left: 5%;
    padding-right: 5%;
}
	p#innercontent {
    padding-top: 0px !important;
    padding-bottom: 7px !important;
}
	.imgheigtritee h4.white {
  
    font-size: 16px;
}
.sidebott {
 padding-top: 0px;
 margin-top: 0%;
   
}
	.accordion .question .title {
    padding: 0px 14px 0px 60px;
}

	.bac_blue a.btn.btn-defaultfourboxx {
  padding: 6px 15px;
    
}
	.bac_blue h4.white {
    
    font-size: 16px;
}
	div#secbluetwo {
    height: 329px !important;
}
div#secbluesix {
   
    height: 369px !important;
}
	.whychooe h2.white {
    font-size: 22px;
}
	.leeftwhatservicesside a {
    color: white!important;
}
	.leeftwhatservicesside .col-md-6 {
        width: 39% !important;
}
	.on-delivery {
    padding-top: 3%;
    padding-bottom: 3%;
    height: 243px;
}
.un_limi {
    padding-top: 3%;
    padding-bottom: 21%;
    border-bottom: 1px solid #b0afaf;
    height: 148px;
}
	.g-recaptcha {
      transform: scale(0.91);
    transform-origin: 0 0;
}
.zcwf_lblLeft .zcwf_col_lab {
    width: 28% !important;
}
	.padinside1 .column_attr.clearfix.align_center {
    height: 304px;
}
	
	.section_wrapper, .container, .four.columns .widget-area {
 padding-left: 0px!important;
    padding-right: 0px!important;
}
	#Top_bar {
    border-bottom: none;
}
	#Top_bar.is-sticky .menu > li > a, #Top_bar.is-sticky .menu > li > a span {
    color: #000 !important;
}
	.logo {
  
    background: #121357;
}
    body {
        background-color: lightgreen;
    }
.wh-widget-send-button-desktop .wh-widget-send-button-wrapper:hover a.wh-widget-send-button-get-button {
    display: none !important;
}


h4.black{line-height:1.2em;}
h3.black{line-height:1.2em;}
h4.white{font-size:18px;line-height:24px;}
#mine-log a img{    margin: 0 auto;
    display: block;}
#Top_bar #menu{padding-bottom:0px!important;}
.ubermenu-skin-clean-white.ubermenu-responsive-toggle{font-size:15px;}
.sample-works h2{font-size:24px!important;}
ul.sticklist{line-height:22px!important;}
h3.white{font-size:24px!important;}
h1.white{font-size:26px!important;line-height:26px!important;}
.media-carousel .carousel-control.right,.media-carousel .carousel-control.left{font-size:86px!important;}
.Socialing-medias .soccialssl{    margin-bottom: 25px;}
a#outlibebtnbtn{   
    margin-right: 36px; margin-top: 19px;}
h3.blue {
    color: #0d1d91!important;
    font-size: 26px!important;
    line-height: 34px;
    padding: 8px;
}
h5.black {
    font-size: 18px;
    font-weight: 400!important;
    /* text-align: justify; */
    padding: 18px;
    line-height: 1.6em;
}
h4.blue {
    color: #0d1d91!important;
    font-weight: 400;
    line-height: 1.4em;
}
a.popup-link {
 font-size: 16px;
    color: #fff;
    margin-top: -5px;
    display: block;
    float: left;
	font-weight: bold;
	padding: 8px 15px;
    font-weight: bold;
	border-radius: 5px;
}
a.ask{    font-size: 16px;
    color: #3f3f3f;
    text-decoration: underline;
    line-height: 1.2em;}
a.black {
    font-size: 18px!important;
    color: #246ea7;
line-height:1.4em
}
.about-order h2{font-size:15px!important;line-height:1.2em;text-align:center;}
#lineheighthone{font-size:28px!important;}
.about-list li {
    text-align: center;
    padding: 8px 0px!important;
    font-size: 18px;
    list-style: none;
    line-height: 30px;
    border: 1px solid #fff!important;
    border-radius: 4px;
    margin: 24px 0px!important;
}
.inneritemspaddnineoq .col-md-4 {
    
    height: 236px;
	    margin-left: -4%;
   
}
}

@media screen and (max-width: 767px) {
.sidebott1{height:auto!important;}
.dissertation-topic-customize{height:auto!important;}
}
#Content > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div > div.column.mcb-column.one-second.column_column.rightpadd > div
{
    background-color: #2a3c8f;
    padding: 30px 30px 30px 30px;
    margin-top: -32px;
}

::-webkit-input-placeholder { /* WebKit browsers */
color: #000 !important;
opacity: 1;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
color: #000 !important;
opacity: 1;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
color: #000 !important;
opacity: 1;
}
:-ms-input-placeholder { /* Internet Explorer 10+ */
color: #000 !important;
opacity: 1;
}



.button-stroke input[type="submit"] {
font-weight:bold;
background-color:none !important;
}
.innerpadcontentt {
    padding: 20px 44px;
    width: 467px;
    background-color: #161d5e;
    margin-top: -26px;
    padding: 28px !important;
}
.button-stroke button {
    display: none;
    color: #fff!important;
    background: #c0392b!important;
    border: unset;
  
}
@media only screen and (min-width: 1920px) {
	
#Top_bar .menu > li > a {
    padding: 13px 51px;
}
}
@media only screen and (max-width: 1920px) {
	
	.menuo-arrows #Top_bar .menu > li.submenu > a > span:not(.description) {
    padding-right: 2px;
}
}
@media only screen and (max-width: 1440px) {
	#Top_bar.is-sticky .menu_wrapper .menu > li > a {
    padding: 15px 16px;
}
#Top_bar .menu > li > a {
    padding: 13px 27px;
}

}
@media only screen and (max-width: 1400px) {
	

}

@media only screen and (max-width: 768px) {
	
	.excellenc .inner-section {
   
   height: 853px !important;
   
}

	h3.white {
   
    font-size: 21px!important;
    line-height: 29px;
}
.contentpartoneone {
    
    height: 1060px;
}
	.cadlly .column_attr.clearfix.align_justify {
    margin: 7px !important;
    height: 499px !important;
}
.inneritemspaddnineo .col-md-4 {
   width: 91%;
  padding: 33px;
    margin-left: 0%;
	height: 113px;
}
	.inneritemspaddsixl .column_attr.align_justify {
    padding: 0px !important;
}
	.inneritemspaddsixl .col-md-4 {
   height: 494px;
    padding: 20px;
    width: 24.3%;
    padding: 21px;
    margin: 9px;
}
.cadly .column_attr.clearfix.align_justify {
    margin: 17px;
   
}
.innerpadcontentt {
    padding: 20px 44px;
    width: 467px;
    background-color: #132e8d;
    margin-top: -26px;
    margin-left: -240px;
}
}

#Content > div > div > div > div:nth-child(1) > div > div > div > div:nth-child(1) > div > div{
padding: 0px 0px;
    margin-top: 14px;
}
#Content > div > div > div > div:nth-child(1) > div > div > div > div.column.mcb-column.one-second.column_column.ourservicesrightpanelcontent > div{
    background-color: #003c81;
    padding: 30px 30px 30px 30px;
  width: 589px;
    margin-top: 84px;
}
#Content > div > div > div > div.section.mcb-section.full-width.no-margin-h.no-margin-v.bg-cover > div > div > div > div:nth-child(1) > div{
    padding: 35px !important;
}
#crmWebToEntityForm > form > table > tbody > tr:nth-child(2) > td:nth-child(1){
padding: 5px;
}
.button-stroke a.button.button_theme:not(.action_button), .button-stroke a.button.button_theme .button_icon i, .button-stroke a.tp-button.button_theme, .button-stroke button, .button-stroke input[type=submit], .button-stroke input[type=reset], .button-stroke input[type=button] {
    border-color: #337ab7;
font-weight:bold;
    color: #337ab7!important;
}
.button-stroke input[type="submit"] {
    border-color: #222d68 !important;
    color: #222d68 !important;
}
input[type=submit], input[type=reset], input[type=button], input[type=text], input[type=password], input[type=tel], input[type=email], textarea, select, .offer_li .title h3 {
    font-family: none;
font-size:16px;
}

@media only screen and (max-width: 767px){
#wpcf7-f2892-p371-o2 > form > div.quick-form{
width: 88% !important;
    margin: -7px 0 0 21px !important;
    padding: 28px 1px 0 1px !important;
border:none !important;
}
#wpcf7-f2892-p3322-o2 > form > div.quick-form > div.quick-submit.a-clr > input{
border-color: #337ab7 !important;
    color: #337ab7 !important;
}
.quick-form {
    width: 88% !important;
    margin: -7px 0 0 95px !important;
    padding: 6px 9px 0 9px !important;
    border: 1px solid black;
}
.quick-form h3 {
    margin-left: 135px;
    font-size: 21px;
}
#tutorsindiafile {
        margin: -256% 0 0 0;
    padding: 0;
    position: absolute;
  display:none !important;
    margin-left: 60%;
    width: 43%;
}
.header-stack #Top_bar .top_bar_right {
    position: none;
}
.header-stack #Top_bar .top_bar_right {
    position: absolute;
    right: 0;
    bottom: 0;
    top: -12px;
    height: 60px;
}
#Top_bar #menu ul li a {
  padding: 6px 39px;
    margin: 0;
    display: block;
    height: auto;
    line-height: normal;
    border: none;
}
#Content > div > div > div > div:nth-child(1) > div > div:nth-child(1) > div > div.column.mcb-column.one-second.column_column.padinside1 > div{
    margin: -18px 0 -70px 11px;
}
div#crmWebToEntityForm {
    margin: -77px 87px!important;
}
.logo-class {
    padding: 2% 0;
}
a.btn.btn-defaulttt {
    margin-top: -18px;
}
#bgimgti{
display:none;
}
#menusss > div:nth-child(1){
margin-left: 85px;
}
#menusss > div:nth-child(2){
margin-left: 85px;
}
.ubermenu-submenu-padded, .ubermenu .ubermenu-submenu-type-stack{
padding:7px 20px!important;
}
#Top_bar #menu ul li a {
    padding: 0px 35px ;
    margin: 0;
    display: block;
    height: auto;
    line-height: normal;
    border: none;
}
}
@media only screen and (min-width : 992px)  {
#wpcf7-f2892-p371-o2 > form > div.quick-form{
width: 88% !important;
    margin: -7px 0 0 21px !important;
    padding: 28px 1px 0 1px !important;
border:none !important;
}

#wpcf7-f2892-p371-o2 > form > div.quick-form > div.quick-submit.a-clr > input{
border-color: #337ab7 !important;
    color: #337ab7 !important;
}
#menusss > div:nth-child(1){
display:none;
}
#menusss > div:nth-child(2){
display:none;
}
}

.quick-form {
   width: 76%;
    margin: 0 0 0 58px;
    padding:20px 9px 0 9px;
border:1px solid #2a3c8f;
}
.quick-form h3 {
    color: #2a3c8f!important;
    font-size: 24px!important;
    font-weight: 550!important;
    padding-bottom: 0px;
    text-align: center;
}
#Content > div > div > div > div:nth-child(1) > div > div:nth-child(1) > div > div.column.mcb-column.one-second.column_column.cspad > div > div{
border:none;
}





.ubermenu-skin-clean-white {
    background: white !important;
    width: 1488px !important;
    margin-left: -11px;
    margin-top: 72px;
    padding: 8px 0;
    padding-left: 29px;
}

@media only screen and (min-width: 825px){
.sticky-white #Top_bar.is-sticky, .sticky-white #Top_bar.is-sticky #menu {
    background: rgb(27, 38, 99) !important;
}
.ubermenu-skin-clean-white {
  margin-top: 57px;
}

}
.header-classic #Top_bar {
    background: #fff !important;
}

@media only screen and (min-width: 825px){
#Top_bar.is-sticky #logo img.logo-sticky {

    margin-top: -2px !important;
}}


#Top_bar a#search_button {
color:white;
}

input[type="search"]{
    display: none;
}
#searchsubmittophe {
    
    display: none;}

div#menusss {
    display: inline-flex;
}


.btn-info {
    color: white;
    background: #01003e;
    padding: 7px 15px;
    font-size: 13px;
    border-radius: 10px;
    margin-top: 3%;
    display: inline-block;
    border: 1px solid #222c67;
}
.btn-primary {
    color: white;
    margin-left: 15px;
    background: #222c67;
    padding: 7px 15px;
    font-size: 13px;
    border-radius: 10px;
}

.header-classic #Action_bar {
    position: absolute;
    background-color: #252781 !important;
}

#Action_bar {
line-height: 34px;
}

#Action_bar .social {

    display: none;}


#Action_bar .contact_details li a {
    color: white !important;
}

.h2black{
color: #0e0e0e!important;
    font-size: 26px!important;
    font-weight: 500!important;
}

p, ul, ol {
    font-size: 14px;
    color: #212529;
}

.h1black {
    font-size: 22px;
    line-height: 25px;
    font-weight: 400;
    color: black;
}




i.fa.fa-times {
    display: none;
}

.featureboxside h4 {
       font-size: 24px;
}
.ubermenu-main {
    max-width: 1500px;
}

li#menu-item-5049 span {
    top: -24px;
    position: relative;
}
li#menu-item-5049 a {
    border-radius: 11px;
    background: #4a9df2;
    color: #fff !important;
    height: 10px;
    top: 18px;
    padding: 10px !important;
}

li#menu-item-5049 {
    margin-left: 46px !important;
}
li#menu-item-5050 {
    margin-left: 13px !important;
}
li#menu-item-5050 span {
    top: -24px;
    position: relative;
}
li#menu-item-5050 a {
    border-radius: 11px;
    background: #4a9df2;
    color: #fff !important;
     height: 10px;
    top: 18px;
    padding: 10px !important;
}




.bacpp {
    margin-right: 40px !important;
}
.bacp {
    margin-right: 13px !important;
    margin-left: 30px !important;
}


#Footer .widget_nav_menu ul
{
color: #fff;
}

#Footer a {
    color: #fff!important;
}
.ui-tabs .ui-tabs-nav li.ui-state-active a:after {
    background: #fff;
}

.test_re .testimonials_slider .testimonials_slider_ul li .author {
   
    padding-right: 65px;
}


div#secbluesix {
 padding: 40px;
	    height: 243px;
}
.addifea {
   background-color: #1a2663;
}

.padl p {
    padding-left: 20px;
    padding-right: 20px;
}
ul.ulli {
    height: 251px;
}
div#secblueone {
   
    height: 251px;
}
div#secbluefive {
   
   height: 237px;
}
div#secbluethree {
    
    height: 271px;
}
.csleft .bg-cover {
    height: 1112px;
}

.cslefti .bg-cover {
    height: 1180px;
}
.csri .bg-cover {
    height: 1253px;
}
.rpad .rightpaddbgcolorr {
   
    padding: 52% 5% 52% 6%;
}
.rpadd .rightpaddbgcolorr {
   
    padding: 25% 5% 25% 6%;
}

.testimonials_slider .testimonials_slider_ul li .author h5 {
   
    text-align: right;
}
a.button.button_js.slick-arrow {
    margin-top: 69px;
}
.teti {
    padding-top: 30px;
}
blockquote {
    
    margin: 0 0 8px 25px;
}
.testimonials_slider .testimonials_slider_ul li .author {
 
   padding-bottom: 53px;
}
blockquote, blockquote a, blockquote a:hover {
    color: #fff;
}
.testimonials_slider .testimonials_slider_ul li .hr_dots {
    margin-bottom: 15px;
    display: none;
}
blockquote:after {
   
    color: #fff;
}
.testimonials_slider .testimonials_slider_ul li .author a {

    color: #fff !important;
}
.testimonials_slider.hide-photos .testimonials_slider_ul li .single-photo-img {
    display: block !important;
}
.slick-slide img {
    margin-left: 0px;
    margin: 0 auto;
}
blockquote:after {
  
    content: "\f10d" !important;
    font-family: fontawesome;
   position: absolute;
   font-size: 20px;
    background: none !important;
}
.testimonials_slider .testimonials_slider_ul li {
    background-color: #000000ab;
    padding-top: 24px;
}
.testimonials_slider .testimonials_slider_ul li .bq_wrapper {
 
    padding: 9px 0px 10px;
}

.wh-widget-send-button-desktop .wh-widget-send-button-wrapper:hover a.wh-widget-send-button-get-button {
    display: none !important;
}
div.wh-widget-send-button-wrapper div.wh-widget-send-button-wrapper-list a.wh-widget-send-button-get-button {
    display: none !important;
   
}
.btn-left {
    transform: rotate(-90deg)!important;
    left: -4%;
    top: 48%!important;
}
.btn-right{
	  position: fixed;
    z-index: 99;
    transform: rotate(270deg);
    right: -4%;
    top: 50%;
}
.button-stroke button {
    color: #fff!important;
    background: #c0392b!important;
    border: unset;
    /* font-size: 18px; */
}
.twentyseven {
    font-size: 13px!important;
}
.des-ph b{
color: #d9534f;
    font-size: 14px;
}
.des-ph p{
text-align: justify;
    font-size: 12px;
	padding: 0% 2%;
}
.logo-class{padding: 7% 0%;
    margin: auto;
}
li#menu-item-3187 a {
    background: #283ea3;
    color: #fff;
    width: 55%;
    text-align: center;
}
li#menu-item-3187 {
    margin-top: 7px;
}
.button-stroke button b{color:#fff;}

.btn-left {
    transform: rotate(-90deg)!important;
	left: -4%;
	    top: 59%;
}
div#wpcs_tab_3125{
	
	    width: 140px!important;
    height: 27px!important;
	    left: -57px!important;
}
.button-stroke input[type="submit"]{
	  border-color: #ffffff;
    color: #ffffff;
    font-size: 15px;
    padding: 8px 28px;
    margin: auto;}
#wpcs_close_slider_3125 img {
    max-width: 100%;
    background: rgb(50, 111, 176);
}
.quick-form h3 {
    color: #fff!important;
    font-size: 26px!important;
    font-weight: 500!important;
    padding-bottom: 14px;
    text-align: center;
}
.quick-form textarea {
    height: 86px!important;
}
div#wpcs_tab_3125 {
    top: 222px!important;
	border: 0px solid #7f7f7f!important;

    background: #b91c2a!important;
}
div#wpcs_content_inner_3125 {
    display: none;
    max-width: 100%;
   background-image: linear-gradient(to right top, #337ab7,#2a3c8f)!important;
    min-height: 100%;
    border: unset!important;
}
.leftcontactbg label i {
    margin: 0px 6px;
}
.order-left {
    width: 48%;
    float: left;
}
.order-right {
    width: 48%;
    float: left;
    margin: 0px 10px;
}
.order-right span {
    padding-top: 8px!important;
}
.order-left span {
    padding-top: 8px!important;
}
.order-left label i {
    margin: 0px 6px;
}
.order-right label i {
    margin: 0px 6px;
}
.leftcontactbg h3 {
    color: #fff5f6!important;
}

.order-right span {
    padding-top: 8px!important;
}
.order-left span {
    padding-top: 8px!important;
}
.order-left label i {
    margin: 0px 6px;
}
.order-right label i {
    margin: 0px 6px;
}
.leftcontactbg h3 {
    color: #fff5f6!important;
}
.quick-form {
   
   /* padding: 20px 0px 0px; */
}
.quick-email {
    width: 40%;
    float: left;

}
.quick-email input {
   height: 47px;
   border: 1px solid #ded7d7ee;
}
.quick-submit.a-clr input {
    border-radius: 0px;
}
.quick-title {
   float: left;
   width: 35%;
   font-size: 20px;
   padding: 14px;
   text-align: center;
   text-transform: capitalize;
}

div#bgfortopicchoose p {
    color: #000;
}
div#bgfortopicchoose a.btn.btn-defaultfourbox {
    color: #000;
    border: 1px solid;
    background: #222d68;
    color: #fff;
    border-radius: 7px;
	padding: 8px 16px;
}
div#bgfortopicchoose h4 {
    font-weight: 500;
    font-size: 20px;
   
}
.csleftl h4 {
    color: #222c67 !important;
}

div#bgfortopicchoosebottom h4.white {
   
   
	font-size: 20px;
    font-weight: 500;
}
div#bgfortopicchoosebottom p {
    color: #000;
}

div#bgfortopicchoose1 h4 {
    font-size: 20px;
	 font-weight: 500;
	   
}

div#bgfortopicchoosebottom h4 {
    font-size: 20px;
	 font-weight: 500;
}

div#bgfortopicchoosebottom1 h4 {
    font-size: 20px;
	 font-weight: 500;

}

.error-list li{
    list-style: none;
    font-size: 18px;
    border: 1px solid #ccc;
    padding: 10px;
    margin: 0px;
}
.error-page h3{
  color: #263c92!important;
    padding: 10px 30px;
   text-align:center;
	  margin-bottom:0px
}
.error-page{margin: 15px 0px;}
.error-services h4 a{
    font-weight: 600;
    font-size: 16px;
   color: #286b93!important;
}
.error-services img{width:100px!important;}
a.button.error-button.button_right.button_size_2.button_stroke_custom.button_js.kill_the_icon {
    background-color: #367aba!important;
	  padding: 0px 15px;
    font-size: 18px;
}
.error-page iframe{border: 5px solid #286b93;}

.error-services h5{
    font-size: 14px;
    background: #3b7ac1;
   color: #fcfcfc!important;
	text-align:center;
	padding:10px 10px;
	border:1px solid;
	 height: 90px;
   width: 100px;
	border-radius:50%;
	display:table-cell;
	vertical-align:middle;
}
.error-services .icon_box{
    padding: 0px 20px;
}
.error-services h4 a:hover{
	color:#263c92!important
}
.error-page h2{
	    color: #263c92;
    font-weight: 600;	
}
.error-service h3 {
    background: #397abd;
    color: #fff!important;
}
.error-box{
margin-bottom: 0px!important;
}
.logo-img {margin-bottom:0px!important;}

.stick_popup span.wpcf7-form-control-wrap {
    width: 100%;
    position: relative!important;
    display: inline-block;
    margin-bottom: 0px;
}
.stick_popup{
	width:60% !important;
	left:0 !important;
	right:0 !important;
	margin: auto;
	height: auto !important;
	margin-left: 20% !important;
}
.stick_content{
	background:linear-gradient(#013c7f, #273ea3);
    color: #fff;
	padding: 10px 20px 1px !important;
}
.stick_content-1 .col-md-6{width:75%;}
.stick_content-1 .col-md-6, .stick_content-1 .col-md-3{
	padding-left:12px !important;
	padding-right:0 !important;
}
.stick_content-1 input[type="submit"]{
	    padding: 9px 20px !important;
	font-size:18px;
}
.stick_popup h1{
	color:#fff;
	font-weight:600;
}
.stick_close {
    font-size: 25px;
    background-color: #ff572200; 
    color: #ffffff;
    padding: 12px;
}
.stick_content-1{
	padding:5px;
}
.stick_block_layer{
	background-image: none !important;
}
.bt-link{
	bottom: 0px;
	position:absolute;
}

@media only screen and (max-width: 1366px) {
	.contform .column_attr.align_left {
    text-align: left;
    height: 728px;
}
	.menuo-arrows #Top_bar .menu > li.submenu > a > span:not(.description) {
    padding-right: 13px;
}
#Top_bar .menu > li > a {
    padding: 7px 15px 0px 15px;
}
.inneritemspaddsixl .col-md-4 {
    padding: 20px;
    width: 24.5%;
    padding: 33px;
    margin: 17px;
}
	.phdfull .bg-cover {
    height: 1644px;
}
	.researchpro .bg-cover {
    height: 1597px;
}
	.phddiseerr .bg-cover {
    height: 715px;
}
	.phdcoursework .bg-cover {
    height: 918px;
}
	.ugdissertation .bg-cover {
    height: 3631px;
}
.csleftu .bg-cover {
    height: 838px;
}
	.csleftr .bg-cover {
    height: 888px;
}
	.csleftl .bg-cover {
       height: 829px;
}
	.ui-tabs .ui-tabs-nav li a {
    font-size: 16px!important;
}
	

.ui-tabs .ui-tabs-nav li {
    width: 194px;
}
	.busiimage .bg-cover {
    height: 334px;
}
	div#secbluetwo {
   
    height: 211px;
}
div#secbluethree {
    height: 280px;
}
	div#secbluefive {
    height: 224px;
}
div#secblueone {
    height: 257px;
}
	ul.ulli {
    padding-bottom: 20px;
		    height: 280px;
}
	.turt p {
    padding-bottom: 16px;
}
	.turtt p {
    padding-bottom: 35px;
}
	.turte p {
    padding-bottom: 20px;
}
	.mshei div#secbluefive {
    height: 201px;
}
	.csleft .bg-cover {
    height: 1147px;
}

	
.rpadd .rightpaddbgcolorr {
   
   padding: 28% 5% 28% 6%;
}
.csri .bg-cover {
    height: 1330px;
}
}

@media only screen and (max-width: 1340px) {
	#Top_bar.is-sticky .menu_wrapper .menu > li > a {
    padding: 15px 5px;
}
	#Top_bar .menu > li > a {
    padding: 13px 12px;
}
	img.logo-sticky.scale-with-grid {
    width: 39%;
}
	#Top_bar.is-sticky .logo {
  
    margin: 0 0px 0 20px;
  
}
	
	.menuo-arrows #Top_bar.is-sticky .menu > li.submenu > a > span:not(.description) {
    padding-right: 19px;
}
}


@media only screen and (max-width: 1280px) {
	.rightpaddtr .column_attr.clearfix.align_center {
 height: 329px;
  padding-top: 13%;
      padding-bottom: 2px;
  
}
	.padinside1 .column_attr.clearfix.align_center {
    height: 641px;
   
}
	.rightpaddtr .column_attr.clearfix.align_center {
    padding-bottom: 2px;
}
	.contform .column_attr.align_left {
    text-align: left;
    height: 680px;
}
	.covivontentgrat {
    position: relative;
    height: 733px;
}
	.covivontentt {
   
    height: 644px;
}
	div#secbluethree {
    height: 280px;
}
	div#secblueone {
    height: 285px;
}
	
	div#secbluefive {
    height: 224px;
}
	.leeftwhatservicesside .col-md-6 {
    width: 21%;
  
}
	img.logo-sticky.scale-with-grid {
    width: 56%;
}
	.cadly {
   
    margin-bottom: 0%;
}
	.inneritemspaddsixl .col-md-4 {
height: 300px;
 }
	.cadly .inneritemspaddnine .column_attr.clearfix.align_justify {
    height: 105px !important;
}
	.cadly .column_attr.clearfix.align_justify {
 height: 285px !important;
   
}
	.mm-vertical #Top_bar .menu > li > ul.mfn-megamenu > li {
    width: 15%;
   
}
	.mm-vertical #Top_bar .menu > li > ul.mfn-megamenu a.mfn-megamenu-title {
   
    font-size: 11px;
}
	
	
	a#logo {
    margin-right: 11px;
}
	#Top_bar.is-sticky .menu_wrapper .menu > li > a {
    padding: 15px 15px;
}
	#Top_bar.is-sticky .logo {
    margin: 0 13px 0 20px;
}
	.menuo-arrows #Top_bar.is-sticky .menu > li.submenu > a > span:not(.description) {
    padding-right: 20px;
}
	
	.contentpartoneone {
    height: 667px;
}
	#Top_bar .menu > li > a {
    padding: 7px 11px 0px 11px;
}
	li#menu-item-5155 {
    margin-right: 4px !important;
    margin-left: 8px !important;
}
}

@media only screen and (max-width: 1268px) {
	#Top_bar .menu > li > a {
    font-size: 14px;
   
}
	#Top_bar .menu > li > a {
    padding: 13px 15px;
}
}

@media only screen and (max-width: 1172px) {
	#Top_bar .menu > li > a {
    padding: 13px 12px;
}
}

@media only screen and (max-width: 1150px) {
	#Top_bar .menu > li > a {
    font-size: 13px;
   
}
	li#menu-item-5155 {
    margin-right: 4px !important;
    margin-left: 6px !important;
}
	
	#Top_bar .menu > li > a {
    padding: 13px 11px;
}
	
}
@media only screen and (max-width: 1032px) {
	#Top_bar.is-sticky .menu_wrapper .menu > li > a {
    padding: 15px 2px;
}
	#Top_bar .menu > li > a {
    font-size: 11px;
}
	#Top_bar .menu > li > a {
    padding: 13px 10px;
}
	
}
@media only screen and (max-width: 1026px) {
	
	
	#Top_bar .menu > li > a {
    padding: 13px 8px;
}
}
@media only screen and (max-width: 1024px) {
	.ubermenu .ubermenu-nav .ubermenu-column-1-6 {
    width: 15.66%;
}
	
}
@media only screen and (max-width: 900px) {

	#Top_bar .menu > li > a {
    padding: 13px 5px;
}
	
}

@media only screen and (max-width: 824px) {

	
	
	

}

@media only screen and (max-width: 768px) {
	
	#Action_bar .contact_details {
  padding: 13px !important;
   
}
	
	
	i.icon-search-fine {
 top: -19px;
    color: #fff;
    z-index: 999;
}
	#Top_bar a.responsive-menu-toggle {
  margin-top: -13px; 
    right: 0%;
}
	.inneritemspaddsixl .col-md-4 {
    height: 462px;
    padding: 20px;
    width: 24.3%;
    padding: 21px;
    margin: 9px;
}

	.inneritemspaddnine .column_attr.clearfix.align_justify {
    height: 144px !important;
}
	.header-classic #Action_bar {
   
    padding-top: 17px;
}
.logo-overflow #Top_bar #logo img {
    padding-top: 31px;
    width: 64%;
}
	
	
	
	li.soccialssl {
    
    height: 32px;
}
	

	.leftsidebghei .bg-cover {
    height: 2161px !important;
}
	.imahei img {
    height: 507px !important;
}
.mainboxx {
    margin-top: 323px;
    margin-bottom: 323px;
}
	div#secblueone {
    height: 425px;
}
	
	div#secbluefive {
    height: 362px;
}
div#secbluethree {
    height: 450px;
}
ul.ulli {
   
   height: 390px;
}
.whbac {
    background-size: cover;
}
}

@media screen and (max-width: 767px) {
  .chat-sec ul li {
    float: left;
    width: 130px;
    position: relative;
    padding: 8px 0 6px;
    text-align: center;
		  font-size: 13px;
    font-weight: 800;
}
	.chat-sec ul li a {
    color: #6f6c6c!important;
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
}
#Footer .footer_copy .social {
    float: none;
    margin: 0;
    display: none;
}
	div#wh-widget-send-button-wrapper-list {
    display: none;
}
	.footer-copy-center #Footer .footer_copy .copyright {
    color: #fff!important;
    margin: 8px 7px 43px!important;
    padding: 1px !important;
    text-align: center!important;
		
}
	.wh-widget-button-icon.wh-messenger-bg-whatsapp {
    display: none!important;
}
	.callnow{display:block;}
.mobile-tb-center #Top_bar .top_bar_right {
    text-align: center;
    display: none;
}
	div.wh-widget-send-button-wrapper div.wh-widget-send-button-wrapper-list {
    margin: 10px;
    margin-bottom: 20px;
    padding: 0;
    border: 0;
    position: relative;
    bottom:-27px !important;
    text-align: center;
}
li.last {
    display: none;
}
	li.last.phone {
    display: block!important;
}

}



@media only screen and (max-width: 600px) {
  .order-left {
    width: 100%;
    float: left;
}
.order-right {
    width: 100%;
    float: left;
}
.button-stroke button {
    margin: 0% 6%;
}
	div#wpcs_tab_3125 {
    top: 170px!important;
}
}

@media only screen and (max-width:480px)
{
	h1#sampless {
   
    line-height: 21px;
}
	.excellenc .inner-section {

    margin-top: 0%;
   
}
	.inneritemspaddnineoq .col-md-4 {

    margin-left: 3%;
    width: 76%;
}
	.paddddleft ul.list-unstyled {
   
    margin-top: 6%;
}
	.indevg .inner-section {
    height: 445px;
}
	div#subthree {
		height:350px;
    
}
	p.notednote {
    padding-left: 0px;
    padding-right: 0px;
}
	.padinside1 .column_attr.clearfix.align_center {
    height: 297px;
	padding-top: 0%;
}
	
	.ui-tabs .ui-tabs-nav li a {
   
    background: none;
}
.ui-tabs .ui-tabs-nav li img {
    width: 7%;
}
.ui-tabs .ui-tabs-nav li {
   border: 1px solid #ffffff6e;
}
a.idd {
 padding: 10px 4px 10px 14px;
}
.sidebott {
 margin-right: 0%; 
}
	.cspad div#crmWebToEntityForm {
    margin: 19px 132px 0px 153px !important;
	width: 98% !important;
}
	.inneritemspaddsixl .col-md-4 {
 width: 83%;
 }
	.bacsizcov {
    background-size: cover;
}
	div#crmWebToEntityForm {
    margin: 19px 132px 0px 199px !important;
}
	i.fa.fa-times {
	
    display: block !important;
}
	
	
	.bacpp {
    margin-left: 29px !important;
    
}
	.bacp {
   
    margin-top: 11px !important;
}
	
	
	
	.spec_sub.bg-cover {
    background-size: auto;
}
	blockquote:after {
    
    padding-left: 5px;
}
.covinh .convincepad {
    margin-top: 0px;
		margin-bottom: 0px;
}
	.header-classic #Action_bar {
    padding-top: 0px;
}
	
	
	
	#Top_bar #logo img.logo-mobile {
   
    padding-top: 43px;
}
#Top_bar .logo #logo, #Top_bar .logo .custom-logo-link {
    margin: 10px 4px;
}
	
	
	
	.convincepad h4 {
    font-size: 18px;
}
	li.soccialssl {
    height: 19px;
}
	.rprop br {
    display: none;
}
	.convinc br {
    display: none;
}
.convincepad {
    margin-top: 23px;
    margin-bottom: 23px;
}

	
#menusss > div:nth-child(1) {
    margin-left: 0px;
}
#menusss > div:nth-child(2) {
    margin-left: 0px;
}

	
	
	div#menusss p {
    width: 143px;
    padding: 0px 0px;
}
	.ubermenu-skin-clean-white {
   
    margin-bottom: 0px !important;
}


.imahei img {
    height: 240px !important;
}
.csleftu .bg-cover {
    height: 340px;
}
.mainboxx {
    margin-top: 0px;
    margin-bottom: 0px;
}
.rightpaddbgcolorr br {
    display: none;
}
.rightpaddbgcolorr {
    padding-top: 68px;
  	padding-bottom: 50px;
}

ul.ulli {
height: 220px;
}
h4.blue a {
   padding: 11px;
}
.mobiw {
    background-size: cover;
}
h4.blue {
    padding-right: 23px;
    padding-left: 0px;
    font-size: 17px;
}
h4.black {
    padding-right: 23px;
    padding-left: 0px;
    font-size: 21px;
}
	.padl .white {
    padding: 20px;
}
	
.padl .blackcontent {
    padding: 20px;
}
.widget h4 {
    font-size: 20px;
}
	div.wh-widget-send-button-wrapper div.wh-widget-send-button-wrapper-list a.wh-widget-send-button-get-button {
   
    color: #afafaf00 !important;
}
div#wh-widget-send-button-wrapper-list .wh-widget-send-button-get-button {
    display: none !important;
}

.quick-email input[type="email"] {
      width: 99% !important;
}
	
div.wh-widget-send-button-wrapper div.wh-widget-send-button-wrapper-list a.wh-widget-send-button-get-button {
   
    display: none !important;
}
.quick-form {
    width: 99% !important;
    margin: 58px 0 0 0px !important;
    
}
.quick-title {
    
    font-size: 16px;
    padding: 16px;
    text-align: left;
    
}
.quick-email {
    width: 58%;
    
}
	a.btn.btn-info {
    margin-bottom: 11px !important;
}

div#menusss {
    width: 234px;
    padding: 0px 43px;
    height: 0px !important;
}
div#menusss {
    display: inline-block;
}
	
.rc-anchor-normal-footer {
    width: 70px;
    right: 74px;
 }
.rc-anchor-normal .rc-anchor-pt {
    margin: 2px -29px 0 22px;
    
}
.ubermenu-skin-clean-white {
  margin-top: 17px;
}
a.btn.btn-info {
    padding: 11px !important;
    text-align: center;
}
a.btn.btn-primary {
    padding: 12px !important;
    text-align: center;
}
#Top_bar #menu ul li a {
    padding: 0px 35px !important;
	    margin-left: 0px;
	font-size: 14px;
    
}
	#Content > div > div > div > div:nth-child(1) > div > div:nth-child(1) > div > div.column.mcb-column.one-second.column_column.padinside1 > div {
    margin: -18px 0 -18px 11px;
}
	div.wh-widget-send-button-wrapper div.wh-widget-send-button-wrapper-list a.wh-widget-send-button-get-button {
    
    display: none !important;
}
ul.Socialing-widg {
    padding: 42px;
   
}
.quick-title {
  width: 40%;
}
.rc-anchor-normal .rc-anchor-pt {
    margin: 2px 0px 0 0;
}
.rc-anchor-normal-footer {
   
    width: 70px;
    right: 64px;
    position: relative;
}
	.testimonials_slider a.slider_prev {
    display: block !important;
}
	.testimonials_slider a.slider_next {
    display: block !important;
}
	.testimonials_slider .testimonials_slider_ul li .author h5 {
    text-align: center;
}
	blockquote {
    font-size: 12px;
    line-height: 19px;
    margin-top: 44px !important;
		    padding-right: 10px;
}
	blockquote:after {
   
    font-size: 14px !important;
  
}
a.button.button_js.slick-arrow {
   margin-top: 87px;
}
}
@media only screen and (max-width:360px)
{
	.g-recaptcha {
    transform: scale(0.80);
    transform-origin: 0 0;
}
	h5.black {
   
    padding: 4px;
  
}
	div#secbluesix {
    height: 398px !important;
}
	.leeftwhatservicesside .col-md-6 {
    width: 92% !important;
		    margin-bottom: 20px !important;
   
}
	
#Top_bar #logo img {
   
    margin-left: 56px;
}
	div#ordernowtwelve {
   
    height: 240px !important;
}
div#ordernoweleven {
    
    height: 225px !important;
}
div#ordernowten {
   
    height: 225px !important;
}

a#outlibebtnbtn {
    margin-top: 23px;
    margin-left: 68px;
}
#crmWebToEntityForm tr, #crmWebToEntityForm td {
    
    width: 14%;
  
}
ul.Socialing-widg {
    padding: 39px;
}
}


#Top_bar .menu > li > ul.mfn-megamenu a.mfn-megamenu-title {
    background-color: #252781!important;
    color: #f0f8ff!important;
}
		</style>
			<script>
document.addEventListener( 'wpcf7mailsent', function( event ) {
    location = '/thank-you/';
}, false );
	</script>
	<!-- GetButton.io widget -->
<script type="text/javascript">
    (function () {
        var options = {
            whatsapp: "+91 875 444 6690", // WhatsApp number
            call_to_action: "Message us", // Call to action
            position: "left", // Position may be 'right' or 'left'
        };
        var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();
</script>
<!-- /GetButton.io widget -->	
</head>

<!-- body -->
	
<body data-rsssl=1 class="page-template-default page page-id-55 page-parent theme-betheme woocommerce-no-js  color-custom style-default button-stroke layout-full-width header-classic header-fw header-boxed minimalist-header sticky-header sticky-white ab-show subheader-both-left menu-line-below menuo-arrows mm-vertical logo-overflow logo-no-sticky-padding mobile-tb-right mobile-mini-mr-lr be-2097">

	<!-- mfn_hook_top --><!-- mfn_hook_top -->
	
	
	<!-- #Wrapper -->
	<div id="Wrapper">

		
		
		<!-- #Header_bg -->
		<div id="Header_wrapper" >
<head><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@30,300,0,0" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" /></head>
			<!-- #Header -->
			<header id="Header">
	<div id="Action_bar">
		<div class="container">
			<div class="column one">

				<ul class="contact_details">
					<li margin-bottom:8px;"class="phone"><span style="font-size:18;"class="material-symbols-outlined">
                    call
                    </span><a style="font-size:16px;href="tel:+44-1143520021">+44-1143520021</a></li><li class="phone"><span style="font-size:18px;"class="material-symbols-outlined">
                    call
                    </span><a style="font-size:16px;" href="tel:+918754446690">+91 8754446690</a></li><li class="mail"><span style="font-size:20px; margin-top:5px;"class="material-symbols-outlined">
                    mail
                    </span><a style="margin-left:4px;font-size:16px;" href="mailto: info@tutorsindia.com">info@tutorsindia.com</a></li></ul>

				<ul class="social"></ul>
			</div>
		</div>
	</div>


<!-- .header_placeholder 4sticky  -->
<div class="header_placeholder"></div>

<div id="Top_bar" class="loading">

	<div class="container">
		<div class="column one">

			<div class="top_bar_left clearfix">

				<!-- Logo -->
				<div style="margin-top:18px;" class="logo"><a id="logo" href="https://www.tutorsindia.com" title="Tutors India" data-height="60" data-padding="15"><img class="logo-main scale-with-grid" src="https://www.tutorsindia.com/wp-content/uploads/2017/02/Tutorssindia-Logo-Final.png" data-retina="https://www.tutorsindia.com/wp-content/uploads/2017/02/Tutorssindia-Logo-Final.png" data-height="" alt="" style="max-height: 61px;margin-top:4px;"/><img class="logo-sticky scale-with-grid" src="https://www.tutorsindia.com/wp-content/uploads/2017/02/Tutorssindia-Logo-Final.png" data-retina="https://www.tutorsindia.com/wp-content/uploads/2021/01/Tutorssindia-Logo-Final.png" data-height="" alt="" /><img class="logo-mobile scale-with-grid" src="https://www.tutorsindia.com/wp-content/uploads/2017/02/Tutorssindia-Logo-Final.png" data-retina="https://www.tutorsindia.com/wp-content/uploads/2017/02/Tutorssindia-Logo-Final.png" data-height="" alt="" /><img class="logo-mobile-sticky scale-with-grid" src="https://www.tutorsindia.com/wp-content/uploads/2017/02/Tutorssindia-Logo-Final.png" data-retina="https://www.tutorsindia.com/wp-content/uploads/2017/02/Tutorssindia-Logo-Final.png" data-height="" alt="" /></a></div>
				<div class="menu_wrapper">
					<nav id="menu"><ul id="menu-home-menu" class="menu menu-main"><li id="menu-item-5613" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-55 current_page_item menu-item-has-children"><a href="https://www.tutorsindia.com/our-services/"><span>Services</span></a>
<ul class="sub-menu mfn-megamenu mfn-megamenu-6">
	<li id="menu-item-5269" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children mfn-megamenu-cols-6"><a class="mfn-megamenu-title" href="https://www.tutorsindia.com/our-services/masters-dissertation-writing-services/"><span>Masters</span></a>
	<ul class="sub-menu mfn-megamenu mfn-megamenu-6">
		<li id="menu-item-4933" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/masters-dissertation-writing-services/dissertation-topic/"><span>Dissertation Topic</span></a></li>
		<li id="menu-item-4934" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/masters-dissertation-writing-services/dissertation-proposal/"><span>Research  Proposal</span></a></li>
		<li id="menu-item-4935" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/masters-dissertation-writing-services/full-dissertation/"><span>Dissertation(Full)</span></a></li>
		<li id="menu-item-4936" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/masters-dissertation-writing-services/specific-dissertation/"><span>Specific Dissertation</span></a></li>
		<li id="menu-item-4937" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/masters-dissertation-writing-services/dissertation-part/"><span>Dissertation(Part)</span></a></li>
		<li id="menu-item-4938" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/masters-dissertation-writing-services/resit-dissertation/"><span>Resit Dissertation</span></a></li>
		<li id="menu-item-4939" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/masters-dissertation-writing-services/dissertation-statistical-analysis/"><span>Diss. statistics</span></a></li>
		<li id="menu-item-4940" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/masters-dissertation-writing-services/poster-presentation/"><span>Poster Presentation</span></a></li>
		<li id="menu-item-4941" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/masters-dissertation-writing-services/ug-dissertation/"><span>UG Dissertation</span></a></li>
		<li id="menu-item-4942" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/masters-dissertation-writing-services/cv-writing/"><span>CV writing</span></a></li>
	</ul>
</li>
	<li id="menu-item-4943" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children mfn-megamenu-cols-6"><a class="mfn-megamenu-title" href="https://www.tutorsindia.com/our-services/phd-dba-dissertation/"><span>Phd /DBA</span></a>
	<ul class="sub-menu mfn-megamenu mfn-megamenu-6">
		<li id="menu-item-4944" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/phd-dba-dissertation/phd-coursework/"><span>PhD Coursework</span></a></li>
		<li id="menu-item-4945" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/phd-dba-dissertation/phd-dissertation-topic/"><span>PhD Topic Selection</span></a></li>
		<li id="menu-item-4946" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/phd-dba-dissertation/phd-research-proposal/"><span>PhD Proposal</span></a></li>
		<li id="menu-item-4947" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/phd-dba-dissertation/phd-full-dissertation/"><span>PhD Dissertation(Full)</span></a></li>
		<li id="menu-item-4948" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/phd-dba-dissertation/phd-dissertation-part/"><span>PhD Dissertation(Part)</span></a></li>
		<li id="menu-item-4949" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/phd-dba-dissertation/phd-dissertation-rework/"><span>Dissertation Rework</span></a></li>
		<li id="menu-item-4950" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/phd-dba-dissertation/phd-synopsis/"><span>PhD Synopsis</span></a></li>
		<li id="menu-item-4951" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/phd-dba-dissertation/phd-presentation/"><span>PhD Presentation</span></a></li>
		<li id="menu-item-4952" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/phd-dba-dissertation/phd-research-plan/"><span>PhD Research Plan</span></a></li>
		<li id="menu-item-4953" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/phd-dba-dissertation/phd-viva-voice/"><span>PhD Viva Voice</span></a></li>
	</ul>
</li>
	<li id="menu-item-4954" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children mfn-megamenu-cols-6"><a class="mfn-megamenu-title" href="https://www.tutorsindia.com/our-services/coursework-writing/"><span>Coursework</span></a>
	<ul class="sub-menu mfn-megamenu mfn-megamenu-6">
		<li id="menu-item-4955" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/coursework-writing/essay-writing-services/"><span>Essay Writing</span></a></li>
		<li id="menu-item-4956" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/coursework-writing/annotated-bibliography/"><span>Annotated Bibliography</span></a></li>
		<li id="menu-item-4957" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/coursework-writing/reflective-report/"><span>Reflective Report</span></a></li>
		<li id="menu-item-4958" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/coursework-writing/critical-review/"><span>Critical Review</span></a></li>
		<li id="menu-item-4959" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/coursework-writing/case-report-writing-services/"><span>Report Writing</span></a></li>
		<li id="menu-item-4960" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/coursework-writing/exam-notes/"><span>Exam Notes</span></a></li>
		<li id="menu-item-5350" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/coursework-writing/assignment-writing-services/"><span>Assignment Writing</span></a></li>
		<li id="menu-item-4962" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/coursework-writing/references-collection-services/"><span>References Collection</span></a></li>
		<li id="menu-item-4963" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/coursework-writing/research-methodology/"><span>Research Methodology</span></a></li>
		<li id="menu-item-4964" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/coursework-writing/literature-review/"><span>Literature Review</span></a></li>
	</ul>
</li>
	<li id="menu-item-7947" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children mfn-megamenu-cols-6"><a class="mfn-megamenu-title" href="https://www.tutorsindia.com/our-services/publication-support/"><span>Publication Support</span></a>
	<ul class="sub-menu mfn-megamenu mfn-megamenu-6">
		<li id="menu-item-5462" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/publication-support/manuscript-development/"><span>Manuscript</span></a></li>
		<li id="menu-item-4967" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/publication-support/conference-paper/"><span>Conference / Seminar</span></a></li>
		<li id="menu-item-4968" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/publication-support/text-book-writing/"><span>Textbook Writing</span></a></li>
		<li id="menu-item-4969" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/publication-support/manuscript-qualitative-textual-analysis/"><span>Manuscript Statistics</span></a></li>
		<li id="menu-item-4970" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/publication-support/conference-abstract/"><span>Abstracts</span></a></li>
		<li id="menu-item-4971" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/publication-support/medical-writing/"><span>Medical Writing</span></a></li>
		<li id="menu-item-4972" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/publication-support/biostatistics-services/"><span>Biostatistics Services</span></a></li>
		<li id="menu-item-4973" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/publication-support/computer-science-engineering-cse-and-it/"><span>Computer Science &#038; IT</span></a></li>
		<li id="menu-item-4974" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/publication-support/engineering-research/"><span>Engineering Research</span></a></li>
		<li id="menu-item-4975" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/publication-support/statistical-services/"><span>Statistical Services</span></a></li>
	</ul>
</li>
	<li id="menu-item-7662" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children mfn-megamenu-cols-6"><a class="mfn-megamenu-title" href="https://www.tutorsindia.com/our-services/development/"><span>Development</span></a>
	<ul class="sub-menu mfn-megamenu mfn-megamenu-6">
		<li id="menu-item-4977" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/development/coding-and-algorithm/"><span>Coding and Algorithm</span></a></li>
		<li id="menu-item-4978" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/development/programming/"><span>Computer Programming</span></a></li>
		<li id="menu-item-4979" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/development/software-development/"><span>Software Development</span></a></li>
		<li id="menu-item-4980" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/development/big-data-analytics/"><span>Big Data Analytics</span></a></li>
		<li id="menu-item-4981" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/development/animation-services/"><span>Animation(2D/3D/VFX)</span></a></li>
		<li id="menu-item-4982" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/development/graphic-design-services/"><span>Graphic Design Services</span></a></li>
		<li id="menu-item-4983" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/development/web-solutions/"><span>Web Solutions</span></a></li>
		<li id="menu-item-4984" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/development/online-tutoring-services/"><span>Online Courses/Tutoring</span></a></li>
		<li id="menu-item-4985" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/development/e-learning-content-development/"><span>E-learning Development</span></a></li>
		<li id="menu-item-4986" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/development/tool-development/"><span>Tool Development</span></a></li>
	</ul>
</li>
	<li id="menu-item-4988" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children mfn-megamenu-cols-6"><a class="mfn-megamenu-title" href="https://www.tutorsindia.com/our-services/editing-services/"><span>Editing Services</span></a>
	<ul class="sub-menu mfn-megamenu mfn-megamenu-6">
		<li id="menu-item-4989" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/editing-services/language-editing/"><span>Language Editing</span></a></li>
		<li id="menu-item-4990" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/editing-services/technical-editing/"><span>Technical Editing</span></a></li>
		<li id="menu-item-4991" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/editing-services/plagiarism-report/"><span>Plagiarism Report</span></a></li>
		<li id="menu-item-4992" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/editing-services/transcription-services/"><span>Transcription Services</span></a></li>
		<li id="menu-item-4993" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/editing-services/translation-services/"><span>Language Translation</span></a></li>
		<li id="menu-item-4994" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/editing-services/citation-compliance/"><span>Citation Compliance</span></a></li>
		<li id="menu-item-4995" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/editing-services/formatting-service/"><span>Formatting Service</span></a></li>
		<li id="menu-item-4996" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/editing-services/scientific-editing-services/"><span>Scientific Editing</span></a></li>
		<li id="menu-item-4997" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/editing-services/grant-proposal-writing/"><span>Grant Proposal Writing</span></a></li>
		<li id="menu-item-4998" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-services/editing-services/peer-review-submissions/"><span>Peer Review</span></a></li>
	</ul>
</li>
</ul>
</li>
<li id="menu-item-4999" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"><a href="https://www.tutorsindia.com/subjects/"><span>Subjects</span></a>
<ul class="sub-menu">
	<li id="menu-item-5000" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/subjects/academic-law-ug-masters-phd-writing-help/"><span>Academic Law Writing</span></a></li>
	<li id="menu-item-5001" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/subjects/engineering-technology-academic-writing/"><span>Engineering &#038; Technology</span></a></li>
	<li id="menu-item-5002" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/subjects/economics-finance-academic-writing-help/"><span>Economics &#038; Finance Academic</span></a></li>
	<li id="menu-item-5003" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/subjects/medicine-health-science-academic-writing/"><span>Medicine &#038; Healthcare</span></a></li>
	<li id="menu-item-5004" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/subjects/business-management-studies-academic-writing-help/"><span>Business &#038; Management</span></a></li>
	<li id="menu-item-5005" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/subjects/arts-humanities-academic-writing-help/"><span>Arts &#038; Humanities</span></a></li>
	<li id="menu-item-5006" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/subjects/biological-life-science-academic-writing-help/"><span>Biological &#038; Life Science</span></a></li>
	<li id="menu-item-5007" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/subjects/computer-science-information-technology-academic-writing/"><span>Computer Science &#038; Information</span></a></li>
</ul>
</li>
<li id="menu-item-5008" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"><a href="https://www.tutorsindia.com/ask-an-expert/"><span>Ask Expert</span></a>
<ul class="sub-menu">
	<li id="menu-item-5009" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/ask-an-expert/ask-a-question/"><span>Ask a question</span></a></li>
	<li id="menu-item-5010" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/ask-an-expert/"><span>Ask an Expert</span></a></li>
</ul>
</li>
<li id="menu-item-5011" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"><a href="https://www.tutorsindia.com/library/"><span>Library</span></a>
<ul class="sub-menu">
	<li id="menu-item-5012" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/library/essay-index/"><span>Essay index</span></a></li>
	<li id="menu-item-5013" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/library/dissertation-index/"><span>Dissertation Index</span></a></li>
	<li id="menu-item-5014" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/library/proposals/"><span>Proposals</span></a></li>
	<li id="menu-item-5015" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/library/request-a-removal/"><span>Request a removal</span></a></li>
	<li id="menu-item-5016" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/library/introductions/"><span>Introductions</span></a></li>
	<li id="menu-item-5017" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/library/methodologies/"><span>Methodologies</span></a></li>
	<li id="menu-item-5541" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/library/literature-review/"><span>Literature Review</span></a></li>
	<li id="menu-item-5019" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/library/conclusion-and-discussion/"><span>Conclusion and Discussion</span></a></li>
	<li id="menu-item-5020" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/library/manuscript-development/"><span>Manuscript Development</span></a></li>
</ul>
</li>
<li id="menu-item-9328" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"><a href="#"><span>Free Resources</span></a>
<ul class="sub-menu">
	<li id="menu-item-5021" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"><a href="https://www.tutorsindia.com/help-guide/"><span>Help guide</span></a>
	<ul class="sub-menu">
		<li id="menu-item-9957" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/help-guide/study-guides/"><span>Study Guides</span></a></li>
		<li id="menu-item-5023" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/help-guide/accounting-guide/"><span>Accounting Guide</span></a></li>
		<li id="menu-item-5543" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/help-guide/management-guides/"><span>Management Guide</span></a></li>
		<li id="menu-item-5026" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/help-guide/phd-skills/"><span>PhD Skills</span></a></li>
		<li id="menu-item-5028" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/help-guide/economic-guide/"><span>Economic Guide</span></a></li>
		<li id="menu-item-5029" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/help-guide/stages-of-phd/"><span>Stages of PhD</span></a></li>
		<li id="menu-item-5030" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/help-guide/finance-guide/"><span>Finance Guide</span></a></li>
		<li id="menu-item-5031" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/help-guide/subject-specific-guides/"><span>Subject Specific Guides</span></a></li>
	</ul>
</li>
	<li id="menu-item-9329" class="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://www.tutorsindia.com/blog/"><span>Blog</span></a></li>
	<li id="menu-item-9330" class="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://www.tutorsindia.com/academy/"><span>Academy</span></a></li>
	<li id="menu-item-5044" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/insights/"><span>Insights</span></a></li>
</ul>
</li>
<li id="menu-item-5034" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"><a href="https://www.tutorsindia.com/referencing-and-citation-manual-of-styles/"><span>Referencing</span></a>
<ul class="sub-menu">
	<li id="menu-item-5035" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"><a href="#"><span>Hardware Referencing</span></a>
	<ul class="sub-menu">
		<li id="menu-item-7477" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/referencing-and-citation-manual-of-styles/harvard-referencing-guide/"><span>Harvard Referencing Guide</span></a></li>
		<li id="menu-item-7478" class="menu-item menu-item-type-custom menu-item-object-custom"><a href="#"><span>Harvard Referencing Generator</span></a></li>
		<li id="menu-item-7479" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/referencing-and-citation-manual-of-styles/referencing-a-website/"><span>Referencing a Website</span></a></li>
	</ul>
</li>
	<li id="menu-item-5036" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"><a href="#"><span>Vancouver Referencing</span></a>
	<ul class="sub-menu">
		<li id="menu-item-7480" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/referencing-and-citation-manual-of-styles/vancouver-referencing-guide/"><span>Vancouver Referencing Guide</span></a></li>
		<li id="menu-item-7481" class="menu-item menu-item-type-custom menu-item-object-custom"><a href="#"><span>Vancouver Referencing Generator</span></a></li>
		<li id="menu-item-7482" class="menu-item menu-item-type-custom menu-item-object-custom"><a href="#"><span>Vancouver Referencing Website</span></a></li>
	</ul>
</li>
	<li id="menu-item-5037" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"><a href="#"><span>APA Referencing Guide</span></a>
	<ul class="sub-menu">
		<li id="menu-item-7484" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/referencing-and-citation-manual-of-styles/apa-referencing-guide/"><span>APA Referencing Guide</span></a></li>
		<li id="menu-item-7485" class="menu-item menu-item-type-custom menu-item-object-custom"><a href="#"><span>APA Referencing Generator</span></a></li>
		<li id="menu-item-7486" class="menu-item menu-item-type-custom menu-item-object-custom"><a href="#"><span>APA Reference Website</span></a></li>
	</ul>
</li>
	<li id="menu-item-5038" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"><a href="#"><span>Other Styles</span></a>
	<ul class="sub-menu">
		<li id="menu-item-7483" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/referencing-and-citation-manual-of-styles/"><span>Referencing</span></a></li>
		<li id="menu-item-7487" class="menu-item menu-item-type-custom menu-item-object-custom"><a href="#"><span>ASA</span></a></li>
		<li id="menu-item-7488" class="menu-item menu-item-type-custom menu-item-object-custom"><a href="#"><span>Chicago</span></a></li>
		<li id="menu-item-7489" class="menu-item menu-item-type-custom menu-item-object-custom"><a href="#"><span>MHRA</span></a></li>
		<li id="menu-item-7490" class="menu-item menu-item-type-custom menu-item-object-custom"><a href="#"><span>MLA</span></a></li>
		<li id="menu-item-7491" class="menu-item menu-item-type-custom menu-item-object-custom"><a href="#"><span>Oxford</span></a></li>
		<li id="menu-item-7492" class="menu-item menu-item-type-custom menu-item-object-custom"><a href="#"><span>Turabian</span></a></li>
	</ul>
</li>
</ul>
</li>
<li id="menu-item-5040" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"><a href="https://www.tutorsindia.com/contact-us/"><span>Contact Us</span></a>
<ul class="sub-menu">
	<li id="menu-item-5041" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/about-us/"><span>About Us</span></a></li>
	<li id="menu-item-5042" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-writers/"><span>Our Writers</span></a></li>
	<li id="menu-item-5043" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-quality-procedures/"><span>Our Quality Procedures</span></a></li>
	<li id="menu-item-5045" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/guarantees/"><span>Guarantees</span></a></li>
	<li id="menu-item-5046" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/our-process/"><span>Our Process</span></a></li>
	<li id="menu-item-5047" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/terms-and-conditions/"><span>Terms and Conditions</span></a></li>
	<li id="menu-item-9383" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/privacy-policy/"><span>Privacy Policy</span></a></li>
	<li id="menu-item-5550" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.tutorsindia.com/customer-centre/"><span>Feedback</span></a></li>
</ul>
</li>
<li id="menu-item-5155" class="pricingmenu menu-item menu-item-type-custom menu-item-object-custom"><a href="https://www.tutorsindia.com/pricing/"><span>Pricing</span></a></li>
<li id="menu-item-7270" class="orderno menu-item menu-item-type-custom menu-item-object-custom"><a href="https://www.tutorsindia.com/order-now/"><span>Order Now</span></a></li>
</ul></nav><a class="responsive-menu-toggle " href="#"><i class="icon-menu-fine"></i></a>				</div>

				<div class="secondary_menu_wrapper">
					<!-- #secondary-menu -->
									</div>

				<div class="banner_wrapper">
									</div>

				<div class="search_wrapper">
					<!-- #searchform -->

					
<form method="get" id="searchform" action="https://www.tutorsindia.com/">
						
		
<span class="material-symbols-outlined">
search
</span>
	<a href="#" class="icon_close"><i class="icon-cancel-fine"></i></a>
	
	<input type="text" class="field" name="s" placeholder="Enter your search" />			
	<input type="submit" class="submit" value="" style="display:none;" />
	
</form>
				</div>

			</div>

			<div class="top_bar_right"><div class="top_bar_right_wrapper"><a id="header_cart" href="https://www.tutorsindia.com/cart/"><i class="icon-bag-fine"></i><span>0</span></a><a id="search_button" href="#"><span class="material-symbols-outlined">
search
</span></a></div></div>
		</div>
	</div>
</div>
</header>
			<div id="Subheader" style=""><div class="container"><div class="column one"><h3 class="title">Our Services</h3></div></div></div>
		</div>

		
		<!-- mfn_hook_content_before --><!-- mfn_hook_content_before -->	
<!-- #Content -->

<div class="container">
<h1 style="text-align:center;margin-top:20px;color:black; font-weight:bold;">Citation Generator</h1>
<p style="margin-left:200;font-size:20px">Accurate APA, MLA, Chicago, and Harvard citations, verified by experts, trusted by millions</p>

<div style="display:flex;margin-left:135px;margin-top:50px;">
<button id="anchF" value="apa" style="margin-left:50px;margin-right:20px;font-size:16px;color:black"class="active" >APA 7</button>
    
    <a id="anchF" href="/" name="mla" style="margin-right:20px;font-size:16px;color:black">MLA 9</a>
    <a id="anchF" href="/"  name="harvard" style="margin-right:20px;font-size:16px;color:black" >HARVARD</a>
    <a id="anchF" href="/" name="vancouver" style="margin-right:20px;font-size:16px;color:black">VANCOUVER</a>
    <a id="anchF" href="/" name="chicago" style="margin-right:20px;font-size:16px;color:black" >CHICAGO</a>
    </div>
    
    <div style="margin-top:20px; margin-left:130px;border-radius:10px; border:2px solid silver;width:80%" class="card">
    <div style="border-bottom:2px solid silver;padding-top:15px;height:50px;">
    <a id="anchF" style="margin-left:20px;font-size:18px;" href="#">Webpage</a><br/>
    </div>
  

    <div class="card-body">
    </div>
        <form method="POST" action="/">
        
            <div style="display:flex;padding:30px;">
            <span style="margin-top:6px;" class="material-symbols-outlined">
            search
            </span>
            
                <input class="searcS" style="width:80%;border-top-style: hidden;
                border-right-style: hidden;
                border-left-style: hidden;border-bottom-style: hidden;margin-right:5px;margin-left:10px;" "type="text" placeholder="Enter the URL" name="url" id="url" class="form-control" />
            
           <input style="background-color:rgba(254, 109, 6, 0.847);border:1px solid coral;font-weight:bold;margin-left:300px padding-left:2px;" type="submit" name="submit_button" class="btn btn-primary" value="Search" />
           
            </div>
        </form>
    </div>
</div>
</div><br/><br/>
<h1 style="text-align:center;margin-bottom:100px;font-weight:bold;color:black">Citation Generator features you'll love</h1>
<div style="display:flex; margin-left:180px;">
<div style="width:50%; margin-left:30px;margin-right:20px;">
<h3 style="color:black; font-weight:bold;">Autocite</h3>
<p>
Look up your source by its title, URL, ISBN, or DOI, and let Scribbr find
and fill in all the relevant information automatically.
</p><br/>
<h3 style="color:black; font-weight:bold;">Export to Word</h3>
<p>
When your reference list is complete, export it to Word. We’ll apply the
official formatting guidelines automatically.
</p><br/>
<h3 style="color:black; font-weight:bold;">Export to Bib(La)TeX</h3>
<p>
Are you using a LaTex editor like Overleaf? If so, you can easily export
your references in Bib(La)TeX format with a single click.
</p><br/>
<h3 style="color:black; font-weight:bold;">Industry-standard technology</h3>
<p>
Citation Generator is built using the same citation software (CSL) as
Mendeley and Zotero, but with an added layer for improved accuracy.
</p>
<h3 style="color:black; font-weight:bold;">Citation guides</h3>
<p>
Citationpopular guides and videos will help you understand everything
related to finding, evaluating, and citing sources.
</p><br/>
</div>
<div style="width:50%;margin-right:150px;" >
<h3 style="color:black; font-weight:bold;">APA, MLA, Chicago, and Harvard</h3>
<p style="text-align:justify">
Generate flawless citations according to the official APA, MLA, Chicago, or Harvard style rules. More citation styles will be available soon!
</p>
<h3 style="color:black; font-weight:bold;">Lists and folders</h3>
<p style="text-align:justify">
Create separate reference lists for each of your assignments to stay organized. You can also group related lists into folders.
</p><br/>
<h3 style="color:black; font-weight:bold;">Custom fonts</h3>
<p style="text-align:justify">
Change the typeface used for your reference list to match the rest of your document. Options include Times New Roman, Arial, and Calibri.
</p>
<h3 style="color:black; font-weight:bold;">Annotations</h3>
<p style="text-align:justify">
Describe or evaluate your sources in annotations, and Scribbr will generate a perfectly formatted annotated bibliography.
</p><br/>
<h3 style="color:black; font-weight:bold;">Secure backup</h3>
<p style="text-align:justify">

Your work is saved automatically after every change and stored securely in your Scribbr account.
</p>
</div>
</div>
<style>
.searcS:focus{
                border-top-style: hidden;
                border-right-style: hidden;
                border-left-style: hidden;
                border-bottom-style: hidden;
                outline:none;
                }


            #anchF:active{
                    background-color:silver;
                    border-radius:4px;
                    padding:5px;
                    opacity:0.5;
                    transform: translateY(0px);
                }
</style>

<footer id="Footer" class="clearfix">

		
<div class="widgets_wrapper" style="padding:70px 0;"><div class="container"><div class="column one-fourth"><aside id="nav_menu-2" class="widget widget_nav_menu"><h4>Services</h4><div class="menu-footer-1-services-menu-container"><ul id="menu-footer-1-services-menu" class="menu"><li id="menu-item-5163" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5163"><a href="https://www.tutorsindia.com/our-services/masters-dissertation-writing-services/">Masters Dissertation</a></li>
<li id="menu-item-5164" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5164"><a href="https://www.tutorsindia.com/our-services/phd-dba-dissertation/">Phd / DBA Dissertation</a></li>
<li id="menu-item-9180" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9180"><a href="https://www.tutorsindia.com/our-services/coursework-writing/">Coursework Writing</a></li>
<li id="menu-item-5167" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5167"><a href="https://www.tutorsindia.com/our-services/development/tool-development/">Development</a></li>
<li id="menu-item-9179" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9179"><a href="https://www.tutorsindia.com/our-services/publication-support/">Publication Support</a></li>
<li id="menu-item-5168" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5168"><a href="https://www.tutorsindia.com/our-services/editing-services/">Editing</a></li>
<li id="menu-item-5169" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-55 current_page_item menu-item-5169"><a href="https://www.tutorsindia.com/our-services/" aria-current="page">All Services</a></li>
</ul></div></aside></div><div class="column one-fourth"><aside id="nav_menu-5" class="widget widget_nav_menu"><h4>Useful Tools</h4><div class="menu-useful-tools-container"><ul id="menu-useful-tools" class="menu"><li id="menu-item-8307" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-8307"><a href="https://www.tutorsindia.com/referencing-and-citation-manual-of-styles/">Referencing</a></li>
<li id="menu-item-8308" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-8308"><a href="https://www.tutorsindia.com/library/dissertation-index/">Dissertation Index</a></li>
<li id="menu-item-8310" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-8310"><a href="https://www.tutorsindia.com/library/">Library</a></li>
<li id="menu-item-8311" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-8311"><a href="https://www.tutorsindia.com/help-guide/">Help Guide</a></li>
<li id="menu-item-8313" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-8313"><a href="https://www.tutorsindia.com/coursework-assignment/">Coursework – Assignment</a></li>
<li id="menu-item-9277" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9277"><a href="https://www.tutorsindia.com/customer-centre/">Customer Centre</a></li>
<li id="menu-item-9424" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9424"><a href="https://www.tutorsindia.com/testimonials/">Testimonials</a></li>
</ul></div></aside></div><div class="column one-fourth"><aside id="nav_menu-6" class="widget widget_nav_menu"><h4>About Us</h4><div class="menu-about-us-footer-container"><ul id="menu-about-us-footer" class="menu"><li id="menu-item-5177" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5177"><a href="https://www.tutorsindia.com/our-writers/">Our Writers</a></li>
<li id="menu-item-5178" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5178"><a href="https://www.tutorsindia.com/our-quality-procedures/">Our Quality Procedures</a></li>
<li id="menu-item-5179" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5179"><a href="https://www.tutorsindia.com/insights/">Insights</a></li>
<li id="menu-item-5180" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5180"><a href="/blog/">Blog</a></li>
<li id="menu-item-5181" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5181"><a href="/guarantees/">Guarantees</a></li>
<li id="menu-item-5182" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5182"><a href="https://www.tutorsindia.com/our-process/">Our Process</a></li>
<li id="menu-item-9956" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9956"><a href="https://www.tutorsindia.com/our-sample-works/">Our Sample Works</a></li>
<li id="menu-item-5183" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5183"><a href="https://www.tutorsindia.com/faq/">FAQ</a></li>
</ul></div></aside></div><div class="column one-fourth"><aside id="block-2" class="widget widget_block"><aside id="nav_menu-6" class="widget widget_nav_menu"><h4>Address</h4>
10, Kutty Street,<br/>
Nungambakkam,<br/>
Chennai – 600034<br/>
<b>India</b> +91 8754446690</aside><br/>
<aside id="nav_menu-6" class="widget widget_nav_menu">
<h4>UK</h4>
10 Park Place,<br/>
Manchester M4 4EY<br/>
<b>UK</b>
+44-1143520021
</aside>
<br/>


<p><a class="dmca-badge" title="DMCA.com Protection Status" rel="noopener" href="/wp-content/uploads/2022/12/dmca.png" target="_blank"> </a><a href="/wp-content/uploads/2021/09/dmca.png" target="_blank" rel="noreferrer noopener"><img decoding="async" src="https://www.tutorsindia.com/wp-content/uploads/2022/12/dmca.png" alt="DMCA.com Protection Status"></a></p>
</aside><aside id="block-4" class="widget widget_block">
<ul class="Socialing-widg"><li class="soccialfs"><a class="numbering" href="https://www.facebook.com/TutorsIndiaGlobalAcademia/" target="_blank" rel="noopener"><i id="facial" class="fa fa-facebook-square" aria-hidden="true"></i>
</a></li><li class="soccialtw"><a class="numbering" href="https://twitter.com/tutorsindia/" target="_blank" rel="noopener"><i id="facial" class="fa fa-twitter-square" aria-hidden="true"></i>
</a></li><li class="soccialgs"><a class="numbering" href="https://www.instagram.com/tutors_india/" target="_blank" rel="noopener"><i id="facial" class="fa fa-instagram" aria-hidden="true"></i>
</a></li><li class="soccialgs"><a class="numbering" href="https://www.youtube.com/channel/UCM7QdIYgF7vWMhgMZuwyfrg/" target="_blank" rel="noopener"><i id="facial" class="fa fa-youtube-play" aria-hidden="true"></i>
</a></li><li class="soccialgs"><a class="numbering" href="https://www.linkedin.com/company/tutors-india/" target="_blank" rel="noopener"><i id="facial" class="fa fa-linkedin" aria-hidden="true"></i>
</a></li><li class="soccialgs"><a class="numbering" href="https://in.pinterest.com/TutorsIndia/" target="_blank" rel="noopener"><i id="facial" class="fa fa-pinterest-p" aria-hidden="true"></i>
</a></li><li class="soccialgs"></li></ul>
</aside></div></div></div>
		
			<div class="footer_copy">
				<div class="container">
					<div class="column one">

						<a id="back_to_top" class="button button_js" href=""><i class="icon-up-open-big"></i></a>
						<!-- Copyrights -->
						<div class="copyright">
							© 2023 Tutors India. All Rights Reserved						</div>

						<ul class="social"></ul>
					</div>
				</div>
			</div>

		
		
	</footer>

</div><!-- #Wrapper -->




<!-- mfn_hook_bottom --><!-- mfn_hook_bottom -->
<!-- wp_footer() -->
<div class="floating-menu float-menu-1"><ul class="fm-bar"><li class="fm-item-1-0"><a href="https://www.tutorsindia.com/order-now/" target="_self" rel="img src=&quot;https://www.tutorsindia.com/wp-content/uploads/2016/07/Tutorss_logo-india.png&quot;">

<div class="fm-icon"><i class="fas fa-hand-point-up"></i></div><div class="fm-label"><div class="fm-text"> Order Now</div></div></a></li><li class="fm-item-1-1"><a href="/our-sample-works/" target="_self"><div class="fm-icon"><i class="fas fa-book"></i></div><div class="fm-label"><div class="fm-text"> Sample Work</div></div></a></li><li class="fm-item-1-2"><a href="https://www.tutorsindia.com/track-your-project/" target="_self"><div class="fm-icon"><i class="fas fa-map-marker"></i></div><div class="fm-label"><div class="fm-text"> Track Your Product</div></div></a></li><li class="fm-item-1-3"><a href="https://www.tutorsindia.com/customer-centre/" target="_self"><div class="fm-icon"><i class="fas fa-headset"></i></div><div class="fm-label"><div class="fm-text"> Customer Centre</div></div></a></li><li class="fm-item-1-4"><a href="https://join.skype.com/invite/chDJNJIj715Y" target="_self"><div class="fm-icon"><i class="fab fa-skype"></i></div><div class="fm-label"><div class="fm-text"> Skype</div></div></a></li></ul></div>	<script type="text/javascript">
		(function () {
			var c = document.body.className;
			c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
			document.body.className = c;
		})();
	</script>
	<link rel='stylesheet' id='float-menu-fontawesome-css' href='https://www.tutorsindia.com/wp-content/plugins/float-menu/vendors/fontawesome/css/fontawesome-all.min.css?ver=5.11.2' type='text/css' media='all' />
<link rel='stylesheet' id='float-menu-css' href='https://www.tutorsindia.com/wp-content/plugins/float-menu/public/assets/css/style-min.css?ver=5.0.1' type='text/css' media='all' />
<style id='float-menu-inline-css' type='text/css'>
.float-menu-1 { --fm-icon-size: 24px; --fm-label-size: 15px; --fm-border-radius: 50%; --fm-color: #ffffff; --fm-background: #128be0; --fm-z-index: 9999; }.fm-item-1-0 { --fm-color: #ffffff; --fm-background: rgb(1,0,62); }.fm-item-1-0:hover { --fm-hover-color: rgb(255,255,255); --fm-hover-background: rgb(1,0,62); }.fm-item-1-1 { --fm-color: #ffffff; --fm-background: rgb(1,0,62); }.fm-item-1-1:hover { --fm-hover-color: rgb(255,255,255); --fm-hover-background: rgb(1,0,62); }.fm-item-1-2 { --fm-color: #ffffff; --fm-background: rgb(1,0,62); }.fm-item-1-2:hover { --fm-hover-color: rgb(255,255,255); --fm-hover-background: rgb(1,0,62); }.fm-item-1-3 { --fm-color: #ffffff; --fm-background: rgb(1,0,62); }.fm-item-1-3:hover { --fm-hover-color: rgb(255,255,255); --fm-hover-background: rgb(1,0,62); }.fm-item-1-4 { --fm-color: #ffffff; --fm-background: rgb(1,0,62); }.fm-item-1-4:hover { --fm-hover-color: rgb(255,255,255); --fm-hover-background: rgb(1,0,62); }
</style>
<script type='text/javascript' src='https://www.tutorsindia.com/wp-content/plugins/contact-form-7/includes/swv/js/index.js?ver=5.7.5.1' id='swv-js'></script>
<script type='text/javascript' id='contact-form-7-js-extra'>
/* <![CDATA[ */
var wpcf7 = {"api":{"root":"https:\/\/www.tutorsindia.com\/wp-json\/","namespace":"contact-form-7\/v1"}};
/* ]]> */
</script>
<script type='text/javascript' src='https://www.tutorsindia.com/wp-content/plugins/contact-form-7/includes/js/index.js?ver=5.7.5.1' id='contact-form-7-js'></script>
<script type='text/javascript' src='https://www.tutorsindia.com/wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.min.js?ver=2.7.0-wc.7.4.1' id='jquery-blockui-js'></script>
<script type='text/javascript' id='wc-add-to-cart-js-extra'>
/* <![CDATA[ */
var wc_add_to_cart_params = {"ajax_url":"\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/?wc-ajax=%%endpoint%%","i18n_view_cart":"View cart","cart_url":"https:\/\/www.tutorsindia.com\/cart\/","is_cart":"","cart_redirect_after_add":"no"};
/* ]]> */
</script>
<script type='text/javascript' src='https://www.tutorsindia.com/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min.js?ver=7.4.1' id='wc-add-to-cart-js'></script>
<script type='text/javascript' src='https://www.tutorsindia.com/wp-content/plugins/woocommerce/assets/js/js-cookie/js.cookie.min.js?ver=2.1.4-wc.7.4.1' id='js-cookie-js'></script>
<script type='text/javascript' id='woocommerce-js-extra'>
/* <![CDATA[ */
var woocommerce_params = {"ajax_url":"\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/?wc-ajax=%%endpoint%%"};
/* ]]> */
</script>
<script type='text/javascript' src='https://www.tutorsindia.com/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min.js?ver=7.4.1' id='woocommerce-js'></script>
<script type='text/javascript' id='wc-cart-fragments-js-extra'>
/* <![CDATA[ */
var wc_cart_fragments_params = {"ajax_url":"\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/?wc-ajax=%%endpoint%%","cart_hash_key":"wc_cart_hash_01d98f664027125137545d380dc133fd","fragment_name":"wc_fragments_01d98f664027125137545d380dc133fd","request_timeout":"5000"};
/* ]]> */
</script>
<script type='text/javascript' src='https://www.tutorsindia.com/wp-content/plugins/woocommerce/assets/js/frontend/cart-fragments.min.js?ver=7.4.1' id='wc-cart-fragments-js'></script>
<script type='text/javascript' src='https://www.tutorsindia.com/wp-includes/js/jquery/ui/core.min.js?ver=1.13.2' id='jquery-ui-core-js'></script>
<script type='text/javascript' src='https://www.tutorsindia.com/wp-includes/js/jquery/ui/mouse.min.js?ver=1.13.2' id='jquery-ui-mouse-js'></script>
<script type='text/javascript' src='https://www.tutorsindia.com/wp-includes/js/jquery/ui/sortable.min.js?ver=1.13.2' id='jquery-ui-sortable-js'></script>
<script type='text/javascript' src='https://www.tutorsindia.com/wp-includes/js/jquery/ui/tabs.min.js?ver=1.13.2' id='jquery-ui-tabs-js'></script>
<script type='text/javascript' src='https://www.tutorsindia.com/wp-includes/js/jquery/ui/accordion.min.js?ver=1.13.2' id='jquery-ui-accordion-js'></script>
<script type='text/javascript' src='https://www.tutorsindia.com/wp-content/themes/betheme/js/plugins.js?ver=20.9.7' id='jquery-plugins-js'></script>
<script type='text/javascript' src='https://www.tutorsindia.com/wp-content/themes/betheme/js/menu.js?ver=20.9.7' id='jquery-mfn-menu-js'></script>
<script type='text/javascript' src='https://www.tutorsindia.com/wp-content/themes/betheme/assets/animations/animations.min.js?ver=20.9.7' id='jquery-animations-js'></script>
<script type='text/javascript' src='https://www.tutorsindia.com/wp-content/themes/betheme/assets/jplayer/jplayer.min.js?ver=20.9.7' id='jquery-jplayer-js'></script>
<script type='text/javascript' src='https://www.tutorsindia.com/wp-content/themes/betheme/js/parallax/translate3d.js?ver=20.9.7' id='jquery-mfn-parallax-js'></script>
<script type='text/javascript' src='https://www.tutorsindia.com/wp-content/themes/betheme/js/scripts.js?ver=20.9.7' id='jquery-scripts-js'></script>
<script type='text/javascript' src='https://www.tutorsindia.com/wp-content/plugins/float-menu/public/assets/js/velocity.min.js?ver=5.0.1' id='velocity-js'></script>
<script type='text/javascript' id='float-menu-js-before'>
var FloatMenu_1 = {"selector":".float-menu-1","position":["right","center"],"offset":[0,0],"shape":"round","sideSpace":true,"buttonSpace":true,"labelSpace":true,"labelConnected":true,"labelEffect":"fade","labelAnim":[400,"easeOutQuad"],"color":"default","overColor":"default","labelsOn":true,"mobileEnable":true,"mobileScreen":768}
</script>
<script type='text/javascript' src='https://www.tutorsindia.com/wp-content/plugins/float-menu/public/assets/js/floatMenu-min.js?ver=5.0.1' id='float-menu-js'></script>
<!-- script | custom js -->
<script id="mfn-dnmc-custom-js">
//<![CDATA[
<link rel="preload" , href="https://www.tutorsindia.com/wp-content/themes/betheme/fonts/mfn-icons.woff?31690507" ;as="font"; crossorigin="anonymous";>



//]]>
</script>

	`);


});

app.post('/', function(request,response, next){

const Cite = require('citation-js')
let data = new Cite(request.body.url)

let output = data.format('bibliography', {
 format: 'text',
  template: request.body.selectpicker,
  lang: 'en-US'
})


console.log( request.body.selectpicker)

  
	response.send(`
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
     <div style="height:auto; margin-left:30px;margin-top:250px;padding:10px;width:95%;border:1px solid black;" id="textToCopy">
       ${output}
    <button style="border:none;outline:hidden;" id="copyButton"><i class="fa fa-clone"></i></button> <span id="copyResult"></span>
      </div>
<style>


</style>
<script>
const answer = document.getElementById("copyResult");
const copy   = document.getElementById("copyButton");
const selection = window.getSelection();
const range = document.createRange();
const textToCopy = document.getElementById("textToCopy")

copy.addEventListener('click', function(e) {
    range.selectNodeContents(textToCopy);
    selection.removeAllRanges();
    selection.addRange(range);
    const successful = document.execCommand('copy');
    if(successful){
      answer.innerHTML = 'Copied!';
    } else {
      answer.innerHTML = 'Unable to copy!';  
    }
    window.getSelection().removeAllRanges()
});
</script>


	`);


});


app.listen(81);


//https://doi.org/10.7717/peerj-cs.214