<div class="wrap">
	<div id="lbg_logo">
			<h2>Playlist for player: <span style="color:#FF0000; font-weight:bold;"><?php echo strip_tags($_SESSION['xname'])?> - ID #<?php echo strip_tags($_SESSION['xid'])?></span></h2>
 	</div>
  <div id="universal_video_player_and_bg_updating_witness"><img src="<?php echo plugins_url('images/ajax-loader.gif', dirname(__FILE__))?>" /> Updating...</div>
  <div id="previewDialog"><iframe id="previewDialogIframe" src="" width="100%" height="600" style="border:0;"></iframe></div>
  
<div style="text-align:center; padding:0px 0px 20px 0px;"><img src="<?php echo plugins_url('images/icons/add_icon.gif', dirname(__FILE__))?>" alt="add" align="absmiddle" /> <a href="?page=VIDEO_PLAYER_AND_VIDEO_BACKGROUND_Playlist&xmlf=add_playlist_record">Add new</a> &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; <img src="<?php echo plugins_url('images/icons/magnifier.png', dirname(__FILE__))?>" alt="add" align="absmiddle" /> <a href="javascript: void(0);" onclick="showDialogPreview(<?php echo strip_tags($_SESSION['xid'])?>)">Preview Player</a></div>
<div style="text-align:left; padding:10px 0px 10px 14px;">#Initial Order</div>


<ul id="universal_video_player_and_bg_sortable">
	<?php foreach ( $result as $row ) 
	{
		$row=universal_video_player_and_bg_unstrip_array($row); ?>
	<li class="ui-state-default cursor_move" id="<?php echo $row['id']?>">#<?php echo $row['ord']?> ---  <img src="<?php echo $row['data-bottom-thumb']?>" height="30" align="absmiddle" id="top_image_<?php echo $row['id']?>" /><div class="toogle-btn-closed" id="toogle-btn<?php echo $row['ord']?>" onclick="mytoggle('toggleable<?php echo $row['ord']?>','toogle-btn<?php echo $row['ord']?>');"></div><div class="options"><a href="javascript: void(0);" onclick="universal_video_player_and_bg_delete_entire_record(<?php echo $row['id']?>,<?php echo $row['ord']?>);" style="color:#F00;">Delete</a> &nbsp;&nbsp;|&nbsp;&nbsp; <a href="?page=VIDEO_PLAYER_AND_VIDEO_BACKGROUND_Playlist&amp;id=<?php echo strip_tags($_SESSION['xid'])?>&amp;name=<?php echo strip_tags($_SESSION['xname'])?>&amp;duplicate_id=<?php echo $row['id']?>">Duplicate</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
	<div class="toggleable" id="toggleable<?php echo $row['ord']?>">
    <form method="POST" enctype="multipart/form-data" id="form-playlist-universal_video_player_and_bg-<?php echo $row['ord']?>">
	    <input name="id" type="hidden" value="<?php echo $row['id']?>" />
        <input name="ord" type="hidden" value="<?php echo $row['ord']?>" />
		<table width="100%" cellspacing="0" class="wp-list-table widefat fixed pages" style="background-color:#FFFFFF;">
		  <tr>
		    <td align="left" valign="middle" width="25%"></td>
		    <td align="left" valign="middle" width="77%"></td>
		  </tr>
		  <tr>
		    <td colspan="2" align="center" valign="middle">&nbsp;</td>
		  </tr>
          <tr>
            <td align="right" valign="top" class="row-title">Thumbnail</td>
            <td align="left" valign="middle"><input name="data-bottom-thumb" type="text" id="data-bottom-thumb" size="100" value="<?php echo stripslashes($row['data-bottom-thumb']);?>" />
              <input name="upload_img_button_<?php echo $row['ord']?>" type="button" id="upload_img_button_universal_video_player_and_bg_<?php echo $row['ord']?>" value="Change Image" />
              <br />
              Enter an URL or upload an image</td>
            </tr>
          <tr>
        <td align="right" valign="top" class="row-title">&nbsp;</td>
        <td align="left" valign="middle"><img src="<?php echo $row['data-bottom-thumb']?>" name="data-bottom-thumb_<?php echo $row['ord']?>" id="data-bottom-thumb_<?php echo $row['ord']?>" /></td>
      </tr>
          <tr>
            <td align="right" valign="top" class="row-title">YouTube Video ID</td>
            <td align="left" valign="top"><input name="data-youtube" type="text" size="60" id="data-youtube" value="<?php echo stripslashes($row['data-youtube']);?>"/></td>
            </tr>
          <tr>
            <td align="right" valign="top" class="row-title">Vimeo Video ID</td>
            <td align="left" valign="top"><input name="data-vimeo" type="text" size="60" id="data-vimeo" value="<?php echo stripslashes($row['data-vimeo']);?>"/></td>
            </tr>
          <tr>
            <td align="right" valign="top" class="row-title">Self Hosted/Third Party Hosted Video .MP4 file</td>
            <td align="left" valign="middle"><input name="data-selfhostedMP4" type="text" id="data-selfhostedMP4" size="100" value="<?php echo stripslashes($row['data-selfhostedMP4']);?>" />
              <input name="upload_selfhostedMP4_<?php echo $row['ord']?>" type="button" id="upload_selfhostedMP4_<?php echo $row['ord']?>" value="Upload Video" />
              <br />
              Enter an URL or upload a .mp4 file<br /></td>
          </tr>
          <tr>
            <td align="right" valign="top" class="row-title">Self Hosted/Third Party Hosted Video .WEBM file</td>
            <td align="left" valign="middle"><input name="data-selfhostedWEBM" type="text" id="data-selfhostedWEBM" size="100" value="<?php echo stripslashes($row['data-selfhostedWEBM']);?>" />
              <input name="upload_selfhostedWEBM_<?php echo $row['ord']?>" type="button" id="upload_selfhostedWEBM_<?php echo $row['ord']?>" value="Upload Video" />
              <br />
              Enter an URL or upload a .webm file<br /></td>
          </tr>
          <tr>
            <td align="right" valign="top" class="row-title">Video Title (optional)</td>
            <td align="left" valign="top"><input name="data-title" type="text" size="60" id="data-title" value="<?php echo strip_tags($row['data-title']);?>"/></td>
          </tr>
          <tr>
            <td align="right" valign="top" class="row-title">Video Proportion Width<br />
              <span style="font-weight:normal; font-style:italic;">Only if is used as full-screen background. The default value, set in 'Player Settings' section, is 16</span></td>
            <td align="left" valign="top"><input name="data-videoProportionWidth" type="text" size="60" id="data-videoProportionWidth" value="<?php echo strip_tags($row['data-videoProportionWidth']);?>"/></td>
          </tr>          
		  <tr>
		    <td colspan="2" align="left" valign="middle">&nbsp;</td>
		    </tr>
		  <tr>
		    <td colspan="2" align="center" valign="middle"><input name="Submit<?php echo $row['ord']?>" id="Submit<?php echo $row['ord']?>" type="submit" class="button-primary" value="Update Playlist Record"></td>
		  </tr>
		</table>
       
            
        </form>
            <div id="ajax-message-<?php echo $row['ord']?>" class="ajax-message"></div>
    </div>
    </li>
	<?php } ?>
</ul>





</div>				