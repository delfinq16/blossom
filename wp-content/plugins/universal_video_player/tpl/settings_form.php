<script>
jQuery(document).ready(function() {

	// Uploading files

	jQuery('#upload_logo_button_universal_player').click(function(event) {
		var file_frame;
		event.preventDefault();
		// If the media frame already exists, reopen it.
		if ( file_frame ) {
			file_frame.open();
			return;
		}
		// Create the media frame.
		file_frame = wp.media.frames.file_frame = wp.media({
			title: jQuery( this ).data( 'uploader_title' ),
			button: {
			text: jQuery( this ).data( 'uploader_button_text' ),
			},
			multiple: false // Set to true to allow multiple files to be selected
		});
		// When an image is selected, run a callback.
		file_frame.on( 'select', function() {
			// We set multiple to false so only get one image from the uploader
			attachment = file_frame.state().get('selection').first().toJSON();
			// Do something with attachment.id and/or attachment.url here
			//alert (attachment.url);
			jQuery('#logoImagePath').val(attachment.url);
			jQuery('#logoImagePath_img').attr('src',attachment.url);
		});
		// Finally, open the modal
		file_frame.open();
	});

});
</script>





<div class="wrap">
	<div id="lbg_logo">
			<h2>Player Settings for player: <span style="color:#FF0000; font-weight:bold;"><?php echo $_SESSION['xname']?> - ID #<?php echo $_SESSION['xid']?></span></h2>
 	</div>

	<div style="text-align:center; padding:0px 0px 20px 0px;"><img src="<?php echo plugins_url('images/icons/magnifier.png', dirname(__FILE__))?>" alt="add" align="absmiddle" /> <a href="javascript: void(0);" onclick="showDialogPreview(<?php echo strip_tags($_SESSION['xid'])?>)">Preview Player</a></div>

	<div id="previewDialog"><iframe id="previewDialogIframe" src="" width="100%" height="600" style="border:0;"></iframe></div>

  <form method="POST" enctype="multipart/form-data" id="form-settings-universal_player">
	<script>
	jQuery(function() {
		var icons = {
			header: "ui-icon-circle-arrow-e",
			headerSelected: "ui-icon-circle-arrow-s"
		};
		jQuery( "#accordion" ).accordion({
			icons: icons,
			autoHeight: false
		});
	});
	</script>


<div id="accordion">
  <h3><a href="#">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;General Settings</a></h3>
  <div style="padding:30px;">
	  <table class="wp-list-table widefat fixed pages" cellspacing="0">

		  <tr>
		    <td align="right" valign="top" class="row-title" width="30%">Player Name</td>
		    <td align="left" valign="top" width="70%"><input name="name" type="text" size="40" id="name" value="<?php echo $_SESSION['xname'];?>"/></td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Skin Name</td>
		    <td align="left" valign="middle"><select name="skin" id="skin">
		      <option value="whiteControllers" <?php echo (($_POST['skin']=='whiteControllers')?'selected="selected"':'')?>>whiteControllers</option>
		      <option value="blackControllers" <?php echo (($_POST['skin']=='blackControllers')?'selected="selected"':'')?>>blackControllers</option>
            </select></td>
	      </tr>

		  <tr>
		    <td align="right" valign="top" class="row-title">Player Width</td>
		    <td align="left" valign="middle"><input name="width" type="text" size="25" id="width" value="<?php echo $_POST['width'];?>"/>
		      px</td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Player Height</td>
		    <td align="left" valign="middle"><input name="height" type="text" size="25" id="height" value="<?php echo $_POST['height'];?>"/> px</td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Responsive</td>
		    <td align="left" valign="middle"><select name="responsive" id="responsive">
		      <option value="true" <?php echo (($_POST['responsive']=='true')?'selected="selected"':'')?>>true</option>
		      <option value="false" <?php echo (($_POST['responsive']=='false')?'selected="selected"':'')?>>false</option>
		      </select></td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Responsive Relative To Browser</td>
		    <td align="left" valign="middle"><select name="responsiveRelativeToBrowser" id="responsiveRelativeToBrowser">
		      <option value="true" <?php echo (($_POST['responsiveRelativeToBrowser']=='true')?'selected="selected"':'')?>>true</option>
		      <option value="false" <?php echo (($_POST['responsiveRelativeToBrowser']=='false')?'selected="selected"':'')?>>false</option>
		      </select></td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Automatically Obtain Thumbnail, Title &amp; Description From YouTube Server</td>
		    <td align="left" valign="middle"><select name="getYouTubeData" id="getYouTubeData">
              <option value="true" <?php echo (($_POST['getYouTubeData']=='true')?'selected="selected"':'')?>>true</option>
              <option value="false" <?php echo (($_POST['getYouTubeData']=='false')?'selected="selected"':'')?>>false</option>
            </select></td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Loop</td>
		    <td align="left" valign="middle"><select name="loop" id="loop">
              <option value="true" <?php echo (($_POST['loop']=='true')?'selected="selected"':'')?>>true</option>
              <option value="false" <?php echo (($_POST['loop']=='false')?'selected="selected"':'')?>>false</option>
            </select></td>
	    </tr>
		<tr>
		    <td align="right" valign="top" class="row-title">Auto Play</td>
		    <td align="left" valign="middle"><select name="autoPlayFirstVideo" id="autoPlayFirstVideo">
              <option value="true" <?php echo (($_POST['autoPlayFirstVideo']=='true')?'selected="selected"':'')?>>true</option>
              <option value="false" <?php echo (($_POST['autoPlayFirstVideo']=='false')?'selected="selected"':'')?>>false</option>
            </select></td>
	    </tr>
		<tr>
		    <td align="right" valign="top" class="row-title">Auto Play On Mobile</td>
		    <td align="left" valign="middle"><select name="autoPlayOnMobile" id="autoPlayOnMobile">
              <option value="true" <?php echo (($_POST['autoPlayOnMobile']=='true')?'selected="selected"':'')?>>true</option>
              <option value="false" <?php echo (($_POST['autoPlayOnMobile']=='false')?'selected="selected"':'')?>>false</option>
            </select></td>
	    </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Shuffle</td>
		    <td align="left" valign="middle"><select name="shuffle" id="shuffle">
		      <option value="true" <?php echo (($_POST['shuffle']=='true')?'selected="selected"':'')?>>true</option>
		      <option value="false" <?php echo (($_POST['shuffle']=='false')?'selected="selected"':'')?>>false</option>
	        </select></td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Initial Volume Value</td>
		    <td align="left" valign="middle"><script>
	jQuery(function() {
		jQuery( "#initialVolume-slider-range-min" ).slider({
			range: "min",
			value: <?php echo $_POST['initialVolume'];?>,
			min: 0,
			max: 1,
			step: 0.1,
			slide: function( event, ui ) {
				jQuery( "#initialVolume" ).val(ui.value );
			}
		});
		jQuery( "#initialVolume" ).val( jQuery( "#initialVolume-slider-range-min" ).slider( "value" ) );
	});
	        </script>
                <div id="initialVolume-slider-range-min" class="inlinefloatleft" style="width:200px;"></div>
		      <div class="inlinefloatleft" style="padding-left:20px;">
		        <input name="initialVolume" type="text" size="10" id="initialVolume" style="border:0; color:#000000; font-weight:bold;"/>
	          </div></td>
	    </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Player Border Color</td>
		    <td align="left" valign="middle"><input name="borderColor" type="text" size="25" id="borderColor" value="<?php echo $_POST['borderColor'];?>" style="background-color:#<?php echo $_POST['borderColor'];?>" />
		      <script>
