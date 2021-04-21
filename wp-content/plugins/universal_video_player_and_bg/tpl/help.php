<style type="text/css">
.lbg_subtitle {color:#21759b;
	font-weight:bold;
	font-size:14px;
}
.lbg_regGray {	font-size:12px;
	color:#999999;
	font-style:italic;
}
.regGray {font-weight:normal;
	color:#555555;
}
.regb {font-weight:bold;
}
.row-title {	font-weight:bold;
}
</style>
<div class="wrap">
<div id="lbg_logo">
			<h2>Help</h2>
  </div>
<p>This plugin requires at least WordPress 3.0</p>
<ul class="lbg_list-1">
  <li><a href="#videotutorials">Video Tutorials</a></li>
  <li><a href="#instalation">Plugin Instalation</a></li>
  <li><a href="#managebanners">Manage Players</a></li>
  <li><a href="#settings">Player Settings</a></li>
  <li><a href="#playlist">Playlist</a></li>
  <li><a href="#shortcode">ShortCode</a></li>
</ul>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><span class="lbg_subtitle"><a name="videotutorials" id="videotutorials"></a>1. Video Tutorials</span></p>
<p>Installation - <a href="https://www.youtube.com/watch?v=-yB_U6cGWMc" target="_blank">https://www.youtube.com/watch?v=-yB_U6cGWMc</a><a href="http://www.youtube.com/watch?v=sp7TvIDlnVs" target="_blank"></a><br />
  How To Create a Video Player- <a href="https://www.youtube.com/watch?v=ofm6pXQeoW4" target="_blank">https://www.youtube.com/watch?v=ofm6pXQeoW4</a><a href="http://www.youtube.com/watch?v=vXOkiXm4vYo" target="_blank"></a><br />
  How To Create a Video Background For Your Page- <a href="https://www.youtube.com/watch?v=EzQfnj7m7aY" target="_blank">https://www.youtube.com/watch?v=EzQfnj7m7aY</a><br />
</p>
<p class="lbg_subtitle"><a name="instalation" id="instalation"></a>2. Plugin Instalation</p>
<p>Step 1. Enter in your wordpress CMS and go to Plugins menu<br />
Step 2. Under Plugins menu click &quot;Add New&quot;<br />
Step 3. Select &quot;Upload&quot;, choose the archive universal_video_player_and_bg.zip that you downloaded and hit &quot;Install Now&quot;<br />
Step 4. After the plugin is installed click &quot;Activate Plugin&quot;<br />
Step 5. In you page just add the shortcode: [universal_video_player_and_bg settings_id='1']<br />
<a href="#shortcode">click here</a> for more details regarding the shortcode</p>
<p>&nbsp;</p>
<p><span class="lbg_subtitle"><a name="managebanners" id="playlist2"></a>3. Manage Players</span></p>
<p>From this section you can define the players. <br />
  If you need to include multiple players in your pages with different settings   and playlist you can define the players and manage the settings for each one.<br />
