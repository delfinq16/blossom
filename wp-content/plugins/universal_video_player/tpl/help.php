<style type="text/css">
.lbg_subtitle {color:#21759b;
	font-weight:bold;
	font-size:14px;
}
.regGray {	font-weight:normal;
	color:#555555;
}
.regb {	font-weight:bold;
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
  <li><a href="#structure">Files &amp; Folders Structure</a></li>
  <li><a href="#manageplayers">Manage Players</a></li>
  <li><a href="#settings">Player Settings</a></li>
  <li><a href="#playlist">Playlist</a></li>
  <li><a href="#facebook_share">FaceBook Share</a></li>
  <li><a href="#shortcode">ShortCode</a></li>
  <li>.<a href="#htaccess">htaccess</a></li>
</ul>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><span class="lbg_subtitle"><a name="videotutorials" id="videotutorials"></a>Video Tutorials</span></p>
<p>Step 1: Installation - <a href="https://www.youtube.com/watch?v=rAFJMLyKvvs" target="_blank">https://www.youtube.com/watch?v=rAFJMLyKvvs</a><br />
Step 2: Create a new player and manage the player settings - <a href="https://www.youtube.com/watch?v=XwNqOK0UCFE" target="_blank">https://www.youtube.com/watch?v=XwNqOK0UCFE</a><br />
Step 3: Manage the playlist and categories - <a href="https://www.youtube.com/watch?v=49Uo9JGm1wk" target="_blank">https://www.youtube.com/watch?v=49Uo9JGm1wk</a><br />
<span class="regb">NEW: </span>Automatically Obtain Thumbnail, Title &amp; Description From YouTube Server - <a href="https://www.youtube.com/watch?v=r_NRQJ-uiKI" target="_blank">https://www.youtube.com/watch?v=r_NRQJ-uiKI</a></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p class="lbg_subtitle"><a name="instalation" id="instalation"></a>Plugin Instalation</p>
<p>Step 1. Enter in your wordpress CMS and go to Plugins menu<br />
Step 2. Under Plugins menu click &quot;Add New&quot;<br />
Step 3. Select &quot;Upload&quot;, choose the archive universal_video_player.zip that you downloaded and hit &quot;Install Now&quot;<br />
Step 4. After the plugin is installed click &quot;Activate Plugin&quot;<br />
Step 5. In you page just add the shortcode: [universal_video_player.zip settings_id='1']<br />
<a href="#shortcode">click here</a> for more details regarding the shortcode</p>
<p>&nbsp;</p>
<p class="lbg_subtitle"><a name="structure" id="structure"></a>Files &amp; Folders Structure</p>
<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td align="left" valign="top" class="row-title">css</td>
    <td align="left" valign="top">the folder contains the .css files used by the pluging</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">images</td>
    <td align="left" valign="top">the folder contains the images used by the pluging</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">js</td>
    <td align="left" valign="top">the folder contains the .js files used by the pluging</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">universal_video_player</td>
    <td align="left" valign="top">the folder contains the .js &amp; .css files that the video player use</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">tpl</td>
    <td align="left" valign="top">the folder contains the template files used by the pluging</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">universal_video_player.php</td>
    <td align="left" valign="top">the plugin itself</td>
  </tr>
  <tr>
    <td width="22%" align="left" valign="top" class="row-title">&nbsp;</td>
    <td width="78%" align="left" valign="top">&nbsp;</td>
  </tr>
</table>
<p>&nbsp;</p>
<p><span class="lbg_subtitle"><a name="manageplayers" id="playlist2"></a>Manage Players</span></p>
<p>From this section you can define the players. <br />
  If you need to include multiple players in your pages with different settings   and playlist you can define the players and manage the settings for each one.<br />
If you need only one player in your website, just edit the default one.</p>
<p>&nbsp;</p>
<p class="lbg_subtitle"><a name="settings" id="settings"></a>Player Settings</p>
<p>From this section you can define the video player  settings.</p>
<table class="wp-list-table widefat fixed pages" cellspacing="0">
  <tr>
    <td width="30%" align="left" valign="top" class="row-title"></td>
    <td width="83%" align="left" valign="top"></td>
  </tr>
  <tr>
    <td colspan="2" align="left" valign="top" class="lbg_regGray">General settings</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Skin</td>
    <td align="left" valign="top">Possible values:<br />
      - whiteControllers<br />
    - blackControllers</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Player Width</td>
    <td align="left" valign="top">plugin width</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Player Height</td>
    <td align="left" valign="top">plugin height</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Responsive<br /></td>
    <td align="left" valign="top">Possible values: <br />
      <strong>true</strong> - the plugin will responsive<br />
      <strong>false</strong> - the plugin will not be responsive</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Responsive Relative To Browser</td>
    <td align="left" valign="top">Possible values: <br />
      <strong>true</strong> - the plugin will be responisve relatively to browser dimensions<br />
      <strong>false</strong> - the plugin will be responisve relatively to parent div</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Automatically Obtain Thumb, Title &amp; Description From YouTube Server</td>
    <td align="left" valign="top">Possible values: <br />
      <strong>true</strong> - the plugin will obtain the movie thumb,   movie title and movie description from YouTube server IF in playlist   code these data is missing<br />
      <strong>false</strong> - the plugin will use the movie thumb, movie title and movie description defined in playlist code</td>
  </tr>
  <tr>
    <td width="30%" align="left" valign="top" class="regb">Shuffle</td>
    <td width="83%" align="left" valign="top">Possible values: <br />
      <strong>true</strong> - the playlist will be played in shuffle mode<br />
      <strong>false</strong> - the playlist will be played in normal mode</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Player Height</td>
    <td align="left" valign="top">Define which video will be the first one to load. The counting starts from 0</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Initial Volume</td>
    <td align="left" valign="top">You can initialize the volume. The range is 0 to 1</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Loop</td>
    <td align="left" valign="top">Possible values: <br />
      <strong>true</strong> - the plugin will loop the playlist when it reaches the end<br />
    <strong>false</strong> - the plugin will stop when reaches the end</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Facebook AppID</td>
    <td align="left" valign="top">FaceBook AppID. Please check <a href="#facebook_share">Facebook Share</a> section, for more informations</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Facebook Share Title</td>
    <td align="left" valign="top">The title which will appear on FaceBook share. Please check <a href="#facebook_share">Facebook Share</a> section, for more informations</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Facebook Share Description</td>
    <td align="left" valign="top">The description which will appear on FaceBook share. Please check <a href="#facebook_share">Facebook Share</a> section, for more informations</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Show Search</td>
    <td align="left" valign="top">Possible values: <br />
      <strong>true</strong> - the search area will appear<br />
      <strong>false</strong> - the search area  will not appear </td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Search Area Bg</td>
    <td align="left" valign="top">Search area  background color (hexa)</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Search Input Text</td>
    <td align="left" valign="top">Search input initial text, useful for translation purpose</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Search Input Bg</td>
    <td align="left" valign="top">Search input  background color (hexa)</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Search Input Border Color</td>
    <td align="left" valign="top">Search input  border color (hexa)</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Search Input Text Color</td>
    <td align="left" valign="top">Search input  text color (hexa)</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Player Border Color</td>
    <td align="left" valign="top">border color (hexa)</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Controls Bg FullScreen Color</td>
    <td align="left" valign="top">Controllers background color when the player is in full-screen mode (hexa)</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Show Logo</td>
    <td align="left" valign="top"><p>Show top,left logo</p>
    <p>Possible values: <br />
      <strong>true</strong> - the logo will appear<br />
    <strong>false</strong> - the logo will not appear</p></td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Logo Image Path</td>
    <td align="left" valign="top">The path to the logo image</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Logo Link</td>
    <td align="left" valign="top">The link which will be opened when the logo will be clicked</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Logo Target</td>
    <td align="left" valign="top">Logo link target</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Auto-Play First Video</td>
    <td align="left" valign="top">Possible values: <br />
      <strong>true</strong> - the first video will autoplay<br />
      <strong>false</strong> - the first video will not autoplay</td>
  </tr>
	<tr>
    <td align="left" valign="top" class="regb">Auto-Play On Mobile</td>
    <td align="left" valign="top">Possible values: <br />
      <strong>true</strong> - the first video will autoplay on mobile devices<br />
      <strong>false</strong> - the first video will not autoplay on mobile devices</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Top Title Color</td>
    <td align="left" valign="top">The top,left movie title color (hexa)</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Timer Color</td>
    <td align="left" valign="top">The top,right movie timer color (hexa)</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Buffer Empty Color</td>
    <td align="left" valign="top">Movie buffer color, empty state (hexa)</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Buffer Full Color</td>
    <td align="left" valign="top">Movie buffer color, full state (hexa)</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Seekbar Color</td>
    <td align="left" valign="top">Movie seekbar color (hexa)</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Volume Off Color</td>
    <td align="left" valign="top">Volume color, OFF state (hexa)</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Volume On Color</td>
    <td align="left" valign="top">Volume  color, ON state (hexa)</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Play But Color Off</td>
    <td align="left" valign="top">Play/Pause button background color, OFF state (hexa)</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Play But Colo rOn</td>
    <td align="left" valign="top">Play/Pause button background color, ON state (hexa)</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Show Top Title</td>
    <td align="left" valign="top">Possible values: <br />
      <strong>true</strong> - the top,left movie title will appear<br />
      <strong>false</strong> - the top,left movie title will not appear</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Suggested Quality</td>
    <td align="left" valign="top"><p>ONLY FOR YOUTUBE. This parameter value can be:<br />
      - small, <br />
      - medium<br />
      -
      large<br />
      -
      hd720<br />
      -
      hd1080<br />
      -
      highres or <br />
      -
      default. </p>
  <p>YouTube  recommends that you set the parameter value to default,   which instructs YouTube to select the most appropriate playback   quality, which will vary for different users, videos, systems and other   playback conditions.</p></td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Show Timer</td>
    <td align="left" valign="top">Possible values: <br />
      <strong>true</strong> - the top,right movie timer will appear<br />
      <strong>false</strong> - the top,right movie timer  will not appear </td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Activate Google Analytics Traking</td>
    <td align="left" valign="top">Possible values: <br />
      <strong>true</strong> - Google Analytics tracking will be enabled<br />
    <strong>false</strong> - Google Analytics tracking will be disabled</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Your Google Analytics Traking Code <em><br />
    </em></td>
    <td align="left" valign="top">Your  Google Analytics code.<br />
      Example: UA-3245593-1</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">&nbsp;</td>
    <td align="left" valign="top">&nbsp;</td>
  </tr>
  <tr>
    <td colspan="2" align="left" valign="top" class="lbg_regGray">Controllers Settings: Show/Hide buttons &amp; elements</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Show Rewind But</td>
    <td align="left" valign="top">Possible values: <br />
      <strong>true</strong> - rewind button will appear<br />
      <strong>false</strong> - rewind button will not appear</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Show Play But</td>
    <td align="left" valign="top">Possible values: <br />
      <strong>true</strong> - play/pause button will appear<br />
      <strong>false</strong> - play/pause   button will not appear</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Show  Volume But</td>
    <td align="left" valign="top">Possible values: <br />
      <strong>true</strong> - volume button will appear<br />
      <strong>false</strong> - volume   button will not appear</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Show Twitter But</td>
    <td align="left" valign="top">Possible values: <br />
      <strong>true</strong> - twitter button will appear<br />
      <strong>false</strong> - twitter button will not appear</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Show Info But</td>
    <td align="left" valign="top">Possible values: <br />
      <strong>true</strong> - info button will appear<br />
      <strong>false</strong> - info   button will not appear</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Show Download But</td>
    <td align="left" valign="top">Possible values: <br />
      <strong>true</strong> - download button will appear<br />
      <strong>false</strong> - download track button will not appear</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Show Playlis tBut</td>
    <td align="left" valign="top">Possible values: <br />
      <strong>true</strong> - show/hide playlist button will appear<br />
      <strong>false</strong> - show/hide playlist  button will not appear</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Show Fullscreen But</td>
    <td align="left" valign="top">Possible values: <br />
      <strong>true</strong> - fullscreen button will appear<br />
      <strong>false</strong> - fullscreen   button will not appear</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Show Shuffle But</td>
    <td align="left" valign="top">Possible values: <br />
      <strong>true</strong> - shuffle button will appear<br />
      <strong>false</strong> - shuffle button will not appear</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Show NextPrevBut</td>
    <td align="left" valign="top">Possible values: <br />
      <strong>true</strong> - next/previous buttons will appear<br />
      <strong>false</strong> - next/previous buttons will not appear</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Show Facebook But</td>
    <td align="left" valign="top">Possible values: <br />
      <strong>true</strong> - facebook button will appear<br />
      <strong>false</strong> - facebook button will not appear</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">&nbsp;</td>
    <td align="left" valign="top">&nbsp;</td>
  </tr>
  <tr>
    <td colspan="2" align="left" valign="top" class="lbg_regGray">Playlist  Settings</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Show Playlist On Init</td>
    <td align="left" valign="top">Possible values: <br />
      <strong>true</strong> - playlist will appear on initi<br />
    <strong>false</strong> - playlist will not appear on init</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Playlist  Width</td>
    <td align="left" valign="top">The playlist width</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Playlist Scroller Bg Color OFF</td>
    <td align="left" valign="top">The playlist scroll-bar OFF color (hexa)</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Playlist Scroller Bg Color ON</td>
    <td align="left" valign="top">The playlist scroll-bar ON color (hexa)</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Number Of Thumbs Per Screen</td>
    <td align="left" valign="top">the number of thumbs per screen. If you set it to 0, it will be calculated automatically. You can set a fixed number, for example 3</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Show Thumbs</td>
    <td align="left" valign="top">Possible values: <br />
      <strong>true</strong> - the  thumbs from playlist will appear<br />
      <strong>false</strong> - the thumbs from playlist will not appear</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Show Title</td>
    <td align="left" valign="top">Possible values: <br />
      <strong>true</strong> - the tile from playlist  will appear<br />
      <strong>false</strong> - the tilte from playlist  will not appear</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Show Description</td>
    <td align="left" valign="top">Possible values: <br />
      <strong>true</strong> - the description from playlist will appear<br />
      <strong>false</strong> - the description from playlist will not appear</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Playlist Record Height</td>
    <td align="left" valign="top">The playlist record height</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Playlist Record Padding</td>
    <td align="left" valign="top">The playlist record padding</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Title Font Size</td>
    <td align="left" valign="top">The playlist record title font size</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Title Line Height</td>
    <td align="left" valign="top">The playlist record title line-height</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Desc Font Size</td>
    <td align="left" valign="top">The playlist record decription font size</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Desc Line Height</td>
    <td align="left" valign="top">The playlist record descripton line-height</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Playlist Record Bg Off Color</td>
    <td align="left" valign="top"><p>The playlist record background color (OFF state). </p></td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Playlist Record Title Off Color</td>
    <td align="left" valign="top">The playlist record title color (OFF state)</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Playlist Record Desc Off Color</td>
    <td align="left" valign="top">The playlist record description color (OFF state)</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Playlist Record Bg Off Img Opacity</td>
    <td align="left" valign="top">The playlist record opacity value (OFF state). It can take values between 0-100</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Playlist Record Bg On Color</td>
    <td align="left" valign="top">The playlist record background color (ON state).</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Playlist Record Title On Color</td>
    <td align="left" valign="top">The playlist record title color (ON state)</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Playlist Record Desc On Color</td>
    <td align="left" valign="top">The playlist record description color (ON state)</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Playlist Record Bg On Img Opacity</td>
    <td align="left" valign="top">The playlist record opacity value (ON state). It can take values between 0-100</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Playlist Bg Color</td>
    <td align="left" valign="top">The playlist record background color.</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Playlist RecordTitleLimit</td>
    <td align="left" valign="top">The playlist record title characters limit. All the other characters will be remoeved and replaced with ...</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Playlist RecordDescLimit</td>
    <td align="left" valign="top">The playlist record description characters limit. All the other characters will be remoeved and replaced with ...</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Thumb Width</td>
    <td align="left" valign="top">playlist thumbnail width (for skins that have a thumbnail)</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Thumb Height</td>
    <td align="left" valign="top">playlist thumbnail height (for skins that have a thumbnail)</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">&nbsp;</td>
    <td align="left" valign="top">&nbsp;</td>
  </tr>
  <tr>
    <td colspan="2" align="left" valign="top" class="lbg_regGray">Category  Settings</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Show Categs</td>
    <td align="left" valign="top">Possible values: <br />
      <strong>true</strong> - the categories will appear<br />
      <strong>false</strong> - the categories will not appear</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">First Selected Category</td>
    <td align="left" valign="top">The name of the first displayed category (in the top of the playlist). If no value is selected, since the categories will be alphabetically ordered,  the first one will be displayed as the first selected category</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Selected  Categ Bg</td>
    <td align="left" valign="top">Selected category background color (hexa) or 'transparent' value</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Selected Categ Off Color</td>
    <td align="left" valign="top">Selected category color (hexa) - OFF state</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Selected Categ On Color</td>
    <td align="left" valign="top">Selected category color (hexa) - ON state</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Category Record Bg Off Color</td>
    <td align="left" valign="top">Category item background color (hexa) - OFF state</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Category Record Bg On Color</td>
    <td align="left" valign="top">Category item background color (hexa) - ON state</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Category Record Bottom Border Off Color</td>
    <td align="left" valign="top">Category item bottom border color (hexa) - OFF state</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Category Record Bottom Border On Color</td>
    <td align="left" valign="top">Category item bottom border color (hexa) - ON state</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Category Record Text Off Color</td>
    <td align="left" valign="top">Category item text color (hexa) - OFF state</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">Category Record Text On Color</td>
    <td align="left" valign="top">Category item text color (hexa) - ON state</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="regb">&nbsp;</td>
    <td align="left" valign="top">&nbsp;</td>
  </tr>
</table>
<p>&nbsp;</p>
<p><span class="lbg_subtitle"><a name="playlist" id="playlist"></a>Playlist</span></p>
<table class="wp-list-table widefat fixed pages" cellspacing="0">
  <tr>
    <td width="30%" align="left" valign="top" class="row-title"></td>
    <td width="70%" align="left" valign="top"></td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Title</td>
    <td align="left" valign="top">video file title</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Description</td>
    <td align="left" valign="top">video file description</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Category</td>
    <td align="left" valign="top">video file category. An video file can belong to multiple categories</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Playlist image</td>
    <td align="left" valign="top">video file  playlist image</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">YouTube</td>
    <td align="left" valign="top">If you want to play a YouTube video on this slide, you'll insert the YouTube video ID. A YouTube link is of this form https://www.youtube.com/watch?v=<span class="style1">5WAkvu5Tnkw</span> <br />
The value of 'v' parameter  is the ID you need.</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Vimeo</td>
    <td align="left" valign="top">If you want to play a Vimeo video on this slide, you'll insert the Vimeo video ID. A Vimeo link is of this form https://vimeo.com/<span class="style1">21288282</span><br />
The last number of the link is the ID </td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Self Hosted/Third Party Hosted Video .MP4 file</td>
    <td align="left" valign="top">If you want to play a Self-Hosted video on this slide, you'll insert the path to the .mp4 file. You need to also add the path to the .webm file, to assure all browsers compatibility (please check the next parameter)</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">Self Hosted/Third Party Hosted Video .WEBM file</td>
    <td align="left" valign="top">If you want to play a Self-Hosted video on this slide, you'll insert the path to the .webm file. You need to also add the path to the .mp4 file,  to assure all browsers compatibility (please check the previous parameter)</td>
  </tr>
	<tr>
    <td align="left" valign="top" class="row-title">Optional Start Time</td>
    <td align="left" valign="top">Optional parameter to set the video start time</td>
  </tr>
	<tr>
    <td align="left" valign="top" class="row-title">Optional End Time</td>
    <td align="left" valign="top">Optional parameter to set the video end time</td>
  </tr>
  <tr>
    <td align="left" valign="top" class="row-title">&nbsp;</td>
    <td align="left" valign="top">&nbsp;</td>
  </tr>
</table>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><span class="lbg_subtitle"><a name="facebook_share" id="facebook_share"></a>7. FaceBook Share</span></p>
<p>In order for the Facebook share button to work you need to obtain a Facebook Application ID</p>
<p>1. Go to the <a href="https://developers.facebook.com/apps" target="_blank">Facebook Developers Apps page</a> and and sign in with your Facebook username and password.</p>
<p>2. Click the &quot;Create New App&quot; button.</p>
<p><i>If you do not see the option to create a new app in the upper right hand corner, click on &quot;Register as Developer.&quot;</i></p>
<p>3. After that you'll obtain an 'App ID' which you'll paste in <span class="regb">facebookAppID</span> parameter when you'll initialize the player</p>
<p>jQuery('#video2_html5_white').video2_html5({<br />
  skin: 'whiteControllers',<br />
  <span class="regb">facebookAppID</span>:'YOUR_NEW_APPID',<br />
  playerWidth:500,<br />
  autoPlay:true <br />
  }); </p>
<p>4. Go to Settings tab (left area),  select 'Website' and insert your website URL</p>
<p><img src="<?php echo plugins_url('images/facebookAppId.jpg', dirname(__FILE__))?>" width="1600" height="859" alt="facebook appid" /></p>
<p>5. Go to App Review and set 'YES' for 'Do you want to make this app and all its live features available to the general public?'</p>
<p><img src="<?php echo plugins_url('images/status_and_review.jpg', dirname(__FILE__))?>" width="1600" height="858" alt="status and review" /></p>
<p>6. To personalize more the share content you can use <span class="regb">facebookShareTitle</span> and <span class="regb">facebookShareDescription</span> parameters when you initialize the player. Please check <a href="#settings">Player Settings</a> section, to see all available parameters</p>
<p></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><span class="lbg_subtitle"><a name="shortcode" id="shortcode"></a>ShortCode</span></p>
<p>The shortcode is: <br />
[universal_video_player.zip settings_id='1']<br />
where <br />
settings_id is the player ID defined in &quot;Manage Players&quot; section</p>
<p>OPTIONAL PARAMETERS:</p>
videos_initial_ord - it can be used to define which video items, from the playlist, will appear in the player. It will take the value of the playlist item order.
<p>[universal_video_player.zip settings_id='1' videos_initial_ord='4,2,5'] - in this case, only the playlist items which have  4 or 2 or 5 as 'Initial Order' will be in the playlist</p>
<p>&nbsp;</p>
<p><span class="lbg_subtitle"><a name="htaccess" id="htaccess"></a>.htaccess</span></p>
<p>If you need to increase the wordpress media library upload file size limit add the following definitions in the .htaccess file</p>
<p>&lt;IfModule mod_php5.c&gt;<br />
  php_value post_max_size           10M<br />
  php_value upload_max_filesize     40M<br />
  php_value memory_limit            500M<br />
  &lt;/IfModule&gt;</p>
</div>