jQuery('#borderColor').ColorPicker({
	onSubmit: function(hsb, hex, rgb, el) {
		jQuery(el).val(hex);
		jQuery(el).css("background-color",'#'+hex);
		jQuery(el).ColorPickerHide();
	},
	onBeforeShow: function () {
		jQuery(this).ColorPickerSetColor(this.value);
	}
})
.bind('keyup', function(){
	jQuery(this).ColorPickerSetColor(this.value);
});
              </script></td>
	      </tr>
<tr>
		    <td align="right" valign="top" class="row-title">Controls Bg FullScreen Color</td>
		    <td align="left" valign="middle"><input name="controlsBgFullScreenColor" type="text" size="25" id="controlsBgFullScreenColor" value="<?php echo $_POST['controlsBgFullScreenColor'];?>" style="background-color:#<?php echo $_POST['controlsBgFullScreenColor'];?>" />
		      <script>
jQuery('#controlsBgFullScreenColor').ColorPicker({
	onSubmit: function(hsb, hex, rgb, el) {
		jQuery(el).val(hex);
		jQuery(el).css("background-color",'#'+hex);
		jQuery(el).ColorPickerHide();
	},
	onBeforeShow: function () {
		jQuery(this).ColorPickerSetColor(this.value);
	}
})
.bind('keyup', function(){
	jQuery(this).ColorPickerSetColor(this.value);
});
              </script></td>
	      </tr>
 		  <tr>
		    <td align="right" valign="top" class="row-title">Empty Buffer Color</td>
		    <td align="left" valign="middle"><input name="bufferEmptyColor" type="text" size="25" id="bufferEmptyColor" value="<?php echo $_POST['bufferEmptyColor'];?>" style="background-color:#<?php echo $_POST['bufferEmptyColor'];?>" />
            <script>
jQuery('#bufferEmptyColor').ColorPicker({
	onSubmit: function(hsb, hex, rgb, el) {
		jQuery(el).val(hex);
		jQuery(el).css("background-color",'#'+hex);
		jQuery(el).ColorPickerHide();
	},
	onBeforeShow: function () {
		jQuery(this).ColorPickerSetColor(this.value);
	}
})
.bind('keyup', function(){
	jQuery(this).ColorPickerSetColor(this.value);
});
              </script>            </td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Full Buffer Color</td>
		    <td align="left" valign="middle"><input name="bufferFullColor" type="text" size="25" id="bufferFullColor" value="<?php echo $_POST['bufferFullColor'];?>" style="background-color:#<?php echo $_POST['bufferFullColor'];?>" />
            <script>
jQuery('#bufferFullColor').ColorPicker({
	onSubmit: function(hsb, hex, rgb, el) {
		jQuery(el).val(hex);
		jQuery(el).css("background-color",'#'+hex);
		jQuery(el).ColorPickerHide();
	},
	onBeforeShow: function () {
		jQuery(this).ColorPickerSetColor(this.value);
	}
})
.bind('keyup', function(){
	jQuery(this).ColorPickerSetColor(this.value);
});
              </script>            </td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">SeekBar Color</td>
		    <td align="left" valign="middle"><input name="seekbarColor" type="text" size="25" id="seekbarColor" value="<?php echo $_POST['seekbarColor'];?>" style="background-color:#<?php echo $_POST['seekbarColor'];?>" />
            <script>
jQuery('#seekbarColor').ColorPicker({
	onSubmit: function(hsb, hex, rgb, el) {
		jQuery(el).val(hex);
		jQuery(el).css("background-color",'#'+hex);
		jQuery(el).ColorPickerHide();
	},
	onBeforeShow: function () {
		jQuery(this).ColorPickerSetColor(this.value);
	}
})
.bind('keyup', function(){
	jQuery(this).ColorPickerSetColor(this.value);
});
              </script>            </td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Volume Off State Color</td>
		    <td align="left" valign="middle"><input name="volumeOffColor" type="text" size="25" id="volumeOffColor" value="<?php echo $_POST['volumeOffColor'];?>" style="background-color:#<?php echo $_POST['volumeOffColor'];?>" />
            <script>
jQuery('#volumeOffColor').ColorPicker({
	onSubmit: function(hsb, hex, rgb, el) {
		jQuery(el).val(hex);
		jQuery(el).css("background-color",'#'+hex);
		jQuery(el).ColorPickerHide();
	},
	onBeforeShow: function () {
		jQuery(this).ColorPickerSetColor(this.value);
	}
})
.bind('keyup', function(){
	jQuery(this).ColorPickerSetColor(this.value);
});
              </script>            </td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Volume On State Color</td>
		    <td align="left" valign="middle"><input name="volumeOnColor" type="text" size="25" id="volumeOnColor" value="<?php echo $_POST['volumeOnColor'];?>" style="background-color:#<?php echo $_POST['volumeOnColor'];?>" />
            <script>
jQuery('#volumeOnColor').ColorPicker({
	onSubmit: function(hsb, hex, rgb, el) {
		jQuery(el).val(hex);
		jQuery(el).css("background-color",'#'+hex);
		jQuery(el).ColorPickerHide();
	},
	onBeforeShow: function () {
		jQuery(this).ColorPickerSetColor(this.value);
	}
})
.bind('keyup', function(){
	jQuery(this).ColorPickerSetColor(this.value);
});
              </script>            </td>
	      </tr>

 		  <tr>
		    <td align="right" valign="top" class="row-title">Timer Color</td>
		    <td align="left" valign="middle"><input name="timerColor" type="text" size="25" id="timerColor" value="<?php echo $_POST['timerColor'];?>" style="background-color:#<?php echo $_POST['timerColor'];?>" />
            <script>
jQuery('#timerColor').ColorPicker({
	onSubmit: function(hsb, hex, rgb, el) {
		jQuery(el).val(hex);
		jQuery(el).css("background-color",'#'+hex);
		jQuery(el).ColorPickerHide();
	},
	onBeforeShow: function () {
		jQuery(this).ColorPickerSetColor(this.value);
	}
})
.bind('keyup', function(){
	jQuery(this).ColorPickerSetColor(this.value);
});
              </script>            </td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Top Title Color</td>
		    <td align="left" valign="middle"><input name="topTitleColor" type="text" size="25" id="topTitleColor" value="<?php echo $_POST['topTitleColor'];?>" style="background-color:#<?php echo $_POST['topTitleColor'];?>" />
            <script>