If you need only one player in your website, just edit the default one.</p>
<p>&nbsp;</p>
<p class="lbg_subtitle"><a name="settings" id="settings"></a>4. Player Settings</p>
<p>From this section you can define the video player  settings.</p>
<table class="wp-list-table widefat fixed pages" cellspacing="0">
  <tr>
    <td width="30%" align="left" valign="top" class="row-title"></td>
    <td width="70%" align="left" valign="top"></td>
  </tr>
  <tr>
    <td colspan="2" align="left" valign="top" class="lbg_regGray">General Settings</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Player Width</td>
    <td align="left" valign="top">plugin width</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Player Height</td>
    <td align="left" valign="top">plugin height</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Width 100%</td>
    <td align="left" valign="top">Possible values: <br />
      <strong>true</strong> - the plugin width will be 100%<br />
      <strong>false</strong> - the plugin width will be what you've set for 'width' parameter</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Height 100%</td>
    <td align="left" valign="top">Possible values: <br />
      <strong>true</strong> - the plugin height will be 100%<br />
      <strong>false</strong> - the plugin height will be what you've set for 'width' parameter</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Responsive<br /></td>
    <td align="left" valign="top">Possible values: <br />
      <strong>true</strong> - the plugin will responsive<br />
      <strong>false</strong> - the plugin will not be responsive</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Responsive Relative To Browser</td>
    <td align="left" valign="top">Possible values: <br />
      <strong>true</strong> - the plugin will be responisve relatively to browser dimensions<br />
      <strong>false</strong> - the plugin will be responisve relatively to parent div</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Set as Background<br /></td>
    <td align="left" valign="top">Possible values: <br />
      <strong>true</strong> - if you intend to use the plugin as full screen background<br />
      <strong>false</strong> - if you intend to use the plugin as full screen gallery or full width slider</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Auto-Play First Video</td>
    <td align="left" valign="top">Possible values: <br />
      <strong>true</strong> - the first video  will autoplay<br />
      <strong>false</strong> - the first video will not autoplay</td>
  </tr>
	<tr>
    <td align="left" valign="top" class="row-title">Auto-Play On Mobile</td>
		<td align="left" valign="top">Possible values: <br />
      <strong>true</strong> - the video will autoplay on mobile devices<br />
      <strong>false</strong> - the video will not autoplayon mobile devices<br />
			NOTES: <br />
			- for the moment only IOS allows autoplay and only if the video is muted. When you set autoPlayOnMobile:true, the video will mute automatically for mobile devices.<br />
			- this option is only available for self-hosted videos. YouTube & Vimeo doesn't have this option for mobile devices, yet.
		</td>
  </tr>
  <tr>
    <td width="16%" align="left" valign="top" class="row-title">Randomize Videos</td>
    <td width="69%" align="left" valign="top">Possible values: <br />
      <strong>true</strong> - it will navigate the videos in a random manner<br />
    <strong>false</strong> - it will navigate the videos as they are defined</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title"><span class="regb">Show Tooltip</span></td>
    <td align="left" valign="top">Possible values: <br />
      <strong>true</strong> - the tooltip will appear<br />
      <strong>false</strong> - the tooltip will not appear
      <p>The text for the tooltip will be the video title</p></td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">First Video To Be Loaded</td>
    <td align="left" valign="top">Define which video will be the first one to load. The counting starts from 0</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Loop</td>
    <td align="left" valign="top">Possible values: <br />
      <strong>true</strong> - the plugin will loop when reaches the end<br />
    <strong>false</strong> - the plugin will stop when reaches the end</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Texture Path</td>
    <td align="left" valign="top">The path to the texture file. Please check 'full_screen_youtube.html' file as example. The plugin comes with 5 predefined textures which you can use '_resources/patternFullScreenBg_1.png', '_resources/patternFullScreenBg_2.png', '_resources/patternFullScreenBg_3.png', '_resources/patternFullScreenBg_4.png' and '_resources/patternFullScreenBg_5.png'. You can use any texture you want, just place here the path to the texture</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Fallback Image  For Mobile Devices</td>
    <td align="left" valign="top">Optional parameter and used only when 'Set as Background' - true. If an image will be defined, this image will appear on mobile devices instead of the player. We recommend large images, like 1920x1200 because the image will used as a centered background.</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Border Width</td>
    <td align="left" valign="top">border width. Only for Fixed Width &amp; Full Width versions</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Border Color</td>
    <td align="left" valign="top">border color (hexa). Only for Fixed Width &amp; Full Width versions</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Video Proportion Width</td>
    <td align="left" valign="top">The video proportion is considered to be 16/9. If your video has another proportion, you can set a different value here. The height proportion will always be 9</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Suggested Quality</td>
    <td align="left" valign="top"><p>ONLY for YouTube. Available parameters:</p>
      <ul>
        <li>Quality level small: Player height is 240px, and player dimensions are at least 320px by 240px for 4:3 aspect ratio.</li>
        <li>Quality level medium: Player height is 360px,   and player dimensions are 640px by 360px (for 16:9 aspect ratio) or   480px by 360px (for 4:3 aspect ratio).</li>
        <li>Quality level large: Player height is 480px,   and player dimensions are 853px by 480px (for 16:9 aspect ratio) or   640px by 480px (for 4:3 aspect ratio).</li>
        <li>Quality level hd720: Player height is 720px,   and player dimensions are 1280px by 720px (for 16:9 aspect ratio) or   960px by 720px (for 4:3 aspect ratio).</li>
        <li>Quality level hd1080: Player height is   1080px, and player dimensions are 1920px by 1080px (for 16:9 aspect   ratio) or 1440px by 1080px (for 4:3 aspect ratio).</li>
        <li>Quality level highres: Player height is greater than 1080px, which means that the player's aspect ratio is greater than 1920px by 1080px.</li>
        <li>Quality level default: YouTube selects the   appropriate playback quality. </li>
      </ul>
      <p>For additional informations, please check: <a href="https://developers.google.com/youtube/iframe_api_reference#setPlaybackQuality" target="_blank">https://developers.google.com/youtube/iframe_api_reference#setPlaybackQuality</a></p></td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Initial Volume</td>
    <td align="left" valign="top">the initial volume value. It takes values between 0-1</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">&nbsp;</td>
    <td align="left" valign="top">&nbsp;</td>
  </tr>
  <tr>
    <td colspan="2" align="left" valign="top" class="lbg_regGray">Controllers Settings</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Number Of Thumbs Per Screen</td>
    <td align="left" valign="top">the number of thumbs per screen. If you set it to 0, it will be calculated automatically. You can set a fixed number, for example 3</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Bottom Navigation - margin-top</td>
    <td align="left" valign="top">The vertical pozition of the bottom navigation area</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Bottom Navigation Horizontal Position</td>
    <td align="left" valign="top"><p>Bottom navigation position</p>
      <p>Possible values: <br />
        - left<br />
        - center<br />
        - right<strong></strong></p></td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Bottom Navigation Lateral Margin</td>
    <td align="left" valign="top">Bottom navigation lateral (left/right) margin. It is useful is you set <span class="row-title">bottomNavPos</span>:left or <span class="row-title">bottomNavPos</span>:right </td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Bottom Navigation Minimal Height</td>
    <td align="left" valign="top">Bottom navigation height area will not go beneath this value</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Thumbs Wrapper Top Padding</td>
    <td align="left" valign="top">Bottom navigation top padding</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Thumbs Wrapper Bottom Padding</td>
    <td align="left" valign="top">Bottom navigation bottom padding</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Thumbs Wrapper Background (hexa)</td>
    <td align="left" valign="top">The background of the bottom navigation area. Hexa color code, 'transparent' value</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Thumbs Wrapper Background (Image)</td>
    <td align="left" valign="top">The background of the bottom navigation area, image path. If an image is added, <span class="row-title">Thumbs Wrapper Background (hexa)</span> is ignored</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Thumbs Border Color ON</td>
    <td align="left" valign="top">Thumbs Border Color ON State</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Thumbs Border Color OFF</td>
    <td align="left" valign="top">Thumbs Border Color OFF State</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Thumbs Background OFF Color</td>
    <td align="left" valign="top"><p>The playlist record background color (OFF state). It can take 3 values:</p>
      <p>1. <strong>hexa:</strong> thumbsBgOffColor:'#000000'<br />
        2. <strong>image background:</strong> thumbsBgOffColor:'url(some_path/file_name.png) 0 bottom repeat-x',<br />
        3. <strong>both:</strong> thumbsBgOffColor:'url(some_path/file_name.png) 0 bottom repeat-x #000000',</p></td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Thumbs Background OFF Img Opacity</td>
    <td align="left" valign="top">The playlist image opacity value (OFF state). It can take values between 0-100</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Thumbs Background ON Color</td>
    <td align="left" valign="top"><p>The playlist record background color (ON state). It can take 3 values:</p>
      <p>1. <strong>hexa:</strong> thumbsBgOffColor:'#cc181e<br />
        2. <strong>image background:</strong> thumbsBgOffColor:'url(some_path/file_name.png) 0 bottom repeat-x',<br />
        3. <strong>both:</strong> thumbsBgOffColor:'url(some_path/file_name.png) 0 bottom repeat-x #cc181e,</p></td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Thumbs Background ON Img Opacity</td>
    <td align="left" valign="top">The playlist image opacity value (ON state). It can take values between 0-100</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Show Bottom Navigation</td>
    <td align="left" valign="top">Possible values: <br />
      <strong>true</strong> -  the bottom navigation will appear<br />
      <strong>false</strong> -  the bottom navigation will not appear</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Show Bottom Navigation On Init</td>
    <td align="left" valign="top">Possible values: <br />
      <strong>true</strong> -  the bottom navigation will appear on first plugin init<br />
      <strong>false</strong> -  the bottom navigation will not appear on first plugin init</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Auto Hide Bottom Navigation</td>
    <td align="left" valign="top">Possible values: <br />
      <strong>true</strong> - the bottom navigation will hide when mouse out and will appear on mouse over<br />
      <strong>false</strong> -  the bottom navigation will not hide when mouse out</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Show Video Controls</td>
    <td align="left" valign="top"><p>Possible values: <br />
        <strong>true</strong> -  the video controls will appear<br />
      <strong>false</strong> -  the video controls will not appear</p></td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Thumb Width</td>
    <td align="left" valign="top">the bottom navigation thumbnail width</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Thumb Height</td>
    <td align="left" valign="top">the bottom navigation thumbnail height</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">&nbsp;</td>
    <td align="left" valign="top">&nbsp;</td>
  </tr>
