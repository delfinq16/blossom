<script>
jQuery(document).ready(function() {

	// Uploading files

	jQuery('#upload_texture_button').click(function(event) {
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
			jQuery('#texturePath').val(attachment.url);
			jQuery('#texturePath_img').attr('src',attachment.url);
		});
		// Finally, open the modal
		file_frame.open();
	});


	jQuery('#upload_fallbackImage_button').click(function(event) {
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
			jQuery('#fallbackImage').val(attachment.url);
			jQuery('#fallbackImage_img').attr('src',attachment.url);
		});
		// Finally, open the modal
		file_frame.open();
	});


	jQuery('#upload_WrapperBgImage_button').click(function(event) {
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
			jQuery('#thumbsWrapperBgImage').val(attachment.url);
			jQuery('#thumbsWrapperBgImage_img').attr('src',attachment.url);
		});
		// Finally, open the modal
		file_frame.open();
	});


});
</script>


<div class="wrap">
	<div id="lbg_logo">
			<h2>Player Settings for player: <span style="color:#FF0000; font-weight:bold;"><?php echo strip_tags($_SESSION['xname'])?> - ID #<?php echo strip_tags($_SESSION['xid'])?></span></h2>
 	</div>

    <div style="text-align:center; padding:0px 0px 20px 0px;"><img src="<?php echo plugins_url('images/icons/magnifier.png', dirname(__FILE__))?>" alt="add" align="absmiddle" /> <a href="javascript: void(0);" onclick="showDialogPreview(<?php echo strip_tags($_SESSION['xid'])?>)">Preview Player</a></div>

  <form method="POST" enctype="multipart/form-data" id="form-universal_video_player_and_bg_settings">
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

<div id="previewDialog"><iframe id="previewDialogIframe" src="" width="100%" height="600" style="border:0;"></iframe></div>