jQuery('#topTitleColor').ColorPicker({
	onSubmit: function(hsb, hex, rgb, el) {
		jQuery(el).val(hex);
		jQuery(el).css("background-color",'#'+hex);
		jQuery(el).ColorPickerHide();
	},
	onBeforeShow: function () {
		jQuery(this).ColorPickerSetColor(this.value);
	}
})
.bind('keyup', function(){
	jQuery(this).ColorPickerSetColor(this.value);
});
              </script>            </td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">First Video To Play</td>
		    <td align="left" valign="middle"><input name="firstVideo" type="text" size="25" id="firstVideo" value="<?php echo $_POST['firstVideo'];?>"/> <i>Counting starts from 0</i></td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Suggested Quality<br />
<em>(Only For YouTube)</em></td>
		    <td align="left" valign="middle"><select name="suggestedQuality" id="suggestedQuality">
              <option value="default" <?php echo (($_POST['suggestedQuality']=='default')?'selected="selected"':'')?>>default</option>
              <option value="small" <?php echo (($_POST['suggestedQuality']=='small')?'selected="selected"':'')?>>small</option>
              <option value="medium" <?php echo (($_POST['suggestedQuality']=='medium')?'selected="selected"':'')?>>medium</option>
              <option value="large" <?php echo (($_POST['suggestedQuality']=='large')?'selected="selected"':'')?>>large</option>
              <option value="hd720" <?php echo (($_POST['suggestedQuality']=='hd720')?'selected="selected"':'')?>>hd720</option>
              <option value="hd1080" <?php echo (($_POST['suggestedQuality']=='hd1080')?'selected="selected"':'')?>>hd1080</option>
              <option value="highres" <?php echo (($_POST['suggestedQuality']=='highres')?'selected="selected"':'')?>>highres</option>
            </select></td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Show Logo</td>
		    <td align="left" valign="middle"><select name="showLogo" id="showLogo">
              <option value="true" <?php echo (($_POST['showLogo']=='true')?'selected="selected"':'')?>>true</option>
              <option value="false" <?php echo (($_POST['showLogo']=='false')?'selected="selected"':'')?>>false</option>
            </select></td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Logo</td>
		    <td align="left" valign="middle"><input name="logoImagePath" type="text" id="logoImagePath" size="100" value="<?php echo stripslashes($row['logoImagePath']);?>" />
            <input name="upload_logo_button_universal_player" type="button" id="upload_logo_button_universal_player" value="Change Image" />
              <br />
            Enter an URL or upload an image</td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">&nbsp;</td>
		    <td align="left" valign="middle"><img src="<?php echo $row['logoImagePath']?>" name="logoImagePath_img" id="logoImagePath_img" /></td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Logo Link</td>
		    <td align="left" valign="middle"><input name="logoLink" type="text" size="70" id="logoLink" value="<?php echo $_POST['logoLink'];?>"/></td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Logo Target</td>
		    <td align="left" valign="middle"><select name="logoTarget" id="logoTarget">
              <option value="true" <?php echo (($_POST['logoTarget']=='_blank')?'selected="selected"':'')?>>_blank</option>
              <option value="false" <?php echo (($_POST['logoTarget']=='_self')?'selected="selected"':'')?>>_self</option>
            </select></td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Play Button Color OFF State</td>
		    <td align="left" valign="middle"><input name="playButColorOff" type="text" size="25" id="playButColorOff" value="<?php echo $_POST['playButColorOff'];?>" style="background-color:#<?php echo $_POST['playButColorOff'];?>" />
            <script>
jQuery('#playButColorOff').ColorPicker({
	onSubmit: function(hsb, hex, rgb, el) {
		jQuery(el).val(hex);
		jQuery(el).css("background-color",'#'+hex);
		jQuery(el).ColorPickerHide();
	},
	onBeforeShow: function () {
		jQuery(this).ColorPickerSetColor(this.value);
	}
})
.bind('keyup', function(){
	jQuery(this).ColorPickerSetColor(this.value);
});
              </script>            </td>
	      </tr>
<tr>
		    <td align="right" valign="top" class="row-title">Play Button Color ON State</td>
		    <td align="left" valign="middle"><input name="playButColorOn" type="text" size="25" id="playButColorOn" value="<?php echo $_POST['playButColorOn'];?>" style="background-color:#<?php echo $_POST['playButColorOn'];?>" />
            <script>
