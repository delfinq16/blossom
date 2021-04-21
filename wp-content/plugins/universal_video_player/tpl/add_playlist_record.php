<script>
jQuery(document).ready(function() {

	// Uploading files

	jQuery('#upload_imgplaylist_button').click(function(event) {
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
			jQuery('#imgplaylist').val(attachment.url);
		});
		// Finally, open the modal
		file_frame.open();
	});




jQuery('#upload_mp4_button').live('click', function( event ){
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
			jQuery('#mp4').val(attachment.url);
		});
		// Finally, open the modal
		file_frame.open();
	});

jQuery('#upload_webm_button').live('click', function( event ){
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
			jQuery('#webm').val(attachment.url);
		});
		// Finally, open the modal
		file_frame.open();
	});

});
</script>




<div class="wrap">
	<div id="lbg_logo">
			<h2>Playlist for player: <span style="color:#FF0000; font-weight:bold;"><?php echo $_SESSION['xname']?> - ID #<?php echo $_SESSION['xid']?></span> - Add New</h2>
 	</div>

    <form method="POST" enctype="multipart/form-data" id="form-add-playlist-record">
	    <input name="playerid" type="hidden" value="<?php echo $_SESSION['xid']?>" />
		<table class="wp-list-table widefat fixed pages" cellspacing="0">
		  <tr>
		    <td align="left" valign="middle" width="25%">&nbsp;</td>
		    <td align="left" valign="middle" width="77%"><a href="?page=UNIVERSAL_VIDEO_PLAYER_Playlist" style="padding-left:25%;">Back to Playlist</a></td>
		  </tr>
		  <tr>
		    <td colspan="2" align="center" valign="middle">&nbsp;</td>
		  </tr>
		  <tr>
		    <td align="right" valign="middle" class="row-title">Set It First</td>
		    <td align="left" valign="top"><input name="setitfirst" type="checkbox" id="setitfirst" value="1" checked="checked" />
		      <label for="setitfirst"></label></td>
	      </tr>
		  <tr>
		    <td align="right" valign="middle" class="row-title">Title</td>
		    <td align="left" valign="top"><input name="title" type="text" size="80" id="title" value="<?php echo $_POST['title'];?>"/></td>
		  </tr>
		  <tr>
		    <td align="right" valign="middle" class="row-title">Description</td>
		    <td align="left" valign="top">
            <textarea name="desc" cols="75" rows="6"><?php echo $_POST['desc'];?></textarea>
            </td>
		  </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Category</td>
		    <td align="left" valign="top"><?php foreach ( $result as $row )
				{
					$row=universal_video_player_unstrip_array($row); ?>
				<p><input name="category[]" id="category" type="checkbox" value="<?php echo $row['id'];?>" <?php echo ( in_array($row['id'],$_POST['category']) )?'checked="checked"':''?> /> <?php echo $row['categ'];?></p>
				<?php }	?></td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Playlist Image </td>
		    <td align="left" valign="top"><input name="imgplaylist" type="text" id="imgplaylist" size="80" value="<?php echo $_POST['imgplaylist']?>" /> <input name="upload_imgplaylist_button" type="button" id="upload_imgplaylist_button" value="Upload Image" />
		      <br />
		      Enter an URL or upload an image</td>
	      </tr>
          <tr>
            <td align="right" valign="top" class="row-title">YouTube Video ID</td>
            <td align="left" valign="top"><input name="youtube" type="text" size="60" id="youtube" value="<?php echo strip_tags($_POST['youtube']);?>"/></td>
          </tr>
          <tr>
            <td align="right" valign="top" class="row-title">Vimeo Video ID</td>
            <td align="left" valign="top"><input name="vimeo" type="text" size="60" id="vimeo" value="<?php echo strip_tags($_POST['vimeo']);?>"/></td>
          </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Self Hosted/Third Party Hosted Video .MP4 file</td>
		    <td align="left" valign="top"><input name="mp4" type="text" id="mp4" size="80" value="<?php echo $_POST['mp4']?>" />
		      <input name="upload_mp4_button" type="button" id="upload_mp4_button" value="Upload File" />
		      <br />
		      Enter an URL or upload the file</td>
	      </tr>
		  <tr>
		    <td align="right" valign="top" class="row-title">Self Hosted/Third Party Hosted Video .WEBM file</td>
		    <td align="left" valign="top"><input name="webm" type="text" id="webm" size="80" value="<?php echo $_POST['webm']?>" />
		      <input name="upload_webm_button" type="button" id="upload_webm_button" value="Upload File" />
		      <br />
		      Enter an URL or upload the file</td>
	      </tr>
        <tr>
			    <td align="right" valign="top" class="row-title">Optional Start Time</td>
			    <td align="left" valign="top"><input name="startpoint" type="text" size="60" id="startpoint" value="<?php echo stripslashes($_POST['startpoint']);?>"/> HH:MM:SS</td>
		      </tr>
					<tr>
				    <td align="right" valign="top" class="row-title">Optional End Time</td>
				    <td align="left" valign="top"><input name="endpoint" type="text" size="60" id="endpoint" value="<?php echo stripslashes($_POST['endpoint']);?>"/> HH:MM:SS</td>
			      </tr>
		  <tr>
            <td align="right" valign="top" class="row-title">&nbsp;</td>
		    <td align="left" valign="top">&nbsp;</td>
	      </tr>
		  <!--<tr>
		    <td colspan="2" align="left" valign="middle">*Required fields</td>
		  </tr>-->
		  <tr>
		    <td colspan="2" align="center" valign="middle"><input name="Submit<?php echo $_POST['ord']?>" id="Submit<?php echo $_POST['ord']?>" type="submit" class="button-primary" value="Add Record"></td>
		  </tr>
		</table>
  </form>






</div>