<div id="accordion">
  <h3><a href="#">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;General Settings</a></h3>
  <div style="padding:30px;">
	  <table class="wp-list-table widefat fixed pages" cellspacing="0">

		  <tr>
		    <td align="right" valign="top" class="row-title" width="30%">Player Name</td>
		    <td align="left" valign="top" width="70%"><input name="name" type="text" size="40" id="name" value="<?php echo strip_tags($_SESSION['xname']);?>"/></td>
	      </tr>
		  <tr>
            <td width="30%" align="right" valign="top" class="row-title">Player Width</td>
		    <td width="80%" align="left" valign="top"><input name="width" type="text" size="15" id="width" value="<?php echo strip_tags($_POST['width']);?>"/>
		    px &nbsp;&nbsp;&nbsp;</td>
	    </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Player Height</td>
		    <td align="left" valign="top"><input name="height" type="text" size="15" id="height" value="<?php echo strip_tags($_POST['height']);?>"/>
		    px &nbsp;&nbsp;&nbsp;&nbsp;</td>
	    </tr>
		<tr>
		    <td align="right" valign="top" class="row-title">Width 100%</td>
		    <td align="left" valign="middle"><select name="width100Proc" id="width100Proc">
              <option value="true" <?php echo (($_POST['width100Proc']=='true')?'selected="selected"':'')?>>true</option>
              <option value="false" <?php echo (($_POST['width100Proc']=='false')?'selected="selected"':'')?>>false</option>
            </select></td>
	    </tr>
		<tr>
		    <td align="right" valign="top" class="row-title">Height 100%</td>
		    <td align="left" valign="middle"><select name="height100Proc" id="height100Proc">
              <option value="true" <?php echo (($_POST['height100Proc']=='true')?'selected="selected"':'')?>>true</option>
              <option value="false" <?php echo (($_POST['height100Proc']=='false')?'selected="selected"':'')?>>false</option>
            </select></td>
	    </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Set as Background</td>
		    <td align="left" valign="middle"><select name="setAsBg" id="setAsBg">
              <option value="true" <?php echo (($_POST['setAsBg']=='true')?'selected="selected"':'')?>>true</option>
              <option value="false" <?php echo (($_POST['setAsBg']=='false')?'selected="selected"':'')?>>false</option>
            </select></td>
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
		    <td align="right" valign="top" class="row-title">Loop</td>
		    <td align="left" valign="middle"><select name="loop" id="loop">
              <option value="true" <?php echo (($_POST['loop']=='true')?'selected="selected"':'')?>>true</option>
              <option value="false" <?php echo (($_POST['loop']=='false')?'selected="selected"':'')?>>false</option>
            </select></td>
	    </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Randomize Videos</td>
		    <td align="left" valign="middle"><select name="randomizeVideos" id="randomizeVideos">
              <option value="true" <?php echo (($_POST['randomizeVideos']=='true')?'selected="selected"':'')?>>true</option>
              <option value="false" <?php echo (($_POST['randomizeVideos']=='false')?'selected="selected"':'')?>>false</option>
            </select></td>
	    </tr>
        <tr>
		    <td align="right" valign="top" class="row-title">Show Tooltip</td>
		    <td align="left" valign="middle"><select name="showTooltip" id="showTooltip">
              <option value="true" <?php echo (($_POST['showTooltip']=='true')?'selected="selected"':'')?>>true</option>
              <option value="false" <?php echo (($_POST['showTooltip']=='false')?'selected="selected"':'')?>>false</option>
            </select></td>
	    </tr>
		  <tr>
            <td width="30%" align="right" valign="top" class="row-title">First Video To Be Loaded</td>
		    <td width="80%" align="left" valign="top"><input name="firstImg" type="text" size="15" id="firstImg" value="<?php echo strip_tags($_POST['firstImg']);?>"/>
		      (the playlist	video	number. Counting starts from 0)  &nbsp;&nbsp;&nbsp;</td>
	    </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Auto-Play First Video</td>
		    <td align="left" valign="middle"><select name="autoPlayFirstVideo" id="autoPlayFirstVideo">
              <option value="true" <?php echo (($_POST['autoPlayFirstVideo']=='true')?'selected="selected"':'')?>>true</option>
              <option value="false" <?php echo (($_POST['autoPlayFirstVideo']=='false')?'selected="selected"':'')?>>false</option>
            </select>
				</td>
	      </tr>
			<tr>
		    <td align="right" valign="top" class="row-title">Auto-Play On Mobile</td>
		    <td align="left" valign="middle"><select name="autoPlayOnMobile" id="autoPlayOnMobile">
              <option value="true" <?php echo (($_POST['autoPlayOnMobile']=='true')?'selected="selected"':'')?>>true</option>
              <option value="false" <?php echo (($_POST['autoPlayOnMobile']=='false')?'selected="selected"':'')?>>false</option>
              </select>
							<p><i>- for the moment only IOS allows autoplay and only if the video is muted. When you set autoPlayOnMobile:true, the video will mute automatically for mobile devices.<br />
							- this option is only available for self-hosted videos. YouTube & Vimeo doesn't have this option for mobile devices, yet.</i></p>
					</td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Border Width</td>
		    <td align="left" valign="middle"><input name="borderWidth" type="text" size="15" id="borderWidth" value="<?php echo strip_tags($_POST['borderWidth']);?>"/>
		      px</td>
	      </tr>

		  <tr>
		    <td align="right" valign="top" class="row-title">Border Color</td>
		    <td align="left" valign="middle"><input name="borderColor" type="text" size="25" id="borderColor" value="<?php echo strip_tags($_POST['borderColor']);?>" style="background-color:#<?php echo strip_tags($_POST['borderColor']);?>" />
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
		    <td align="right" valign="top" class="row-title">Initial Volume Value</td>
		    <td align="left" valign="middle"><script>
	jQuery(function() {
		jQuery( "#initialVolume-slider-range-min" ).slider({
			range: "min",
			value: <?php echo $_POST['initialVolume'];?>,
			min: 0,
			max: 1.05,
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
		    <td align="right" valign="top" class="row-title">Video Proportion Width</td>
		    <td align="left" valign="middle"><input name="videoProportionWidth" type="text" size="15" id="videoProportionWidth" value="<?php echo strip_tags($_POST['videoProportionWidth']);?>"/>
	        <br />
	        <em>The video proportion is considered to be 16/9. If your video has another   proportion, you can set a different value here. The height proportion   will always be 9</em></td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">&nbsp;</td>
		    <td align="left" valign="middle">&nbsp;</td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Texture Path</td>
		    <td align="left" valign="middle"><input name="texturePath" type="text" id="texturePath" size="60" value="<?php echo strip_tags($_POST['texturePath'])?>" /> <input name="upload_texture_button" type="button" id="upload_texture_button" value="Upload Image" />
	        <br />
	        Enter an URL or upload an image<br />
            <img src="<?php echo strip_tags($_POST['texturePath'])?>" id="texturePath_img" /></td>

	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Fallback Image  For Mobile Devices<br />
		      <i>(Optional parameter and used only when 'Set as Background' - true. If an image will be defined, this image will appear on mobile devices instead of the player. We recommend large images, like 1920x1200 because the image will used as a centered background.)</i></td>
		    <td align="left" valign="middle"><input name="fallbackImage" type="text" id="fallbackImage" size="60" value="<?php echo strip_tags($_POST['fallbackImage'])?>" /> <input name="upload_texture_button" type="button" id="upload_fallbackImage_button" value="Upload Image" />
	        <br />
	        Enter an URL or upload an image<br />
            <img src="<?php echo strip_tags($_POST['fallbackImage'])?>" name="fallbackImage_img" width="<?php echo ($_POST['fallbackImage'])?'400':'';?>" id="fallbackImage_img" /></td>

	      </tr>

      </table>
  </div>


  <h3><a href="#">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Controllers Settings</a></h3>
  <div style="padding:30px;">
	  <table class="wp-list-table widefat fixed pages" cellspacing="0">
        <tr>
		    <td align="right" valign="top" class="row-title" width="30%">Show Video Controls</td>
		    <td align="left" valign="middle" width="80%"><select name="showVideoControls" id="showVideoControls">
              <option value="true" <?php echo (($_POST['showVideoControls']=='true')?'selected="selected"':'')?>>true</option>
              <option value="false" <?php echo (($_POST['showVideoControls']=='false')?'selected="selected"':'')?>>false</option>
            </select> <i>(not available for Vimeo)</i></td>
	    </tr>
        <tr>
		    <td width="30%" align="right" valign="top" class="row-title">Show Bottom Navigation</td>
		    <td align="left" valign="middle"><select name="showBottomNav" id="autoPlay">
              <option value="true" <?php echo (($_POST['showBottomNav']=='true')?'selected="selected"':'')?>>true</option>
              <option value="false" <?php echo (($_POST['showBottomNav']=='false')?'selected="selected"':'')?>>false</option>
            </select></td>
	    </tr>
        <tr>
		    <td align="right" valign="top" class="row-title">Show Bottom Navigation On Init</td>
		    <td align="left" valign="middle"><select name="showOnInitBottomNav" id="showOnInitBottomNav">
              <option value="true" <?php echo (($_POST['showOnInitBottomNav']=='true')?'selected="selected"':'')?>>true</option>
              <option value="false" <?php echo (($_POST['showOnInitBottomNav']=='false')?'selected="selected"':'')?>>false</option>
            </select></td>
	    </tr>
        <tr>
		    <td align="right" valign="top" class="row-title">Auto Hide Bottom Navigation</td>
		    <td align="left" valign="middle"><select name="autoHideBottomNav" id="autoHideBottomNav">
              <option value="true" <?php echo (($_POST['autoHideBottomNav']=='true')?'selected="selected"':'')?>>true</option>
              <option value="false" <?php echo (($_POST['autoHideBottomNav']=='false')?'selected="selected"':'')?>>false</option>
            </select></td>
	    </tr>
        <tr>
          <td align="right" valign="top" class="row-title">Bottom Navigation Horizontal Position</td>
          <td align="left" valign="middle"><select name="bottomNavPos" id="bottomNavPos">
              <option value="left" <?php echo (($_POST['bottomNavPos']=='left')?'selected="selected"':'')?>>left</option>
              <option value="center" <?php echo (($_POST['bottomNavPos']=='center')?'selected="selected"':'')?>>center</option>
              <option value="right" <?php echo (($_POST['bottomNavPos']=='right')?'selected="selected"':'')?>>right</option>
            </select></td>
        </tr>

        <tr>
		    <td align="right" valign="top" class="row-title">Bottom Navigation - margin-top</td>
		    <td align="left" valign="middle"><input name="thumbsWrapperMarginTop" type="text" size="15" id="thumbsWrapperMarginTop" value="<?php echo strip_tags($_POST['thumbsWrapperMarginTop']);?>"/>
		      px</td>
	    </tr>
        <tr>
          <td align="right" valign="top" class="row-title">Bottom Navigation Lateral Margin</td>
          <td width="80%" align="left" valign="top"><input name="bottomNavLateralMargin" type="text" size="15" id="bottomNavLateralMargin" value="<?php echo strip_tags($_POST['bottomNavLateralMargin']);?>"/> px</td>
        </tr>
        <tr>
          <td align="right" valign="top" class="row-title">Bottom Navigation Minimal Height</td>
          <td align="left" valign="middle"><input name="thumbsWrapperMinHeight" type="text" size="15" id="thumbsWrapperMinHeight" value="<?php echo strip_tags($_POST['thumbsWrapperMinHeight']);?>"/> px</td>
        </tr>
        <tr>
          <td align="right" valign="top" class="row-title">Number Of Thumbs Per Screen</td>
          <td align="left" valign="middle"><input name="numberOfThumbsPerScreen" type="text" size="15" id="numberOfThumbsPerScreen" value="<?php echo strip_tags($_POST['numberOfThumbsPerScreen']);?>"/>
          <i>If you set it to 0, it will be calculated automatically. (parameter available only for 'thumbs' skin)</i></td>
        </tr>
        <tr>
          <td align="right" valign="top" class="row-title">Thumbs Wrapper Top Padding</td>
          <td align="left" valign="middle"><input name="thumbsWrapperTopPadding" type="text" size="15" id="thumbsWrapperTopPadding" value="<?php echo strip_tags($_POST['thumbsWrapperTopPadding']);?>"/> px</td>
        </tr>
        <tr>
          <td align="right" valign="top" class="row-title">Thumbs Wrapper Bottom Padding</td>
          <td align="left" valign="middle"><input name="thumbsWrapperBottomPadding" type="text" size="15" id="thumbsWrapperBottomPadding" value="<?php echo strip_tags($_POST['thumbsWrapperBottomPadding']);?>"/> px</td>
        </tr>
        <tr>
          <td align="right" valign="top" class="row-title">Thumbs Wrapper Background (hexa)</td>
          <td align="left" valign="middle"><input name="thumbsWrapperBgHexa" type="text" size="25" id="thumbsWrapperBgHexa" value="<?php echo strip_tags($_POST['thumbsWrapperBgHexa']);?>" style="background-color:#<?php echo strip_tags($_POST['thumbsWrapperBgHexa']);?>" />
                <script>
jQuery('#thumbsWrapperBgHexa').ColorPicker({
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
          <td align="right" valign="top" class="row-title">Thumbs Wrapper Background (Image)</td>
          <td align="left" valign="middle"><p>
            <input name="thumbsWrapperBgImage" type="text" id="thumbsWrapperBgImage" size="60" value="<?php echo strip_tags($_POST['thumbsWrapperBgImage'])?>" />
            <input name="upload_WrapperBgImage_button" type="button" id="upload_WrapperBgImage_button" value="Upload Image" />
            <br />
            Enter an URL or upload an image.<br />
            If	you'll load an image, '<span class="row-title">Thumbs Wrapper Bg (hexa)</span>' will be ignored<br />
            </p>
            <img src="<?php echo strip_tags($_POST['thumbsWrapperBgImage'])?>" id="thumbsWrapperBgImage_img" />
            </td>
        </tr>
        <tr>
          <td align="right" valign="top" class="row-title">Thumbs Border Color ON</td>
          <td align="left" valign="middle"><input name="thumbsBorderColorON" type="text" size="25" id="thumbsBorderColorON" value="<?php echo strip_tags($_POST['thumbsBorderColorON']);?>" style="background-color:#<?php echo strip_tags($_POST['thumbsBorderColorON']);?>" />
              <script>
jQuery('#thumbsBorderColorON').ColorPicker({
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
              </script>          </td>
        </tr>
        <tr>
          <td align="right" valign="top" class="row-title">Thumbs Border Color OFF</td>
          <td align="left" valign="middle"><input name="thumbsBorderColorOFF" type="text" size="25" id="thumbsBorderColorOFF" value="<?php echo strip_tags($_POST['thumbsBorderColorOFF']);?>" style="background-color:#<?php echo strip_tags($_POST['thumbsBorderColorOFF']);?>" />
              <script>
jQuery('#thumbsBorderColorOFF').ColorPicker({
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
              </script>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top" class="row-title">Thumbs Background OFF Color</td>
          <td align="left" valign="middle"><input name="thumbsBgOffColor" type="text" size="25" id="thumbsBgOffColor" value="<?php echo strip_tags($_POST['thumbsBgOffColor']);?>" style="background-color:#<?php echo strip_tags($_POST['thumbsBgOffColor']);?>" />
              <script>
jQuery('#thumbsBgOffColor').ColorPicker({
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
              </script>
         </td>
        </tr>
        <tr>
          <td align="right" valign="top" class="row-title">Thumbs Background OFF Img Opacity</td>
          <td align="left" valign="middle"><script>
	jQuery(function() {
		jQuery( "#thumbsBgOffImgOpacity-slider-range-min" ).slider({
			range: "min",
			value: <?php echo $_POST['thumbsBgOffImgOpacity'];?>,
			min: 0,
			max: 100,
			step: 1,
			slide: function( event, ui ) {
				jQuery( "#thumbsBgOffImgOpacity" ).val(ui.value );
			}
		});
		jQuery( "#thumbsBgOffImgOpacity" ).val( jQuery( "#thumbsBgOffImgOpacity-slider-range-min" ).slider( "value" ) );
	});
	        </script>
                <div id="thumbsBgOffImgOpacity-slider-range-min" class="inlinefloatleft" style="width:200px;"></div>
		      <div class="inlinefloatleft" style="padding-left:20px;">
		        <input name="thumbsBgOffImgOpacity" type="text" size="10" id="thumbsBgOffImgOpacity" style="border:0; color:#000000; font-weight:bold;"/>
	          </div></td>
        </tr>
        <tr>
          <td align="right" valign="top" class="row-title">Thumbs Background ON Color</td>
          <td align="left" valign="middle"><input name="thumbsBgOnColor" type="text" size="25" id="thumbsBgOnColor" value="<?php echo strip_tags($_POST['thumbsBgOnColor']);?>" style="background-color:#<?php echo strip_tags($_POST['thumbsBgOnColor']);?>" />
              <script>
jQuery('#thumbsBgOnColor').ColorPicker({
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
              </script>
         </td>
        </tr>
        <tr>
          <td align="right" valign="top" class="row-title">Thumbs Background ON Img Opacity</td>
          <td align="left" valign="middle"><script>
	jQuery(function() {
		jQuery( "#thumbsBgOnImgOpacity-slider-range-min" ).slider({
			range: "min",
			value: <?php echo $_POST['thumbsBgOnImgOpacity'];?>,
			min: 0,
			max: 100,
			step: 1,
			slide: function( event, ui ) {
				jQuery( "#thumbsBgOnImgOpacity" ).val(ui.value );
			}
		});
		jQuery( "#thumbsBgOnImgOpacity" ).val( jQuery( "#thumbsBgOnImgOpacity-slider-range-min" ).slider( "value" ) );
	});
	        </script>
                <div id="thumbsBgOnImgOpacity-slider-range-min" class="inlinefloatleft" style="width:200px;"></div>
		      <div class="inlinefloatleft" style="padding-left:20px;">
		        <input name="thumbsBgOnImgOpacity" type="text" size="10" id="thumbsBgOnImgOpacity" style="border:0; color:#000000; font-weight:bold;"/>
	          </div></td>
        </tr>
        <tr>
          <td align="right" valign="top" class="row-title">Thumb Width</td>
          <td align="left" valign="middle"><input name="origThumbImgW" type="text" size="15" id="origThumbImgW" value="<?php echo strip_tags($_POST['origThumbImgW']);?>"/> px</td>
        </tr>
        <tr>
          <td align="right" valign="top" class="row-title">Thumb Height</td>
          <td align="left" valign="middle"><input name="origThumbImgH" type="text" size="15" id="origThumbImgH" value="<?php echo strip_tags($_POST['origThumbImgH']);?>"/> px</td>
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