jQuery('#playButColorOn').ColorPicker({
	onSubmit: function(hsb, hex, rgb, el) {
		jQuery(el).val(hex);
		jQuery(el).css("background-color",'#'+hex);
		jQuery(el).ColorPickerHide();
	},
	onBeforeShow: function () {
		jQuery(this).ColorPickerSetColor(this.value);
	}
})
.bind('keyup', function(){
	jQuery(this).ColorPickerSetColor(this.value);
});
              </script>            </td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Show Rewind Button</td>
		    <td align="left" valign="middle"><select name="showRewindBut" id="showRewindBut">
              <option value="true" <?php echo (($_POST['showRewindBut']=='true')?'selected="selected"':'')?>>true</option>
              <option value="false" <?php echo (($_POST['showRewindBut']=='false')?'selected="selected"':'')?>>false</option>
            </select></td>
	   </tr>
	   <tr>
		    <td align="right" valign="top" class="row-title">Show Play Button</td>
		    <td align="left" valign="middle"><select name="showPlayBut" id="showPlayBut">
              <option value="true" <?php echo (($_POST['showPlayBut']=='true')?'selected="selected"':'')?>>true</option>
              <option value="false" <?php echo (($_POST['showPlayBut']=='false')?'selected="selected"':'')?>>false</option>
            </select></td>
	   </tr>
	   <tr>
		    <td align="right" valign="top" class="row-title">Show Volume Button</td>
		    <td align="left" valign="middle"><select name="showVolumeBut" id="showVolumeBut">
              <option value="true" <?php echo (($_POST['showVolumeBut']=='true')?'selected="selected"':'')?>>true</option>
              <option value="false" <?php echo (($_POST['showVolumeBut']=='false')?'selected="selected"':'')?>>false</option>
            </select></td>
	   </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Show Shuffle Button</td>
		    <td align="left" valign="middle"><select name="showShuffleBut" id="showShuffleBut">
              <option value="true" <?php echo (($_POST['showShuffleBut']=='true')?'selected="selected"':'')?>>true</option>
              <option value="false" <?php echo (($_POST['showShuffleBut']=='false')?'selected="selected"':'')?>>false</option>
            </select></td>
	   </tr>
		 <tr>
		    <td align="right" valign="top" class="row-title">Show Download Button</td>
		    <td align="left" valign="middle"><select name="showDownloadBut" id="showDownloadBut">
              <option value="true" <?php echo (($_POST['showDownloadBut']=='true')?'selected="selected"':'')?>>true</option>
              <option value="false" <?php echo (($_POST['showDownloadBut']=='false')?'selected="selected"':'')?>>false</option>
            </select></td>
	   </tr>
		 <tr>
		   <td align="right" valign="top" class="row-title">Show Twitter Button</td>
		   <td align="left" valign="middle"><select name="showTwitterBut" id="showTwitterBut">
		     <option value="true" <?php echo (($_POST['showTwitterBut']=='true')?'selected="selected"':'')?>>true</option>
		     <option value="false" <?php echo (($_POST['showTwitterBut']=='false')?'selected="selected"':'')?>>false</option>
		     </select></td>
	      </tr>
		 <tr>
		    <td align="right" valign="top" class="row-title">Show Info Button</td>
		    <td align="left" valign="middle"><select name="showInfoBut" id="showInfoBut">
              <option value="true" <?php echo (($_POST['showInfoBut']=='true')?'selected="selected"':'')?>>true</option>
              <option value="false" <?php echo (($_POST['showInfoBut']=='false')?'selected="selected"':'')?>>false</option>
            </select></td>
	   </tr>
		 <tr>
		    <td align="right" valign="top" class="row-title">Show FullScreen Button</td>
		    <td align="left" valign="middle"><select name="showFullscreenBut" id="showFullscreenBut">
              <option value="true" <?php echo (($_POST['showFullscreenBut']=='true')?'selected="selected"':'')?>>true</option>
              <option value="false" <?php echo (($_POST['showFullscreenBut']=='false')?'selected="selected"':'')?>>false</option>
            </select></td>
	   </tr>
		 <tr>
		    <td align="right" valign="top" class="row-title">Show Next/Prev Buttons</td>
		    <td align="left" valign="middle"><select name="showNextPrevBut" id="showNextPrevBut">
              <option value="true" <?php echo (($_POST['showNextPrevBut']=='true')?'selected="selected"':'')?>>true</option>
              <option value="false" <?php echo (($_POST['showNextPrevBut']=='false')?'selected="selected"':'')?>>false</option>
            </select></td>
	   </tr>
		 <tr>
		    <td align="right" valign="top" class="row-title">Show Movie Top Title</td>
		    <td align="left" valign="middle"><select name="showTopTitle" id="showTopTitle">
              <option value="true" <?php echo (($_POST['showTopTitle']=='true')?'selected="selected"':'')?>>true</option>
              <option value="false" <?php echo (($_POST['showTopTitle']=='false')?'selected="selected"':'')?>>false</option>
            </select></td>
	   </tr>
		 <tr>
		    <td align="right" valign="top" class="row-title">Show Timer</td>
		    <td align="left" valign="middle"><select name="showTimer" id="showTimer">
		      <option value="true" <?php echo (($_POST['showTimer']=='true')?'selected="selected"':'')?>>true</option>
		      <option value="false" <?php echo (($_POST['showTimer']=='false')?'selected="selected"':'')?>>false</option>
            </select></td>
	     </tr>
		 <tr>
		    <td align="right" valign="top" class="row-title">Show FaceBook Button</td>
		    <td align="left" valign="middle"><select name="showFacebookBut" id="showFacebookBut">
              <option value="true" <?php echo (($_POST['showFacebookBut']=='true')?'selected="selected"':'')?>>true</option>
              <option value="false" <?php echo (($_POST['showFacebookBut']=='false')?'selected="selected"':'')?>>false</option>
            </select></td>
	   </tr>
		 <tr>
		   <td align="right" valign="top" class="row-title">FaceBook AppID</td>
		   <td align="left" valign="middle"><input name="facebookAppID" type="text" size="25" id="facebookAppID" value="<?php echo $_POST['facebookAppID'];?>"/></td>
	      </tr>
		 <tr>
		   <td align="right" valign="top" class="row-title">Face Book Share Title</td>
		   <td align="left" valign="middle"><input name="facebookShareTitle" type="text" size="45" id="facebookShareTitle" value="<?php echo $_POST['facebookShareTitle'];?>"/></td>
	      </tr>
		 <tr>
		   <td align="right" valign="top" class="row-title">FaceBook Share Description</td>
		   <td align="left" valign="middle"><textarea name="facebookShareDescription" id="facebookShareDescription" cols="45" rows="5"><?php echo $_POST['facebookShareDescription'];?></textarea></td>
	     </tr>
		 <tr>
		    <td align="right" valign="top" class="row-title">Activate Google Analytics Traking</td>
		    <td align="left" valign="middle"><select name="googleTrakingOn" id="googleTrakingOn">
              <option value="true" <?php echo (($_POST['googleTrakingOn']=='true')?'selected="selected"':'')?>>true</option>
              <option value="false" <?php echo (($_POST['googleTrakingOn']=='false')?'selected="selected"':'')?>>false</option>
            </select></td>
	   </tr>
		 <tr>
		   <td align="right" valign="top" class="row-title">Your Google Analytics Traking Code <i><br />
	        Example of code: UA-3245593-1</i></td>
		   <td align="left" valign="top"><input name="googleTrakingCode" type="text" size="45" id="googleTrakingCode" value="<?php echo $_POST['googleTrakingCode'];?>"/></td>
	      </tr>
		 <tr>
		   <td align="right" valign="top" class="row-title">&nbsp;</td>
		   <td align="left" valign="middle">&nbsp;</td>
	      </tr>

      </table>
  </div>
  <h3><a href="#">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Playlist & Categories Settings</a></h3>
  <div style="padding:30px;">
	  <table class="wp-list-table widefat fixed pages" cellspacing="0">
		 <tr>
		    <td align="right" valign="top" class="row-title" width="30%">Show Playlist On Init</td>
		    <td align="left" valign="middle" width="70%"><select name="showPlaylistOnInit" id="showPlaylistOnInit">
              <option value="true" <?php echo (($_POST['showPlaylistOnInit']=='true')?'selected="selected"':'')?>>true</option>
              <option value="false" <?php echo (($_POST['showPlaylistOnInit']=='false')?'selected="selected"':'')?>>false</option>
            </select></td>
	   </tr>
		 <tr>
		    <td align="right" valign="top" class="row-title">Show Playlist Button</td>
		    <td align="left" valign="middle"><select name="showPlaylistBut" id="showPlaylistBut">
              <option value="true" <?php echo (($_POST['showPlaylistBut']=='true')?'selected="selected"':'')?>>true</option>
              <option value="false" <?php echo (($_POST['showPlaylistBut']=='false')?'selected="selected"':'')?>>false</option>
            </select></td>
	   </tr>
	   <tr>
		    <td align="right" valign="top" class="row-title">Playlist Width</td>
		    <td align="left" valign="middle"><input name="playlistWidth" type="text" size="25" id="playlistWidth" value="<?php echo $_POST['playlistWidth'];?>"/>
		      px</td>
	      </tr>
          <tr>
		    <td align="right" valign="top" class="row-title">Playlist Background Color</td>
		    <td align="left" valign="middle"><input name="playlistBgColor" type="text" size="25" id="playlistBgColor" value="<?php echo $_POST['playlistBgColor'];?>" style="background-color:#<?php echo $_POST['playlistBgColor'];?>" />
            <script>