</table>
<p>&nbsp;</p>
<p><span class="lbg_subtitle"><a name="playlist" id="playlist"></a>5. Playlist</span></p>
<table class="wp-list-table widefat fixed pages" cellspacing="0">
  <tr>
    <td width="30%" align="left" valign="top" class="row-title"></td>
    <td width="70%" align="left" valign="top"></td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Thumbnail</td>
    <td align="left" valign="top">The playlist thumbnail path</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">YouTube Video ID</td>
    <td align="left" valign="top">If you want to play a YouTube video, you'll insert the YouTube video ID. A YouTube link is of this form https://www.youtube.com/watch?v=<span class="lbg_subtitle">5WAkvu5Tnkw</span> <br />
      The value of 'v' parameter  is the ID you need.</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Vimeo Video ID</td>
    <td align="left" valign="top">If you want to play a Vimeo video, you'll insert the Vimeo video ID. A Vimeo link is of this form https://vimeo.com/<span class="lbg_subtitle">21288282</span><br />
      The last number of the link is the ID </td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Self Hosted/Third Party Hosted Video .MP4 file</td>
    <td align="left" valign="top">If you want to play a self-hosted video, you'll insert the path to the .mp4 file which can be a relative path or an URL. Don't forget to add .webm file if you want to play on Opera, too</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Self Hosted/Third Party Hosted Video .WEBM file</td>
    <td align="left" valign="top">If you want to play a self-hosted video, you'll insert the path to the .webm file which can be a relative path or an URL. Don't forget to add .mp4 file which is the main video file</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Title</td>
    <td align="left" valign="top">Optional parameter for video title</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Video Proportion Width</td>
    <td align="left" valign="top"><p>Only if is used as full-screen background. </p>
      <p>If a video has other proportion than 16/9, set the new with proportion. The height proportion will always be 9. This parameter will overwrite, only for this video, the general parameter '<span class="row-title">Video Proportion Width</span>' defined in <a href="#settings">Player Settings</a></p></td>
  </tr>
</table>
<p>&nbsp;</p>
<p><span class="lbg_subtitle"><a name="shortcode" id="shortcode"></a>6. ShortCode</span></p>
<p>The shortcode is: <br />
[universal_video_player_and_bg  settings_id='1']<br />
where <br />
settings_id is the player ID defined in &quot;Manage Players&quot; section</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
</div>
