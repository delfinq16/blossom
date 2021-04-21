<script>
jQuery(document).ready(function() {
 
	// Uploading files
	
	jQuery('#upload_thumbnail_button').click(function(event) {
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
			jQuery('#data-bottom-thumb').val(attachment.url);
		});
		// Finally, open the modal
		file_frame.open();
	});
	
	


jQuery('#upload_selfhostedMP4').live('click', function( event ){
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
			jQuery('#data-selfhostedMP4').val(attachment.url);
		});
		// Finally, open the modal
		file_frame.open();
	});	

jQuery('#upload_selfhostedWEBM').live('click', function( event ){
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
			jQuery('#data-selfhostedWEBM').val(attachment.url);
		});
		// Finally, open the modal
		file_frame.open();
	});	
 
});
</script>




















<div class="wrap">
	<div id="lbg_logo">
			<h2>Playlist for player: <span style="color:#FF0000; font-weight:bold;"><?php echo strip_tags($_SESSION['xname'])?> - ID #<?php echo strip_tags($_SESSION['xid'])?></span> - Add New</h2>
 	</div>

    <form method="POST" enctype="multipart/form-data" id="form-add-playlist-record">
	    <input name="playerid" type="hidden" value="<?php echo strip_tags($_SESSION['xid'])?>" />
		<table class="wp-list-table widefat fixed pages" cellspacing="0">
		  <tr>
		    <td align="left" valign="middle" width="25%">&nbsp;</td>
		    <td align="left" valign="middle" width="77%"><a href="?page=VIDEO_PLAYER_AND_VIDEO_BACKGROUND_Playlist" style="padding-left:25%;">Back to Playlist</a></td>
		  </tr>
		  <tr>
		    <td colspan="2" align="left" valign="middle">&nbsp;</td>
	      </tr>
		  <tr>
		    <td align="right" valign="middle" class="row-title">Set It First</td>
		    <td align="left" valign="top"><input name="setitfirst" type="checkbox" id="setitfirst" value="1" checked="checked" />
		      <label for="setitfirst"></label></td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Thumbnail </td>
		    <td width="77%" align="left" valign="top"><input name="data-bottom-thumb" type="text" id="data-bottom-thumb" size="60" value="<?php echo strip_tags($_POST['data-bottom-thumb'])?>" /> <input name="upload_thumbnail_button" type="button" id="upload_thumbnail_button" value="Upload Image" />
	        <br />
	        Enter an URL or upload an image</td>
		  </tr>
          <tr>
            <td align="right" valign="top" class="row-title">YouTube Video ID</td>
            <td align="left" valign="top"><input name="data-youtube" type="text" size="60" id="data-youtube" value="<?php echo strip_tags($_POST['data-youtube']);?>"/></td>
          </tr>
          <tr>
            <td align="right" valign="top" class="row-title">Vimeo Video ID</td>
            <td align="left" valign="top"><input name="data-vimeo" type="text" size="60" id="data-vimeo" value="<?php echo strip_tags($_POST['data-vimeo']);?>"/></td>
          </tr>
          <tr>
            <td align="right" valign="top" class="row-title">Self Hosted/Third Party Hosted Video .MP4 file</td>
            <td align="left" valign="middle"><input name="data-selfhostedMP4" type="text" id="data-selfhostedMP4" size="100" value="<?php echo stripslashes($_POST['data-selfhostedMP4']);?>" />
              <input name="upload_selfhostedMP4" type="button" id="upload_selfhostedMP4" value="Upload Video" />
              <br />
              Enter an URL or upload a .mp4 file<br /></td>
          </tr>          
          <tr>
            <td align="right" valign="top" class="row-title">Self Hosted/Third Party Hosted Video .WEBM file</td>
            <td align="left" valign="middle"><input name="data-selfhostedWEBM" type="text" id="data-selfhostedWEBM" size="100" value="<?php echo stripslashes($_POST['data-selfhostedWEBM']);?>" />
              <input name="upload_selfhostedWEBM" type="button" id="upload_selfhostedWEBM" value="Upload Video" />
              <br />
              Enter an URL or upload a .webm file<br /></td>
          </tr>  
		  <tr>
		    <td align="right" valign="top" class="row-title">Video Title (optional)</td>
		    <td align="left" valign="top"><input name="data-title" type="text" size="60" id="data-title" value="<?php echo strip_tags($_POST['data-title']);?>"/></td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Video Proportion Width<br />
<span style="font-weight:normal; font-style:italic;">Only if is used as full-screen background. The default value, set in 'Player Settings' section, is 16</span></td>
		    <td align="left" valign="top"><input name="data-videoProportionWidth" type="text" size="60" id="data-videoProportionWidth" value="<?php echo strip_tags($_POST['data-videoProportionWidth']);?>"/>    </td>
		  </tr>
		  <tr>
            <td align="right" valign="top" class="row-title">&nbsp;</td>
		    <td align="left" valign="top">&nbsp;</td>
	      </tr>
		  <tr>
		    <td colspan="2" align="left" valign="middle">&nbsp;</td>
		  </tr>
		  <tr>
		    <td colspan="2" align="center" valign="middle"><input name="Submit<?php echo strip_tags($_POST['ord'])?>" id="Submit<?php echo strip_tags($_POST['ord'])?>" type="submit" class="button-primary" value="Add Record"></td>
		  </tr>
		</table>     
  </form>






</div>				