jQuery('#playlistBgColor').ColorPicker({
	onSubmit: function(hsb, hex, rgb, el) {
		jQuery(el).val(hex);
		jQuery(el).css("background-color",'#'+hex);
		jQuery(el).ColorPickerHide();
	},
	onBeforeShow: function () {
		jQuery(this).ColorPickerSetColor(this.value);
	}
})
.bind('keyup', function(){
	jQuery(this).ColorPickerSetColor(this.value);
});
              </script>            </td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Thumb Width</td>
		    <td align="left" valign="middle"><input name="origThumbImgW" type="text" size="25" id="origThumbImgW" value="<?php echo $_POST['origThumbImgW'];?>"/>
		      px</td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Thumb Height</td>
		    <td align="left" valign="middle"><input name="origThumbImgH" type="text" size="25" id="origThumbImgH" value="<?php echo $_POST['origThumbImgH'];?>"/>
		      px</td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Show Thumbs</td>
		    <td align="left" valign="middle"><select name="playlistRecordShowImg" id="playlistRecordShowImg">
		      <option value="true" <?php echo (($_POST['playlistRecordShowImg']=='true')?'selected="selected"':'')?>>true</option>
		      <option value="false" <?php echo (($_POST['playlistRecordShowImg']=='false')?'selected="selected"':'')?>>false</option>
		      </select></td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Show Title</td>
		    <td align="left" valign="middle"><select name="playlistRecordShowTitle" id="playlistRecordShowTitle">
		      <option value="true" <?php echo (($_POST['playlistRecordShowTitle']=='true')?'selected="selected"':'')?>>true</option>
		      <option value="false" <?php echo (($_POST['playlistRecordShowTitle']=='false')?'selected="selected"':'')?>>false</option>
		      </select></td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Show Description</td>
		    <td align="left" valign="middle"><select name="playlistRecordShowDesc" id="playlistRecordShowDesc">
		      <option value="true" <?php echo (($_POST['playlistRecordShowDesc']=='true')?'selected="selected"':'')?>>true</option>
		      <option value="false" <?php echo (($_POST['playlistRecordShowDesc']=='false')?'selected="selected"':'')?>>false</option>
		      </select></td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Playlist Record Height</td>
		    <td align="left" valign="middle"><input name="playlistRecordHeight" type="text" size="25" id="playlistRecordHeight" value="<?php echo $_POST['playlistRecordHeight'];?>"/>
		    px</td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Playlist Record Padding</td>
		    <td align="left" valign="middle"><input name="playlistRecordPadding" type="text" size="25" id="playlistRecordPadding" value="<?php echo $_POST['playlistRecordPadding'];?>"/> px</td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Title Font Size</td>
		    <td align="left" valign="middle"><input name="playlistTitleFontSize" type="text" size="25" id="playlistTitleFontSize" value="<?php echo $_POST['playlistTitleFontSize'];?>"/> px</td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Title Line Height</td>
		    <td align="left" valign="middle"><input name="playlistTitleLineHeight" type="text" size="25" id="playlistTitleLineHeight" value="<?php echo $_POST['playlistTitleLineHeight'];?>"/> px</td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Title Characters Limit</td>
		    <td align="left" valign="middle"><input name="playlistRecordTitleLimit" type="text" size="25" id="playlistRecordTitleLimit" value="<?php echo $_POST['playlistRecordTitleLimit'];?>"/></td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Description Font Size</td>
		    <td align="left" valign="middle"><input name="playlistDescFontSize" type="text" size="25" id="playlistDescFontSize" value="<?php echo $_POST['playlistDescFontSize'];?>"/> px</td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Description Line Height</td>
		    <td align="left" valign="middle"><input name="playlistDescLineHeight" type="text" size="25" id="playlistDescLineHeight" value="<?php echo $_POST['playlistDescLineHeight'];?>"/> px</td>
	      </tr>
<tr>
		    <td align="right" valign="top" class="row-title">Description Characters Limit</td>
		    <td align="left" valign="middle"><input name="playlistRecordDescLimit" type="text" size="25" id="playlistRecordDescLimit" value="<?php echo $_POST['playlistRecordDescLimit'];?>"/></td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">&nbsp;</td>
		    <td align="left" valign="middle">&nbsp;</td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Playlist Record Background OFF Color</td>
		    <td align="left" valign="middle"><input name="playlistRecordBgOffColor" type="text" size="25" id="playlistRecordBgOffColor" value="<?php echo $_POST['playlistRecordBgOffColor'];?>" style="background-color:#<?php echo $_POST['playlistRecordBgOffColor'];?>" />
		      <script>
jQuery('#playlistRecordBgOffColor').ColorPicker({
	onSubmit: function(hsb, hex, rgb, el) {
		jQuery(el).val(hex);
		jQuery(el).css("background-color",'#'+hex);
		jQuery(el).ColorPickerHide();
	},
	onBeforeShow: function () {
		jQuery(this).ColorPickerSetColor(this.value);
	}
})
.bind('keyup', function(){
	jQuery(this).ColorPickerSetColor(this.value);
});
              </script></td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Playlist Record Title OFF Color</td>
		    <td align="left" valign="middle"><input name="playlistRecordTitleOffColor" type="text" size="25" id="playlistRecordTitleOffColor" value="<?php echo $_POST['playlistRecordTitleOffColor'];?>" style="background-color:#<?php echo $_POST['playlistRecordTitleOffColor'];?>" />
            <script>
jQuery('#playlistRecordTitleOffColor').ColorPicker({
	onSubmit: function(hsb, hex, rgb, el) {
		jQuery(el).val(hex);
		jQuery(el).css("background-color",'#'+hex);
		jQuery(el).ColorPickerHide();
	},
	onBeforeShow: function () {
		jQuery(this).ColorPickerSetColor(this.value);
	}
})
.bind('keyup', function(){
	jQuery(this).ColorPickerSetColor(this.value);
});
              </script>            </td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Playlist Record Desc OFF Color</td>
		    <td align="left" valign="middle"><input name="playlistRecordDescOffColor" type="text" size="25" id="playlistRecordDescOffColor" value="<?php echo $_POST['playlistRecordDescOffColor'];?>" style="background-color:#<?php echo $_POST['playlistRecordDescOffColor'];?>" />
            <script>
jQuery('#playlistRecordDescOffColor').ColorPicker({
	onSubmit: function(hsb, hex, rgb, el) {
		jQuery(el).val(hex);
		jQuery(el).css("background-color",'#'+hex);
		jQuery(el).ColorPickerHide();
	},
	onBeforeShow: function () {
		jQuery(this).ColorPickerSetColor(this.value);
	}
})
.bind('keyup', function(){
	jQuery(this).ColorPickerSetColor(this.value);
});
              </script>            </td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Playlist Record Bg OFF Img Opacity</td>
		    <td align="left" valign="middle"><script>
	jQuery(function() {
		jQuery( "#playlistRecordBgOffImgOpacity-slider-range-min" ).slider({
			range: "min",
			value: <?php echo $_POST['playlistRecordBgOffImgOpacity'];?>,
			min: 0,
			max: 100,
			slide: function( event, ui ) {
				jQuery( "#playlistRecordBgOffImgOpacity" ).val(ui.value );
			}
		});
		jQuery( "#playlistRecordBgOffImgOpacity" ).val( jQuery( "#playlistRecordBgOffImgOpacity-slider-range-min" ).slider( "value" ) );
	});
	        </script>
                <div id="playlistRecordBgOffImgOpacity-slider-range-min" class="inlinefloatleft" style="width:200px;"></div>
		      <div class="inlinefloatleft" style="padding-left:20px;">%
		        <input name="playlistRecordBgOffImgOpacity" type="text" size="10" id="playlistRecordBgOffImgOpacity" style="border:0; color:#000000; font-weight:bold;"/>
            </div></td>
	    </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">&nbsp;</td>
		    <td align="left" valign="middle">&nbsp;</td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Playlist Record Background ON Color</td>
		    <td align="left" valign="middle"><input name="playlistRecordBgOnColor" type="text" size="25" id="playlistRecordBgOnColor" value="<?php echo $_POST['playlistRecordBgOnColor'];?>" style="background-color:#<?php echo $_POST['playlistRecordBgOnColor'];?>" />
		      <script>
jQuery('#playlistRecordBgOnColor').ColorPicker({
	onSubmit: function(hsb, hex, rgb, el) {
		jQuery(el).val(hex);
		jQuery(el).css("background-color",'#'+hex);
		jQuery(el).ColorPickerHide();
	},
	onBeforeShow: function () {
		jQuery(this).ColorPickerSetColor(this.value);
	}
})
.bind('keyup', function(){
	jQuery(this).ColorPickerSetColor(this.value);
});
              </script></td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Playlist Record Title ON Color</td>
		    <td align="left" valign="middle"><input name="playlistRecordTitleOnColor" type="text" size="25" id="playlistRecordTitleOnColor" value="<?php echo $_POST['playlistRecordTitleOnColor'];?>" style="background-color:#<?php echo $_POST['playlistRecordTitleOnColor'];?>" />
            <script>
jQuery('#playlistRecordTitleOnColor').ColorPicker({
	onSubmit: function(hsb, hex, rgb, el) {
		jQuery(el).val(hex);
		jQuery(el).css("background-color",'#'+hex);
		jQuery(el).ColorPickerHide();
	},
	onBeforeShow: function () {
		jQuery(this).ColorPickerSetColor(this.value);
	}
})
.bind('keyup', function(){
	jQuery(this).ColorPickerSetColor(this.value);
});
              </script>            </td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Playlist Record Desc ON Color</td>
		    <td align="left" valign="middle"><input name="playlistRecordDescOnColor" type="text" size="25" id="playlistRecordDescOnColor" value="<?php echo $_POST['playlistRecordDescOnColor'];?>" style="background-color:#<?php echo $_POST['playlistRecordDescOnColor'];?>" />
            <script>
jQuery('#playlistRecordDescOnColor').ColorPicker({
	onSubmit: function(hsb, hex, rgb, el) {
		jQuery(el).val(hex);
		jQuery(el).css("background-color",'#'+hex);
		jQuery(el).ColorPickerHide();
	},
	onBeforeShow: function () {
		jQuery(this).ColorPickerSetColor(this.value);
	}
})
.bind('keyup', function(){
	jQuery(this).ColorPickerSetColor(this.value);
});
              </script>            </td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Playlist Record Bg ON Img Opacity</td>
		    <td align="left" valign="middle"><script>
	jQuery(function() {
		jQuery( "#playlistRecordBgOnImgOpacity-slider-range-min" ).slider({
			range: "min",
			value: <?php echo $_POST['playlistRecordBgOnImgOpacity'];?>,
			min: 0,
			max: 100,
			slide: function( event, ui ) {
				jQuery( "#playlistRecordBgOnImgOpacity" ).val(ui.value );
			}
		});
		jQuery( "#playlistRecordBgOnImgOpacity" ).val( jQuery( "#playlistRecordBgOnImgOpacity-slider-range-min" ).slider( "value" ) );
	});
	        </script>
                <div id="playlistRecordBgOnImgOpacity-slider-range-min" class="inlinefloatleft" style="width:200px;"></div>
		      <div class="inlinefloatleft" style="padding-left:20px;">%
		        <input name="playlistRecordBgOnImgOpacity" type="text" size="10" id="playlistRecordBgOnImgOpacity" style="border:0; color:#000000; font-weight:bold;"/>
            </div></td>
	    </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">&nbsp;</td>
		    <td align="left" valign="middle">&nbsp;</td>
	      </tr>


		  <tr>
		    <td align="right" valign="top" class="row-title">Number Of Items Per Screen</td>
		    <td align="left" valign="top"><input name="numberOfThumbsPerScreen" type="text" size="25" id="numberOfThumbsPerScreen" value="<?php echo stripslashes($_POST['numberOfThumbsPerScreen']);?>"/></td>
	    </tr>

<tr>
 		    <td align="right" valign="top" class="row-title">Playlist Scroller Bg Color OFF</td>
 		    <td align="left" valign="middle"><input name="playlistScrollerBgColorOFF" type="text" size="25" id="playlistScrollerBgColorOFF" value="<?php echo $_POST['playlistScrollerBgColorOFF'];?>" style="background-color:#<?php echo $_POST['playlistScrollerBgColorOFF'];?>" />
            <script>
jQuery('#playlistScrollerBgColorOFF').ColorPicker({
	onSubmit: function(hsb, hex, rgb, el) {
		jQuery(el).val(hex);
		jQuery(el).css("background-color",'#'+hex);
		jQuery(el).ColorPickerHide();
	},
	onBeforeShow: function () {
		jQuery(this).ColorPickerSetColor(this.value);
	}
})
.bind('keyup', function(){
	jQuery(this).ColorPickerSetColor(this.value);
});
              </script>            </td>
	      </tr>
 		  <tr>
 		    <td align="right" valign="top" class="row-title">Playlist Scroller Bg Color ON</td>
 		    <td align="left" valign="middle"><input name="playlistScrollerBgColorON" type="text" size="25" id="playlistScrollerBgColorON" value="<?php echo $_POST['playlistScrollerBgColorON'];?>" style="background-color:#<?php echo $_POST['playlistScrollerBgColorON'];?>" />
            <script>
jQuery('#playlistScrollerBgColorON').ColorPicker({
	onSubmit: function(hsb, hex, rgb, el) {
		jQuery(el).val(hex);
		jQuery(el).css("background-color",'#'+hex);
		jQuery(el).ColorPickerHide();
	},
	onBeforeShow: function () {
		jQuery(this).ColorPickerSetColor(this.value);
	}
})
.bind('keyup', function(){
	jQuery(this).ColorPickerSetColor(this.value);
});
              </script>            </td>
	      </tr>

		  <tr>
		    <td align="right" valign="top" class="row-title">&nbsp;</td>
		    <td align="left" valign="middle">&nbsp;</td>
	      </tr>
		  <tr>
		    <td colspan="2" align="center" valign="top" class="lbg_regGray">- The Categories -</td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Category Record Background Off Color</td>
		    <td align="left" valign="middle"><input name="categoryRecordBgOffColor" type="text" size="25" id="categoryRecordBgOffColor" value="<?php echo $_POST['categoryRecordBgOffColor'];?>" style="background-color:#<?php echo $_POST['categoryRecordBgOffColor'];?>" />
		      <script>
jQuery('#categoryRecordBgOffColor').ColorPicker({
	onSubmit: function(hsb, hex, rgb, el) {
		jQuery(el).val(hex);
		jQuery(el).css("background-color",'#'+hex);
		jQuery(el).ColorPickerHide();
	},
	onBeforeShow: function () {
		jQuery(this).ColorPickerSetColor(this.value);
	}
})
.bind('keyup', function(){
	jQuery(this).ColorPickerSetColor(this.value);
});
              </script></td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Category Record Background On Color</td>
		    <td align="left" valign="middle"><input name="categoryRecordBgOnColor" type="text" size="25" id="categoryRecordBgOnColor" value="<?php echo $_POST['categoryRecordBgOnColor'];?>" style="background-color:#<?php echo $_POST['categoryRecordBgOnColor'];?>" />
		      <script>
jQuery('#categoryRecordBgOnColor').ColorPicker({
	onSubmit: function(hsb, hex, rgb, el) {
		jQuery(el).val(hex);
		jQuery(el).css("background-color",'#'+hex);
		jQuery(el).ColorPickerHide();
	},
	onBeforeShow: function () {
		jQuery(this).ColorPickerSetColor(this.value);
	}
})
.bind('keyup', function(){
	jQuery(this).ColorPickerSetColor(this.value);
});
              </script></td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Category Record Bottom Border Off Color</td>
		    <td align="left" valign="middle"><input name="categoryRecordBottomBorderOffColor" type="text" size="25" id="categoryRecordBottomBorderOffColor" value="<?php echo $_POST['categoryRecordBottomBorderOffColor'];?>" style="background-color:#<?php echo $_POST['categoryRecordBottomBorderOffColor'];?>" />
		      <script>
jQuery('#categoryRecordBottomBorderOffColor').ColorPicker({
	onSubmit: function(hsb, hex, rgb, el) {
		jQuery(el).val(hex);
		jQuery(el).css("background-color",'#'+hex);
		jQuery(el).ColorPickerHide();
	},
	onBeforeShow: function () {
		jQuery(this).ColorPickerSetColor(this.value);
	}
})
.bind('keyup', function(){
	jQuery(this).ColorPickerSetColor(this.value);
});
              </script></td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Category Record Bottom Border On Color</td>
		    <td align="left" valign="middle"><input name="categoryRecordBottomBorderOnColor" type="text" size="25" id="categoryRecordBottomBorderOnColor" value="<?php echo $_POST['categoryRecordBottomBorderOnColor'];?>" style="background-color:#<?php echo $_POST['categoryRecordBottomBorderOnColor'];?>" />
		      <script>
jQuery('#categoryRecordBottomBorderOnColor').ColorPicker({
	onSubmit: function(hsb, hex, rgb, el) {
		jQuery(el).val(hex);
		jQuery(el).css("background-color",'#'+hex);
		jQuery(el).ColorPickerHide();
	},
	onBeforeShow: function () {
		jQuery(this).ColorPickerSetColor(this.value);
	}
})
.bind('keyup', function(){
	jQuery(this).ColorPickerSetColor(this.value);
});
              </script></td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Category Record Text Off Color</td>
		    <td align="left" valign="middle"><input name="categoryRecordTextOffColor" type="text" size="25" id="categoryRecordTextOffColor" value="<?php echo $_POST['categoryRecordTextOffColor'];?>" style="background-color:#<?php echo $_POST['categoryRecordTextOffColor'];?>" />
		      <script>
jQuery('#categoryRecordTextOffColor').ColorPicker({
	onSubmit: function(hsb, hex, rgb, el) {
		jQuery(el).val(hex);
		jQuery(el).css("background-color",'#'+hex);
		jQuery(el).ColorPickerHide();
	},
	onBeforeShow: function () {
		jQuery(this).ColorPickerSetColor(this.value);
	}
})
.bind('keyup', function(){
	jQuery(this).ColorPickerSetColor(this.value);
});
              </script></td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Category Record Text On Color</td>
		    <td align="left" valign="middle"><input name="categoryRecordTextOnColor" type="text" size="25" id="categoryRecordTextOnColor" value="<?php echo $_POST['categoryRecordTextOnColor'];?>" style="background-color:#<?php echo $_POST['categoryRecordTextOnColor'];?>" />
		      <script>
jQuery('#categoryRecordTextOnColor').ColorPicker({
	onSubmit: function(hsb, hex, rgb, el) {
		jQuery(el).val(hex);
		jQuery(el).css("background-color",'#'+hex);
		jQuery(el).ColorPickerHide();
	},
	onBeforeShow: function () {
		jQuery(this).ColorPickerSetColor(this.value);
	}
})
.bind('keyup', function(){
	jQuery(this).ColorPickerSetColor(this.value);
});
              </script></td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">&nbsp;</td>
		    <td align="left" valign="middle">&nbsp;</td>
	      </tr>
		  <tr>
		    <td colspan="2" align="center" valign="top" class="lbg_regGray">- Selected Category -</td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Show Categories</td>
		    <td align="left" valign="middle"><select name="showCategs" id="showCategs">
              <option value="true" <?php echo (($_POST['showCategs']=='true')?'selected="selected"':'')?>>true</option>
              <option value="false" <?php echo (($_POST['showCategs']=='false')?'selected="selected"':'')?>>false</option>
            </select></td>
	   </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">First Selected Category</td>
		    <td align="left" valign="middle">
            <?php foreach ( $result as $row )
				{
					$row=universal_video_player_unstrip_array($row); ?>
				<p><input id="firstcateg" name="firstcateg" type="radio" <?php echo ($row['id']==$_POST['firstCateg'])?'checked="checked"':'';?> value="<?php echo $row['id'];?>" />	<?php echo $row['categ'];?></p>
				<?php }	?>
            </td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Selected Categ Background Color</td>
		    <td align="left" valign="middle"><input name="selectedCategBg" type="text" size="25" id="selectedCategBg" value="<?php echo $_POST['selectedCategBg'];?>" style="background-color:#<?php echo $_POST['selectedCategBg'];?>" />
		      <script>
jQuery('#selectedCategBg').ColorPicker({
	onSubmit: function(hsb, hex, rgb, el) {
		jQuery(el).val(hex);
		jQuery(el).css("background-color",'#'+hex);
		jQuery(el).ColorPickerHide();
	},
	onBeforeShow: function () {
		jQuery(this).ColorPickerSetColor(this.value);
	}
})
.bind('keyup', function(){
	jQuery(this).ColorPickerSetColor(this.value);
});
              </script></td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Selected Categ Off Color</td>
		    <td align="left" valign="middle"><input name="selectedCategOffColor" type="text" size="25" id="selectedCategOffColor" value="<?php echo $_POST['selectedCategOffColor'];?>" style="background-color:#<?php echo $_POST['selectedCategOffColor'];?>" />
		      <script>
jQuery('#selectedCategOffColor').ColorPicker({
	onSubmit: function(hsb, hex, rgb, el) {
		jQuery(el).val(hex);
		jQuery(el).css("background-color",'#'+hex);
		jQuery(el).ColorPickerHide();
	},
	onBeforeShow: function () {
		jQuery(this).ColorPickerSetColor(this.value);
	}
})
.bind('keyup', function(){
	jQuery(this).ColorPickerSetColor(this.value);
});
              </script></td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Selected Categ On Color</td>
		    <td align="left" valign="middle"><input name="selectedCategOnColor" type="text" size="25" id="selectedCategOnColor" value="<?php echo $_POST['selectedCategOnColor'];?>" style="background-color:#<?php echo $_POST['selectedCategOnColor'];?>" />
		      <script>
jQuery('#selectedCategOnColor').ColorPicker({
	onSubmit: function(hsb, hex, rgb, el) {
		jQuery(el).val(hex);
		jQuery(el).css("background-color",'#'+hex);
		jQuery(el).ColorPickerHide();
	},
	onBeforeShow: function () {
		jQuery(this).ColorPickerSetColor(this.value);
	}
})
.bind('keyup', function(){
	jQuery(this).ColorPickerSetColor(this.value);
});
              </script></td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">&nbsp;</td>
		    <td align="left" valign="middle">&nbsp;</td>
	      </tr>
		  <tr>
		    <td colspan="2" align="center" valign="top" class="lbg_regGray">- Search Area -</td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Show Search Area</td>
		    <td align="left" valign="middle"><select name="showSearch" id="showSearch">
              <option value="true" <?php echo (($_POST['showSearch']=='true')?'selected="selected"':'')?>>true</option>
              <option value="false" <?php echo (($_POST['showSearch']=='false')?'selected="selected"':'')?>>false</option>
            </select></td>
	   </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Search Area Background Color</td>
		    <td align="left" valign="middle"><input name="searchAreaBg" type="text" size="25" id="searchAreaBg" value="<?php echo $_POST['searchAreaBg'];?>" style="background-color:#<?php echo $_POST['searchAreaBg'];?>" />
	        <script>
jQuery('#searchAreaBg').ColorPicker({
	onSubmit: function(hsb, hex, rgb, el) {
		jQuery(el).val(hex);
		jQuery(el).css("background-color",'#'+hex);
		jQuery(el).ColorPickerHide();
	},
	onBeforeShow: function () {
		jQuery(this).ColorPickerSetColor(this.value);
	}
})
.bind('keyup', function(){
	jQuery(this).ColorPickerSetColor(this.value);
});
              </script></td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Search Input Text</td>
		    <td align="left" valign="middle"><input name="searchInputText" type="text" size="50" id="searchInputText" value="<?php echo $_POST['searchInputText'];?>"/></td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Search Input Background Color</td>
		    <td align="left" valign="middle"><input name="searchInputBg" type="text" size="25" id="searchInputBg" value="<?php echo $_POST['searchInputBg'];?>" style="background-color:#<?php echo $_POST['searchInputBg'];?>" />
		      <script>
jQuery('#searchInputBg').ColorPicker({
	onSubmit: function(hsb, hex, rgb, el) {
		jQuery(el).val(hex);
		jQuery(el).css("background-color",'#'+hex);
		jQuery(el).ColorPickerHide();
	},
	onBeforeShow: function () {
		jQuery(this).ColorPickerSetColor(this.value);
	}
})
.bind('keyup', function(){
	jQuery(this).ColorPickerSetColor(this.value);
});
              </script></td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Search Input Border Color</td>
		    <td align="left" valign="middle"><input name="searchInputBorderColor" type="text" size="25" id="searchInputBorderColor" value="<?php echo $_POST['searchInputBorderColor'];?>" style="background-color:#<?php echo $_POST['searchInputBorderColor'];?>" />
		      <script>
jQuery('#searchInputBorderColor').ColorPicker({
	onSubmit: function(hsb, hex, rgb, el) {
		jQuery(el).val(hex);
		jQuery(el).css("background-color",'#'+hex);
		jQuery(el).ColorPickerHide();
	},
	onBeforeShow: function () {
		jQuery(this).ColorPickerSetColor(this.value);
	}
})
.bind('keyup', function(){
	jQuery(this).ColorPickerSetColor(this.value);
});
              </script></td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Search Input Text Color</td>
		    <td align="left" valign="middle"><input name="searchInputTextColor" type="text" size="25" id="searchInputTextColor" value="<?php echo $_POST['searchInputTextColor'];?>" style="background-color:#<?php echo $_POST['searchInputTextColor'];?>" />
		      <script>
jQuery('#searchInputTextColor').ColorPicker({
	onSubmit: function(hsb, hex, rgb, el) {
		jQuery(el).val(hex);
		jQuery(el).css("background-color",'#'+hex);
		jQuery(el).ColorPickerHide();
	},
	onBeforeShow: function () {
		jQuery(this).ColorPickerSetColor(this.value);
	}
})
.bind('keyup', function(){
	jQuery(this).ColorPickerSetColor(this.value);
});
              </script></td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">&nbsp;</td>
		    <td align="left" valign="middle">&nbsp;</td>
	      </tr>

      </table>
  </div>



</div>

<div style="text-align:center; padding:20px 0px 20px 0px;"><input name="Submit" type="submit" id="Submit" class="button-primary" value="Update Player Settings"></div>

</form>
</div>
